import { StoreEntity } from "fif_core";
import { generateOrderId } from "../pages/product";
import { ShippingInfo, LocalOrderItem, StoreProductModel } from "./models";


// class order
class LocalOrder {
  id: string = generateOrderId();
  // shipping info
  shipping: ShippingInfo | null = null;
  // items
  items: LocalOrderItem[] = [];
  // payment method
  paymentMethod: string = 'cod';
  // shipping method
  shippingMethod: string = 'standard';
  // // shipping price
  // shippingPrice: number = 0;
  // reference
  ref: string | null = null;
}


export function getShippingRateForState(store: StoreEntity|null, state: string|null) {
  if (!store || !state) return null;
  var stateIndex = parseInt(state)-1;
   var rate = store.defaultShippingRates?.[stateIndex];
   return {
      desk: rate?.[0] || null,
      home: rate?.[1] || null,
   }
}

function calculateLocalOrderShipping(store:StoreEntity, localOrder: LocalOrder) {
  var rate = getShippingRateForState(store, localOrder.shipping!.address.state);
  return rate?.[localOrder.shipping?.doorShipping ? 'home' : 'desk'] ?? null
}

function calculateLocalOrderTotal(store:StoreEntity,localOrder: LocalOrder, withShipping = true) {
  var shippingPrice: number|null = 0;
  if (withShipping) {
    shippingPrice = calculateLocalOrderShipping(store, localOrder);
    if (shippingPrice == null) return null;
  }

  return localOrder.items.reduce((total, item) => {
    return total + (

      (
        getProductPriceAfterDiscount(item.product, item.variants)
)

      * item.quantity);
  }, 0) + shippingPrice;
}

function getProductPriceWithoutVariantsDiscount(product: StoreProductModel, variantPath: string[]): number {
  var price = product!.price;
  var variant = product?.variant;

  for (let i = 0; i < variantPath.length; i++) {
    var option = variant?.options.find(e => e.name == variantPath[i])!
    price = option.price || price;
    variant = option.child
  }
  return price;
}
function getProductPriceAfterDiscount(product: StoreProductModel, variantPath: string[]): number {
  var price = product!.price - (product!.discount || 0);
  var variant = product?.variant;

  for (let i = 0; i < variantPath.length; i++) {
    var option = variant?.options.find(e => e.name == variantPath[i])!
    price = (option.price || price)  - (option.discount || 0);
    variant = option.child
  }
  return price;
}
function getProductDiscountPercentage(product: StoreProductModel, variantPath: string[]): number {
  var price = getProductPriceWithoutVariantsDiscount(product,variantPath);
  if (price == 0) return 0;
  return getProductPriceAfterDiscount(product,variantPath) / price;
}
function getProductQuantity(product: StoreProductModel, variantPath: string[]): number {
  var quantity = product!.stock;
  var variant = product?.variant;

  for (let i = 0; i < variantPath.length; i++) {
    var option = variant?.options.find(e => e.name == variantPath[i])!
    quantity = option.stock || quantity;
    variant = option.child
  }
  return quantity;
}
export {calculateLocalOrderShipping, calculateLocalOrderTotal, getProductPriceWithoutVariantsDiscount, getProductPriceAfterDiscount,getProductDiscountPercentage, getProductQuantity };
export { LocalOrder };
