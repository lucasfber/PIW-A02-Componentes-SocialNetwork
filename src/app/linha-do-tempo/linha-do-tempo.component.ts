import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  @Input() posts: Post[];

  constructor() { 
    this.posts = [
      new Post(1, 'officialblacksabbath', 'New DVD is coming', 230),
      new Post(2, 'orappa', 'Novo álbum já disponível no Spotify', 90),
      new Post(3, 'officialjimihendrix', "New tribute's album on iTunes", 200)
    ]
  }

  ngOnInit() {
  }
  
  trataLike(e: Post){
      console.log(`${e.nomePessoa} - ${e.texto}`);
  }
}
