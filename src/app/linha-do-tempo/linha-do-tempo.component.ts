import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  @Input() posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  
  trataLike(e: Post){
      console.log(`${e.nomePessoa} - ${e.texto}`);
  }
}
