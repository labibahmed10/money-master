//geting the values of input with function
const mainIncomeText = document.getElementById("income");

const foodText = document.getElementById("food");

const rentText = document.getElementById("rent");

const clothesText = document.getElementById("clothes");

const saveInputText = document.getElementById("save-input");

function getInputval(inputId) {
  if (isNaN(inputId.value) || parseInt(inputId.value) < 0) {
    document.getElementById("error1").classList.remove("d-none");
    inputId.value = "";
    return;
  } else {
    const numberValue = parseFloat(inputId.value);
    return numberValue;
  }
}

//getting the values of innertext
const totalExpenseText = document.getElementById("total-expense");

const mainBalanceText = document.getElementById("balance");

const savingAmountText = document.getElementById("saving-amount");

const remainingBalanceText = document.getElementById("rmn-balance");

document.getElementById("calculate-btn").addEventListener("click", function () {
  if (mainCalculation() > getInputval(mainIncomeText)) {
    document.getElementById("error2").classList.remove("d-none");
    return;
  }
  mainCalculation();
  remainingBal();
});

function mainCalculation() {
  const totalSpendMoney = getInputval(foodText) + getInputval(rentText) + getInputval(clothesText);
  totalExpenseText.innerText = totalSpendMoney;

  return totalSpendMoney;
}

function remainingBal() {
  const remainingMoney = getInputval(mainIncomeText) - mainCalculation();
  mainBalanceText.innerText = remainingMoney;

  return remainingMoney;
}

// Saving part at last
document.getElementById("save-btn").addEventListener("click", function () {
  if (isNaN(getInputval(saveInputText)) || getInputval(saveInputText) < 0) {
    document.getElementById("error1").classList.add("d-none");
    document.getElementById("error3").classList.remove("d-none");
    saveInputText.value = "";
    return;
  }
  if ((getInputval(mainIncomeText) * getInputval(saveInputText)) / 100 > remainingBal()) {
    document.getElementById("error4").classList.remove("d-none");
    saveInputText.value = "";
    return;
  } else {
    const savings = (getInputval(mainIncomeText) * getInputval(saveInputText)) / 100;
    savingAmountText.innerText = savings;

    remainingBalanceText.innerText = remainingBal() - savings;
  }
});
