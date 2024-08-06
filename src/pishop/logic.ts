import {
  ProductEntity,
  ShippingMethodEntity,
  StoreEntity,
} from "feeef/src/core/core";
import { generateOrderId } from "../pages/product";
import { ShippingInfo, LocalOrderItem } from "./models";

// class order
class LocalOrder {
  id: string = generateOrderId();
  // shipping info
  shipping: ShippingInfo | null = null;
  // items
  items: LocalOrderItem[] = [];
  // payment method
  paymentMethod: string = "cod";
  // shipping method
  shippingMethod: string = "standard";
  // // shipping price
  // shippingPrice: number = 0;
  // reference
  ref: string | null = null;

  // computed props
  // totla without shipping
  // get total() {
  //   return calculateLocalOrderTotal(this.store!, this);
  // }
}

export function getShippingRateForState({
  shippingMethod,
  store,
  state,
}: {
  shippingMethod?: ShippingMethodEntity | null;
  store: StoreEntity | null;
  state: string | null;
}) {
  if (!store || !state) return null;
  var stateIndex = parseInt(state) - 1;
  var rate =
    shippingMethod?.rates?.[stateIndex] ||
    store.defaultShippingRates?.[stateIndex];
  return {
    desk: rate?.[0] || null,
    home: rate?.[1] || null,
  };
}

function calculateLocalOrderShipping({
  shippingMethod,
  store,
  localOrder,
}: {
  shippingMethod?: ShippingMethodEntity | null;
  store: StoreEntity;
  localOrder: LocalOrder;
}) {
  var rate = getShippingRateForState({
    shippingMethod,
    store,
    state: localOrder.shipping!.address.state,
  });
  return rate?.[localOrder.shipping?.doorShipping ? "home" : "desk"] ?? null;
}

/**
 * Calculates the total order amount for a local order, including shipping if specified.
 * @param store - The store entity.
 * @param localOrder - The local order object.
 * @param withShipping - Optional parameter to include shipping cost. Default is true.
 * @returns The total order amount, including shipping if applicable. Returns null if there is an error calculating the shipping cost.
 */
function calculateLocalOrderTotal({
  shippingMethod,
  store,
  localOrder,
  withShipping = true,
}: {
  shippingMethod?: ShippingMethodEntity | null;
  store: StoreEntity;
  localOrder: LocalOrder;
  withShipping: boolean;
}) {
  let shippingPrice: number | null = 0;
  if (withShipping) {
    shippingPrice = calculateLocalOrderShipping({
      shippingMethod,
      store,
      localOrder,
    });
    if (shippingPrice == null) return null;
  }

  return (
    localOrder.items.reduce((total, item) => {
      return (
        total +
        getProductPriceAfterDiscount(item.product, item.variants) *
          item.quantity
      );
    }, 0) + shippingPrice
  );
}
function getProductPriceWithoutconstiantsDiscount(
  product: ProductEntity,
  path: string[]
): number {
  let price = product!.price;
  let variant = product?.variant;

  for (let i = 0; i < path?.length; i++) {
    var option = variant?.options.find((e) => e.name == path[i])!;
    price = option.price || price;
    variant = option.child;
  }
  return price;
}
function getProductPriceAfterDiscount(
  product: ProductEntity,
  path: string[]
): number {
  let price = product?.price - (product!.discount || 0);
  let variant = product?.variant;

  for (let i = 0; i < path?.length; i++) {
    var option = variant?.options.find((e) => e.name == path[i])!;
    price = (option.price || price) - (option.discount || 0);
    variant = option.child;
  }
  return price;
}
function getProductDiscountPercentage(
  product: ProductEntity,
  path: string[]
): number {
  var price = getProductPriceWithoutconstiantsDiscount(product, path);
  if (price == 0) return 0;
  return getProductPriceAfterDiscount(product, path) / price;
}
function getProductQuantity(product: ProductEntity, path: string[]): number {
  var quantity = product!.stock;
  var variant = product?.variant;

  for (let i = 0; i < path.length; i++) {
    var option = variant?.options.find((e) => e.name == path[i])!;
    quantity = option.stock || quantity;
    variant = option.child;
  }
  return quantity;
}
export {
  calculateLocalOrderShipping,
  calculateLocalOrderTotal,
  getProductPriceWithoutconstiantsDiscount,
  getProductPriceAfterDiscount,
  getProductDiscountPercentage,
  getProductQuantity,
};
export { LocalOrder };
