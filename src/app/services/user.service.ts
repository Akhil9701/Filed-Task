import { Injectable } from '@angular/core';
import * as TodoActions from '../actions/user.actions'
import * as fromTodoReducer from '../reducers/user.reducer';
import { createSelector } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { AppState } from './../app.state';
import { User } from '../models/user.model';


@Injectable()
export class UserService {

  private allUsers;

  constructor(private store: Store<AppState>) {
    this.allUsers = createSelector(
      fromTodoReducer.selectAll,
      (entities) => {
        return entities;
      }
    )
  }

  public add(data: User) {
    this.store.dispatch(new TodoActions.AddTodo(data))
  }

  public list() {
    return this.store.map((this.allUsers));
  }

}
