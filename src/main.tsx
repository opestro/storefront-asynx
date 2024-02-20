import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/product';
import ReactPixel from 'react-facebook-pixel';
import { StoreModel, VariantOptionType, ProductType } from './models';
// import { Bot, Context } from 'grammy';
// import { ParseModeFlavor } from '@grammyjs/parse-mode';
// import axios from 'axios';


export const testStore: StoreModel = {
  ref: 'stores/everysense',
  id: 'everysense',
  name: 'everysense',
  title: 'عطور من الطبيعة',
  description: 'اكتشف تشكيلتنا، عطور من الطبيعة، معطرات ومزيلات الروائح، معقمات ومعطرات الأقمشة والجلود',
  address: null,
  domain: {
    domain:  "everysense.shop",
    verifiedAt: Date.now().toString(),
  },
  shipping: [
    {
      "active": true,
      "name": "adrar",
      "code": "01",
      "office": 500,
      "home": 800
    },
    {
      "active": true,
      "name": "chlef",
      "code": "02",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "laghouat",
      "code": "03",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "oum el bouaghi",
      "code": "04",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "batna",
      "code": "05",
      "office": 500,
      "home": 597
    },
    {
      "active": true,
      "name": "bejaia",
      "code": "06",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "biskra",
      "code": "07",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "blida",
      "code": "09",
      "office": 500,
      "home": 400
    },
    {
      "active": true,
      "name": "bechar",
      "code": "08",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "bouira",
      "code": "10",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "tamanrasset",
      "code": "11",
      "office": 600,
      "home": 1300
    },
    {
      "active": true,
      "name": "tebessa",
      "code": "12",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "tlemcen",
      "code": "13",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "tiaret",
      "code": "14",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "tizi ouzou",
      "code": "15",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "alger",
      "code": "16",
      "office": 200,
      "home": 400
    },
    {
      "active": true,
      "name": "djelfa",
      "code": "17",
      "home": 500
    },
    {
      "active": true,
      "name": "jijel",
      "code": "18",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "setif",
      "code": "19",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "saida",
      "code": "20",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "skikda",
      "code": "21",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "sidi bel abbes",
      "code": "22",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "annaba",
      "code": "23",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "guelma",
      "code": "24",
      "home": 600
    },
    {
      "active": true,
      "name": "constantine",
      "code": "25",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "medea",
      "code": "26",
      "office": 500,
      "home": 400
    },
    {
      "active": true,
      "name": "mostaganem",
      "code": "27",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "msila",
      "code": "28",
      "home": 600
    },
    {
      "active": true,
      "name": "mascara",
      "code": "29",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "ouargla",
      "code": "30",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "oran",
      "code": "31",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "el bayadh",
      "code": "32",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "illizi",
      "code": "33",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "bordj bou arreridj",
      "code": "34",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "boumerdes",
      "code": "35",
      "office": 500,
      "home": 400
    },
    {
      "active": true,
      "name": "el tarf",
      "code": "36",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "tindouf",
      "code": "37",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "tissemsilt",
      "code": "38",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "el oued",
      "code": "39",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "khenchela",
      "code": "40",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "souk ahras",
      "code": "41",
      "office": 500,
      "home": 600
    },
    {
      "active": true,
      "name": "tipaza",
      "code": "42",
      "office": 500,
      "home": 400
    },
    {
      "active": true,
      "name": "mila",
      "code": "43",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "ain defla",
      "code": "44",
      "office": 500,
      "home": 500
    },
    {
      "active": true,
      "name": "naama",
      "code": "45",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "ain temouchent",
      "code": "46",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "ghardaia",
      "code": "47",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "relizane",
      "code": "48",
      "home": 600
    },
    {
      "active": true,
      "name": "timimoun",
      "code": "49",
      "office": 500,
      "home": 800
    },
    {
      "active": true,
      "name": "bordj badji mokhtar",
      "code": "50",
      "office": 500,
      "home": 800
    },
    {
      "active": true,
      "name": "ouled djellal",
      "code": "51",
      "office": 500,
      "home": 700
    },
    {
      "active": true,
      "name": "beni abbes",
      "code": "52",
      "office": 500,
      "home": 800
    },
    {
      "active": true,
      "name": "in salah",
      "code": "53",
      "office": 500,
      "home": 900
    },
    {
      "active": true,
      "name": "in guezzam",
      "code": "54",
      "home": 900
    },
    {
      "active": true,
      "name": "touggourt",
      "code": "55",
      "office": 500,
      "home": 900
    },
    {
      "active": true,
      "name": "djanet",
      "code": "56",
      "office": 500,
      "home": 900
    },
    {
      "active": true,
      "name": "el meghaier",
      "code": "57",
      "office": 400,
      "home": 900
    },
    {
      "active": true,
      "name": "el menia",
      "code": "58",
      "office": 400,
      "home": 900
    }
  ],
  action: {
    name: 'اتصل الآن',
    url: 'tel:0552862683',
  },
  logo: {
    url: '/public/images/everysense/logo-cut.png',
    width: 200,
    height: 200,
    type: 'image/svg+xml',
  },
  darkLogo: {
    url: '/public/images/everysense/dark-logo-cut.png',
    width: 200,
    height: 200,
    type: 'image/svg+xml',
  },
  cover: null,
  theme: {
    name: 'default',
    color: "teal",
    logoFullHeight: true,
    showStoreNameInHeader: false,
    showStoreLogoInHeader: true,
  },
  phones: [
    {
      number: '0552862683',
      verifiedAt: null,
      name: 'Main',
    },
  ],
  socials:
  {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    links: [
      {
        name: 'Main',
        url: 'https://google.com',
      },
    ],
  },
  links: [
    {
      name: 'مسابقة الشهر',
      url: 'https://google.com',
    },
  ],
  categories: [
    // {
    //   name: 'هوديس',
    //   description: 'هوديات أوفر سايز',
    //   icon: "/public/categories/hoodie.png",
    //   cover: "/public/categories/hoodie-cover.jpg",
    // },


    // معطرات
    {
      name: 'معطرات',
      description: 'معطرات ومزيلات الروائح',
    },

  ],
  currency: 'دج',
  products: [
    {
      ref: 'stores/everysense/products/1',
      id: '1', 
      slug: 'freshener-sanitizer',
      storeId: 'everysense',
      name: 'مزيل روائح معقم ومعطر أقمشة وجلود',
      description: 'ذو رائحة عطرة يستخدم على السجاد والحصائر والستائر ومقاعد السيارات',
      price: 3600,
      discount: 600,
      currency: {
        code: 'DZD',
        symbol: 'دج',
      },
      body: "",
      media: [
        {
          url: 'https://i.ibb.co/kgShJvY/Screenshot-2024-02-19-at-10-20-20-PM-min.png',
          width: 500,
          height: 500,
          type: 'image/png',
        },
        {
          url: 'https://i.ibb.co/YPKCmsB/Screenshot-2024-02-19-at-10-20-59-PM-min.png',
          width: 500,
          height: 500,
          type: 'image/png',
        },
        {
          url: 'https://i.ibb.co/ss50dcH/Screenshot-2024-02-19-at-10-21-32-PM-min.png',
          width: 500,
          height: 500,
          type: 'image/png',
        },
        {
          url: 'https://i.ibb.co/zPPrv7w/Screenshot-2024-02-19-at-10-21-49-PM-min.png',
          width: 500,
          height: 500,
          type: 'image/png',
        },

        
        
      ],
      image: {
        url: 'https://i.ibb.co/zPPrv7w/Screenshot-2024-02-19-at-10-21-49-PM-min.png',
        width: 100,
        height: 100,
        type: 'image/jpeg',
      },
      categories: [
        {
          name: 'معطرات',
          description: 'معطرات ومزيلات الروائح',
        },
      ],
      tags: [
        'معطر',
        'مزيل رائحة',
        'معقم',
        'أقمشة',
        'جلود',
      ],
      reviews: [],
      rate: 5,
      variants:
      {
        name: "العروض",
        options: [
          {
            name: "علبة واحدة",
            type: VariantOptionType.text,
            quantity: 80,
          },
          {
            name: "علبتين",
            quantity: 76,
            price: 3600*2,
            discount: 700*2,
          },
          {
            name: "ثلاث علب",
            quantity: 74,
            price: 3600*3,
            discount: 700*4,
          },
          // {
          //   name: "ابيض",
          //   value: "#eeeeee",
          //   type: VariantOptionType.color,
          //   mediaIndex: 0,
          //   quantity: 0,
          //   hint: "منتهي",
          //   child: {
          //     name: "الأحجام",
          //     options: [
          //       {
          //         name: "XL",
          //         value: "XL",
          //         hint: "واسع",
          //         type: VariantOptionType.text,
          //       },
          //     ],
          //   },
          // },
        ],
      },
      quantity: 760,
      type: ProductType.physical,
      isPreorder: false,
      createdAt: null,
      updatedAt: null,
      deletedAt: null,
    },
  ],
  integrations: {
    // telegram
    telegram: {
      active: true,
      // <asynx>
      // token: "6964541904:AAEiAw9anUOHXcfunW2wvDOl88xkxnMZN2s",
      // chatId: "-4014813398", 
      // </asynx>
      

      token: "7097435521:AAFwCcnjjfpiT7HultOR9Po1Hdb-JDLEjL4",
      chatId: "-1002092163609", 

      template: 
`🛒 طلب جديد (#{id})
_________________
👤 الإسم: {name}
📦 العنوان: {address} | {state} ({city})
📱 الهاتف: {phone}
📝 الملاحظات: {notes}
_________________
{products}
_________________
📦 الكلفة: {cost}
🚚 الشحن: {shipping}
_________________
💰 الإجمالي: {total}`
          },

    // facebook pixel
    facebookPixel: {
      active: true,
      id: "2008396046195222",
    },
  }

}

if (testStore.integrations.facebookPixel?.active) { 
  ReactPixel.init(testStore.integrations.facebookPixel.id, undefined, {
    autoConfig: true,
    debug: true,
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App store={testStore}/>,

    // loader: async () => {
    //   // load store
    //   const req = await axios.get(`https://asynx-store.blogspot.com/feeds/8687917024363314244/pages/default/2297185366825394662?alt=json`)
    //   const store = JSON.parse(req.data.entry.content.$t)
    //   return <App store={store} />
    // }
  },
  {
    path: "product/:id",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

