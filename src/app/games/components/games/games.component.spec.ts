import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GamesComponent } from './games.component';
import { GamesHeaderComponent } from '../games-header/games-header.component';
import { GamesListComponent } from '../games-list/games-list.component';
import { GamesListElementComponent } from '../games-list-element/games-list-element.component';
import { ComponentTestInit } from '../../../shared/test/test-util';

describe('GamesComponent', () => {
  let test: ComponentTestInit<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesComponent, GamesHeaderComponent, GamesListComponent, GamesListElementComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(GamesComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should contain <app-games-header> and <app-games-list> innerHTML', () => {
    expect(test.html.querySelector('app-games-header')).toBeTruthy();
    expect(test.html.querySelector('app-games-list')).toBeTruthy();
  });

  it('should have attribute ng-reflect-games in innerHTML', () => {
    expect(test.html.querySelector('[ng-reflect-games]')).toBeTruthy();
  });
});
