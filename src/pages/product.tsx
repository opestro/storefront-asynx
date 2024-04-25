import { useParams } from "react-router-dom";
import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { cities } from "../cities";
import AsynxWave from "../widgets/asynx_wave";
import Thanks from "./thanks";
import { customAlphabet } from 'nanoid'
import Markdown from "react-markdown";
import { TypeAnimation } from "react-type-animation"
import ReactPixel from 'react-facebook-pixel';
import { LocalOrder, getProductPriceAfterDiscount, getProductQuantity, calculateLocalOrderTotal, getProductDiscountPercentage, getProductPriceWithoutVariantsDiscount } from "../pishop/logic";
import { LocalOrderItem, ShippingInfo } from "../pishop/models";
import RenderVariantGroup from "../components/variants";
import { OrderEntity, ProductEntity, StoreEntity } from "feeef/src/core/core";
import { ff } from "../main";
import { ShippingForm } from "../components/shipping_form";
import { IconShoppingBag } from "@tabler/icons-react";
import { SuperSEO } from "react-super-seo";
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
function ProductPage({ store }: { store: StoreEntity }) {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductEntity | null>(null);

    useEffect(() => {
        ff.products.find({
            id: id!,
            by: 'id'
        }).then((res) => {
            setProduct(res)
        }).catch((err) => {
            console.error(err)
        })
    }, [id])

    if (!product) {
        return <div className="fixed inset-0 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 backdrop-blur-lg">
            <AsynxWave
                className='opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-3xl'
                height="100%"
                width="100%"
            ></AsynxWave>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
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
    return <>
    <SuperSEO
        title={store.title + "|" + (product.name || "")}
        description={product.description || undefined}
        lang="ar"
        openGraph={{
            ogTitle: store.title + "|" + (product.name || ""),
            ogDescription: product.description || undefined,
            ogUrl: window.location.href,
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

    const [loading, setLoading] = useState(false);
    const [orderId] = useState(generateOrderId());

    useEffect(() => {
        // set the title to the product name (only first time)
        document.title = product?.name || store.title || "";
    }, [])

    // view page ReactPixel
    useEffect(() => {
        ReactPixel.pageView();
        // ViewContent
        ReactPixel.track('ViewContent', {
            content_name: product?.name,
            content_category: 'cloth',
            content_ids: [product?.id, product?.slug],
            content_type: 'product',
            value: getPriceWithoutVariantsDiscount(),
            currency: 'DZD'
        });
        // on scrol
    }, [])


    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

    const [sentOrder, setSentOrder] = useState<OrderEntity | null>(null);

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
            city: "",
            location: {
                geohash: "",
                lat: 0,
                long: 0,
            },
            state: "01",
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
        var index = parseInt(stateCode) - 1;
        shipping!.address.state = stateCode;
        var baladiyat = cities[index];
        shipping!.address.city = baladiyat?.length ? baladiyat?.[0] : ""
        setShipping({ ...shipping });
        if (!!shipping.name && !!shipping.phone && !localStorage.addedToCard) {
            localStorage.addedToCard = "true";


            ReactPixel.track('AddToCart', {
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
        updateShippingWilaya(shipping!.address.state || "01");
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
        return calculateLocalOrderTotal(store, localOrder);
    }

    function getDiscount() {
        return (100 - getProductDiscountPercentage(product!, item.variants) * 100).toFixed(1);
    }


    async function sendOrder(status: "draft" | "pending" = "pending") {
        if (!shipping.phone.match(/^0(5|6|7)\d{8}$|^0(2)\d{7}$/)) return;
        var olderOrder = localStorage.getItem(`order-${product.id}`);
        if (olderOrder) {
            setSentOrder(JSON.parse(olderOrder) as OrderEntity);
        }
        if (status == 'draft' && olderOrder) return;

        setLoading(true);
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
        }
        if (sentOrder?.id) {
            data.id = sentOrder.id;
            data.metadata = {
                customerPhone: sentOrder.customerPhone,
            }
        }
        var response = await ff.orders.send(data);
        localStorage.setItem(`order-${product.id}`, JSON.stringify(response));
        setSentOrder(response);
        setLoading(false);
    }



    return (
        <div className="relative">

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
            <Navbar store={store} />
            <div className="container mx-auto pt-4 ">
                {/* row, 1 col for images, other for detail; all sticky */}
                <div className="flex flex-col md:flex-row">
                    {/* images */}
                    <StickyBox offsetTop={78} className="top-0 md:top-[78px]  h-full w-full md:w-1/2">
                        {/* image */}
                        <div className="relative">
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
                                    ><button key={index} onClick={() => setSelectedMediaIndex(index)} className={
                                        (selectedMediaIndex === index ?
                                            "border-primary border-[2px] w-14" : " w-11 border-[2px] dark:border-white border-white ") +
                                        " mx-1  shadow-xl aspect-square rounded-xl bg-white bg-opacity-100 hover:bg-opacity-100 focus:bg-opacity-100 overflow-hidden transition-all duration-500 ease-in-out"
                                    }>
                                            <img src={media} className="w-full h-full object-cover " />
                                        </button></a>
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
                                            if (variant?.mediaIndex !== undefined && variant?.mediaIndex !== null) {
                                                setSelectedMediaIndex(variant!.mediaIndex!);
                                                // scroll to element ut only in x
                                                var el = document.getElementById(`pimage-${variant!.mediaIndex!}`)
                                                el?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
                                            }
                                        }}
                                    />
                                </div>
                            }
                            {/* name, phone, country|state */}
                            <div className="h-4"></div>
                            <div className="gb rounded-xl">
                                <div className="p-4">
                                    <ShippingForm store={store} shipping={shipping} setShipping={setShipping} sendOrder={sendOrder} />

                                    <div className="h-2"></div>
                                    <div className="flex flex-col md:flex-row justify-between items-center" >
                                        <button
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
            <Footer store={store}></Footer>
        </div>
    );
}

export default ProductPage;
