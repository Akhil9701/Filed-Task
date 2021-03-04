import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { UserService } from './user.service';



const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

const PROVIDERS = [
  ApiService,
  ConfigService,
  UserService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
  ],
  exports: [
    ...MODULES,
  ],
  providers: [PROVIDERS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PROVIDERS]
    };
  }
}
