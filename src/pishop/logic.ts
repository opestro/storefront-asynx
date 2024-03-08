import { generateOrderId } from "../pages/product";
import { ShippingInfo, LocalOrderItem, StoreModel, StoreProductModel } from "./models";


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

function calculateLocalOrderShipping(store:StoreModel, localOrder: LocalOrder) {
  var shipping = store.shipping.find(e => e.name == localOrder.shipping?.address.state)
  if (!shipping) {
    return 0;
  }
  return !!localOrder.shipping?.doorShipping && shipping.home ?
    shipping.home! :
    shipping.office || 0;
}

function calculateLocalOrderTotal(store:StoreModel,localOrder: LocalOrder, withShipping = true) {
  var shippingPrice = 0;
  if (withShipping) {
    var shipping = store.shipping.find(e => e.name == localOrder.shipping?.address.state)
    if (!shipping) {
      return 0;
    }
    shippingPrice = !!localOrder.shipping?.doorShipping && shipping.home ?
      shipping.home! :
      shipping.office || 0;
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
  var variant = product?.variants;

  for (let i = 0; i < variantPath.length; i++) {
    var option = variant?.options.find(e => e.name == variantPath[i])!
    price = option.price || price;
    variant = option.child
  }
  return price;
}
function getProductPriceAfterDiscount(product: StoreProductModel, variantPath: string[]): number {
  var price = product!.price - (product!.discount || 0);
  var variant = product?.variants;

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
  var quantity = product!.quantity;
  var variant = product?.variants;

  for (let i = 0; i < variantPath.length; i++) {
    var option = variant?.options.find(e => e.name == variantPath[i])!
    quantity = option.quantity || quantity;
    variant = option.child
  }
  return quantity;
}
export {calculateLocalOrderShipping, calculateLocalOrderTotal, getProductPriceWithoutVariantsDiscount, getProductPriceAfterDiscount,getProductDiscountPercentage, getProductQuantity };
export { LocalOrder };
