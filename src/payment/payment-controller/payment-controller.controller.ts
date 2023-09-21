import { Body, Controller, Post, Req } from '@nestjs/common';
import { PaymentService } from '../payment_service/payment.service';

@Controller('payment-controller')
export class PaymentControllerController{
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create')
  async createPayment(): Promise<any> {
    try {
      
      const payment = await this.paymentService.createPayment();
      console.log('Payment Response:', payment);
      return { success: true, payment };
    } catch (error) {
      console.error('Error:', error);
      return { success: false, error: 'Failed to create payment' };
    }
  }
  //create debit card payment
  @Post('createdebit')
  async createDebit(@Body() paymentData: any): Promise<any> {
    try {
      console.log('Request Body:', paymentData);
      const payment = await this.paymentService.paypaldebit(paymentData);
      console.log('Payment Response:', payment);
      return { success: true, payment };
    } catch (error) {
      console.error('Error:', error);
      return { success: false, error: 'Failed to create payment' };
    }
  }
}

