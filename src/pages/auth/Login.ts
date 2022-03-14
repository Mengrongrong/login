import { Component, Vue } from 'vue-property-decorator'
import { openAuthMiniApp } from 'dingtalk-design-libs/biz/openAuthMiniApp'


@Component({
    name: 'Login',
    components: {}
})

export default class Login extends Vue {

    onShow() {
        openAuthMiniApp({
            path: 'pages/home/home',  //不要改,这里是小程序dingwlanwvdmrtjjwdmd下的一个页面地址
            panelHeight: 'percent50',
            extraData: {
                clientId: dd.corpId, // 应用ID(唯一标识)
                rpcScope: 'Contact.User.Read',
                fieldScope: 'Contact.User.mobile',
                from: ''
            }
        })
    }
}
