export interface IUsersResponse {
  info: object;
  results: IUser[];
}

export interface IUser {
  cell: string;
  dob: IDob;
  email: string;
  gender: string;
  id: IId;
  location: ILocation;
  login: ILogin;
  name: IName;
  nat: string;
  phone: string;
  picture: IPicture;
}

export interface IDob {
  date: string;
  age: number;
}

export interface IId {
  name: string;
  value: any;
}

export interface ILocation {
  city: string;
  coordinates: ICoordinates;
  country: string;
  postcode: number;
  state: string;
  street: IStreet;
  timezone: ITimezone;
}

export interface ILogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

export interface IStreet {
  name: string;
  number: number;
}

export interface ITimezone {
  offset: string;
  description: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
