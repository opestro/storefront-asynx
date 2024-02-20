import { Link } from "react-router-dom";
import { StoreProductModel } from "../models";

// [ProductCard] is a component that renders a product card
// it takes [StoreProduct] as a prop
// it renders the product image, name, price and a button to add the product to the cart


export const ProductCard: React.FunctionComponent<{
    product: StoreProductModel;
}> = (props) => {
    const { product } = props;
    return (
        <Link to={`/product/${product.id}`}>
        <div className="gb rounded-2xl p-2">
            <div className="gb rounded-[8px] p-[1px]">

                <img className="rounded-[7px] aspect-square" src={product.image?.url} alt={product.name} />
            </div>
            <div className="h-2"></div>
            <div>
                <h3>{product.name}</h3>
                <div className="h-1"></div>
                <div className="flex items-center">
                    <span className="rounded-md px-1 text-orange-500 text-lg">
                        {
                            !!product.discount ?
                                (product.price - product.discount).toFixed(0)
                                : product.price.toFixed(0)
                        }
                        دج
                    </span>
                    {
                        !!product.discount &&
                        <span className="px-1 text-gray-400 line-through text-sm">
                            {product.price} دج
                        </span>
                    }
                </div>
                <div className="h-2"></div>
                <button
                    type="button" className="btn gb w-full">شراء

                    {
                        !!product.discount &&
                        <span dir="ltr" className="mx-2 bg-primary text-white rounded-sm px-1">
                            -{(product.discount*100 / product.price).toFixed(0)}%
                        </span>
                    }
                </button>
            </div>
        </div>
        </Link>
    )
}
