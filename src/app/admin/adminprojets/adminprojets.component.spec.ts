import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprojetsComponent } from './adminprojets.component';

describe('AdminprojetsComponent', () => {
  let component: AdminprojetsComponent;
  let fixture: ComponentFixture<AdminprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprojetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
