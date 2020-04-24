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
    root.EveSwaggerInterface.GetCorporationsCorporationIdStandings200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdStandings200Ok model module.
   * @module model/GetCorporationsCorporationIdStandings200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStandings200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdStandings200Ok
   * @class
   * @param fromId {Number} from_id integer
   * @param fromType {module:model/GetCorporationsCorporationIdStandings200Ok.FromTypeEnum} from_type string
   * @param standing {Number} standing number
   */
  var exports = function(fromId, fromType, standing) {
    this.fromId = fromId;
    this.fromType = fromType;
    this.standing = standing;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStandings200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStandings200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStandings200Ok} The populated <code>GetCorporationsCorporationIdStandings200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('from_id'))
        obj.fromId = ApiClient.convertToType(data['from_id'], 'Number');
      if (data.hasOwnProperty('from_type'))
        obj.fromType = ApiClient.convertToType(data['from_type'], 'String');
      if (data.hasOwnProperty('standing'))
        obj.standing = ApiClient.convertToType(data['standing'], 'Number');
    }
    return obj;
  }

  /**
   * from_id integer
   * @member {Number} fromId
   */
  exports.prototype.fromId = undefined;

  /**
   * from_type string
   * @member {module:model/GetCorporationsCorporationIdStandings200Ok.FromTypeEnum} fromType
   */
  exports.prototype.fromType = undefined;

  /**
   * standing number
   * @member {Number} standing
   */
  exports.prototype.standing = undefined;


  /**
   * Allowed values for the <code>fromType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FromTypeEnum = {
    /**
     * value: "agent"
     * @const
     */
    agent: "agent",

    /**
     * value: "npc_corp"
     * @const
     */
    npcCorp: "npc_corp",

    /**
     * value: "faction"
     * @const
     */
    faction: "faction"
  };

  return exports;

}));
