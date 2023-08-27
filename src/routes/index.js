import { createRouter, createWebHistory } from "vue-router";
import clockData from '../../public/data.json';
import App from '../App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...clockData.data.map((clock) => ({
            path: `/clock/${clock.id}`,
            name: `Clock${clock.id}`,
            component: () => import(`../views/Clock${clock.id}.vue`),
            meta: {
                fullPage: true,
            }
        })),
    ]
});

export default router;