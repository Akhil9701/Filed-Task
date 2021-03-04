
import * as TodoActions from '../actions/user.actions'

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/user.model';


export interface UserState extends EntityState<User> {

}

export const adapter: EntityAdapter<User> =
  createEntityAdapter<User>({
  });

const initialState: User = <User>{}


export const initialTodoState: UserState = adapter.getInitialState();


export function userReducers(state = initialTodoState, action: TodoActions.Actions) {

  switch (action.type) {
    case TodoActions.ADD_TODO:
      return adapter.addOne(action.payload, state);
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<UserState>('users');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getTodoState);
