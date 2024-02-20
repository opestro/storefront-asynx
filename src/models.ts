import { testStore } from "./main";
import { generateOrderId } from "./pages/product";

interface StoreModel {
  ref: string,
  name: string,
  title: string,
  description: string | null,
  address: AddressModel | null,
  domain: StoreDomainModel | null,
  logo: ImageModel | null,
  darkLogo: ImageModel | null,
  cover: string | null,
  theme: StoreThemeModel,
  shipping: {
    name: String,
    code: String,
    office?: number | null,
    home?: number | null,
    active?: boolean,
  }[],

  // phones
  phones: {
    number: string,
    verifiedAt: any,
    name: string,
  }[],

  // socials
  socials: {
    facebook: string,
    instagram: string,
    twitter: string,
    links: {
      name: string,
      url: string,
    }[],
  },

  // links
  links: {
    name: string,
    url: string,
  }[],

  // relations
  categories: StoreCategoryModel[],
  products: StoreProductModel[],
  integrations: {
    telegram?: {
      active:boolean,
      chatId: string,
      token: string,
      template: string,
    },
    facebookPixel?:{
      active:boolean,
      id:string,
    }
  },


  //
  [key: string]: any,

}

interface MediaModel {
  url: string,
  type: string,
  //
  [key: string]: any,
}

interface ImageModel extends MediaModel {
  width?: number,
  height?: number,
  //
  [key: string]: any,
}

interface VideoModel extends MediaModel {
  duration: number,
  width: number,
  height: number,
  source: string,
  //
  [key: string]: any,
}

interface StoreProductModel {
  name: string,
  description: string | null,
  body: string | null,
  price: number,
  discount: number,
  currency: Currency,
  media: MediaModel[],
  image: ImageModel | null,
  categories: StoreCategoryModel[],
  tags: string[],
  storeId: string,
  slug: string,
  id: string,
  reviews: any[],
  rate: number,
  variants?: VariantGroup,
  quantity: number,
  type: ProductType,
  isPreorder: boolean,
  createdAt: any,
  updatedAt: any,
  deletedAt: any,

  //
  [key: string]: any,
}

interface Currency {
  code: string,
  symbol: string,
}

enum ProductType {
  physical = 'physical',
  digital = 'digital',
  service = 'service',
}


// color

interface StoreCategoryModel {
  name: string,
  description: string | null,
  icon?: string | null,
  cover?: string | null,
  //
  [key: string]: any,
}

interface StoreThemeModel {
  name: string,
  color: string | null,
  //
  [key: string]: any,
}



interface StoreDomainModel {
  domain: string,
  verifiedAt?: string|null,
  //
  [key: string]: any,
}

interface AddressModel {
  raw: string,
  state?: string,
  city?: string,
  zip?: string,
  location?: LocationModel,
  //
  [key: string]: any,
}

interface LocationModel {
  latitude: number,
  longitude: number,
  geohash: string,
  //
  [key: string]: any,
}

interface VariantGroup {
  name: string,
  options: VariantOption[],
  //
  [key: string]: any,
}

interface VariantOption {
  name: string,
  hint?: string,
  price?: number | null,
  discount?: number | null,
  quantity?: number,
  mediaIndex?: number | null,
  image?: ImageModel | null,
  type?: VariantOptionType,
  value?: string,

  child?: VariantGroup,
  //
}

enum VariantOptionType {
  color = 'color',
  image = 'image',
  text = 'text',
}


interface ShippingInfo {
  name: string,
  phone: string,
  email?: string,
  address: AddressModel,
  doorShipping?: boolean,
  notes?: string,
  //
  [key: string]: any,
}

interface LocalOrderItem {
  product: StoreProductModel,
  variants: string[],
  quantity: number,
}

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

function calculateLocalOrderShipping(localOrder: LocalOrder) {
  var shipping = testStore.shipping.find(e => e.name == localOrder.shipping?.address.state)
  if (!shipping) {
    return 0;
  }
  return !!localOrder.shipping?.doorShipping && shipping.home ?
    shipping.home! :
    shipping.office || 0;
}

function calculateLocalOrderTotal(localOrder: LocalOrder, withShipping = true) {
  var shippingPrice = 0;
  if (withShipping) {
    var shipping = testStore.shipping.find(e => e.name == localOrder.shipping?.address.state)
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
export { LocalOrder, ProductType, VariantOptionType };
export type { ShippingInfo, LocalOrderItem };
export type { VariantGroup, VariantOption, StoreModel, MediaModel, ImageModel, VideoModel, StoreProductModel, StoreCategoryModel, StoreThemeModel, StoreDomainModel, AddressModel, LocationModel };
