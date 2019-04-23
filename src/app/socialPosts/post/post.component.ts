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
  form: any;
  bodyPost: string;
  subjectPost: string;
 
}