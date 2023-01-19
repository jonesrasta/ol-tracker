<template>
    <div class="is-flex is-align-center is-justify-content-space-between">
        <CronometroCont :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CronometroCont from './CronometroCont.vue';

export default defineComponent({
  name: "TemporizadorCont",
  components: {
    CronometroCont
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
    };
  },


  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      clearInterval(this.cronometro);
    },
  },
});
</script>
