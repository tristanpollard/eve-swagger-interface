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
    root.EveSwaggerInterface.GetLoyaltyStoresCorporationIdOffersRequiredItem = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetLoyaltyStoresCorporationIdOffersRequiredItem model module.
   * @module model/GetLoyaltyStoresCorporationIdOffersRequiredItem
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetLoyaltyStoresCorporationIdOffersRequiredItem</code>.
   * required_item object
   * @alias module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem
   * @class
   * @param quantity {Number} quantity integer
   * @param typeId {Number} type_id integer
   */
  var exports = function(quantity, typeId) {
    this.quantity = quantity;
    this.typeId = typeId;
  };

  /**
   * Constructs a <code>GetLoyaltyStoresCorporationIdOffersRequiredItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem} obj Optional instance to populate.
   * @return {module:model/GetLoyaltyStoresCorporationIdOffersRequiredItem} The populated <code>GetLoyaltyStoresCorporationIdOffersRequiredItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
    }
    return obj;
  }

  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype.quantity = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  return exports;

}));
