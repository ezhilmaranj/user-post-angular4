import {Router, RouterModule} from '@angular/router';

import {PostsComponent} from './posts.component';
import {PostDetailsComponent} from './post-details.component';

export const postsRouting = RouterModule.forChild([
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostDetailsComponent}
]);