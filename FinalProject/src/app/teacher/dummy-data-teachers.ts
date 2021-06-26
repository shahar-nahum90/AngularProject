import Class from "../Class";
import teacher from "./Teacher";


var t1:teacher=new teacher("205658521","Sarit levy",35,"Afula","https://israel-trade.net/oecd/files/2016/09/%D7%9E%D7%95%D7%A8%D7%94-628x330.jpg",["Systems Analysis", "Python", "Java"],[new Class("9","Computers",40,"1"),new Class("1","Lab",50,"2")],"10",55,186);
var t2:teacher=new teacher("211458987","Elen David",35,"Ariel","https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1130289814%2F0x0.jpg",["English", "Hebrow"],[new Class("5","Computers",24,"1"),new Class("7","Lab",42,"3")],"6",45,155);
var t3:teacher=new teacher("255456852","Eli cohen",35,"Tel-aviv","http://music.fas.harvard.edu/images/vijayteaching.jpg",["sql", "c#", "SPSS"],[new Class("4","Computers",30,"3")],"3",35,200);
var t4:teacher=new teacher("200354877","Dror shalom",35,"Jerusalem","https://www.edjobs.co.il/media/k2/items/cache/474f4cdd4383ff91fd1d98bcb039d93b_XL.jpg",["JS", "React", "Angular"],[new Class("3","Computers",60,"4")],"15",60,150);
var t5:teacher=new teacher("201145321","Yossi maymon",35,"Eilat","https://static.projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/mathpicture/files/gaitsgorytalk_0.jpg?m=1515753445&itok=SaJfZbI0",["HTML", "CSS"],[new Class("5","Computers",50,"2")],"8",50,186);
var t6:teacher=new teacher("254125982","Dan shimon",35,"Hadera","https://admissionado.com/wp-content/uploads/2016/04/college_professors_blog_post.jpg",["PS","illustrator"],[new Class("6","Computers",25,"2")],"6",40,50);


export const teachers = [t1,t2,t3,t4,t5,t6];

