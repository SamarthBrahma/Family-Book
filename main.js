var images = ["samarth.jpg","swathi.jpg","sarthak.jpg","saakshi.jpg","doma.jpg","doddappa.jpg","dodda.jpg", "ajja.jpg","jeje.jpg","jejema.jpg","chote papa.jpg","chotemama.jpg"];

var names=["Samarth Brahma","Swathi Brahma","Sarthak Brahma","Saakshi Rao Sukeerthy","Archana Rao Sukeerthy", "Sukeerthy Marahanumaiah","Shobha Baikady","Ramesh Baikady","Jagadananda Brahma","Gayatri Brahma","Sankalp Brahma","Neha Anand"];
var i=0;
function family(){
   i++;
   var members=10;
   if (i>members) {i=0;}
   var updateimage=images[i];
   var updatenames=names[i];
   document.getElementById("family_member_name").innerHTML=updatenames;
   document.getElementById("family_member_image").src=updateimage;
   

}