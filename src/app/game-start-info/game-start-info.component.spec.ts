import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartInfoComponent } from './game-start-info.component';

describe('GameStartInfoComponent', () => {
  let component: GameStartInfoComponent;
  let fixture: ComponentFixture<GameStartInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStartInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
