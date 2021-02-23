<template>
  <div class="flex w-full">
    Share
    <div class="md:pl-5 flex w-full justify-between text-center">
      <div class="text-center w-full">
        <a
          :href="`https://web.whatsapp.com/send?text=${data.title}+:+${data.url}`"
          class="whatsapp"
          target="_blank"
        >
          <i class="fab fa-whatsapp fa-2x  text-green-500"></i>
        </a>
      </div>

      <div class="text-center w-full">
        <a
          :href="`https://telegram.me/share/url?url=${data.url}&text=${data.title}`"
          class="telegram "
          target="_blank"
        >
          <i class="fab fa-telegram fa-2x text-blue-500"></i>
        </a>
      </div>
      <div class="text-center w-full">
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=${data.url}&utm_medium=sharer&utm_campaign=social`"
          class="facebook"
          target="_blank"
        >
          <i class="fab fa-facebook fa-2x  text-blue-800"></i>
        </a>
      </div>
      <div class="text-center w-full">
        <a
          :href="`https://twitter.com/intent/tweet?url=${data.url}&text=${data.title}`"
          class="twitter"
          target="_blank"
        >
          <i class="fab fa-twitter fa-2x text-blue-400"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      data: {
        url: null,
        title: encodeURI(this.title),
      },
    };
  },
  mounted() {
    if(process.client){
      this.data.url = window.location.href;
    }
  },
};
</script>