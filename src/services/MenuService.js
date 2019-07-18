export default {
    name: "menuService",
    getMenu: function () {
        return {
            links: [
                {
                    name: "Counter",
                    path: "/counter"
                },
                {
                    name: "About",
                    path: "/about"
                }
            ]
        }
    }
};