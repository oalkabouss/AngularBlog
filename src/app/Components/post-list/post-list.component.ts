import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../models/IPost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {

  @Input() posts: IPost[] = [];

  constructor() { }

  ngOnInit() {
  }

}
