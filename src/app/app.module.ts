import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//component
import {AppComponent} from './app.component';
import {LoginComponent} from './views/login/loign'

//service
import {xkbAPIService} from './services/xkbAPI.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [xkbAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
