<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Olympus" />
    </h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
    <!--<aside class="menu m-5 pt-6 mt-8">
            <p class="menu-label has-text-weight-bold">
                General
            </p>
            <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
               <a class="is-active">Manage Your Team</a>
            </ul>
            <p class="menu-label has-text-weight-bold">
                Administration
            </p>
            <ul class="menu-list">
                <li>
                    <a>Dark Mode</a>
                    <a>Ocultar barra lateral</a>
                    <a>Tarefas em andamento</a>
                    <a>Tarefas finalizadas</a>
                </li>
            </ul>

        </aside>-->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data () {
    return {
      darkModeAtive: false
    }
  },
  computed: {
    textoBotao () {
      if (this.darkModeAtive) {
        return 'Desativar modo escuro'
      }
      return 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.darkModeAtive = !this.darkModeAtive
      this.$emit("aoTemaAlterado", this.darkModeAtive);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: linear-gradient(
    187.52deg,
    #00c4ac -3.8%,
    #0f2a27 -3.79%,
    #0276e5 102.31%
  );
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 1rem;
    height: auto;
  }
  h1 {
    display: flex;
    justify-content: center;
  }
}
</style>
