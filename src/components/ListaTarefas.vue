<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descrição da tarefa</div>
      <div class="colunm">
        <CronometroCont tempoEmSegundos="15" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroCont from "./CronometroCont.vue";

export default defineComponent({
  name: "ListaTarefas",
  components: {
    CronometroCont,
  },
});
</script>

<style scoped>
.box {
  background: #f0f0f0;
}
</style>
