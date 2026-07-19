import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    isActive: true,
    items: []
  },
  {
    title: 'Stories',
    url: '/dashboard/stories',
    icon: 'post',
    isActive: false,
    items: []
  },
  {
    title: 'Newsletter',
    url: '/dashboard/newsletter',
    icon: 'users',
    isActive: false,
    items: []
  }
];
