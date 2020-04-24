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
    describe('GetCharactersCharacterIdMedalsGraphic', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      });

      it('should create an instance of GetCharactersCharacterIdMedalsGraphic', function() {
        // TODO: update the code to test GetCharactersCharacterIdMedalsGraphic
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property graphic (base name: "graphic")', function() {
        // TODO: update the code to test the property graphic
        expect(instance).to.have.property('graphic');
        // expect(instance.graphic).to.be(expectedValueLiteral);
      });

      it('should have the property layer (base name: "layer")', function() {
        // TODO: update the code to test the property layer
        expect(instance).to.have.property('layer');
        // expect(instance.layer).to.be(expectedValueLiteral);
      });

      it('should have the property part (base name: "part")', function() {
        // TODO: update the code to test the property part
        expect(instance).to.have.property('part');
        // expect(instance.part).to.be(expectedValueLiteral);
      });

    });
  });

}));
