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
    root.EveSwaggerInterface.GetCorporationsCorporationIdFwStatsVictoryPoints = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdFwStatsVictoryPoints model module.
   * @module model/GetCorporationsCorporationIdFwStatsVictoryPoints
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdFwStatsVictoryPoints</code>.
   * Summary of victory points gained by the given corporation for the enlisted faction
   * @alias module:model/GetCorporationsCorporationIdFwStatsVictoryPoints
   * @class
   * @param lastWeek {Number} Last week's victory points gained by members of the given corporation
   * @param total {Number} Total victory points gained since the given corporation enlisted
   * @param yesterday {Number} Yesterday's victory points gained by members of the given corporation
   */
  var exports = function(lastWeek, total, yesterday) {
    this.lastWeek = lastWeek;
    this.total = total;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdFwStatsVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdFwStatsVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdFwStatsVictoryPoints} The populated <code>GetCorporationsCorporationIdFwStatsVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], 'Number');
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], 'Number');
    }
    return obj;
  }

  /**
   * Last week's victory points gained by members of the given corporation
   * @member {Number} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Total victory points gained since the given corporation enlisted
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * Yesterday's victory points gained by members of the given corporation
   * @member {Number} yesterday
   */
  exports.prototype.yesterday = undefined;

  return exports;

}));
