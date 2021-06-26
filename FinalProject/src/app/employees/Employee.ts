import person from '../Person';

class Employees extends person{
  constructor(
    id: string,
    name: string,
    age: number,
    city:string,
    image: string,
    public jobTitle: string,
    public workHoursMounth:number,
    public hourlyWage: number
  )
  {
    super(id, name, age, city, image)
  }

  public checkSalary(){
    var check:number=this.workHoursMounth*this.hourlyWage;
    
    return check;
    
  }
}
export default Employees;
