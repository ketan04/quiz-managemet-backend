import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from 'config'

const dbConfig = config.get("db")

export const TypeORMConfiguration: TypeOrmModuleOptions = {
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  host: dbConfig.host,
  type: dbConfig.type,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: dbConfig.synchronize
}