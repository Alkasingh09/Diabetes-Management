// Data for comparison chart
const ctx = document.getElementById('comparisonChart').getContext('2d');
const comparisonChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Stevia', 'Erythritol', 'Xylitol', 'Monk Fruit', 'Agave Nectar'],
        datasets: [{
            label: 'Calories (per 100g)',
            data: [0, 0.24, 2.4, 0, 20],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
