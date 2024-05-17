<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    id: Number,
    title: String,
    author: String,
    createAt: Date,
    finished: Boolean,
  },
  emits: ["deleted", "finished"],
  methods: {
    deleteTask(id: number) {
      this.$emit('deleted', id);
    },
    finishedTask(id: number) {
      this.$emit('finished', id);
    }
  }
});
</script>

<template>
  <div class="flex">
    <li @click="finishedTask(id)">{{ title }} - {{ author }} - {{ createAt }}</li>
    <div>
      <button @click="deleteTask(id)">X</button>
    </div>
  </div>

</template>
<style scoped>

.flex {
  display: flex;
  gap: .5em;
}

</style>