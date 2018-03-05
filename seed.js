// truffle exec seed.js
Eutil = require('ethereumjs-util')
EcommerceStore = artifacts.require('./EcommerceStore.sol')
module.exports = function (callback) {
  current_time = Math.round(new Date() / 1000)
  amt_1 = web3.toWei(1, 'ether')
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('iphone X', 'Cell Phones & Accessories', 'QmdPudyvDPrPNx8L7LdiMfSxwCjXazWKbwBHmfFeBFEXzH', 'QmQZF3ZdgnhDiDXBXXdZ3QT3wbmYEycRSNU3poV16BxpPV', current_time, current_time + 200, 2 * amt_1, 0).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('iphone 8', 'Cell Phones & Accessories', 'QmbV4S1yguGfaZcG7JaT2eZshZcXJXgcQL3DwRwPS66ZGQ', 'QmbsfkE3FB88NFzwpSNfpcDfeB9AgQnD9CLznGgcHYT9dM', current_time, current_time + 400, 3 * amt_1, 1).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('RokuTV', 'TVs', 'Qma7JWrE8XoNaWvCWVcC1QhFVHN78NWTGJgFdquyPt5act', 'QmcvjSHVqHbttYiRXTJqCGiueEJF1j7L72MoQHyDwTVdSb', current_time, current_time + 14, amt_1, 0).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('Vizio TV', 'Cell TVs', 'QmV4jmragpMe4ozQh8bEpb8wUqpditgr1RHwX1MZWRAsYN', 'QmP9XGszXbHeEKU88Evyxz1YrF4RGaCRy9a5yoDQUidf1x', current_time, current_time + 86400, 4 * amt_1, 1).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('Red Jeans', 'Clothing, Shoes & Accessories', 'QmeTcY7iPq8keR1EbakNor8cAnu9kKSuRgAx72qDYsvcfu', 'QmSMKBoUgt45GKiZLXJpT8rBjCMcSekT6MFSxrq9ssSu4J', current_time, current_time + 86400, 5 * amt_1, 1).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('Blue Jeans', 'Clothing, Shoes & Accessories', 'QmcsceKHNwRq3pWfJbJU2qoRJcBoErWoW72hL6m6Ehm17Q', 'QmfU6wANcMXdtEe5hqUouEJiqq6CF7tEvjppXdB3A77YNS', current_time, current_time + 86400 + 86400 + 86400, 5 * amt_1, 1).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.addProductToStore('Red Shoes', 'Clothing, Shoes & Accessories', 'QmV3gd9PvrXVeuakmLWVyH8aVrhmFYqdMB9VuYpwVVzYFY', 'QmZa2QxzNA7VvRtSfpvKKYm3J6AY8GgsxYpz5n8QUyegRZ', current_time, current_time + 86400, 5 * amt_1, 1).then(function (f) { console.log(f) }) })
  EcommerceStore.deployed().then(function (i) { i.productIndex.call().then(function (f) { console.log(f) }) })
}
