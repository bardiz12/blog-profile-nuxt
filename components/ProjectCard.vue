<template>
  <div class=" rounded-lg overflow-hidden shadow-lg">
    <img class="w-full" :src="project.images[0]" :alt="project.title" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2"></div>
      <p class="text-gray-700 dark:text-blue-200 text-base">
        {{ project.title }}
      </p>
    </div>
    <div class="px-6 py-4">
        <p>
            {{project.details}}
        </p>
      <PillBadge
        :class="{
          'bg-blue-400': project.color === 'blue',
          'bg-green-400': project.color === 'green',
          'bg-purple-400': project.color === 'purple',
        }"
        class="my-1"
      >
        <i :class="project.icon"></i>
        <span>{{ project.category }}</span>
      </PillBadge>
      <a
        :href="project.links.github"
        v-if="project.links.github !== null"
        target="_blank"
      >
        <PillBadge class="my-1">
          <i class="fab fa-github"></i>
          <span>Github</span>
        </PillBadge>
      </a>
      <a
        :href="project.links.url"
        v-if="project.links.url !== null"
        target="_blank"
      >
        <PillBadge class="my-1">
          <i class="fa fa-link"></i>
          <span>Link To The Project</span>
        </PillBadge>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  props: {
    project: {
      required: true,
    },
  },
};
</script>