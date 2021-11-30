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
}