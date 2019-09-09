import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

interface IComponentTestInit<T> {
  fixture: ComponentFixture<T>;
  component: T;
  html: HTMLElement;
}

export class ComponentTestInit<T> implements IComponentTestInit<T> {
  fixture: ComponentFixture<T>;
  component: T;
  html: HTMLElement;

  constructor(public componentClass: Type<T>) {
    this.fixture = TestBed.createComponent(componentClass);
    this.component = this.fixture.componentInstance;
    this.html = this.fixture.debugElement.nativeElement;

    this.fixture.detectChanges();
  }
}
