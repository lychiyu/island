import {
  KeywordModel
} from '../../models/keyword.js'
import {
  paginationBev
} from '../behaviors/pagination.js'
const keywordModel = new KeywordModel()
Component({

  behaviors: [paginationBev],
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: 'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    q: '',
    history: [],
    hot: [],
    searching: false,
    requesting: false, // 是否正在发送请求
    loadingCenter: false
  },

  attached() {
    this.updateHistory()
    this.getHot()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event) {
      this.initialize()
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(event) {
      this.setData({
        searching: true,
        loadingCenter: true
      })
      this.initialize()
      const q = event.detail.value || event.detail.text
      const searchBooks = keywordModel.search(0, q)
      searchBooks.then(res => {
        this.setMoreData(res.books)
        this.setTotal(res.total)
        this.setData({
          q,
          loadingCenter: false
        })
        keywordModel.addToHistory(q)
        this.updateHistory()
      })

    },
    onDelete(event) {
      this.initialize()
      this.setData({
        searching: false,
        q: '',
      })
    },
    updateHistory() {
      const history = keywordModel.getHistory()
      this.setData({
        history
      })
    },
    getHot() {
      const hot = keywordModel.getHot()
      hot.then(res => {
        this.setData({
          hot: res.hot
        })
      })
    },
    loadMore() {
      if (!this.data.q) {
        return
      }
      if (this.isLocked()) {
        return
      }
      // 当前数据大小
      const currLenght = this.data.books.length
      if (this.hasMore()) {
        this.locked()
        keywordModel.search(this.getCurrentStart(), this.data.q).then(
          res => {
            this.setMoreData(res.books)
            this.unLocked()
          },
          () => {
            this.unLocked()
          })
      }
    }
  }
})