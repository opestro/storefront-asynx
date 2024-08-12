import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { cities } from "../cities";
import AsynxWave from "../widgets/asynx_wave";
import Thanks from "./thanks";
import { customAlphabet } from 'nanoid'
import Markdown from "react-markdown";
import { TypeAnimation } from "react-type-animation"
import { LocalOrder, getProductPriceAfterDiscount, getProductQuantity, calculateLocalOrderTotal, getProductDiscountPercentage, getProductPriceWithoutVariantsDiscount } from "../pishop/logic";
import { LocalOrderItem, ShippingInfo } from "../pishop/models";
import RenderVariantGroup from "../components/variants";
import { OrderEntity, ProductEntity, StoreEntity, VariantOptionType } from "feeef/src/core/core";
// import { setAdvancedMatching } from "../main";
import { ShippingForm } from "../components/shipping_form";
import { IconShoppingBag } from "@tabler/icons-react";
import { SuperSEO } from "react-super-seo";
import { pageView, track, tryFixPhoneNumber, useInViewport, validatePhoneNumber } from "../pishop/helpers";
import { ff, getCurrentUrl } from "../feeef";
export const generateOrderId = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12)

var _cachedOrders: LocalOrder[] = [];
export function getOrders() {
    _cachedOrders = JSON.parse(localStorage.orders || '[]')
}
export function saveOrder(order: LocalOrder) {
    _cachedOrders.push(order)
    localStorage.orders = JSON.stringify(_cachedOrders);
}



// ProductPage resposible for load the product
function ProductPage() {
    let { product, store } = useLoaderData() as {
        product: ProductEntity,
        store: StoreEntity
    };
    let pathname = useLocation().pathname
    return <>
        <SuperSEO
            title={store.name + " | " + (product.name || "") + (!!product.title? " - " + product.title: "")}
            description={product.description || undefined}
            lang="ar"
            openGraph={{
                ogTitle: store.title + "|" + (product.name || ""),
                ogDescription: product.description || undefined,
                ogUrl: getCurrentUrl(pathname),
                ogImage: {
                    ogImage: product.media[0],
                    ogImageAlt: product.name || product.title || store.title || "",
                },
                ogSiteName: store.name || store.title || undefined,
                ogType: "product",
                ogLocale: "ar_AR",
                ogDeterminer: "auto",
                ogLocaleAlternate: ["en_US"],
            }}
        >
        </SuperSEO>
        <Product store={store} product={product}></Product>
    </>
}


function Product({ store, product }: { store: StoreEntity, product: ProductEntity }) {
    let location = useLocation()
    const [loading, setLoading] = useState(false);
    const [orderId] = useState(generateOrderId());

    useEffect(() => {
        // set the title to the product name (only first time)
        document.title = product?.name || store.title || "";
    }, [])

    // view page ReactPixel
    useEffect(() => {
        pageView();
        // ViewContent
        // ReactPixel.track('ViewContent', {
        //     content_name: product?.name,
        //     content_category: 'cloth',
        //     content_ids: [product?.id, product?.slug],
        //     content_type: 'product',
        //     value: getPriceWithoutVariantsDiscount(),
        //     currency: 'DZD'
        // });
        // on scrol
    }, [])


    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

    const [sentOrder, setSentOrder] = useState<OrderEntity | null>(null);

    // isSendOrderButtonInView
    const isInView = useInViewport();
    const sendOrderButtonRef = isInView.ref
    const isSendOrderButtonInView = isInView.isInViewport

    const [item, setItem] = useState<LocalOrderItem>({
        product: product!,
        quantity: 1,
        variants: []
    });

    const [shipping, setShipping] = useState<ShippingInfo>({
        name: "",
        phone: "",
        doorShipping: true,
        address: {
            street: "",
            city: "01",
            location: {
                geohash: "",
                lat: 0,
                long: 0,
            },
            state: "16",
            zip: "",
        }
    });


    function clearOrder() {
        setSentOrder(null)
        item.quantity = 1
    }

    function getPriceWithoutVariantsDiscount(): number {
        return getProductPriceWithoutVariantsDiscount(
            product!,
            item.variants
        );
    }
    function getPriceAfterDiscount(): number {
        return getProductPriceAfterDiscount(
            product!,
            item.variants
        );
    }

    function getQuantity(): number {
        return getProductQuantity(
            product!,
            item.variants
        );
    }

    function updateShippingWilaya(stateCode: string) {
        if (stateCode === "") return;
        var index = parseInt(stateCode) - 1;
        shipping!.address.state = stateCode;
        var baladiyat = cities[index];
        shipping!.address.city = baladiyat?.length ? baladiyat?.[0] : ""

        setShipping(Object.assign({}, shipping));
        if (!!shipping.name && !!shipping.phone && !localStorage.addedToCard) {
            localStorage.addedToCard = "true";
            track('AddToCart', {
                contents: [
                    { id: product?.id, quantity: getQuantity() }
                ],
                content_type: 'product',
                value: getPriceWithoutVariantsDiscount(),
                currency: 'DZD',
            })
        }
    }

    useEffect(() => {
        updateShippingWilaya(shipping!.address.state);
    }, [])

    function getTotal() {
        var localOrder: LocalOrder = {
            id: orderId,
            shipping: shipping,
            items: [item],
            paymentMethod: "cash",
            ref: "",
            shippingMethod: "standard",
        }
        return calculateLocalOrderTotal({
            shippingMethod: product.shippingMethod,
            store,
            localOrder,
            withShipping: true,
        });
    }

    function getDiscount() {
        return (100 - getProductDiscountPercentage(product!, item.variants) * 100).toFixed(1);
    }

    function scrollToShippingForm() {
        var el = document.getElementById("order-form");
        el?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        el?.classList.add("pulse");
        setTimeout(() => {
            el?.classList.remove("pulse");
        }, 3000);

    }

    async function sendOrder(status: "draft" | "pending" = "pending") {
        console.log("sending...");
        var validationError = validatePhoneNumber(tryFixPhoneNumber(shipping.phone));
        if (validationError) {
            // alert(validationError);
            console.log("invalid phone number");
            return;
        }
        shipping.phone = tryFixPhoneNumber(shipping.phone);
        var localStorageKey = `order:${status}-${product.id}`;
        // allow send orders max 1/hour
        var olderOrder = localStorage.getItem(localStorageKey);
        if (olderOrder) {
            var orderData = JSON.parse(olderOrder) as OrderEntity;
            var currentTime = new Date().getTime();
            var orderTime = new Date(orderData.createdAt).getTime();
            if (currentTime - orderTime < 3600000) {
                // delay 1 s
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setSentOrder(orderData);
                return;
            }
        }

        if (status == 'draft' && olderOrder) {
            console.log("draft order already exists");
            return;
        }

        setLoading(status == 'pending');

        // prepare data:
        // fbc?: string | null
        // fbp?: string | null
        // eventSourceUrl?: string | null
        console.log("xxx...");

        let urlParams = new URLSearchParams(location.search);
        let fbc = urlParams.get('fbclid');
        let fbp = urlParams.get('_fbp') ?? document.cookie.split(';').find(c => c.trim().startsWith('_fbp'))?.split('=')[1];
        let eventSourceUrl = getCurrentUrl(location.pathname);


        var data: any = {
            customerName: shipping.name,
            customerPhone: shipping.phone,
            shippingAddress: shipping.address.street,
            shippingCity: shipping.address.city,
            shippingState: shipping.address.state,
            status: status,
            storeId: store.id,
            items: [{
                productId: product.id,
                quantity: item.quantity,
                variantPath: item.variants.join("/"),
            }],
            metadata: {
                metaPixel: {
                    fbc: fbc,
                    fbp: fbp,
                    eventSourceUrl: eventSourceUrl,
                }
            }
        }
        if (sentOrder?.id) {
            data.id = sentOrder.id;
            data.metadata.customerPhones = data.metadata.customerPhones || [];
            data.metadata.customerPhones.push(shipping.phone);
        }
        var response = await ff.orders.send(data);
        localStorage.setItem(localStorageKey, JSON.stringify(response));
        setSentOrder(response);
        setLoading(false);


        var userData = {
            country: "DZ",
            st: shipping.address.state,
            ct: shipping.address.city,
            ph: shipping.phone,
            fn: shipping.name,
        }
        // setAdvancedMatching(userData as any);
        var eventData = {
            content_name: product?.name,
            content_type: 'product',
            content_ids: [product?.id],
            contents: [
                {
                    id: product?.id,
                    quantity: item.quantity,
                    item_price: getPriceWithoutVariantsDiscount(),
                }
            ],
            currency: 'DZD',
            num_items: 1,
            value: getTotal() ?? 0,
            delivery_category: shipping.doorShipping ? "home_delivery" : "in_store",
            order_id: response.id,
            // content_category
        }

        // if draft ReactPixel checkout else purchase
        if (status == 'draft') {
            // InitiateCheckout
            track('InitiateCheckout', eventData);
        } else {
            track('Purchase', eventData);
        }
        // Purchase
        // ReactPixel.track('Purchase', eventData);
        console.log("order sent", response);
    }


    function SendOrderButton({
        id,
        ref
    }: {
        id: string
        ref?: React.LegacyRef<HTMLButtonElement> | undefined
    }): JSX.Element {
        return <button
            ref={ref}
            id={"send-order-btn-" + id}
            onClick={(e) => {
                e.preventDefault();
                sendOrder("pending")
            }}
            type="submit" className="relative w-full text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ">
            <AsynxWave
                color="white"
                width="100%"
                height="100%"
                className={"absolute start-0 top-0 bottom-0 h-full aspect-square"}
                padding={0} />
            <div className="flex items-center justify-center" >
                {/* أرسل طلبك الآن */}
                <TypeAnimation cursor={true} sequence={[
                    "شراء الآن",
                    2500,
                    "سنتصل بك لتأكيد الطلبية",
                    500,
                    "ماذا تنتظر؟",
                    500,
                    "إظغط هنا لإرسال الطلب",
                    500,
                    "إظغط هنا لإرسال الطلب...",
                    500,
                ]}
                    repeat={Infinity}
                    speed={50}
                />
                <span dir="ltr" className="mx-2 text-primary rounded-full px-2" style={{ backgroundColor: "var(--on-p)" }}>
                    x{item.quantity}
                </span>
            </div>
            <div className="text-[12px] font-light">المبلغ الكلي مع الشحن:
                {
                    shipping?.address.state ?
                        <b className="px-2 font-extrabold">{getTotal()} دج</b>
                        :
                        <b className="px-2 font-extrabold">)اختر الولاية(</b>
                }
            </div>
            {/* the basket icon */}
            <IconShoppingBag size={34} className="absolute end-3 top-0 bottom-0 m-auto" />
        </button>
    }

    return (
        <div className="relative">
            {/* show fixed in the button SendOrderButton(id=dynamic), it shown only when SendOrderButton(id=fixed) not in view */}
            {
                <div
                    className="fixed text-center bottom-[10px] right-[10px] left-[10px] z-20"

                    style={
                        {
                            "--on-p-s": 'var(--on-p)',
                            "--p-s": 'var(--p)',
                            transition: "all 0.5s",
                            transform: isSendOrderButtonInView ?
                                "translateY(100%)" : "translateY(0)",
                            opacity: isSendOrderButtonInView ? 0 : 1,
                            visibility: isSendOrderButtonInView ? "hidden" : "visible",

                        } as React.CSSProperties
                    }
                >
                    <div
                        className="pulse rounded-lg"
                        style={
                            {
                                maxWidth: '500px',
                                margin: 'auto',
                            } as React.CSSProperties
                        }
                    >

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToShippingForm();
                            }}
                            type="submit" className="h-12 relative w-full text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ">
                            <AsynxWave
                                color="white"
                                width="100%"
                                height="100%"
                                className={"absolute start-0 top-0 bottom-0 h-full aspect-square"}
                                padding={0} />
                            <div className="flex items-center justify-center" >
                                {/* أرسل طلبك الآن */}
                                <TypeAnimation cursor={true} sequence={[
                                    "شراء الآن",
                                    2500,
                                    "سنتصل بك لتأكيد الطلبية",
                                    500,
                                    "ماذا تنتظر؟",
                                    500,
                                    "إظغط هنا لإرسال الطلب",
                                    500,
                                    "إظغط هنا لإرسال الطلب...",
                                    500,
                                ]}
                                    repeat={Infinity}
                                    speed={50}
                                />
                            </div>
                            {/* the basket icon */}
                            <IconShoppingBag size={34} className="absolute end-3 top-0 bottom-0 m-auto" />
                        </button>
                    </div>
                </div>
            }
            {/* <h1>{isSendOrderButtonInView}</h1> */}
            {
                loading &&
                <div className="fixed inset-0 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 backdrop-blur-lg">
                    <AsynxWave
                        className='opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-3xl'
                        height="100%"
                        width="100%"
                    ></AsynxWave>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* <div className="pulse w-20 h-20 bg-gray-200 rounded-full"></div> */}
                        <AsynxWave
                            height="50"
                            width="50"
                        ></AsynxWave>

                        <div className="h-2"></div>
                        <TypeAnimation cursor={false} sequence={[
                            "جاري التحميل",
                            500,
                            "يرجى الإنتظار",
                            1000,
                            "العملية قيد التقدم",
                            300,
                        ]}
                            repeat={Infinity}
                            speed={10}
                            className="h-5 text-sm text-gray-600 dark:text-gray-400 font-light"
                        />
                    </div>
                </div>
            }

            {
                sentOrder && sentOrder.status == "pending" &&
                <div className="overflow-auto flex items-center justify-center fixed inset-0 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 backdrop-blur-lg">
                    <AsynxWave
                        className='opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-md'
                        height="100%"
                        width="100%"
                    ></AsynxWave>
                    <Thanks store={store} order={sentOrder} onDone={clearOrder}></Thanks>
                </div>
            }
            <div className="container mx-auto pt-4 ">
                {/* row, 1 col for images, other for detail; all sticky */}
                <div className="flex flex-col md:flex-row">
                    {/* images */}

                    <StickyBox offsetTop={
                        78
                        + (store?.banner?.enabled ? 40 : 0)
                    } className="top-0 md:top-[78px]  h-full w-full md:w-1/2">
                        {/* image */}
                        <div className="relative overflow-hidden">
                            {/* <img src={product?.media[selectedMediaIndex]?.url} className="rounded-xl w-full aspect-square object-cover" /> */}
                            <div
                                id="slider"
                                className="rounded-xl w-full aspect-square overflow-x-scroll flex" style={{
                                    scrollSnapType: "x mandatory",
                                    WebkitOverflowScrolling: "touch",
                                    scrollBehavior: "smooth",
                                }}
                                // when scroll update selected media index
                                onScroll={(e) => {
                                    var el = e.target as HTMLDivElement;
                                    var index = Math.abs(Math.round(el.scrollLeft / el.clientWidth));
                                    setSelectedMediaIndex(index);
                                }}>
                                {product?.media.map((media, index) => (
                                    <img
                                        id={`pimage-${index}`}
                                        key={index} src={media} className={
                                            " h-full object-cover aspect-square"
                                        }
                                        style={{
                                            scrollSnapAlign: "center",
                                            scrollSnapStop: "always",
                                        }}
                                        alt={product.name!}
                                    />
                                ))}
                            </div>



                            {/* image selector */}
                            <div className="absolute bottom-0 w-full flex justify-center p-2 items-end">
                                {product?.media.map((media, index) => (
                                    <a
                                        key={index}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            var el = document.getElementById(`pimage-${index}`)
                                            // scroll to element ut only in x
                                            el?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
                                        }}
                                        href={`#pimage-${index}`}
                                    >
                                        <button key={index} onClick={() => setSelectedMediaIndex(index)} className={
                                            (selectedMediaIndex === index ?
                                                "border-primary border-[2px] w-14" : " w-11 border-[2px] dark:border-white border-white ") +
                                            " mx-1  shadow-xl aspect-square rounded-xl bg-white bg-opacity-100 hover:bg-opacity-100 focus:bg-opacity-100 overflow-hidden transition-all duration-500 ease-in-out"}>
                                            <img src={media} className="overflow-hidden w-full h-full object-cover "
                                                alt={"صورة " + product?.name + " " + index}
                                            />
                                        </button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </StickyBox>
                    {/* detail */}
                    <div className="w-4"></div>
                    <div className="w-full md:w-1/2 z-10">
                        <div className="px-4 pt-5 product-gradient">
                            <div className="flex items-center">
                                <h1 className="text-3xl font-semibold">{product?.name}</h1>
                                {
                                    !!product?.discount &&
                                    <span dir="ltr" className="mx-2 bg-primary text-white rounded-full px-2">
                                        -{getDiscount()}%
                                    </span>
                                }
                            </div>
                            <div className="h-2"></div>
                            <span className=" text-gray-600">{product?.description}</span>
                            <div className="h-1"></div>
                            <div className="flex items-center pb-3 ">

                                {<span className="rounded-md px-1 text-orange-500 text-2xl">
                                    {
                                        getPriceAfterDiscount()
                                    }
                                    دج
                                </span>}
                                {
                                    getPriceAfterDiscount() !== getPriceWithoutVariantsDiscount() &&
                                    <span className="px-1  text-gray-400 line-through text-lg">
                                        {getPriceWithoutVariantsDiscount()} دج
                                    </span>
                                }

                                <div className="flex-grow"></div>

                                <span className="px-1  text-gray-400 text-lg">
                                    يتوفر {getQuantity()}
                                </span>


                            </div>
                        </div>
                        <div className="product-color">
                            {
                                product?.variant &&
                                <div className="gb p-4 rounded-xl">
                                    <h2 className="text-xl font-semibold">الخيارات المتوفرة</h2>
                                    <div className="h-2"></div>
                                    {/* variant groups */}
                                    <RenderVariantGroup
                                        variantGroup={product!.variant!}
                                        path={item.variants}
                                        onPathChange={(path) => {
                                            if (item.variants.join() == path.join()) {
                                                // delete last variant
                                                path.pop();
                                            }
                                            item.variants = path

                                            return setItem({ ...item });
                                        }}
                                        onSelect={(variant) => {
                                            if (variant?.type == VariantOptionType.image) {
                                                var mediaIndex = product?.media.findIndex((media) => media == variant!.value);
                                                console.log(variant!.value)
                                                console.log(product?.media[mediaIndex])

                                                setSelectedMediaIndex(mediaIndex!);
                                                // scroll to element ut only in x
                                                var el = document.getElementById(`pimage-${mediaIndex!}`)
                                                el?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
                                            }

                                            // ViewContent
                                            track('ViewContent', {
                                                content_name: product?.name + " " + variant?.name,
                                                // content_category: 'cloth',
                                                content_ids: [product?.id],
                                                content_type: 'product',
                                                value: getPriceWithoutVariantsDiscount(),
                                                currency: 'DZD'
                                            });
                                        }}
                                    />
                                </div>
                            }
                            {/* name, phone, country|state */}
                            <div className="h-4"></div>
                            <div id="order-form" className="gb rounded-xl">
                                <div className="p-4">
                                    <ShippingForm
                                        shippingMethod={product.shippingMethod}
                                        store={store} shipping={shipping} setShipping={setShipping} sendOrder={sendOrder} />

                                    <div className="h-2"></div>
                                    <div ref={sendOrderButtonRef} className="pulse rounded-lg flex flex-col md:flex-row justify-between items-center" >
                                        <SendOrderButton id="fixed" />
                                    </div>
                                    <div className="h-2"></div>
                                    <div className="flex items-center justify-center">
                                        <div className="text-gray-600">
                                            الكمية
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => {
                                                    // Decrease quantity
                                                    setItem((prevItem) => ({
                                                        ...prevItem,
                                                        quantity: prevItem.quantity > 1 ? prevItem.quantity - 1 : 1,
                                                    }));
                                                }}
                                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-s-lg"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 bg-gray-200 text-gray-700">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    // Increase quantity
                                                    setItem((prevItem) => ({
                                                        ...prevItem,
                                                        quantity: prevItem.quantity + 1,
                                                    }));
                                                }}
                                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-e-lg"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className="h-[1px] bg-gray-200 dark:bg-gray-700"></div>
                                <div className="p-4">
                                    {/* shipping */}
                                    <div className="flex items-center justify-center">
                                        <div className="text-gray-600">
                                            الشحن
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="text-gray-600">
                                            <span className="text-gray-600">{
                                                shipping?.address.state ?
                                                    <span>{
                                                        getTotal() &&
                                                            getTotal()! - getPriceAfterDiscount() > 0 ?
                                                            getTotal()! - getPriceAfterDiscount() + " دج"
                                                            : "مجاني"
                                                    }</span>
                                                    :
                                                    <span>اختر الولاية</span>
                                            }</span>
                                        </div>
                                    </div>
                                    <div className="h-2"></div>
                                    {/* total */}
                                    <div className="flex">
                                        <div className="text-gray-600">
                                            <span className="text-gray-600">المجموع</span>
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="text-gray-600">
                                            <span className="text-gray-600">{getTotal()} دج</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Markdown className="p-4 prose dark:prose-invert" >{product?.body}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
