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
    root.EveSwaggerInterface.GetCorporationsCorporationIdOrders200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdOrders200Ok model module.
   * @module model/GetCorporationsCorporationIdOrders200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdOrders200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdOrders200Ok
   * @class
   * @param duration {Number} Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
   * @param issued {Date} Date and time when this order was issued
   * @param issuedBy {Number} The character who issued this order
   * @param locationId {Number} ID of the location where order was placed
   * @param orderId {Number} Unique order ID
   * @param price {Number} Cost per unit for this order
   * @param range {module:model/GetCorporationsCorporationIdOrders200Ok.RangeEnum} Valid order range, numbers are ranges in jumps
   * @param regionId {Number} ID of the region where order was placed
   * @param typeId {Number} The type ID of the item transacted in this order
   * @param volumeRemain {Number} Quantity of items still required or offered
   * @param volumeTotal {Number} Quantity of items required or offered at time order was placed
   * @param walletDivision {Number} The corporation wallet division used for this order.
   */
  var exports = function(duration, issued, issuedBy, locationId, orderId, price, range, regionId, typeId, volumeRemain, volumeTotal, walletDivision) {
    this.duration = duration;
    this.issued = issued;
    this.issuedBy = issuedBy;
    this.locationId = locationId;
    this.orderId = orderId;
    this.price = price;
    this.range = range;
    this.regionId = regionId;
    this.typeId = typeId;
    this.volumeRemain = volumeRemain;
    this.volumeTotal = volumeTotal;
    this.walletDivision = walletDivision;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdOrders200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdOrders200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdOrders200Ok} The populated <code>GetCorporationsCorporationIdOrders200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('escrow'))
        obj.escrow = ApiClient.convertToType(data['escrow'], 'Number');
      if (data.hasOwnProperty('is_buy_order'))
        obj.isBuyOrder = ApiClient.convertToType(data['is_buy_order'], 'Boolean');
      if (data.hasOwnProperty('issued'))
        obj.issued = ApiClient.convertToType(data['issued'], 'Date');
      if (data.hasOwnProperty('issued_by'))
        obj.issuedBy = ApiClient.convertToType(data['issued_by'], 'Number');
      if (data.hasOwnProperty('location_id'))
        obj.locationId = ApiClient.convertToType(data['location_id'], 'Number');
      if (data.hasOwnProperty('min_volume'))
        obj.minVolume = ApiClient.convertToType(data['min_volume'], 'Number');
      if (data.hasOwnProperty('order_id'))
        obj.orderId = ApiClient.convertToType(data['order_id'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('range'))
        obj.range = ApiClient.convertToType(data['range'], 'String');
      if (data.hasOwnProperty('region_id'))
        obj.regionId = ApiClient.convertToType(data['region_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
      if (data.hasOwnProperty('volume_remain'))
        obj.volumeRemain = ApiClient.convertToType(data['volume_remain'], 'Number');
      if (data.hasOwnProperty('volume_total'))
        obj.volumeTotal = ApiClient.convertToType(data['volume_total'], 'Number');
      if (data.hasOwnProperty('wallet_division'))
        obj.walletDivision = ApiClient.convertToType(data['wallet_division'], 'Number');
    }
    return obj;
  }

  /**
   * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * For buy orders, the amount of ISK in escrow
   * @member {Number} escrow
   */
  exports.prototype.escrow = undefined;

  /**
   * True if the order is a bid (buy) order
   * @member {Boolean} isBuyOrder
   */
  exports.prototype.isBuyOrder = undefined;

  /**
   * Date and time when this order was issued
   * @member {Date} issued
   */
  exports.prototype.issued = undefined;

  /**
   * The character who issued this order
   * @member {Number} issuedBy
   */
  exports.prototype.issuedBy = undefined;

  /**
   * ID of the location where order was placed
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * For buy orders, the minimum quantity that will be accepted in a matching sell order
   * @member {Number} minVolume
   */
  exports.prototype.minVolume = undefined;

  /**
   * Unique order ID
   * @member {Number} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * Cost per unit for this order
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * Valid order range, numbers are ranges in jumps
   * @member {module:model/GetCorporationsCorporationIdOrders200Ok.RangeEnum} range
   */
  exports.prototype.range = undefined;

  /**
   * ID of the region where order was placed
   * @member {Number} regionId
   */
  exports.prototype.regionId = undefined;

  /**
   * The type ID of the item transacted in this order
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  /**
   * Quantity of items still required or offered
   * @member {Number} volumeRemain
   */
  exports.prototype.volumeRemain = undefined;

  /**
   * Quantity of items required or offered at time order was placed
   * @member {Number} volumeTotal
   */
  exports.prototype.volumeTotal = undefined;

  /**
   * The corporation wallet division used for this order.
   * @member {Number} walletDivision
   */
  exports.prototype.walletDivision = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "1"
     * @const
     */
    _1: "1",

    /**
     * value: "10"
     * @const
     */
    _10: "10",

    /**
     * value: "2"
     * @const
     */
    _2: "2",

    /**
     * value: "20"
     * @const
     */
    _20: "20",

    /**
     * value: "3"
     * @const
     */
    _3: "3",

    /**
     * value: "30"
     * @const
     */
    _30: "30",

    /**
     * value: "4"
     * @const
     */
    _4: "4",

    /**
     * value: "40"
     * @const
     */
    _40: "40",

    /**
     * value: "5"
     * @const
     */
    _5: "5",

    /**
     * value: "region"
     * @const
     */
    region: "region",

    /**
     * value: "solarsystem"
     * @const
     */
    solarsystem: "solarsystem",

    /**
     * value: "station"
     * @const
     */
    station: "station"
  };

  return exports;

}));
