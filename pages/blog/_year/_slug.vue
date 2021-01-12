<template>
  <div
    class="prose dark:prose-dark prosemx-auto prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
  >
    <article class="mx-5 md:mx-0">
      <h1>{{ article.title }}</h1>
      <div class="pb-3">
        {{ article.formatedDate }} | <ReadingTime :body="article.body" />
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
      <SocialShare class="pt-5" />
      <img :src="article.thumbnail" v-if="article.thumbnail !== null" />

      <nuxt-content :document="article" />
    </article>

    <div class="mt-10">
      <div class="text-2xl font-semibold">
        <i class="fa fa-comments"></i> Comments
      </div>
      <div id="disqus_thread"></div>
      <script>
        /**
         *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
        (function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement("script");
          s.src = "https://bardizpen.disqus.com/embed.js";
          s.setAttribute("data-timestamp", +new Date());
          (d.head || d.body).appendChild(s);
        })();
      </script>
      <noscript
        >Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript"
          >comments powered by Disqus.</a
        ></noscript
      >
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