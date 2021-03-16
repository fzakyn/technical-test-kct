import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedComponent } from "./shared/shared.component";
import { AuthModule } from "./auth/auth.module";
import { appRoutingModule } from "./routing";

@NgModule({
  imports: [BrowserModule, FormsModule, AuthModule, appRoutingModule],
  declarations: [AppComponent, SharedComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
