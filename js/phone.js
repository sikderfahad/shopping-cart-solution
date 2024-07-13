// Phone product operations
const phonePrice = 1219;
document.getElementById("phone_plus_btn").addEventListener("click", () => {
  updateInputField("phone_input_field", true);
  updatePrice("phone_input_field", "phone_price_element", phonePrice);
  isItemZero("phone_input_field", "phone_minus_btn");
  updateFinalTotalPrice();
});

document.getElementById("phone_minus_btn").addEventListener("click", () => {
  updateInputField("phone_input_field", false);
  updatePrice("phone_input_field", "phone_price_element", phonePrice);
  isItemZero("phone_input_field", "phone_minus_btn");
  updateFinalTotalPrice();
});

document.getElementById("phone_remove_btn").addEventListener("click", () => {
  setElementValue("phone_price_element", 0);
  removeItem("phone_remove_btn");
  updateFinalTotalPrice();
});
