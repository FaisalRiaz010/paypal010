import { Test, TestingModule } from '@nestjs/testing';
import { PaymentControllerController } from './payment-controller.controller';

describe('PaymentControllerController', () => {
  let controller: PaymentControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentControllerController],
    }).compile();

    controller = module.get<PaymentControllerController>(PaymentControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
