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
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdLink = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdLink model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdLink
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code>.
   * link object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdLink
   * @class
   * @param destinationPinId {Number} destination_pin_id integer
   * @param linkLevel {Number} link_level integer
   * @param sourcePinId {Number} source_pin_id integer
   */
  var exports = function(destinationPinId, linkLevel, sourcePinId) {
    this.destinationPinId = destinationPinId;
    this.linkLevel = linkLevel;
    this.sourcePinId = sourcePinId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdLink} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdLink} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destination_pin_id'))
        obj.destinationPinId = ApiClient.convertToType(data['destination_pin_id'], 'Number');
      if (data.hasOwnProperty('link_level'))
        obj.linkLevel = ApiClient.convertToType(data['link_level'], 'Number');
      if (data.hasOwnProperty('source_pin_id'))
        obj.sourcePinId = ApiClient.convertToType(data['source_pin_id'], 'Number');
    }
    return obj;
  }

  /**
   * destination_pin_id integer
   * @member {Number} destinationPinId
   */
  exports.prototype.destinationPinId = undefined;

  /**
   * link_level integer
   * @member {Number} linkLevel
   */
  exports.prototype.linkLevel = undefined;

  /**
   * source_pin_id integer
   * @member {Number} sourcePinId
   */
  exports.prototype.sourcePinId = undefined;

  return exports;

}));
