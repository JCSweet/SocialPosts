import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { SocialPostsComponent } from './socialPosts/socialPosts.component';

@Component({
  selector: 'postForm',
  templateUrl: './postForm.component.html' ,
  // styleUrls: []
})
export class PostFormComponent { 
  title = 'PostForm';
  @Input() form: boolean;
  // @Input() postArray: posts;
  postArray: any;
  changed: any;
  bodyPost: any;
  subjectPost: any;
 
  @Output() submitted = new EventEmitter<any>();
  
  onSubmit = () => {    
    this.submitted.emit({
    body: this.bodyPost,
    subject: this.subjectPost,
    });
    this.form = !this.form;
  };

  
  newPost = () => {
    this.form = !this.form;
  };


}
