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
    inputId.value = "";
    return numberValue;
  }
}

//getting the values of innertext
const totalExpenseText = document.getElementById("total-expense");
const totalExpense = totalExpenseText.innerText;

const mainBalanceText = document.getElementById("balance");
const mainBalance = mainBalanceText.innerText;

const savingAmountText = document.getElementById("saving-amount");
const savingAmount = savingAmountText.innerText;

const remainingBalanceText = document.getElementById("rmn-balance");
const remainingBalance = remainingBalanceText.innerText;

document.getElementById("calculate-btn").addEventListener("click", function () {
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

document.getElementById("save-btn").addEventListener("click", function () {
  const savings = (getInputval(mainIncomeText) * getInputval(saveInputText)) / 100;
  savingAmountText.innerText = savings;

  remainingBalanceText.innerText = remainingBal() - savings;
});
