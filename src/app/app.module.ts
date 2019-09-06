import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HomePageComponent } from './home-page-components/home-page/home-page.component';
import { HomePageHeaderComponent } from './home-page-components/home-page-header/home-page-header.component';
import { HomePageContentComponent } from './home-page-components/home-page-content/home-page-content.component';
import { HomePageFooterComponent } from './home-page-components/home-page-footer/home-page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageHeaderComponent,
    HomePageContentComponent,
    HomePageFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GamesModule,
    BrowserModule.withServerTransition({
      appId: 'angular-games'
    }),
    AppRouterModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
