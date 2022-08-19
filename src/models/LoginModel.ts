import { Pool } from 'mysql2/promise';
import { User } from '../interfaces/UserQueryInfo';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public login = async (userInfo: User) => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE password = ? AND username = ?';
    const [data] = await this.connection
      .execute(query, [userInfo.password, userInfo.username]);
    return data;
  };
}