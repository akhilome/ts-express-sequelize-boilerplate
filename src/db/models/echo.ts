import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'echo',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Echo extends Model<InferAttributes<Echo>, InferCreationAttributes<Echo>> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id?: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name!: string;
}

export default Echo;
