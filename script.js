//date
function time(){
    var d = new Date();
    var y = d.getFullYear();
    var mo = d.getMonth();
    var day = d.getDay();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.body.innerHTML =y+ "/" + mo+ "/" + day + "  "+ h +":" + m + ":" + s + "<br>";
}
time();





//function test
function person (name , age) {
    this.name = name;
    this.age = age;
    this.born = bornin;
}
function bornin() {
    return 2021 - this.age;
}
var p = new person("aamer" , 23)
document.write("my name is "+ p.name +" and my age is " +p.age +" so i'm born in " + p.born() +"<br>")

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
document.write("fahrenheit to Celsius:" +toCelsius(86)+"<br>");






//condditionals
if(p.name == "aamer")
{
    document.write(" condditionals : he is aamer ");
} else
{
    document.write("condditionals : he is't aamer");
}

switch(p.age)
{
    case 20:
        document.write("switch : he is young");
        break;
    case 23:
        document.write("switch : he is adult");
        break;
}


//loops
function number()
{
    var y=prompt("loops : enter any number of walking steps +7 on day -2 on night");
    var x=0;
   for(var i = 0 ; x < y; i++)
    {
        x = x +  7;
        if(y > x){
            x -= 2;
        }
    }
    alert("it take " +i + " days");
}
number();


//array
var myArray = [5, 2, 1, 4, 7, 9];
document.write("<br> array: " +myArray) ;  
