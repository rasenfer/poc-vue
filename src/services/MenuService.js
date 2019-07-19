export default {
    name: "menuService",
    getMenu: function () {
        return [
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
};