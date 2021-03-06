/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Review } from './Review';
import { Application } from './Application';
import { Favorite } from './Favorite';
import { House } from './House';
import { Payment } from './Payment';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column({select: false})
  password!: string;

  @Column()
  name!: string;

  @Column({select: false})
  mobile!: string;

  @Column()
  gender!: string;

  @Column({ type: 'date' })
  birth!: string;

  @Column({ nullable: true })
  currentPlan!: string;

  @Column({ nullable: true })
  expiry!: number;

  @Column({ nullable: true })
  livingHouse!: number;

  @Column({ type: 'boolean' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  // User(1) <-> Review(*)
  @OneToMany(
    (type) => Review,
    (review) => review.user,
  )
  reviews!: Review[];

  // User(1) <-> Application(*)
  @OneToMany(
    (type) => Application,
    (application) => application.user,
  )
  applications!: Application[];

  // User(1) <-> Favorite(*)
  @OneToMany(
    (type) => Favorite,
    (favorite) => favorite.user,
  )
  favorites!: Favorite[];

  // User(1) <-> House(*)
  @OneToMany(
    (type) => House,
    (house) => house.user,
  )
  houses!: House[];

  // User(1) <-> Payment(*)
  @OneToMany(
    (type) => Payment,
    (payment) => payment.user,
  )
  payments!: Payment[];
}
