export class ToDo {
    id: number | undefined;
    title: string = '';
    text: string = '';
    status: boolean = false;
    priority: Priority = Priority.LOW;
   

    // constructor(title: string, text: string, status: boolean, prio: Priority, dueDate: Date, duration: Duration){
    //     this.title = title;
    //     this.text = text;
    //     this.status = status;
    //     this.prio = prio;
    //     this.dateCreated = new Date();
    //     this.duration = duration;
    //     this.duedate = dueDate;
    // }

}

export enum Priority {
    LOW = 'Niedrig',
    MEDIUM = 'Mittel',
    HIGH = 'Hoch'
}



