// Given a client makes a deposit of 1000 on 10-01-2012
// And a deposit of 2000 on 13-01-2012
// And a withdrawal of 500 on 14-01-2012
// When she prints her bank statement
// Then she would see

// date       || credit  || debit  || balance
// 14/01/2012 ||         || 500.00 || 2500.00
// 13/01/2012 || 2000.00 ||        || 3000.00
// 10/01/2012 || 1000.00 ||        || 1000.00

const Bank = require("../src/bank.js")

describe("Bank Account Statement",() => {
    it("Print a statement to show clients desposits and withdrawals, including a date", () => {
        const bank = new Bank();
        bank.deposit(1000, "10-01-2012");
        bank.deposit(2000, "13-01-2012");
        bank.withdraw(500, "14-01-2012");
        const expected =
          "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00";
    
        expect(bank.printStatement()).toEqual(expected);
});
    // Test 1 depositing Money into the account
    
    it("Deposit Money to Bank",() => {
        const bank = new Bank()
        bank.deposit(1000, "10/01/2012")

        expect(bank.balance).toEqual(1000)
        expect(bank.transactions.length).toEqual(1)
        

    })

    //Test 1 Depositing Muliply amounts into the account
    it("Deposit Money to Bank",() => {
        const bank = new Bank()
        bank.deposit(1000, "10/01/2012")
        bank.deposit(2000, "11/01/2012")

        expect(bank.balance).toEqual(3000)
        expect(bank.transactions.length).toEqual(2)

    })

    //Test 2 Withdrawing money 

    it("Withdrawing Money from Bank account",() => {
        const bank = new Bank()
        bank.deposit(3000, "10/01/2012")
        bank.withdraw(500, "11/01/2012")

        expect(bank.balance).toEqual(2500)
        expect(bank.transactions.length).toEqual(2)
    })
    //Test 2 withdraw muliple times

    it("Withdrawing Money from Bank account Mulitple times",() => {
        const bank = new Bank()
        bank.deposit(3000, "10/01/2012")
        bank.withdraw(500, "11/01/2012")
        bank.withdraw(200, "11/01/2012")
        
        expect(bank.balance).toEqual(2300)
        expect(bank.transactions.length).toEqual(3)
    })


})