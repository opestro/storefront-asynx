import { StoreEntity } from "feeef/src/core/entities/store";
import { ShippingInfo } from "../pishop/models";
import { cities, states } from "../cities";
import { IconLocation, IconLocationBolt, IconLocationCode, IconPhone, IconUser } from "@tabler/icons-react";
import { getShippingRateForState } from "../pishop/logic";

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
export function ShippingForm({ store, shipping, setShipping, sendOrder }: { store: StoreEntity, shipping: ShippingInfo, setShipping: (shipping: ShippingInfo) => void, sendOrder: (status?: "draft" | "pending") => void }): JSX.Element {
    function updateShippingWilaya(stateCode: string) {
        const index = parseInt(stateCode) - 1;
        shipping!.address.state = stateCode;
        const baladiyat = cities[index];
        shipping!.address.city = baladiyat?.length ? (index + 1).toString().padStart(2, '0') : ""
        setShipping({ ...shipping });
    }

    function canShipToHome(): boolean {
        return true;
    }
    // function canShipToOffice(): boolean {
    //     var shippingArea = store.shipping.find(e => e.name == shipping.address.state);
    //     return !!(shippingArea?.active && shippingArea?.office);
    // }

    return (
        <div>
            <h2 className="text-xl font-semibold flex">معلومات الشحن</h2>
            <div className="h-2"></div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <label className="text-sm font-light flex items-center">الاسم</label>
                    <div className="relative border border-gray-500 border-opacity-20 rounded-lg">
                        <IconUser className="absolute top-2 right-2 text-gray-400" />
                        <input
                            required
                            className="bg-transparent p-2  w-full pr-10 invalid:outline-red-700 invalid:outline invalid:outline-2 rounded-[inherit]"
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
                                sendOrder("draft");
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <label className="text-sm font-light flex items-center">الولاية
                    </label>
                    <div className="relative overflow-visible border border-gray-500 border-opacity-20 rounded-lg">
                        <IconLocation className="absolute top-2 right-2 text-gray-400" />
                        <select className="bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit] focus:first-letter:outline-2" required
                            onChange={(e) => {
                                updateShippingWilaya(e.target.value);
                            }}
                            defaultValue={shipping!.address.state}
                        >
                            {
                                states.map((state, index) => {
                                    var rate = getShippingRateForState(store, (index + 1).toString().padStart(2, '0'))?.[shipping.doorShipping ? "home" : "desk"];
                                    return (
                                        <option
                                            disabled={!rate}
                                            key={index}
                                            value={index + 1}
                                        >{state} - {rate}{rate === null||rate === undefined ? 'غير متوفر': 'دج' }
                                        </option>
                                    );
                                })
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
                    <div className="relative overflow-visible border border-gray-500 border-opacity-20 rounded-lg">
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
                                !parseInt(shipping!.address.state) ? <span>لا يوجد بلديات</span> :
                                    cities[parseInt(shipping!.address.state) - 1].map((city, index) => (
                                        <option key={index}
                                            value={(index + 1).toString().padStart(2, '0')}
                                        >{city}</option>
                                    ))
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
                                defaultValue={shipping!.address.street}
                                onChange={(e) => {
                                    shipping!.address.street = e.target.value;
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
                        {/* {!shipping.doorShipping && "هل تريد "}التوصيل للبيت  {!shipping.doorShipping && (<b dir="ltr">مقابل دج{((store.shippingMethods.find(e => e.name == shipping.address.state)?.home || 0) - (store.shippingMethods.find(e => e.name == shipping.address.state)?.office || 0))}</b>)} */}
                        {!shipping.doorShipping && "هل تريد "}التوصيل للبيت {!shipping.doorShipping && (<b dir="ltr">مقابل دج{
                            getShippingRateForState(store, shipping.address.state)?.home
                        }</b>)}
                    </span>
                    {/* hint */}
                    <span className="text-xs text-gray-500 dark:text-gray-400">التوصيل للمكتب ارخص في العادة لكن يتطلب منك التنقل لأقرب مكتب</span>
                </div>
            </label>
        </div>
    )
}
