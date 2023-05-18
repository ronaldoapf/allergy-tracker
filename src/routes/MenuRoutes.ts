export type MenuRoutes = Array<{
  id: string
  path: string
  label: string
  privateRoute: boolean
  onlyToRegister?: boolean
}>

export const menuRoutes: MenuRoutes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    privateRoute: false,
  },
  {
    id: 'register',
    label: 'Faça seu cadastro',
    path: '/register',
    privateRoute: false,
    onlyToRegister: true,
  },
  {
    id: 'register-allergy',
    label: 'Registrar alergia',
    path: '/register-allergy',
    privateRoute: true,
  },
]
