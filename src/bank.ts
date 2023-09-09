import { Branch } from "./branch"
import { Customer } from "./customer"

export class Bank {
    private _name: string
    private _branches: Branch[]

    constructor(name: string) {
        this._name = name
        this._branches = []
    }

    get branches() {
        return this._branches
    }
    get name() {
        return this._name
    }
    addBranch(branch: Branch) {
        if (this._branches.includes(branch)) {
            return false
        } else {
            if (this._branches.push(branch)) {
                console.log(this._branches)
                return true
            } else {
                console.log("error with adding branch")
            }       
        }
    }
    addCustomer(branch: Branch, customer: Customer) {
        const foundBranch = this._branches.find(b => b === branch)
        if (foundBranch) {
            foundBranch.addCustomer(customer)
            return true
        } else {
            return false
        }
    }
    addCustomerTransaction(branch: Branch, customerId: string, amount: number) {
        return true
    }
    findBranchByName(name: string) {
        const foundBranch = this._branches.find(b => b.name.toLowerCase().includes(name.toLowerCase()))
        return foundBranch ? foundBranch : null
    }
    checkBranch(branch: Branch) {
        if (this._branches.find(b => b === branch)) {
            return true
        }
    }
    listCustomers(branch: Branch, boolean: boolean) {
        if (this._branches.find(b => b === branch)) {
            return true
        } else {
            return false
        }
    }
}