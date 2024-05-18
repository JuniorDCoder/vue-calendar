<template>
  <Calendar />
</template>

<script>
import { defineComponent } from "vue";

// Components
import Calendar from "../components/Calendar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    Calendar,
  },
});
</script>
