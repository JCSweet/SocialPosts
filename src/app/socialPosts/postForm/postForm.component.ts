import { Component, Input } from '@angular/core';
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
  
  newPost = () => {
    this.form = !this.form;
    // this.changed.emit(true);
  };

}
