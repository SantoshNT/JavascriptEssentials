class Account{
    constructor(accName,Name,accType,Amt,minBal){
        this.accName = accName;
        this.Name = Name;
        this.accType = accType;
        this.Amt = Amt;
        this.minBal = minBal;
    }   
}
class Transaction extends Account{
    constructor(accName,Name,accType,Amt,minBal,deposit,withdrawAmount,balan){
        super(accName,Name,accType,Amt,minBal);
        this.deposit = deposit;
        this.withdrawAmount = withdrawAmount;
        this.balan = this.Amt - this.withdrawAmount;
        this.depositBal = this.Amt + this.deposit;
    }   
   createAccount(){
    let accounts = [];
    let account = new Account('Student','kumar','Savings',1000,50,100,200);
    accounts.push(account)
    console.log(accounts);
   }
   accDetails(){
        console.log("Account Name:"+this.accName);
        console.log("User Name:"+this.Name);
        console.log("Account Type:"+this.accType);
        console.log("Amount:"+this.Amt);
        console.log("minimum Balance:"+this.minBal);
   }
   balance(){
    //    this.balan = this.Amt - this.withdrawAmount;
       console.log("balance:"+this.balan);
   }
   depositAmount(){
       console.log("Deposit AMount:" +this.depositBal)
   }
   withdraw(){
       console.log("withdraw amount:"+this.withdrawAmount)
        // if(this.withdrawAmount>this.minBal)
        // this.balance();
   }
   details(){
       console.log(`Account Name:${this.accName}\nUser Name:${this.Name}\nAccount Type:${this.accType}\nAmount:${this.Amt}\nMinimus Balance:${this.minBal}\nDeposit Amount:${this.deposit}\nWithdrawal Amount:${this.withdrawAmount}\nBalance:${this.balan}`)
   }
}
let users = new Transaction('Student','kumar','Savings',100000,1000,5000,2000);
 //users.details();
// users.withdraw();
// users.depositAmount();
users.balance();
users.depositAmount();