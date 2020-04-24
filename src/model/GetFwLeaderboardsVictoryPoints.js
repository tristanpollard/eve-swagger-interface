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
    define(['ApiClient', 'model/GetFwLeaderboardsActiveTotalActiveTotal1', 'model/GetFwLeaderboardsLastWeekLastWeek1', 'model/GetFwLeaderboardsYesterdayYesterday1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsActiveTotalActiveTotal1'), require('./GetFwLeaderboardsLastWeekLastWeek1'), require('./GetFwLeaderboardsYesterdayYesterday1'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsVictoryPoints = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsActiveTotalActiveTotal1, root.EveSwaggerInterface.GetFwLeaderboardsLastWeekLastWeek1, root.EveSwaggerInterface.GetFwLeaderboardsYesterdayYesterday1);
  }
}(this, function(ApiClient, GetFwLeaderboardsActiveTotalActiveTotal1, GetFwLeaderboardsLastWeekLastWeek1, GetFwLeaderboardsYesterdayYesterday1) {
  'use strict';

  /**
   * The GetFwLeaderboardsVictoryPoints model module.
   * @module model/GetFwLeaderboardsVictoryPoints
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsVictoryPoints</code>.
   * Top 4 rankings of factions by victory points from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsVictoryPoints
   * @class
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsActiveTotalActiveTotal1>} Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsLastWeekLastWeek1>} Top 4 ranking of factions by victory points in the past week
   * @param yesterday {Array.<module:model/GetFwLeaderboardsYesterdayYesterday1>} Top 4 ranking of factions by victory points in the past day
   */
  var exports = function(activeTotal, lastWeek, yesterday) {
    this.activeTotal = activeTotal;
    this.lastWeek = lastWeek;
    this.yesterday = yesterday;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsVictoryPoints} The populated <code>GetFwLeaderboardsVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('active_total'))
        obj.activeTotal = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsActiveTotalActiveTotal1]);
      if (data.hasOwnProperty('last_week'))
        obj.lastWeek = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsLastWeekLastWeek1]);
      if (data.hasOwnProperty('yesterday'))
        obj.yesterday = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsYesterdayYesterday1]);
    }
    return obj;
  }

  /**
   * Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days
   * @member {Array.<module:model/GetFwLeaderboardsActiveTotalActiveTotal1>} activeTotal
   */
  exports.prototype.activeTotal = undefined;

  /**
   * Top 4 ranking of factions by victory points in the past week
   * @member {Array.<module:model/GetFwLeaderboardsLastWeekLastWeek1>} lastWeek
   */
  exports.prototype.lastWeek = undefined;

  /**
   * Top 4 ranking of factions by victory points in the past day
   * @member {Array.<module:model/GetFwLeaderboardsYesterdayYesterday1>} yesterday
   */
  exports.prototype.yesterday = undefined;

  return exports;

}));
