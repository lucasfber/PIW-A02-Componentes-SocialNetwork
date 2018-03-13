import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
