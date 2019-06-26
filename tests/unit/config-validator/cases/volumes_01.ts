const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'volumes' field is required!"]
};

const testName = 'aaa';

const testGroup = 'Volumes';

export { testName, testGroup, config, expectedOutput };