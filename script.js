let show = false
// document.getElementById("navbarTogglerDemo01").style.transform = "translateY(-600px)";
const toggle = ()=>{
    if(show){
        document.getElementById("navbarTogglerDemo01").style.transform = "translateY(-600px)";
    }else{
        document.getElementById("navbarTogglerDemo01").style.transform = "translateY(0px)";
    }
    show = !show
}
