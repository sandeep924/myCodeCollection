import { Component, Input } from "@angular/core";

@Component({
  selector:'app-postlist',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListingComponent{
  @Input() postList

}
