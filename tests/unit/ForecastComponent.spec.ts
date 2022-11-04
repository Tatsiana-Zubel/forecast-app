import { shallowMount } from '@vue/test-utils'
import ForecastComponent from '@/components/ForecastComponent.vue'
import axios from 'axios'

jest.mock('axios', () => {})

describe('ForecastComponent.vue', () => {
  const wrapper = shallowMount(ForecastComponent)

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has container classes', () => {
    const containers = wrapper.findAll('.container')
    expect(containers.length).toBe(2)
  })

  it('has "container" classes', () => {
    const containers = wrapper.findAll('.container')
    expect(containers.length).toBe(2)
  })

  it('has "wrapper" classes', () => {
    const wrappers = wrapper.findAll('.wrapper')
    expect(wrappers.length).toBe(2)
  })
})
