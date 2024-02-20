import { useParams } from "react-router-dom";
import Navbar from "../widgets/navbar";
import Footer from "../widgets/footer";
import { useEffect, useState } from "react";
import { LocalOrder, LocalOrderItem, ShippingInfo, VariantGroup, VariantOption, calculateLocalOrderShipping, calculateLocalOrderTotal, getProductDiscountPercentage, getProductPriceAfterDiscount, getProductQuantity } from "../models";
import { IconLocation, IconLocationBolt, IconLocationCode, IconPhone, IconUser } from "@tabler/icons-react";
import StickyBox from "react-sticky-box";
import { getWilayat } from "../cities";
import AsynxWave from "../widgets/asynx_wave";
import { Bot, Context } from "grammy";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";
import Thanks from "./thanks";
import { customAlphabet } from 'nanoid'
import Markdown from "react-markdown";
import { testStore } from "../main";
// TypeAnimation
import { TypeAnimation } from "react-type-animation"
import ReactPixel from 'react-facebook-pixel';
export const generateOrderId = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)



var _cachedOrders: LocalOrder[] = [];
export function getOrders() {
    _cachedOrders = JSON.parse(localStorage.orders || '[]')
}
export function saveOrder(order: LocalOrder) {
    _cachedOrders.push(order)
    localStorage.orders = JSON.stringify(_cachedOrders);
}
var ordersLogBot: Bot<ParseModeFlavor<Context>> | undefined;

function Product() {

    const [loading, setLoading] = useState(false);
    if (!ordersLogBot) {
        ordersLogBot = new Bot(testStore.integrations.telegram!.token);
        // ordersLogBot.on("message", (ctx) => {
        //     console.log(ctx.chat?.id, ctx.message?.text);
        //     return ctx.reply("Got another message!");
        // });
        ordersLogBot.start();

        // // get list of chat ids https://t.me/+CuDgcjI1AyBlNzU0
        // ordersLogBot.api.getChatAdministrators("@CuDgcjI1AyBlNzU0").then((res) => {
        //     console.log("getChatAdministrators", res)
        // });

        // // send meesage to 1828445418
        ordersLogBot.api.sendMessage("-1002092163609", "new user connected to the website!")
    }
    const { id } = useParams();
    const [orderId, setOrderId] = useState(generateOrderId());
    const product = testStore?.products?.find((product) => product.id === id);

    // view page ReactPixel
    useEffect(() => {
        ReactPixel.pageView();
        // ViewContent
        ReactPixel.track('ViewContent', {
            content_name: product?.name,
            content_category: 'cloth',
            content_ids: [product?.id, product?.slug],
            content_type: 'product',
            value: getPrice(),
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

    function getPrice(): number {
        return getProductPriceAfterDiscount(
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
                value: getPrice(),
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
        return calculateLocalOrderTotal(localOrder).toFixed(0);
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

            if (!!testStore.integrations.telegram?.chatId) {

                try {
                    var template = testStore.integrations.telegram!.template! ||
                        `🛒 طلب جديد (#{id})
_________________
👤 الإسم: {name}
📦 العنوان: {address} | {state} ({city})
📱 الهاتف: {phone}
📝 الملاحظات: {notes}
_________________
{products}
_________________
📦 الكلفة: {cost}
🚚 الشحن: {shipping}
_________________
💰 الإجمالي: {total}`;
                    var message = (template as String)
                        .replace(/\{id\}/g, order.id)
                        .replace(/\{address\}/g, order.shipping?.doorShipping ? order.shipping?.address.raw : "التوصيل لمكتب الولاية")
                        .replace(/\{phone\}/g, order.shipping?.phone || "لا رقم")
                        .replace(/\{name\}/g, order.shipping?.name || "لا اسم")
                        .replace(/\{notes\}/g, order.shipping?.notes || "لا ملاحظة")
                        .replace(/\{state\}/g, order.shipping?.address.state || "لا الولاية")
                        .replace(/\{city\}/g, order.shipping?.address.city || "لا البلدية")
                        .replace(/\{products\}/g, order.items.map(item => `${item.product.name} ${item.variants.join("-")}\n - الكمية:(x${item.quantity})`).join("\n"))
                        .replace(/\{shipping\}/g, calculateLocalOrderShipping(order).toFixed(0))
                        .replace(/\{total\}/g, calculateLocalOrderTotal(order).toFixed(0))
                        .replace(/\{cost\}/g, calculateLocalOrderTotal(order, false).toFixed(0))
                    await ordersLogBot!.api.sendMessage(testStore.integrations.telegram.chatId, message)

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
                    <Thanks order={sentOrder} onDone={clearOrder}></Thanks>
                </div>
            }
            <Navbar store={testStore} />
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
                                    console.log("index", index)
                                    setSelectedMediaIndex(index);
                                }}
                            >
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
                                    // <img key={index} src={media.url} className={
                                    //     (
                                    //         selectedMediaIndex === index ?
                                    //             "w-full" : "w-0 dark:border-white border-black border-opacity-20"
                                    //     ) +
                                    //     " h-full object-cover transition-all duration-500 ease-in-out"
                                    // } />
                                ))}
                            </div>



                            {/* image selector */}
                            <div className="absolute bottom-0 w-full flex justify-center p-2 items-end">
                                {product?.media.map((media, index) => (
                                    <a
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
                    <StickyBox className="w-full md:w-1/2">
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

                                <span className="rounded-md px-1 text-orange-500 text-2xl">
                                    {
                                        getPriceAfterDiscount()
                                    }
                                    {testStore?.currency}
                                </span>
                                {
                                    !!product?.discount &&
                                    <span className="px-1  text-gray-400 line-through text-lg">
                                        {getPrice()} دج
                                    </span>
                                }

                                <div className="flex-grow"></div>

                                <span className="px-1  text-gray-400 text-lg">
                                    يتوفر {getQuantity()}
                                </span>


                            </div>
                        </div>
                        <div className="product-color">{
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
                            </div>}
                            {/* name, phone, country|state */}
                            <div className="h-4"></div>
                            <div className="gb gbz p-4 rounded-xl border-2 border-black dark:border-gray-50">
                                <ShippingBox shipping={shipping} setShipping={setShipping} />
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
                    </StickyBox>
                </div>


            </div>
            <Footer store={testStore}></Footer>
        </div>
    );
}

export default Product;

export function VariantButton({ variant, selected = false, onClick }: { variant: VariantOption, selected?: boolean, onClick?: () => void }) {
    if (variant.type === "color") {
        return <ColorVariantButton variant={variant} selected={selected} onClick={onClick} />
    } else if (variant.type === "image") {
        return <ImageVariantButton variant={variant} selected={selected} onClick={onClick} />
    }
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100"}>
            {variant.name}
        </div>
    )

    return (
        <div onClick={onClick} className={(selected ? "border-primary" : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}

function ColorVariantButton({ variant, selected = false, onClick }: { variant: VariantOption, selected?: boolean, onClick?: () => void }) {
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100"}
            style={{ backgroundColor: variant.value }}
        >
        </div>)

    return (
        <div onClick={onClick} className={(selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}

function ImageVariantButton({ variant, selected = false, onClick }: { variant: VariantOption, selected?: boolean, onClick?: () => void }) {
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 w-14 h-14 rounded-full  bg-opacity-5  focus:bg-opacity-100"}>
            <img src={variant.value} className="w-full h-full object-cover" />
        </div>)

    return (
        <div onClick={onClick} className={(selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-full border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}




// variant group contains options, every option can have a child variant group
// the path is the selected options from the root to the current group
function RenderVariantGroup({ variantGroup, path, onPathChange, onSelect }: {
    variantGroup: VariantGroup, path: string[], onPathChange: (path: string[]) => void

    onSelect?: (variant: VariantOption) => void
}
) {
    var selected: string | null = null;
    var rest: string[] = [];
    if (path.length) {
        selected = path[0];
        rest = path.slice(1);
    }
    function getVariant(name: string): VariantOption | null {
        return variantGroup.options?.find((option) => option.name === name) || null;
    }
    function toggle(variant: VariantOption) {
        selected = variant.name;
        onPathChange([selected])
    }
    return (
        <div>            <div className="h-1"></div>

            <h3 className="text-sm font-medium">{variantGroup.name}
                {
                    getVariant(selected!) &&
                    <span dir="ltr" className="mx-2 bg-primary text-white rounded-full">
                        <span className="px-2">{getVariant(selected!)?.name}</span>
                    </span>
                }{
                    getVariant(selected!)?.quantity !== undefined &&
                    <span className="  text-primary rounded-full px-2">
                        {getVariant(selected!)?.quantity} متوفر
                    </span>
                }

            </h3>
            <div className="flex flex-wrap">
                {variantGroup.options?.map((variant, index) => (
                    <span key={index}
                        className={(
                            variant.quantity === 0 ?
                                "opacity-30" : "") +
                            " flex items-center justify-center "
                        }
                    >

                        <span className="relative flex items-center justify-center">
                            {
                                variant.hint &&

                                <span dir="ltr" className={
                                    (selected === variant.name ? "bg-primary" : "bg-gray-600") +
                                    " text-[8px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none"}>
                                    <span className="px-1">{variant.hint}</span>
                                </span>
                            }
                            <VariantButton
                                onClick={() => {
                                    if (variant.quantity !== 0) {
                                        toggle(variant)
                                    }
                                    onSelect?.(variant);
                                }}
                                selected={selected === variant.name}
                                variant={variant} />
                        </span>

                    </span>
                ))}
            </div>
            {
                selected &&
                getVariant(selected)?.child &&
                <RenderVariantGroup
                    variantGroup={getVariant(selected)!.child!}
                    path={rest}
                    onPathChange={
                        // sub path
                        (path) => onPathChange([selected!, ...path])
                    }
                />
            }
        </div>
    )
}


// function OrderBox({ order }: { order: LocalOrder }) {
//     return (
//         <div className="rounded-lg bg-white dark:bg-gray-800  p-4">
//             <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold">الطلب #{order.id}</h3>
//                 <span className="text-sm text-gray-600">التوصيل: {calculateLocalOrderShipping(order)}دج</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">الكلفة: {calculateLocalOrderTotal(order, false)}دج</span>
//                 <span className="text-sm text-gray-600">الإجمالي: {calculateLocalOrderTotal(order)}دج</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">الدفع: {order.paymentMethod}</span>
//                 <span className="text-sm text-gray-600">الشحن: {order.shippingMethod}</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">العنوان: {order.shipping?.address.raw}</span>
//                 <span className="text-sm text-gray-600">الهاتف: {order.shipping?.phone}</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">الملاحظات: {order.shipping?.notes}</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600">المنتجات:</span>
//             </div>
//             <div className="h-2"></div>
//             <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-600
//                 ">
//                     {order.items.map(item => `${item.product.name} ${item.variants.join("-")}\n - الكمية:(x${item.quantity})`).join("\n")}
//                 </span>
//             </div>
//         </div>
//     )
// }

function ShippingBox({ shipping, setShipping }: { shipping: ShippingInfo, setShipping: (shipping: ShippingInfo) => void }) {
    function updateShippingWilaya(wilaya: string) {
        shipping!.address.state = wilaya;
        var baladiyat = getWilayat().find(e => e.en == shipping!.address.state)?.baladiyats;
        shipping!.address.city = baladiyat?.length ? baladiyat?.[0].en : ""
        setShipping({ ...shipping });
    }

    function canShipToHome(): boolean {
        var shippingArea = testStore.shipping.find(e => e.name == shipping.address.state);
        return !!(shippingArea?.active && shippingArea?.home);
    }
    function canShipToOffice(): boolean {
        var shippingArea = testStore.shipping.find(e => e.name == shipping.address.state);
        return !!(shippingArea?.active && shippingArea?.office);
    }
    console.log("canShipToOffice:", canShipToOffice())

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
                                            testStore.shipping.find(
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
                        {!shipping.doorShipping && "هل تريد "}التوصيل للبيت مقابل {!shipping.doorShipping && (<b dir="ltr">دج{((testStore.shipping.find(e => e.name == shipping.address.state)?.home || 0) - (testStore.shipping.find(e => e.name == shipping.address.state)?.office || 0))}</b>)}
                    </span>
                    {/* hint */}
                    <span className="text-xs text-gray-500 dark:text-gray-400">التوصيل للمكتب ارخص في العادة لكن يتطلب منك التنقل لأقرب مكتب</span>
                </div>
            </label>
        </div>
    )
}

/*
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
                                                    className="bg-transparent p-2  w-full pr-10
                                                invalid:outline-red-700 invalid:outline invalid:outline-2
                                                
                                                rounded-[inherit]
                                                "
                                                    type="tel"
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
                                                                    testStore.shipping.find(
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
                                                        placeholder="العنوان"
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
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            التوصيل للبيت (<b dir="ltr">+{(testStore.shipping.find(e => e.name == shipping.address.state)?.home || 0) - (testStore.shipping.find(e => e.name == shipping.address.state)?.office || 0)}</b>دج)
                                            <div className="w-2"></div>
                                            {
                                                !canShipToHome() && <span className="text-sm font-light">الشحن للبيت غالبا غير متوفر</span>
                                            }
                                            <div className="w-2"></div>
                                            {
                                                !canShipToOffice() && <span className="text-sm font-light">الشحن للمكتب غالبا غير متوفر</span>
                                            }

                                        </span>
                                    </label>

                                    <div className="h-4"></div>
                                    <div className="flex flex-col md:flex-row justify-between items-center" style={{ "--p": "#f92020" } as any}>
                                        <button
                                            onClick={sendOrder}
                                            type="submit" className="relative w-full pulse text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ">

                                            <AsynxWave
                                                color="white"
                                                width="100%"
                                                height="100%"
                                                className={"absolute start-0 top-0 bottom-0 h-full aspect-square"}
                                                padding={0}></AsynxWave>
                                            <div className="flex items-center justify-center" >أرسل طلبك الآن
                                                <span dir="ltr" className="mx-2 bg-white text-primary rounded-full px-2">
                                                    x{item.quantity}
                                                </span>
                                            </div>
                                            <div className="text-[12px] font-light">المبلغ الكلي مع الشحن:
                                                <b className="px-2 font-extrabold">{getTotal()} دج</b></div>
                                        </button>
                                        <div className="w-4"></div>
                                        <div className="flex items-center py-4">
                                            <button
                                                onClick={() => { item.quantity = Math.min(product!.quantity, item.quantity + 1); setItem({ ...item }) }}
                                                type="button" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100">
                                                <IconPlus className="text-white" />
                                            </button>
                                            <span className="px-2 text-gray-400">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => { item.quantity = Math.max(1, item.quantity - 1); setItem({ ...item }) }}
                                                type="button" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100">
                                                <IconMinus className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
*/