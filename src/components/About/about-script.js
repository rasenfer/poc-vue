import VueTypes from "vue-types";

export default {
    props: {
        version: VueTypes.string.isRequired,
        env: VueTypes.string.isRequired,
        endpointUrl: VueTypes.string.isRequired,
        lodashVersion: VueTypes.string.isRequired,
    }
};