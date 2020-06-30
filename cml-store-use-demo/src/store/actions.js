import cml from "chameleon-api"

export default {
  changeNameAsync: function (store, val) {
    if(store.state.name === val) {
      return
    }
    new Promise(resolve => {
      cml.showToast({
        message: '请稍等...',
        duration: 3000
      })
      setTimeout(() => {
        resolve(val)
      }, 3000)
    }).then(res => {
      store.commit('changeName', res)
    })
  }
}

