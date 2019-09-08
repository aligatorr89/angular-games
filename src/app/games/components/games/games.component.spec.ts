import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GamesComponent } from './games.component';
import { GamesHeaderComponent } from '../games-header/games-header.component';
import { GamesListComponent } from '../games-list/games-list.component';
import { GamesListElementComponent } from '../games-list-element/games-list-element.component';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesComponent, GamesHeaderComponent, GamesListComponent, GamesListElementComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
