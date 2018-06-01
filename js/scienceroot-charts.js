var tokenAllocationChartContext = document.getElementById("tokenAllocationChart").getContext('2d');
      var tokenAllocationChart = new Chart(tokenAllocationChartContext, {
          type: 'doughnut',
          data: {
              labels: ["Tokensale 60%",
                       "Founders, Team, Advisors and Early Contributors 15%",
                       "Bounty, Airdrop, Community 3%",
                       "Referral 2%",
                       "Scienceroot Fund 20%"],
              datasets: [{
                  data: [60, 15, 3, 2, 20],
                  backgroundColor: [
                      'rgba(42, 91, 252)',
                      'rgba(54, 162, 235)',
                      'rgba(255, 206, 86)',
                      'rgba(75, 192, 192)',
                      'rgba(153, 102, 255)'
                  ],
                  borderColor: [
                      'rgba(42, 91, 252, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
            responsive: false,
            title: {
              display: true,
              fontSize: 26,
              fontColor: '#187CFB',
              text: 'Token Allocation'
            },
            legend: {
              position: 'top',
              display: false,
              labels: {
                // This more specific font property overrides the global property
                fontColor: "#FFFFFF",
                fontSize: 18
              }
            }
          }
      });

      var useOfProceedsChartContext = document.getElementById("useOfProceedsChart").getContext('2d');
      var useOfProceedsChart = new Chart(useOfProceedsChartContext, {
          type: 'doughnut',
          data: {
              labels: ["Software Deelopment 30%",
                       "Business Development 40%",
                       "Operations and services 15%",
                       "Reserve and Unexpected 10%",
                       "Legal 5%"],
              datasets: [{
                  data: [30, 40, 15, 10, 5],
                  backgroundColor: [
                      'rgba(42, 91, 252)',
                      'rgba(54, 162, 235)',
                      'rgba(255, 206, 86)',
                      'rgba(75, 192, 192)',
                      'rgba(153, 102, 255)'
                  ],
                  borderColor: [
                      'rgba(42, 91, 252)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
            responsive: false,
            title: {
              display: true,
              // fontStyle: 'None',
              fontSize: 26,
              fontColor: '#187CFB',
              text: 'Use of Proceeds'
            },
            legend: {
              position: 'top',
              display: false,
              labels: {
                // This more specific font property overrides the global property
                fontColor: "#FFFFFF",
                fontSize: 18
              }
            }
          }
      });