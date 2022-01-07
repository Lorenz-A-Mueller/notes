import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedNoteComponent } from './created-note.component';

describe('CreatedNoteComponent', () => {
  let component: CreatedNoteComponent;
  let fixture: ComponentFixture<CreatedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
