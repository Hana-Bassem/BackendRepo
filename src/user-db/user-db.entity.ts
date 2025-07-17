import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserDb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // Add other fields as needed
}