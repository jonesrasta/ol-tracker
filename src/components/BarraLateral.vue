<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="Logo Olympus" />
    </h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
    <nav class="panel">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      darkModeAtive: false,
    };
  },
  computed: {
    textoBotao() {
      if (this.darkModeAtive) {
        return "Desativar modo escuro";
      }
      return "Ativar modo escuro";
    },
  },
  methods: {
    alterarTema() {
      this.darkModeAtive = !this.darkModeAtive;
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

.panel li {
  margin: 8px 0;
}

.link:hover {
  color: #faf0ca;
}

.link.router-link-active {
  color: #faf0ca;
}
</style>
