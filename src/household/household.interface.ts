import * as short from 'short-uuid';

export default interface Household {
  id: string;
  email: string;
  contact: {
    first: string;
    last: string;
    phone?: string;
  };
  address?: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
  };
}
