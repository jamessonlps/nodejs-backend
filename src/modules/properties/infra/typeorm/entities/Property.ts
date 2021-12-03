import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("properties")
class Property {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  monthly_rate: number;

  @Column()
  available: boolean;

  @Column()
  broker: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement?: string;

  @Column()
  area: number;

  @Column()
  number_of_bathrooms: number;

  @Column()
  number_of_bedrooms: number;

  @Column()
  number_of_suites: number;

  @Column()
  isFurnished: boolean;

  @Column()
  aboutFurniture?: string;

  @Column()
  pets: boolean;

  @Column()
  garage: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default Property;
