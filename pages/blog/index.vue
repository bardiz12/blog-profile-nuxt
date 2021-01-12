<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="flex flex-wrap mx-5">
      <div class="w-full md:w-1/3 mt-4 md:mt-0">
        <div class="flex justify-center flex-row flex-wrap">
          <WriterIllustration class="md:w-72 h-64" />
          <div class="w-full mx-5">
            <h1 class="font-bold text-center">
              <span class="text-3xl">Blog</span>
            </h1>
            <p class="text-center italic text-sm">
              Some articles that i wrote.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/3">
        <div class="md:pl-10">
          <div
            v-for="year in Object.keys(articlesByYear).sort( (a,b) => b - a)"
            :key="year"
            class="flex"
          >
            <div class="px-5">
              <span class="font-bold text-lg">{{ year }}</span>
            </div>
            <div>
              <article
                v-for="article in articlesByYear[year]"
                :key="article.slug"
                class="pb-3"
              >
                <NuxtLink :to="`/blog/${year}/${article.slug}`" class="">
                  <h1 class="">
                    <div class="inline hover:bg-blue-600 hover:text-white">{{ article.title }}</div>
                    <div class="px-2 bg-blue-500 text-white text-sm inline-block">{{
                      article.dayMonth
                    }}</div>
                  </h1>

                  <div class="md:w-4/5"></div>
                </NuxtLink>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WriterIllustration from "~/assets/illustration/writer.svg?inline";
import moment from "moment";

export default {
  components: {
    WriterIllustration,
  },
  head() {
    return {
      title: "Blog | Bardizba Z - Fullstack Web Developer",
    };
  },
  async asyncData({ $content, params }) {
    const articles = await $content("blog", { deep: true })
      .only(["title", "slug", "author", "date"])
      .sortBy("date", "desc")
      .fetch();
    const articlesByYear = {};
    articles.forEach((article) => {
      const date = moment(article.date);
      const year = date.format("Y");
      if (!(`${year}` in articlesByYear)) {
        articlesByYear[year] = [];
      }
      article.dayMonth = date.format("D MMM");
      articlesByYear[year].push(article);
    });
    return {
      articlesByYear,
    };
  },

};
</script>