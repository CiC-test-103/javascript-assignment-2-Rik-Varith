// 🏦 Bank and Account System 
// Bank Class: Manages multiple accounts
class Bank {
    constructor() {
        this.accounts = []; 
    }

// Add methods here:
// Example: createAccount(name, initialDeposit)

    createAccount(name, initialDeposit) {
        const newAccount = new BankAccount(name, initialDeposit);
        this.accounts.push(newAccount);
        return newAccount

    }
}

// Account Class: Represents a single user's account

class BankAccount {
    constructor(accountHoldername, balance) {
        this.accountHoldername = accountHoldername;
        this.balance = balance;
        this.transactionHistory = [];
        
    }

// Add methods here:
// Example: deposit(amount) 
// // example data to be stored in transactionHistory { transactionType: 'Deposit', amount: 500 } 
// Example: withdraw(amount)
// example data to be stored in transactionHistory { transactionType: 'Withdrawal', amount: 200 }

    deposit(amount) {
        if (amount <= 0) {
            console.log('invalid amount');
        }
        else {
            this.balance += amount;
            this.transactionHistory.push({transactionType: 'Deposit', amount});
            console.log(`Deposited $${amount} completed. Current balance for ${this.accountHoldername}: $${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > this.balance){
        console.log ('Insufficient funds.');
        }
        else {
            this.balance -= amount;
            this.transactionHistory.push({transactionType: 'Withdrawal', amount});
            console.log(`Withdrawal $${amount} completed. Current balance for ${this.accountHoldername}: $${this.balance}`);
        }
}

// Example: transfer(amount, recipientAccount)
// example data to be stored in transactionHistory:
// for account sending { transactionType: 'Transfer', amount: 300, to: recipientName }
// for account recieving { transactionType: 'Received', amount: 300, from: senderName }

    transfer(amount, recipientAccount) {
        if (amount > this.balance) {
            console.log ('Insufficient funds.');
        }
        else {
            this.balance -= amount;
            this.transactionHistory.push ({transactionType: 'Transfer', amount, to: recipientAccount.accountHoldername});
            recipientAccount.balance += amount;
            recipientAccount.transactionHistory.push ({transactionType: 'Received', amount, from: this.accountHoldername})
            console.log(`tranfer $${amount} to ${recipientAccount.accountHoldername} completed, ${this.accountHoldername} Current balance: $${this.balance}`);
        }
    }
// checkBalance()
    checkBalance() {
        console.log(`Current balance for ${this.accountHoldername}: $${this.balance}`);
        return this.balance;        
    }
}
    


//<-------------------------------DO NOT WRITE BELOW THIS LINE------------------------------>

// Function to test bank operations
function testBankOperations() {
    const bank = new Bank();

    // Create new accounts
    const johnAccount = bank.createAccount('John Doe', 1000);
    const janeAccount = bank.createAccount('Jane Doe', 500);
    console.log('Accounts created:', johnAccount, janeAccount);

    // Perform some operations on John's account
    johnAccount.deposit(500);
    johnAccount.withdraw(200);

    // Perform a transfer from John to Jane
    johnAccount.transfer(300, janeAccount);

    // Check balances
    const johnFinalBalance = johnAccount.checkBalance();
    const janeFinalBalance = janeAccount.checkBalance();
    console.log('John\'s balance:', johnFinalBalance);
    console.log('Jane\'s balance:', janeFinalBalance);

    // Return balances for testing
    return { 
        johnFinalBalance, 
        janeFinalBalance, 
        johnTransactionHistory: johnAccount.transactionHistory, 
        janeTransactionHistory: janeAccount.transactionHistory 
    };
}

module.exports = testBankOperations;

//<-------------------------------DO NOT WRITE ABOVE THIS LINE------------------------------>


console.log(testBankOperations());
