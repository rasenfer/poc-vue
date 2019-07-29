
import { menuService } from "@/services";
import { Header, Menu } from "@/components";

import logo from "@/assets/logo.png";

export default {
  components: {
    Menu,
    Header
  },
  data: function () {
    return {
      logo,
      version: process.env.VUE_APP_VERSION,
      env: process.env.NODE_ENV,
      links: menuService.getMenu()
    };
  }
};