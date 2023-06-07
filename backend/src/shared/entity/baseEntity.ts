import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntityApp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ select: true })
  createdAt?: Date;
  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}
