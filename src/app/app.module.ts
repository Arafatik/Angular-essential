import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Post2Component } from "./post2/post2.component";
import { Post3Component } from "./post3/post3.component";
import { Post4Component } from "./post4/post4.component";
import { PostComponent } from "./post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
