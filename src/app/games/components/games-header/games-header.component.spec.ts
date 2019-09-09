import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GamesHeaderComponent } from './games-header.component';
import { ComponentTestInit } from '../../../shared/test/test-util';

describe('GamesHeaderComponent', () => {
  let test: ComponentTestInit<GamesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesHeaderComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(GamesHeaderComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should call searchByName method when type into Search game input', () => {
    const spy = jest.spyOn(test.component, 'searchByName');

    const input: HTMLInputElement = test.html.querySelector('input[name="search-game"]');
    input.value = 'w';
    const event = new KeyboardEvent("keyup", {key : "w"});
    input.dispatchEvent(event);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call changeCategory() method when select from drowdown', () => {
    const spy = jest.spyOn(test.component, 'changeCategory');

    const select: HTMLSelectElement = test.html.querySelector('select[name="select-category"]');
    const event = new Event('change');
    select.selectedIndex = 3;
    select.dispatchEvent(event);
    
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
