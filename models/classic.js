import { Http } from '../util/http.js'

class ClassicModel extends Http {
    getLastList(sCallback) {
        this.request({
            url: '/classic/latest',
            success: (res) => {
                sCallback(res)
            }
        })
    }
}

export {ClassicModel}