/* tslint:disable */
/* eslint-disable */
/**
 * PriceList Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface PricelistChannelFilter
 */
export interface PricelistChannelFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof PricelistChannelFilter
     */
    'channels'?: Array<string>;
    /**
     * 
     * @type {PricelistFilterCondition}
     * @memberof PricelistChannelFilter
     */
    'condition'?: PricelistFilterCondition;
}