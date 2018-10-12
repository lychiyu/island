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
                // 写入缓存
                let key = this._getKey(res.index)
                wx.setStorageSync(key, res)
            }
        })
    }

    getClassic(index, isNext, sCallback) { 
        // 获取下一期数据
        let key = isNext? this._getKey(index+1):this._getKey(index-1)
        let classic = wx.getStorageSync(key)    // 尝试先从缓存中获取
        if (!classic) {
            // 从网络请求
            let action = isNext ? 'next' : 'previous'
            this.request({
                url: '/classic/' + index + '/' + action,
                success: (res) => {
                    // 写入缓存
                    wx.setStorageSync(key, res)
                    sCallback(res)
                }
            })
        }else{
            sCallback(classic)
        }
        
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

    _getKey(index){
        let key = 'classic-'+index
        return key
    }
}

export {
    ClassicModel
}