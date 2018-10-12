import {
    Http
} from '../util/http.js'

class ClassicModel extends Http {
    getLastList(sCallback) {
        this.request({
            url: '/classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index)
            }
        })
    }

    getClassic(index, isNext, sCallback) {
        let action = isNext ? 'next' : 'previous'
        // 获取下一期数据
        this.request({
            url: '/classic/' + index + '/' + action,
            success: (res) => {
                sCallback(res)
            }
        })
    }

    isFirst(index) {
        // 当前期刊是否是第一期
        return index == 1 ? true : false
    }
    isLatest(index) {
        // 当前期刊是否是最新一期
        let latestIndex = this._getLatestIndex()
        return index == latestIndex ? true : false
    }
    _setLatestIndex(index) {
        // storage 最新期刊的index
        wx.setStorageSync('latest', index)
    }

    _getLatestIndex() {
        // storage 最新期刊的index
        let index = wx.getStorageSync('latest')
        return index
    }
}

export {
    ClassicModel
}