import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: IPost;
  constructor() { }

  ngOnInit() {
  }


  onLoveIts() {
    this.post.loveIts++;
  }

  onNotLoveIts() {
    this.post.loveIts--;
  }

}
