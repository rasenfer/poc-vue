
import menuService from "@/services/MenuService";

import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";

import logo from "@/assets/logo.png";

export default {
  components: {
    Menu,
    Header
  },
  data: function() {
    return {
      logo,
      links: menuService.getMenu()
    };
  }
};