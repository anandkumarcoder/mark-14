const initialPrice = document.querySelector("#initialPrice");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#currentPrice");
const calculateBtn = document.querySelector("#calculate-btn");
const outputDiv = document.querySelector("#output");

calculateBtn.addEventListener("click", clickHandler);

function clickHandler(e) {
    e.preventDefault();
    var ip = Number(initialPrice.value)
    var qty = Number(quantity.value)
    var sp = Number(currentPrice.value)

    if (ip === 0 || qty === 0 || sp === 0) {
        showMessage("fields cannot be empty")
    } else {
        calculateProfitAndLoss(ip, qty, sp)
    }




}





function calculateProfitAndLoss(initialPrice, quantity, currentPrice) {




    if (currentPrice > initialPrice) {
        var profit = (currentPrice - initialPrice) * quantity;
        var profitPercentage = (profit / initialPrice) * 100;


        showMessage(`hey you made a profit of ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)} %`)

    } else if (initialPrice > currentPrice) {
        var loss = (initialPrice - currentPrice) * quantity;


        var lossPercentage = (loss / initialPrice) * 100;

        showMessage(`hey you made a loss of ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)} %`)

    }
    // else if ( initialPrice=currentPrice){
    //      showMessage("you have not made profit or loss")//
    else {
        showMessage("no pain no gain")
    }


}


function showMessage(message) {
    outputDiv.innerHTML = message;
}