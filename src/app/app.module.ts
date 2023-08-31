import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListingComponent } from './post-list/post-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CreatePostComponent,
    PostListingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
