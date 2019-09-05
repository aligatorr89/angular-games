import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListElementComponent } from './games-list-element.component';

describe('GamesListElementComponent', () => {
  let component: GamesListElementComponent;
  let fixture: ComponentFixture<GamesListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
