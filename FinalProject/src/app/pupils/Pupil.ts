import Person from "../Person";
import Class from "../Class";
import { professions } from "./profession";


class pupil extends Person {

    constructor(
        id: string,
        fullName: string,
        age: number,
        city: string,
        image: string,
        public Class: Class,
        public professions: professions[]
    ) {
        super(id, fullName, age, city, image)
    }

    public avergePupils(): number {
        var sum: number = 0;        
            for (const prof of this.professions) {
                sum += prof.grade;
            }        
        return sum/this.professions.length;
    }
};


export default pupil
