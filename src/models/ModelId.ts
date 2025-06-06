/* tslint:disable */
/* eslint-disable */
/**
 * TTX.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelId
 */
export interface ModelId {
    /**
     * 
     * @type {number}
     * @memberof ModelId
     */
    value: number;
}

/**
 * Check if a given object implements the ModelId interface.
 */
export function instanceOfModelId(value: object): value is ModelId {
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function ModelIdFromJSON(json: any): ModelId {
    return ModelIdFromJSONTyped(json, false);
}

export function ModelIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelId {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
    };
}

export function ModelIdToJSON(json: any): ModelId {
    return ModelIdToJSONTyped(json, false);
}

export function ModelIdToJSONTyped(value?: ModelId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
    };
}

