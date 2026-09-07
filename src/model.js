function linearRegression(x, y) {
  const n = x.length;
  const sumX = x.reduce((sum, value) => sum + value, 0);
  const sumY = y.reduce((sum, value) => sum + value, 0);
  const sumXY = x.reduce((sum, value, index) => sum + value * y[index], 0);
  const sumXX = x.reduce((sum, value) => sum + value * value, 0);
  const b = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const a = (sumY - b * sumX) / n;

  return { a, b };
}

export function fitRetentionCurve(days, retentionRates) {
  const logDays = days.map(Math.log);
  const logRetentionRates = retentionRates.map(Math.log);
  const result = linearRegression(logDays, logRetentionRates);

  return { a: Math.exp(result.a), b: result.b };
}

export function retentionRate(curve, day) {
  return curve.a * Math.pow(day, curve.b);
}

export function buildRetentionData(curve, startDay, endDay) {
  return Array.from({ length: endDay - startDay + 1 }, (_, index) => {
    const day = startDay + index;
    return [day, retentionRate(curve, day)];
  });
}

export function forecastDau({
  currentStockDau,
  dailyNewUsers,
  days,
  stockRetentionRate,
  newUserRetentionRate,
}) {
  const result = [Number(currentStockDau)];
  let retainedNewUsers = Number(dailyNewUsers);

  for (let day = 1; day <= days; day += 1) {
    if (day > 1) {
      retainedNewUsers += newUserRetentionRate(day - 1) * dailyNewUsers;
    }
    const retainedStockUsers = stockRetentionRate(day) * currentStockDau;
    result.push(Math.round(retainedStockUsers + retainedNewUsers));
  }

  return result;
}
