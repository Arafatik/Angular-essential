import { Component, OnInit } from "@angular/core";

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Компоненты Angular",
      text: "Здесь все про создание компонентов в Angular",
      id: 1,
    },
    { title: "Следующий блок в Angular", text: "Директивы в Angular", id: 2 },
  ];

  ngOnInit(): void {
    /*setTimeout(() => {
      console.log("Timeout");
      this.posts[0] = {
        title: "changed",
        text: "changed 2",
        id: 3,
      };
    }, 5000);*/
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log("Post", post);
  }

  removePost(id: number) {
    console.log("Id to remove", id);
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
