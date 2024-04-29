import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  formSichtbar: boolean = false;

  toggleFormSichtbarkeit() {
    this.formSichtbar = !this.formSichtbar;
  }
}
