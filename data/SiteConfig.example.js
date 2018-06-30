module.exports = {
  blogPostDir: "blog", // The name of directory that contains your posts.
  siteTitle: "Site Title", // Site title.
  siteTitleAlt: "Site Title", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://example.io", // Domain of your website without pathPrefix.
  pathPrefix: "example", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'This is an example', // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleTagManagerID: "GTM-12345", // GTM Container ID
  googleTagManagerPreviewQA: "&gtm_auth=&gtm_preview=&gtm_cookies_win=",
  googleTagManagerPreviewDevelopment: "&gtm_auth=&gtm_preview=&gtm_cookies_win=",
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "", // Default category for posts.
  userName: "", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Advanced User", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
