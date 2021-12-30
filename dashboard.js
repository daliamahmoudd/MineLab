var xValues = ["Jan","Feb","March","April","May", "June", "july","Aug", "sep" ,"Oct", "Nov", "Dec"];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = ('#myChart');
var ctx = 'myChart';
chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
              fill: false,
              backgroundColor: "green",
              borderColor: "green",
              data: yValues
                }]
    },
    options: {
 legend: {display: false},
  
    }});
// let asideSection = document.getElementsByClassName("asideConatiner");
// let img =  document.getElementsByClassName("image");
//     function WhitebackgroundColor()
//     {
//       for(var i=0; i<asideSection.length; i++)
//       {
//           asideSection[i].style.background="white";  
//           img[i].style.background="white"; 
//       }
//     }
