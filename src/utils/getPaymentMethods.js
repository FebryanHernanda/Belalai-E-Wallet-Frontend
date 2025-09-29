import BRILogo from "/icon/bri.svg";
import BCALogo from "/icon/bca.svg";
import DANALogo from "/icon/dana.svg";
import GopayLogo from "/icon/gopay.svg";
import OVOLogo from "/icon/ovo.svg";

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
