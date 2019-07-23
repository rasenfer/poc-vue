
import endpoints from "@/config/endpoints";

import Vue from "vue";

Vue.mixin({
    data: function () {
        return {
            endpoint: process.env.ENDPOINT || endpoints[process.env.NODE_ENV]
        }
    }
});