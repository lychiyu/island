import {
    Http
} from '../util/http-p.js'

class BookModel extends Http{
    // 获取热门书籍数据
    getHotList(){
        return this.request('/book/hot_list')
    }
}

export {BookModel}