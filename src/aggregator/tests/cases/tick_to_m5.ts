import { AggregateInput } from '../../types';

const input: AggregateInput = {
  data: require('./../sample_tick_data.json'),
  fromTimeframe: 'tick',
  toTimeframe: 'm5',
  priceType: 'bid',
  startTs: 1549238400000,
  volumes: true,
  ignoreFlats: true
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14581, 1.14534, 1.14534, 1376.16],
  [1549238700000, 1.14534, 1.14577, 1.14534, 1.14576, 646.48],
  [1549239000000, 1.14575, 1.1458, 1.1457, 1.14576, 325.09],
  [1549239300000, 1.14576, 1.14587, 1.14574, 1.14579, 310],
  [1549239600000, 1.14579, 1.14582, 1.14556, 1.14581, 524.07],
  [1549239900000, 1.14581, 1.14597, 1.14581, 1.14596, 559.67],
  [1549240200000, 1.14597, 1.14597, 1.14558, 1.14578, 931.27],
  [1549240500000, 1.14577, 1.14582, 1.14556, 1.14556, 740.09],
  [1549240800000, 1.14557, 1.14571, 1.14546, 1.14567, 619.82],
  [1549241100000, 1.14566, 1.14578, 1.14565, 1.14573, 554.65],
  [1549241400000, 1.14572, 1.14576, 1.14554, 1.14555, 904.18],
  [1549241700000, 1.14554, 1.14555, 1.14529, 1.14555, 969.68]
];

export { input, expectedOutput };