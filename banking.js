// handle deposit button event
document.getElementById("deposit-button").addEventListener('click',function () {
        // get the amount deposited
     const depositInput=document.getElementById("deposit-input");
     const newDepositAmountText=depositInput.value;
     const newDepositAmount=parseFloat(newDepositAmountText);
    // update deposit total
     const depositTotal=document.getElementById('deposit-total');
     const previousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText);
    const newDepositTotal=previousDepositAmount +newDepositAmount;
    depositTotal.innerText=newDepositTotal;
    // clear deposit input
    depositInput.value="";

// get balance total
const balanceTotal=document.getElementById('balance-total');
const balalnceTotalText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balalnceTotalText);
const newBalanceTotal=previousBalanceTotal + newDepositAmount;
balanceTotal.innerText=newBalanceTotal;
})

// handle withdraw button event
// catch withdraw button
document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawInput=document.getElementById('withdraw-input');
    const newWithdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountText);
    // update withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawText);
    const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
    // clear withdraw input
    withdrawInput.value="";

    // get balance after withdraw
    const balanceTotal=document.getElementById('balance-total');
    const balalnceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balalnceTotalText);
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;
})