import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntityApp extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ select: false })
  createdAt?: Date;
  @UpdateDateColumn({ select: false })
  updatedAt?: Date;
}
