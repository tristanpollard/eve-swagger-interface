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
    root.EveSwaggerInterface.GetCorporationsCorporationIdWallets200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdWallets200Ok model module.
   * @module model/GetCorporationsCorporationIdWallets200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdWallets200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdWallets200Ok
   * @class
   * @param balance {Number} balance number
   * @param division {Number} division integer
   */
  var exports = function(balance, division) {
    this.balance = balance;
    this.division = division;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdWallets200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdWallets200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdWallets200Ok} The populated <code>GetCorporationsCorporationIdWallets200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('division'))
        obj.division = ApiClient.convertToType(data['division'], 'Number');
    }
    return obj;
  }

  /**
   * balance number
   * @member {Number} balance
   */
  exports.prototype.balance = undefined;

  /**
   * division integer
   * @member {Number} division
   */
  exports.prototype.division = undefined;

  return exports;

}));
