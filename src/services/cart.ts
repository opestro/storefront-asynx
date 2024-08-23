import { OrderItem, ProductEntity, ShippingMethodEntity, StoreEntity } from "feeef/src/core/core";
import { getShippingRateForState } from "../pishop/logic";
import { ShippingInfo } from "src/pishop/models";

interface LocalOrderItem {
    product: ProductEntity;
    variantPath?: string
    quantity: number
    price: number
}

export const cart = {
    inited: false,

    // init
    init() {
        if (this.inited) return;
        this.load();
        this.inited = true;
    },

    // load
    load() {
        if (typeof localStorage === "undefined") return;
        try {

            let cartl = localStorage.getItem("cart");
            if (cartl) {
                this.items = JSON.parse(cartl);
                // verify cart items
                this.items = this.items.filter((item) => {
                    return item.product && item.product.id;
                });
                console.log("cart loaded", cartl);
            }
        } catch (e) {
            console.error("cart load error", e);
            // clear cart
            this.clear();
        }
    },

    // save
    save() {
        if (typeof localStorage === "undefined") return;
        localStorage.setItem("cart", JSON.stringify(this.items));
    },

    items: [] as LocalOrderItem[],

    getOrderItems(): OrderItem[] {
        return this.items.map<OrderItem>((item) => {
            return {
                productId: item.product.id,
                productName: item.product.name!,
                variantPath: item.variantPath,
                quantity: item.quantity,
                price: item.price
            };
        });
    },


    add(item: LocalOrderItem) {
        this.items.push(item);
        this.save();
    },

    updateQuantity(productId: string, quantity: number) {
        let item = this.items.find((item) => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
        }
        this.save();
    },

    updatePrice(productId: string, price: number) {
        let item = this.items.find((item) => item.product.id === productId);
        if (item) {
            item.price = price;
        }
        this.save();
    },

    updateVariantPath(productId: string, variantPath: string | undefined) {
        let item = this.items.find((item) => item.product.id === productId);
        if (item) {
            item.variantPath = variantPath;
        }
        this.save();
    },

    removeProduct(productId: string) {
        this.items = this.items.filter((item) => item.product.id !== productId);
        this.save();
    },
    get total() {
        var ttl = 0;
        this.items.forEach((item) => {
            ttl += item.price * item.quantity;
        });
        console.log("total", this.items);
        return ttl;
    },

    hasProduct(productId: string) {
        return this.items.some((item) => item.product.id === productId);
    },

    clear() {
        this.items = [];
        this.save();
    },

    canAddProduct(product: ProductEntity) {
        if (this.items.length === 0) return true;
        if (this.items[0].product.storeId != product.storeId) return false;
        if (this.items[0].product.shippingMethodId != product.shippingMethodId) return false;
        return true;
    },

    getShippingRate(shipping: ShippingInfo, store: StoreEntity) {
        // var rate = getShippingRateForState({
        //     state: shipping.address.state,
        //     shippingMethod: product.shippingMethod,
        //     store,
        // })
        // if (shipping.doorShipping) {
        //     return rate?.home;
        // }
        // return rate?.desk;

        // group product that have same shipping method
        // then calculate rate for each group
        // then sum all rate
        var groups: Record<string, ShippingMethodEntity | null> = {};
        for (let item of this.items) {
            if (item.product.shippingMethodId) {
                groups[item.product.shippingMethodId || "null"] = item.product.shippingMethod || null;
            }
        }
        var rate = 0;
        for (let groupId in groups) {
            var groupRate = getShippingRateForState({
                state: shipping.address.state,
                shippingMethod: groups[groupId],
                store,
            });
            if (shipping.doorShipping) {
                rate += groupRate?.home || 0;
            } else {
                rate += groupRate?.desk || 0;
            }
        }
        return rate;
    }

};