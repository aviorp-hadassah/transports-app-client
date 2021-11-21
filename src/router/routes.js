
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('src/pages/Home.vue') },
      { path: 'create-transport', name: 'createTransport', component: () => import('src/pages/CreateTransport.vue') },
      { path: 'transports-history', name: 'transportHistory', component: () => import('src/pages/TransportsHistory.vue') },
      { path: 'manage-transports', name: 'manageTransports', component: () => import('src/pages/ManageTransports.vue') },
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
