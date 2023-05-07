<script setup>
import { ref } from 'vue';

let show = ref(true);
const props = defineProps(['text']);

function hideButton() {
  show.value = false;
}
</script>

<template>
  <button class="bg-orange-500 rounded-xl px-3 py-2 mt-4 hover:bg-zinc-300 hover:text-orange-600" @click="hideButton" v-if="show">
    ¡Clícame para revelar!
  </button>
  <p class="px-3 py-2 mt-4" v-else>
    {{props.text}}
  </p>
</template>