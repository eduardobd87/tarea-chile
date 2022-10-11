import { DataSource } from 'typeorm';
import * as config from 'config';
import * as dotenv from 'dotenv';
dotenv.config();

const devDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/**/*{.ts,.js}'],
});

export default devDataSource;
