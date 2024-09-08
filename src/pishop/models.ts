

import { EmbaddedAddress, EmbaddedCategory, EmbaddedContact, ProductEntity, StoreBanner, StoreDecoration, StoreDomain, StoreEntity, UserEntity } from 'feeef';
/**
 * Represents a store model.
 */
interface StoreModel extends StoreEntity {

    id: string;
    slug: string;
    banner: StoreBanner | null;
    action: StoreAction | null;
    domain: StoreDomain | null;
    decoration: StoreDecoration | null;
    name: string;
    logoUrl: string | null;
    ondarkLogoUrl: string | null;
    userId: string;
    categories: EmbaddedCategory[];
    title: string | null;
    description: string | null;
    addresses: EmbaddedAddress[];
    metadata: Record<string, any>;
    contacts: EmbaddedContact[];
    // integrations: StoreIntegration[];
    verifiedAt: any | null;
    blockedAt: any | null;
    createdAt: any;
    updatedAt: any;
    // products: ProductEntity[];
    user: UserEntity;
    // orders: OrderEntity[];
    // shippingMethods: ShippingMethodEntity[];

    shippingMethods: {
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

    // links
    links: {
        name: string,
        url: string,
    }[],

    // relations
    products: ProductEntity[],
    // integrations: {
    //     telegram?: {
    //         active: boolean,
    //         chatId: string,
    //         token: string,
    //         template: string,
    //     },
    //     facebookPixel?: {
    //         active: boolean,
    //         id: string,
    //     }
    // },

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


interface Currency {
    code: string,
    symbol: string,
}

enum ProductType {
    physical = 'physical',
    digital = 'digital',
    service = 'service',
}

interface StoreCategoryModel extends EmbaddedCategory {
    name: string;
    description: string;
    photoUrl: string | null;
    ondarkPhotoUrl?: string | null;
    metadata?: Record<string, any>;
  }

interface StoreThemeModel {
    name: string,
    color: string | null,
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
    // image?: ImageModel | null,
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
    address: EmbaddedAddress,
    doorShipping?: boolean,
    notes?: string,
    //
    [key: string]: any,
}

interface LocalOrderItem {
    product: ProductEntity,
    variants: string[],
    quantity: number,
}



// export all
export { ProductType, VariantOptionType, StoreActionType};
export type { StoreModel, ProductEntity as StoreProductModel, StoreCategoryModel, StoreThemeModel, EmbaddedAddress as AddressModel, LocationModel, VariantGroup, VariantOption, ShippingInfo, LocalOrderItem, Currency };
