module.exports = {
  siteMetadata: {
    title: `Emiliano's Blog`,
    name: `Emiliano García-López`,
    siteUrl: `https://emilianogarcia.tech`,
    description: `This is Emiliano Garcia's personal blog covering topics ranging from politics, entrepreneurship, and philosophy`,
    hero: {
      heading: `Entrepreneurship. Programming. Casual Conversations`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/EmilianoGarciaLopez`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
