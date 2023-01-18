<template>
  <main class="columns is-gapless is-mutiline">
    <div class="column is-one-quarter">
      
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioCont />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioCont from "./components/FormularioCont.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioCont,
  },
});
</script>
