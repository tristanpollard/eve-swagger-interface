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
    root.EveSwaggerInterface.GetCorporationsCorporationIdMembersTitles200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdMembersTitles200Ok model module.
   * @module model/GetCorporationsCorporationIdMembersTitles200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdMembersTitles200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdMembersTitles200Ok
   * @class
   * @param characterId {Number} character_id integer
   * @param titles {Array.<Number>} A list of title_id
   */
  var exports = function(characterId, titles) {
    this.characterId = characterId;
    this.titles = titles;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdMembersTitles200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdMembersTitles200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdMembersTitles200Ok} The populated <code>GetCorporationsCorporationIdMembersTitles200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('character_id'))
        obj.characterId = ApiClient.convertToType(data['character_id'], 'Number');
      if (data.hasOwnProperty('titles'))
        obj.titles = ApiClient.convertToType(data['titles'], ['Number']);
    }
    return obj;
  }

  /**
   * character_id integer
   * @member {Number} characterId
   */
  exports.prototype.characterId = undefined;

  /**
   * A list of title_id
   * @member {Array.<Number>} titles
   */
  exports.prototype.titles = undefined;

  return exports;

}));
