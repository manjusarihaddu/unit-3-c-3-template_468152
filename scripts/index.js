// Store the wallet amount to your local storage with key "amount"



let amount = 0 ;

function addWallet () {
    let money = document.getElementById("amount").value ;
    money =+money;

    amount = amount+ money ;

     localStorage.setItem("amount", JSON.stringify(amount)) ;
    console.log(amount);

    let wallet = document.getElementById("wallet") ;
    wallet.innerText=amount ;
}