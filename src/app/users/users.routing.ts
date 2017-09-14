import {Router, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserComponent} from './user.component';

export const usersRouting = RouterModule.forChild([
    {path: 'users', component: UsersComponent},
    {path: 'users/user', component: UserComponent},
]);