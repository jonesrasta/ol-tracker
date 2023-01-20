<template>
  <BoxList>
    <div class="columns">
      <div class="column is-7">{{listaTarefa.descricao || 'Tarefa sem descrição'}}</div>
      <div class="colunm">
        <CronometroCont :tempoEmSegundos="listaTarefa.duracaoEmSegundos" />
      </div>
    </div>
  </BoxList>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroCont from "./CronometroCont.vue";
import IListaTarefas from '../interfaces/IListaTarefas'
import BoxList from "./BoxList.vue";

export default defineComponent({
  name: "ListaTarefas",
  components: {
    CronometroCont,
    BoxList
},
  props:{
    listaTarefa: {
      type: Object as PropType<IListaTarefas>,
      required: true
    }
  }
});
</script>


