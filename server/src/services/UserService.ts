import User from '../models/User';

class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }
  public all() {
    let name = '';
    for (var i = 0; i < this.users.length; i++) {
      name = this.users[i].name;
    }
    return name;
  }
  public create(name: string, num_registration: string): User {
    const user = new User(name, num_registration);
    this.users.push(user);
    return user;
  }
}
export default UserService;
