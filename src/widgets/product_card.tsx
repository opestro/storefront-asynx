import { Link } from "react-router-dom";
import { ProductEntity } from "feeef/src/core/core";

/**
 * ProductCard component displays a card for a product.
 * @param {Object} props - The component props.
 * @param {ProductEntity} props.product - The product to display.
 */
export const ProductCard: React.FunctionComponent<{
    product: ProductEntity;
}> = ({ product }) => {
    // Calculate total price and discount percentage
    const total = !!product.discount
        ? (product.price - product.discount).toFixed(0)
        : product.price.toFixed(0);
    const discount = !!product.discount
        ? ((product.discount * 100) / product.price).toFixed(0)
        : null;

    return (
        <Link to={`/p/${product.slug}`}>
            <div className="gb rounded-2xl p-2">
                <div className="gb rounded-[8px] p-[1px] aspect-square">
                    <img
                        className="rounded-[7px] w-full h-full object-cover"
                        src={product.photoUrl ?? ""}
                        alt={product.name ?? ""}
                    />
                </div>
                <div className="h-2"></div>
                <div>
                    <div className="flex items-center">
                        <span className="rounded-md  text-orange-500 text-lg">
                            {total} دج
                        </span>
                        {!!product.discount && (
                            <span className="px-1 text-gray-400 line-through text-sm">
                                {product.price} دج
                            </span>
                        )}
                    </div>
                    <h3>{product.name}</h3>
                    <div className="h-1"></div>
                    {product.description && (
                        <p className="text-gray-400 dark:text-gray-500 text-sm font-light">
                            {product.description?.substring(0, 60)}...
                        </p>
                    )}
                    <div className="h-2"></div>
                    <button type="button" className="btn gb w-full">
                        اشتري الآن
                        {!!product.discount && (
                            <span dir="ltr" className="mx-2 bg-primary text-white rounded-sm px-1">
                                -{discount!}%
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </Link>
    );
};
