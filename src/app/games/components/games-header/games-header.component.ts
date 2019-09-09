import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameQuery } from '../../../shared/models/game';
import { Category, mockedCategories } from '../../../shared/models/category';

@Component({
  selector: 'app-games-header',
  templateUrl: './games-header.component.html',
  styleUrls: ['./games-header.component.scss']
})
export class GamesHeaderComponent implements OnInit {

  categories: Category[] = mockedCategories;
  selectedCategory: Category = mockedCategories[0];

  @Output()
  changeNameEmmiter = new EventEmitter<GameQuery>();
  @Output()
  changeCategoryEmmiter = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  searchByName(target: HTMLInputElement) {
    this.changeNameEmmiter.emit({name: target.value});
  }

  changeCategory() {
    this.changeCategoryEmmiter.emit(this.selectedCategory);
  }
}
