const homeOptions = [
  [
    {
      header: '基础部分',
      code: 'base',
      routePath: '/base',
      children: [
        {
          label: 'js', path: '/base/js', index: '1',
        },
        {
          label: 'css', path: '/base/css', index: '2',
        },
        {
          label: 'html', path: '', index: '3',
        },
      ],
    },
    {
      header: 'vue部分',
      code: 'vue',
      routePath: '/vue',
      children: [
        {
          label: 'vue3', path: '/vue/three', index: '1',
        },
        {
          label: 'vue2', path: '', index: '2',
        },
        {
          label: 'vue-router', path: '', index: '3',
        },
        {
          label: 'vuex/pinia', path: '', index: '4',
        },
        {
          label: 'vite', path: '', index: '5',
        },
        {
          label: 'axios', path: '', index: '6',
        },
        {
          label: 'Element Plus/Element UI', path: '', index: '7',
        },
        {
          label: 'echarts', path: '', index: '8',
        },
      ],
    },
  ],
  [
    {
      header: 'h5 小程序部分',
      code: 'h5',
      routePath: '/mobile',
      children: [
        {
          label: 'h5', path: '/mobile/h5', index: '1',
        },
        {
          label: 'vant', path: '', index: '2',
        },
        {
          label: 'uni-app', path: '', index: '3',
        },
        {
          label: '微信小程序', path: '', index: '4',
        },
        
      ],
    },
    {
      header: 'webGis部分',
      code: 'gis',
      routePath: '/gis',
      children: [
        {
          label: 'openlayers', path: '/gis/ol', index: '1',
        },
        {
          label: 'cesium', path: '', index: '2',
        },
      ],
    },
  ],
]

export {
  homeOptions,
}