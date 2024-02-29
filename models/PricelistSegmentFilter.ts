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

import { PricelistFilterCondition } from '../models/PricelistFilterCondition';
import { HttpFile } from '../http/http';

export class PricelistSegmentFilter {
    'segments'?: Array<string>;
    'condition'?: PricelistFilterCondition;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "segments",
            "baseName": "segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "condition",
            "baseName": "condition",
            "type": "PricelistFilterCondition",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricelistSegmentFilter.attributeTypeMap;
    }

    public constructor() {
    }
}



