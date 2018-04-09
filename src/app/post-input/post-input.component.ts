import { PostService } from "./../services/post.service";
import { Post } from "./../post/post.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-input",
  templateUrl: "./post-input.component.html",
  styleUrls: ["./post-input.component.css"]
})
export class PostInputComponent implements OnInit {
  nomePessoa: string = "";
  textoPost: string = "";

  constructor(public postService: PostService) {}

  ngOnInit() {}

  adicionaPost(e) {
    e.preventDefault();

    if (this.nomePessoa && this.textoPost) {
      this.postService
        .adicionarPost(new Post(null, this.nomePessoa, this.textoPost, 0))
        .subscribe(data => console.log(data));

        this.nomePessoa = "";
        this.textoPost = "";
    }
  }
}
