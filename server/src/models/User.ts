import { uuid } from 'uuidv4';

class User {
  id: string;
  num_registration: string;
  name: string;

  constructor(num_registration: string, name: string) {
    this.id = uuid();
    this.num_registration = num_registration;
    this.name = name;
  }
}
export default User;
