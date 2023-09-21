import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModuleModule } from './payment/payment-module/payment-module.module';
import { PaymentControllerController } from './payment/payment-controller/payment-controller.controller';
import { PaymentService } from './payment/payment_service/payment.service';
@Module({
  imports: [PaymentModuleModule],
  controllers: [AppController, PaymentControllerController],
  providers: [AppService, PaymentService],
})
export class AppModule {}
