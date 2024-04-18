const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | Xổ số WangLong",
  defaultTitle: "Xổ số WangLong",
  description: "WangLong - Hệ thống chơi xổ số trực tuyến",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "wanglong, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "Xổ số WangLong",
    description: "Xổ số WangLong",
    images: [
      {
        url: "https://i.ibb.co/0cQnxF3/bannerimg.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@WangLong",
    site: "@WangLong",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
