import { Injectable } from "@angular/core";

import { Post } from "../post/post.model";

@Injectable()
export class PostService {
  private posts: Post[] = [
    new Post(1, "officialblacksabbath", "New DVD is coming", 230),
    new Post(2, "orappa", "Novo álbum já disponível no Spotify", 90),
    new Post(3, "officialjimihendrix", "New tribute's album on iTunes", 200)
  ];

  constructor() {}

  adicionarPost(post: Post) {
    this.posts.push(post);
  }

  // ver outra versao de deletarStudents
  /* excluirPost(idPost: number) {
    let indexPost = this.posts.indexOf(this.buscarPostPorId(idPost));
    this.posts.splice(indexPost, 1);
  } */

  excluir(idPost: number) {
    let indexPost = this.posts.indexOf(this.buscarPostPorId(idPost));
    this.posts.splice(indexPost, 1);
  }

  getPosts() {
    return this.posts;
  }

  adicionarLike(post: Post) {
    let indexPost = this.posts.indexOf(post);
    post.qtdLikes++;
    this.posts.splice(indexPost, 1, post);
  }

  private buscarPostPorId(id: number): Post {
    return this.posts.filter(post => {
      return post.id === id;
    })[0];
  }
}
