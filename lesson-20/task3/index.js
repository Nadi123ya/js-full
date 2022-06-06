export class Wallet {
    #balance = 0;
    getBalance () {
        return this.#balance;
    }
    deposit (amount) {
       return this.#balance += amount;
    }
    withdraw (amount) {
        if(amount > this.#balance){
            console.log("No enough funds");
            return;
        }
       return this.#balance -=amount;
    }
}
const wallet = new Wallet;
console.log(wallet.deposit(45));
wallet.withdraw(48);
console.log(wallet.deposit(112));
console.log(wallet.withdraw(22));

