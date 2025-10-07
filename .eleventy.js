module.exports = function(eleventyConfig) {
  // ─── Passthrough Copies ─────────────────────
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "assets/images/topbar": "assets/images/topbar" });
  eleventyConfig.addPassthroughCopy("assets");

  // ─── Custom Collections ─────────────────────
  eleventyConfig.addCollection("glossary", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/word/glossary/*.md").sort((a, b) =>
      a.data.title.localeCompare(b.data.title)
    )
  );

  // ─── Directory Structure ────────────────────
  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "docs"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    templateFormats: ["md", "11ty.md", "liquid", "html"]
  };
};
