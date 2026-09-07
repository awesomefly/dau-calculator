import test from 'node:test';
import assert from 'node:assert/strict';

import {
  fitRetentionCurve,
  forecastDau,
} from './model.js';

test('fitRetentionCurve recovers a power-law retention curve', () => {
  const result = fitRetentionCurve([1, 7, 30], [0.5, 0.1889822365, 0.0912870929]);

  assert.ok(Math.abs(result.a - 0.5) < 0.000001);
  assert.ok(Math.abs(result.b + 0.5) < 0.000001);
});

test('forecastDau adds retained stock users and retained new-user cohorts', () => {
  const result = forecastDau({
    currentStockDau: 1000,
    dailyNewUsers: 100,
    days: 2,
    stockRetentionRate: () => 0.5,
    newUserRetentionRate: () => 0.5,
  });

  assert.deepEqual(result, [1000, 600, 650]);
});
