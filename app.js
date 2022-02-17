const mainIncomeText = document.getElementById("income");
const mainIncome = parseFloat(mainIncomeText.value);

const foodText = document.getElementById("food");
const food = parseFloat(foodText.value);

const rentText = document.getElementById("rent");
const rent = parseFloat(rentText.value);

const clothesText = document.getElementById("clothes");
const clothes = parseFloat(clothesText.value);

const totalExpenseText = document.getElementById("total-expense");
const totalExpense = totalExpenseText.innerText;

const mainBalanceText = document.getElementById("balance");
const mainBalance = mainBalanceText.innerText;

const saveInputText = document.getElementById("save-input");
const saveInput = parseFloat(saveInputText.value);

const savingAmountText = document.getElementById("saving-amount");
const savingAmount = savingAmountText.innerText;

const remainingBalanceText = document.getElementById("rmn-balance");
const remainingBalance = remainingBalanceText.innerText;

document.getElementById("calculate-btn").addEventListener("click", function () {
  main();
  rmnBal();
});

function main() {
  const totalSpendMoney =
    parseFloat(foodText.value) + parseFloat(rentText.value) + parseFloat(clothesText.value);

  totalExpenseText.innerText = totalSpendMoney;

  return totalSpendMoney;
}

function rmnBal() {
  const remainingMoney = parseFloat(mainIncomeText.value) - main();
  mainBalanceText.innerText = remainingMoney;

  return remainingMoney;
}

document.getElementById("save-btn").addEventListener("click", function () {
  const savings = (parseFloat(mainIncomeText.value) * parseFloat(saveInputText.value)) / 100;

  savingAmountText.innerText = savings;

  remainingBalanceText.innerText = rmnBal()-savings;
});
