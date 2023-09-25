// payment.dto.ts
export class PaymentDto {
    readonly cardType: string; // Visa, MasterCard, etc.
    readonly cardNumber: string; // Credit card number
    readonly expireMonth: number; // Expiration month (e.g., 1 for January)
    readonly expireYear: number; // Expiration year (e.g., 2025)
    readonly cvc: string; // Card verification value (CVV)
    readonly cardHolderFirstName: string; // First name of the cardholder
    readonly cardHolderLastName: string; // Last name of the cardholder
    readonly amount: number; // Payment amount
    readonly currency: string; // Payment currency (e.g., USD)
    readonly description: string; // Payment description
  }
  