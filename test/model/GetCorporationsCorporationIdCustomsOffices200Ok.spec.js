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
    describe('GetCorporationsCorporationIdCustomsOffices200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdCustomsOffices200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdCustomsOffices200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdCustomsOffices200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdCustomsOffices200Ok);
      });

      it('should have the property allianceTaxRate (base name: "alliance_tax_rate")', function() {
        // TODO: update the code to test the property allianceTaxRate
        expect(instance).to.have.property('allianceTaxRate');
        // expect(instance.allianceTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property allowAccessWithStandings (base name: "allow_access_with_standings")', function() {
        // TODO: update the code to test the property allowAccessWithStandings
        expect(instance).to.have.property('allowAccessWithStandings');
        // expect(instance.allowAccessWithStandings).to.be(expectedValueLiteral);
      });

      it('should have the property allowAllianceAccess (base name: "allow_alliance_access")', function() {
        // TODO: update the code to test the property allowAllianceAccess
        expect(instance).to.have.property('allowAllianceAccess');
        // expect(instance.allowAllianceAccess).to.be(expectedValueLiteral);
      });

      it('should have the property badStandingTaxRate (base name: "bad_standing_tax_rate")', function() {
        // TODO: update the code to test the property badStandingTaxRate
        expect(instance).to.have.property('badStandingTaxRate');
        // expect(instance.badStandingTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property corporationTaxRate (base name: "corporation_tax_rate")', function() {
        // TODO: update the code to test the property corporationTaxRate
        expect(instance).to.have.property('corporationTaxRate');
        // expect(instance.corporationTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property excellentStandingTaxRate (base name: "excellent_standing_tax_rate")', function() {
        // TODO: update the code to test the property excellentStandingTaxRate
        expect(instance).to.have.property('excellentStandingTaxRate');
        // expect(instance.excellentStandingTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property goodStandingTaxRate (base name: "good_standing_tax_rate")', function() {
        // TODO: update the code to test the property goodStandingTaxRate
        expect(instance).to.have.property('goodStandingTaxRate');
        // expect(instance.goodStandingTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property neutralStandingTaxRate (base name: "neutral_standing_tax_rate")', function() {
        // TODO: update the code to test the property neutralStandingTaxRate
        expect(instance).to.have.property('neutralStandingTaxRate');
        // expect(instance.neutralStandingTaxRate).to.be(expectedValueLiteral);
      });

      it('should have the property officeId (base name: "office_id")', function() {
        // TODO: update the code to test the property officeId
        expect(instance).to.have.property('officeId');
        // expect(instance.officeId).to.be(expectedValueLiteral);
      });

      it('should have the property reinforceExitEnd (base name: "reinforce_exit_end")', function() {
        // TODO: update the code to test the property reinforceExitEnd
        expect(instance).to.have.property('reinforceExitEnd');
        // expect(instance.reinforceExitEnd).to.be(expectedValueLiteral);
      });

      it('should have the property reinforceExitStart (base name: "reinforce_exit_start")', function() {
        // TODO: update the code to test the property reinforceExitStart
        expect(instance).to.have.property('reinforceExitStart');
        // expect(instance.reinforceExitStart).to.be(expectedValueLiteral);
      });

      it('should have the property standingLevel (base name: "standing_level")', function() {
        // TODO: update the code to test the property standingLevel
        expect(instance).to.have.property('standingLevel');
        // expect(instance.standingLevel).to.be(expectedValueLiteral);
      });

      it('should have the property systemId (base name: "system_id")', function() {
        // TODO: update the code to test the property systemId
        expect(instance).to.have.property('systemId');
        // expect(instance.systemId).to.be(expectedValueLiteral);
      });

      it('should have the property terribleStandingTaxRate (base name: "terrible_standing_tax_rate")', function() {
        // TODO: update the code to test the property terribleStandingTaxRate
        expect(instance).to.have.property('terribleStandingTaxRate');
        // expect(instance.terribleStandingTaxRate).to.be(expectedValueLiteral);
      });

    });
  });

}));
