import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MultByPipe } from "./pipes/mult-by.pipe";
import { NgModule } from "@angular/core";
@NgModule({
  declarations: [AppComponent, MultByPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
