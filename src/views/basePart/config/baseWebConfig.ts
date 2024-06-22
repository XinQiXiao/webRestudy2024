import DebounceDemo from '../components/DebounceDemo.vue'
import ThrottleDemo from '../components/ThrottleDemo.vue'
import CommonDemo from '../components/CommonDemo.vue'

const baseJsOptions = [
  {
    label: '防抖(debounce)', code: 'debouncePart', component: DebounceDemo, index: '1',
  },
  {
    label: '节流(throttle)', code: 'throttlePart', component: ThrottleDemo, index: '2',
  },
  {
    label: '通用', code: 'commonPart', component: CommonDemo, index: '3',
  },
]

const baseCssOptions = []

export {
  baseJsOptions,
  baseCssOptions,
}