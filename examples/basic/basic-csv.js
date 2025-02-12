const { getHistoricalRates } = require('dukascopy-node-jason');

(async () => {
  try {
    const data = await getHistoricalRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-03-01')
      },
      timeframe: 'd1',
      format: 'csv'
    });

    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
})();
