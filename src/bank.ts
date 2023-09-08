
import { Branch } from "./branch"

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
        if (this._branches.find(b => b === branch)) {
            return false
        } else {
            if (this._branches.push(branch)) {
                return true
            } else {
                console.log("error with adding branch")
            }       
        }
    }
    addCustomer(branch: Branch, customer: string) {
        if (this._branches.find(b => b === branch)) {

        }
    }
    addCustomerTransaction(branch: Branch, customerId: string, amount: number) {
        return true
    }
    findBranchByName(name: string) {
        if (this._branches.map(b => b.name === name)) {
            return this._branches.map(b => b.name === name)
        } else {
            return null
        }
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