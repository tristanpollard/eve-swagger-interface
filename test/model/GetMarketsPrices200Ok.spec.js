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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetMarketsPrices200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetMarketsPrices200Ok();
      });

      it('should create an instance of GetMarketsPrices200Ok', function() {
        // TODO: update the code to test GetMarketsPrices200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetMarketsPrices200Ok);
      });

      it('should have the property adjustedPrice (base name: "adjusted_price")', function() {
        // TODO: update the code to test the property adjustedPrice
        expect(instance).to.have.property('adjustedPrice');
        // expect(instance.adjustedPrice).to.be(expectedValueLiteral);
      });

      it('should have the property averagePrice (base name: "average_price")', function() {
        // TODO: update the code to test the property averagePrice
        expect(instance).to.have.property('averagePrice');
        // expect(instance.averagePrice).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
