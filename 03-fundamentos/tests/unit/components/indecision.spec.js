import {shallowMount} from "@vue/test-utils";
import Indecision from "@/components/indecision";

describe("indecision component",
    () => {

        let wrapper
        let clgSpy

        beforeEach(() => {
            wrapper = shallowMount(Indecision)

            clgSpy = jest.spyOn( console, 'log')

        })

        test("It has to match the component with the snapshot",
            () => {
                expect(wrapper.html()).toMatchSnapshot()
            })

        test("It should execute the console.log when somethings is write in the input",
            async () => {
                const input = wrapper.find('input')

                await input.setValue('Hola mundo')

                expect( clgSpy ).toHaveBeenCalled()

        })

        test("Testing get answers",
            () => {

            })

        test("writing the ? symbol should execute the fetch to the API",
            () => {

            })

        test("Testing in getAnswers -- Failing from API",
            () => {

            })
    })