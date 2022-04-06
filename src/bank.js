class Bank{
    constructor(){
        this.transactions = []
        this.balance = 0
    }

    deposit(amount,date){
        
        this.balance += amount
        const transactions = {
            amount: amount,
            date: date,
            balance: this.balance,
            type: "credit"
        }
        this.transactions.push(transactions)

    }

    withdraw(amount,date){
        this.balance -= amount
        const transactions = {
            amount: amount,
            date: date,
            balance: this.balance,
            type: "debit"
        }
        this.transactions.push(transactions)
    }

    printStatement() {
    //     const statement = new Statement(this.transactions);
    //     return statement.print();
    //   }
     const statementLines = [];
     for (let i = 0; i < this.transactions.length; i++) {
         const transaction = this.transactions[i];
         if (transaction.type === "credit") {
             const line = `${transaction.date.replace(
              /-/g,
              "/"
            )} || ${transaction.amount.toFixed(
              2
            )} || || ${transaction.balance.toFixed(2)}`;
            statementLines.push(line);
          } else {
            const line = `${transaction.date.replace(
              /-/g,
              "/"
            )} || || ${transaction.amount.toFixed(
              2
            )} || ${transaction.balance.toFixed(2)}`;
            statementLines.push(line);
          }
        }
        const reversedStatementLines = statementLines.reverse();
    
        reversedStatementLines.unshift("date || credit || debit || balance");
        return statementLines.join("\n");
      }
}

module.exports = Bank;