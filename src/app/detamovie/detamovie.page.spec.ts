import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetamoviePage } from './detamovie.page';

describe('DetamoviePage', () => {
  let component: DetamoviePage;
  let fixture: ComponentFixture<DetamoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetamoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
