import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienDemandeComponent } from './entretien-demande.component';

describe('EntretienDemandeComponent', () => {
  let component: EntretienDemandeComponent;
  let fixture: ComponentFixture<EntretienDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntretienDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntretienDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
