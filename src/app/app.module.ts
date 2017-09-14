import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import {NavbarComponent} from '../app/navbar/navbar.component';
import {PostsModule} from '../app/posts/posts.module'
import {UsersModule} from '../app/users/users.module'
import {postsRouting} from '../app/posts/posts.routing';
import {usersRouting} from '../app/users/users.routing';
import {appRouting} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,     
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PostsModule,
    UsersModule,
    postsRouting,
    usersRouting,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
