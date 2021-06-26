import Class from "../Class";
import { professions } from "./profession";
import Pupil from "./Pupil";

var p1:Pupil=new Pupil("251221541","Kobi swisa",26,"Beer-sheva","https://yosmusic.com/wp-content/uploads/2021/02/%D7%A7%D7%95%D7%91%D7%99-%D7%9E%D7%9E%D7%9F.jpg",new Class("9","Computers",40,"1"),[new professions("C#",100),new professions("Java",90),new professions("React",80)])
var p2:Pupil=new Pupil("254112563","Eden tabib",23,"Tel-aviv","https://www.israelhayom.co.il/sites/default/files/styles/566x349/public/images/articles/2021/01/06/16099328436997_b.jpg",new Class("9","Computers",40,"1"),[new professions("C#",100),new professions("Java",90),new professions("React",80)])
var p3:Pupil=new Pupil("201112453","Tal shemer",22,"Ramat-gan","https://pbs.twimg.com/profile_images/3422789162/49f43b9022be54819e23c1e9dd14d28e_400x400.jpeg",new Class("9","Computers",40,"1"),[new professions("C#",85),new professions("Java",90),new professions("React",100)])
var p4:Pupil=new Pupil("285364125","Idan tal",30,"Rehovot","https://www.profit-fs.com/wp-content/uploads/2020/11/tal_dror-scaled-e1605003149970.jpg",new Class("9","Computers",40,"1"),[new professions("C#",70),new professions("Java",80),new professions("React",40)])
var p5:Pupil=new Pupil("255412563","Avi rikan",29,"Zihron-yacov","https://friedman.co.il/wp-content/uploads/2019/02/%D7%90%D7%A1%D7%A3_%D7%A2%D7%99%D7%A8%D7%95%D7%A0%D7%99_%D7%A9%D7%95%D7%AA%D7%A3.jpg",new Class("9","Computers",40,"1"),[new professions("C#",75),new professions("Java",85),new professions("React",100)])
var p6:Pupil=new Pupil("255487441","Dolev haziza",19,"Sderot","https://images1.ynet.co.il/PicServer5/2018/11/01/8857237/2_6.jpg",new Class("9","Computers",40,"1"),[new professions("C#",85),new professions("Java",95),new professions("React",85)])
var p7:Pupil=new Pupil("213541123","Talia wildhot",22,"Ashqelon","https://kaspit-art.co.il/wp-content/uploads/2021/04/ezgif.com-gif-maker-3-scaled.jpg",new Class("9","Computers",40,"1"),[new professions("C#",90),new professions("Java",45),new professions("React",45)])
var p8:Pupil=new Pupil("220123654","Alex Kako",27,"Bat-yam","https://pbs.twimg.com/profile_images/883651056290467840/mUEfIFsq.jpg",new Class("9","Computers",40,"1"),[new professions("C#",85),new professions("Java",75),new professions("React",85)])



export const pupils = [p1,p2,p3,p4,p5,p6,p7,p8];