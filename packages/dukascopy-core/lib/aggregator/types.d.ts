import { TimeframeType } from '../config/timeframes';
import { PriceType } from '../config/price-types';
export declare type AggregateInput = {
    data: number[][];
    fromTimeframe: TimeframeType;
    toTimeframe: TimeframeType;
    priceType: PriceType;
    ignoreFlats: boolean;
};