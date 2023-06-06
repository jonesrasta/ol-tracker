import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../view/Tarefas.vue'
import Projetos from '../view/Projetos.vue'

const router: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas

},
{
path: '/projetos',
name: 'Projetos',
component: Projetos
},

]

const  roteador = createRouter({
    history: createWebHashHistory(),
    routes: router
})


export default roteador;