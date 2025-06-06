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
import type { PlayerPartialDto } from './PlayerPartialDto';
import {
    PlayerPartialDtoFromJSON,
    PlayerPartialDtoFromJSONTyped,
    PlayerPartialDtoToJSON,
    PlayerPartialDtoToJSONTyped,
} from './PlayerPartialDto';
import type { CreatorRarityDto } from './CreatorRarityDto';
import {
    CreatorRarityDtoFromJSON,
    CreatorRarityDtoFromJSONTyped,
    CreatorRarityDtoToJSON,
    CreatorRarityDtoToJSONTyped,
} from './CreatorRarityDto';
import type { ModelId } from './ModelId';
import {
    ModelIdFromJSON,
    ModelIdFromJSONTyped,
    ModelIdToJSON,
    ModelIdToJSONTyped,
} from './ModelId';

/**
 * 
 * @export
 * @interface LootBoxResultDto
 */
export interface LootBoxResultDto {
    /**
     * 
     * @type {ModelId}
     * @memberof LootBoxResultDto
     */
    lootboxId: ModelId;
    /**
     * 
     * @type {PlayerPartialDto}
     * @memberof LootBoxResultDto
     */
    player: PlayerPartialDto;
    /**
     * 
     * @type {CreatorRarityDto}
     * @memberof LootBoxResultDto
     */
    result: CreatorRarityDto;
    /**
     * 
     * @type {Array<CreatorRarityDto>}
     * @memberof LootBoxResultDto
     */
    rarities: Array<CreatorRarityDto>;
}

/**
 * Check if a given object implements the LootBoxResultDto interface.
 */
export function instanceOfLootBoxResultDto(value: object): value is LootBoxResultDto {
    if (!('lootboxId' in value) || value['lootboxId'] === undefined) return false;
    if (!('player' in value) || value['player'] === undefined) return false;
    if (!('result' in value) || value['result'] === undefined) return false;
    if (!('rarities' in value) || value['rarities'] === undefined) return false;
    return true;
}

export function LootBoxResultDtoFromJSON(json: any): LootBoxResultDto {
    return LootBoxResultDtoFromJSONTyped(json, false);
}

export function LootBoxResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LootBoxResultDto {
    if (json == null) {
        return json;
    }
    return {
        
        'lootboxId': ModelIdFromJSON(json['lootbox_id']),
        'player': PlayerPartialDtoFromJSON(json['player']),
        'result': CreatorRarityDtoFromJSON(json['result']),
        'rarities': ((json['rarities'] as Array<any>).map(CreatorRarityDtoFromJSON)),
    };
}

export function LootBoxResultDtoToJSON(json: any): LootBoxResultDto {
    return LootBoxResultDtoToJSONTyped(json, false);
}

export function LootBoxResultDtoToJSONTyped(value?: LootBoxResultDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lootbox_id': ModelIdToJSON(value['lootboxId']),
        'player': PlayerPartialDtoToJSON(value['player']),
        'result': CreatorRarityDtoToJSON(value['result']),
        'rarities': ((value['rarities'] as Array<any>).map(CreatorRarityDtoToJSON)),
    };
}

