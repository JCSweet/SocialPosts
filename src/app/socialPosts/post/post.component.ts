import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Post {
  subject: string;
  body: string;
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html' ,
  // styleUrls: []
})

export class PostComponent {
  title = 'Post';
  @Input() post: Post;
  postArray: any;
  form: any;
  @Output() changed = new EventEmitter<boolean>();

  addPost = () => {
    // this.postArray.unshift()
    this.postArray.push()
    this.form = !this.form;
    this.changed.emit(true);
  };
   
}