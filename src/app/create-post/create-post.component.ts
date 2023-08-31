import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit { 
 @Output() createPostValue=new EventEmitter();
  public contMsgValue: string = '';
public contTitleValue:string='';
  ngOnInit(): void {}
  addPostmessege(input) {
    const post={title:this.contTitleValue,content:this.contMsgValue}
    this.createPostValue.emit(post)
  }
}
