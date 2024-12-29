export {
  validateConfig,
  ConfigValidationError,
  SanitizedConfig,
  ValidateConfigOutput,
  validateConfigNode
} from './config-validator';
export { InputSchema, schema } from './config-validator/schema';
export { normaliseDates } from './dates-normaliser';
export { generateUrls, URL_ROOT } from './url-generator';
export { BufferFetcher } from './buffer-fetcher';
export { processData } from './processor';
export { formatOutput } from './output-formatter';
export { CacheManager } from './cache-manager';

export {
  Config,
  ConfigArrayTickItem,
  ConfigArrayItem,
  ConfigJsonTickItem,
  ConfigJsonItem,
  ConfigCsvItem,
  DefaultConfig,
  defaultConfig
} from './config';
export { Instrument, InstrumentType } from './config/instruments';
export { Timeframe, TimeframeType } from './config/timeframes';
export { Format, FormatType } from './config/format';
export { Price, PriceType } from './config/price-types';

export { ArrayItem, ArrayTickItem, JsonItem, JsonItemTick, Output } from './output-formatter/types';

export { RuleDate, RuleBoolean, RuleNumber, RuleString, RuleObject } from 'fastest-validator';

export { getHistoricRates, getHistoricalRates, setProxyConfig } from './getHistoricalRates';

export {
  getCurrentRates,
  CurrentRatesConfig,
  CurrentRatesConfigArrayItem,
  CurrentRatesConfigArrayTickItem,
  CurrentRatesConfigCsv,
  CurrentRatesConfigJsonItem,
  CurrentRatesConfigJsonTickItem
} from './getCurrentRates';

import * as instrumentsGroup from './utils/instrument-meta-data/generated/instrument-groups.json'

// export const instrumentsGroupExp = [...instrumentsGroup]
export const instrumentsGroupExp = () => {
  return [...instrumentsGroup]
}

// import * as instrumentsMetadata from './utils/instrument-meta-data/generated/instrument-meta-data.json'

// export const instrumentsMetadataExp: any = { ...instrumentsMetadata }

// Object.keys(instrumentsMetadataExp).forEach((key) => {
//   instrumentsMetadataExp[key]['dukas_id'] = key
// })

