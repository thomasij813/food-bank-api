export default interface Household {
  id: string;
  email: string;
  first: string;
  last: string;
  phone?: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
}
