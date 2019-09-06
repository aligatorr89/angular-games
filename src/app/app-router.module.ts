import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page-components/home-page/home-page.component';
import { GamesComponent } from './games/components/games/games.component';

export const routes: Route[] = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'games', component: GamesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
