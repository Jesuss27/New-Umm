const settings = {
  "name": "new-umm",
  "packages": [
    {
      "name": "personal-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost:150/wordpress-network/wordpress",
          postsPage: "/blog",
          homepage:"/",
          params:{
            per_page: 3,
            type: ["post", "page"]
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ]
};

export default settings;
