import {
    Http
} from '../util/http.js'

class LikeModel extends Http {
    like(behavior, artId, category) {
        this.request({
            url: behavior == 'like' ? '/like' : '/like/cancel',
            data: {
                art_id: artId,
                type: category
            },
            method: 'POST'
        })
    }

    getClassicLikeStatus(artId, category, sCallback) {
        this.request({
            url: '/classic/' + category + '/' + artId + '/favor',
            success: (res) => {
                sCallback(res)
            }
        })
    }
}

export {
    LikeModel
}