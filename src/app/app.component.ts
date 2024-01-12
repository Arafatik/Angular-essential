import { Component } from "@angular/core";

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  posts: Post[] = [
    {
      title: "Компоненты Angular",
      text: "Здесь все про создание компонентов в Angular",
      id: 1,
    },
    { title: "Следующий блок в Angular", text: "Директивы в Angular", id: 2 },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log("Post", post);
  }
}
