import {
    Http
} from '../util/http-p.js'


class KeywordModel extends Http {

    key = 'q'
    maxLength = 10
    // 获取历史搜索
    getHistory() {
        const history = wx.getStorageSync(this.key)
        return history ? history : []
    }

    // 获取热门搜索
    getHot() {
        return this.request('/book/hot_keyword')
    }

    // 将用户搜索的数据写入缓存中
    addToHistory(keyword) {
        let oriHistory = this.getHistory()
        if (!oriHistory.includes(keyword)) {
            const length = oriHistory.length
            if (length >= this.maxLength) {
                oriHistory.pop()
            }
            oriHistory.unshift(keyword)
            wx.setStorageSync(this.key, oriHistory);
        }
    }

    // 获取搜索数据
    search(start, q) {
        return this.request(
            '/book/search?summary=1', {
                q: q,
                start: start
            })
    }
}

export {
    KeywordModel
}