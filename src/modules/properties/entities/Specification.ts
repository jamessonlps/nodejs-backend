import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('specifications')
class Specification {
  @PrimaryColumn()
  id?: string;

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

export default Specification;
