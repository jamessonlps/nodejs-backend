import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Property from "../../../../properties/infra/typeorm/entities/Property";

@Entity('rentals')
class Rental {
  @ PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Property)
  @JoinColumn({ name: 'property_id' })
  property: Property;

  @Column()
  property_id: string;

  @Column()
  initial_date: Date;

  @Column()
  final_date: Date;

  @Column()
  expected_return_date: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default Rental;
