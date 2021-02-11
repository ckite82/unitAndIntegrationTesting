import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

describe('App.vue', () => {
  it('should be able to add 1 to 4', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})

describe('App.vue', () => {
  it('should be able to subtract 4 from 7', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('App.vue', () => {
  it('should be able to multiply 3 from 5', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 5
    wrapper.vm.multiply('3');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})

describe('App.vue', () => {
  it('should be able to divide 21 from 7', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.numberClick(9)
    wrapper.vm.numberClick(8)
    wrapper.vm.numberClick(2)
    expect(wrapper.vm.runningTotal).to.equal(1982)
  })
})

describe('operatorClick', () => {
  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(9)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(8)
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(40)
  })
})

describe('clearClick', () => {
  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(1)
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick(9)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(8)
    wrapper.vm.operatorClick('/')
    wrapper.vm.numberClick(2)
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(40)
  })
})