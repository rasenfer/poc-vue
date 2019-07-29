export default {
    name: "menuService",
    getMenu: function () {
        return [
            {
                name: "Counter",
                path: "/counter"
            },
            {
                name: "People",
                path: "/people"
            },
            {
                name: "About",
                path: "/about"
            }
        ]
    }
};