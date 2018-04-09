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
      this.renderTimeline();  
  }
  
  renderTimeline() {
    this.postService.getPosts()
      .subscribe((data) => this.posts = data);
  }

  trataLike(e: Post){
    this.postService.editarPost(e)
    .subscribe((data) => {
        this.renderTimeline();
        console.log(data)
      },
      (error) => console.log(error));
  }

  trataExcluirPost(id) {
    this.postService.excluirPost(id)
      .subscribe((data) => {
        this.renderTimeline();
      });
  }

  trataEditarPost(e: Post) {
     this.postService.editarPost(e)
      .subscribe((data) => {
        this.renderTimeline();
      }, error => console.log(error));
  }
}
