// src/gtag.ts
export const loadGtag = (trackingId: string) => {
  if (typeof window === 'undefined') return; // Ensure this runs only in the browser

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingId);
  };
};

export const loadUmami = (websiteId: string) => {
  if (typeof window === 'undefined') return; // Ensure this runs only in the browser

  const script = document.createElement('script');
  script.defer = true;
  script.src = "https://umami.feeef.net/script.js";
  script.setAttribute('data-website-id', websiteId);
  document.head.appendChild(script);
};
