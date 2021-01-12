<template>
  <span>est. {{readingTime}} min read</span>
</template>

<script>
export default {
  props: ['body'],
  computed: {
    readingTime () {
      let minutes = 0;
      const contentString = JSON.stringify(this.body);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 150;
      return Math.ceil(words / wordsPerMinute);;
    }
  }
}
</script>