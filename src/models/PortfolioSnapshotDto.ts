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
 * @interface PortfolioSnapshotDto
 */
export interface PortfolioSnapshotDto {
    /**
     * 
     * @type {number}
     * @memberof PortfolioSnapshotDto
     */
    playerId: number;
    /**
     * 
     * @type {number}
     * @memberof PortfolioSnapshotDto
     */
    value: number;
    /**
     * 
     * @type {Date}
     * @memberof PortfolioSnapshotDto
     */
    time: Date;
}

/**
 * Check if a given object implements the PortfolioSnapshotDto interface.
 */
export function instanceOfPortfolioSnapshotDto(value: object): value is PortfolioSnapshotDto {
    if (!('playerId' in value) || value['playerId'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    return true;
}

export function PortfolioSnapshotDtoFromJSON(json: any): PortfolioSnapshotDto {
    return PortfolioSnapshotDtoFromJSONTyped(json, false);
}

export function PortfolioSnapshotDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortfolioSnapshotDto {
    if (json == null) {
        return json;
    }
    return {
        
        'playerId': json['player_id'],
        'value': json['value'],
        'time': (new Date(json['time'])),
    };
}

export function PortfolioSnapshotDtoToJSON(json: any): PortfolioSnapshotDto {
    return PortfolioSnapshotDtoToJSONTyped(json, false);
}

export function PortfolioSnapshotDtoToJSONTyped(value?: PortfolioSnapshotDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'player_id': value['playerId'],
        'value': value['value'],
        'time': ((value['time']).toISOString()),
    };
}

