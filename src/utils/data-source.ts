require('dotenv').config()
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Position } from "../entities/Position"
import config from 'config';
import { Enrollment } from '../entities/Enrollment';

const postgresConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>('postgresConfig');

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [Position, Enrollment],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscribers/**/*{.ts,.js}'],
});

