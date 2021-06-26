export class professions {    
    constructor(public nameProfession:string, public grade:number) {
               
    }

    public toString(){
        return `${this.nameProfession} - ${this.grade}`
    }

    
}

