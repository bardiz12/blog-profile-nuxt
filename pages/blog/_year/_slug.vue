<template>
  <div
    class="prose dark:prose-dark prosemx-auto prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
  >
    <article class="mx-5 md:mx-0">
      <h1>{{ article.title }}</h1>
      <div class="pb-3">
        {{ article.formatedDate }} | <ReadingTime :body="article.body" /> | <DisqusCount :identifier="article.slug"/>
      </div>
      <div
        class="w-full space-x-2"
        v-if="article.tags !== undefined && article.tags !== null"
      >
        <span>Tags :</span>
        <span
          class="bg-blue-600 px-2 py-1 text-white"
          v-for="tag in article.tags"
          :key="`tag-${tag}`"
        >
          #{{ tag }}
        </span>
      </div>
      <SocialShare class="pt-5" :titile="article.title" />
      <img :src="article.thumbnail" v-if="article.thumbnail !== null" />

      <nuxt-content :document="article" />
    </article>

    <div class="mt-10">
      <div class="text-2xl font-semibold">
        <i class="fa fa-comments"></i> Comments
      </div>
      <Disqus :pageConfig="{
        identifier : article.slug
      }"/>
    </div>
  </div>
</template>

<script>
import SocialShare from "@/components/SocialShare";
import ReadingTime from "@/components/ReadingTime";
import moment from "moment";

export default {
  components: {
    SocialShare,
    ReadingTime,
  },
  head() {
    return {
      title: `${this.article.title} | Bardizba Z - Fullstack Web Developer`,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.article.keywords,
        },
        {
          hid: "description",
          name: "description",
          content: this.article.keywords,
        },
        {
          hid: "author",
          name: "author",
          content: this.article.author,
        },
      ],
    };
  },
  async asyncData({ $content, params, error }) {
    try {
      const [article] = await $content("blog", { deep: true })
        .where({ slug: `${params.slug}`, year: parseInt(params.year) })
        .fetch();

      if (article === null) {
        return error({
          statusCode: 404,
          message: "Page could not be found",
        });
      }

      article.thumbnail = null;
      if (article.image !== undefined && article.image !== null) {
        article.thumbnail = `${article.dir}/${article.image}`;
      }
      article.moment = moment(article.date);
      article.formatedDate = article.moment.format("dddd, D MMMM Y");
      return {
        article,
      };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
};
</script>