import { User } from './models/user.model';

export interface AppState {
  readonly tutorial: User[];
}
