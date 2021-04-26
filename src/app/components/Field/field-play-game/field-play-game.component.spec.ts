import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPlayGameComponent } from './field-play-game.component';

describe('FieldPlayGameComponent', () => {
  let component: FieldPlayGameComponent;
  let fixture: ComponentFixture<FieldPlayGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldPlayGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldPlayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
