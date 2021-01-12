<template>
  <button
    class="mt-5 justify-center rounded-md border border-gray-300 px-5 py-3 bg-indigo-500 font-medium text-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-indigo-700 transition-all duration-200 shadow-xl"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>