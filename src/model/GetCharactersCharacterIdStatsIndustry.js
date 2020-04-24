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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsIndustry = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsIndustry model module.
   * @module model/GetCharactersCharacterIdStatsIndustry
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsIndustry</code>.
   * industry object
   * @alias module:model/GetCharactersCharacterIdStatsIndustry
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsIndustry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsIndustry} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsIndustry} The populated <code>GetCharactersCharacterIdStatsIndustry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('hacking_successes'))
        obj.hackingSuccesses = ApiClient.convertToType(data['hacking_successes'], 'Number');
      if (data.hasOwnProperty('jobs_cancelled'))
        obj.jobsCancelled = ApiClient.convertToType(data['jobs_cancelled'], 'Number');
      if (data.hasOwnProperty('jobs_completed_copy_blueprint'))
        obj.jobsCompletedCopyBlueprint = ApiClient.convertToType(data['jobs_completed_copy_blueprint'], 'Number');
      if (data.hasOwnProperty('jobs_completed_invention'))
        obj.jobsCompletedInvention = ApiClient.convertToType(data['jobs_completed_invention'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture'))
        obj.jobsCompletedManufacture = ApiClient.convertToType(data['jobs_completed_manufacture'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_asteroid'))
        obj.jobsCompletedManufactureAsteroid = ApiClient.convertToType(data['jobs_completed_manufacture_asteroid'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_asteroid_quantity'))
        obj.jobsCompletedManufactureAsteroidQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_asteroid_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_charge'))
        obj.jobsCompletedManufactureCharge = ApiClient.convertToType(data['jobs_completed_manufacture_charge'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_charge_quantity'))
        obj.jobsCompletedManufactureChargeQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_charge_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_commodity'))
        obj.jobsCompletedManufactureCommodity = ApiClient.convertToType(data['jobs_completed_manufacture_commodity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_commodity_quantity'))
        obj.jobsCompletedManufactureCommodityQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_commodity_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_deployable'))
        obj.jobsCompletedManufactureDeployable = ApiClient.convertToType(data['jobs_completed_manufacture_deployable'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_deployable_quantity'))
        obj.jobsCompletedManufactureDeployableQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_deployable_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_drone'))
        obj.jobsCompletedManufactureDrone = ApiClient.convertToType(data['jobs_completed_manufacture_drone'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_drone_quantity'))
        obj.jobsCompletedManufactureDroneQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_drone_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_implant'))
        obj.jobsCompletedManufactureImplant = ApiClient.convertToType(data['jobs_completed_manufacture_implant'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_implant_quantity'))
        obj.jobsCompletedManufactureImplantQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_implant_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_module'))
        obj.jobsCompletedManufactureModule = ApiClient.convertToType(data['jobs_completed_manufacture_module'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_module_quantity'))
        obj.jobsCompletedManufactureModuleQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_module_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_other'))
        obj.jobsCompletedManufactureOther = ApiClient.convertToType(data['jobs_completed_manufacture_other'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_other_quantity'))
        obj.jobsCompletedManufactureOtherQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_other_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_ship'))
        obj.jobsCompletedManufactureShip = ApiClient.convertToType(data['jobs_completed_manufacture_ship'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_ship_quantity'))
        obj.jobsCompletedManufactureShipQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_ship_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_structure'))
        obj.jobsCompletedManufactureStructure = ApiClient.convertToType(data['jobs_completed_manufacture_structure'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_structure_quantity'))
        obj.jobsCompletedManufactureStructureQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_structure_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_subsystem'))
        obj.jobsCompletedManufactureSubsystem = ApiClient.convertToType(data['jobs_completed_manufacture_subsystem'], 'Number');
      if (data.hasOwnProperty('jobs_completed_manufacture_subsystem_quantity'))
        obj.jobsCompletedManufactureSubsystemQuantity = ApiClient.convertToType(data['jobs_completed_manufacture_subsystem_quantity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_material_productivity'))
        obj.jobsCompletedMaterialProductivity = ApiClient.convertToType(data['jobs_completed_material_productivity'], 'Number');
      if (data.hasOwnProperty('jobs_completed_time_productivity'))
        obj.jobsCompletedTimeProductivity = ApiClient.convertToType(data['jobs_completed_time_productivity'], 'Number');
      if (data.hasOwnProperty('jobs_started_copy_blueprint'))
        obj.jobsStartedCopyBlueprint = ApiClient.convertToType(data['jobs_started_copy_blueprint'], 'Number');
      if (data.hasOwnProperty('jobs_started_invention'))
        obj.jobsStartedInvention = ApiClient.convertToType(data['jobs_started_invention'], 'Number');
      if (data.hasOwnProperty('jobs_started_manufacture'))
        obj.jobsStartedManufacture = ApiClient.convertToType(data['jobs_started_manufacture'], 'Number');
      if (data.hasOwnProperty('jobs_started_material_productivity'))
        obj.jobsStartedMaterialProductivity = ApiClient.convertToType(data['jobs_started_material_productivity'], 'Number');
      if (data.hasOwnProperty('jobs_started_time_productivity'))
        obj.jobsStartedTimeProductivity = ApiClient.convertToType(data['jobs_started_time_productivity'], 'Number');
      if (data.hasOwnProperty('reprocess_item'))
        obj.reprocessItem = ApiClient.convertToType(data['reprocess_item'], 'Number');
      if (data.hasOwnProperty('reprocess_item_quantity'))
        obj.reprocessItemQuantity = ApiClient.convertToType(data['reprocess_item_quantity'], 'Number');
    }
    return obj;
  }

  /**
   * hacking_successes integer
   * @member {Number} hackingSuccesses
   */
  exports.prototype.hackingSuccesses = undefined;

  /**
   * jobs_cancelled integer
   * @member {Number} jobsCancelled
   */
  exports.prototype.jobsCancelled = undefined;

  /**
   * jobs_completed_copy_blueprint integer
   * @member {Number} jobsCompletedCopyBlueprint
   */
  exports.prototype.jobsCompletedCopyBlueprint = undefined;

  /**
   * jobs_completed_invention integer
   * @member {Number} jobsCompletedInvention
   */
  exports.prototype.jobsCompletedInvention = undefined;

  /**
   * jobs_completed_manufacture integer
   * @member {Number} jobsCompletedManufacture
   */
  exports.prototype.jobsCompletedManufacture = undefined;

  /**
   * jobs_completed_manufacture_asteroid integer
   * @member {Number} jobsCompletedManufactureAsteroid
   */
  exports.prototype.jobsCompletedManufactureAsteroid = undefined;

  /**
   * jobs_completed_manufacture_asteroid_quantity integer
   * @member {Number} jobsCompletedManufactureAsteroidQuantity
   */
  exports.prototype.jobsCompletedManufactureAsteroidQuantity = undefined;

  /**
   * jobs_completed_manufacture_charge integer
   * @member {Number} jobsCompletedManufactureCharge
   */
  exports.prototype.jobsCompletedManufactureCharge = undefined;

  /**
   * jobs_completed_manufacture_charge_quantity integer
   * @member {Number} jobsCompletedManufactureChargeQuantity
   */
  exports.prototype.jobsCompletedManufactureChargeQuantity = undefined;

  /**
   * jobs_completed_manufacture_commodity integer
   * @member {Number} jobsCompletedManufactureCommodity
   */
  exports.prototype.jobsCompletedManufactureCommodity = undefined;

  /**
   * jobs_completed_manufacture_commodity_quantity integer
   * @member {Number} jobsCompletedManufactureCommodityQuantity
   */
  exports.prototype.jobsCompletedManufactureCommodityQuantity = undefined;

  /**
   * jobs_completed_manufacture_deployable integer
   * @member {Number} jobsCompletedManufactureDeployable
   */
  exports.prototype.jobsCompletedManufactureDeployable = undefined;

  /**
   * jobs_completed_manufacture_deployable_quantity integer
   * @member {Number} jobsCompletedManufactureDeployableQuantity
   */
  exports.prototype.jobsCompletedManufactureDeployableQuantity = undefined;

  /**
   * jobs_completed_manufacture_drone integer
   * @member {Number} jobsCompletedManufactureDrone
   */
  exports.prototype.jobsCompletedManufactureDrone = undefined;

  /**
   * jobs_completed_manufacture_drone_quantity integer
   * @member {Number} jobsCompletedManufactureDroneQuantity
   */
  exports.prototype.jobsCompletedManufactureDroneQuantity = undefined;

  /**
   * jobs_completed_manufacture_implant integer
   * @member {Number} jobsCompletedManufactureImplant
   */
  exports.prototype.jobsCompletedManufactureImplant = undefined;

  /**
   * jobs_completed_manufacture_implant_quantity integer
   * @member {Number} jobsCompletedManufactureImplantQuantity
   */
  exports.prototype.jobsCompletedManufactureImplantQuantity = undefined;

  /**
   * jobs_completed_manufacture_module integer
   * @member {Number} jobsCompletedManufactureModule
   */
  exports.prototype.jobsCompletedManufactureModule = undefined;

  /**
   * jobs_completed_manufacture_module_quantity integer
   * @member {Number} jobsCompletedManufactureModuleQuantity
   */
  exports.prototype.jobsCompletedManufactureModuleQuantity = undefined;

  /**
   * jobs_completed_manufacture_other integer
   * @member {Number} jobsCompletedManufactureOther
   */
  exports.prototype.jobsCompletedManufactureOther = undefined;

  /**
   * jobs_completed_manufacture_other_quantity integer
   * @member {Number} jobsCompletedManufactureOtherQuantity
   */
  exports.prototype.jobsCompletedManufactureOtherQuantity = undefined;

  /**
   * jobs_completed_manufacture_ship integer
   * @member {Number} jobsCompletedManufactureShip
   */
  exports.prototype.jobsCompletedManufactureShip = undefined;

  /**
   * jobs_completed_manufacture_ship_quantity integer
   * @member {Number} jobsCompletedManufactureShipQuantity
   */
  exports.prototype.jobsCompletedManufactureShipQuantity = undefined;

  /**
   * jobs_completed_manufacture_structure integer
   * @member {Number} jobsCompletedManufactureStructure
   */
  exports.prototype.jobsCompletedManufactureStructure = undefined;

  /**
   * jobs_completed_manufacture_structure_quantity integer
   * @member {Number} jobsCompletedManufactureStructureQuantity
   */
  exports.prototype.jobsCompletedManufactureStructureQuantity = undefined;

  /**
   * jobs_completed_manufacture_subsystem integer
   * @member {Number} jobsCompletedManufactureSubsystem
   */
  exports.prototype.jobsCompletedManufactureSubsystem = undefined;

  /**
   * jobs_completed_manufacture_subsystem_quantity integer
   * @member {Number} jobsCompletedManufactureSubsystemQuantity
   */
  exports.prototype.jobsCompletedManufactureSubsystemQuantity = undefined;

  /**
   * jobs_completed_material_productivity integer
   * @member {Number} jobsCompletedMaterialProductivity
   */
  exports.prototype.jobsCompletedMaterialProductivity = undefined;

  /**
   * jobs_completed_time_productivity integer
   * @member {Number} jobsCompletedTimeProductivity
   */
  exports.prototype.jobsCompletedTimeProductivity = undefined;

  /**
   * jobs_started_copy_blueprint integer
   * @member {Number} jobsStartedCopyBlueprint
   */
  exports.prototype.jobsStartedCopyBlueprint = undefined;

  /**
   * jobs_started_invention integer
   * @member {Number} jobsStartedInvention
   */
  exports.prototype.jobsStartedInvention = undefined;

  /**
   * jobs_started_manufacture integer
   * @member {Number} jobsStartedManufacture
   */
  exports.prototype.jobsStartedManufacture = undefined;

  /**
   * jobs_started_material_productivity integer
   * @member {Number} jobsStartedMaterialProductivity
   */
  exports.prototype.jobsStartedMaterialProductivity = undefined;

  /**
   * jobs_started_time_productivity integer
   * @member {Number} jobsStartedTimeProductivity
   */
  exports.prototype.jobsStartedTimeProductivity = undefined;

  /**
   * reprocess_item integer
   * @member {Number} reprocessItem
   */
  exports.prototype.reprocessItem = undefined;

  /**
   * reprocess_item_quantity integer
   * @member {Number} reprocessItemQuantity
   */
  exports.prototype.reprocessItemQuantity = undefined;

  return exports;

}));
