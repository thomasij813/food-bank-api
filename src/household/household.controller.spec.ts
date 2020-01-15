import { HouseholdController } from './household.controller';
import { HouseholdService } from './household.service';

describe('Household Controller', () => {
  let controller: HouseholdController;
  let service: HouseholdService;

  beforeEach(async () => {
    service = new HouseholdService();
    controller = new HouseholdController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
