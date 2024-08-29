import { Link } from "react-router-dom";
import AsynxWave from "../widgets/asynx_wave";
import { OrderEntity, StoreEntity } from "feeef/src/core/core";


export default function Thanks({ order, onDone }: {
    store: StoreEntity,
    order: OrderEntity, onDone: () => void
}) {
    return (
        <div
            className=""
        >
            <center>
                رقم الطلب #{order.id}
            </center>
            <div className="h-5"></div>
            <div className="relative">
                <h2 className="text-7xl flex">
                    <AsynxWave></AsynxWave>شكــــراً</h2>
                <h3>{order.customerName} تلقينا طلبك</h3>
            </div>
            <div className="my-2 h-[1px] line" />
            <div>
                <h3>سنتصل بك على <b>{order.customerPhone}</b></h3>
            </div>
            {/* <div className="flex text-[12px]"><h4 className="font-light">بدون شحن</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order, false)}{getCurrencySymbolByStore(store)}</div></div> */}
            {/* <div className="flex text-[12px]"><h4 className=" font-light">مبلغ الشحن</h4><div className="flex-grow"></div><div>{calculateLocalOrderShipping(store, order)}{getCurrencySymbolByStore(store)}</div></div> */}
            <div className="h-1"></div>
            {/* <div className="flex"><h4 className="text-sm font-light">المجموع</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order)}{getCurrencySymbolByStore(store)}</div></div> */}
            <div className="h-2"></div>
            <button type="button" className="w-full pulse btn gb" onClick={onDone}>إغلاق</button>
            <div className="h-2"></div>
            {/* تتبع حالة الطلب https://track.feeef.net/track/:id */}
            <div className="p-2 bg-gray-100 text-center">
                <a href={`https://track.feeef.net/track/${order.id}`} target="_blank" className="text-blue-500">تتبع حالة الطلب</a>
            </div>
            <div className="h-2"></div>
            <Link to="/"><button type="button" className="w-full btn gb">باقي المنتجات</button></Link>
        </div>
    )
}