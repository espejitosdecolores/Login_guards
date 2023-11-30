import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaxComponent } from './rutax.component';

describe('RutaxComponent', () => {
  let component: RutaxComponent;
  let fixture: ComponentFixture<RutaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
