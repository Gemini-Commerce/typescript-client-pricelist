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
import { PricelistGetFullPriceItemPrice } from '../models/PricelistGetFullPriceItemPrice';
import { PricelistMoney } from '../models/PricelistMoney';
import { HttpFile } from '../http/http';

export class PricelistGetFullPriceItem {
    'id'?: string;
    'grn'?: string;
    'itemGrn'?: string;
    'basePrice'?: PricelistMoney;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'currency'?: PricelistCurrency;
    'prices'?: Array<PricelistGetFullPriceItemPrice>;
    'hasTierPrices'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemGrn",
            "baseName": "itemGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "basePrice",
            "baseName": "basePrice",
            "type": "PricelistMoney",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PricelistCurrency",
            "format": ""
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "Array<PricelistGetFullPriceItemPrice>",
            "format": ""
        },
        {
            "name": "hasTierPrices",
            "baseName": "hasTierPrices",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricelistGetFullPriceItem.attributeTypeMap;
    }

    public constructor() {
    }
}



