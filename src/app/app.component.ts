import { Component } from '@angular/core';
import { IPost } from './models/IPost';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  posts: IPost[];


  constructor() {
    this.title = 'Blog';
    this.posts = this.makeFakePost();
  }

  private makeFakePost(): IPost[] {
    return [
      {
        title: 'Mon premier post',
        content: 'Indicat cum Nili efficaciae in Saracenis auxit Seleucus obitum longum modum laeva limes regna Seleucus.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Mon deuxième post',
        content: 'Indicat cum Nili efficaciae in Saracenis auxit Seleucus obitum longum modum laeva limes regna Seleucus.',
        loveIts: 0,
        created_at: new Date()
      },
      {
        title: 'Encore un post',
        content: 'Indicat cum Nili efficaciae in Saracenis auxit Seleucus obitum longum modum laeva limes regna Seleucus.',
        loveIts: 0,
        created_at: new Date()
      }
    ];
  }
}
