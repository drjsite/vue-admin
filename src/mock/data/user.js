const UserList = [{
    id: 1,
    username: 'admin',
    password: '123456',
}];

const MenuList = [
    {
        id: 100,
        name: "用户管理",
        path: "user",
        icon:"user-solid",
        child: [{
            id: 100001,
            name: "用户列表",
            path: "/userlist",
            icon:"user",
        }]
    },
    {
        id: 101,
        name: "权限管理",
        path: "permission",
        icon:"lock",
        child: [{
            id: 101001,
            name: "菜单列表",
            path: "/menulist",
            icon:"menu"
        }]
    }
];

export {UserList, MenuList}


