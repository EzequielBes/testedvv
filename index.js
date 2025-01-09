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

calculateSum();
checkFibonacci();
analyzeRevenue();
calculateStateRevenuePercentage();
displayReversedString();
