import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListContainerComponent } from './employees-list-container.component';

describe('EmployeesListContainerComponent', () => {
  let component: EmployeesListContainerComponent;
  let fixture: ComponentFixture<EmployeesListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesListContainerComponent]
    });
    fixture = TestBed.createComponent(EmployeesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
