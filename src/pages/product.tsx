import { useParams } from "react-router-dom";
import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import { useEffect, useState } from "react";
import { IconLocation, IconLocationBolt, IconLocationCode, IconPhone, IconUser } from "@tabler/icons-react";
import StickyBox from "react-sticky-box";
import { getWilayat } from "../cities";
import AsynxWave from "../widgets/asynx_wave";
import Thanks from "./thanks";
import { customAlphabet } from 'nanoid'
import Markdown from "react-markdown";
// TypeAnimation
import { TypeAnimation } from "react-type-animation"
import ReactPixel from 'react-facebook-pixel';
import { LocalOrder, getProductPriceAfterDiscount, getProductQuantity, calculateLocalOrderTotal, getProductDiscountPercentage, getProductPriceWithoutVariantsDiscount } from "../pishop/logic";
import { StoreModel, LocalOrderItem, ShippingInfo } from "../pishop/models";
import RenderVariantGroup from "../widgets/variants";
import TelegramIntegration from "../pishop/integrations/telegram";
export const generateOrderId = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)

var _cachedOrders: LocalOrder[] = [];
export function getOrders() {
    _cachedOrders = JSON.parse(localStorage.orders || '[]')
}
export function saveOrder(order: LocalOrder) {
    _cachedOrders.push(order)
    localStorage.orders = JSON.stringify(_cachedOrders);
}

function Product({ store }: { store: StoreModel }) {

    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [orderId, setOrderId] = useState(generateOrderId());
    const product = store?.products?.find((product) => product.id === id);

    // set the title to the product name (only first time)
    useEffect(() => {
        document.title = product?.name || store.title;
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

    const [sentOrder, setSentOrder] = useState<LocalOrder | null>(null);

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
            raw: "",
            city: "",
            location: {
                geohash: "",
                latitude: 0,
                longitude: 0,
            },
            state: getWilayat().length ? getWilayat()[0].en : "",
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

    function updateShippingWilaya(wilaya: string) {
        shipping!.address.state = wilaya;
        var baladiyat = getWilayat().find(e => e.en == shipping!.address.state)?.baladiyats;
        shipping!.address.city = baladiyat?.length ? baladiyat?.[0].en : ""
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
        updateShippingWilaya(shipping!.address.state || getWilayat()[0].en);
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
        return calculateLocalOrderTotal(store, localOrder).toFixed(0);
    }

    function getDiscount() {
        return (100 - getProductDiscountPercentage(product!, item.variants) * 100).toFixed(1);
    }

    async function sendOrder(e: any) {
        e.preventDefault();
        setLoading(true);

        if (!shipping.name || !shipping.phone || !shipping.address.state) {
            alert("رجاءا إملأ البيانات")
        } else {
            var order: LocalOrder = {
                id: orderId,
                shipping: shipping,
                items: [item],
                paymentMethod: "cod",
                shippingMethod: "standard",
                ref: Date.now().toString(),
            }

            if (!!store.integrations.telegram?.chatId) {

                try {
                    if (store.integrations.telegram) {
                        var telegramBot = new TelegramIntegration(store.integrations.telegram);
                        await telegramBot.init();
                        telegramBot.sendOrder(store, order);
                    }
                    ReactPixel.track('Purchase', {
                        value: getTotal(),
                        currency: "DZD",
                    });

                    setSentOrder(order);
                    saveOrder(order);
                    setOrderId(generateOrderId());
                } catch (error) {
                    alert("الموقع تحت الضغط، انتضر دقيقة واعد الطلب")
                }
            }
        }



        // await ordersLogBot!.api.sendInvoice(chatId, "new order", "description",
        //     "paylead", "token", "DZD", [{ amount: 500, label: "No" }]
        // );

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
                sentOrder &&
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
                                        key={index} src={media.url} className={
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
                                            "border-primary border-[3px] w-14" : " w-10 border-[2px] dark:border-white border-black border-opacity-20") +
                                        " mx-1  shadow-xl aspect-square rounded-xl bg-white bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 overflow-hidden transition-all duration-500 ease-in-out"
                                    }>
                                            <img src={media.url} className="w-full h-full object-cover " />
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
                                    {store?.currency.symbol}
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
                                product?.variants &&
                                <div className="gb p-4 rounded-xl">
                                    <h2 className="text-xl font-semibold">الخيارات المتوفرة</h2>
                                    <div className="h-2"></div>
                                    {/* variant groups */}
                                    <RenderVariantGroup variantGroup={product!.variants!} path={item.variants} onPathChange={(path) => {
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
                            <div className="gb gbz p-4 rounded-xl border-2 border-black dark:border-gray-50">
                                <ShippingBox store={store} shipping={shipping} setShipping={setShipping} />
                                <div className="h-2"></div>
                                <div className="flex flex-col md:flex-row justify-between items-center" >
                                    <button
                                        onClick={sendOrder}
                                        type="submit" className="relative w-full text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ">
                                        <AsynxWave
                                            color="white"
                                            width="100%"
                                            height="100%"
                                            className={"absolute start-0 top-0 bottom-0 h-full aspect-square"}
                                            padding={0} />
                                        <div className="flex items-center justify-center" >
                                            {/* أرسل طلبك الآن */}
                                            <TypeAnimation cursor={false} sequence={[
                                                "أرسل طلبك الآن",
                                                500,
                                                "سنتصل بك لتأكيد الطلبية",
                                                1500,
                                                "ماذا تنتظر؟",
                                                500,
                                                "إظغط هنا لإرسال الطلب",
                                                500,
                                                "إظغط هنا لإرسال الطلب...",
                                                500,
                                            ]}
                                                repeat={Infinity}
                                                speed={10}
                                            />
                                            <span dir="ltr" className="mx-2 bg-white text-primary rounded-full px-2">
                                                x{item.quantity}
                                            </span>
                                        </div>
                                        <div className="text-[12px] font-light">المبلغ الكلي مع الشحن:
                                            <b className="px-2 font-extrabold">{getTotal()} دج</b></div>
                                    </button>
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

export default Product;

/**
 * Represents a component for managing shipping information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {StoreModel} props.store - The store model.
 * @param {ShippingInfo} props.shipping - The shipping information.
 * @param {Function} props.setShipping - The function to update the shipping information.
 * @returns {JSX.Element} The ShippingBox component.
 */
function ShippingBox({ store, shipping, setShipping }: { store: StoreModel, shipping: ShippingInfo, setShipping: (shipping: ShippingInfo) => void }): JSX.Element {
    function updateShippingWilaya(wilaya: string) {
        shipping!.address.state = wilaya;
        var baladiyat = getWilayat().find(e => e.en == shipping!.address.state)?.baladiyats;
        shipping!.address.city = baladiyat?.length ? baladiyat?.[0].en : ""
        setShipping({ ...shipping });
    }

    function canShipToHome(): boolean {
        var shippingArea = store.shipping.find(e => e.name == shipping.address.state);
        return !!(shippingArea?.active && shippingArea?.home);
    }
    // function canShipToOffice(): boolean {
    //     var shippingArea = store.shipping.find(e => e.name == shipping.address.state);
    //     return !!(shippingArea?.active && shippingArea?.office);
    // }

    return (
        <div>
            <h2 className="text-xl font-semibold">معلومات الشحن
            </h2>
            <div className="h-2"></div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <label className="text-sm font-light flex items-center">الاسم</label>
                    <div className="relative border border-gray-500 border-opacity-20 rounded-lg">
                        <IconUser className="absolute top-2 right-2 text-gray-400" />
                        <input

                            required
                            className="bg-transparent p-2  w-full pr-10
                                                invalid:outline-red-700 invalid:outline invalid:outline-2
                                                
                                                rounded-[inherit]
                                                "
                            type="name"
                            placeholder="الإسم و اللقب"
                            defaultValue={shipping!.name}
                            onChange={(e) => {
                                shipping!.name = e.target.value;
                                setShipping({ ...shipping });
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-light flex items-center">الهاتف</label>
                    <div className="relative border border-gray-500 border-opacity-20 rounded-lg">
                        <IconPhone className="absolute top-2 right-2 text-gray-400" />
                        <input
                            required
                            className="bg-transparent p-2 w-full pr-10 invalid:outline-red-700 invalid:outline invalid:outline-2 rounded-[inherit]" type="tel"
                            placeholder="رقم الهاتف"
                            defaultValue={shipping!.phone}
                            onChange={(e) => {
                                shipping!.phone = e.target.value;
                                setShipping({ ...shipping });
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <label className="text-sm font-light flex items-center">الولاية
                    </label>
                    <div className="relative overflow-hidden border border-gray-500 border-opacity-20 rounded-lg">
                        <IconLocation className="absolute top-2 right-2 text-gray-400" />
                        <select className="bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit] focus:first-letter:outline-2" required
                            onChange={(e) => {
                                updateShippingWilaya(e.target.value);
                            }}
                            defaultValue={shipping!.address.state}
                        >
                            {
                                getWilayat().map((wilaya, index) => (
                                    <option key={index}
                                        value={wilaya.en.toLocaleLowerCase()}
                                    >({wilaya.code}) {wilaya.ar} - {
                                            store.shipping.find(
                                                e => e.name == wilaya.en
                                            )?.[
                                            shipping.doorShipping ?
                                                "home" : "office"]
                                        }دج

                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-light flex items-center">البلدية
                        {
                            !shipping!.address.state &&
                            <span className="mx-2 text-xs text-red-500"> (اختر الولاية أولاً)</span>
                        }
                        {
                            shipping!.address.city &&
                            <span className="mx-2 text-xs text-red-500"> ({shipping!.address.city})</span>
                        }
                    </label>
                    <div className="relative overflow-hidden border border-gray-500 border-opacity-20 rounded-lg">
                        <IconLocationCode className="absolute top-2 right-2 text-gray-400" />
                        <select className="bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit]
                                            " required
                            onChange={(e) => {
                                shipping!.address.city = e.target.value;
                                setShipping({ ...shipping });
                            }}
                            defaultValue={shipping!.address.city}
                            disabled={!shipping!.address.state}
                        >
                            {
                                getWilayat().find((wilaya) => wilaya.en === shipping!.address.state!)?.baladiyats?.map((baladiya, index) => (
                                    <option key={index}
                                        value={baladiya.en.toLocaleLowerCase()}
                                    >{baladiya.ar}</option>
                                ))
                                || <span>لا يوجد بلديات</span>
                            }
                        </select>
                    </div>
                </div>
            </div>
            {
                shipping.doorShipping && canShipToHome() &&
                <>
                    <div className="h-2"></div>
                    <div>
                        <label className="text-sm font-light">العنوان</label>
                        <div className="relative overflow-hidden border border-gray-500 border-opacity-20 rounded-lg">
                            <IconLocationBolt className="absolute top-2 right-2 text-gray-400" />
                            <textarea
                                required
                                className="bg-transparent p-2  w-full pr-10"
                                placeholder="أدخل العنوان كاملا، توصيل لباب البيت"
                                defaultValue={shipping!.address.raw}
                                onChange={(e) => {
                                    shipping!.address.raw = e.target.value;
                                    setShipping({ ...shipping });
                                }}
                            />
                        </div>
                    </div></>
            }
            <div className="h-4"></div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" onChange={() => {
                    shipping.doorShipping = !shipping.doorShipping && canShipToHome();
                    setShipping({ ...shipping })
                }} checked={shipping.doorShipping} className="sr-only peer" />
                <div className="pulse w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:m-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                <div
                    // column
                    className="ms-3 flex flex-col"
                >
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {!shipping.doorShipping && "هل تريد "}التوصيل للبيت  {!shipping.doorShipping && (<b dir="ltr">مقابل دج{((store.shipping.find(e => e.name == shipping.address.state)?.home || 0) - (store.shipping.find(e => e.name == shipping.address.state)?.office || 0))}</b>)}
                    </span>
                    {/* hint */}
                    <span className="text-xs text-gray-500 dark:text-gray-400">التوصيل للمكتب ارخص في العادة لكن يتطلب منك التنقل لأقرب مكتب</span>
                </div>
            </label>
        </div>
    )
}
