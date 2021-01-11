"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConfiguration = void 0;
const config = require("config");
const dbConfig = config.get("db");
exports.TypeORMConfiguration = {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
    host: dbConfig.host,
    type: dbConfig.type,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: dbConfig.synchronize
};
//# sourceMappingURL=typeorm.config.js.map