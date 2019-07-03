// https://vuex.vuejs.org/en/modules.html
/**
 * param1: 要搜索的文件夹目录
 * param2: 是否还应该搜索它的子目录
 * param3: 匹配文件的正则表达式
 */
const requireModule = require.context('.', true, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.js)/g, '')

  const [moduleName, imported] = path.split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      // 限定命名空间
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
})

export default modules
