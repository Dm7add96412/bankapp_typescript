import { Bank } from "./bank"
import { Branch } from "./branch"
import { Customer } from "./customer"

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const randomBranch = new Branch("Random Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

// console.log(westBranch.addCustomer(customer1))

// console.log(arizonaBank.name)
// console.log(westBranch.name)
// console.log(customer1.addTransaction(100))
// console.log(customer1.addTransaction(-80))
// console.log(customer1.addTransaction(7))
// console.log(customer1.balance)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

// console.log(arizonaBank.findBranchByName("bank"))
// console.log(arizonaBank.findBranchByName("sun"))

// console.log(arizonaBank.addCustomer(westBranch, customer1))
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)
// arizonaBank.listCustomers(sunBranch, true) 

// console.log(arizonaBank.checkBranch(randomBranch))

// console.log(westBranch.addCustomerTransaction(customer3.id, 1500))
// console.log(customer3.balance)

// console.log(arizonaBank.addCustomerTransaction(westBranch, customer1.id, 3000))
// console.log(arizonaBank.addCustomerTransaction(westBranch, customer3.id, 2000))
// console.log(arizonaBank.addCustomerTransaction(westBranch, customer2.id, 3000))

// console.log(customer3.balance)

// customer1.addTransaction(-1000)
// console.log(customer1.balance)
console.log('West Branch customer:', arizonaBank.listCustomers(westBranch, true))
// console.log('Sun Branch customer:', arizonaBank.listCustomers(sunBranch,true))