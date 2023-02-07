import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import shake from '../shake.vue'
// The component to test


describe('test shake', () => {
    it("should render slot", () => {
        const wrapper = mount(shake, {
            slots: {
                default: 'Hello world'
            }
        })

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain('Hello world')
    })
    it("should have class", () => {
        const wrapper = mount(shake, {
            props: {
                modelValue: true
            }
        })
        expect(wrapper.classes()).toContain('k-shakeactive')
    })
})