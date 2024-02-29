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
import { PricelistMoney } from '../models/PricelistMoney';
import { HttpFile } from '../http/http';

export class PricelistGetPriceListItem {
    'id'?: string;
    'grn'?: string;
    'itemGrn'?: string;
    'price'?: PricelistMoney;
    'doubleFormatPrice'?: number;
    'endDatePrice'?: Date;
    'basePrice'?: PricelistMoney;
    'doubleFormatBasePrice'?: number;
    'currency'?: PricelistCurrency;
    'hasTierPrices'?: boolean;
    'createdAt'?: Date;
    'updatedAt'?: Date;

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
            "name": "price",
            "baseName": "price",
            "type": "PricelistMoney",
            "format": ""
        },
        {
            "name": "doubleFormatPrice",
            "baseName": "doubleFormatPrice",
            "type": "number",
            "format": "double"
        },
        {
            "name": "endDatePrice",
            "baseName": "endDatePrice",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "basePrice",
            "baseName": "basePrice",
            "type": "PricelistMoney",
            "format": ""
        },
        {
            "name": "doubleFormatBasePrice",
            "baseName": "doubleFormatBasePrice",
            "type": "number",
            "format": "double"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PricelistCurrency",
            "format": ""
        },
        {
            "name": "hasTierPrices",
            "baseName": "hasTierPrices",
            "type": "boolean",
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
        }    ];

    static getAttributeTypeMap() {
        return PricelistGetPriceListItem.attributeTypeMap;
    }

    public constructor() {
    }
}



