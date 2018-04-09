import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from "../post/post.model";

@Injectable()
export class PostService {
  
  posts: Post[] = [];
  URL: string = "http://rest.learncode.academy/api/bertoldo/posts";
  

  constructor(private http: Http) {}

  adicionarPost(post: Post) {
    return this.http.post(this.URL, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error))
  }

  excluirPost(idPost: number) {
    return this.http.delete(`${this.URL}/${idPost}`)
            .map((response:Response) => response.text)
            .catch((error: Response) => Observable.throw(error)); 
  }

  editarPost(post: Post) {
    let postEditado = new Post(post.id, post.nomePessoa, post.texto, post.qtdLikes);
    return this.http.put(`${this.URL}/${post.id}`, postEditado);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.URL)
      .map((response: Response) => {
        this.posts = [];
        for(let p of response.json()){
          this.posts.push(new Post(p.id, p.nomePessoa, p.texto, p.qtdLikes))
        }
        return this.posts;
      })
      .catch((error: Response) => Observable.throw(error));
  }
}
