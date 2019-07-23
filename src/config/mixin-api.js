import Vue from "vue";

import endpoints from "@/config/endpoints";

Vue.mixin({
    data: function () {
        return {
            endpoint: process.env.ENDPOINT || endpoints[process.env.NODE_ENV]
        }
    }
});