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
    describe('GetCharactersCharacterIdMedals200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdMedals200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdMedals200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok);
      });

      it('should have the property corporationId (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporationId
        expect(instance).to.have.property('corporationId');
        // expect(instance.corporationId).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property graphics (base name: "graphics")', function() {
        // TODO: update the code to test the property graphics
        expect(instance).to.have.property('graphics');
        // expect(instance.graphics).to.be(expectedValueLiteral);
      });

      it('should have the property issuerId (base name: "issuer_id")', function() {
        // TODO: update the code to test the property issuerId
        expect(instance).to.have.property('issuerId');
        // expect(instance.issuerId).to.be(expectedValueLiteral);
      });

      it('should have the property medalId (base name: "medal_id")', function() {
        // TODO: update the code to test the property medalId
        expect(instance).to.have.property('medalId');
        // expect(instance.medalId).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

    });
  });

}));
