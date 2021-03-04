import { Component, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from './models/user.model';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-filed';
  // public userList: Observable<User[]>;
  userList;
  allUserList: any[] = [];
  clickEventsubscription: Subscription;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.getUserList();
    })
  }
  
  openUserForm() {
    this.router.navigate(['user'])
  }

  reactFormConf() {
    ReactiveFormConfig.set({
      "validationMessage": {
        "email": "Invalid email format",
        "required": "* field is required",
        "numeric": "Should Accept only nymeric"
      }
    });
  }

  getUserList() {
    this.userList = this.userService.list();
    this.allUserList.push(this.userList.actionsObserver._value.payload);
  }

  ngOnInit() {
    this.reactFormConf();
  }
}
