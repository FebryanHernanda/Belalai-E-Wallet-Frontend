import BRILogo from "/public/icon/bri.svg";
import BCALogo from "/public/icon/bca.svg";
import DANALogo from "/public/icon/dana.svg";
import GopayLogo from "/public/icon/gopay.svg";
import OVOLogo from "/public/icon/ovo.svg";

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
