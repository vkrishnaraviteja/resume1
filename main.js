function loadJson(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
fun_career(data.career);
fun_education(data.education);
fun_achievements(data.achievements);
fun_technicalskills(data.technical);

});
var div2=document.getElementById("child2");


function fun_career(edu1)
{
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  div2.appendChild(h2);
  var hr1=document.createElement("hr");
  div2.appendChild(hr1);
  var p=document.createElement("p");
p.textContent=edu1.info;
div2.appendChild(p);
}

function fun_education(edu)
{
  var abc=document.createElement("h2");
  abc.textContent="Educational Qualification";
  div2.appendChild(abc);
  var hr=document.createElement("hr");
  div2.appendChild(hr);

  var list=document.createElement("ul");
  div2.appendChild(list);
    for(var i=0;i<edu.length;i++)
  {
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
      list.appendChild(listItem);
      var listItem1=document.createElement("p");
      listItem1.textContent=edu[i].institute;
      list.appendChild(listItem1);
      var listItem2=document.createElement("p");
      listItem2.textContent=edu[i].data;
      list.appendChild(listItem2);

  }
}
function fun_achievements(ach)
{
  var he=document.createElement("h2");
  he.textContent="Achievements";
  div2.appendChild(he);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<ach.length;i++)
  {
  var listItem3=document.createElement("li");
  listItem3.innerHTML=ach[i].name;
  list.appendChild(listItem3);
/*  var listItem4=document.createElement("li");
  listItem4.innerHTML=ach[i].name1;
  list.appendChild(listItem4);*/

}
}
function fun_technicalskills(tech)
{
  var he=document.createElement("h2");
  he.textContent="Technical Skills";
  div2.appendChild(he);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
/*  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<tech.length;i++)
  {
  var listItem3=document.createElement("li");
  listItem3.innerHTML=tech[i].name;
  list.appendChild(listItem3);
}*/
var tr="";
var table=document.createElement("table");
div2.appendChild(table);
for(var i=0;i<tech.length;i++)
{
  //var tr=document.createElement("tr");
  tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";


}
  table.innerHTML=tr;
  table.border="2";
}
