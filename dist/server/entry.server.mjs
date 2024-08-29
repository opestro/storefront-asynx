var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import * as jsxRuntime from "react/jsx-runtime";
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server.mjs";
import { Link, useLoaderData, useLocation, Outlet, redirect } from "react-router-dom";
import { IconBrightness, IconBrandFacebook, IconBrandInstagram, IconLink, IconBrandTwitter, IconBrandTelegram, IconMail, IconPhoneCall, IconPhone, IconUser, IconLocation, IconLocationCode, IconLocationBolt, IconShoppingBag, IconFlag } from "@tabler/icons-react";
import StickyBox from "react-sticky-box";
import { customAlphabet } from "nanoid";
import Markdown from "react-markdown";
import { TypeAnimation } from "react-type-animation";
import ReactPlayer from "react-player";
import { SuperSEO } from "react-super-seo";
import axios from "axios";
import { setupCache, buildWebStorage, buildMemoryStorage } from "axios-cache-interceptor";
import vine from "@vinejs/vine";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
function tryFixPhoneNumber(phone) {
  phone = phone.trim();
  phone = phone.replace(/\D/g, "");
  if (!phone.startsWith("0")) {
    phone = "0" + phone;
  }
  return phone;
}
function validatePhoneNumber(phone) {
  if (phone == "0") {
    return "اكمل رقم الهاتف";
  }
  if (!phone) {
    return "رقم الهاتف لا يمكن أن يكون فارغاً.";
  }
  if (!/^[0-9]+$/.test(phone)) {
    return "رقم الهاتف يجب أن يحتوي فقط على أرقام.";
  }
  if (!phone.startsWith("0")) {
    return "رقم الهاتف يجب أن يبدأ بـ 0.";
  }
  if (!phone.startsWith("05") && !phone.startsWith("06") && !phone.startsWith("07") && !phone.startsWith("02")) {
    return "يجب أن يبدأ بـ 05, 06, 07, 02";
  }
  if (phone.startsWith("05") || phone.startsWith("06") || phone.startsWith("07")) {
    if (phone.length !== 10) {
      var overflown = phone.length - 10;
      if (overflown > 0) {
        return "عدد الأرقام زائد عن 10 رقماً بـ " + overflown;
      } else {
        if (overflown === -1) {
          return "ينقصك رقم واحد";
        } else if (overflown === -2) {
          return "ينقصك رقمان إثنان";
        }
        return "ينقصك " + -overflown + " أرقام";
      }
    }
  } else if (phone.startsWith("02")) {
    if (phone.length !== 9) {
      var overflown = phone.length - 9;
      if (overflown > 0) {
        return "عدد الأرقام زائد عن 9 رقماً بـ " + overflown;
      } else {
        if (overflown === -1) {
          return "ينقصك رقم واحد";
        } else if (overflown === -2) {
          return "ينقصك رقمان";
        }
        return "ينقصك " + -overflown + " أرقام";
      }
    }
  }
  return null;
}
function useInViewport() {
  const [isInViewport, setIsInViewport] = useState(false);
  const [refElement, setRefElement] = useState(null);
  const setRef = useCallback((node) => {
    if (node !== null) {
      setRefElement(node);
    }
  }, []);
  useEffect(() => {
    if (refElement && !isInViewport) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInViewport(entry.isIntersecting)
      );
      observer.observe(refElement);
      return () => {
      };
    }
  }, [isInViewport, refElement]);
  return { isInViewport, ref: setRef };
}
function track(title, data) {
}
const dartColorToCss = (color) => {
  var colorAsString = color.toString(16);
  if (color > 16777215) {
    var alpha = colorAsString.slice(0, 2);
    colorAsString = colorAsString.slice(2) + alpha;
  }
  var colorAsHex = "#" + colorAsString;
  return colorAsHex;
};
function Navbar({ store, fixed = true }) {
  var _a, _b, _c, _d, _e;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    (store == null ? void 0 : store.banner) && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "h-8" }),
      /* @__PURE__ */ jsx("a", { className: "h-8 block py-1 bg-primary text-center fixed left-0 right-0 top-0 z-50", href: store.banner.url || "#!", children: store == null ? void 0 : store.banner.title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: fixed ? `sticky ${(store == null ? void 0 : store.banner) ? "top-8" : "top-0"} z-50` : "", children: /* @__PURE__ */ jsx("nav", { className: `w-screen backdrop-blur-xl bg-opacity-40 dark:bg-opacity-40 bg-gray-50 dark:bg-gray-900   z-20 top-0 start-0 border-b border-opacity-20 dark:border-opacity-30 border-gray-600`, children: /* @__PURE__ */ jsxs("div", { className: "h-16 container flex flex-wrap items-center justify-between mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center space-x-3 rtl:space-x-reverse",
          children: [
            (store == null ? void 0 : store.ondarkLogoUrl) && /* @__PURE__ */ jsx("img", { src: store == null ? void 0 : store.ondarkLogoUrl, className: (((_a = store == null ? void 0 : store.decoration) == null ? void 0 : _a.logoFullHeight) ? "h-16" : "h-12") + " hidden dark:block", alt: store == null ? void 0 : store.name }),
            ((store == null ? void 0 : store.logoUrl) || (store == null ? void 0 : store.ondarkLogoUrl)) && /* @__PURE__ */ jsx("img", { src: (store == null ? void 0 : store.logoUrl) || (store == null ? void 0 : store.ondarkLogoUrl) || void 0, className: (((_b = store == null ? void 0 : store.decoration) == null ? void 0 : _b.logoFullHeight) ? "h-16" : "h-12") + " dark:hidden block", alt: store == null ? void 0 : store.name }),
            ((_c = store == null ? void 0 : store.decoration) == null ? void 0 : _c.showStoreNameInHeader) && /* @__PURE__ */ jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: store == null ? void 0 : store.name })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              document.body.classList.toggle("dark");
            },
            className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
            "aria-controls": "navbar-sticky",
            "aria-expanded": "false",
            children: /* @__PURE__ */ jsx(IconBrightness, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: ((_d = store == null ? void 0 : store.action) == null ? void 0 : _d.url) || "#!",
            target: "_blank",
            onClick: () => {
            },
            children: ((_e = store == null ? void 0 : store.action) == null ? void 0 : _e.label) && /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-primary",
                children: store.action.label
              }
            )
          }
        )
      ] })
    ] }) }) })
  ] });
}
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["draft"] = "draft";
  OrderStatus2["pending"] = "pending";
  OrderStatus2["accepted"] = "accepted";
  OrderStatus2["processing"] = "processing";
  OrderStatus2["completed"] = "completed";
  OrderStatus2["cancelled"] = "cancelled";
  return OrderStatus2;
})(OrderStatus || {});
var VariantOptionType = /* @__PURE__ */ ((VariantOptionType2) => {
  VariantOptionType2["color"] = "color";
  VariantOptionType2["image"] = "image";
  VariantOptionType2["text"] = "text";
  return VariantOptionType2;
})(VariantOptionType || {});
var EmbaddedContactType = /* @__PURE__ */ ((EmbaddedContactType2) => {
  EmbaddedContactType2["phone"] = "phone";
  EmbaddedContactType2["email"] = "email";
  EmbaddedContactType2["facebook"] = "facebook";
  EmbaddedContactType2["twitter"] = "twitter";
  EmbaddedContactType2["instagram"] = "instagram";
  EmbaddedContactType2["linkedin"] = "linkedin";
  EmbaddedContactType2["website"] = "website";
  EmbaddedContactType2["whatsapp"] = "whatsapp";
  EmbaddedContactType2["telegram"] = "telegram";
  EmbaddedContactType2["signal"] = "signal";
  EmbaddedContactType2["viber"] = "viber";
  EmbaddedContactType2["skype"] = "skype";
  EmbaddedContactType2["zoom"] = "zoom";
  EmbaddedContactType2["other"] = "other";
  return EmbaddedContactType2;
})(EmbaddedContactType || {});
const TextButton = ({ children, href, target, className }) => {
  var child = /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: className + " btn",
      children
    }
  );
  if (href) {
    child = /* @__PURE__ */ jsx("a", { href, target, children: child });
  }
  return child;
};
function Footer({ store }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  var facebooks = (_a = store == null ? void 0 : store.contacts) == null ? void 0 : _a.filter((c) => c.type === EmbaddedContactType.facebook);
  var instagrams = (_b = store == null ? void 0 : store.contacts) == null ? void 0 : _b.filter((c) => c.type === EmbaddedContactType.instagram);
  var twitters = (_c = store == null ? void 0 : store.contacts) == null ? void 0 : _c.filter((c) => c.type === EmbaddedContactType.twitter);
  var telegrams = (_d = store == null ? void 0 : store.contacts) == null ? void 0 : _d.filter((c) => c.type === EmbaddedContactType.telegram);
  var linkedins = (_e = store == null ? void 0 : store.contacts) == null ? void 0 : _e.filter((c) => c.type === EmbaddedContactType.linkedin);
  var emails = (_f = store == null ? void 0 : store.contacts) == null ? void 0 : _f.filter((c) => c.type === EmbaddedContactType.email);
  var phones = (_g = store == null ? void 0 : store.contacts) == null ? void 0 : _g.filter((c) => c.type === EmbaddedContactType.phone);
  var websites = (_h = store == null ? void 0 : store.contacts) == null ? void 0 : _h.filter((c) => c.type === EmbaddedContactType.website);
  return /* @__PURE__ */ jsx("footer", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "gb rounded-t-xl max-w-screen-xl mx-auto px-4 pt-10 mt-10 sm:px-6 lg:px-8 mb-[70px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase", children: "تابعنا" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4", children: [
          facebooks == null ? void 0 : facebooks.map((facebook, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: facebook == null ? void 0 : facebook.value, target: "_blank", children: [
            (facebook == null ? void 0 : facebook.name) || "Facebook",
            /* @__PURE__ */ jsx(
              IconBrandFacebook,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          instagrams == null ? void 0 : instagrams.map((instagram, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: instagram == null ? void 0 : instagram.value, target: "_blank", children: [
            (instagram == null ? void 0 : instagram.name) || "Instagram",
            /* @__PURE__ */ jsx(
              IconBrandInstagram,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          linkedins == null ? void 0 : linkedins.map((linkedin, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: linkedin == null ? void 0 : linkedin.value, target: "_blank", children: [
            (linkedin == null ? void 0 : linkedin.name) || "LinkedIn",
            /* @__PURE__ */ jsx(
              IconLink,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          twitters == null ? void 0 : twitters.map((twitter, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: twitter == null ? void 0 : twitter.value, target: "_blank", children: [
            (twitter == null ? void 0 : twitter.name) || "Twitter",
            /* @__PURE__ */ jsx(
              IconBrandTwitter,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          telegrams == null ? void 0 : telegrams.map((telegram, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: telegram == null ? void 0 : telegram.value, target: "_blank", children: [
            (telegram == null ? void 0 : telegram.name) || "Telegram",
            /* @__PURE__ */ jsx(
              IconBrandTelegram,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 md:mt-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase", children: "المزيد" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4", children: [
          emails == null ? void 0 : emails.map((email, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: `mailto:${email == null ? void 0 : email.value}`, children: [
            (email == null ? void 0 : email.name) || (email == null ? void 0 : email.value),
            /* @__PURE__ */ jsx(
              IconMail,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          phones == null ? void 0 : phones.map((phone, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: `tel:${phone == null ? void 0 : phone.value}`, children: [
            (phone == null ? void 0 : phone.name) || (phone == null ? void 0 : phone.value),
            /* @__PURE__ */ jsx(
              IconPhoneCall,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index)),
          websites == null ? void 0 : websites.map((website, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(TextButton, { href: website == null ? void 0 : website.value, target: "_blank", children: [
            (website == null ? void 0 : website.name) || (website == null ? void 0 : website.value),
            /* @__PURE__ */ jsx(
              IconLink,
              {
                size: 30,
                className: "ps-2"
              }
            )
          ] }) }, index))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 xl:mt-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase", children: store == null ? void 0 : store.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-6 text-gray-500", children: store == null ? void 0 : store.description }),
        /* @__PURE__ */ jsxs("center", { className: "mt-4", children: [
          (store == null ? void 0 : store.ondarkLogoUrl) && /* @__PURE__ */ jsx("img", { src: store == null ? void 0 : store.ondarkLogoUrl, className: "h-20 hidden dark:block grayscale", alt: store == null ? void 0 : store.name }),
          ((store == null ? void 0 : store.logoUrl) || (store == null ? void 0 : store.ondarkLogoUrl)) && /* @__PURE__ */ jsx("img", { src: (store == null ? void 0 : store.logoUrl) || (store == null ? void 0 : store.ondarkLogoUrl) || void 0, className: "h-20 dark:hidden block grayscale", alt: store == null ? void 0 : store.name })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 border-t border-gray-200 dark:border-gray-700 py-5", children: /* @__PURE__ */ jsxs("p", { className: "text-center font-light text-base leading-6 text-gray-400 xl:text-center", dir: "ltr", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      store == null ? void 0 : store.name,
      ". All rights reserved.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-extralight", children: [
        "created by ",
        /* @__PURE__ */ jsx("a", { href: "https://feeef.net/?ref=footer_copyrights", target: "_blank", className: "text-primary", children: "feeef®" }),
        " created your store. startig for free!"
      ] })
    ] }) })
  ] }) });
}
const states = [
  "أدرار",
  " الشلف",
  "الأغواط",
  "أم البواقي",
  "باتنة",
  " بجاية",
  "بسكرة",
  "بشار",
  "البليدة",
  "البويرة",
  "تمنراست",
  "تبسة",
  "تلمسان",
  "تيارت",
  "تيزي وزو",
  "الجزائر",
  "الجلفة",
  "جيجل",
  "سطيف",
  "سعيدة",
  "سكيكدة",
  "سيدي بلعباس",
  "عنابة",
  "قالمة",
  "قسنطينة",
  "المدية",
  "مستغانم",
  "المسيلة",
  "معسكر",
  "ورقلة",
  "وهران",
  "البيض",
  "إليزي",
  "برج بوعريريج",
  "بومرداس",
  "الطارف",
  "تندوف",
  "تيسمسيلت",
  "الوادي",
  "خنشلة",
  "سوق أهراس",
  "تيبازة",
  "ميلة",
  "عين الدفلة",
  "النعامة",
  "عين تيموشنت",
  "غرداية",
  "غليزان",
  "تيميمون",
  "برج باجي مختار",
  "أولاد جلال",
  "بني عباس",
  "عين صالح",
  "عين قزام",
  "تقرت",
  "جانت",
  "المغير",
  "المنيعة"
];
const cities = [
  [
    "Adrar",
    "Akabli",
    "Aoulef",
    "Bouda",
    "Fenoughil",
    "In Zghmir",
    "Ouled Ahmed Timmi",
    "Reggane",
    "Sali",
    "Sebaa",
    "Tamantit",
    "Tamest",
    "Timekten",
    "Tit",
    "Tsabit",
    "Zaouiet Kounta"
  ],
  [
    "Abou El Hassan",
    "Ain Merane",
    "Benairia",
    "Beni Bouattab",
    "Beni Haoua",
    "Beni Rached",
    "Boukadir",
    "Bouzeghaia",
    "Breira",
    "Chettia",
    "Chlef",
    "Dahra",
    "El Hadjadj",
    "El Karimia",
    "El Marsa",
    "Harchoun",
    "Herenfa",
    "Labiod Medjadja",
    "Moussadek",
    "Oued Fodda",
    "Oued Goussine",
    "Oued Sly",
    "Ouled Abbes",
    "Ouled Ben Abdelkader",
    "Ouled Fares",
    "Oum Drou",
    "Sendjas",
    "Sidi Abderrahmane",
    "Sidi Akkacha",
    "Sobha",
    "Tadjena",
    "Talassa",
    "Taougrite",
    "Tenes",
    "Zeboudja"
  ],
  [
    "Aflou",
    "Ain Mahdi",
    "Ain Sidi Ali",
    "Beidha",
    "Benacer Benchohra",
    "Brida",
    "El Assafia",
    "El Ghicha",
    "El Haouaita",
    "Gueltat Sidi Saad",
    "Hadj Mechri",
    "Hassi Delaa",
    "Hassi R'mel",
    "Kheneg",
    "Ksar El Hirane",
    "Laghouat",
    "Oued M'zi",
    "Oued Morra",
    "Sebgag",
    "Sidi Bouzid",
    "Sidi Makhlouf",
    "Tadjemout",
    "Tadjrouna",
    "Taouiala"
  ],
  [
    "Ain Babouche",
    "Ain Beida",
    "Ain Diss",
    "Ain Fekroune",
    "Ain Kercha",
    "Ain M'lila",
    "Ain Zitoun",
    "Behir Chergui",
    "Berriche",
    "Bir Chouhada",
    "Dhala",
    "El Amiria",
    "El Belala",
    "El Djazia",
    "El Fedjoudj Boughrara Sa",
    "El Harmilia",
    "Fkirina",
    "Hanchir Toumghani",
    "Ksar Sbahi",
    "Meskiana",
    "Oued Nini",
    "Ouled Gacem",
    "Ouled Hamla",
    "Ouled Zouai",
    "Oum El Bouaghi",
    "Rahia",
    "Sigus",
    "Souk Naamane",
    "Zorg"
  ],
  [
    "Ain Djasser",
    "Ain Touta",
    "Ain Yagout",
    "Arris",
    "Azil Abedelkader",
    "Barika",
    "Batna",
    "Beni Foudhala El Hakania",
    "Bitam",
    "Boulhilat",
    "Boumagueur",
    "Boumia",
    "Bouzina",
    "Chemora",
    "Chir",
    "Djerma",
    "Djezzar",
    "El Hassi",
    "El Madher",
    "Fesdis",
    "Foum Toub",
    "Ghassira",
    "Gosbat",
    "Guigba",
    "Hidoussa",
    "Ichmoul",
    "Inoughissen",
    "Kimmel",
    "Ksar Bellezma",
    "Larbaa",
    "Lazrou",
    "Lemsane",
    "M Doukal",
    "Maafa",
    "Menaa",
    "Merouana",
    "N Gaous",
    "Oued Chaaba",
    "Oued El Ma",
    "Oued Taga",
    "Ouled Ammar",
    "Ouled Aouf",
    "Ouled Fadel",
    "Ouled Sellem",
    "Ouled Si Slimane",
    "Ouyoun El Assafir",
    "Rahbat",
    "Ras El Aioun",
    "Sefiane",
    "Seggana",
    "Seriana",
    "T Kout",
    "Talkhamt",
    "Taxlent",
    "Tazoult",
    "Teniet El Abed",
    "Tighanimine",
    "Tigharghar",
    "Tilatou",
    "Timgad",
    "Zanet El Beida"
  ],
  [
    "Adekar",
    "Ait R'zine",
    "Ait Smail",
    "Akbou",
    "Akfadou",
    "Amalou",
    "Amizour",
    "Aokas",
    "Barbacha",
    "Bejaia",
    "Beni Dejllil",
    "Beni K'sila",
    "Beni Mallikeche",
    "Benimaouche",
    "Boudjellil",
    "Bouhamza",
    "Boukhelifa",
    "Chellata",
    "Chemini",
    "Darghina",
    "Dra El Caid",
    "El Kseur",
    "Fenaia Il Maten",
    "Feraoun",
    "Ighil Ali",
    "Ighram",
    "Kendira",
    "Kherrata",
    "Leflaye",
    "M'cisna",
    "Melbou",
    "Oued Ghir",
    "Ouzellaguene",
    "Seddouk",
    "Sidi Aich",
    "Sidi Ayad",
    "Smaoun",
    "Souk El Tenine",
    "Souk Oufella",
    "Tala Hamza",
    "Tamokra",
    "Tamridjet",
    "Taourit Ighil",
    "Taskriout",
    "Tazmalt",
    "Tibane",
    "Tichy",
    "Tifra",
    "Timezrit",
    "Tinebdar",
    "Tizi N'berber",
    "Toudja"
  ],
  [
    "Ain Naga",
    "Ain Zaatout",
    "Biskra",
    "Bordj Ben Azzouz",
    "Bouchagroun",
    "Branis",
    "Chetma",
    "Djemorah",
    "El Feidh",
    "El Ghrous",
    "El Hadjab",
    "El Haouch",
    "El Kantara",
    "El Outaya",
    "Foughala",
    "Khenguet Sidi Nadji",
    "Lichana",
    "Lioua",
    "M'chouneche",
    "M'lili",
    "Mekhadma",
    "Meziraa",
    "Oumache",
    "Ourlal",
    "Sidi Okba",
    "Tolga",
    "Zeribet El Oued"
  ],
  [
    "Abadla",
    "Bechar",
    "Beni Ounif",
    "Boukais",
    "Erg Ferradj",
    "Kenadsa",
    "Lahmar",
    "Mechraa H.boumediene",
    "Meridja",
    "Mogheul",
    "Taghit"
  ],
  [
    "Ain Romana",
    "Beni Mered",
    "Beni Tamou",
    "Benkhelil",
    "Blida",
    "Bouarfa",
    "Boufarik",
    "Bougara",
    "Bouinan",
    "Chebli",
    "Chiffa",
    "Chrea",
    "Djebabra",
    "El Affroun",
    "Guerrouaou",
    "Hammam Melouane",
    "Larbaa",
    "Meftah",
    "Mouzaia",
    "Oued Djer",
    "Oued El Alleug",
    "Ouled Slama",
    "Ouled Yaich",
    "Souhane",
    "Souma"
  ],
  [
    "Aghbalou",
    "Ahl El Ksar",
    "Ain Bessem",
    "Ain El Hadjar",
    "Ain Laloui",
    "Ain Turk",
    "Ait Laaziz",
    "Aomar",
    "Bechloul",
    "Bir Ghbalou",
    "Bordj Okhriss",
    "Bouderbala",
    "Bouira",
    "Boukram",
    "Chorfa",
    "Dechmia",
    "Dirah",
    "Djebahia",
    "El Adjiba",
    "El Asnam",
    "El Hachimia",
    "El Hakimia",
    "El Khabouzia",
    "El Mokrani",
    "Guerrouma",
    "Hadjera Zerga",
    "Haizer",
    "Hanif",
    "Kadiria",
    "Lakhdaria",
    "M Chedallah",
    "Maala",
    "Mamora",
    "Mezdour",
    "Oued El Berdi",
    "Ouled Rached",
    "Raouraoua",
    "Ridane",
    "Saharidj",
    "Souk El Khemis",
    "Sour El Ghozlane",
    "Taghzout",
    "Taguedite",
    "Taourirt",
    "Z'barbar"
  ],
  [
    "Abalessa",
    "Ain Amguel",
    "Idles",
    "Tamanrasset",
    "Tazrouk"
  ],
  [
    "Ain Zerga",
    "Bedjene",
    "Bekkaria",
    "Bir Dheheb",
    "Bir El Ater",
    "Bir Mokkadem",
    "Boukhadra",
    "Boulhaf Dyr",
    "Cheria",
    "El Aouinet",
    "El Houidjbet",
    "El Kouif",
    "El Malabiod",
    "El Meridj",
    "El Mezeraa",
    "El Ogla",
    "El Ogla El Malha",
    "Ferkane",
    "Guorriguer",
    "Hammamet",
    "Morssot",
    "Negrine",
    "Ouenza",
    "Oum Ali",
    "Saf Saf El Ouesra",
    "Stah Guentis",
    "Tebessa",
    "Telidjen"
  ],
  [
    "Ain Fettah",
    "Ain Fezza",
    "Ain Ghoraba",
    "Ain Kebira",
    "Ain Nehala",
    "Ain Tallout",
    "Ain Youcef",
    "Amieur",
    "Azails",
    "Bab El Assa",
    "Beni Bahdel",
    "Beni Boussaid",
    "Beni Khaled",
    "Beni Mester",
    "Beni Ouarsous",
    "Beni Smiel",
    "Beni Snous",
    "Bensekrane",
    "Bouhlou",
    "Bouihi",
    "Chetouane",
    "Dar Yaghmouracene",
    "Djebala",
    "El Aricha",
    "El Fehoul",
    "El Gor",
    "Fellaoucene",
    "Ghazaouet",
    "Hammam Boughrara",
    "Hennaya",
    "Honaine",
    "Maghnia",
    "Mansourah",
    "Marsa Ben M'hidi",
    "Msirda Fouaga",
    "Nedroma",
    "Oued Chouly",
    "Ouled Mimoun",
    "Ouled Riyah",
    "Remchi",
    "Sabra",
    "Sebbaa Chioukh",
    "Sebdou",
    "Sidi Abdelli",
    "Sidi Djilali",
    "Sidi Medjahed",
    "Souahlia",
    "Souani",
    "Souk Tleta",
    "Terny Beni Hediel",
    "Tianet",
    "Tlemcen",
    "Zenata"
  ],
  [
    "Ain Bouchekif",
    "Ain Deheb",
    "Ain El Hadid",
    "Ain Kermes",
    "Ain Zarit",
    "Bougara",
    "Chehaima",
    "Dahmouni",
    "Djebilet Rosfa",
    "Djillali Ben Amar",
    "Faidja",
    "Frenda",
    "Guertoufa",
    "Hamadia",
    "Ksar Chellala",
    "Madna",
    "Mahdia",
    "Mechraa Safa",
    "Medrissa",
    "Medroussa",
    "Meghila",
    "Mellakou",
    "Nadorah",
    "Naima",
    "Oued Lilli",
    "Rahouia",
    "Rechaiga",
    "Sebaine",
    "Sebt",
    "Serghine",
    "Si Abdelghani",
    "Sidi Abderrahmane",
    "Sidi Ali Mellal",
    "Sidi Bakhti",
    "Sidi Hosni",
    "Sougueur",
    "Tagdemt",
    "Takhemaret",
    "Tiaret",
    "Tidda",
    "Tousnina",
    "Zmalet El Emir Abdelkade"
  ],
  [
    "Abi Youcef",
    "Aghribs",
    "Agouni Gueghrane",
    "Ain El Hammam",
    "Ain Zaouia",
    "Ait Aggouacha",
    "Ait Bouaddou",
    "Ait Boumehdi",
    "Ait Chafaa",
    "Ait Khellili",
    "Ait Mahmoud",
    "Ait Oumalou",
    "Ait Toudert",
    "Ait Yahia",
    "Ait Yahia Moussa",
    "Akbil",
    "Akerrou",
    "Assi Youcef",
    "Azazga",
    "Azeffoun",
    "Beni Aissi",
    "Beni Douala",
    "Beni Yenni",
    "Beni Zikki",
    "Beni Zmenzer",
    "Boghni",
    "Boudjima",
    "Bounouh",
    "Bouzeguene",
    "Djebel Aissa Mimoun",
    "Draa Ben Khedda",
    "Draa El Mizan",
    "Freha",
    "Frikat",
    "Iboudrarene",
    "Idjeur",
    "Iferhounene",
    "Ifigha",
    "Iflissen",
    "Illilten",
    "Illoula Oumalou",
    "Imsouhal",
    "Irdjen",
    "Larba Nath Irathen",
    "Larbaa Nath Irathen",
    "M'kira",
    "Maatkas",
    "Makouda",
    "Mechtras",
    "Mekla",
    "Mizrana",
    "Ouacif",
    "Ouadhias",
    "Ouaguenoune",
    "Sidi Naamane",
    "Souamaa",
    "Souk El Thenine",
    "Tadmait",
    "Tigzirt",
    "Timizart",
    "Tirmitine",
    "Tizi Ghenif",
    "Tizi N'tleta",
    "Tizi Ouzou",
    "Tizi Rached",
    "Yakourene",
    "Yatafene",
    "Zekri"
  ],
  [
    "Ain Benian",
    "Ain Taya",
    "Alger Centre",
    "Bab El Oued",
    "Bab Ezzouar",
    "Baba Hesen",
    "Bachedjerah",
    "Bains Romains",
    "Baraki",
    "Ben Aknoun",
    "Beni Messous",
    "Bir Mourad Rais",
    "Bir Touta",
    "Birkhadem",
    "Bologhine Ibnou Ziri",
    "Bordj El Bahri",
    "Bordj El Kiffan",
    "Bourouba",
    "Bouzareah",
    "Casbah",
    "Cheraga",
    "Dar El Beida",
    "Dely Ibrahim",
    "Djasr Kasentina",
    "Douira",
    "Draria",
    "El Achour",
    "El Biar",
    "El Harrach",
    "El Madania",
    "El Magharia",
    "El Merssa",
    "El Mouradia",
    "Herraoua",
    "Hussein Dey",
    "Hydra",
    "Kheraisia",
    "Kouba",
    "Les Eucalyptus",
    "Maalma",
    "Mohamed Belouzdad",
    "Mohammadia",
    "Oued Koriche",
    "Oued Smar",
    "Ouled Chebel",
    "Ouled Fayet",
    "Rahmania",
    "Rais Hamidou",
    "Reghaia",
    "Rouiba",
    "Sehaoula",
    "Setaouali",
    "Sidi M'hamed",
    "Sidi Moussa",
    "Souidania",
    "Tessala El Merdja",
    "Zeralda"
  ],
  [
    "Ain Chouhada",
    "Ain El Ibel",
    "Ain Fekka",
    "Ain Maabed",
    "Ain Oussera",
    "Amourah",
    "Benhar",
    "Benyagoub",
    "Birine",
    "Bouira Lahdab",
    "Charef",
    "Dar Chioukh",
    "Deldoul",
    "Djelfa",
    "Douis",
    "El Guedid",
    "El Idrissia",
    "El Khemis",
    "Faidh El Botma",
    "Guernini",
    "Guettara",
    "Had Sahary",
    "Hassi Bahbah",
    "Hassi El Euch",
    "Hassi Fedoul",
    "M Liliha",
    "Messaad",
    "Moudjebara",
    "Oum Laadham",
    "Sed Rahal",
    "Selmana",
    "Sidi Baizid",
    "Sidi Ladjel",
    "Tadmit",
    "Zaafrane",
    "Zaccar"
  ],
  [
    "Bordj Tahar",
    "Boudria Beniyadjis",
    "Bouraoui Belhadef",
    "Boussif Ouled Askeur",
    "Chahna",
    "Chekfa",
    "Djemaa Beni Habibi",
    "Djimla",
    "El Ancer",
    "El Aouana",
    "El Kennar Nouchfi",
    "El Milia",
    "Emir Abdelkader",
    "Erraguene",
    "Ghebala",
    "Jijel",
    "Khiri Oued Adjoul",
    "Kouas",
    "Oudjana",
    "Ouled Rabah",
    "Ouled Yahia Khadrouch",
    "Selma Benziada",
    "Settara",
    "Sidi Abdelaziz",
    "Sidi Marouf",
    "Taher",
    "Texena",
    "Ziama Mansouria"
  ],
  [
    "Ain Abessa",
    "Ain Arnat",
    "Ain Azel",
    "Ain El Kebira",
    "Ain Lahdjar",
    "Ain Legradj",
    "Ain Oulmane",
    "Ain Roua",
    "Ain Sebt",
    "Ait Naoual Mezada",
    "Ait Tizi",
    "Amoucha",
    "Babor",
    "Bazer Sakra",
    "Beidha Bordj",
    "Bellaa",
    "Beni Aziz",
    "Beni Chebana",
    "Beni Fouda",
    "Beni Mouhli",
    "Beni Ouartilane",
    "Beni Oussine",
    "Bir El Arch",
    "Bir Haddada",
    "Bouandas",
    "Bougaa",
    "Bousselam",
    "Boutaleb",
    "Dehamcha",
    "Djemila",
    "Draa Kebila",
    "El Eulma",
    "El Ouldja",
    "El Ouricia",
    "Guellal",
    "Guelta Zerka",
    "Guenzet",
    "Guidjel",
    "Hamam Soukhna",
    "Hamma",
    "Hammam Guergour",
    "Harbil",
    "Ksar El Abtal",
    "Maaouia",
    "Maouaklane",
    "Mezloug",
    "Oued El Barad",
    "Ouled Addouane",
    "Ouled Sabor",
    "Ouled Si Ahmed",
    "Ouled Tebben",
    "Rosfa",
    "Salah Bey",
    "Serdj El Ghoul",
    "Setif",
    "Tachouda",
    "Tala Ifacene",
    "Taya",
    "Tella",
    "Tizi N'bechar"
  ],
  [
    "Ain El Hadjar",
    "Ain Sekhouna",
    "Ain Soltane",
    "Doui Thabet",
    "El Hassasna",
    "Hounet",
    "Maamora",
    "Moulay Larbi",
    "Ouled Brahim",
    "Ouled Khaled",
    "Saida",
    "Sidi Ahmed",
    "Sidi Amar",
    "Sidi Boubekeur",
    "Tircine",
    "Youb"
  ],
  [
    "Ain Bouziane",
    "Ain Charchar",
    "Ain Kechera",
    "Ain Zouit",
    "Azzaba",
    "Bekkouche Lakhdar",
    "Ben Azzouz",
    "Beni Bechir",
    "Beni Oulbane",
    "Beni Zid",
    "Bin El Ouiden",
    "Bouchetata",
    "Cheraia",
    "Collo",
    "Djendel Saadi Mohamed",
    "El Arrouch",
    "El Ghedir",
    "El Hadaiek",
    "El Marsa",
    "Emjez Edchich",
    "Es Sebt",
    "Filfila",
    "Hamadi Krouma",
    "Kanoua",
    "Kerkera",
    "Khenag Mayoum",
    "Oued Zhour",
    "Ouldja Boulbalout",
    "Ouled Attia",
    "Ouled Habbeba",
    "Oum Toub",
    "Ramdane Djamel",
    "Salah Bouchaour",
    "Sidi Mezghiche",
    "Skikda",
    "Tamalous",
    "Zerdezas",
    "Zitouna"
  ],
  [
    "Ain Adden",
    "Ain El Berd",
    "Ain Kada",
    "Ain Thrid",
    "Ain Tindamine",
    "Amarnas",
    "Badredine El Mokrani",
    "Belarbi",
    "Ben Badis",
    "Benachiba Chelia",
    "Bir El Hammam",
    "Boudjebaa El Bordj",
    "Boukhanafis",
    "Chetouane Belaila",
    "Dhaya",
    "El Hacaiba",
    "Hassi Dahou",
    "Hassi Zahana",
    "Lamtar",
    "M'cid",
    "Makedra",
    "Marhoum",
    "Merine",
    "Mezaourou",
    "Mostefa Ben Brahim",
    "Moulay Slissen",
    "Oued Sebaa",
    "Oued Sefioun",
    "Oued Taourira",
    "Ras El Ma",
    "Redjem Demouche",
    "Sehala Thaoura",
    "Sfissef",
    "Sidi Ali Benyoub",
    "Sidi Ali Boussidi",
    "Sidi Bel Abbes",
    "Sidi Brahim",
    "Sidi Chaib",
    "Sidi Dahou Zairs",
    "Sidi Hamadouche",
    "Sidi Khaled",
    "Sidi Lahcene",
    "Sidi Yacoub",
    "Tabia",
    "Tafissour",
    "Taoudmout",
    "Teghalimet",
    "Telagh",
    "Tenira",
    "Tessala",
    "Tilmouni",
    "Zerouala"
  ],
  [
    "Ain Berda",
    "Annaba",
    "Berrahel",
    "Chetaibi",
    "Cheurfa",
    "El Bouni",
    "El Hadjar",
    "Eulma",
    "Oued El Aneb",
    "Seraidi",
    "Sidi Amar",
    "Treat"
  ],
  [
    "Ain Ben Beida",
    "Ain Hessania",
    "Ain Larbi",
    "Ain Makhlouf",
    "Ain Reggada",
    "Belkheir",
    "Ben Djarah",
    "Beni Mezline",
    "Bordj Sabat",
    "Bou Hachana",
    "Bou Hamdane",
    "Bouati Mahmoud",
    "Bouchegouf",
    "Bouhamra Ahmed",
    "Dahouara",
    "Djeballah Khemissi",
    "El Fedjoudj",
    "Guelaat Bou Sbaa",
    "Guelma",
    "Hamam Debagh",
    "Hammam N'bail",
    "Heliopolis",
    "Khezara",
    "Medjez Amar",
    "Medjez Sfa",
    "Nechmaya",
    "Oued Cheham",
    "Oued Fragha",
    "Oued Zenati",
    "Ras El Agba",
    "Roknia",
    "Sellaoua Announa",
    "Sidi Sandel",
    "Tamlouka"
  ],
  [
    "Ain Abid",
    "Ain Smara",
    "Ben Badis",
    "Beni Hamidene",
    "Constantine",
    "Didouche Mourad",
    "El Khroub",
    "Hamma Bouziane",
    "Ibn Ziad",
    "Messaoud Boujeriou",
    "Ouled Rahmouni",
    "Zighoud Youcef"
  ],
  [
    "Ain Boucif",
    "Ain Ouksir",
    "Aissaouia",
    "Aziz",
    "Baata",
    "Ben Chicao",
    "Beni Slimane",
    "Berrouaghia",
    "Bir Ben Laabed",
    "Boghar",
    "Bouaiche",
    "Bouaichoune",
    "Bouchrahil",
    "Boughzoul",
    "Bouskene",
    "Chabounia",
    "Chelalet El Adhaoura",
    "Cheniguel",
    "Damiat",
    "Derrag",
    "Deux Bassins",
    "Djouab",
    "Draa Essamar",
    "El Azizia",
    "El Guelbelkebir",
    "El Hamdania",
    "El Omaria",
    "El Ouinet",
    "Hannacha",
    "Kef Lakhdar",
    "Khams Djouamaa",
    "Ksar El Boukhari",
    "Maghraoua",
    "Medea",
    "Medjebar",
    "Meftaha",
    "Mezerana",
    "Mihoub",
    "Ouamri",
    "Oued Harbil",
    "Ouled Antar",
    "Ouled Bouachra",
    "Ouled Brahim",
    "Ouled Deid",
    "Ouled Hellal",
    "Ouled Maaref",
    "Oum El Djellil",
    "Ouzera",
    "Rebaia",
    "Saneg",
    "Sedraya",
    "Seghouane",
    "Si Mahdjoub",
    "Sidi Demed",
    "Sidi Naamane",
    "Sidi Rabie",
    "Sidi Zahar",
    "Sidi Ziane",
    "Souagui",
    "Tablat",
    "Tafraout",
    "Tamesguida",
    "Tletat Ed Douair",
    "Zoubiria"
  ],
  [
    "Achaacha",
    "Ain Boudinar",
    "Ain Nouissy",
    "Ain Sidi Cherif",
    "Ain Tedles",
    "Benabdelmalek Ramdane",
    "Bouguirat",
    "Fornaka",
    "Hadjadj",
    "Hassi Mameche",
    "Hassiane",
    "Khadra",
    "Kheir Eddine",
    "Mansourah",
    "Mazagran",
    "Mesra",
    "Mostaganem",
    "Nekmaria",
    "Oued El Kheir",
    "Ouled Boughalem",
    "Ouled Maalah",
    "Safsaf",
    "Sayada",
    "Sidi Ali",
    "Sidi Belaattar",
    "Sidi Lakhdar",
    "Sirat",
    "Souaflia",
    "Sour",
    "Stidia",
    "Tazgait",
    "Touahria"
  ],
  [
    "Ain El Hadjel",
    "Ain El Melh",
    "Ain Fares",
    "Ain Khadra",
    "Ain Rich",
    "Belaiba",
    "Ben Srour",
    "Beni Ilmane",
    "Benzouh",
    "Berhoum",
    "Bir Foda",
    "Bou Saada",
    "Bouti Sayeh",
    "Chellal",
    "Dehahna",
    "Djebel Messaad",
    "El Hamel",
    "El Houamed",
    "Hammam Dalaa",
    "Khettouti Sed El Jir",
    "Khoubana",
    "M'cif",
    "M'sila",
    "M'tarfa",
    "Maadid",
    "Maarif",
    "Magra",
    "Medjedel",
    "Menaa",
    "Mohamed Boudiaf",
    "Ouanougha",
    "Ouled Addi Guebala",
    "Ouled Derradj",
    "Ouled Madhi",
    "Ouled Mansour",
    "Ouled Sidi Brahim",
    "Ouled Slimane",
    "Oulteme",
    "Sidi Aissa",
    "Sidi Ameur",
    "Sidi Hadjeres",
    "Sidi M'hamed",
    "Slim",
    "Souamaa",
    "Tamsa",
    "Tarmount",
    "Zarzour"
  ],
  [
    "Ain Fares",
    "Ain Fekan",
    "Ain Ferah",
    "Ain Frass",
    "Alaimia",
    "Aouf",
    "Benian",
    "Bou Henni",
    "Bouhanifia",
    "Chorfa",
    "El Bordj",
    "El Gaada",
    "El Ghomri",
    "El Gueitena",
    "El Hachem",
    "El Keurt",
    "El Mamounia",
    "El Menaouer",
    "Ferraguig",
    "Froha",
    "Gharrous",
    "Ghriss",
    "Guerdjoum",
    "Hacine",
    "Khalouia",
    "Makhda",
    "Maoussa",
    "Mascara",
    "Matemore",
    "Mocta Douz",
    "Mohammadia",
    "Nesmot",
    "Oggaz",
    "Oued El Abtal",
    "Oued Taria",
    "Ras El Ain Amirouche",
    "Sedjerara",
    "Sehailia",
    "Sidi Abdeldjebar",
    "Sidi Abdelmoumene",
    "Sidi Boussaid",
    "Sidi Kada",
    "Sig",
    "Tighennif",
    "Tizi",
    "Zahana",
    "Zelamta"
  ],
  [
    "Ain Beida",
    "El Borma",
    "Hassi Ben Abdellah",
    "Hassi Messaoud",
    "N'goussa",
    "Ouargla",
    "Rouissat",
    "Sidi Khouiled"
  ],
  [
    "Ain Biya",
    "Ain Kerma",
    "Ain Turk",
    "Arzew",
    "Ben Freha",
    "Bethioua",
    "Bir El Djir",
    "Boufatis",
    "Bousfer",
    "Boutlelis",
    "El Ancar",
    "El Braya",
    "El Kerma",
    "Es Senia",
    "Gdyel",
    "Hassi Ben Okba",
    "Hassi Bounif",
    "Hassi Mefsoukh",
    "Marsat El Hadjadj",
    "Mers El Kebir",
    "Messerghin",
    "Oran",
    "Oued Tlelat",
    "Sidi Ben Yebka",
    "Sidi Chami",
    "Tafraoui"
  ],
  [
    "Ain El Orak",
    "Arbaouat",
    "Boualem",
    "Bougtoub",
    "Boussemghoun",
    "Brezina",
    "Cheguig",
    "Chellala",
    "El Bayadh",
    "El Biodh Sidi Cheikh",
    "El Bnoud",
    "El Kheither",
    "El Mehara",
    "Ghassoul",
    "Kef El Ahmar",
    "Krakda",
    "Rogassa",
    "Sidi Ameur",
    "Sidi Slimane",
    "Sidi Tifour",
    "Stitten",
    "Tousmouline"
  ],
  [
    "Bordj Omar Driss",
    "Debdeb",
    "Illizi",
    "In Amenas"
  ],
  [
    "Ain Taghrout",
    "Ain Tesra",
    "Belimour",
    "Ben Daoud",
    "Bir Kasdali",
    "Bordj Bou Arreridj",
    "Bordj Ghdir",
    "Bordj Zemora",
    "Colla",
    "Djaafra",
    "El Ach",
    "El Achir",
    "El Anseur",
    "El Hamadia",
    "El M'hir",
    "El Main",
    "Ghilassa",
    "Haraza",
    "Hasnaoua",
    "Khelil",
    "Ksour",
    "Mansoura",
    "Medjana",
    "Ouled Brahem",
    "Ouled Dahmane",
    "Ouled Sidi Brahim",
    "Rabta",
    "Ras El Oued",
    "Sidi Embarek",
    "Tafreg",
    "Taglait",
    "Teniet En Nasr",
    "Tesmart",
    "Tixter"
  ],
  [
    "Afir",
    "Ammal",
    "Baghlia",
    "Ben Choud",
    "Beni Amrane",
    "Bordj Menaiel",
    "Boudouaou",
    "Boudouaou El Bahri",
    "Boumerdes",
    "Bouzegza Keddara",
    "Chabet El Ameur",
    "Corso",
    "Dellys",
    "Djinet",
    "El Kharrouba",
    "Hammedi",
    "Isser",
    "Khemis El Khechna",
    "Larbatache",
    "Leghata",
    "Naciria",
    "Ouled Aissa",
    "Ouled Hedadj",
    "Ouled Moussa",
    "Si Mustapha",
    "Sidi Daoud",
    "Souk El Haad",
    "Taourga",
    "Thenia",
    "Tidjelabine",
    "Timezrit",
    "Zemmouri"
  ],
  [
    "Ain El Assel",
    "Ain Kerma",
    "Asfour",
    "Ben M Hidi",
    "Berrihane",
    "Besbes",
    "Bougous",
    "Bouhadjar",
    "Bouteldja",
    "Chebaita Mokhtar",
    "Chefia",
    "Chihani",
    "Drean",
    "Echatt",
    "El Aioun",
    "El Kala",
    "El Tarf",
    "Hammam Beni Salah",
    "Lac Des Oiseaux",
    "Oued Zitoun",
    "Raml Souk",
    "Souarekh",
    "Zerizer",
    "Zitouna"
  ],
  [
    "Oum El Assel",
    "Tindouf"
  ],
  [
    "Ammari",
    "Beni Chaib",
    "Beni Lahcene",
    "Bordj Bounaama",
    "Bordj El Emir Abdelkader",
    "Bou Caid",
    "Khemisti",
    "Larbaa",
    "Lardjem",
    "Layoune",
    "Lazharia",
    "Maacem",
    "Melaab",
    "Ouled Bessem",
    "Sidi Abed",
    "Sidi Boutouchent",
    "Sidi Lantri",
    "Sidi Slimane",
    "Tamellalet",
    "Theniet El Had",
    "Tissemsilt",
    "Youssoufia"
  ],
  [
    "Bayadha",
    "Ben Guecha",
    "Debila",
    "Douar El Maa",
    "El Ogla",
    "El Oued",
    "Guemar",
    "Hamraia",
    "Hassani Abdelkrim",
    "Hassi Khalifa",
    "Kouinine",
    "Magrane",
    "Mih Ouansa",
    "Nakhla",
    "Oued El Alenda",
    "Ourmes",
    "Reguiba",
    "Robbah",
    "Sidi Aoun",
    "Taghzout",
    "Taleb Larbi",
    "Trifaoui"
  ],
  [
    "Ain Touila",
    "Babar",
    "Baghai",
    "Bouhmama",
    "Chelia",
    "Cherchar",
    "Djellal",
    "El Hamma",
    "El Mahmal",
    "El Oueldja",
    "Ensigha",
    "Kais",
    "Khenchela",
    "Khirane",
    "M'sara",
    "M'toussa",
    "Ouled Rechache",
    "Remila",
    "Tamza",
    "Taouzianat",
    "Yabous"
  ],
  [
    "Ain Soltane",
    "Ain Zana",
    "Bir Bouhouche",
    "Drea",
    "Haddada",
    "Hanencha",
    "Khedara",
    "Khemissa",
    "M'daourouche",
    "Machroha",
    "Merahna",
    "Oued Kebrit",
    "Ouled Driss",
    "Ouled Moumen",
    "Oum El Adhaim",
    "Quillen",
    "Ragouba",
    "Safel El Ouiden",
    "Sedrata",
    "Sidi Fredj",
    "Souk Ahras",
    "Taoura",
    "Terraguelt",
    "Tiffech",
    "Zaarouria",
    "Zouabi"
  ],
  [
    "Aghbal",
    "Ahmer El Ain",
    "Ain Tagourait",
    "Attatba",
    "Beni Mileuk",
    "Bou Haroun",
    "Bou Ismail",
    "Bourkika",
    "Chaiba",
    "Cherchell",
    "Damous",
    "Douaouda",
    "Fouka",
    "Gouraya",
    "Hadjout",
    "Hadjret Ennous",
    "Khemisti",
    "Kolea",
    "Larhat",
    "Menaceur",
    "Merad",
    "Messelmoun",
    "Nador",
    "Sidi Amar",
    "Sidi Ghiles",
    "Sidi Rached",
    "Sidi Semiane",
    "Tipaza"
  ],
  [
    "Ahmed Rachedi",
    "Ain Beida Harriche",
    "Ain Mellouk",
    "Ain Tine",
    "Amira Arres",
    "Benyahia Abderrahmane",
    "Bouhatem",
    "Chelghoum Laid",
    "Chigara",
    "Derrahi Bousselah",
    "El Mechira",
    "Elayadi Barbes",
    "Ferdjioua",
    "Grarem Gouga",
    "Hamala",
    "Mila",
    "Minar Zarza",
    "Oued Athmenia",
    "Oued Endja",
    "Oued Seguen",
    "Ouled Khalouf",
    "Rouached",
    "Sidi Khelifa",
    "Sidi Merouane",
    "Tadjenanet",
    "Tassadane Haddada",
    "Teleghma",
    "Terrai Bainem",
    "Tessala",
    "Tiberguent",
    "Yahia Beniguecha",
    "Zeghaia"
  ],
  [
    "Ain Benian",
    "Ain Bouyahia",
    "Ain Defla",
    "Ain Lechiakh",
    "Ain Soltane",
    "Ain Tork",
    "Arib",
    "Barbouche",
    "Bathia",
    "Belaas",
    "Ben Allal",
    "Bir Ould Khelifa",
    "Bordj Emir Khaled",
    "Boumedfaa",
    "Bourached",
    "Djelida",
    "Djemaa Ouled Cheikh",
    "Djendel",
    "El Abadia",
    "El Amra",
    "El Attaf",
    "El Maine",
    "Hammam Righa",
    "Hassania",
    "Hoceinia",
    "Khemis Miliana",
    "Mekhatria",
    "Miliana",
    "Oued Chorfa",
    "Oued Djemaa",
    "Rouina",
    "Sidi Lakhdar",
    "Tacheta Zegagha",
    "Tarik Ibn Ziad",
    "Tiberkanine",
    "Zeddine"
  ],
  [
    "Ain Ben Khelil",
    "Ain Safra",
    "Assela",
    "Djeniane Bourzeg",
    "El Biod",
    "Kasdir",
    "Makman Ben Amer",
    "Mecheria",
    "Moghrar",
    "Naama",
    "Sfissifa",
    "Tiout"
  ],
  [
    "Aghlal",
    "Ain El Arbaa",
    "Ain Kihal",
    "Ain Temouchent",
    "Ain Tolba",
    "Aoubellil",
    "Beni Saf",
    "Bouzedjar",
    "Chaabat El Ham",
    "Chentouf",
    "El Amria",
    "El Malah",
    "El Messaid",
    "Emir Abdelkader",
    "Hammam Bouhadjar",
    "Hassasna",
    "Hassi El Ghella",
    "Oued Berkeche",
    "Oued Sebbah",
    "Ouled Boudjemaa",
    "Ouled Kihal",
    "Oulhaca El Gheraba",
    "Sidi Ben Adda",
    "Sidi Boumediene",
    "Sidi Ouriache",
    "Sidi Safi",
    "Tamzoura",
    "Terga"
  ],
  [
    "Berriane",
    "Bounoura",
    "Dhayet Bendhahoua",
    "El Atteuf",
    "El Guerrara",
    "Ghardaia",
    "Mansoura",
    "Metlili",
    "Sebseb",
    "Zelfana"
  ],
  [
    "Ain Rahma",
    "Ain Tarek",
    "Ammi Moussa",
    "Belaassel Bouzagza",
    "Bendaoud",
    "Beni Dergoun",
    "Beni Zentis",
    "Dar Ben Abdelah",
    "Djidiouia",
    "El Guettar",
    "El H'madna",
    "El Hassi",
    "El Matmar",
    "El Ouldja",
    "Had Echkalla",
    "Hamri",
    "Kalaa",
    "Lahlef",
    "Mazouna",
    "Mediouna",
    "Mendes",
    "Merdja Sidi Abed",
    "Ouarizane",
    "Oued El Djemaa",
    "Oued Essalem",
    "Oued Rhiou",
    "Ouled Aiche",
    "Ouled Sidi Mihoub",
    "Ramka",
    "Relizane",
    "Sidi Khettab",
    "Sidi Lazreg",
    "Sidi M'hamed Benali",
    "Sidi M'hamed Benaouda",
    "Sidi Saada",
    "Souk El Had",
    "Yellel",
    "Zemmoura"
  ],
  [
    "Aougrout",
    "Charouine",
    "Deldoul",
    "Ksar Kaddour",
    "Metarfa",
    "Ouled Aissa",
    "Ouled Said",
    "Talmine",
    "Timimoun",
    "Tinerkouk"
  ],
  [
    "Bordj Badji Mokhtar",
    "Timiaouine"
  ],
  [
    "Besbes",
    "Chaiba",
    "Doucen",
    "Ouled Djellal",
    "Ras El Miad",
    "Sidi Khaled"
  ],
  [
    "Beni Abbes",
    "Beni Ikhlef",
    "El Ouata",
    "Igli",
    "Kerzaz",
    "Ksabi",
    "Ouled Khoudir",
    "Tabelbala",
    "Tamtert",
    "Timoudi"
  ],
  [
    "Foggaret Azzaouia",
    "In Ghar",
    "In Salah"
  ],
  [
    "In Guezzam",
    "Tin Zouatine"
  ],
  [
    "Benaceur",
    "Blidet Amor",
    "El Alia",
    "El Hadjira",
    "Megarine",
    "Mnaguer",
    "Nezla",
    "Sidi Slimane",
    "Taibet",
    "Tebesbest",
    "Temacine",
    "Touggourt",
    "Zaouia El Abidia"
  ],
  [
    "Bordj El Haouasse",
    "Djanet"
  ],
  [
    "Djamaa",
    "El M'ghair",
    "Mrara",
    "Oum Touyour",
    "Sidi Amrane",
    "Sidi Khelil",
    "Still",
    "Tenedla"
  ],
  [
    "El Meniaa",
    "Hassi Fehal",
    "Hassi Gara"
  ]
];
function AsynxWave(params) {
  return /* @__PURE__ */ jsx("div", {});
}
function Thanks({ order, onDone }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "",
      children: [
        /* @__PURE__ */ jsxs("center", { children: [
          "رقم الطلب #",
          order.id
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-5" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-7xl flex", children: [
            /* @__PURE__ */ jsx(AsynxWave, {}),
            "شكــــراً"
          ] }),
          /* @__PURE__ */ jsxs("h3", { children: [
            order.customerName,
            " تلقينا طلبك"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-2 h-[1px] line" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h3", { children: [
          "سنتصل بك على ",
          /* @__PURE__ */ jsx("b", { children: order.customerPhone })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "h-1" }),
        /* @__PURE__ */ jsx("div", { className: "h-2" }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "w-full pulse btn gb", onClick: onDone, children: "إغلاق" }),
        /* @__PURE__ */ jsx("div", { className: "h-2" }),
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-gray-100 text-center", children: /* @__PURE__ */ jsx("a", { href: `https://track.feeef.net/track/${order.id}`, target: "_blank", className: "text-blue-500", children: "تتبع حالة الطلب" }) }),
        /* @__PURE__ */ jsx("div", { className: "h-2" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("button", { type: "button", className: "w-full btn gb", children: "باقي المنتجات" }) })
      ]
    }
  );
}
function VariantButton({ variant, selected = false, onClick }) {
  if (variant.type === "color") {
    return /* @__PURE__ */ jsx(ColorVariantButton, { variant, selected, onClick });
  } else if (variant.type === "image") {
    return /* @__PURE__ */ jsx(ImageVariantButton, { variant, selected, onClick });
  }
  const child = /* @__PURE__ */ jsx("div", { className: "cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100", children: variant.name });
  return /* @__PURE__ */ jsx("div", { onClick, className: (selected ? "border-primary" : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center", children: child });
}
function ColorVariantButton({ variant, selected = false, onClick }) {
  const child = /* @__PURE__ */ jsx(
    "div",
    {
      className: "cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100",
      style: { backgroundColor: variant.value ? dartColorToCss(variant.value) : "#000000" }
    }
  );
  return /* @__PURE__ */ jsx("div", { onClick, className: (selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center", children: child });
}
function ImageVariantButton({ variant, selected = false, onClick }) {
  const child = /* @__PURE__ */ jsx("div", { className: "cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 w-14 h-14 rounded-[15px]  bg-opacity-5  focus:bg-opacity-100", children: /* @__PURE__ */ jsx("img", { src: variant.value, className: "w-full h-full object-cover" }) });
  return /* @__PURE__ */ jsx("div", { onClick, className: (selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-[17px] border-2 mx-1 my-1 flex justify-center items-center", children: child });
}
function RenderVariantGroup({ variantGroup, path, onPathChange, onSelect }) {
  var _a, _b, _c, _d, _e;
  var selected = null;
  var rest = [];
  if (path.length) {
    selected = path[0];
    rest = path.slice(1);
  }
  function getVariant(name) {
    var _a2;
    return ((_a2 = variantGroup.options) == null ? void 0 : _a2.find((option) => option.name === name)) || null;
  }
  function toggle(variant) {
    selected = variant.name;
    onPathChange([selected]);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "h-1" }),
    /* @__PURE__ */ jsxs("h3", { className: "text-sm font-medium", children: [
      variantGroup.name,
      getVariant(selected) && /* @__PURE__ */ jsx("span", { dir: "ltr", className: "px-2 bg-primary text-white rounded-full", children: /* @__PURE__ */ jsx("span", { className: "px-1", children: (_a = getVariant(selected)) == null ? void 0 : _a.name }) }),
      ((_b = getVariant(selected)) == null ? void 0 : _b.stock) !== void 0 && /* @__PURE__ */ jsxs("span", { className: "  text-primary rounded-full px-2", children: [
        (_c = getVariant(selected)) == null ? void 0 : _c.stock,
        " متوفر"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: (_d = variantGroup.options) == null ? void 0 : _d.map((variant, index) => /* @__PURE__ */ jsx(
      "span",
      {
        className: (variant.stock === 0 ? "opacity-30" : "") + " flex items-center justify-center ",
        children: /* @__PURE__ */ jsxs("span", { className: "relative flex items-center justify-center", children: [
          variant.hint && /* @__PURE__ */ jsx("span", { dir: "ltr", className: (selected === variant.name ? "bg-primary" : "bg-gray-600") + " text-[9px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none", children: /* @__PURE__ */ jsx("span", { className: "px-1", children: variant.hint }) }) || variant.type === "color" && variant.name && /* @__PURE__ */ jsx("span", { dir: "ltr", className: (selected === variant.name ? "bg-primary" : "bg-gray-600") + " text-[9px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none", children: /* @__PURE__ */ jsx("span", { className: "px-1", children: variant.name }) }) || variant.type === "image" && variant.value && /* @__PURE__ */ jsx("span", { dir: "ltr", className: (selected === variant.name ? "bg-primary" : "bg-gray-600") + " text-[9px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none", children: /* @__PURE__ */ jsx("span", { className: "px-1", children: variant.name }) }),
          /* @__PURE__ */ jsx(
            VariantButton,
            {
              onClick: () => {
                if (variant.stock !== 0) {
                  toggle(variant);
                }
                onSelect == null ? void 0 : onSelect(variant);
              },
              selected: selected === variant.name,
              variant
            }
          )
        ] })
      },
      index
    )) }),
    selected && ((_e = getVariant(selected)) == null ? void 0 : _e.child) && /* @__PURE__ */ jsx(
      RenderVariantGroup,
      {
        variantGroup: getVariant(selected).child,
        path: rest,
        onPathChange: (
          // sub path
          (path2) => onPathChange([selected, ...path2])
        )
      }
    )
  ] });
}
const ProductCard = ({ product, store }) => {
  var _a;
  const total = !!product.discount ? (product.price - product.discount).toFixed(0) : product.price.toFixed(0);
  const discount = !!product.discount ? (product.discount * 100 / product.price).toFixed(0) : null;
  return /* @__PURE__ */ jsx(Link, { to: `/p/${product.slug}`, children: /* @__PURE__ */ jsxs("div", { className: "gb rounded-2xl p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "gb rounded-[8px] p-[1px] aspect-square", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "rounded-[7px] w-full h-full object-cover",
        src: product.photoUrl ?? "",
        alt: product.name ?? ""
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "h-2" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "rounded-md  text-orange-500 text-lg", children: [
          total,
          " ",
          getCurrencySymbolByStore(store)
        ] }),
        !!product.discount && /* @__PURE__ */ jsxs("span", { className: "px-1 text-gray-400 line-through text-sm", children: [
          product.price,
          " ",
          getCurrencySymbolByStore(store)
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: product.name }),
      /* @__PURE__ */ jsx("div", { className: "h-1" }),
      product.description && /* @__PURE__ */ jsxs("p", { className: "text-gray-400 dark:text-gray-500 text-sm font-light", children: [
        (_a = product.description) == null ? void 0 : _a.substring(0, 60),
        "..."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-2" }),
      /* @__PURE__ */ jsxs("button", { type: "button", className: "btn gb w-full", children: [
        "اشتري الآن",
        !!product.discount && /* @__PURE__ */ jsxs("span", { dir: "ltr", className: "mx-2 bg-primary text-white rounded-sm px-1", children: [
          "-",
          discount,
          "%"
        ] })
      ] })
    ] })
  ] }) });
};
function getCurrencySymbolByStore(store) {
  var _a, _b, _c;
  try {
    const defaultCurrency = (_a = store.configs) == null ? void 0 : _a.defaultCurrency;
    if (!defaultCurrency) {
      return "دج";
    }
    return (_c = (_b = store.configs) == null ? void 0 : _b.currencies[defaultCurrency]) == null ? void 0 : _c.symbol;
  } catch (error) {
    return "دج";
  }
}
function ShippingForm({ store, shipping, shippingMethod, setShipping, sendOrder }) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  function updateShippingWilaya(stateCode) {
    const index = parseInt(stateCode) - 1;
    shipping.address.state = stateCode;
    const baladiyat = cities[index];
    let currentCityIndex = (parseInt(shipping.address.city) || 1) - 1;
    shipping.address.city = (Math.min(currentCityIndex, baladiyat.length - 1) + 1).toString().padStart(2, "0");
    setShipping({ ...shipping });
    const { canShipToHome: canShipToHome2, canShipToDesk: canShipToDesk2 } = calc(
      shipping.address.state,
      !!shipping.doorShipping
    );
    if (!canShipToHome2 && shipping.doorShipping) {
      shipping.doorShipping = false;
      shipping.address.street = "";
      setShipping({ ...shipping });
    }
    if (!canShipToDesk2 && !shipping.doorShipping) {
      shipping.doorShipping = true;
      shipping.address.street = "عنواني";
      setShipping({ ...shipping });
    }
  }
  function validatePhone(phone) {
    return !validatePhoneNumber(tryFixPhoneNumber(phone));
  }
  function handlePhoneChange(e) {
    const phone = e.target.value;
    const isValid = validatePhone(phone);
    shipping.phone = phone;
    setShipping({ ...shipping });
    sendOrder("draft");
    setIsPhoneValid(isValid);
  }
  function calc(state, doorShipping) {
    var rates = getShippingRateForState({
      shippingMethod,
      store,
      state
    });
    var rate2 = rates == null ? void 0 : rates[doorShipping ? "home" : "desk"];
    var canShipToHome2 = (rates == null ? void 0 : rates.home) !== null;
    var homeRate2 = rates == null ? void 0 : rates.home;
    var canShipToDesk2 = (rates == null ? void 0 : rates.desk) !== null;
    var deskRate2 = rates == null ? void 0 : rates.desk;
    return {
      rate: rate2,
      canShipToHome: canShipToHome2,
      homeRate: homeRate2,
      canShipToDesk: canShipToDesk2,
      deskRate: deskRate2
    };
  }
  const { rate, canShipToHome, homeRate, canShipToDesk, deskRate } = calc(
    shipping.address.state,
    !!shipping.doorShipping
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold flex", children: "معلومات التوصيل" }),
    /* @__PURE__ */ jsx("div", { className: "h-2" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm font-light flex items-center", children: [
          "الهاتف",
          !isPhoneValid && tryFixPhoneNumber(shipping.phone) != "0" && /* @__PURE__ */ jsx("span", { className: "mx-2 text-xs text-p", children: tryFixPhoneNumber(shipping.phone) })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative border border-gray border-opacity-50 rounded-lg " + (isPhoneValid ? "" : " text-red-500 pulse"),
            style: {
              "--p": isPhoneValid ? "transparent" : "rgba(255, 0, 0, .5)"
            },
            children: [
              /* @__PURE__ */ jsx(
                IconPhone,
                {
                  className: `absolute top-2 right-2 ${isPhoneValid ? "text-gray-400" : "text-red-400"}`,
                  color: ((_a = store.decoration) == null ? void 0 : _a.primary) && dartColorToCss((_b = store.decoration) == null ? void 0 : _b.primary) || void 0
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  style: {
                    outline: "none",
                    "--p": "transparent"
                  },
                  required: true,
                  className: `bg-transparent p-2 w-full pr-10 overflow-hidden`,
                  type: "tel",
                  placeholder: "رقم الهاتف",
                  defaultValue: shipping.phone,
                  onChange: handlePhoneChange
                }
              ),
              !isPhoneValid && /* @__PURE__ */ jsx("div", { className: "bg-red-500 rounded-b-lg text-white text-xs w-full text-center", children: validatePhoneNumber(tryFixPhoneNumber(shipping.phone)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-light flex items-center", children: "الاسم" }),
        /* @__PURE__ */ jsxs("div", { className: "relative border border-gray-500 border-opacity-20 rounded-lg", children: [
          /* @__PURE__ */ jsx(IconUser, { className: "absolute top-2 right-2 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "bg-transparent p-2  w-full pr-10 invalid:outline-red-700 invalid:outline invalid:outline-2 rounded-[inherit]",
              type: "text",
              placeholder: "الإسم و اللقب",
              defaultValue: shipping.name,
              onChange: (e) => {
                shipping.name = e.target.value;
                setShipping({ ...shipping });
              }
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-x-4 gap-y-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm font-light flex items-center", children: [
          "الولاية",
          shipping.address.state && /* @__PURE__ */ jsxs("span", { className: "mx-2 text-xs text-red-500", children: [
            "(",
            shipping.address.state,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-visible border border-gray-500 border-opacity-20 rounded-lg", children: [
          /* @__PURE__ */ jsx(IconLocation, { className: "absolute top-2 right-2 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit] focus:first-letter:outline-2",
              required: true,
              onChange: (e) => {
                updateShippingWilaya(e.target.value);
              },
              defaultValue: shipping.address.state,
              children: states.map((state, index) => {
                const { rate: rate2, canShipToHome: canShipToHome2, homeRate: homeRate2, canShipToDesk: canShipToDesk2, deskRate: deskRate2 } = calc(
                  (index + 1).toString().padStart(2, "0"),
                  !!shipping.doorShipping
                );
                return /* @__PURE__ */ jsxs(
                  "option",
                  {
                    disabled: !canShipToHome2 && !canShipToDesk2,
                    value: index + 1,
                    children: [
                      state,
                      " - ",
                      rate2 === 0 ? /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "توصيل مجاني" }) : !canShipToHome2 && !canShipToDesk2 ? /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "غير متوفر" }) : !canShipToHome2 && canShipToDesk2 ? /* @__PURE__ */ jsxs("span", { className: "text-red-500", children: [
                        "توصيل للمكتب فقط (",
                        deskRate2,
                        " ",
                        getCurrencySymbolByStore(store),
                        ")"
                      ] }) : canShipToHome2 && !canShipToDesk2 ? /* @__PURE__ */ jsxs("span", { className: "text-green-500", children: [
                        "توصيل للبيت فقط (",
                        homeRate2,
                        " ",
                        getCurrencySymbolByStore(store),
                        ")"
                      ] }) : /* @__PURE__ */ jsxs("span", { children: [
                        rate2,
                        " ",
                        getCurrencySymbolByStore(store)
                      ] })
                    ]
                  },
                  index
                );
              })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "text-sm font-light flex items-center", children: [
          "البلدية",
          !shipping.address.state && /* @__PURE__ */ jsx("span", { className: "mx-2 text-xs text-red-500", children: "(اختر الولاية أولاً)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-visible border border-gray-500 border-opacity-20 rounded-lg", children: [
          /* @__PURE__ */ jsx(IconLocationCode, { className: "absolute top-2 right-2 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "bg-transparent p-2 h-10 w-full pr-10 rounded-[inherit]",
              required: true,
              onChange: (e) => {
                shipping.address.city = e.target.value;
                setShipping({ ...shipping });
              },
              value: shipping.address.city,
              disabled: !shipping.address.state,
              children: !parseInt(shipping.address.state) ? /* @__PURE__ */ jsx("option", { children: "لا يوجد بلديات" }) : cities[parseInt(shipping.address.state) - 1].map((city, index) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: (index + 1).toString().padStart(2, "0"),
                  children: city
                },
                index
              ))
            }
          )
        ] })
      ] })
    ] }),
    (shipping.doorShipping && ((_d = (_c = store.metadata) == null ? void 0 : _c.shipping) == null ? void 0 : _d.mode) !== "deskOnly" || !canShipToDesk) && canShipToHome && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm font-light", children: "العنوان" }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden border border-gray-500 border-opacity-20 rounded-lg", children: [
        /* @__PURE__ */ jsx(IconLocationBolt, { className: "absolute top-2 right-2 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            required: true,
            className: "bg-transparent p-2  w-full pr-10",
            placeholder: "أدخل العنوان كاملا، توصيل لباب البيت",
            defaultValue: shipping.address.street,
            onChange: (e) => {
              shipping.address.street = e.target.value;
              setShipping({ ...shipping });
            }
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "h-4" }),
    ((_f = (_e = store.metadata) == null ? void 0 : _e.shipping) == null ? void 0 : _f.mode) === "deskOnly" || ((_h = (_g = store.metadata) == null ? void 0 : _g.shipping) == null ? void 0 : _h.mode) === "homeOnly" || !canShipToDesk || !canShipToHome ? null : /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: () => {
        shipping.doorShipping = !shipping.doorShipping && canShipToHome;
        setShipping({ ...shipping });
      }, checked: shipping.doorShipping, className: "sr-only peer" }),
      /* @__PURE__ */ jsx("div", { className: "pulse w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:m-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" }),
      /* @__PURE__ */ jsx("div", { className: "ms-3 flex flex-col", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-900 dark:text-gray-300", children: [
        !shipping.doorShipping && "هل تريد ",
        "التوصيل للبيت ",
        !shipping.doorShipping && /* @__PURE__ */ jsxs("b", { dir: "ltr", children: [
          "مقابل ",
          getCurrencySymbolByStore(store),
          (_i = getShippingRateForState({
            shippingMethod,
            store,
            state: shipping.address.state
          })) == null ? void 0 : _i.home
        ] })
      ] }) })
    ] })
  ] });
}
const AvatarFileSchema = vine.any();
const ImageFileSchema = vine.any();
const DomainSchema = vine.object({
  name: vine.string().minLength(3).maxLength(32),
  verifiedAt: vine.date().optional(),
  metadata: vine.object({}).optional()
});
const StoreDecorationSchema = vine.object({
  primary: vine.number().min(0).max(4294967295),
  onPrimary: vine.number().min(0).max(4294967295),
  showStoreLogoInHeader: vine.boolean().optional(),
  logoFullHeight: vine.boolean().optional(),
  showStoreNameInHeader: vine.boolean().optional(),
  metadata: vine.any().optional()
});
const EmbaddedCategorySchema = vine.object({
  name: vine.string().minLength(2).maxLength(32),
  description: vine.string().minLength(2).maxLength(255).optional(),
  photoUrl: vine.string().optional(),
  ondarkPhotoUrl: vine.string().optional(),
  photoFile: AvatarFileSchema.optional(),
  ondarkPhotoFile: AvatarFileSchema.optional(),
  metadata: vine.object({}).optional()
});
const EmbaddedAddressSchema = vine.object({
  country: vine.string().minLength(2).maxLength(32).optional(),
  state: vine.string().minLength(2).maxLength(32).optional(),
  city: vine.string().minLength(2).maxLength(32).optional(),
  street: vine.string().minLength(2).maxLength(32).optional(),
  zip: vine.string().minLength(2).maxLength(32).optional(),
  metadata: vine.object({}).optional().optional()
});
const EmbaddedContactSchema = vine.object({
  type: vine.string().minLength(2).maxLength(32),
  value: vine.string().minLength(2).maxLength(255),
  metadata: vine.object({}).optional()
});
const StoreBunner = vine.object({
  url: vine.string().url().optional(),
  title: vine.string(),
  enabled: vine.boolean().optional(),
  metadata: vine.object({}).optional()
});
const PhoneShema = vine.string().regex(/^0(5|6|7)\d{8}$|^0(2)\d{7}$/);
vine.object({
  name: vine.string().minLength(2).maxLength(32),
  email: vine.string(),
  phone: PhoneShema.optional(),
  photoFile: ImageFileSchema.optional(),
  photoUrl: vine.string().optional(),
  password: vine.string().minLength(8).maxLength(32)
});
const SigninSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(8).maxLength(32)
});
const AuthUpdateUserSchema = vine.object({
  name: vine.string().minLength(2).maxLength(32).optional(),
  email: vine.string().optional(),
  phone: PhoneShema.optional(),
  // for upload file
  photoFile: vine.any(),
  photoUrl: vine.string().optional(),
  oldPassword: vine.string().minLength(8).maxLength(32).optional(),
  newPassword: vine.string().minLength(8).maxLength(32).notSameAs("oldPassword").optional()
});
const OrderItemSchema = vine.object({
  productId: vine.string(),
  // productId: vine.string().exists(async (db, value, field) => {
  //   const product = await db.from('products').where('id', value).first()
  //   return !!product
  // }),
  productName: vine.string().optional(),
  variant: vine.any().optional(),
  quantity: vine.number(),
  price: vine.number().optional()
});
const GuestOrderItemSchema = vine.object({
  productId: vine.string(),
  variantPath: vine.string().optional(),
  quantity: vine.number()
});
const SendOrderSchema = vine.object({
  id: vine.string().optional(),
  customerName: vine.string().optional(),
  customerPhone: vine.string(),
  //   customerIp: vine.string().optional(),
  shippingAddress: vine.string().optional(),
  shippingCity: vine.string().optional(),
  shippingState: vine.string().optional(),
  shippingMethodId: vine.string().optional(),
  paymentMethodId: vine.string().optional(),
  items: vine.array(GuestOrderItemSchema).minLength(1),
  //   subtotal: vine.number().optional(),
  //   shippingPrice: vine.number().optional(),
  //   total: vine.number().optional(),
  //   discount: vine.number().optional(),
  coupon: vine.string().optional(),
  status: vine.enum(["pending", "draft"]),
  // TODO: validate storeId is exists and not blocked
  storeId: vine.string(),
  metadata: vine.any().optional()
});
vine.object({
  id: vine.string().optional(),
  customerName: vine.string().optional(),
  customerPhone: PhoneShema,
  customerIp: vine.string().optional(),
  shippingAddress: vine.string().optional(),
  shippingCity: vine.string().optional(),
  shippingState: vine.string().optional(),
  shippingMethodId: vine.string().optional(),
  paymentMethodId: vine.string().optional(),
  items: vine.array(OrderItemSchema).minLength(1),
  subtotal: vine.number().optional(),
  shippingPrice: vine.number().optional(),
  total: vine.number().optional(),
  discount: vine.number().optional(),
  coupon: vine.string().optional(),
  status: vine.enum(OrderStatus),
  storeId: vine.string(),
  metadata: vine.any().optional()
});
vine.object({
  id: vine.string().optional(),
  customerName: vine.string().optional(),
  customerPhone: PhoneShema.optional(),
  customerIp: vine.string().optional(),
  shippingAddress: vine.string().optional(),
  shippingCity: vine.string().optional(),
  shippingState: vine.string().optional(),
  shippingMethodId: vine.string().optional(),
  paymentMethodId: vine.string().optional(),
  items: vine.array(OrderItemSchema).minLength(1).optional(),
  subtotal: vine.number().optional(),
  shippingPrice: vine.number().optional(),
  total: vine.number().optional(),
  discount: vine.number().optional(),
  coupon: vine.string().optional(),
  status: vine.enum(OrderStatus).optional(),
  storeId: vine.string(),
  metadata: vine.any().optional()
});
class ModelRepository {
  /**
   * Constructs a new instance of the ModelRepository class.
   * @param resource - The resource name.
   * @param client - The Axios instance used for making HTTP requests.
   */
  constructor(resource, client) {
    __publicField(this, "resource");
    // client
    __publicField(this, "client");
    this.resource = resource;
    this.client = client;
  }
  /**
   * Finds a model by its ID or other criteria.
   * @param options - The options for finding the model.
   * @returns A promise that resolves to the found model.
   */
  async find(options) {
    const { id, by, params } = options;
    const res = await this.client.get(`/${this.resource}/${id}`, {
      params: {
        by: by || "id",
        ...params
      }
    });
    return res.data;
  }
  /**
   * Lists models with optional pagination and filtering.
   * @param options - The options for listing the models.
   * @returns A promise that resolves to a list of models.
   */
  async list(options) {
    const { page, offset, limit, params } = options || {};
    const res = await this.client.get(`/${this.resource}`, {
      params: { page, offset, limit, ...params }
    });
    if (Array.isArray(res.data)) {
      return {
        data: res.data
      };
    } else {
      return {
        data: res.data.data,
        total: res.data.meta.total,
        page: res.data.meta.currentPage,
        limit: res.data.meta.perPage
      };
    }
  }
  /**
   * Creates a new model.
   * @param options - The options for creating the model.
   * @returns A promise that resolves to the created model.
   */
  async create(options) {
    const { data, params } = options;
    const res = await this.client.post(`/${this.resource}`, data, { params });
    return res.data;
  }
  /**
   * Updates an existing model.
   * @param options - The options for updating the model.
   * @returns A promise that resolves to the updated model.
   */
  async update(options) {
    const { id, data, params } = options;
    const res = await this.client.put(`/${this.resource}/${id}`, data, {
      params
    });
    return res.data;
  }
  /**
   * Deletes a model by its ID or other criteria.
   * @param options - The options for deleting the model.
   * @returns A promise that resolves when the model is deleted.
   */
  async delete(options) {
    const { id, by, params } = options;
    await this.client.delete(`/${this.resource}/${id}`, {
      params: {
        by: by || "id",
        ...params
      }
    });
  }
}
class OrderRepository extends ModelRepository {
  /**
   * Constructs a new OrderRepository instance.
   * @param client - The AxiosInstance used for making HTTP requests.
   */
  constructor(client) {
    super("orders", client);
  }
  /**
   * Sends an order from an anonymous user.
   * @param data - The data representing the order to be sent.
   * @returns A Promise that resolves to the sent OrderEntity.
   */
  async send(data) {
    const validator = vine.compile(SendOrderSchema);
    const output = await validator.validate(data);
    const res = await this.client.post(`/${this.resource}/send`, output);
    return res.data;
  }
}
class ProductRepository extends ModelRepository {
  /**
   * Creates a new instance of the ProductRepository class.
   * @param client - The AxiosInstance used for making HTTP requests.
   */
  constructor(client) {
    super("products", client);
  }
}
const DefaultShippingRatesSchema = vine.array(
  vine.array(vine.number().min(0).max(1e5).nullable()).nullable()
);
const CreateUserStoreSchema = vine.object({
  name: vine.string().minLength(2).maxLength(32),
  slug: vine.string().regex(/^[a-z0-9-]+$/).minLength(2).maxLength(32),
  // .unique(async (db, value, field) => {
  //   const store = await db.from('stores').where('slug', value).first()
  //   return !store
  // })
  domain: vine.object({
    name: vine.string().minLength(2).maxLength(32)
  }).optional(),
  decoration: StoreDecorationSchema.optional(),
  banner: StoreBunner.optional(),
  logoUrl: vine.string().optional(),
  ondarkLogoUrl: vine.string().optional(),
  logoFile: AvatarFileSchema.optional(),
  ondarkLogoFile: AvatarFileSchema.optional(),
  categories: vine.array(EmbaddedCategorySchema).optional(),
  title: vine.string().minLength(2).maxLength(255).optional(),
  description: vine.string().minLength(2).maxLength(255).optional(),
  addresses: vine.array(EmbaddedAddressSchema).optional(),
  metadata: vine.object({}).optional(),
  contacts: vine.array(
    vine.object({
      type: vine.string().minLength(2).maxLength(32),
      value: vine.string().minLength(2).maxLength(255),
      metadata: vine.object({}).optional()
    })
  ).optional(),
  defaultShippingRates: DefaultShippingRatesSchema.optional(),
  integrations: vine.array(vine.any()).optional()
});
vine.object({
  name: vine.string().minLength(2).maxLength(32).optional(),
  slug: vine.string().regex(/^[a-z0-9-]+$/).minLength(2).maxLength(32).optional(),
  domain: DomainSchema.optional(),
  decoration: StoreDecorationSchema.optional(),
  banner: StoreBunner.optional(),
  logoUrl: vine.string().nullable().optional(),
  ondarkLogoUrl: vine.string().nullable().optional(),
  logoFile: AvatarFileSchema.optional(),
  ondarkLogoFile: AvatarFileSchema.optional(),
  categories: vine.array(EmbaddedCategorySchema).optional(),
  title: vine.string().minLength(2).maxLength(255).optional(),
  description: vine.string().minLength(2).maxLength(255).optional(),
  addresses: vine.array(EmbaddedAddressSchema).optional(),
  metadata: vine.object({}).optional(),
  contacts: vine.array(EmbaddedContactSchema).optional(),
  defaultShippingRates: DefaultShippingRatesSchema.optional(),
  integrations: vine.array(vine.any()).optional()
});
class StoreRepository extends ModelRepository {
  /**
   * Constructs a new StoreRepository instance.
   * @param client The AxiosInstance used for making HTTP requests.
   */
  constructor(client) {
    super("stores", client);
  }
  /**
   * Creates a new Store entity.
   * @param options The options for creating the Store entity.
   * @returns A Promise that resolves to the created Store entity.
   */
  async create(options) {
    const validator = vine.compile(CreateUserStoreSchema);
    const output = await validator.validate(options.data);
    return super.create({ ...options, data: output });
  }
}
const CreateUserSchema = vine.object({
  name: vine.string().minLength(2).maxLength(32),
  email: vine.string(),
  // .unique(async (db, value, field) => {
  //   const user = await db.from('users').where('email', value).first()
  //   return !user
  // }),
  phone: vine.string().regex(/^0(5|6|7)\d{8}$|^0(2)\d{7}$/).optional(),
  password: vine.string().minLength(8).maxLength(32),
  // for upload file
  photoFile: vine.any(),
  // .file({
  //   size: '1mb',
  //   extnames: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  // })
  // .optional(),
  photoUrl: vine.string().optional(),
  // metadata (any object)
  metadata: vine.object({}).optional(),
  // dates
  emailVerifiedAt: vine.date().optional(),
  phoneVerifiedAt: vine.date().optional(),
  verifiedAt: vine.date().optional(),
  blockedAt: vine.date().optional()
});
vine.object({
  name: vine.string().minLength(2).maxLength(32).optional(),
  email: vine.string().optional(),
  phone: vine.string().regex(/^0(5|6|7)\d{8}$|^0(2)\d{7}$/).optional(),
  password: vine.string().minLength(8).maxLength(32).confirmed().optional(),
  // for upload file
  photoFile: vine.any(),
  photoUrl: vine.string().optional(),
  // metadata (any object)
  metadata: vine.object({}).optional(),
  // dates
  emailVerifiedAt: vine.date().optional(),
  phoneVerifiedAt: vine.date().optional(),
  verifiedAt: vine.string().optional(),
  blockedAt: vine.date().optional()
});
class UserRepository extends ModelRepository {
  /**
   * Constructs a new UserRepository instance.
   * @param client - The AxiosInstance used for making HTTP requests.
   */
  constructor(client) {
    super("users", client);
    /**
     * Represents the authentication response.
     */
    __publicField(this, "auth", null);
  }
  /**
   * Signs in a user with the provided credentials.
   * @param credentials - The user credentials.
   * @returns A promise that resolves to the authentication response.
   */
  async signin(credentials) {
    const validator = vine.compile(SigninSchema);
    const output = await validator.validate(credentials);
    const res = await this.client.post(`/${this.resource}/auth/signin`, output);
    this.auth = res.data;
    return res.data;
  }
  /**
   * Signs up a new user with the provided credentials.
   * @param credentials - The user credentials.
   * @returns A promise that resolves to the authentication response.
   */
  async signup(credentials) {
    const validator = vine.compile(CreateUserSchema);
    const output = await validator.validate(credentials);
    const res = await this.client.post(`/${this.resource}/auth/signup`, output);
    this.auth = res.data;
    return res.data;
  }
  /**
   * Signs out the currently authenticated user.
   * @returns A promise that resolves when the user is signed out.
   */
  async signout() {
    this.auth = null;
  }
  /**
   * Updates the authenticated user's data.
   * @param data - The updated user data.
   * @returns A promise that resolves to the updated user entity.
   */
  async updateMe(data) {
    const validator = vine.compile(AuthUpdateUserSchema);
    const output = await validator.validate(data);
    const res = await this.client.put(`/${this.resource}/auth`, output);
    return res.data;
  }
}
class FeeeF {
  /**
   * Constructs a new instance of the FeeeF class.
   * @param {FeeeFConfig} config - The configuration object.
   * @param {string} config.apiKey - The API key used for authentication.
   * @param {AxiosInstance} config.client - The Axios instance used for making HTTP requests.
   * @param {boolean | number} config.cache - The caching configuration. Set to `false` to disable caching, or provide a number to set the cache TTL in milliseconds.
   */
  constructor({
    apiKey,
    client,
    cache,
    baseURL = "http://localhost:3333/api/v1"
  }) {
    /**
     * The API key used for authentication.
     */
    __publicField(this, "apiKey");
    /**
     * The Axios instance used for making HTTP requests.
     */
    __publicField(this, "client");
    /**
     * The repository for managing stores.
     */
    __publicField(this, "stores");
    /**
     * The repository for managing products.
     */
    __publicField(this, "products");
    /**
     * The repository for managing users.
     */
    __publicField(this, "users");
    /**
     * The repository for managing orders.
     */
    __publicField(this, "orders");
    this.apiKey = apiKey;
    if (cache === false) {
      this.client = client || axios;
    } else {
      const isInBrowser = typeof window !== "undefined" && typeof localStorage !== "undefined";
      this.client = setupCache(client || axios, {
        ttl: cache === void 0 ? 1e3 * 60 * 5 : Math.max(cache, 1e3),
        //|| 1 * 60 * 1000, // 1 minute by default
        // for persistent cache use buildWebStorage
        storage: isInBrowser ? buildWebStorage(localStorage, "ff:") : buildMemoryStorage()
      });
    }
    this.client.defaults.baseURL = baseURL;
    this.stores = new StoreRepository(this.client);
    this.products = new ProductRepository(this.client);
    this.users = new UserRepository(this.client);
    this.orders = new OrderRepository(this.client);
  }
}
const ff = new FeeeF({
  apiKey: "c43Yfd3bgolijJU3b3bx095vlfTrvnL94baZrd1",
  baseURL: "https://apis.feeef.net/api/v1",
  cache: 5
  // baseURL: "http://localhost:3333/api/v1",
});
var currentHost = null;
function setCurrentHost(url) {
  currentHost = url;
}
function getCurrentHost() {
  if (typeof window === "undefined") {
    return currentHost;
  }
  return window.location.host;
}
function getCurrentUrl(path) {
  return `https://${getCurrentHost()}${path}`;
}
const generateOrderId = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12);
function ProductPage() {
  let { product, store } = useLoaderData();
  let pathname = useLocation().pathname;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SuperSEO,
      {
        title: store.name + " | " + (product.name || "") + (!!product.title ? " - " + product.title : ""),
        description: product.description || void 0,
        lang: "ar",
        openGraph: {
          ogTitle: store.title + "|" + (product.name || ""),
          ogDescription: product.description || void 0,
          ogUrl: getCurrentUrl(pathname),
          ogImage: {
            ogImage: product.media[0],
            ogImageAlt: product.name || product.title || store.title || ""
          },
          ogSiteName: store.name || store.title || void 0,
          ogType: "product",
          ogLocale: "ar_AR",
          ogDeterminer: "auto",
          ogLocaleAlternate: ["en_US"]
        }
      }
    ),
    /* @__PURE__ */ jsx(Product, { store, product })
  ] });
}
function Product({ store, product }) {
  var _a, _b, _c;
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [orderId] = useState(generateOrderId());
  useEffect(() => {
    document.title = (product == null ? void 0 : product.name) || store.title || "";
  }, []);
  useEffect(() => {
  }, []);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [sentOrder, setSentOrder] = useState(null);
  const isInView = useInViewport();
  const sendOrderButtonRef = isInView.ref;
  const isSendOrderButtonInView = isInView.isInViewport;
  const [item, setItem] = useState({
    product,
    quantity: 1,
    variants: []
  });
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    doorShipping: ((_b = (_a = store.metadata) == null ? void 0 : _a.shipping) == null ? void 0 : _b.mode) == "deskOnly" ? false : true,
    address: {
      street: "",
      city: "1",
      location: {
        geohash: "",
        lat: 0,
        long: 0
      },
      state: "16",
      zip: ""
    }
  });
  function clearOrder() {
    setSentOrder(null);
    item.quantity = 1;
  }
  function getPriceWithoutVariantsDiscount() {
    return getProductPriceWithoutVariantsDiscount(
      product,
      item.variants
    );
  }
  function getPriceAfterDiscount() {
    return getProductPriceAfterDiscount(
      product,
      item.variants
    );
  }
  function getQuantity() {
    return getProductQuantity(
      product,
      item.variants
    );
  }
  function updateShippingWilaya(stateCode) {
    if (stateCode === "")
      return;
    shipping.address.state = stateCode;
    setShipping(Object.assign({}, shipping));
    if (!!shipping.name && !!shipping.phone && !localStorage.addedToCard) {
      localStorage.addedToCard = "true";
      track("AddToCart", {
        contents: [
          { id: product == null ? void 0 : product.id, quantity: getQuantity() }
        ],
        content_type: "product",
        value: getPriceWithoutVariantsDiscount(),
        currency: "DZD"
      });
    }
  }
  useEffect(() => {
    updateShippingWilaya(shipping.address.state);
  }, []);
  function getTotal() {
    var localOrder = {
      id: orderId,
      shipping,
      items: [item],
      paymentMethod: "cash",
      ref: "",
      shippingMethod: "standard"
    };
    return calculateLocalOrderTotal({
      shippingMethod: product.shippingMethod,
      store,
      localOrder,
      withShipping: true
    });
  }
  function getDiscount() {
    return (100 - getProductDiscountPercentage(product, item.variants) * 100).toFixed(1);
  }
  function getShippingRate() {
    var rate = getShippingRateForState({
      state: shipping.address.state,
      shippingMethod: product.shippingMethod,
      store
    });
    if (shipping.doorShipping) {
      return (rate == null ? void 0 : rate.home) === void 0 ? null : rate == null ? void 0 : rate.home;
    }
    return (rate == null ? void 0 : rate.desk) === void 0 ? null : rate == null ? void 0 : rate.desk;
  }
  function scrollToShippingForm() {
    var el = document.getElementById("order-form");
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    el == null ? void 0 : el.classList.add("pulse");
    setTimeout(() => {
      el == null ? void 0 : el.classList.remove("pulse");
    }, 3e3);
  }
  async function sendOrder(status = "pending") {
    var _a2;
    var validationError = validatePhoneNumber(tryFixPhoneNumber(shipping.phone));
    if (validationError) {
      return;
    }
    shipping.phone = tryFixPhoneNumber(shipping.phone);
    var localStorageKey = `order:${status}-${product.id}`;
    var olderOrder = localStorage.getItem(localStorageKey);
    if (olderOrder) {
      var orderData = JSON.parse(olderOrder);
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      var orderTime = new Date(orderData.createdAt).getTime();
      if (currentTime - orderTime < 36e5) {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        setSentOrder(orderData);
        return;
      }
    }
    if (status == "draft" && olderOrder) {
      return;
    }
    setLoading(status == "pending");
    let urlParams = new URLSearchParams(location.search);
    let fbc = urlParams.get("fbclid");
    let fbp = urlParams.get("_fbp") ?? ((_a2 = document.cookie.split(";").find((c) => c.trim().startsWith("_fbp"))) == null ? void 0 : _a2.split("=")[1]);
    let eventSourceUrl = getCurrentUrl(location.pathname);
    var data = {
      customerName: shipping.name,
      customerPhone: shipping.phone,
      shippingAddress: shipping.address.street,
      shippingCity: shipping.address.city,
      shippingState: shipping.address.state,
      status,
      storeId: store.id,
      items: cart.hasProduct(product.id) ? cart.items : [
        {
          productId: product.id,
          quantity: item.quantity,
          variantPath: item.variants.join("/")
        }
      ],
      metadata: {
        metaPixel: {
          fbc,
          fbp,
          eventSourceUrl
        }
      }
    };
    if (sentOrder == null ? void 0 : sentOrder.id) {
      data.id = sentOrder.id;
      data.metadata.customerPhones = data.metadata.customerPhones || [];
      data.metadata.customerPhones.push(shipping.phone);
    }
    var response = await ff.orders.send(data);
    localStorage.setItem(localStorageKey, JSON.stringify(response));
    setSentOrder(response);
    setLoading(false);
    ({
      country: "DZ",
      st: shipping.address.state,
      ct: shipping.address.city,
      ph: shipping.phone,
      fn: shipping.name
    });
    ({
      content_name: product == null ? void 0 : product.name,
      content_type: "product",
      content_ids: [product == null ? void 0 : product.id],
      contents: [
        {
          id: product == null ? void 0 : product.id,
          quantity: item.quantity,
          item_price: getPriceWithoutVariantsDiscount()
        }
      ],
      currency: "DZD",
      num_items: 1,
      value: getTotal() ?? 0,
      delivery_category: shipping.doorShipping ? "home_delivery" : "in_store",
      order_id: response.id
      // content_category
    });
    if (status == "draft")
      ;
    else {
      cart.clear();
    }
  }
  function SendOrderButton({
    id,
    ref
  }) {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        id: "send-order-btn-" + id,
        onClick: (e) => {
          e.preventDefault();
          sendOrder("pending");
        },
        type: "submit",
        className: "h-12 relative w-full text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ",
        children: [
          /* @__PURE__ */ jsx(
            AsynxWave,
            {
              color: "white",
              width: "100%",
              height: "100%",
              className: "absolute start-0 top-0 bottom-0 h-full aspect-square",
              padding: 0
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsx(
              TypeAnimation,
              {
                cursor: true,
                sequence: [
                  "شراء الآن",
                  2500,
                  "سنتصل بك لتأكيد الطلبية",
                  500,
                  "ماذا تنتظر؟",
                  500,
                  "إظغط هنا لإرسال الطلب",
                  500,
                  "إظغط هنا لإرسال الطلب...",
                  500
                ],
                repeat: Infinity,
                speed: 50
              }
            ),
            /* @__PURE__ */ jsxs("span", { dir: "ltr", className: "mx-2 text-primary rounded-full px-2", style: { backgroundColor: "var(--on-p)" }, children: [
              "x",
              item.quantity
            ] })
          ] }),
          /* @__PURE__ */ jsx(IconShoppingBag, { size: 34, className: "absolute end-3 top-0 bottom-0 m-auto" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed text-center bottom-[10px] right-[10px] left-[10px] z-20",
        style: {
          "--on-p-s": "var(--on-p)",
          "--p-s": "var(--p)",
          transition: "all 0.5s",
          transform: isSendOrderButtonInView ? "translateY(100%)" : "translateY(0)",
          opacity: isSendOrderButtonInView ? 0 : 1,
          visibility: isSendOrderButtonInView ? "hidden" : "visible"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "pulse rounded-lg",
            style: {
              maxWidth: "500px",
              margin: "auto"
            },
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  scrollToShippingForm();
                },
                type: "submit",
                className: "h-12 relative w-full text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary ring-opacity-30 font-medium rounded-lg text-sm px-4 py-2 text-center   ",
                children: [
                  /* @__PURE__ */ jsx(
                    AsynxWave,
                    {
                      color: "white",
                      width: "100%",
                      height: "100%",
                      className: "absolute start-0 top-0 bottom-0 h-full aspect-square",
                      padding: 0
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(
                    TypeAnimation,
                    {
                      cursor: true,
                      sequence: [
                        "شراء الآن",
                        2500,
                        "سنتصل بك لتأكيد الطلبية",
                        500,
                        "ماذا تنتظر؟",
                        500,
                        "إظغط هنا لإرسال الطلب",
                        500,
                        "إظغط هنا لإرسال الطلب...",
                        500
                      ],
                      repeat: Infinity,
                      speed: 50
                    }
                  ) }),
                  /* @__PURE__ */ jsx(IconShoppingBag, { size: 34, className: "absolute end-3 top-0 bottom-0 m-auto" })
                ]
              }
            )
          }
        )
      }
    ),
    loading && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 backdrop-blur-lg", children: [
      /* @__PURE__ */ jsx(
        AsynxWave,
        {
          className: "opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-3xl",
          height: "100%",
          width: "100%"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          AsynxWave,
          {
            height: "50",
            width: "50"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-2" }),
        /* @__PURE__ */ jsx(
          TypeAnimation,
          {
            cursor: false,
            sequence: [
              "جاري التحميل",
              500,
              "يرجى الإنتظار",
              1e3,
              "العملية قيد التقدم",
              300
            ],
            repeat: Infinity,
            speed: 10,
            className: "h-5 text-sm text-gray-600 dark:text-gray-400 font-light"
          }
        )
      ] })
    ] }),
    sentOrder && sentOrder.status == "pending" && /* @__PURE__ */ jsxs("div", { className: "overflow-auto flex items-center justify-center fixed inset-0 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-50 z-50 backdrop-blur-lg", children: [
      /* @__PURE__ */ jsx(
        AsynxWave,
        {
          className: "opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-md",
          height: "100%",
          width: "100%"
        }
      ),
      /* @__PURE__ */ jsx(Thanks, { store, order: sentOrder, onDone: clearOrder })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto pt-4 ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row", children: [
      /* @__PURE__ */ jsx(StickyBox, { offsetTop: 78 + (((_c = store == null ? void 0 : store.banner) == null ? void 0 : _c.enabled) ? 40 : 0), className: "top-0 md:top-[78px]  h-full w-full md:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden slider relative rounded-2xl", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "slides overflow-hidden",
            onScroll: (e) => {
              var el = e.target;
              var index = Math.abs(Math.round(el.scrollLeft / el.clientWidth));
              setSelectedMediaIndex(index);
            },
            children: product == null ? void 0 : product.media.map((media, index) => /* @__PURE__ */ jsx("div", { id: `slide-${index + 1}`, className: "overflow-hidden", children: getYoutubeVideoIdFromUrl(media) != null && false ? /* @__PURE__ */ jsx(
              "div",
              {
                "data-playing": selectedMediaIndex === index,
                style: {
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
                  // when this is selected scall to 1 else 0.4
                  transform: selectedMediaIndex == index ? "scale(1)" : "scale(0.5)",
                  transition: "all 0.6s cubic-bezier(.08,.82,.17,1)",
                  borderRadius: selectedMediaIndex == index ? "0" : "100%",
                  rotate: selectedMediaIndex == index ? "0deg" : selectedMediaIndex > index ? "30deg" : "-30deg",
                  // more effacts
                  opacity: selectedMediaIndex == index ? 1 : 0
                },
                className: "bg-black pointer-events-auto absolute inset-0 xtop-[-500px] xbottom-[-500px] xleft-0 xright-0",
                children: /* @__PURE__ */ jsx(
                  ReactPlayer,
                  {
                    url: `https://www.youtube.com/watch?v=${getYoutubeVideoIdFromUrl(media)}`,
                    width: "100%",
                    height: "100%",
                    playing: selectedMediaIndex === index
                  }
                )
              }
            ) : /* @__PURE__ */ jsx(
              "img",
              {
                src: media,
                className: "inset-0 object-contain aspect-square",
                alt: product.name,
                style: {
                  scrollSnapAlign: "center",
                  scrollSnapStop: "always",
                  // when this is selected scall to 1 else 0.4
                  transform: selectedMediaIndex == index ? "scale(1)" : "scale(0.5)",
                  transition: "all 0.6s cubic-bezier(.08,.82,.17,1)",
                  borderRadius: selectedMediaIndex == index ? "0" : "100%",
                  rotate: selectedMediaIndex == index ? "0deg" : selectedMediaIndex > index ? "30deg" : "-30deg",
                  // more effacts
                  opacity: selectedMediaIndex == index ? 1 : 0
                }
              }
            ) }, index))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 w-full flex justify-center p-2 items-end pointer-events-none", children: product == null ? void 0 : product.media.map((media, index) => /* @__PURE__ */ jsx(
          "a",
          {
            className: "pointer-events-auto",
            href: `#slide-${index + 1}`,
            children: /* @__PURE__ */ jsx("button", { className: "overflow-hidden relative " + (selectedMediaIndex === index ? "border-primary border-[2px] w-14" : " w-11 border-[2px] dark:border-white border-white ") + " mx-1  shadow-xl aspect-square rounded-xl bg-white bg-opacity-100 hover:bg-opacity-100 focus:bg-opacity-100 overflow-hidden transition-all duration-500 ease-in-out", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: media,
                className: "overflow-hidden w-full h-full object-cover ",
                alt: "صورة " + (product == null ? void 0 : product.name) + " " + index
              }
            ) }, index)
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "w-4" }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 pt-5 product-gradient", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: product == null ? void 0 : product.name }),
            !!(product == null ? void 0 : product.discount) && /* @__PURE__ */ jsxs("span", { dir: "ltr", className: "mx-2 bg-primary text-white rounded-full px-2", children: [
              "-",
              getDiscount(),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-2" }),
          /* @__PURE__ */ jsx("span", { className: " text-gray-600", children: product == null ? void 0 : product.description }),
          /* @__PURE__ */ jsx("div", { className: "h-1" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center pb-3 ", children: [
            /* @__PURE__ */ jsxs("span", { className: "rounded-md px-1 text-orange-500 text-2xl", children: [
              getPriceAfterDiscount(),
              getCurrencySymbolByStore(store)
            ] }),
            getPriceAfterDiscount() !== getPriceWithoutVariantsDiscount() && /* @__PURE__ */ jsxs("span", { className: "px-1  text-gray-400 line-through text-lg", children: [
              getPriceWithoutVariantsDiscount(),
              " ",
              getCurrencySymbolByStore(store)
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
            /* @__PURE__ */ jsxs("span", { className: "px-1  text-gray-400 text-lg", children: [
              "يتوفر ",
              getQuantity()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "product-color", children: [
          (product == null ? void 0 : product.variant) && /* @__PURE__ */ jsxs("div", { className: "gb p-4 rounded-xl", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "الخيارات المتوفرة" }),
            /* @__PURE__ */ jsx("div", { className: "h-2" }),
            /* @__PURE__ */ jsx(
              RenderVariantGroup,
              {
                variantGroup: product.variant,
                path: item.variants,
                onPathChange: (path) => {
                  if (item.variants.join() == path.join()) {
                    path.pop();
                  }
                  item.variants = path;
                  cart.updateVariantPath(product.id, path.join("/"));
                  return setItem({ ...item });
                },
                onSelect: (variant) => {
                  if ((variant == null ? void 0 : variant.type) == VariantOptionType.image) {
                    var mediaIndex = product == null ? void 0 : product.media.findIndex((media) => media == variant.value);
                    var el = document.getElementById(`slide-${mediaIndex + 1}`);
                    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                  }
                  track("ViewContent", {
                    content_name: (product == null ? void 0 : product.name) + " " + (variant == null ? void 0 : variant.name),
                    // content_category: 'cloth',
                    content_ids: [product == null ? void 0 : product.id],
                    content_type: "product",
                    value: getTotal() ?? 0,
                    currency: "DZD"
                  });
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-4" }),
          /* @__PURE__ */ jsxs("div", { id: "order-form", className: "gb rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsx(
                ShippingForm,
                {
                  shippingMethod: product.shippingMethod,
                  store,
                  shipping,
                  setShipping,
                  sendOrder
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "h-2" }),
              /* @__PURE__ */ jsx("div", { ref: sendOrderButtonRef, className: "pulse rounded-lg flex flex-col md:flex-row justify-between items-center", children: /* @__PURE__ */ jsx(SendOrderButton, { id: "fixed" }) }),
              /* @__PURE__ */ jsx("div", { className: "h-2" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "الكمية" }),
                /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-200 text-gray-700 justify-center border-2 rounded-lg overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        cart.updateQuantity(product.id, item.quantity - 1);
                        setItem((prevItem) => ({
                          ...prevItem,
                          quantity: prevItem.quantity > 1 ? prevItem.quantity - 1 : 1
                        }));
                      },
                      className: "px-3 py-1 bg-gray-200 text-gray-700 rounded-s-lg",
                      children: "-"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "px-3 py-1 ", children: item.quantity }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        cart.updateQuantity(product.id, item.quantity + 1);
                        setItem((prevItem) => ({
                          ...prevItem,
                          quantity: prevItem.quantity + 1
                        }));
                      },
                      className: "px-3 py-1 ",
                      children: "+"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-2" }),
                !cart.canAddProduct(product) ? null : !cart.hasProduct(product.id) ? /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      cart.add({
                        quantity: item.quantity,
                        price: getPriceAfterDiscount(),
                        variantPath: item.variants.join("/"),
                        product
                      });
                      setItem({ ...item });
                    },
                    className: "px-3 py-1 rounded-lg border-2 border-primary text-primary",
                    children: "إضافة إلى السلة"
                  }
                ) : /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      cart.removeProduct(product.id);
                      setItem({ ...item });
                    },
                    className: "px-3 py-1 rounded-lg border-2 border-red-500 text-red-500",
                    children: "إزالة من السلة"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: "h-[1px] bg-gray-200 dark:bg-gray-700 flex-grow" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-600 mx-4", children: "ملخص الطلب" }),
              /* @__PURE__ */ jsx("div", { className: "h-[1px] bg-gray-200 dark:bg-gray-700 flex-grow" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 pt-1", children: [
              cart.canAddProduct(product) && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("table", { className: "w-full", children: cart.items.length > 0 ? cart.items.map((_item) => /* @__PURE__ */ jsxs("tr", { className: "text-gray-600", children: [
                  /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("img", { src: _item.product.media[0], className: "w-8 h-8 rounded-lg border-2 border-gray-200" }) }),
                  /* @__PURE__ */ jsx("td", { className: "text-gray-600", children: _item.product.name && _item.product.name.length > 10 ? _item.product.name.substring(0, 10) + "..." : _item.product.name }),
                  /* @__PURE__ */ jsxs("td", { className: "text-gray-600", children: [
                    "x",
                    _item.quantity
                  ] }),
                  /* @__PURE__ */ jsxs("td", { className: "text-gray-600", children: [
                    _item.price,
                    " ",
                    getCurrencySymbolByStore(store)
                  ] }),
                  /* @__PURE__ */ jsx("td", { className: "text-end", children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        cart.removeProduct(_item.product.id);
                        setItem({ ...item });
                      },
                      className: "px-2 ms-2 text-sm rounded-full bg-red-500 text-white",
                      children: "إزالة"
                    }
                  ) })
                ] }, _item.product.id)) : /* @__PURE__ */ jsx("tr", { className: "text-gray-600 text-center", children: /* @__PURE__ */ jsx("td", { colSpan: 4, className: "text-xs", children: "لا يوجد منتجات في السلة | إضغط على شراء وسترسل هذ المنتج فقط" }) }) }),
                /* @__PURE__ */ jsx("div", { className: "h-2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "التوصيل" }),
                /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
                /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: (shipping == null ? void 0 : shipping.address.state) ? /* @__PURE__ */ jsx("span", {
                  // cart.hasProduct(product.id) ?
                  // cart.getShippingRate(
                  //     shipping,
                  //     store
                  // ) :
                  // (getShippingRate() || 0)
                  children: (() => {
                    var rate = null;
                    {
                      rate = getShippingRate();
                    }
                    return rate === 0 ? /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "توصيل مجاني" }) : rate + " " + getCurrencySymbolByStore(store);
                  })()
                }) : /* @__PURE__ */ jsx("span", { children: "اختر الولاية" }) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-2" }),
              /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "المجموع" }) }),
                /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
                /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
                  cart.total > 0 ? cart.total + (getShippingRate() || 0) : getTotal(),
                  " ",
                  getCurrencySymbolByStore(store)
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Markdown, { className: "p-4 prose dark:prose-invert", children: product == null ? void 0 : product.body })
        ] })
      ] })
    ] }) })
  ] });
}
function isValidId(id) {
  return /^[\w\-]{11}$/.test(id);
}
function getYoutubeVideoIdFromUrl(url) {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /img\.youtube\.com\/vi\/([^/]+)/,
    /youtube\.com\/video\/([^?]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && isValidId(match[1])) {
      return match[1];
    }
  }
  return null;
}
function getShippingRateForState({ shippingMethod, store, state }) {
  var _a, _b;
  if (!store || !state)
    return null;
  var stateIndex = parseInt(state) - 1;
  var rate = ((_a = shippingMethod == null ? void 0 : shippingMethod.rates) == null ? void 0 : _a[stateIndex]) || ((_b = store.defaultShippingRates) == null ? void 0 : _b[stateIndex]);
  return {
    desk: (rate == null ? void 0 : rate[0]) === void 0 ? null : rate == null ? void 0 : rate[0],
    home: (rate == null ? void 0 : rate[1]) === void 0 ? null : rate == null ? void 0 : rate[1]
  };
}
function calculateLocalOrderShipping({ shippingMethod, store, localOrder }) {
  var _a;
  var rate = getShippingRateForState({
    shippingMethod,
    store,
    state: localOrder.shipping.address.state
  });
  return (rate == null ? void 0 : rate[((_a = localOrder.shipping) == null ? void 0 : _a.doorShipping) ? "home" : "desk"]) ?? null;
}
function calculateLocalOrderTotal({ shippingMethod, store, localOrder, withShipping = true }) {
  var shippingPrice = 0;
  if (withShipping) {
    shippingPrice = calculateLocalOrderShipping({
      shippingMethod,
      store,
      localOrder
    });
    if (shippingPrice == null)
      return null;
  }
  return localOrder.items.reduce((total, item) => {
    return total + getProductPriceAfterDiscount(item.product, item.variants) * item.quantity;
  }, 0) + shippingPrice;
}
function getProductPriceWithoutVariantsDiscount(product, path) {
  var price = product.price;
  var variant = product == null ? void 0 : product.variant;
  for (let i = 0; i < path.length; i++) {
    var option = variant == null ? void 0 : variant.options.find((e) => e.name == path[i]);
    price = option.price || price;
    variant = option.child;
  }
  return price;
}
function getProductPriceAfterDiscount(product, path) {
  var price = product.price - (product.discount || 0);
  var variant = product == null ? void 0 : product.variant;
  for (let i = 0; i < path.length; i++) {
    var option = variant == null ? void 0 : variant.options.find((e) => e.name == path[i]);
    price = (option.price || price) - (option.discount || 0);
    variant = option.child;
  }
  return price;
}
function getProductDiscountPercentage(product, path) {
  var price = getProductPriceWithoutVariantsDiscount(product, path);
  if (price == 0)
    return 0;
  return getProductPriceAfterDiscount(product, path) / price;
}
function getProductQuantity(product, path) {
  var quantity = product.stock;
  var variant = product == null ? void 0 : product.variant;
  for (let i = 0; i < path.length; i++) {
    var option = variant == null ? void 0 : variant.options.find((e) => e.name == path[i]);
    quantity = option.stock || quantity;
    variant = option.child;
  }
  return quantity;
}
const cart = {
  inited: false,
  // init
  init() {
    if (this.inited)
      return;
    this.load();
    this.inited = true;
  },
  // load
  load() {
    if (typeof localStorage === "undefined")
      return;
    try {
      let cartl = localStorage.getItem("cart");
      if (cartl) {
        this.items = JSON.parse(cartl);
        this.items = this.items.filter((item) => {
          return item.product && item.product.id;
        });
      }
    } catch (e) {
      console.error("cart load error", e);
      this.clear();
    }
  },
  // save
  save() {
    if (typeof localStorage === "undefined")
      return;
    localStorage.setItem("cart", JSON.stringify(this.items));
  },
  items: [],
  getOrderItems() {
    return this.items.map((item) => {
      return {
        productId: item.product.id,
        productName: item.product.name,
        variantPath: item.variantPath,
        quantity: item.quantity,
        price: item.price
      };
    });
  },
  add(item) {
    this.items.push(item);
    this.save();
  },
  updateQuantity(productId, quantity) {
    let item = this.items.find((item2) => item2.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
    this.save();
  },
  updatePrice(productId, price) {
    let item = this.items.find((item2) => item2.product.id === productId);
    if (item) {
      item.price = price;
    }
    this.save();
  },
  updateVariantPath(productId, variantPath) {
    let item = this.items.find((item2) => item2.product.id === productId);
    if (item) {
      item.variantPath = variantPath;
    }
    this.save();
  },
  removeProduct(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.save();
  },
  get total() {
    var ttl = 0;
    this.items.forEach((item) => {
      ttl += item.price * item.quantity;
    });
    return ttl;
  },
  hasProduct(productId) {
    return this.items.some((item) => item.product.id === productId);
  },
  clear() {
    this.items = [];
    this.save();
  },
  canAddProduct(product) {
    if (this.items.length === 0)
      return true;
    if (this.items[0].product.storeId != product.storeId)
      return false;
    if (this.items[0].product.shippingMethodId != product.shippingMethodId)
      return false;
    return true;
  },
  getShippingRate(shipping, store) {
    var groups = {};
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
        store
      });
      if (shipping.doorShipping) {
        rate += (groupRate == null ? void 0 : groupRate.home) || 0;
      } else {
        rate += (groupRate == null ? void 0 : groupRate.desk) || 0;
      }
    }
    return rate;
  }
};
function Layout() {
  let store = useLoaderData();
  useEffect(() => {
    cart.init();
  }, []);
  return (
    // <CacheProvider value={cacheRtl}>
    ///* <ThemeProvider theme={theme}> */}
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          "--p": dartColorToCss(store.decoration.primary),
          "--on-p": dartColorToCss(store.decoration.onPrimary)
        },
        children: [
          /* @__PURE__ */ jsx(Navbar, { store, fixed: false }),
          /* @__PURE__ */ jsx(Outlet, {}),
          /* @__PURE__ */ jsx(Footer, { store })
        ]
      }
    )
  );
}
const CategoryButton = ({
  onClick,
  category,
  selected = false
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      className: (selected ? "gb border-transparent" : "") + " border flex items-center justify-start  bg-transparent hover:bg-white hover:bg-opacity-10     focus:bg-opacity-10 font-medium rounded-lg text-sm px-4 py-2 text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0", children: category.photoUrl && /* @__PURE__ */ jsx("img", { src: category.photoUrl || void 0, className: "w-8 h-8 dark:invert" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-2" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center overflow-hidden", children: [
          /* @__PURE__ */ jsx("span", { children: category.name }),
          /* @__PURE__ */ jsx("span", { className: "font-light text-gray-600 dark:text-gray-400 text-xs md:text-sm lg:text-base whitespace-nowrap text-ellipsis", children: category.description })
        ] })
      ]
    }
  );
};
var _stores = {};
var _products = {};
var _storeProducts = {};
async function getStore(host) {
  if (_stores[host])
    return _stores[host];
  const isFeeefShop = host.includes(".feeef.shop") || host.includes(".khfif.shop") || host.includes(".lvh.me");
  var store = await ff.stores.find({
    id: isFeeefShop ? host.split(".")[0] : host,
    by: isFeeefShop ? "slug" : "domain.name"
  });
  _stores[host] = store;
  return store;
}
async function getProduct(slug) {
  if (_products[slug])
    return _products[slug];
  var product = await ff.products.find({
    id: slug,
    by: "slug"
  });
  _products[slug] = product;
  return product;
}
async function getProducts(storeId) {
  if (_storeProducts[storeId])
    return _storeProducts[storeId];
  var products = await ff.products.list({
    params: {
      store_id: storeId
    }
  });
  _storeProducts[storeId] = products.data;
  for (let product of products.data) {
    _products[product.slug] = product;
  }
  return products.data;
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    loader: layoutLoader,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: /* @__PURE__ */ jsx(Home, {})
      },
      {
        path: "p/:slug",
        loader: productLoader,
        element: /* @__PURE__ */ jsx(ProductPage, {})
      },
      {
        path: "dashboard",
        loader: dashboardLoader,
        element: /* @__PURE__ */ jsx(Dashboard, {})
      },
      {
        path: "lazy",
        lazy: () => import("./assets/lazy-fb436f12.mjs")
      },
      {
        path: "redirect",
        loader: redirectLoader
      },
      {
        path: "*",
        element: /* @__PURE__ */ jsx(NoMatch, {})
      }
    ]
  }
];
const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);
async function layoutLoader() {
  let store = await getStore(getCurrentHost());
  return store;
}
async function productLoader({ params }) {
  let store = await getStore(getCurrentHost());
  let slug = params.slug;
  let product = await getProduct(slug);
  if (product.storeId != store.id) {
    throw new Error("Product not found");
  }
  return { store, product };
}
async function homeLoader() {
  let store = await getStore(getCurrentHost());
  let products = await getProducts(store.id);
  return {
    store,
    products
  };
}
function Home() {
  var _a;
  let { store, products } = useLoaderData();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  function filteredProducts() {
    return products.filter((product) => {
      var _a2;
      return !selectedCategory ? true : ((_a2 = product.category) == null ? void 0 : _a2.name) == (selectedCategory == null ? void 0 : selectedCategory.name);
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SuperSEO,
      {
        title: store.name + " - " + store.title || "",
        description: store.description || void 0,
        lang: "ar",
        openGraph: {
          ogTitle: store.name + " - " + store.title || "",
          ogDescription: store.description || void 0,
          ogUrl: getCurrentHost() + location.pathname,
          ogImage: {
            ogImage: store.logoUrl || void 0,
            ogImageAlt: store.name || store.title || ""
          },
          ogSiteName: store.name || store.title || void 0,
          ogType: "website",
          ogLocale: "ar_AR",
          ogDeterminer: "auto",
          ogLocaleAlternate: ["en_US"]
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "text-center relative max-w-screen-xl mx-auto px-4  sm:px-6 py-10 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        AsynxWave,
        {
          className: "pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-xl"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "z-10 relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("h4", { className: " absolute\n          font-extrabold text-base dark:text-gray-50 tracking-wide uppercase", children: store == null ? void 0 : store.name }),
          /* @__PURE__ */ jsx(AsynxWave, {})
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "title-font font-light mt-1 text-4xl text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-4xl", children: store == null ? void 0 : store.title }),
        /* @__PURE__ */ jsx("p", { className: "max-w-xl mt-5 mx-auto  text-gray-500 dark:text-gray-400\n            font-extralight\n            text-s\n            md:text-m\n            lg:text-l\n          ", children: store == null ? void 0 : store.description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-4" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: (_a = store == null ? void 0 : store.categories) == null ? void 0 : _a.map((category, index) => /* @__PURE__ */ jsx(CategoryButton, { onClick: () => {
      return selectedCategory == category ? setSelectedCategory(null) : setSelectedCategory(category);
    }, selected: (selectedCategory == null ? void 0 : selectedCategory.name) == category.name, category }, index)) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-4" }),
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4", children: [
      filteredProducts().map((product, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ProductCard, { product, store }) }, index)),
      !filteredProducts().length && /* @__PURE__ */ jsx("div", { className: "col-span-full", children: /* @__PURE__ */ jsxs("div", { className: "py-4 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(IconFlag, {}),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-500 dark:text-gray-400", children: "لا يوجد منتجات" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 dark:text-gray-500", children: "لا يوجد منتجات في هذه الفئة" }),
        /* @__PURE__ */ jsx("div", { className: "h-3" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSelectedCategory(null), className: "gb btn", children: "إزالة التصفية" })
      ] }) })
    ] }) })
  ] });
}
async function dashboardLoader() {
  await sleep();
  return { data: `Dashboard loader - random value ${rand()}` };
}
function Dashboard() {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Dashboard" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Loader Data: ",
      data.data
    ] })
  ] });
}
async function redirectLoader() {
  await sleep();
  return redirect("/");
}
function NoMatch() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Nothing to see here!" }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Go to the home page" }) })
  ] });
}
async function render(request, response) {
  setCurrentHost(request.get("host"));
  let { query, dataRoutes } = createStaticHandler(routes);
  let remixRequest = createFetchRequest(request, response);
  let context = await query(remixRequest);
  if (context instanceof Response) {
    throw context;
  }
  let router = createStaticRouter(dataRoutes, context);
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(
      StaticRouterProvider,
      {
        router,
        context,
        nonce: "the-nonce"
      }
    ) })
  );
}
function createFetchRequest(req, res) {
  let origin = `${req.protocol}://${req.get("host")}`;
  let url = new URL(req.originalUrl || req.url, origin);
  let controller = new AbortController();
  res.on("close", () => controller.abort());
  let headers = new Headers();
  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }
  let init = {
    method: req.method,
    headers,
    signal: controller.signal
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }
  return new Request(url.href, init);
}
export {
  Fragment as F,
  jsxs as a,
  createFetchRequest,
  jsx as j,
  render
};
