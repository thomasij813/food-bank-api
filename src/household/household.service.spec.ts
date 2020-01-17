import { HouseholdService } from './household.service';
import { CreateHouseholdDto } from './dto/create-household.dto';

describe('HouseholdService', () => {
  let service: HouseholdService;
  let createHouseholdDto: CreateHouseholdDto;

  beforeEach(async () => {
    service = new HouseholdService();
    createHouseholdDto = {
      email: 'thomasij813@gmail.com',
      first: 'Thomas',
      last: 'Johnson',
      street1: '106 14th Ave E',
      city: 'Seattle',
      state: 'WA',
      zip: '98112',
    };
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
      const household = service.create(createHouseholdDto);

      expect(household).toHaveProperty('id');
      Object.keys(createHouseholdDto).forEach(key => {
        const val = createHouseholdDto[key];
        expect(household).toHaveProperty(key, val);
      });

      expect(service.findAll()).toEqual([household]);
    });
  });

  describe('delete', () => {
    it('Should delete a household by id', () => {
      const household = service.create(createHouseholdDto);

      const { id } = household;
      service.delete(id);
      expect(service.findAll().length).toBe(0);
    });
  });

  describe('findOne', () => {
    it('Should find one household by id', () => {
      const household = service.create(createHouseholdDto);
      const { id } = household;

      expect(service.findOne(id).id).toEqual(id);
    });

    it('Should throw an error if no houshold is found', () => {
      expect(() => service.findOne('NOT FOUND')).toThrowError();
    });
  });

  describe('update', () => {
    it('Should update a household by id', () => {
      const household = service.create(createHouseholdDto);
      const { id } = household;
      const newEmail = 'thomasij813@yahoo.com';

      const updateHouseholdDto = {
        email: newEmail
      };

      service.update(id, updateHouseholdDto);
      expect(service.findOne(id).email).toEqual(newEmail);
    });
  });
});
