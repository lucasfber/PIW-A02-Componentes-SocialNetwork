import { PostComponent } from './post/post.component';
import { Component } from '@angular/core';
import {Post} from './post/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [
    new Post("@officialhendrix", "Check out the Jimi Hendrix's tribute album on: bit.ly/jhendrixtribute"),
    new Post("@officialblacksabbath", "Black Sabbath confirms the date's release DVD 'The End'"),
    new Post("@gleyfy_brauly", "Fiquem ligados! Estou preparando mais um cover de sucesso!")
  ];
}
