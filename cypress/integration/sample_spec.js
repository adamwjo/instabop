describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

//   describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })

  describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
      cy.get(".hello").contains("Hello World")
    })
  })