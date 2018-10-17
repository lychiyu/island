const paginationBev = Behavior({
    data: {
        books: [],
        total: null,
        noneResult: false,
        requesting: false
    },

    methods: {
        setMoreData(dataArray) {
            const temp = this.data.books.concat(dataArray)
            this.setData({
                books: temp
            })
        },

        getCurrentStart() {
            return this.data.books.length
        },

        setTotal(total) {
            this.data.total = total
            if (total == 0) {
                this.setData({
                    noneResult: true
                })
            }
        },

        hasMore() {
            if (this.data.books.length >= this.data.total) {
                return false
            } else {
                return true
            }
        },
        initialize() {
            this.setData({
                books: [],
                noneResult: false,
                requesting: false
            })
            this.data.total = null
        },

        isLocked() {
            return this.data.requesting ? true : false
        },

        locked() {
            this.setData({
                requesting: true
            })
        },

        unLocked() {
            this.setData({
                requesting: false
            })
        },

    }
})

export {
    paginationBev
}