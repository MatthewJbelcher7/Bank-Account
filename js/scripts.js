function BankAccount() {
    this.users = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };

// Bank Account constructor function
function BankAccount(name, initialDeposit) {
    this.new-name = name;
    this.balance = initialDeposit;
}

//Deposit method
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}

//Create Account function
function createAccount() {
    const name = document.getElementById("new-name").value;
    const initialDeposit = parseFloat(document.getElementById("initial-deposit"))
    if (name && initialDeposit) {
        account = new BankAccount(name, initialDeposit);
        document.getElementById('register").style display = ')
    }