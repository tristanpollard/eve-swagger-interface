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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdLocationOk', 'model/GetCharactersCharacterIdOnlineOk', 'model/GetCharactersCharacterIdShipOk', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdLocationOk'), require('../model/GetCharactersCharacterIdOnlineOk'), require('../model/GetCharactersCharacterIdShipOk'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.LocationApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdLocationOk, root.EveSwaggerInterface.GetCharactersCharacterIdOnlineOk, root.EveSwaggerInterface.GetCharactersCharacterIdShipOk, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdLocationOk, GetCharactersCharacterIdOnlineOk, GetCharactersCharacterIdShipOk, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Location service.
   * @module api/LocationApi
   * @version 1.3.8
   */

  /**
   * Constructs a new LocationApi. 
   * @alias module:api/LocationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdLocation operation.
     * @callback module:api/LocationApi~getCharactersCharacterIdLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdLocationOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character location
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable  --- Alternate route: `/dev/characters/{character_id}/location/`  Alternate route: `/legacy/characters/{character_id}/location/`  Alternate route: `/v1/characters/{character_id}/location/`  Alternate route: `/v2/characters/{character_id}/location/`  --- This route is cached for up to 5 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/LocationApi~getCharactersCharacterIdLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdLocationOk}
     */
    this.getCharactersCharacterIdLocation = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdLocation");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdLocationOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/location/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdOnline operation.
     * @callback module:api/LocationApi~getCharactersCharacterIdOnlineCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdOnlineOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character online
     * Checks if the character is currently online  --- Alternate route: `/dev/characters/{character_id}/online/`  Alternate route: `/v2/characters/{character_id}/online/`  Alternate route: `/v3/characters/{character_id}/online/`  --- This route is cached for up to 60 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/LocationApi~getCharactersCharacterIdOnlineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdOnlineOk}
     */
    this.getCharactersCharacterIdOnline = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdOnline");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdOnlineOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/online/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdShip operation.
     * @callback module:api/LocationApi~getCharactersCharacterIdShipCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdShipOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current ship
     * Get the current ship type, name and id  --- Alternate route: `/dev/characters/{character_id}/ship/`  Alternate route: `/legacy/characters/{character_id}/ship/`  Alternate route: `/v1/characters/{character_id}/ship/`  Alternate route: `/v2/characters/{character_id}/ship/`  --- This route is cached for up to 5 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/LocationApi~getCharactersCharacterIdShipCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdShipOk}
     */
    this.getCharactersCharacterIdShip = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdShip");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdShipOk;

      return this.apiClient.callApi(
        '/characters/{character_id}/ship/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
