import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../models/user.model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userFormGroup: FormGroup
  constructor(private formBuilder: RxFormBuilder, private userService: UserService,
    private toastr: ToastrService, private sharedService: SharedService) { }

  onSubmit() {
    let form = this.userFormGroup.value;
    this.userService.add(form);
    this.sharedService.sendClickEvent();
    this.toastr.success('', 'Payment generated Successfully');
    this.userFormGroup.reset();
  }

  ngOnInit(): void {
    let user = new User();
    this.userFormGroup = this.formBuilder.formGroup(user);
  }

}
