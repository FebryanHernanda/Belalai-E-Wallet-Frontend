const formatAmountField = (number) => {
  if (!number) return "";
  return "Rp " + new Intl.NumberFormat("id-ID").format(number);
};

export default formatAmountField;
