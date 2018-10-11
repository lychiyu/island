import { Http } from '../util/http.js'

class LikeModel extends Http {
    like(behavior, artId, category) {
        this.request({
            url: behavior=='like'?'/like':'/like/cancel',
            data: {art_id: artId, type: category},
            method: 'POST'
        })
    }
}

export {LikeModel}