import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasList from "../view/TarefasList.vue";
import ProjetosList from "../view/ProjetosList.vue";
import FormularioList from "../view/Projetos/FormularioList.vue";
import ListaList from '../view/Projetos/ListaList.vue'

const router: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TarefasList",
    component: TarefasList,
  },
  {
    path: '/projetos',
    component: ProjetosList,
    children: [
        {
            path: '',
            name: "ProjetosList",
            component: ListaList,
          },
          {
            path: 'novo',
            name: "Novo projeto",
            component: FormularioList,
          },
          {
            path: ':id',
            name: "Editar projeto",
            component: FormularioList,
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
