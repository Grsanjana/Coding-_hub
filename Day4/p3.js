let experience=4;
let performancescore=9;
let salary=2000;
if(experience>5 && performancescore>8){
    console.log("get the bonus of 20% of salary",salary*0.2+salary);
}
else if((experience>3&&experience<=5)&& performancescore>7){
    console.log("get the bonus of 10% of salary",salary*0.1+salary);
}
else if(experience<4){
    console.log("get the bonus of 5% of salary",salary*0.05+salary);
    
}

