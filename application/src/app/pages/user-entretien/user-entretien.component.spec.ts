import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntretienComponent } from './user-entretien.component';

describe('UserEntretienComponent', () => {
  let component: UserEntretienComponent;
  let fixture: ComponentFixture<UserEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEntretienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
