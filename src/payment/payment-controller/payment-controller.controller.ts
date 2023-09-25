// payment.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from '../payment_service/payment.service';
@Controller('payment-controller')
export class PaymentControllerController{
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/debit-card')
  async processPayment() {
    const paymentResult = await this.paymentService.processPayment();
    return paymentResult;
}
}
