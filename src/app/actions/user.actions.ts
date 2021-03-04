import { Action } from '@ngrx/store'
import { User } from '../models/user.model'


export const ADD_TODO       = '[TODO] Add'



export class AddTodo implements Action {
  readonly type = ADD_TODO
  constructor(public payload: User) {}
}



export type Actions = AddTodo 
