import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13];

  objects = [
    {
      title: "Post 1",
      author: "Arafat",
      comments: [
        { name: "Petr", text: "Lorem 1" },
        { name: "Sidr", text: "Lorem 2" },
        { name: "Fedya", text: "Lorem 3" },
      ],
    },
    {
      title: "Post 2",
      author: "Arafat 2",
      comments: [
        { name: "Petr 1", text: "Lorem 1" },
        { name: "Sidr 1", text: "Lorem 2" },
        { name: "Fedya 1", text: "Lorem 3" },
      ],
    },
  ];
}
