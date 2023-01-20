<template>
  <main class="columns is-gapless is-mutiline">
    <div class="column is-one-quarter">

      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioCont />

      <div class="lista">
        <ListaTarefas />
        <ListaTarefas />
        <ListaTarefas />
        <ListaTarefas />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from './components/BarraLateral.vue'
import FormularioCont from './components/FormularioCont.vue'
import ListaTarefas from './components/ListaTarefas.vue'


export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioCont,
    ListaTarefas,

  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>