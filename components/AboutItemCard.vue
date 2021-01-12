<template>
  <div class="w-full pl-8 pr-2 py-2">
    <div class="order-1 rounded-lg shadow-xl px-6 py-4" :class="{
            'bg-blue-400 dark:bg-blue-800' : color === 'blue',
            'bg-red-400 dark:bg-red-800' : color === 'red',
            'bg-indigo-400' : color === 'indigo',
            'bg-purple-400 dark:bg-purple:800' : color === 'purple'
        }">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="mb-3 font-bold text-white text-xl">{{title}}</h3>
          <p
            class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"
          >
            <span class="block">{{subText}}</span>
            <span class="font-bold text-lg">{{text}}</span>
          </p>
        </div>
        <div v-if="logo !== null">
          <img
            class="w-16 left-0"
            :src="logo"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        color : {
            type: String,
            default : "blue"
        },
        title : {
            type: String,
            required : true
        },
        subText : {
            type: String, 
            default : "",
            required: false
        },
        text : {
            type: String,
            required: true
        },
        logo : {
            type: String,
            requried: false,
            default: null
        }
    }
}
</script>
