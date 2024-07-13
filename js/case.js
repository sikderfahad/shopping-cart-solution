// Case product operations
const casePrice = 59;
document.getElementById("case_plus_btn").addEventListener("click", () => {
  updateInputField("case_input_field", true);
  updatePrice("case_input_field", "case_price_element", casePrice);
  isItemZero("case_input_field", "case_minus_btn");
  updateFinalTotalPrice();
});

document.getElementById("case_minus_btn").addEventListener("click", () => {
  updateInputField("case_input_field", false);
  updatePrice("case_input_field", "case_price_element", casePrice);
  isItemZero("case_input_field", "case_minus_btn");
  updateFinalTotalPrice();
});

document.getElementById("case_remove_btn").addEventListener("click", () => {
  setElementValue("case_price_element", 0);
  removeItem("case_remove_btn");
  updateFinalTotalPrice();
});
