


/**
 * Represents a store model.
 */
interface StoreModel {
    ref: string,
    name: string,
    banner: string | null,
    title: string,
    description: string | null,
    address: AddressModel | null,
    domain: StoreDomainModel | null,
    logo: ImageModel | null, 
    darkLogo: ImageModel | null,
    cover: string | null,
    theme: StoreThemeModel,

    action?: StoreAction | null,

    currency: Currency,

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
            active: boolean,
            chatId: string,
            token: string,
            template: string,
        },
        facebookPixel?: {
            active: boolean,
            id: string,
        }
    },

}

interface StoreAction {
    label: string,
    url : string,
    type: StoreActionType,
}

enum StoreActionType {
    link = 'link',
    whatsapp = 'whatsapp',
    telegram = 'telegram',
    phone = 'phone',
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
    verifiedAt?: string | null,
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



// export all
export { ProductType, VariantOptionType, StoreActionType};
export type { StoreModel, MediaModel, ImageModel, VideoModel, StoreProductModel, StoreCategoryModel, StoreThemeModel, StoreDomainModel, AddressModel, LocationModel, VariantGroup, VariantOption, ShippingInfo, LocalOrderItem, Currency };
