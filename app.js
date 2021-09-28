const costPrice = document.querySelector("#purchase-price"); //element-price-purchased
const quantity = document.querySelector("#quantity-stocks");//element-no of stocks
const sellingPrice = document.querySelector("#current-price");// element-current market price
const calculateButton = document.querySelector("#btn");//button
const message = document.querySelector("#message");//invalid-input-message
const output = document.querySelector("#output");//for-output-text
const currency = document.querySelector("#currency")
calculateButton.addEventListener("click",clickHandler);

function calculateProfit(){
    var profit =  sellingPrice.value - costPrice.value;
    var profitPercent = ((profit/costPrice.value)*100).toFixed(2); //it will fix to 2 decimal number
    var totalProfit = (profit*quantity.value).toFixed(2);
    return [totalProfit,profitPercent];
    

}
function calculateLoss(){
    var loss =  costPrice.value-sellingPrice.value; 
    var lossPercent = ((loss/costPrice.value)*100).toFixed(2);
    var totalLoss = (loss*quantity.value).toFixed(2);
    return [totalLoss,lossPercent];
}

function clickHandler(e){
  
    message.textContent="";//clears previous
    output.textContent="";
    calculateProfitAndLoss();
}

function calculateProfitAndLoss(){

    var purchasePrice = Number(costPrice.value);
    var currentPrice = Number(sellingPrice.value);
    var quantityStocks = Number(quantity.value);

    console.log(purchasePrice,quantityStocks,currentPrice);
    if((purchasePrice>0) && (currentPrice>0) && (quantityStocks>0)){
           if(currentPrice==purchasePrice){//No-profit-loss
                output.style.color="grey"
                output.textContent = "No Profit-No Loss";
           }
           else if(currentPrice>purchasePrice){//profit
                output.style.color="green"
                var profitable = calculateProfit();
                var netProfit = profitable[0];
                var percentProfit = profitable[1];
                output.textContent=`Hurray! Your Net Profit is ${currency.value} ${netProfit}  or % ${percentProfit}`;
           }
           else{//loss
                output.style.color="purple"
                var lossable = calculateLoss();
                var netLoss = lossable[0];
                var percentLoss = lossable[1];
                output.textContent=`Ohh! your Net Loss is ${currency.value} ${netLoss}  or % ${percentLoss}`; 
           }
    }
    else{
        output.textContent = "Invalid Input: Please fill valid Number greater than 0";
        output.style.color="red"
        
    }

}
