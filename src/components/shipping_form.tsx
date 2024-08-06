import { StoreEntity } from "feeef/src/core/entities/store";
import { ShippingInfo } from "../pishop/models";
import { cities, states } from "../cities";
import { IconLocation, IconLocationBolt, IconLocationCode, IconPhone, IconUser } from "@tabler/icons-react";
import { getShippingRateForState } from "../pishop/logic";
import { ShippingMethodEntity } from "feeef/src/core/core";
import { useState } from 'react';
import { tryFixPhoneNumber, validatePhoneNumber } from "../pishop/helpers";

/**
 * Represents a component for managing shipping information.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {StoreModel} props.store - The store model.
 * @param {ShippingInfo} props.shipping - The shipping information.
 * @param {Function} props.setShipping - The function to update the shipping information.
 * @returns {JSX.Element} The ShippingForm component.
 */
export function ShippingForm({ store, shipping, shippingMethod, setShipping, sendOrder }: {
    shippingMethod?: ShippingMethodEntity | null,
    store: StoreEntity, shipping: ShippingInfo, setShipping: (shipping: ShippingInfo) => void, sendOrder: (status?: "draft" | "pending") => void
}): JSX.Element {

    const [isPhoneValid, setIsPhoneValid] = useState(true);

    function updateShippingWilaya(stateCode: string) {
        const index = parseInt(stateCode) - 1;
        shipping!.address.state = stateCode;
        const baladiyat = cities[index];
        let currentCityIndex = (parseInt(shipping!.address.city) || 1) - 1;
        shipping!.address.city = (Math.min(currentCityIndex, baladiyat.length - 1) + 1).toString().padStart(2, '0');
        setShipping({ ...shipping });
    }

    function validatePhone(phone: string) {
        return !validatePhoneNumber(tryFixPhoneNumber(phone))
    }

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        const phone = e.target.value;
        const isValid = validatePhone(phone);
        shipping!.phone = phone;
        setShipping({ ...shipping });
        sendOrder("draft");
        setIsPhoneValid(isValid);
    }

    function canShipToHome(): boolean {
        return true;
    }

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
                            // required
                            className="bg-transparent p-2  w-full pr-10 invalid:outline-red-700 invalid:outline invalid:outline-2 rounded-[inherit]"
                            type="text"
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
                    <label className="text-sm font-light flex items-center">الهاتف
                        {
                            !isPhoneValid
                            &&
                            tryFixPhoneNumber(shipping.phone) != "0"
                            &&
                            <span className="mx-2 text-xs text-p">
                                {
                                    tryFixPhoneNumber(shipping.phone)
                                }
                            </span>
                        }
                    </label>
                    <div className={
                        
                        "relative border border-gray-500 border-opacity-20 rounded-lg "
                        + (isPhoneValid ? '' : ' text-red-500 pulse')
                        
                        }
                        style={
                            {
                                "--p": isPhoneValid ? 'transparent' : 'rgba(255, 0, 0, .5)'
                            } as React.CSSProperties
                        }
                        >
                        <IconPhone className={`absolute top-2 right-2 ${isPhoneValid ? 'text-gray-400' : 'text-red-400'}`} />
                        <input
                        style={
                            {
                                outline: "none",
                                "--p": 'transparent' 
                            } as React.CSSProperties
                        }
                            required
                            className={`bg-transparent p-2 w-full pr-10 overflow-hidden`}
                            type="tel"
                            placeholder="رقم الهاتف"
                            defaultValue={shipping!.phone}
                            onChange={handlePhoneChange}
                            // no outline forces
                        />
                        {!isPhoneValid && <div className="bg-red-500 rounded-b-lg text-white text-xs w-full text-center">
                            {validatePhoneNumber(tryFixPhoneNumber(shipping.phone))}    
                        </div>}
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                <div>
                    <label className="text-sm font-light flex items-center">الولاية</label>
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
                                    var rate = getShippingRateForState({
                                        shippingMethod,
                                        store,
                                        state: (index + 1).toString().padStart(2, '0')
                                    })?.[shipping.doorShipping ? "home" : "desk"];
                                    return (
                                        <option
                                            disabled={!rate}
                                            key={index}
                                            value={index + 1}
                                        >{state} - {rate !== null && rate !== undefined ? `${rate} دج` : 'غير متوفر'}
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
                            <span className="mx-2 text-xs text-red-500">(اختر الولاية أولاً)</span>
                        }
                        {
                            shipping!.address.city &&
                            <span className="mx-2 text-xs text-red-500">({shipping!.address.city})</span>
                        }
                    </label>
                    <div className="relative overflow-visible border border-gray-500 border-opacity-20 rounded-lg">
                        <IconLocationCode className="absolute top-2 right-2 text-gray-400" />
                        <select className="bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit]" required
                            onChange={(e) => {
                                shipping!.address.city = e.target.value;
                                setShipping({ ...shipping });
                            }}
                            value={shipping!.address.city}
                            disabled={!shipping!.address.state}
                        >
                            {
                                !parseInt(shipping!.address.state) ? <option>لا يوجد بلديات</option> :
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
                    </div>
                </>
            }
            <div className="h-4"></div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" onChange={() => {
                    shipping.doorShipping = !shipping.doorShipping && canShipToHome();
                    setShipping({ ...shipping })
                }} checked={shipping.doorShipping} className="sr-only peer" />
                <div className="pulse w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:m-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                <div className="ms-3 flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        {!shipping.doorShipping && "هل تريد "}التوصيل للبيت {!shipping.doorShipping && (<b dir="ltr">مقابل دج{
                            getShippingRateForState({
                                shippingMethod,
                                store,
                                state: shipping.address.state
                            })?.home
                        }</b>)}
                    </span>
                    {/* <span className="text-xs text-gray-500">حدد هذا الخيار إن كان لديك عنوان توصيل غير عنوانك الحالي</span> */}
                </div>
            </label>
        </div>
    );
}