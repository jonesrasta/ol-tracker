import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from "../view/Tarefas.vue";
import Projetos from "../view/Projetos.vue";
import Formulario from "../view/Projetos/Formulario.vue";
import Lista from '../view/Projetos/Lista.vue'

const router: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
        {
            path: '',
            name: "Projetos",
            component: Lista,
          },
          {
            path: 'novo',
            name: "Novo projeto",
            component: Formulario,
          },
          {
            path: ':id',
            name: "Editar projeto",
            component: Formulario,
            props: true,
          },
    ]
  }
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: router,
})

export default roteador;
