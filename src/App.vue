<template>
  <main class="columns is-gapless is-mutiline dark-mode">
    <div class="column is-one-quarter">

      <BarraLateral />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioCont @aoSalvarListaTarefas="salvarListaTarefas" />
      <div class="lista">
        <ListaTarefas v-for="(listaTarefa, index) in listaTarefas" :key="index" :listaTarefa="listaTarefa" />
        <BoxList v-if="listaTarefaEstaVazia">
          Você não está muito produtivo hoje.
        </BoxList>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from './components/BarraLateral.vue'
import FormularioCont from './components/FormularioCont.vue'
import ListaTarefas from './components/ListaTarefas.vue'
import IListaTarefas from "./interfaces/IListaTarefas";
import BoxList from "./components/BoxList.vue";


export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioCont,
    ListaTarefas,
    BoxList
  },
  data() {
    return {
      listaTarefas: [] as IListaTarefas[]
    }
  },
  computed: {
    listaTarefaEstaVazia () : boolean {
      return this.listaTarefas.length ===0
    }
  },
  methods: {
    salvarListaTarefas(listaTarefa: IListaTarefas) {
      this.listaTarefas.push(listaTarefa)
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.dark-mode {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>