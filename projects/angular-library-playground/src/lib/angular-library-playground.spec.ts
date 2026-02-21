import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLibraryPlayground } from './angular-library-playground';

describe('AngularLibraryPlayground', () => {
  let component: AngularLibraryPlayground;
  let fixture: ComponentFixture<AngularLibraryPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibraryPlayground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLibraryPlayground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
