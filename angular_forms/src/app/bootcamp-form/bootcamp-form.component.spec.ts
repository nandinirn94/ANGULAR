import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BootcampFormComponent } from './bootcamp-form.component';

describe('BootcampFormComponent', () => {
  let component: BootcampFormComponent;
  let fixture: ComponentFixture<BootcampFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ BootcampFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
