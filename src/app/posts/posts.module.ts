import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UsersModule} from '../users/users.module';
import {PostsComponent} from './posts.component';
import {PostDetailsComponent} from './post-details.component';
import {PostsService} from './posts.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UsersModule
  ],
  declarations: [
      PostsComponent,
      PostDetailsComponent
  ],
  providers: [PostsService]
})
export class PostsModule {

}