import { categories } from "./categories";

export const menus = [
  {
    icon: '/images/logo-dashboard.svg',
    label: 'Categories',
    dropdown: categories,
  },
  {
    label: 'Movies',
    href: '/movies',
  },
  {
    label: 'TV Shows',
    href: '/tvshows',
  },
  {
    label: 'Login',
    href: '#',
  },
]