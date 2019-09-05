import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GamesModule,
    BrowserModule.withServerTransition({
      appId: 'angular-games'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
