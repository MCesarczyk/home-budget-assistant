import { Test } from '@nestjs/testing';
import { ServerFeatureExpenseService } from './server-feature-expense.service';

describe('ServerFeatureExpenseService', () => {
  let service: ServerFeatureExpenseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureExpenseService],
    }).compile();

    service = module.get(ServerFeatureExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
