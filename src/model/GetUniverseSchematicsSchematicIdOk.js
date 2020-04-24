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
    root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetUniverseSchematicsSchematicIdOk model module.
   * @module model/GetUniverseSchematicsSchematicIdOk
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>GetUniverseSchematicsSchematicIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseSchematicsSchematicIdOk
   * @class
   * @param cycleTime {Number} Time in seconds to process a run
   * @param schematicName {String} schematic_name string
   */
  var exports = function(cycleTime, schematicName) {
    this.cycleTime = cycleTime;
    this.schematicName = schematicName;
  };

  /**
   * Constructs a <code>GetUniverseSchematicsSchematicIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSchematicsSchematicIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseSchematicsSchematicIdOk} The populated <code>GetUniverseSchematicsSchematicIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cycle_time'))
        obj.cycleTime = ApiClient.convertToType(data['cycle_time'], 'Number');
      if (data.hasOwnProperty('schematic_name'))
        obj.schematicName = ApiClient.convertToType(data['schematic_name'], 'String');
    }
    return obj;
  }

  /**
   * Time in seconds to process a run
   * @member {Number} cycleTime
   */
  exports.prototype.cycleTime = undefined;

  /**
   * schematic_name string
   * @member {String} schematicName
   */
  exports.prototype.schematicName = undefined;

  return exports;

}));
