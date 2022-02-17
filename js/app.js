//geting the values of input with function--
const mainIncome = document.getElementById("income");

const foodMoney = document.getElementById("food");

const rentMoney = document.getElementById("rent");

const clothesMoney = document.getElementById("clothes");

const savePercentage = document.getElementById("save-input");

//function for input field--
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

//getting the values of innertext--
const totalExpenseText = document.getElementById("total-expense");

const mainBalanceText = document.getElementById("balance");

const savingAmountText = document.getElementById("saving-amount");

const remainingBalanceText = document.getElementById("rmn-balance");

//calculation part of income and balance--
document.getElementById("calculate-btn").addEventListener("click", function () {
  if (mainCalculation() > getInputval(mainIncome)) {
    document.getElementById("error2").classList.remove("d-none");
    return;
  }
  mainCalculation();
  remainingMoney();
});

//total 3 expense--
function mainCalculation() {
  const totalSpendMoney = getInputval(foodMoney) + getInputval(rentMoney) + getInputval(clothesMoney);
  totalExpenseText.innerText = totalSpendMoney;

  return totalSpendMoney;
}

//remaining balance--
function remainingMoney() {
  const moneyRemaining = getInputval(mainIncome) - mainCalculation();
  mainBalanceText.innerText = moneyRemaining;

  return moneyRemaining;
}

// Saving part at last--
document.getElementById("save-btn").addEventListener("click", function () {
  if (isNaN(getInputval(savePercentage)) || getInputval(savePercentage) < 0) {
    document.getElementById("error1").classList.add("d-none");
    document.getElementById("error3").classList.remove("d-none");
    savePercentage.value = "";
    return;
  }
  if ((getInputval(mainIncome) * getInputval(savePercentage)) / 100 > remainingMoney()) {
    document.getElementById("error4").classList.remove("d-none");
    savePercentage.value = "";
    return;
  } else {
    const savings = (getInputval(mainIncome) * getInputval(savePercentage)) / 100;
    savingAmountText.innerText = savings;

    remainingBalanceText.innerText = remainingMoney() - savings;
  }
});
