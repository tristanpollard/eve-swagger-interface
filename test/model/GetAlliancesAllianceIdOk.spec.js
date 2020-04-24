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
    describe('GetAlliancesAllianceIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      });

      it('should create an instance of GetAlliancesAllianceIdOk', function() {
        // TODO: update the code to test GetAlliancesAllianceIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetAlliancesAllianceIdOk);
      });

      it('should have the property creatorCorporationId (base name: "creator_corporation_id")', function() {
        // TODO: update the code to test the property creatorCorporationId
        expect(instance).to.have.property('creatorCorporationId');
        // expect(instance.creatorCorporationId).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creator_id")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property dateFounded (base name: "date_founded")', function() {
        // TODO: update the code to test the property dateFounded
        expect(instance).to.have.property('dateFounded');
        // expect(instance.dateFounded).to.be(expectedValueLiteral);
      });

      it('should have the property executorCorporationId (base name: "executor_corporation_id")', function() {
        // TODO: update the code to test the property executorCorporationId
        expect(instance).to.have.property('executorCorporationId');
        // expect(instance.executorCorporationId).to.be(expectedValueLiteral);
      });

      it('should have the property factionId (base name: "faction_id")', function() {
        // TODO: update the code to test the property factionId
        expect(instance).to.have.property('factionId');
        // expect(instance.factionId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property ticker (base name: "ticker")', function() {
        // TODO: update the code to test the property ticker
        expect(instance).to.have.property('ticker');
        // expect(instance.ticker).to.be(expectedValueLiteral);
      });

    });
  });

}));
