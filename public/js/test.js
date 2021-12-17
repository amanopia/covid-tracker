// jshint esversion:6

// import {name1} from "./server.js";
// console.log(name1);
import {name1} from "./server.js";
// const myArea = axe(9);
// console.log(myArea);
// console.log(name1);

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
$(document).ready(function(){
  var url = "https://data.covid19india.org/data.json";
  $.getJSON(url, function(data){
    console.log(data);
    var total_active, total_confirmed, total_recovered, total_deceased;
    var total_active_all = [];

    var active = [];
    var state = [];
    var confirmed = [];
    var recovered = [];
    var deaths = [];

    $.each(data.statewise, function(id,obj){
      active.push(obj.active);
      state.push(obj.state); // Accessing the state property inside the array
      confirmed.push(obj.confirmed);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });

    active.shift();
    state.shift();
    confirmed.shift();
    recovered.shift();
    deaths.shift();

    // console.log(active, state, confirmed, recovered, deaths);

    // For displaying numbers on top of the web-page ----
    total_active = data.statewise[0].active;
    total_confirmed = data.statewise[0].confirmed;
    total_recovered = data.statewise[0].recovered;
    total_deceased = data.statewise[0].deaths;

    $("#confirmed").append(total_confirmed);
    $("#active").append(total_active);
    $("#deceased").append(total_deceased);
    $("#recovered").append(total_recovered);

    // ----

    var mychart = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(myChart, {
      type: "line",
      data: {
        labels: state,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmed,
            backgroundColor: "#B983FF",
            minBarLength: 200,
          },
          {
            label: "Recovered Cases",
            data: recovered,
            backgroundColor: "#94B3FD",
            minBarLength: 100
          },
          {
            label: "Active Cases",
            data: active,
            backgroundColor: "#94DAFF",
            minBarLength: 100
          },
          {
            label: "Deceased",
            data: deaths,
            backgroundColor: "#FF5F7E",
            minBarLength: 100
          }

        ]
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: "Chart Title"
          }
        }
      }
    });
  });
});
