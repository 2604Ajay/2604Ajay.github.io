
let ab=document.getElementById("aboutme");
let ho=document.getElementById("myhobby");
let ed=document.getElementById("myeductaion");
let ca=document.getElementById("mycareer");
let hd=document.getElementById("hobbydata");


function about(){
    console.log("about clicked");
   ab.style.display="block";
   
   ho.style.display="none";
   ed.style.display="none";
   ca.style.display="none";

}
function hobby(){
    console.log("hobby clicked");
    hd.innerText.replace
    ab.style.display="none";
    ho.style.display="block";
    ed.style.display="none";
    ca.style.display="none";

}
function education(){
    console.log("education clicked");
    ab.style.display="none";
    ho.style.display="none";
    ed.style.display="block";
    ca.style.display="none";
}
function career(){
    console.log("career clicked");
    console.log("nikta's console");
    ab.style.display="none";
    ho.style.display="none";
    ed.style.display="none";
    ca.style.display="block";
}
