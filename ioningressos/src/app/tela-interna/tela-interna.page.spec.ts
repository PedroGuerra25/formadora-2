import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaInternaPage } from './tela-interna.page';

describe('TelaInternaPage', () => {
  let component: TelaInternaPage;
  let fixture: ComponentFixture<TelaInternaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
