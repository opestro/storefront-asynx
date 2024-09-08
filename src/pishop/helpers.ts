import { StoreEntity } from "feeef";
import { useCallback, useEffect, useState } from "react";

// Define regex patterns for valid phone numbers
// const mobilePattern = /^0(5|6|7)\d{8}$/; // Mobile numbers starting with 05, 06, or 07
// const landlinePattern = /^0(2)\d{7}$/; // Landline numbers starting with 02

export function tryFixPhoneNumber(phone: string): string {
    phone = phone.trim()
    // 1. remove all non numbers
    phone = phone.replace(/\D/g, '');
    // 2. if not start by 0, add it
    if (!phone.startsWith("0")) {
        phone = "0" + phone;
    }
    return phone
}


export function validatePhoneNumber(phone: string): string | null {
    if (phone=="0") {
        return "اكمل رقم الهاتف";
    }
    // Check if the phone number is empty
    if (!phone) {
        return "رقم الهاتف لا يمكن أن يكون فارغاً.";
    }
    // Check if the phone number contains only digits
    if (!/^[0-9]+$/.test(phone)) {
        return "رقم الهاتف يجب أن يحتوي فقط على أرقام.";
    }
    // should start with 0
    if (!phone.startsWith("0")) {
        return "رقم الهاتف يجب أن يبدأ بـ 0.";
    }
    // should not start with 05, 06, 07, 02
    if (!phone.startsWith("05") && !phone.startsWith("06") && !phone.startsWith("07") && !phone.startsWith("02")) {
        return "يجب أن يبدأ بـ 05, 06, 07, 02";
    }
    // case 1: strat by 05, 06, 07
    if (phone.startsWith("05") || phone.startsWith("06") || phone.startsWith("07")) {
        if (phone.length !== 10) {
            var overflown = phone.length - 10
            if (overflown > 0) {
                return "عدد الأرقام زائد عن 10 رقماً بـ " + overflown;
            } else {
                if (overflown === -1) {
                    return "ينقصك رقم واحد";
                } else if (overflown === -2) {
                    return "ينقصك رقمان إثنان";
                }
                return "ينقصك " + (-overflown) + " أرقام";
            }
        }
    } else if (phone.startsWith("02")) {
        if (phone.length !== 9) {
            var overflown = phone.length - 9
            if (overflown > 0) {
                return "عدد الأرقام زائد عن 9 رقماً بـ " + overflown;
            } else {
                if (overflown === -1) {
                    return "ينقصك رقم واحد";
                } else if (overflown === -2) {
                    return "ينقصك رقمان";
                }
                return "ينقصك " + (-overflown) + " أرقام";
            }
        }
    }
    return null;
}

export function useInViewport(): { isInViewport: boolean; ref: React.RefCallback<HTMLElement> } {
    const [isInViewport, setIsInViewport] = useState(false);
    const [refElement, setRefElement] = useState<HTMLElement | null>(null);

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            setRefElement(node);
        }
    }, []);

    useEffect(() => {
        if (refElement && !isInViewport) {
            const observer = new IntersectionObserver(
                ([entry]) =>  setIsInViewport(entry.isIntersecting)
            );
            observer.observe(refElement);

            return () => {
                // alert("unobserve")
                // observer.disconnect();
            };
        }
    }, [isInViewport, refElement]);

    return { isInViewport, ref: setRef };
}




var _reactFacebookPixel: any = null;
// meta pixel helpers for ssr
export function track(title: string, data?: any): void {
    // console.log("track",title)
    if (!import.meta.env.SSR) {
        // console.log("trackSSR",title)
        if (_reactFacebookPixel == null) {
            import("react-facebook-pixel")
                .then((ReactPixel) => {
                    _reactFacebookPixel = ReactPixel.default;
                    _reactFacebookPixel.track(title, data);
                });
        } else {
            _reactFacebookPixel.track(title, data);
        }
    }
}

// pageView()
export function pageView(): void {
    // console.log("pageView")
    if (!import.meta.env.SSR) {
        if (_reactFacebookPixel == null) {
            import("react-facebook-pixel")
                .then((ReactPixel) => {
                    _reactFacebookPixel = ReactPixel.default;
                    _reactFacebookPixel.pageView();
                });
        } else {
            _reactFacebookPixel.pageView();
        }
    }
}

// initMetaPixel
export function initMetaPixel(store: StoreEntity): void {
    // console.log("init")
    if (!import.meta.env.SSR) {
        if (_reactFacebookPixel == null) {
            import("react-facebook-pixel")
                .then((ReactPixel) => {
                    _reactFacebookPixel = ReactPixel.default;
                    const pixels = store.metaPixelIds
                    if (pixels) {
                        for (let i = 0; i < pixels.length; i++) {
                            _reactFacebookPixel.init(pixels[i], undefined, {
                                autoConfig: false,
                                debug: true,
                            });
                        }
                    }
                });
            } else {
                const pixels = store.metaPixelIds
                if (pixels) {
                    for (let i = 0; i < pixels.length; i++) {
                        _reactFacebookPixel.init(pixels[i], undefined, {
                            autoConfig: false,
                            debug: true,
                        });
                    }
                }
            }
        }
}


// dart color is 0xffXXXXXX
// js color is #XXXXXXFF
// so we need to convert the color to the js format
// and set the css variable --p to the primary color
// of the store
// for example ff009688 to #009688ff in css
export const dartColorToCss = (color: number): string => {
    var colorAsString = color.toString(16)
    if (color > 0xffffff) {
      var alpha = colorAsString.slice(0, 2)
      colorAsString = colorAsString.slice(2) + alpha
    }
    var colorAsHex = "#" + colorAsString
    return colorAsHex
  }
  