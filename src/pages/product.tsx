import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { cities } from "../cities";
import AsynxWave from "../widgets/asynx_wave";
import Thanks from "./thanks";
import { customAlphabet } from 'nanoid'
import Markdown from "react-markdown";
import { TypeAnimation } from "react-type-animation"
import { LocalOrder, getProductPriceAfterDiscount, getProductQuantity, calculateLocalOrderTotal, getProductDiscountPercentage, getProductPriceWithoutVariantsDiscount, getShippingRateForState } from "../pishop/logic";
import { LocalOrderItem, ShippingInfo } from "../pishop/models";
import RenderVariantGroup from "../components/variants";
import { OrderEntity, ProductEntity, StoreEntity, VariantOptionType } from "feeef/src/core/core";
// import { setAdvancedMatching } from "../main";
import { ShippingForm } from "../components/shipping_form";
import { IconShoppingBag } from "@tabler/icons-react";
import ReactPlayer from 'react-player'
import { SuperSEO } from "react-super-seo";
import { pageView, track, tryFixPhoneNumber, useInViewport, validatePhoneNumber } from "../pishop/helpers";
import { ff, getCurrentUrl } from "../feeef";
import { cart } from "../services/cart";
import { getCurrencySymbolByStore } from "../widgets/product_card";
import ReactGA from "react-ga4";
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
    const Home = () => {
        ReactGA.send({ hitType: "pageview", page: "/", title: (store.name + " | " + (product.name || "") + (!!product.title ? " - " + product.title : "")) });
    }
    let pathname = useLocation().pathname
    return <>
        <SuperSEO
            title={store.name + " | " + (product.name || "") + (!!product.title ? " - " + product.title : "")}
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

var runner: any;

function Product({ store, product }: { store: StoreEntity, product: ProductEntity }) {
    let location = useLocation()
    const [loading, setLoading] = useState(false);
    const [orderId] = useState(generateOrderId());
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
    const [mountPlayer, setMountPlayer] = useState(false);

    useEffect(() => {
        if (product?.media.length) {
            var media = product.media[selectedMediaIndex];
            if (getYoutubeVideoIdFromUrl(media) != null) {
                setMountPlayer(true);
            }
        }
    }, [selectedMediaIndex]);

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
        doorShipping:
            store.metadata?.shipping?.mode == "deskOnly" ? false : true,
        address: {
            street: "",
            city: "1",
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
        // shipping!.address.city = baladiyat?.length ? baladiyat?.[0] : ""

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

    function getShippingRate(): number | null {
        var rate = getShippingRateForState({
            state: shipping.address.state,
            shippingMethod: product.shippingMethod,
            store,
        })
        if (shipping.doorShipping) {
            return rate?.home === undefined ? null : rate?.home;
        }
        return rate?.desk === undefined ? null : rate?.desk;
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
        // console.log("sending...");
        var validationError = validatePhoneNumber(tryFixPhoneNumber(shipping.phone));
        if (validationError) {
            // alert(validationError);
            // console.log("invalid phone number");
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
            // console.log("draft order already exists");
            return;
        }

        setLoading(status == 'pending');

        // prepare data:
        // fbc?: string | null
        // fbp?: string | null
        // eventSourceUrl?: string | null
        // console.log("xxx...");

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
            items: cart.hasProduct(product.id) ? cart.items : [
                {
                    productId: product.id,
                    quantity: item.quantity,
                    variantPath: item.variants.join("/"),
                }
            ],
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
            cart.clear();
        }
        // Purchase
        // ReactPixel.track('Purchase', eventData);
        // console.log("order sent", response);
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
                <span dir="ltr" className="mx-2 text-primary rounded-full px-2" style={{ backgroundColor: "var(--on-p)" }}>
                    x{item.quantity}
                </span>
            </div>
            {/* <div className="text-[12px] font-light">المبلغ الكلي مع التوصيل:
                {
                    shipping?.address.state ?
                        <b className="px-2 font-extrabold">{getTotal()} {getCurrencySymbolByStore(store)}</b>
                        :
                        <b className="px-2 font-extrabold">)اختر الولاية(</b>
                }
            </div> */}
            {/* the basket icon */}
            <IconShoppingBag size={34} className="absolute end-3 top-0 bottom-0 m-auto" />
        </button>
    }


    useEffect(() => {
        // set the title to the product name (only first time)
        document.title = product?.name || store.title || "";
        pageView();
        updateShippingWilaya(shipping!.address.state);
    }, [])    // view page ReactPixel



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
                        }>
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
                        <div className="overflow-hidden slider relative rounded-2xl">

                            <div
                                className="slides overflow-hidden"
                                // when scroll update selected media index
                                onScroll={(e) => {
                                    var el = e.target as HTMLDivElement;
                                    var index = Math.abs(Math.round(el.scrollLeft / el.clientWidth));
                                    setSelectedMediaIndex(index);
                                }}
                            >
                                {
                                    product?.media.map((media, index) => (
                                        <div key={index} id={`slide-${index + 1}`} className="overflow-hidden" >
                                            {getYoutubeVideoIdFromUrl(media) != null && !import.meta.env.SSR ?
                                                <div
                                                    data-playing={selectedMediaIndex === index}
                                                    style={{
                                                        scrollSnapAlign: "center",
                                                        scrollSnapStop: "always",
                                                        // when this is selected scall to 1 else 0.4
                                                        transform: selectedMediaIndex == index ? "scale(1)" : "scale(0.5)",
                                                        transition: "all 0.6s cubic-bezier(.08,.82,.17,1)",
                                                        borderRadius: selectedMediaIndex == index ? "0" : "100%",
                                                        rotate: selectedMediaIndex == index ? "0deg" :
                                                            selectedMediaIndex > index ? "30deg" : "-30deg",
                                                        // more effacts
                                                        opacity: selectedMediaIndex == index ? 1 : 0,
                                                    }}
                                                    className="bg-black pointer-events-auto absolute inset-0 xtop-[-500px] xbottom-[-500px] xleft-0 xright-0">
                                                    {
                                                        mountPlayer &&
                                                        <ReactPlayer
                                                            url={
                                                                `https://www.youtube.com/watch?v=${getYoutubeVideoIdFromUrl(media)}`
                                                            }
                                                            width="100%"
                                                            height="100%"
                                                            // controls
                                                            playing={selectedMediaIndex === index}
                                                        />
                                                        || <img src={`https://img.youtube.com/vi/${getYoutubeVideoIdFromUrl(media)}/maxresdefault.jpg`} className="object-cover w-full h-full" />
                                                    }
                                                </div> :
                                                <img
                                                    src={media} className={
                                                        "inset-0 object-contain aspect-square"
                                                    }
                                                    alt={product.name!}
                                                    style={{
                                                        scrollSnapAlign: "center",
                                                        scrollSnapStop: "always",
                                                        // when this is selected scall to 1 else 0.4
                                                        transform: selectedMediaIndex == index ? "scale(1)" : "scale(0.5)",
                                                        transition: "all 0.6s cubic-bezier(.08,.82,.17,1)",
                                                        borderRadius: selectedMediaIndex == index ? "0" : "100%",
                                                        rotate: selectedMediaIndex == index ? "0deg" :
                                                            selectedMediaIndex > index ? "30deg" : "-30deg",
                                                        // more effacts
                                                        opacity: selectedMediaIndex == index ? 1 : 0,
                                                    }}
                                                />
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="absolute bottom-0 w-full flex justify-center p-2 items-end pointer-events-none">

                                {product?.media.map((media, index) => (
                                    <a
                                        className="pointer-events-auto"
                                        key={index}
                                        href={`#slide-${index + 1}`}
                                    >
                                        <button key={index} className={'overflow-hidden relative ' +
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
                                    {getCurrencySymbolByStore(store)}
                                </span>}
                                {
                                    getPriceAfterDiscount() !== getPriceWithoutVariantsDiscount() &&
                                    <span className="px-1  text-gray-400 line-through text-lg">
                                        {getPriceWithoutVariantsDiscount()} {getCurrencySymbolByStore(store)}
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

                                            cart.updateVariantPath(product.id, path.join("/"))

                                            return setItem({ ...item });
                                        }}
                                        onSelect={(variant) => {
                                            // console.log(variant!.value)

                                            if (variant?.type == VariantOptionType.image) {
                                                var mediaIndex = product?.media.findIndex((media) => media == variant!.value);


                                                var el = document.getElementById(`slide-${mediaIndex! + 1}`)
                                                el?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })

                                                // setSelectedMediaIndex(mediaIndex!);

                                                // if (!import.meta.env.SSR) {
                                                //     // href={`#slide-${index + 1}`}
                                                //     window.history.pushState({}, "", `#slide-${mediaIndex}`);
                                                // }
                                            }

                                            // ViewContent
                                            track('ViewContent', {
                                                content_name: product?.name + " " + variant?.name,
                                                // content_category: 'cloth',
                                                content_ids: [product?.id],
                                                content_type: 'product',
                                                value: getTotal() ?? 0,
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
                                        <div className="flex items-center bg-gray-200 text-gray-700 justify-center border-2 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => {
                                                    cart.updateQuantity(product.id, item.quantity - 1)
                                                    setItem((prevItem) => ({
                                                        ...prevItem,
                                                        quantity: prevItem.quantity > 1 ? prevItem.quantity - 1 : 1,
                                                    }));
                                                }}
                                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-s-lg"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1 ">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    cart.updateQuantity(product.id, item.quantity + 1)
                                                    // Increase quantity
                                                    setItem((prevItem) => ({
                                                        ...prevItem,
                                                        quantity: prevItem.quantity + 1,
                                                    }));
                                                }}
                                                className="px-3 py-1 "
                                            >
                                                +
                                            </button>
                                        </div>
                                        {/* add to cart */}
                                        <div className="w-2"></div>
                                        {
                                            !cart.canAddProduct(product) ? null :
                                                !cart.hasProduct(product.id) ?
                                                    <button
                                                        onClick={() => {
                                                            cart.add({
                                                                quantity: item.quantity,
                                                                price: getPriceAfterDiscount(),
                                                                variantPath: item.variants.join("/"),
                                                                product: product,
                                                            })
                                                            // update the ui
                                                            setItem({ ...item });
                                                        }}
                                                        className="px-3 py-1 rounded-lg border-2 border-primary text-primary"
                                                    >
                                                        إضافة إلى السلة
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={() => {
                                                            cart.removeProduct(product.id)
                                                            // update the ui
                                                            setItem({ ...item });
                                                        }}
                                                        className="px-3 py-1 rounded-lg border-2 border-red-500 text-red-500"
                                                    >
                                                        إزالة من السلة
                                                    </button>
                                        }
                                    </div>
                                </div>
                                {/* divider */}
                                <div className="flex items-center justify-center">
                                    <div className="h-[1px] bg-gray-200 dark:bg-gray-700 flex-grow"></div>

                                    <div className="text-gray-600 mx-4">
                                        ملخص الطلب
                                    </div>
                                    <div className="h-[1px] bg-gray-200 dark:bg-gray-700 flex-grow"></div>
                                </div>
                                <div className="p-4 pt-1">
                                    {/* cart.items */}
                                    {
                                        cart.canAddProduct(product) && <>
                                            <table className="w-full"><tbody>

                                                {
                                                    cart.items.length > 0 ?
                                                        cart.items.map((_item) => (
                                                            <tr key={_item.product.id} className="text-gray-600">
                                                                {/* ({item.productName}){item.variantPath? ` (${item.variantPath})`:``} x{item.quantity} = {item.price}{getCurrencySymbolByStore(store)} */}
                                                                {/* substring name */}
                                                                {/* ({item.productName && item.productName.length > 10 ? item.productName.substring(0, 10) + "..." : item.productName}) x{item.quantity} = ({item.price}{getCurrencySymbolByStore(store)}) */}
                                                                {/* use table looks better */}

                                                                {/* product image */}
                                                                <td>
                                                                    <img src={_item.product.media[0]} className="w-8 h-8 rounded-lg border-2 border-gray-200" />
                                                                </td>
                                                                <td className="text-gray-600">
                                                                    {_item.product.name && _item.product.name.length > 10 ? _item.product.name.substring(0, 10) + "..." : _item.product.name}
                                                                </td>
                                                                <td className="text-gray-600">
                                                                    x{_item.quantity}
                                                                </td>
                                                                <td className="text-gray-600">
                                                                    {_item.price} {getCurrencySymbolByStore(store)}
                                                                </td>
                                                                {/* delete */}
                                                                <td className="text-end">
                                                                    <button
                                                                        onClick={() => {
                                                                            cart.removeProduct(_item.product.id)
                                                                            // force react to update current componenet
                                                                            setItem({ ...item });
                                                                        }}
                                                                        className="px-2 ms-2 text-sm rounded-full bg-red-500 text-white"
                                                                    >
                                                                        إزالة
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr className="text-gray-600 text-center">
                                                            <td colSpan={4} className="text-xs">
                                                                لا يوجد منتجات في السلة | إضغط على شراء وسترسل هذ المنتج فقط
                                                            </td>
                                                        </tr>

                                                }
                                            </tbody>
                                            </table>
                                            <div className="h-2"></div></>
                                    }
                                    {/* shipping */}
                                    <div className="flex items-center justify-center">
                                        <div className="text-gray-600">
                                            التوصيل
                                        </div>
                                        <div className="flex-grow"></div>
                                        <div className="text-gray-600">
                                            <span className="text-gray-600">{
                                                shipping?.address.state ?
                                                    <span>{
                                                        // cart.hasProduct(product.id) ?
                                                        // cart.getShippingRate(
                                                        //     shipping,
                                                        //     store
                                                        // ) :
                                                        // (getShippingRate() || 0)

                                                        (() => {
                                                            var rate: number | null = null;
                                                            if (false && cart.hasProduct(product.id)) {
                                                                rate = cart.getShippingRate(
                                                                    shipping,
                                                                    store
                                                                )
                                                            } else {
                                                                rate = getShippingRate();
                                                            }
                                                            return rate === 0 ? <span className="text-green-500">توصيل مجاني</span> : rate + " " + getCurrencySymbolByStore(store)
                                                        })()

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
                                            <span className="text-gray-600">{
                                                cart.total > 0 ? cart.total + (getShippingRate() || 0) :
                                                    getTotal()
                                            } {getCurrencySymbolByStore(store)}</span>
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


function isValidId(id: string): boolean {
    return /^[\w\-]{11}$/.test(id);
}

export function getYoutubeVideoIdFromUrl(url: string): string | null {
    const patterns = [
        /youtube\.com\/watch\?v=([^&]+)/,
        /youtu\.be\/([^?]+)/,
        /youtube\.com\/embed\/([^?]+)/,
        /img\.youtube\.com\/vi\/([^/]+)/,
        /youtube\.com\/video\/([^?]+)/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && isValidId(match[1])) {
            return match[1];
        }
    }

    return null;
}


export default ProductPage;