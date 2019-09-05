import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    GamesModule,
    BrowserModule.withServerTransition({
      appId: 'angular-games'
    })
=======
    AppRouterModule,
    GamesModule,
>>>>>>> dev1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
