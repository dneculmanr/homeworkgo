import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamsPage } from './exams.page';

describe('ExamsPage', () => {
  let component: ExamsPage;
  let fixture: ComponentFixture<ExamsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
