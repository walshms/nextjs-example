module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  //localePath: require("path").resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
