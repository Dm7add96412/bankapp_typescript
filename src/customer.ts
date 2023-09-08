export interface Transaction {
    amount: number
    date: Date
}

export class Customer {
    private _name: string
    private _id: string = '1'
    private _transactions: Transaction[]

    constructor(name: string) {
        this._name = name
        this._transactions = []
        this._id
    }

    get name() {
        return this._name
    }
    get id() {
        return this._id
    }
    get transaction() {
        return this._transactions
    }
    get balance() {
        return true
    }
    addTransaction(amount: number) {
        return true
    }
}