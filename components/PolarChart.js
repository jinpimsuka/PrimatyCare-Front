import { PolarArea } from 'vue-chartjs'

  export default {
    extends: PolarArea,
    data () {
      return {
        chartData: {
            labels: ["type1", "type2", "type3", "type4",],
            datasets: [
            {
              borderWidth: 1,
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',                
              ],
              data: [4, 2, 2, 1]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }