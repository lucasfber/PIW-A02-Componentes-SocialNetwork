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
  @Input() modoEdicao = false;

  @Output() recebeLike = new EventEmitter<Post>();
  @Output() excluiPost = new EventEmitter<Post>();
  @Output() atualizaPost = new EventEmitter<Post>();

  novoTexto = '';

  constructor(private postService: PostService) {}

  ngOnInit() { }

  adicionarLike(post: Post){
    post.qtdLikes++;
    this.recebeLike.emit(post);
  }

  excluirPost(id) {
    this.excluiPost.emit(id);
  }

  editarPost(texto: string) {
    this.novoTexto = texto;
    this.modoEdicao = !this.modoEdicao;
  }

  cancelar() {
    this.modoEdicao = !this.modoEdicao;
  }

  salvarAlteracao(post: Post) {
    post.texto = this.novoTexto;
    this.atualizaPost.emit(post);
  }
}
