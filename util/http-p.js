import { config } from '../config.js'

const tips = {
    1: '错误',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

class Http {

    request(url, data={}, method='GET'){
        return new Promise((resolve, reject)=>{
            this._request(url, resolve, reject, data, method)
        })
    }

    _request(url, resolve, reject, data={}, method='GET') {
        wx.request({
            url: config.apiBaseUrl + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                const statusCode = res.statusCode.toString()
                if (statusCode.startsWith('2')) {
                    resolve(res.data)
                } else {
                    reject()
                    this._show_err(res.data.error_code)
                }
            },
            fail: (err) => {
                reject()
                this._show_err()
            }
        })
    }

    _show_err(error_code) {
        if (!error_code) {
            error_code = 1
        }
        wx.showToast({
            title: tips[error_code],
            icon: 'none',
            duration: 2000,
        })
    }
}

export { Http }