import { PostService } from './../services/post.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  
  @Output() recebeLike = new EventEmitter<Post>();
  
  curtido = false;

  constructor(public postService: PostService) {}

  ngOnInit() {
    
  }

  recebeuLike(post: Post){
    post.qtdLikes++;
    this.recebeLike.emit(post);
  }

}
