import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/product/:id', component: ProductDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;