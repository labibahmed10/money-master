//geting the values of input with function
const mainIncomeText = document.getElementById("income");

const foodText = document.getElementById("food");

const rentText = document.getElementById("rent");

const clothesText = document.getElementById("clothes");

function getInputval(inputId) {
  if (isNaN(inputId.value) || parseInt(inputId.value) < 0) {
    document.getElementById("error1").classList.remove("d-none");
    return;
  } else if (inputId.value == "") {
    document.getElementById("error2").classList.remove("d-none");
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
  const remainingMoney = getInputval(mainIncomeText) - mainCalculation();
  mainBalanceText.innerText = remainingMoney;
});

function mainCalculation() {
  const totalSpendMoney = getInputval(foodText) + getInputval(rentText) + getInputval(clothesText);
  totalExpenseText.innerText = totalSpendMoney;

  return totalSpendMoney;
}

document.getElementById("save-btn").addEventListener("click", function () {
  const saveInputText = document.getElementById("save-input");
  const saveInput = saveInputText.value;

  const mainBalanceText = document.getElementById("balance");

  if (isNaN(saveInput) || saveInput < 0) {
    document.getElementById("error3").classList.remove("d-none");
    return;
  } else {
    const savings = (mainIncomeText.value * saveInputText.value) / 100;
    savingAmountText.innerText = savings;

    remainingBalanceText.innerText = parseFloat(mainBalanceText.innerText) - savings;
  }
});
