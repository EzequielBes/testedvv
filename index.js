function calculateSum() {
    let index = 13, sum = 0, k = 0;

    while (k < index) {
        k += 1;
        sum += k;
    }

    console.log("1) Final value of sum:", sum);
}

function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a < num) {
        temp = a;
        a = b;
        b = temp + b;
    }

    return a === num;
}

function checkFibonacci() {
    const number = 21;
    const result = isFibonacci(number)
        ? `${number} belongs to the Fibonacci sequence.`
        : `${number} does not belong to the Fibonacci sequence.`;

    console.log("2)", result);
}

function analyzeRevenue() {
    const monthlyRevenue = [
        { day: 1, value: 200 },
        { day: 2, value: 0 },
        { day: 3, value: 400 },
        { day: 4, value: 300 },
        { day: 5, value: 100 },
        { day: 6, value: 0 },
        { day: 7, value: 150 },
    ];

    const validDays = monthlyRevenue.filter(d => d.value > 0);
    const minRevenue = Math.min(...validDays.map(d => d.value));
    const maxRevenue = Math.max(...validDays.map(d => d.value));
    const totalRevenue = validDays.reduce((acc, d) => acc + d.value, 0);
    const averageRevenue = totalRevenue / validDays.length;
    const daysAboveAverage = validDays.filter(d => d.value > averageRevenue).length;

    console.log("3) Minimum revenue:", minRevenue);
    console.log("3) Maximum revenue:", maxRevenue);
    console.log("3) Days above average:", daysAboveAverage);
}

function calculateStateRevenuePercentage() {
    const revenue = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Others: 19849.53,
    };

    const totalRevenue = Object.values(revenue).reduce((acc, value) => acc + value, 0);

    console.log("4) Revenue percentage by state:");
    Object.entries(revenue).forEach(([state, value]) => {
        const percentage = ((value / totalRevenue) * 100).toFixed(2);
        console.log(`${state}: ${percentage}%`);
    });
}

function reverseString(input) {
    return input.split("").reverse().join("");
}

function displayReversedString() {
    const inputString = "JavaScript";
    console.log("5) Reversed string:", reverseString(inputString));
}

function analyzeMonthlyRevenue() {
    const dailyRevenue = [
        { dia: 1, valor: 22174.1664 },
        { dia: 2, valor: 24537.6698 },
        { dia: 3, valor: 26139.6134 },
        { dia: 4, valor: 0.0 },
        { dia: 5, valor: 0.0 },
        { dia: 6, valor: 26742.6612 },
        { dia: 7, valor: 0.0 },
        { dia: 8, valor: 42889.2258 },
        { dia: 9, valor: 46251.174 },
        { dia: 10, valor: 11191.4722 },
        { dia: 11, valor: 0.0 },
        { dia: 12, valor: 0.0 },
        { dia: 13, valor: 3847.4823 },
        { dia: 14, valor: 373.7838 },
        { dia: 15, valor: 2659.7563 },
        { dia: 16, valor: 48924.2448 },
        { dia: 17, valor: 18419.2614 },
        { dia: 18, valor: 0.0 },
        { dia: 19, valor: 0.0 },
        { dia: 20, valor: 35240.1826 },
        { dia: 21, valor: 43829.1667 },
        { dia: 22, valor: 18235.6852 },
        { dia: 23, valor: 4355.0662 },
        { dia: 24, valor: 13327.1025 },
        { dia: 25, valor: 0.0 },
        { dia: 26, valor: 0.0 },
        { dia: 27, valor: 25681.8318 },
        { dia: 28, valor: 1718.1221 },
        { dia: 29, valor: 13220.495 },
        { dia: 30, valor: 8414.61 }
    ];

    const validDays = dailyRevenue.filter(day => day.valor > 0);
    const totalRevenue = validDays.reduce((sum, day) => sum + day.valor, 0);
    const averageRevenue = totalRevenue / validDays.length;
    const minRevenue = Math.min(...validDays.map(day => day.valor));
    const maxRevenue = Math.max(...validDays.map(day => day.valor));
    const daysAboveAverage = validDays.filter(day => day.valor > averageRevenue).length;

    console.log("Monthly Revenue Analysis:");
    console.log("1) Minimum daily revenue:", minRevenue.toFixed(2));
    console.log("2) Maximum daily revenue:", maxRevenue.toFixed(2));
    console.log("3) Number of days above average revenue:", daysAboveAverage);
}

analyzeMonthlyRevenue();

calculateSum();
checkFibonacci();
analyzeRevenue();
calculateStateRevenuePercentage();
displayReversedString();
