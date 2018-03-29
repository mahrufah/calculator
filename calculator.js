function c(val)
{
// document.getElementById("de").value=val;
document.getElementById('d').value = val;
document.getElementById('de').value = val;
}


function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  
document.getElementById("de").value= eval(document.getElementById("d").value);
} 
catch(e) 
{
  c('Error'); 
} 
}  
function sin(a)
{
 a=Number(a);
 return Math.sin(a*Math.PI/180);
}
function cos(a)
{
 a=Number(a);
 return Math.cos(a*Math.PI/180);
}


function tan(a)
{
 a=Number(a);
 return Math.sin(a*Math.PI/180) / Math.cos(a*Math.PI/180);
}