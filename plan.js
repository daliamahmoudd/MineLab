let c =1;
function myFunction() {
let view = document.getElementById('onPres');
if(c%2==1)
{
       view.classList.add("onPressView");
       view.classList.remove("displayed");
       document.getElementById("overlay").style.display = "block";
}
else
{
       view.classList.remove("onPressView");
       view.classList.add("displayed");
       document.getElementById("overlay").style.display = "none";

}
    c++;
}
