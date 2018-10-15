import {
    Http
} from '../util/http-p.js'

class BookModel extends Http{
    // 获取热门书籍数据
    getHotList(){
        return this.request('/book/hot_list')
    }

    // 获取图书详情信息数据
    getDeatil(id) {
        return this.request(`/book/${id}/detail`)
    }

    // 获取图书收藏状态信息数据
    getLikeStatus(id) {
        return this.request(`/book/${id}/favor`)
    }

    // 获取图书短评数据
    getComments(id){
        return this.request(`/book/${id}/short_comment`)
    }
}

export {BookModel}