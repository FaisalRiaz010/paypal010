import { Controller, Module } from '@nestjs/common';
import { PaymentService } from '../payment_service/payment.service';
import { PaymentControllerController } from '../payment-controller/payment-controller.controller';

@Module({
    providers: [PaymentService],
  controllers: [PaymentControllerController],
  exports: [PaymentService], // Export the payment service
})
export class PaymentModuleModule {}
