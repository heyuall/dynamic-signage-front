import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Afficheurs',
    icon: 'monitor-outline',
    link: '/pages/afficheur',
    home: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    link: '/pages/layout-manager'
  },
  // {
  //   title: 'Components',
  //   icon: 'pie-chart-outline',
  //   link: '/pages/layout'
  // },

  // {
  //   title: 'Components',
  //   group: true,
  // },


  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   link: ''
  // },
  {
    title: 'Components',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Graphique',
        link: '/pages/components',
      },
      {
        title: 'Message',
        link: '/pages/message',
      },
      {
        title: 'Notification',
        link: '/pages/notification',
      },
    ],
  },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
