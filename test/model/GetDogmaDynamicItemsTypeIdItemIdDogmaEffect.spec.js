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
    describe('GetDogmaDynamicItemsTypeIdItemIdDogmaEffect', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect();
      });

      it('should create an instance of GetDogmaDynamicItemsTypeIdItemIdDogmaEffect', function() {
        // TODO: update the code to test GetDogmaDynamicItemsTypeIdItemIdDogmaEffect
        expect(instance).to.be.a(EveSwaggerInterface.GetDogmaDynamicItemsTypeIdItemIdDogmaEffect);
      });

      it('should have the property effectId (base name: "effect_id")', function() {
        // TODO: update the code to test the property effectId
        expect(instance).to.have.property('effectId');
        // expect(instance.effectId).to.be(expectedValueLiteral);
      });

      it('should have the property isDefault (base name: "is_default")', function() {
        // TODO: update the code to test the property isDefault
        expect(instance).to.have.property('isDefault');
        // expect(instance.isDefault).to.be(expectedValueLiteral);
      });

    });
  });

}));