# TypeScript - Banking app

- Banking app created with the requirements mentioned below
- Check the scripts in `package.json` and installation at the end of this document

## Create a simple banking application

Implement the following classes, interface, and codes (you can decide which file to put each type, but do not write all the types in `index.ts` or `bank.ts`). All the properties must be kept private, while you can make the methods as public

1. Class Bank

   - It has two properties: `name` (string), `branches` (array of type `Branch[]``). Make these properties private.

   - A constructor that takes an argumment name (`string``). It initialises name and instantiates branches as empty array.

   - And the following methods:

     - `get branches()`: getter for `branches`

     - `get name()`, getter for name.

     - `addBranch()`, has one parameter of type `Branch` and returns a boolean. This function will add branch into array `branches`. It returns true if the branch was added successfully or false otherwise. Each branch is supposed to be added once only.

     - `addCustomer()`, has 2 parameters: branch and customer and returns a boolean. It returns true if the customer is added successfully to the branch of the bank or false otherwise. Each customer can be added only once to a branch.

     - `addCustomerTransaction()`, has three parameters: branch, customer id, amount of transaction and returns a boolean. It returns true if the customers transaction is added successfully or false otherwise.

     - `findBranchByName()`, has one parameter of type string (branch's name) and returns list of matched branches or null otherwise.

     - `checkBranch()`, has one parameter of type Branch and returns true if branch belongs to bank or false otherwise.

     - `listCustomers()`, has two parameters, branch and boolean and returns a boolean. Return true if the branch exists or false otherwise. This method prints out a list of customers with transaction details if second parameter is true.

2. Class Branch

   - It has two properties, a string called `name` and an array called `customers`. Array `customers` should hold objects of type Customer. Make these properties private

   - A constructor that takes a string (name of the branch). It initialises name and instantiates customers as an emty array.

   - And 5 methods, they are (their functions are in their names):

     - `get name()`, getter for name.

     - `get customers()`, getter for customers.

     - `addCustomer()`, has a parameter of type Customer and returns a boolean. Returns true if the customer was added successfully or false otherwise (each customer should be added once only).

     - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.

     - `findCustomer()`, has one parameter of type string (`id` of customer) and returns a customer. Return the customer if they exist, null otherwise.

3. Class Customer

   - It has 3 properties, string `name`, string `id`, and an array that holds objects of type Transaction called `transactions`. Make these properties private

   - A constructor that takes only a parameter of type string (name of customer). It initialises name and instantiates transactions as empty array. `id` should be initialized to be an unique string.

   - And 5 methods:

     - `get name()`, getter for name.

     - `get id()`, getter for id.

     - `get transactions()`, getter for transactions.

     - `get balance()`, return the current balance from the transactions.

     - `addTransaction()`, has one parameter of type number and return true if transaction is added sucessfully. You need to make sure that balance cannot be negative. This function should add the successful transaction into transactions array.

4. Interface Transaction

   - It has 2 properties, a number `amount`, and a Date called `date`. `date` refers to the time that transaction has been created.

## Installation

1. After clone the project from your forked repo, run `npm install` and `npm i --save-dev ts-node nodemon`
2. Run `npm run watch` to see code running in watch mode, or check `package.json` for extra scripts
