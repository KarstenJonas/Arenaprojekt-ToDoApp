import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CrudService } from '../service/crud.service';
import { ToDo } from '../model/to-do';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnDestroy {

  selectedPriorities: string[] = ['LOW', 'MEDIUM', 'HIGH'];

  formVisibility: boolean = false;

  toggleFormVisibility() {
    this.formVisibility = !this.formVisibility;
  }

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private crudService: CrudService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onPriorityToggleChange($event: any) {
    this.crudService.selectedPriorities = $event.value; 
    console.log("selectedPriority:", $event.value);
  }

  onDoneChange(checked: boolean) {
    console.log("toggle:", checked);
    this.crudService.isDoneFilterActive = checked;
  }
}
