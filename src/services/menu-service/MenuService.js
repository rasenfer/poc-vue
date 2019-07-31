export default {
    name: "menuService",
    getMenu: function () {
        return [
            {
                name: "Counter",
                path: "/counter"
            },
            {
                name: "Characters",
                path: "/characters"
            },
            {
                name: "About",
                path: "/about"
            }
        ]
    }
};