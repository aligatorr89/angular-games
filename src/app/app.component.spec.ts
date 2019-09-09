import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRouterModule, routes } from './app-router.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { HomePageComponent } from './home-page-components/home-page/home-page.component';
import { HomePageHeaderComponent } from './home-page-components/home-page-header/home-page-header.component';
import { HomePageContentComponent } from './home-page-components/home-page-content/home-page-content.component';
import { HomePageFooterComponent } from './home-page-components/home-page-footer/home-page-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomePageComponent,
        HomePageHeaderComponent,
        HomePageContentComponent,
        HomePageFooterComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRouterModule,
        RouterTestingModule,
        GamesModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
