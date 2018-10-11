import { config } from '../config.js'

const tips = {
    1: '错误',
    1005: 'appkey无效',
    3000: '期刊不存在'
}

class Http {
    request(params) {
        if (!params.method) {
            params.method = "GET"
        }
        wx.request({
            url: config.apiBaseUrl + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                let statusCode = res.statusCode.toString()
                if (statusCode.startsWith('2')) {
                    params.success && params.success(res.data)
                } else {
                    this._show_err(res.data.error_code)
                }
            },
            fail: (err) => {
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