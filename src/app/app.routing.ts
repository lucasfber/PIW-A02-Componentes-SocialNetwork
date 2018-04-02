import { PostInputComponent } from './post-input/post-input.component';

import { Routes, RouterModule } from '@angular/router';

import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';


const APP_ROUTES: Routes = [
    { path: "timeline", component: LinhaDoTempoComponent },
    { path: "postar", component: PostInputComponent },
    { path: '', redirectTo: "/timeline", pathMatch: "full"}
];

export const routing = RouterModule.forRoot(APP_ROUTES);