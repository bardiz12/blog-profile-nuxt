<template>
    <div>
        {{articles}}
    </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('blog', params.slug)
        .only(['title', 'description', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>