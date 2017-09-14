import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersComponent} from './users.component';
import {UserComponent} from './user.component';

import { UsersService } from './users.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      UsersComponent,
      UserComponent
  ],
  providers: [UsersService]
})
export class UsersModule {    
}