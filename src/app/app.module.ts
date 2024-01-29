import { AppComponent } from "./app.component";
import { AppCounterService } from "./services/app-counter.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppCounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
