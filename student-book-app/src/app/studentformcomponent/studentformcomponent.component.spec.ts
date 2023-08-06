import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformcomponentComponent } from './studentformcomponent.component';

describe('StudentformcomponentComponent', () => {
  let component: StudentformcomponentComponent;
  let fixture: ComponentFixture<StudentformcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformcomponentComponent]
    });
    fixture = TestBed.createComponent(StudentformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
