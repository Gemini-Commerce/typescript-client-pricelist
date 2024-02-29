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

import { PricelistChannelFilter } from '../models/PricelistChannelFilter';
import { PricelistCurrencyFilter } from '../models/PricelistCurrencyFilter';
import { PricelistMarketFilter } from '../models/PricelistMarketFilter';
import { PricelistPriceListTypeFilter } from '../models/PricelistPriceListTypeFilter';
import { PricelistSegmentFilter } from '../models/PricelistSegmentFilter';
import { HttpFile } from '../http/http';

export class ListPriceListsRequestFilter {
    'code'?: string;
    'name'?: string;
    'description'?: string;
    'isActive'?: boolean;
    'isDefault'?: boolean;
    'currencyFilter'?: PricelistCurrencyFilter;
    'vatIncluded'?: boolean;
    'deliveredDutyPaid'?: boolean;
    'segmentsFilter'?: PricelistSegmentFilter;
    'marketsFilter'?: PricelistMarketFilter;
    'channelsFilter'?: PricelistChannelFilter;
    'typeFilter'?: PricelistPriceListTypeFilter;
    'isSystem'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "currencyFilter",
            "baseName": "currencyFilter",
            "type": "PricelistCurrencyFilter",
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
            "name": "segmentsFilter",
            "baseName": "segmentsFilter",
            "type": "PricelistSegmentFilter",
            "format": ""
        },
        {
            "name": "marketsFilter",
            "baseName": "marketsFilter",
            "type": "PricelistMarketFilter",
            "format": ""
        },
        {
            "name": "channelsFilter",
            "baseName": "channelsFilter",
            "type": "PricelistChannelFilter",
            "format": ""
        },
        {
            "name": "typeFilter",
            "baseName": "typeFilter",
            "type": "PricelistPriceListTypeFilter",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "isSystem",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListPriceListsRequestFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

