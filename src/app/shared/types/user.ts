export type usersPredefinedCredentials = {
  email: string;
  password: string;
  accessLevel: string;
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
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};