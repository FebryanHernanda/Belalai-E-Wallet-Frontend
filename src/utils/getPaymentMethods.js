import BRILogo from "/src/assets/icon/bri.svg";
import BCALogo from "/src/assets/icon/bca.svg";
import DANALogo from "/src/assets/icon/dana.svg";
import GopayLogo from "/src/assets/icon/gopay.svg";
import OVOLogo from "/src/assets/icon/ovo.svg";

/* Provider Icon Data */
const providerLogo = {
  "Bank Rakyat Indonesia": BRILogo,
  DANA: DANALogo,
  "Bank Central Asia": BCALogo,
  Gopay: GopayLogo,
  OVO: OVOLogo,
};

const getPaymentMethods = (paymentMethods) => {
  if (!paymentMethods) return null;

  return providerLogo[paymentMethods] || null;
};

export default getPaymentMethods;
