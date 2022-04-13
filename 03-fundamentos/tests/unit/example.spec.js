
describe('Example Component', () => {

  test('It have to be greater than 10',
      () => {

        // Construct
        let value = 10

        // stimulus
        value += 2

        // See the results
        expect( value ).toBeGreaterThan( 10 )

      })
})
