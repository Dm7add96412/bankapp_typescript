import { Customer } from "./customer"
import { Transaction } from "./customer"

export class Branch {
    private _name: string
    private _customers: Customer[]

    constructor(name: string) {
        this._name = name
        this._customers = []
    }

    get name() {
        return this._name
    }
    get customers() {
        return this._customers
    }

    addCustomer(customer: Customer) {
        if (this._customers.find(c => c === customer )) {
            return false
        } else {
            try {
                this._customers.push(customer)
                return true}
            catch (e: unknown) {
                return false
            }
        }
    }
    addCustomerTransaction(customerId: string, amount: number) {
        const customer = this.findCustomer(customerId)
        if (customer) {
            return customer.addTransaction(amount)
        } else {
            return false
        }
        
    }
    findCustomer(id: string) {
        if (this._customers.find(c => c.id === id )) {
            return this._customers.find(c => c.id === id)
        } else {
            return null
        }
    }
}