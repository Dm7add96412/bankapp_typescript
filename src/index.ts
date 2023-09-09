import { Bank } from "./bank"
import { Branch } from "./branch"
import { Customer } from "./customer"

const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

console.log(arizonaBank.name)
console.log(westBranch.name)
console.log(customer1.id)

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

console.log(arizonaBank.findBranchByName("bank"))
console.log(arizonaBank.findBranchByName("sun"))

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

console.log(arizonaBank.checkBranch(westBranch))

// arizonaBank.addCustomerTransaction(westBranch, customer1.id, 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.id, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.id, 3000)

// customer1.addTransactions(-1000)
// console.log(customer1.balance)
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))