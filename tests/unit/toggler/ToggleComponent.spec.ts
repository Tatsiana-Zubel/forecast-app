import { shallowMount } from '@vue/test-utils'
import ToggleComponent from '@/components/toggler/ToggleComponent.vue'

describe('ToggleComponent.vue', () => {
  const wrapper = shallowMount(ToggleComponent)

  // beforeEach(() => {
  //   wrapper.destroy();
  // });

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('has "toggle" class', () => {
    const wrapperClass = wrapper.find('.wrapper')
    expect(wrapperClass.exists())
  })

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has two buttons', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
  })

  it('should call "switchToCelsius" method', async () => {
    const spy = jest.spyOn(wrapper.vm, 'switchToCelsius')
    const celsiusBtn = wrapper.findAll('button').at(0)
    // @ts-ignore
    await celsiusBtn.trigger('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should emit "toggle" event with toggleValue equal to celsius ', async () => {
    const celsiusBtn = wrapper.findAll('button').at(0)
    // @ts-ignore
    await celsiusBtn.trigger('click')

    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle.length).toBe(1)
    expect(wrapper.emitted().toggle[0]).toEqual(['CELSIUS'])
  })

  it('should call "switchToFahrenheit" method', async () => {
    const spy = jest.spyOn(wrapper.vm, 'switchToFahrenheit')
    const celsiusBtn = wrapper.findAll('button').at(1)
    // @ts-ignore
    await celsiusBtn.trigger('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should emit "toggle" event with toggleValue equal to Fahrenheit ', async () => {
    const celsiusBtn = wrapper.findAll('button').at(1)
    // @ts-ignore
    await celsiusBtn.trigger('click')

    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle.length).toBe(1)
    expect(wrapper.emitted().toggle[0]).toEqual(['FAHRENHEIT'])
  })
})
