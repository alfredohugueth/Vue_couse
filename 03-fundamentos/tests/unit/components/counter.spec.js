
import Counter from "@/components/Counter";
import { shallowMount } from "@vue/test-utils";


describe( 'Counter Components', () => {

    // test('It have to match with the snapshot', () => {
    //
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()
    //
    // })

    test( 'H2 it has to have the default value of the counter', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.find( 'h2' ).exists() ).toBeTruthy()

        const h2 = wrapper.find( 'h2' )

        expect( h2.text() ).toContain( 'Contador' )

    })
})