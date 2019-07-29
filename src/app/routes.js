import { CounterView, PeopleView, PersonView, AboutView } from "@/views";

export default [
  { name: "counter", path: "/counter", component: CounterView },
  { name: "about", path: "/about", component: AboutView },
  { name: "people", path: "/people", component: PeopleView },
  {
    name: "person",
    path: "/people/:id",
    component: PersonView,
    props: (route) => ({ id: Number(route.params.id) })
  }
];
