import Teacher from "./teacher/Teacher";



export class Class {

  public teacher: Teacher | null = null;

  constructor(
    public id: string,
    public name: string,
    public numOfStudents: number,
    public adress: string,
  ) { }
  public toString(): string {
    return `ID: ${this.id},
    Name: ${this.name},
    Number of students: ${this.numOfStudents},
    Location: ${this.adress}`
  }
};



export default Class;
