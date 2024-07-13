function getInputFieldValue(inputId) {
  const inputValue = document.getElementById(inputId).value;
  return +inputValue;
}

function getTextElementValue(textId) {
  const textValue = document.getElementById(textId).innerText;
  return +textValue;
}

function setElementValue(elementId, price) {
  let newPrice = price;
  let targetElement = document.getElementById(elementId);
  if (price < 0) {
    newPrice = 0;
  } else {
    newPrice = price;
  }
  targetElement.innerText = newPrice;
}

// Update a single product total quantity price, when each item will +/-
function updatePrice(quantityFieldId, priceElementId, singleProductPrice) {
  const getProductQuantity = getInputFieldValue(quantityFieldId);
  const newPrice = getProductQuantity * singleProductPrice;
  setElementValue(priceElementId, newPrice);
}

// update input filed value, when click plus/minus button
function updateInputField(inputId, isIncrement) {
  let getInputField = document.getElementById(inputId);
  const getInputFieldValue = getInputField.value;
  if (+getInputFieldValue < 0) {
    getInputField.value = 0;
  }

  if (isIncrement) {
    const newValue = +getInputFieldValue + 1;
    getInputField.value = newValue;
  } else {
    const newValue = +getInputFieldValue - 1;
    getInputField.value = newValue;
  }
}

// Wrap updateTotalPrice() function for code DRY
function updateFinalTotalPrice() {
  updateTotalPrice(
    "phone_price_element",
    "case_price_element",
    "subTotal",
    "final_total"
  );
}

// update subtotal & total price
function updateTotalPrice(
  totalPhonePriceId,
  totalCasePriceId,
  subTotalId,
  finalTotalId
) {
  const tax = 0.1;
  const totalPhonePrice = getTextElementValue(totalPhonePriceId);
  const totalCasePrice = getTextElementValue(totalCasePriceId);
  const subTotal = totalPhonePrice + totalCasePrice;
  const finalTotal = subTotal * tax + subTotal;

  setElementValue(subTotalId, parseFloat(subTotal).toFixed(2));
  setElementValue(finalTotalId, parseFloat(finalTotal).toFixed(2));
}

// remove selected item
function removeItem(elementId) {
  const targetElement = document.getElementById(elementId);
  targetElement.parentNode.parentNode.parentNode.style.display = "none";
}

// Prevent select item less than 0
function isItemZero(inputFieldId, targetBtnId) {
  const inputValue = getInputFieldValue(inputFieldId);
  const minusBtn = document.getElementById(targetBtnId);
  if (inputValue < 1) {
    minusBtn.setAttribute("disabled", true);
  } else {
    minusBtn.removeAttribute("disabled");
  }
}
