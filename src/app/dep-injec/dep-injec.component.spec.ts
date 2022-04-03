import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInjecComponent } from './dep-injec.component';

describe('DepInjecComponent', () => {
  let component: DepInjecComponent;
  let fixture: ComponentFixture<DepInjecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepInjecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepInjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
