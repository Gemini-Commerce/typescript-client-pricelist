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
import { PricelistPriceListType } from '../models/PricelistPriceListType';
import { HttpFile } from '../http/http';

export class PricelistGetPriceListByCodeResponse {
    'id'?: string;
    'grn'?: string;
    'code'?: string;
    'name'?: string;
    'description'?: string;
    'isActive'?: boolean;
    'isDefault'?: boolean;
    'currency'?: PricelistCurrency;
    'vatIncluded'?: boolean;
    'deliveredDutyPaid'?: boolean;
    'segments'?: Array<string>;
    'markets'?: Array<string>;
    'channels'?: Array<string>;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'type'?: PricelistPriceListType;
    'isSystem'?: boolean;

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
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PricelistCurrency",
            "format": ""
        },
        {
            "name": "vatIncluded",
            "baseName": "vatIncluded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deliveredDutyPaid",
            "baseName": "deliveredDutyPaid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "markets",
            "baseName": "markets",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<string>",
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
            "name": "type",
            "baseName": "type",
            "type": "PricelistPriceListType",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "isSystem",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricelistGetPriceListByCodeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



