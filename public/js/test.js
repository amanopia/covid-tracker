//jshint esversion:6
// const ctx = document.getElementById('myChart').getContext('2d');
// const labels = [ "2012", "2013", "2014", "2015", "2016", "2017", "2018","2019", "2020"];
// const data = {
//   labels,
//   datasets: [{
//     data: [221,326,165,350,420, 370, 500, 456, 455],
//     label: "Minecraft Sales"
//   }]
// };
//
// const config = {
//   type: "bar",
//   data: data,
//   options: {
//     responsive: true,
//   },
// };
//
// const myChart = new Chart(ctx, config);
const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Global Average Temprature',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
