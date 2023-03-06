// Araç Lastik Uyarı Sistemi
// 1-kaç lastikte problem var
// 2-problem nedir?

//1 lastik havası indiyse "sürmeye devam edebilir"
//1 lastik patlak ise "yavaşla"
//2 lastik havasi indiyse "lastiklerin havasını şişir"
//2 lastik patlak ise "aracı durdurun"
let p1=Number(prompt("kaç lastikte problem var"))
let p2=prompt("problem nedir?")
if(p1==1&& p2=="hava"){
    alert("sürmeye devam edebilir")
}else if(p1==1&&p2=="patlak"){
    alert("yavaşla")
}else if(p1==2&& p2=="hava"){
    alert("acil lastikleri şişir")
}else if(p1==2&& p2=="patlak"){
    alert("aracı durdurun")
}