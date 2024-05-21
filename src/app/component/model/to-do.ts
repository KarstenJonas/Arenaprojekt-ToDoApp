export class ToDo {
    id: number | undefined;
    title: string = '';
    text: string = '';
    status: boolean = false;
    priority: Priority = Priority.LOW;
   

    // constructor(title: string, text: string, status: boolean, prio: Priority){
    //     this.title = title;
    //     this.text = text;
    //     this.status = status;
    //     this.priority = prio;
    // }

}

export enum Priority {
    LOW = 'Niedrig',
    MEDIUM = 'Mittel',
    HIGH = 'Hoch'
}



