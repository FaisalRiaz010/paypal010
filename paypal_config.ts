
import * as paypal from 'paypal-rest-sdk';

paypal.configure({
  mode: 'sandbox',
  client_id: 'AfTkRnzbHRH6EmfxRooV6h38soXzg9hqjq0XKPwzu1wjEZjWR1kmjuCZ4rCT3wuoxO2KvqbiJ6pKLxor',
  client_secret: 'EKUuJnpd_U-OT71wUpmzxhODsMn212gys58JcTVTz6dOFWe84rQLzzBs6OP138rKrGTOuGlTSbLKaScd',
});
console.log('PayPal SDK Configuration:', paypal.configure);
export default paypal;
