export class PantryUser {

    constructor(private firstName:string, private lastName:string) {
    }

    public visits: number = 0;
    private ourName: string;

    public showWName(name:string) {
        alert(this.name);
    }

    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }

}