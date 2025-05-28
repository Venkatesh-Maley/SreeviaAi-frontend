import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReadMoreComponent } from './service-read-more.component';

describe('ServiceReadMoreComponent', () => {
  let component: ServiceReadMoreComponent;
  let fixture: ComponentFixture<ServiceReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceReadMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
