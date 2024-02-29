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

import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class RpcStatus {
    'code'?: number;
    'message'?: string;
    'details'?: Array<ProtobufAny>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<ProtobufAny>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RpcStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

