import { Pool } from 'mysql2/promise';

import { User } from '../interfaces/UserQueryInfo';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public post = async (
    { username, classe, level, password }: User,
  ) => {
    const query = `INSERT INTO Trybesmith.Users 
                  (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const result = this.connection.execute(query, [username, classe, level, password]);
    return result;
  };
}
