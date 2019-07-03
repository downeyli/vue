import Vue from 'vue'

const requireComponents = require.context('@/components', true, /\.vue$/)

requireComponents.keys().forEach(fileName => {
  const componentPath = requireComponents(fileName)

  const componentName = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.'))

  Vue.component(componentName, componentPath.default || componentPath)
})
