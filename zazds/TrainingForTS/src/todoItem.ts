export class TodoItem {
    public id: number;
    public task: string;
    public complate: boolean = false;

    public constructor(id: number, task: string, complate: boolean = false) {
        this.id = id;
        this.task = task;
        this.complate = complate;
    }

    public printDetails(): void {
        console.log(`${this.id}\t${this.task} ${this.complate ? "\t(complate)" : ""}`)
    }

}