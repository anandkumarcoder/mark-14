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

    if (ip === 0 || ip <0 || qty === 0 || qty < 0 ||
         sp === 0 || sp < 0 ) {
        showMessageError("fields cannot be empty or less than zero")
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
    
    else {
        showMessage("You have made no profit or loss")
    }


}


function showMessage(message) {
    outputDiv.innerHTML = message;
    outputDiv.style.color = "#1091BC";
    outputDiv.style.fontWeight = "bold"
}

function showMessageError(message){
    outputDiv.innerHTML = message;
    outputDiv.style.color = "red"
    outputDiv.style.fontWeight = "bold"
}