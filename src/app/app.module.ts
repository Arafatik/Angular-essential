import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ExMarksPipe } from "./pipes/ex-marks.pipe";
import { FormsModule } from "@angular/forms";
import { MultByPipe } from "./pipes/mult-by.pipe";
import { NgModule } from "@angular/core";
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [AppComponent, MultByPipe, ExMarksPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
