import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Observable } from 'rxjs';
import { Priority, ToDo } from '../../model/to-do';

@Component({
  selector: 'app-chart-managment',
  templateUrl: './chart-managment.component.html',
  styleUrl: './chart-managment.component.scss'
})
export class ChartManagmentComponent {

  

  private defaultPriorityData: any[] = [
    {
      "name": Priority.LOW,
      "value": 0
    },
    {
      "name": Priority.MEDIUM,
      "value": 0
    },
    {
      "name": Priority.HIGH,
      "value": 0
    }
  ]

  updating: boolean = false;

  ngOnInit() {
    this.crudService.getAllTodo().subscribe({
      next: todos => {
        this.updating = true;
        this.priorityData[0].value = todos.filter(x => x.priority === Priority.LOW).length
        this.priorityData[1].value = todos.filter(x => x.priority === Priority.MEDIUM).length
        this.priorityData[2].value = todos.filter(x => x.priority === Priority.HIGH).length
        console.log("Subscription occured", todos)
        setTimeout(() => this.updating = false, 200)
      },
      error: error => { this.priorityData = this.defaultPriorityData; console.error("pieChart error", error) }
    })
  }

  public priorityData: any[] = this.defaultPriorityData;

  constructor(private crudService: CrudService) {
  }

}
