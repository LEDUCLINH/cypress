const url = require('url')

Cypress.Commands.add('login', (name) => {
  // cy.login('superadmin')
  // cy.login('nguoidung')
  cy.fixture(`users/${name}.json`).then(user => {
    cy.request('POST', 'https://portal.digihcs.com/graphqllunch', {
      "variables": {
        "loginInput": {
          "username": user.username,
          "password": user.password
        }
      },
      "query": `mutation ($input: LoginUserInput!) {
        login(input: $input) {
          token
          userPermissions {
            siteId
            siteName
            sitepermissions
            __typename
          }
          __typename
        }
      }
      `
    })
      .its('body')
      .then((body) => {
        window.localStorage.setItem('access-token', body.data.login.token)
        cy.visit(Cypress.env('LUNCHURL'))
      })
  })
})

Cypress.Commands.add('logout', () => {
  cy.clearLocalStorage()
  cy.visit(Cypress.env('LUNCHURL'))
})

function randomStringFromSet (length = 0, characterSet = '') {
  let result = ''
  if (characterSet.length === 0 || length == 0) return result
  for (let i = 0; i < length; i++) {
    result += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
  }
  return result
}

const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const numberSet = '0123456789'

Cypress.Commands.add('randomStr', (pattern = '') => {
  // w stands for word
  // d stands for digit
  /* Pattern example
  Name: w{4} w{4} w{4} => HfgW HSnp xPsQ
  Email: w{4}d{1}@w{4}.com => gXPt4@HrSG.com
  Number: 0163d{6} => 0163578954
  Code: w{12} => JAeaqoOfOEUU
  */
  const matched = pattern.match(/[w|d]\{\d+\}/g)
  let result = pattern
  for (const m of matched) {
    const type = m.match(/^[wd](?=\{\d+\})/)[0]
    const chLen = m.match(/\d+/)[0]
    result = result.replace(m, randomStringFromSet(chLen, (type === 'w' && charSet) || (type === 'd' && numberSet)))
  }
  return result
})

let SINGLETOON_LC = {}

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach(key => {
    SINGLETOON_LC[key] = localStorage[key]
  })
})

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(SINGLETOON_LC).forEach(key => {
    localStorage.setItem(key, SINGLETOON_LC[key])
  })
})

Cypress.Commands.add('clearLocalStorageCache', () => {
  localStorage.clear()
  SINGLETOON_LC = {}
})

// Access element whose parent is hidden
Cypress.Commands.add('isVisible', {
  prevSubject: true
}, (subject) => {
  const isVisible = (elem) => !!(
    elem.offsetWidth ||
    elem.offsetHeight ||
    elem.getClientRects().length
  )
  expect(isVisible(subject[0])).to.be.true
  return subject
})