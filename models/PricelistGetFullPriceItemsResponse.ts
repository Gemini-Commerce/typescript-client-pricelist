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

import { PricelistGetFullPriceItem } from '../models/PricelistGetFullPriceItem';
import { HttpFile } from '../http/http';

export class PricelistGetFullPriceItemsResponse {
    'priceItems'?: Array<PricelistGetFullPriceItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priceItems",
            "baseName": "priceItems",
            "type": "Array<PricelistGetFullPriceItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricelistGetFullPriceItemsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

