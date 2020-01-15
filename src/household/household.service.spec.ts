import { HouseholdService } from './household.service';

describe('HouseholdService', () => {
  let service: HouseholdService;

  beforeEach(async () => {
    service = new HouseholdService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('Should return an array', () => {
      expect(service.findAll()).toEqual([]);
    });
  });

  describe('create', () => {
    it('Should create a household from a createHouseholdDto', () => {
      const createHouseholdDto = {
        email: 'thomasij813@gmail.com',
        first: 'Thomas',
        last: 'Johnson',
        street1: '106 14th Ave E',
        city: 'Seattle',
        state: 'WA',
        zip: '98112',
      };

      const household = service.create(createHouseholdDto);

      expect(household).toHaveProperty('id');
      Object.keys(createHouseholdDto).forEach(key => {
        const val = createHouseholdDto[key];
        expect(household).toHaveProperty(key, val);
      });

      expect(service.findAll()).toEqual([household]);
    });
  });
});
