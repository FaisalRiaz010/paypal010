// payment.service.ts

import { Injectable } from '@nestjs/common';
import * as braintree from 'braintree';

@Injectable()
export class PaymentService {
  private readonly gateway: braintree.BraintreeGateway;

  constructor() {
    this.gateway = new braintree.BraintreeGateway({
      environment: braintree.Environment.Sandbox, // Use 'Production' for live transactions
      merchantId: '8dbhwfv7nr28bh6s',
      publicKey: 'fmb8b97vvms9ccc8',
      privateKey: '4f0fa63c4417ce3c3bf78c91fd7c31ef',
    });
  }

  async processPayment(paymentData: any): Promise<any> {
    const amount = paymentData.amount; // The payment amount

    const transactionRequest: braintree.TransactionRequest = {
      amount,
      creditCard: {
        number: paymentData.cardNumber,
        expirationDate: paymentData.expirationDate, // Format: MM/YYYY
        cvv: paymentData.cvv,
      },
      options: {
        submitForSettlement: true, // Submit the transaction for settlement immediately
      },
    };

    try {
      const result = await this.gateway.transaction.sale(transactionRequest);

      if (result.success) {
        console.log(result);
        return { success: true, transactionId: result.transaction.id };
      } else {
        return { success: false, errorMessage: result.message };
      }
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }
}
