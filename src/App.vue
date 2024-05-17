<script lang="ts">
import {defineComponent} from "vue";
import Todolist from "./components/todos/Todolist.vue";
import type Task from "./types/task";

const tasks: Task[] = [
  {
    id: 1,
    author: "Alice",
    title: "Faire les courses",
    createAt: new Date("2024-03-02"),
    finished: false,
  },
  {
    id: 2,
    author: "Bob",
    title: "Réviser pour l'examen",
    createAt: new Date("2024-03-01"),
    finished: true,
  },
  {
    id: 11,
    author: "Charlie",
    title: "Préparer le rapport",
    createAt: new Date("2024-02-28"),
    finished: false,
  },
  {
    id: 200,
    author: "David",
    title: "Aller chez le dentiste",
    createAt: new Date("2024-02-27"),
    finished: false,
  },
  {
    id: 500,
    author: "Eva",
    title: "Faire du sport",
    createAt: new Date("2024-02-26"),
    finished: true,
  },
  {
    id: 200,
    author: "Frank",
    title: "Faire du bénévolat",
    createAt: new Date("2024-02-25"),
    finished: false,
  },
  {
    id: 30,
    author: "Grace",
    title: "Réparer la voiture",
    createAt: new Date("2024-02-24"),
    finished: false,
  },
  {
    id: 29,
    author: "Hector",
    title: "Préparer le dîner",
    createAt: new Date("2024-02-23"),
    finished: true,
  },
  {
    id: 19,
    author: "Isabel",
    title: "Faire du jardinage",
    createAt: new Date("2024-02-22"),
    finished: false,
  },
  {
    id: 28,
    author: "Jack",
    title: "Nettoyer la maison",
    createAt: new Date("2024-02-21"),
    finished: false,
  },
];
export default defineComponent({
  components: {
    Todolist,
  },
  data() {
    return {
      tasks: tasks,
    };
  },
});
</script>

<template>
  <div>
    <Todolist :item="tasks" name="toto"/>
  </div>
</template>
