export interface ICreatePropertyDTO {
  title: string;
  description: string;
  monthly_rate: number;
  available: boolean;
  broker: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement?: string;
  area: number;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  number_of_suites: number;
  isFurnished: boolean;
  aboutFurniture?: string;
  pets: boolean;
  garage: boolean;
}