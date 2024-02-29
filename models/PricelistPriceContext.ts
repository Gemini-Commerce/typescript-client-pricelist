/**
 * pricelist/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PricelistCurrency } from '../models/PricelistCurrency';
import { HttpFile } from '../http/http';

export class PricelistPriceContext {
    'currency': PricelistCurrency;
    'segment'?: string;
    'segments'?: Array<string>;
    'market'?: string;
    'channel'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PricelistCurrency",
            "format": ""
        },
        {
            "name": "segment",
            "baseName": "segment",
            "type": "string",
            "format": ""
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "market",
            "baseName": "market",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricelistPriceContext.attributeTypeMap;
    }

    public constructor() {
    }
}



