
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'componentUsagePage', path: '/componentUsage', component: () => import('pages/ComponentUsagePage.vue') },
      { name: 'passwordPage', path: '/passwordPage', component: () => import('pages/PasswordPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
