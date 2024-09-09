
import { ProductEntity, StoreEntity } from "feeef";
import { ff } from "./feeef"
var _stores: Record<string, StoreEntity> = {};
var _products: Record<string, ProductEntity> = {};
var _storeProducts: Record<string, ProductEntity[]> = {};

export async function getStore(host: string): Promise<StoreEntity> {
    if (_stores[host] && !import.meta.env.SSR) return _stores[host];
    // if contains XXX.feeef.shop use slug, else domain.name
    const isFeeefShop = host.includes(".feeef.shop")
        || host.includes(".khfif.shop")
        || host.includes(".lvh.me");

    var store = await ff.stores.find({
        id: isFeeefShop ? host.split(".")[0] : host,
        by: isFeeefShop ? "slug" : "domain.name",
    });
    _stores[host] = store;
    return store;
}

export async function getProduct(slug: string): Promise<ProductEntity> {
    if (_products[slug] && !import.meta.env.SSR) return _products[slug];
    var product = await ff.products.find({
        id: slug,
        by: "slug",
    });
    _products[slug] = product;
    return product;
}

export async function getProducts(storeId: string): Promise<ProductEntity[]> {
    if (_storeProducts[storeId] && !import.meta.env.SSR) return _storeProducts[storeId];
    var products = await ff.products.list({
        params: {
            store_id: storeId,
        },
    });
    _storeProducts[storeId] = products.data;
    // add all products
    for (let product of products.data) {
        _products[product.slug] = product;
    }
    return products.data;
}