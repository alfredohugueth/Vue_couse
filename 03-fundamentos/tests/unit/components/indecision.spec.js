import {shallowMount} from "@vue/test-utils";
import Indecision from "@/components/indecision";

describe("indecision component",
    () => {

        let wrapper
        let clgSpy

        global.fetch = jest.fn( () => Promise.resolve({
          json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
          })
        }))

        beforeEach(() => {
            wrapper = shallowMount(Indecision)

            clgSpy = jest.spyOn( console, 'log')

            jest.clearAllMocks()
        })

        test("It has to match the component with the snapshot",
            () => {
                expect(wrapper.html()).toMatchSnapshot()
            })

        test("It should execute the console.log when somethings is write in the input",
            async () => {

                const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswers' )

                const input = wrapper.find('input')

                await input.setValue('Hola mundo')

                expect( clgSpy ).toHaveBeenCalled()
                expect( getAnswerSpy ).not.toHaveBeenCalled()
        })

        test("Testing get answers to been called after a ? is written in the input text",
            async() => {
                const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswers')
                const input = wrapper.find('input')

                await input.setValue('It has been called?')

                expect( getAnswerSpy ).toHaveBeenCalled()

            })

        test("Testing in getAnswers -- Failing from API",
            async () => {
                await wrapper.vm.getAnswers()

                const img = wrapper.find('img')

                expect( img.exists() ).toBeTruthy()
                expect( wrapper.vm.img ).toBe( 'https://yesno.wtf/assets/yes/2.gif' )

            })

        test("Testing in getAnswers -- API fail", async () => {

            fetch.mockImplementationOnce( () => Promise.reject('Promise failing'))

            await wrapper.vm.getAnswers()

            expect( wrapper.vm.answer ).toBe( 'API not loading data correctly' )
        })
    })