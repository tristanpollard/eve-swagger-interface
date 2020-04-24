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
    root.EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetDogmaDynamicItemsTypeIdItemIdDogmaEffect model module.
   * @module model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code>.
   * dogma_effect object
   * @alias module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect
   * @class
   * @param effectId {Number} effect_id integer
   * @param isDefault {Boolean} is_default boolean
   */
  var exports = function(effectId, isDefault) {
    this.effectId = effectId;
    this.isDefault = isDefault;
  };

  /**
   * Constructs a <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect} obj Optional instance to populate.
   * @return {module:model/GetDogmaDynamicItemsTypeIdItemIdDogmaEffect} The populated <code>GetDogmaDynamicItemsTypeIdItemIdDogmaEffect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('effect_id'))
        obj.effectId = ApiClient.convertToType(data['effect_id'], 'Number');
      if (data.hasOwnProperty('is_default'))
        obj.isDefault = ApiClient.convertToType(data['is_default'], 'Boolean');
    }
    return obj;
  }

  /**
   * effect_id integer
   * @member {Number} effectId
   */
  exports.prototype.effectId = undefined;

  /**
   * is_default boolean
   * @member {Boolean} isDefault
   */
  exports.prototype.isDefault = undefined;

  return exports;

}));
