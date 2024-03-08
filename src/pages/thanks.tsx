import { Link } from "react-router-dom";
import AsynxWave from "../widgets/asynx_wave";
import { LocalOrder, calculateLocalOrderTotal, calculateLocalOrderShipping } from "../pishop/logic";
import { StoreModel } from "../pishop/models";


export default function Thanks({ store, order, onDone }: {
    store: StoreModel,
    order: LocalOrder, onDone: () => void
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
                <h3>{order.shipping?.name} تلقينا طلبك</h3>
            </div>
            <div className="my-2 h-[1px] line" />
            <div>
                <h3>سنتصل بك على <b>{order.shipping?.phone}</b></h3>
            </div>
            <div className="my-2  h-[1px] line" />
            <h4 className="text-sm font-light">التفاصيل</h4>
            <div className="h-2"></div>
            {
                order.items.map((e, i) => (
                    <div key={i} className="flex items-center">
                        <div>
                            <img src={e.product.image?.url} className="border-2 border-white w-7 h-7 rounded-full" />
                        </div>
                        <div className="w-4"></div>
                        <div>
                            <div className="flex items-center">
                                {e.product.name}
                                <span dir="ltr" className="mx-2 text-sm bg-primary text-white rounded-full px-2">
                                    x{e.quantity}
                                </span>
                            </div>
                            <div className="text-[10px] font-light">{e.variants.join(" / ")}</div>
                        </div>
                    </div>
                ))
            }
            <div className="my-2  h-[1px] line" />
            <h4 className="text-sm font-light">الشحن إلى</h4>
            {
                order.shipping?.doorShipping && order.shipping?.address.raw ?
                    order.shipping?.address.raw :
                    "مكتب الولاية"
            }, {order.shipping?.address.state}, {order.shipping?.address.city}
            <div className="my-2  h-[1px] line" />
            <div className="flex text-[12px]"><h4 className="font-light">بدون شحن</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order, false)}دج</div></div>
            <div className="flex text-[12px]"><h4 className=" font-light">مبلغ الشحن</h4><div className="flex-grow"></div><div>{calculateLocalOrderShipping(store, order)}دج</div></div>
            <div className="h-1"></div>
            <div className="flex"><h4 className="text-sm font-light">المجموع</h4><div className="flex-grow"></div><div>{calculateLocalOrderTotal(store, order)}دج</div></div>
            <div className="h-2"></div>
            <button type="button" className="w-full pulse btn gb" onClick={onDone}>موافق</button>
            <div className="h-2"></div>
            <Link to="/"><button type="button" className="w-full btn gb">باقي المنتجات</button></Link>
        </div>
    )
}