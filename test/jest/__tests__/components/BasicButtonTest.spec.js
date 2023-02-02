import { describe, expect, it, beforeEach } from '@jest/globals'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'
import { shallowMount } from '@vue/test-utils'
import BasicButton from '../../../../src/components/BasicButton.vue'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

describe('BasicButton Component made with quasar q-btn', () => {
  let wrapper = null
  beforeEach(() => {
    console.log('hacer un shallow mount antes de cada prueba')
    wrapper = shallowMount(BasicButton)
  })

  it('has changeLoading method', () => {
    const { vm } = wrapper

    expect(typeof vm.changeLoading).toBe('function')
  })

  it('has onClick method', () => {
    const { vm } = wrapper

    expect(typeof vm.onClick).toBe('function')
  })

  it('has onClick method', () => {
    const { vm } = wrapper
    expect(typeof vm.onClick).toBe('function')

    const component = wrapper.find('#basic-btn')
    expect(component.attributes().loading).toBeDefined()
    expect(component.attributes().color).toBeDefined()
  })

  it('exists defined atrribute loading', () => {
    const component = wrapper.find('#basic-btn')
    expect(component.attributes().loading).toBeDefined()
  })

  it('exists defined atrribute color', () => {
    const component = wrapper.find('#basic-btn')
    expect(component.attributes().color).toBeDefined()
  })
})
