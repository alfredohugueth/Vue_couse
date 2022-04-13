
import Counter from "@/components/Counter";
import { shallowMount } from "@vue/test-utils";


describe( 'Counter Components', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Counter )
    })
    // test('It have to match with the snapshot', () => {
    //
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()
    //
    // })

    test("H2 it has to have the default value of the counter",
        () => {

            expect(wrapper.find('h2').exists()).toBeTruthy()

            const h2 = wrapper.find('h2')

            expect(h2.text()).toContain('Contador')

        })

    test("The defect value has to be 15 in the p",
        () => {

            // ptags
            const p = wrapper.find('[data-testid="counter"]')

            // expect segundo p == 15
            expect(p.text()).toBe("15")
        })

    test("It has to increment the counter value in 1",
        async () => {

            // Click to the Increase button button
            const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
            await increaseBtn.trigger('click')

            // Test the value
            let value = wrapper.find('[data-testid="counter"]').text()
            expect( value ).toBe( "16" )

            // Double-Click the decrease button
            await decreaseBtn.trigger('click')
            await decreaseBtn.trigger('click')

            // test the value
            value = wrapper.find('[data-testid="counter"]').text()
            expect( value ).toBe( "14" )
        })
})