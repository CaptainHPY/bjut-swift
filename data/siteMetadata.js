const siteMetadata = {
  title: "bjut-swift", // required
  author: "bjut-swift", // required
  description: "Please enter a description of your website here.", // required
  language: "en-us", // required
  theme: {
    // You can use Daisy UI theme. See https://daisyui.com/docs/themes/
    light: {
      default: false, // required (If both default values are set to true, the light mode takes precedence.)
      name: "mytheme1", // required
    },
    dark: {
      default: true, // required
      name: "mytheme2", // required
    },
  },
  locale: "en-US", // required
  siteUrl: "https://campanula-demo.vercel.app/", // required
  ogImage: "/images/stock/ogp.png", // required
  keywords: ["Next.js", "Tailwind CSS", "Daisy UI"], // optional
  creator: "Dan Shari", // optional
  canonicalUrl: "https://campanula-demo.vercel.app/", // optional
  copyrightYear: "2023", // optional (Used in the rss feed)
  twitterCard: {
    // See https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
    siteId: "", // optional
    creator: "", // optional
    creatorId: "", // optional
  },
  robots: {
    index: true, // required
    follow: true, // required
  },
  // Common
  readMoreButtonTitle: "Read More...", // required (Edit the text for the 'Read More' button. If blank, display default)
  avatarImage: "/images/stock/title.png", // required
  authorDescription:
    "Sharing Wisdom, Innovation, & Futuristic Technologies (S.W.I.F.T.)", // optional (If blank, display nothing)
  email: "address@yoursite.com", // optional
  github: "https://github.com/bjut-swift", // optional
  twitter: "https://twitter.com/Twitter", // optional
  facebook: "https://facebook.com", // optional
  youtube: "https://youtube.com", // optional
  linkedin: "https://www.linkedin.com", // optional

  // Header (Please modify data/headerNavLinks.ts)
  header: {
    // icon: '', // optional
    icon: "/images/stock/title.png", // optional (If blank, display nothing)
  },
  // Home
  home: {
    hero: {
      enable: true, // required (If false, display nothing)
      type: "2", // required (1 or 2)
      title: "BJUT-SWIFT", // optional (If blank, title above is used)
      description:
        "Sharing Wisdom, Innovation, & Futuristic Technologies (S.W.I.F.T.)", // optional (If blank, description is used)
      button: {
        enable: true, // required (If false, display nothing)
        text: "See Our Projects", // If enabled required
        href: "/blog/my-project", // If enabled required
      },
      // image: '/images/stock/hero_square.png', // optional
      image: "/images/stock/hero_rectangle.png", // optional
    },
    list: {
      enable: true, // required (If false, display nothing)
      href: "/tags/news", // required (If enabled, the path to the specific blog categories or tag must be written. ex:'/categories/tech' '/tags/food' )
      title: "News", // optional (If blank, display nothing)
      maxCount: 3, // required
    },
    boards: [
      // This section displays the contents of the markdown(mdx) file. If blank, display nothing.
      {
        fileName: "introduction.mdx", // required (Please create an mdx file in the data/board directory. Please write the file name in this item.)
      },
    ],
    latestPosts: {
      title: "Latest Posts", // optional (If blank, display nothing)
      maxCount: 9, // required
    },
  },
  // Blog
  blog: {
    postPerPage: 10, // required
    sidebar: {
      categories: {
        maxCount: 30, // required
      },
      tags: {
        maxCount: 70, // required
      },
      latestPosts: {
        maxCount: 10, // required
      },
      archive: {
        maxCount: 36, // required
      },
    },
  },
  // About
  about: {
    fileName: "about.mdx", // required (Please create an mdx file in the data/about directory. Please write the file name in this item.)
  },
  // Footer
  footer: {
    description: "© 2024 bjut-swift right reserved.", // required
  },
};

module.exports = siteMetadata;
