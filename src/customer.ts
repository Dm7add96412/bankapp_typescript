export interface Transaction {
    amount: number
    date: Date
}

export class Customer {
    private _name: string
    private _id: string
    private _transactions: Transaction[]

    constructor(name: string) {
        this._name = name
        this._transactions = []
        this._id = this.generateUniqueId()
    }

    private generateUniqueId(): string {
        const timestamp = Date.now().toString(16)
        const randomPart = Math.floor(Math.random() * 1000000).toString(16)
        return timestamp + randomPart
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
    get balance(): number {
        let sum = 0
        this._transactions.forEach(e => {
            sum += e.amount
        })
        return sum
    }
    addTransaction(amount: number): true | false {
        const transaction = {
            amount: amount,
            date: new Date()
        }
        let cbalance = this.balance
        if (cbalance + amount >= 0) {
            this._transactions.push(transaction)
            return true
        } else {
            return false
        }
    }
}