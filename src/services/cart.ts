import { OrderItem } from "feeef/src/core/core";

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
        let cartl = localStorage.getItem("cart");
        if (cartl) {
            this.items = JSON.parse(cartl);
            console.log("cart loaded", cartl);
        }
    },

    // save
    save() {
        if (typeof localStorage === "undefined") return;
        localStorage.setItem("cart", JSON.stringify(this.items));
    },

    items: [] as OrderItem[],


    add(item: OrderItem) {
        this.items.push(item);
        this.save();
    },

    updateQuantity(productId: string, quantity: number) {
        let item = this.items.find((item) => item.productId === productId);
        if (item) {
            item.quantity = quantity;
        }
        this.save();
    },

    updatePrice(productId: string, price: number) {
        let item = this.items.find((item) => item.productId === productId);
        if (item) {
            item.price = price;
        }
        this.save();
    },

    updateVariantPath(productId: string, variantPath: string|undefined) {
        let item = this.items.find((item) => item.productId === productId);
        if (item) {
            item.variantPath = variantPath;
        }
        this.save();
    },
    
    removeProduct(productId: string) {
        this.items = this.items.filter((item) => item.productId !== productId);
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
        return this.items.some((item) => item.productId === productId);
    },

    clear() {
        this.items = [];
        this.save();
    }
};