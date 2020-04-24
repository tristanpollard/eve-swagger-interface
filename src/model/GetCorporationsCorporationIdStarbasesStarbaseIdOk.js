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
    define(['ApiClient', 'model/GetCorporationsCorporationIdStarbasesStarbaseIdFuel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCorporationsCorporationIdStarbasesStarbaseIdFuel'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdStarbasesStarbaseIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCorporationsCorporationIdStarbasesStarbaseIdFuel);
  }
}(this, function(ApiClient, GetCorporationsCorporationIdStarbasesStarbaseIdFuel) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdStarbasesStarbaseIdOk model module.
   * @module model/GetCorporationsCorporationIdStarbasesStarbaseIdOk
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk
   * @class
   * @param allowAllianceMembers {Boolean} allow_alliance_members boolean
   * @param allowCorporationMembers {Boolean} allow_corporation_members boolean
   * @param anchor {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.AnchorEnum} Who can anchor starbase (POS) and its structures
   * @param attackIfAtWar {Boolean} attack_if_at_war boolean
   * @param attackIfOtherSecurityStatusDropping {Boolean} attack_if_other_security_status_dropping boolean
   * @param fuelBayTake {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayTakeEnum} Who can take fuel blocks out of the starbase (POS)'s fuel bay
   * @param fuelBayView {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayViewEnum} Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
   * @param offline {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OfflineEnum} Who can offline starbase (POS) and its structures
   * @param online {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OnlineEnum} Who can online starbase (POS) and its structures
   * @param unanchor {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.UnanchorEnum} Who can unanchor starbase (POS) and its structures
   * @param useAllianceStandings {Boolean} True if the starbase (POS) is using alliance standings, otherwise using corporation's
   */
  var exports = function(allowAllianceMembers, allowCorporationMembers, anchor, attackIfAtWar, attackIfOtherSecurityStatusDropping, fuelBayTake, fuelBayView, offline, online, unanchor, useAllianceStandings) {
    this.allowAllianceMembers = allowAllianceMembers;
    this.allowCorporationMembers = allowCorporationMembers;
    this.anchor = anchor;
    this.attackIfAtWar = attackIfAtWar;
    this.attackIfOtherSecurityStatusDropping = attackIfOtherSecurityStatusDropping;
    this.fuelBayTake = fuelBayTake;
    this.fuelBayView = fuelBayView;
    this.offline = offline;
    this.online = online;
    this.unanchor = unanchor;
    this.useAllianceStandings = useAllianceStandings;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk} The populated <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allow_alliance_members'))
        obj.allowAllianceMembers = ApiClient.convertToType(data['allow_alliance_members'], 'Boolean');
      if (data.hasOwnProperty('allow_corporation_members'))
        obj.allowCorporationMembers = ApiClient.convertToType(data['allow_corporation_members'], 'Boolean');
      if (data.hasOwnProperty('anchor'))
        obj.anchor = ApiClient.convertToType(data['anchor'], 'String');
      if (data.hasOwnProperty('attack_if_at_war'))
        obj.attackIfAtWar = ApiClient.convertToType(data['attack_if_at_war'], 'Boolean');
      if (data.hasOwnProperty('attack_if_other_security_status_dropping'))
        obj.attackIfOtherSecurityStatusDropping = ApiClient.convertToType(data['attack_if_other_security_status_dropping'], 'Boolean');
      if (data.hasOwnProperty('attack_security_status_threshold'))
        obj.attackSecurityStatusThreshold = ApiClient.convertToType(data['attack_security_status_threshold'], 'Number');
      if (data.hasOwnProperty('attack_standing_threshold'))
        obj.attackStandingThreshold = ApiClient.convertToType(data['attack_standing_threshold'], 'Number');
      if (data.hasOwnProperty('fuel_bay_take'))
        obj.fuelBayTake = ApiClient.convertToType(data['fuel_bay_take'], 'String');
      if (data.hasOwnProperty('fuel_bay_view'))
        obj.fuelBayView = ApiClient.convertToType(data['fuel_bay_view'], 'String');
      if (data.hasOwnProperty('fuels'))
        obj.fuels = ApiClient.convertToType(data['fuels'], [GetCorporationsCorporationIdStarbasesStarbaseIdFuel]);
      if (data.hasOwnProperty('offline'))
        obj.offline = ApiClient.convertToType(data['offline'], 'String');
      if (data.hasOwnProperty('online'))
        obj.online = ApiClient.convertToType(data['online'], 'String');
      if (data.hasOwnProperty('unanchor'))
        obj.unanchor = ApiClient.convertToType(data['unanchor'], 'String');
      if (data.hasOwnProperty('use_alliance_standings'))
        obj.useAllianceStandings = ApiClient.convertToType(data['use_alliance_standings'], 'Boolean');
    }
    return obj;
  }

  /**
   * allow_alliance_members boolean
   * @member {Boolean} allowAllianceMembers
   */
  exports.prototype.allowAllianceMembers = undefined;

  /**
   * allow_corporation_members boolean
   * @member {Boolean} allowCorporationMembers
   */
  exports.prototype.allowCorporationMembers = undefined;

  /**
   * Who can anchor starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.AnchorEnum} anchor
   */
  exports.prototype.anchor = undefined;

  /**
   * attack_if_at_war boolean
   * @member {Boolean} attackIfAtWar
   */
  exports.prototype.attackIfAtWar = undefined;

  /**
   * attack_if_other_security_status_dropping boolean
   * @member {Boolean} attackIfOtherSecurityStatusDropping
   */
  exports.prototype.attackIfOtherSecurityStatusDropping = undefined;

  /**
   * Starbase (POS) will attack if target's security standing is lower than this value
   * @member {Number} attackSecurityStatusThreshold
   */
  exports.prototype.attackSecurityStatusThreshold = undefined;

  /**
   * Starbase (POS) will attack if target's standing is lower than this value
   * @member {Number} attackStandingThreshold
   */
  exports.prototype.attackStandingThreshold = undefined;

  /**
   * Who can take fuel blocks out of the starbase (POS)'s fuel bay
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayTakeEnum} fuelBayTake
   */
  exports.prototype.fuelBayTake = undefined;

  /**
   * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayViewEnum} fuelBayView
   */
  exports.prototype.fuelBayView = undefined;

  /**
   * Fuel blocks and other things that will be consumed when operating a starbase (POS)
   * @member {Array.<module:model/GetCorporationsCorporationIdStarbasesStarbaseIdFuel>} fuels
   */
  exports.prototype.fuels = undefined;

  /**
   * Who can offline starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OfflineEnum} offline
   */
  exports.prototype.offline = undefined;

  /**
   * Who can online starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OnlineEnum} online
   */
  exports.prototype.online = undefined;

  /**
   * Who can unanchor starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.UnanchorEnum} unanchor
   */
  exports.prototype.unanchor = undefined;

  /**
   * True if the starbase (POS) is using alliance standings, otherwise using corporation's
   * @member {Boolean} useAllianceStandings
   */
  exports.prototype.useAllianceStandings = undefined;


  /**
   * Allowed values for the <code>anchor</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnchorEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };


  /**
   * Allowed values for the <code>fuelBayTake</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FuelBayTakeEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };


  /**
   * Allowed values for the <code>fuelBayView</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FuelBayViewEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };


  /**
   * Allowed values for the <code>offline</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OfflineEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };


  /**
   * Allowed values for the <code>online</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OnlineEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };


  /**
   * Allowed values for the <code>unanchor</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnanchorEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    allianceMember: "alliance_member",

    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    configStarbaseEquipmentRole: "config_starbase_equipment_role",

    /**
     * value: "corporation_member"
     * @const
     */
    corporationMember: "corporation_member",

    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    starbaseFuelTechnicianRole: "starbase_fuel_technician_role"
  };

  return exports;

}));
