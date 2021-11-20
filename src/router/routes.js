
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('src/pages/Home.vue') },
      { path: 'create-transport', component: () => import('src/pages/CreateTransport.vue') },
      { path: 'transports-history', component: () => import('src/pages/TransportsHistory.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
