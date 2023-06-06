<template>
  <FormularioCont @aoSalvarListaTarefas="salvarListaTarefas" />
  <div class="lista">
    <BoxList v-if="listaTarefaEstaVazia">
      Você não está muito produtivo hoje.
    </BoxList>
    <ListaTarefas
      v-for="(listaTarefa, index) in listaTarefas"
      :key="index"
      :listaTarefa="listaTarefa"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import FormularioCont from "../components/FormularioCont.vue";
import ListaTarefas from "../components/ListaTarefas.vue";
import IListaTarefas from "../interfaces/IListaTarefas";
import BoxList from "../components/BoxList.vue";

export default defineComponent({
  name: "App",
  components: {
    FormularioCont,
    ListaTarefas,
    BoxList,
  },
  data() {
    return {
      listaTarefas: [] as IListaTarefas[],
    };
  },
  computed: {
    listaTarefaEstaVazia(): boolean {
      return this.listaTarefas.length === 0;
    },
  },
  methods: {
    salvarListaTarefas(listaTarefa: IListaTarefas) {
      this.listaTarefas.push(listaTarefa);
    },
  },
});
</script>
