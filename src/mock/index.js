import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {UserList} from './data/user'

export default {

    init() {
        let mock = new MockAdapter(axios);
        mock.onPost('/login').reply(arg => {
            let {userName, password} = JSON.parse(arg.data);
            return new Promise((resolve) => {
                let hasUser = UserList.some(u => {
                    if (u.username === userName && u.password === password) {
                        return true
                    }
                });
                if (hasUser) {
                    resolve([200, {code: 200, msg: '请求成功'}])
                } else {
                    resolve([200, {code: 500, msg: '账号或密码错误'}])
                }
            })
        })
    }
}