import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';



@Component({
  selector: 'socialPosts',
  templateUrl: './socialPosts.component.html',
  // styleUrls: []
})

  export class SocialPostsComponent {
    title = 'SocialPosts';
   
    postArray = [
      {subject: 'Dog', body: 'woof woof'},
      {subject: 'Cat', body: 'meow'},
      {subject: 'Pig', body: 'oink oink'},
      {subject: 'Cow', body: 'mooooooooooooo'},
      {subject: 'Whale', body: 'tralalalalalalalalalalalalalalalalalalala lalalalalalalalalalalalalalalalalalalala falalalalalalalalalalalalalalalalala'},
      ];
     
      posts = this.postArray;

      onChanged = event => {
        console.log(event);
      };
      deletePost = (index: any) => {
        this.posts.splice(index, 1)
      };
  };