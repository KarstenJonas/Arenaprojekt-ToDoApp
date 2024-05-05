export class ToDo {
    id: number | undefined;
    title: string = '';
    text: string = '';
    status: boolean = false;
    priority: Priority = Priority.LOW;
    dateCreated: Date = new Date();
    duration: Duration = Duration.UNSET;
    datecompleted: Date | null = null;
    duedate: Date | null = null;

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

export enum Duration {
    UNSET = 'Unbestimmt',
    MINUTES_15 = '15 Minuten',
    MINUTES_30 = '30 Minuten',
    MINUTES_45 = '45 Minuten',
    MINUTES_60 = '60 Minuten'
}


