import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: ["ธารน้ำกรณ์", "แม่กรณ์", "ริมน้ำกก", "ดอยเขาควาย", "รอยพระพุทธบาท"],
          datasets: [{
            label: 'จำนวนประชากรในแต่ละชุมชน',
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            pointBorderColor: '#2554FF',
            data: [1, 2, 2, 1, 2]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          //responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }