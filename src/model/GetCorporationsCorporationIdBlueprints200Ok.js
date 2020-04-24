/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.3.8
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdBlueprints200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdBlueprints200Ok model module.
   * @module model/GetCorporationsCorporationIdBlueprints200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdBlueprints200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdBlueprints200Ok
   * @class
   * @param itemId {Number} Unique ID for this item.
   * @param locationFlag {module:model/GetCorporationsCorporationIdBlueprints200Ok.LocationFlagEnum} Type of the location_id
   * @param locationId {Number} References a station, a ship or an item_id if this blueprint is located within a container.
   * @param materialEfficiency {Number} Material Efficiency Level of the blueprint.
   * @param quantity {Number} A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @param runs {Number} Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @param timeEfficiency {Number} Time Efficiency Level of the blueprint.
   * @param typeId {Number} type_id integer
   */
  var exports = function(itemId, locationFlag, locationId, materialEfficiency, quantity, runs, timeEfficiency, typeId) {
    this.itemId = itemId;
    this.locationFlag = locationFlag;
    this.locationId = locationId;
    this.materialEfficiency = materialEfficiency;
    this.quantity = quantity;
    this.runs = runs;
    this.timeEfficiency = timeEfficiency;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdBlueprints200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdBlueprints200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdBlueprints200Ok} The populated <code>GetCorporationsCorporationIdBlueprints200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('item_id'))
        obj.itemId = ApiClient.convertToType(data['item_id'], 'Number');
      if (data.hasOwnProperty('location_flag'))
        obj.locationFlag = ApiClient.convertToType(data['location_flag'], 'String');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('material_efficiency'))
        obj.materialEfficiency = ApiClient.convertToType(data['material_efficiency'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('runs'))
        obj.runs = ApiClient.convertToType(data['runs'], 'Number');
      if (data.hasOwnProperty('time_efficiency'))
        obj.timeEfficiency = ApiClient.convertToType(data['time_efficiency'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * Unique ID for this item.
   * @member {Number} itemId
   */
  exports.prototype.itemId = undefined;

  /**
   * Type of the location_id
   * @member {module:model/GetCorporationsCorporationIdBlueprints200Ok.LocationFlagEnum} locationFlag
   */
  exports.prototype.locationFlag = undefined;

  /**
   * References a station, a ship or an item_id if this blueprint is located within a container.
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * Material Efficiency Level of the blueprint.
   * @member {Number} materialEfficiency
   */
  exports.prototype.materialEfficiency = undefined;

  /**
   * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
   * @member {Number} runs
   */
  exports.prototype.runs = undefined;

  /**
   * Time Efficiency Level of the blueprint.
   * @member {Number} timeEfficiency
   */
  exports.prototype.timeEfficiency = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;


  /**
   * Allowed values for the <code>locationFlag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationFlagEnum = {
    /**
     * value: "AssetSafety"
     * @const
     */
    assetSafety: "AssetSafety",

    /**
     * value: "AutoFit"
     * @const
     */
    autoFit: "AutoFit",

    /**
     * value: "Bonus"
     * @const
     */
    bonus: "Bonus",

    /**
     * value: "Booster"
     * @const
     */
    booster: "Booster",

    /**
     * value: "BoosterBay"
     * @const
     */
    boosterBay: "BoosterBay",

    /**
     * value: "Capsule"
     * @const
     */
    capsule: "Capsule",

    /**
     * value: "Cargo"
     * @const
     */
    cargo: "Cargo",

    /**
     * value: "CorpDeliveries"
     * @const
     */
    corpDeliveries: "CorpDeliveries",

    /**
     * value: "CorpSAG1"
     * @const
     */
    corpSAG1: "CorpSAG1",

    /**
     * value: "CorpSAG2"
     * @const
     */
    corpSAG2: "CorpSAG2",

    /**
     * value: "CorpSAG3"
     * @const
     */
    corpSAG3: "CorpSAG3",

    /**
     * value: "CorpSAG4"
     * @const
     */
    corpSAG4: "CorpSAG4",

    /**
     * value: "CorpSAG5"
     * @const
     */
    corpSAG5: "CorpSAG5",

    /**
     * value: "CorpSAG6"
     * @const
     */
    corpSAG6: "CorpSAG6",

    /**
     * value: "CorpSAG7"
     * @const
     */
    corpSAG7: "CorpSAG7",

    /**
     * value: "CrateLoot"
     * @const
     */
    crateLoot: "CrateLoot",

    /**
     * value: "Deliveries"
     * @const
     */
    deliveries: "Deliveries",

    /**
     * value: "DroneBay"
     * @const
     */
    droneBay: "DroneBay",

    /**
     * value: "DustBattle"
     * @const
     */
    dustBattle: "DustBattle",

    /**
     * value: "DustDatabank"
     * @const
     */
    dustDatabank: "DustDatabank",

    /**
     * value: "FighterBay"
     * @const
     */
    fighterBay: "FighterBay",

    /**
     * value: "FighterTube0"
     * @const
     */
    fighterTube0: "FighterTube0",

    /**
     * value: "FighterTube1"
     * @const
     */
    fighterTube1: "FighterTube1",

    /**
     * value: "FighterTube2"
     * @const
     */
    fighterTube2: "FighterTube2",

    /**
     * value: "FighterTube3"
     * @const
     */
    fighterTube3: "FighterTube3",

    /**
     * value: "FighterTube4"
     * @const
     */
    fighterTube4: "FighterTube4",

    /**
     * value: "FleetHangar"
     * @const
     */
    fleetHangar: "FleetHangar",

    /**
     * value: "FrigateEscapeBay"
     * @const
     */
    frigateEscapeBay: "FrigateEscapeBay",

    /**
     * value: "Hangar"
     * @const
     */
    hangar: "Hangar",

    /**
     * value: "HangarAll"
     * @const
     */
    hangarAll: "HangarAll",

    /**
     * value: "HiSlot0"
     * @const
     */
    hiSlot0: "HiSlot0",

    /**
     * value: "HiSlot1"
     * @const
     */
    hiSlot1: "HiSlot1",

    /**
     * value: "HiSlot2"
     * @const
     */
    hiSlot2: "HiSlot2",

    /**
     * value: "HiSlot3"
     * @const
     */
    hiSlot3: "HiSlot3",

    /**
     * value: "HiSlot4"
     * @const
     */
    hiSlot4: "HiSlot4",

    /**
     * value: "HiSlot5"
     * @const
     */
    hiSlot5: "HiSlot5",

    /**
     * value: "HiSlot6"
     * @const
     */
    hiSlot6: "HiSlot6",

    /**
     * value: "HiSlot7"
     * @const
     */
    hiSlot7: "HiSlot7",

    /**
     * value: "HiddenModifiers"
     * @const
     */
    hiddenModifiers: "HiddenModifiers",

    /**
     * value: "Implant"
     * @const
     */
    implant: "Implant",

    /**
     * value: "Impounded"
     * @const
     */
    impounded: "Impounded",

    /**
     * value: "JunkyardReprocessed"
     * @const
     */
    junkyardReprocessed: "JunkyardReprocessed",

    /**
     * value: "JunkyardTrashed"
     * @const
     */
    junkyardTrashed: "JunkyardTrashed",

    /**
     * value: "LoSlot0"
     * @const
     */
    loSlot0: "LoSlot0",

    /**
     * value: "LoSlot1"
     * @const
     */
    loSlot1: "LoSlot1",

    /**
     * value: "LoSlot2"
     * @const
     */
    loSlot2: "LoSlot2",

    /**
     * value: "LoSlot3"
     * @const
     */
    loSlot3: "LoSlot3",

    /**
     * value: "LoSlot4"
     * @const
     */
    loSlot4: "LoSlot4",

    /**
     * value: "LoSlot5"
     * @const
     */
    loSlot5: "LoSlot5",

    /**
     * value: "LoSlot6"
     * @const
     */
    loSlot6: "LoSlot6",

    /**
     * value: "LoSlot7"
     * @const
     */
    loSlot7: "LoSlot7",

    /**
     * value: "Locked"
     * @const
     */
    locked: "Locked",

    /**
     * value: "MedSlot0"
     * @const
     */
    medSlot0: "MedSlot0",

    /**
     * value: "MedSlot1"
     * @const
     */
    medSlot1: "MedSlot1",

    /**
     * value: "MedSlot2"
     * @const
     */
    medSlot2: "MedSlot2",

    /**
     * value: "MedSlot3"
     * @const
     */
    medSlot3: "MedSlot3",

    /**
     * value: "MedSlot4"
     * @const
     */
    medSlot4: "MedSlot4",

    /**
     * value: "MedSlot5"
     * @const
     */
    medSlot5: "MedSlot5",

    /**
     * value: "MedSlot6"
     * @const
     */
    medSlot6: "MedSlot6",

    /**
     * value: "MedSlot7"
     * @const
     */
    medSlot7: "MedSlot7",

    /**
     * value: "OfficeFolder"
     * @const
     */
    officeFolder: "OfficeFolder",

    /**
     * value: "Pilot"
     * @const
     */
    pilot: "Pilot",

    /**
     * value: "PlanetSurface"
     * @const
     */
    planetSurface: "PlanetSurface",

    /**
     * value: "QuafeBay"
     * @const
     */
    quafeBay: "QuafeBay",

    /**
     * value: "Reward"
     * @const
     */
    reward: "Reward",

    /**
     * value: "RigSlot0"
     * @const
     */
    rigSlot0: "RigSlot0",

    /**
     * value: "RigSlot1"
     * @const
     */
    rigSlot1: "RigSlot1",

    /**
     * value: "RigSlot2"
     * @const
     */
    rigSlot2: "RigSlot2",

    /**
     * value: "RigSlot3"
     * @const
     */
    rigSlot3: "RigSlot3",

    /**
     * value: "RigSlot4"
     * @const
     */
    rigSlot4: "RigSlot4",

    /**
     * value: "RigSlot5"
     * @const
     */
    rigSlot5: "RigSlot5",

    /**
     * value: "RigSlot6"
     * @const
     */
    rigSlot6: "RigSlot6",

    /**
     * value: "RigSlot7"
     * @const
     */
    rigSlot7: "RigSlot7",

    /**
     * value: "SecondaryStorage"
     * @const
     */
    secondaryStorage: "SecondaryStorage",

    /**
     * value: "ServiceSlot0"
     * @const
     */
    serviceSlot0: "ServiceSlot0",

    /**
     * value: "ServiceSlot1"
     * @const
     */
    serviceSlot1: "ServiceSlot1",

    /**
     * value: "ServiceSlot2"
     * @const
     */
    serviceSlot2: "ServiceSlot2",

    /**
     * value: "ServiceSlot3"
     * @const
     */
    serviceSlot3: "ServiceSlot3",

    /**
     * value: "ServiceSlot4"
     * @const
     */
    serviceSlot4: "ServiceSlot4",

    /**
     * value: "ServiceSlot5"
     * @const
     */
    serviceSlot5: "ServiceSlot5",

    /**
     * value: "ServiceSlot6"
     * @const
     */
    serviceSlot6: "ServiceSlot6",

    /**
     * value: "ServiceSlot7"
     * @const
     */
    serviceSlot7: "ServiceSlot7",

    /**
     * value: "ShipHangar"
     * @const
     */
    shipHangar: "ShipHangar",

    /**
     * value: "ShipOffline"
     * @const
     */
    shipOffline: "ShipOffline",

    /**
     * value: "Skill"
     * @const
     */
    skill: "Skill",

    /**
     * value: "SkillInTraining"
     * @const
     */
    skillInTraining: "SkillInTraining",

    /**
     * value: "SpecializedAmmoHold"
     * @const
     */
    specializedAmmoHold: "SpecializedAmmoHold",

    /**
     * value: "SpecializedCommandCenterHold"
     * @const
     */
    specializedCommandCenterHold: "SpecializedCommandCenterHold",

    /**
     * value: "SpecializedFuelBay"
     * @const
     */
    specializedFuelBay: "SpecializedFuelBay",

    /**
     * value: "SpecializedGasHold"
     * @const
     */
    specializedGasHold: "SpecializedGasHold",

    /**
     * value: "SpecializedIndustrialShipHold"
     * @const
     */
    specializedIndustrialShipHold: "SpecializedIndustrialShipHold",

    /**
     * value: "SpecializedLargeShipHold"
     * @const
     */
    specializedLargeShipHold: "SpecializedLargeShipHold",

    /**
     * value: "SpecializedMaterialBay"
     * @const
     */
    specializedMaterialBay: "SpecializedMaterialBay",

    /**
     * value: "SpecializedMediumShipHold"
     * @const
     */
    specializedMediumShipHold: "SpecializedMediumShipHold",

    /**
     * value: "SpecializedMineralHold"
     * @const
     */
    specializedMineralHold: "SpecializedMineralHold",

    /**
     * value: "SpecializedOreHold"
     * @const
     */
    specializedOreHold: "SpecializedOreHold",

    /**
     * value: "SpecializedPlanetaryCommoditiesHold"
     * @const
     */
    specializedPlanetaryCommoditiesHold: "SpecializedPlanetaryCommoditiesHold",

    /**
     * value: "SpecializedSalvageHold"
     * @const
     */
    specializedSalvageHold: "SpecializedSalvageHold",

    /**
     * value: "SpecializedShipHold"
     * @const
     */
    specializedShipHold: "SpecializedShipHold",

    /**
     * value: "SpecializedSmallShipHold"
     * @const
     */
    specializedSmallShipHold: "SpecializedSmallShipHold",

    /**
     * value: "StructureActive"
     * @const
     */
    structureActive: "StructureActive",

    /**
     * value: "StructureFuel"
     * @const
     */
    structureFuel: "StructureFuel",

    /**
     * value: "StructureInactive"
     * @const
     */
    structureInactive: "StructureInactive",

    /**
     * value: "StructureOffline"
     * @const
     */
    structureOffline: "StructureOffline",

    /**
     * value: "SubSystemBay"
     * @const
     */
    subSystemBay: "SubSystemBay",

    /**
     * value: "SubSystemSlot0"
     * @const
     */
    subSystemSlot0: "SubSystemSlot0",

    /**
     * value: "SubSystemSlot1"
     * @const
     */
    subSystemSlot1: "SubSystemSlot1",

    /**
     * value: "SubSystemSlot2"
     * @const
     */
    subSystemSlot2: "SubSystemSlot2",

    /**
     * value: "SubSystemSlot3"
     * @const
     */
    subSystemSlot3: "SubSystemSlot3",

    /**
     * value: "SubSystemSlot4"
     * @const
     */
    subSystemSlot4: "SubSystemSlot4",

    /**
     * value: "SubSystemSlot5"
     * @const
     */
    subSystemSlot5: "SubSystemSlot5",

    /**
     * value: "SubSystemSlot6"
     * @const
     */
    subSystemSlot6: "SubSystemSlot6",

    /**
     * value: "SubSystemSlot7"
     * @const
     */
    subSystemSlot7: "SubSystemSlot7",

    /**
     * value: "Unlocked"
     * @const
     */
    unlocked: "Unlocked",

    /**
     * value: "Wallet"
     * @const
     */
    wallet: "Wallet",

    /**
     * value: "Wardrobe"
     * @const
     */
    wardrobe: "Wardrobe"
  };

  return exports;

}));
