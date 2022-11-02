let pass;
let lc =document.getElementById("pass").innerHTML.value;
function next()
{
    pass=Math.random().toString(36).substring(2,15);
    document.getElementById("pass").innerHTML=pass;
}

function alert()
{
    document.getElementById("alert").innerHTML=`copied to clipboard`;
    
}

function copy()
{
    // lc.select();
    // lc.setSelectionRange(0,99999);
    console.log(lc)
    navigator.clipboard.writeText(lc);

   document.getElementById("alert").innerHTML="copied";

    setTimeout(function(){
        document.getElementById("alert").innerHTML="";
        },3000);
}