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
    addBranch(branch: Branch): true | false {
        if (this.checkBranch(branch)) {
            return false
        } else {
            if (this._branches.push(branch)) {
                return true
            } else {
                console.log("error with adding branch")
                return false
            }       
        }
    }
    addCustomer(branch: Branch, customer: Customer): true | false {
        const id = customer.id
        if (this.checkBranch(branch)) {
            if (!branch.findCustomer(id)) {
                branch.addCustomer(customer)
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    addCustomerTransaction(branch: Branch, customerId: string, amount: number): true | false {
        const customer = branch.findCustomer(customerId)
        if (customer) {
            return customer.addTransaction(amount)
        } else {
            return false
        }
    }
    findBranchByName(name: string): Branch[] | null {
        const foundBranch = this._branches.filter(b => b.name.toLowerCase().includes(name.toLowerCase()))
        return foundBranch ? foundBranch : null
    }
    checkBranch(branch: Branch): true | false {
        if (this._branches.find(b => b === branch)) {
            return true
        } else {
            return false
        }
    }
    listCustomers(branch: Branch, boolean: boolean): true | false {
        if (this.checkBranch(branch)) {
            if (boolean) {
                branch.customers.forEach(e => {
                    console.log(e)
                })
            }
            return true
        } else {
            return false
        }
    }
}