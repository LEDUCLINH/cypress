describe('TEST1: QL Nhóm khách hàng', () => {
  before('login', () => {
    cy.login('admin')
    // Tạo các biến ngẫu nhiên trong context để các task có thể dùng chung
    /*
    Lưu ý:
    1. Chỉ tạo biến ngẫu nhiên với alias(as) khi cần thực hiện
    assertion các giá trị giữa các task với nhau, đối với các variable chỉ dùng
    trong 1 task thì khai báo bằng const trong cục bộ của task đó 
    2. Vì nhiều người test song song trên trên cùng database nên các bạn chỉ test dựa vào các
    chuỗi được sinh ra trong cùng 1 file.
    */
    cy.randomStr('w{12}').as('customerCode')
    cy.randomStr('w{4} w{5}').as('customerName')
    cy.wrap(1.3).as('pointCoef')
  })

  it('TASK1', function () {
    cy.contains('Nhóm khách hàng', { timeout: 30000 }).click()
    cy.get('div.erp-grid-container button[name="add"]').click()
    // Tạm thời chưa có thuộc tính data-ci trên thẻ nên mình get bằng id
    cy.get('input#CustomerGroupActions_code').type(this.customerCode)
    cy.get('input#CustomerGroupActions_name').type(this.customerName)
    cy.get('input#CustomerGroupActions_rate').clear().type(this.pointCoef)
    /*
      Giả sử có variable chỉ cần sử dụng trong task này, thì khai báo bằng const, let,...
      không cần khai báo trong shared context.
    */
    const randomNumber = Math.random() * 10
    expect(randomNumber).to.equal(randomNumber)
  })

  /*
    Giả sử test của nình có TASK2 và cí liên quan đến data của task1,
    thì đây là lí do tại sao ta khai báo biến trong shared context
  */
  it('TASK2', function () {
    // Truy cập biến trong shared context
    expect(this.customerName).to.equal(this.customerName)
  })
})