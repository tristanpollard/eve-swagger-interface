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
    root.EveSwaggerInterface.GetFleetsFleetIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetFleetsFleetIdOk model module.
   * @module model/GetFleetsFleetIdOk
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetFleetsFleetIdOk</code>.
   * 200 ok object
   * @alias module:model/GetFleetsFleetIdOk
   * @class
   * @param isFreeMove {Boolean} Is free-move enabled
   * @param isRegistered {Boolean} Does the fleet have an active fleet advertisement
   * @param isVoiceEnabled {Boolean} Is EVE Voice enabled
   * @param motd {String} Fleet MOTD in CCP flavoured HTML
   */
  var exports = function(isFreeMove, isRegistered, isVoiceEnabled, motd) {
    this.isFreeMove = isFreeMove;
    this.isRegistered = isRegistered;
    this.isVoiceEnabled = isVoiceEnabled;
    this.motd = motd;
  };

  /**
   * Constructs a <code>GetFleetsFleetIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFleetsFleetIdOk} obj Optional instance to populate.
   * @return {module:model/GetFleetsFleetIdOk} The populated <code>GetFleetsFleetIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('is_free_move'))
        obj.isFreeMove = ApiClient.convertToType(data['is_free_move'], 'Boolean');
      if (data.hasOwnProperty('is_registered'))
        obj.isRegistered = ApiClient.convertToType(data['is_registered'], 'Boolean');
      if (data.hasOwnProperty('is_voice_enabled'))
        obj.isVoiceEnabled = ApiClient.convertToType(data['is_voice_enabled'], 'Boolean');
      if (data.hasOwnProperty('motd'))
        obj.motd = ApiClient.convertToType(data['motd'], 'String');
    }
    return obj;
  }

  /**
   * Is free-move enabled
   * @member {Boolean} isFreeMove
   */
  exports.prototype.isFreeMove = undefined;

  /**
   * Does the fleet have an active fleet advertisement
   * @member {Boolean} isRegistered
   */
  exports.prototype.isRegistered = undefined;

  /**
   * Is EVE Voice enabled
   * @member {Boolean} isVoiceEnabled
   */
  exports.prototype.isVoiceEnabled = undefined;

  /**
   * Fleet MOTD in CCP flavoured HTML
   * @member {String} motd
   */
  exports.prototype.motd = undefined;

  return exports;

}));
