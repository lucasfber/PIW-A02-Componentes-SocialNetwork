import { PostService } from './../services/post.service';
import { Post } from './../post/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {

  nomePessoa: string = "";
  textoPost: string = "";

  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  mostra(e){
    e.preventDefault();
    
    let newId = this.postService.getPosts().length + 1;
    console.log(newId);
    this.postService.adicionarPost(new Post(newId, this.nomePessoa, this.textoPost, 0));
    
    this.nomePessoa = "";
    this.textoPost = "";
  }
}
