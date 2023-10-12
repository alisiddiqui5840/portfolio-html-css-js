const options = {
    chart: {
      height: 450,
      width: "100%",
      type: "bar",
      background: "#f4f4f4",
      foreColor: "#333"
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    series: [
      {
        name: "SKillscore",
        data: [
          100 ,
          90,
          80,
          70,
          60,
        
          40
        ]
      }
    ],
    xaxis: {
      categories: [
        "html",
        "css",
        "js",
        "Bootstrap",
        "UI/UX",
        "MObile App",
      
      ]
    },
    fill: {
      colors: ["#F44336"]
    },
    dataLabels: {
      enabled: false
    },
  
    title: {
      text: "Skills Of Ali Siddiqui",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px"
      }
    }
  };
  
  // Init chart
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  
  // Render chart
  chart.render();
  
  // Event example
  document.getElementById("change").addEventListener("click", () =>
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: true
        }
      }
    })
  );
  