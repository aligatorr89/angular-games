import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFooterComponent } from './home-page-footer.component';
import { GamesModule } from '../../games/games.module';

describe('HomePageFooterComponent', () => {
  let component: HomePageFooterComponent;
  let fixture: ComponentFixture<HomePageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageFooterComponent ],
      imports: [GamesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
