const rotate = (degree)=>{
    for(let i = 1 ;i <= 5 ;i++){
        let degree1 = degree+ 72*i;
        let id = "r" + i.toString();
        degree1 = (degree1).toString();
        console.log(degree1);
        document.getElementById(id).style.rotate = (degree1+"deg");
        document.getElementById((id+'p')).style.rotate = ("-"+degree1+"deg");
    }
}