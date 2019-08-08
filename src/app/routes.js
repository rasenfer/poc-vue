import CounterView from '@/views/CounterView';
import CharacterListView from '@/views/CharacterListView';
import CharacterView from '@/views/CharacterView';
import AboutView from '@/views/AboutView';

export default [
  { name: 'counter', path: '/counter', component: CounterView },
  { name: 'about', path: '/about', component: AboutView },
  {
    name: 'characters-list',
    path: '/characters',
    component: CharacterListView,
    props: route => ({
      page: Number(route.query.page || 1),
    }),
  },
  {
    name: 'character',
    path: '/character/:id',
    component: CharacterView,
    props: route => ({ id: Number(route.params.id) }),
  },
];
