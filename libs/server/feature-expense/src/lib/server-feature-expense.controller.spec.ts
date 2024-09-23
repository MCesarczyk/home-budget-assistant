import { Test } from '@nestjs/testing';
import { ServerFeatureExpenseController } from './server-feature-expense.controller';
import { ServerFeatureExpenseService } from './server-feature-expense.service';

describe('ServerFeatureExpenseController', () => {
  let controller: ServerFeatureExpenseController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureExpenseService],
      controllers: [ServerFeatureExpenseController],
    }).compile();

    controller = module.get(ServerFeatureExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
