import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Sequelize.Op as any,
  database: 'movies',
  username: 'root',
  password: 'password',
  modelPaths: [__dirname + '/models']
});
