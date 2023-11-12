export type usersPredefinedCredentials = {
  email: string;
  password: string;
  accessLevel: string;
  address: Address;
  company: Company;
  name: string;
  phone: string;
  username: string;
  website: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type loginUserValues = {
  email: string;
  password: string;
};

export type RawUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
