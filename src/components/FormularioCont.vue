<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" />
      </div>
      <div class="column">
        <TemporizadorCont />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorCont from './TemporizadorCont.vue'

export default defineComponent({
  name: "FormularioCont",
  components: {
    TemporizadorCont
  }

});
</script>
