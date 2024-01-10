import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Dynamic title";
  number = 42;
  arr = [1, 2, 3];

  obj = { a: 1, b: { c: 2 } };

  img =
    "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png";

  constructor() {
    setTimeout(() => {
      console.log("Timeout is over");
      this.img =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc10uXFleZuTdeL4R0JYdMlHPpR0EiE1f6etcMoUr7tA&s";
    }, 5000);
  }
}
