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
    root.EveSwaggerInterface.GetMarketsRegionIdOrders200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetMarketsRegionIdOrders200Ok model module.
   * @module model/GetMarketsRegionIdOrders200Ok
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetMarketsRegionIdOrders200Ok</code>.
   * 200 ok object
   * @alias module:model/GetMarketsRegionIdOrders200Ok
   * @class
   * @param duration {Number} duration integer
   * @param isBuyOrder {Boolean} is_buy_order boolean
   * @param issued {Date} issued string
   * @param locationId {Number} location_id integer
   * @param minVolume {Number} min_volume integer
   * @param orderId {Number} order_id integer
   * @param price {Number} price number
   * @param range {module:model/GetMarketsRegionIdOrders200Ok.RangeEnum} range string
   * @param systemId {Number} The solar system this order was placed
   * @param typeId {Number} type_id integer
   * @param volumeRemain {Number} volume_remain integer
   * @param volumeTotal {Number} volume_total integer
   */
  var exports = function(duration, isBuyOrder, issued, locationId, minVolume, orderId, price, range, systemId, typeId, volumeRemain, volumeTotal) {
    this.duration = duration;
    this.isBuyOrder = isBuyOrder;
    this.issued = issued;
    this.locationId = locationId;
    this.minVolume = minVolume;
    this.orderId = orderId;
    this.price = price;
    this.range = range;
    this.systemId = systemId;
    this.typeId = typeId;
    this.volumeRemain = volumeRemain;
    this.volumeTotal = volumeTotal;
  };

  /**
   * Constructs a <code>GetMarketsRegionIdOrders200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMarketsRegionIdOrders200Ok} obj Optional instance to populate.
   * @return {module:model/GetMarketsRegionIdOrders200Ok} The populated <code>GetMarketsRegionIdOrders200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('is_buy_order'))
        obj.isBuyOrder = ApiClient.convertToType(data['is_buy_order'], 'Boolean');
      if (data.hasOwnProperty('issued'))
        obj.issued = ApiClient.convertToType(data['issued'], 'Date');
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
      if (data.hasOwnProperty('system_id'))
        obj.systemId = ApiClient.convertToType(data['system_id'], 'Number');
      if (data.hasOwnProperty('type_id'))
        obj.typeId = ApiClient.convertToType(data['type_id'], 'Number');
      if (data.hasOwnProperty('volume_remain'))
        obj.volumeRemain = ApiClient.convertToType(data['volume_remain'], 'Number');
      if (data.hasOwnProperty('volume_total'))
        obj.volumeTotal = ApiClient.convertToType(data['volume_total'], 'Number');
    }
    return obj;
  }

  /**
   * duration integer
   * @member {Number} duration
   */
  exports.prototype.duration = undefined;

  /**
   * is_buy_order boolean
   * @member {Boolean} isBuyOrder
   */
  exports.prototype.isBuyOrder = undefined;

  /**
   * issued string
   * @member {Date} issued
   */
  exports.prototype.issued = undefined;

  /**
   * location_id integer
   * @member {Number} locationId
   */
  exports.prototype.locationId = undefined;

  /**
   * min_volume integer
   * @member {Number} minVolume
   */
  exports.prototype.minVolume = undefined;

  /**
   * order_id integer
   * @member {Number} orderId
   */
  exports.prototype.orderId = undefined;

  /**
   * price number
   * @member {Number} price
   */
  exports.prototype.price = undefined;

  /**
   * range string
   * @member {module:model/GetMarketsRegionIdOrders200Ok.RangeEnum} range
   */
  exports.prototype.range = undefined;

  /**
   * The solar system this order was placed
   * @member {Number} systemId
   */
  exports.prototype.systemId = undefined;

  /**
   * type_id integer
   * @member {Number} typeId
   */
  exports.prototype.typeId = undefined;

  /**
   * volume_remain integer
   * @member {Number} volumeRemain
   */
  exports.prototype.volumeRemain = undefined;

  /**
   * volume_total integer
   * @member {Number} volumeTotal
   */
  exports.prototype.volumeTotal = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "station"
     * @const
     */
    station: "station",

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
     * value: "1"
     * @const
     */
    _1: "1",

    /**
     * value: "2"
     * @const
     */
    _2: "2",

    /**
     * value: "3"
     * @const
     */
    _3: "3",

    /**
     * value: "4"
     * @const
     */
    _4: "4",

    /**
     * value: "5"
     * @const
     */
    _5: "5",

    /**
     * value: "10"
     * @const
     */
    _10: "10",

    /**
     * value: "20"
     * @const
     */
    _20: "20",

    /**
     * value: "30"
     * @const
     */
    _30: "30",

    /**
     * value: "40"
     * @const
     */
    _40: "40"
  };

  return exports;

}));
