import { shallowMount } from '@vue/test-utils'
import LoadingSpinner from '@/components/spinner/LoadingSpinner.vue'

describe('LoadingSpinner.vue', () => {
  const wrapper = shallowMount(LoadingSpinner)

  it('has "wrapper" class', () => {
    const wrapperClass = wrapper.find('.wrapper')
    expect(wrapperClass.exists())
  })

  it('has "spinner" class', () => {
    const wrapperClass = wrapper.find('.spinner')
    expect(wrapperClass.exists())
  })

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
