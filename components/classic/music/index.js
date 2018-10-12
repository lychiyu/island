import {
  classicBeh
} from '../classic-beh.js'

// 获取背景音乐管理对象
const mMgr = wx.getBackgroundAudioManager()

Component({

  behaviors: [classicBeh],

  /**
   * 组件的属性列表
   */
  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  attached: function () {
    console.log(1)
    this._recoverPlayerStatus()
    this._monitorPlayerSwitch()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function (event) {
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },
    _recoverPlayerStatus() {
      // 恢复播放器状态
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorPlayerSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverPlayerStatus()
      })
      mMgr.onPause(() => {
        this._recoverPlayerStatus()
      })
      mMgr.onEnded(() => {
        this._recoverPlayerStatus()
      })
      mMgr.onStop(() => {
        this._recoverPlayerStatus()
      })
    }
  }
})