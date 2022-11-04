import { mount } from '@vue/test-utils'
import CardComponent from '@/components/CardComponent.vue'

describe('CardComponent.vue', () => {
  const wrapper = mount(CardComponent, {
    slots: {
      default: 'Main content'
    }
  })

  it('has "card" class', () => {
    const wrapperClass = wrapper.find('.card')
    expect(wrapperClass.exists())
  })

  it('has "title" class', () => {
    const wrapperClass = wrapper.find('.title')
    expect(wrapperClass.exists())
  })

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('checks slot', () => {
    const wrapperClass = wrapper.find('.card')
    expect(wrapperClass.text()).toContain('Main content')
  })

  it('sets prop title to "Test title"', async () => {
    await wrapper.setProps({ title: 'Test title' })
    expect(wrapper.vm.title).toBe('Test title')
  })
})
