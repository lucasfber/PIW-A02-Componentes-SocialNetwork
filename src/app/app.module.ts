import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostService } from './services/post.service';
import { PostInputComponent } from './post-input/post-input.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PostComponent,
    LinhaDoTempoComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
