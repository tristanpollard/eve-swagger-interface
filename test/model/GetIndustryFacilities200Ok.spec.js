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
    describe('GetIndustryFacilities200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetIndustryFacilities200Ok();
      });

      it('should create an instance of GetIndustryFacilities200Ok', function() {
        // TODO: update the code to test GetIndustryFacilities200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetIndustryFacilities200Ok);
      });

      it('should have the property facilityId (base name: "facility_id")', function() {
        // TODO: update the code to test the property facilityId
        expect(instance).to.have.property('facilityId');
        // expect(instance.facilityId).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "owner_id")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property regionId (base name: "region_id")', function() {
        // TODO: update the code to test the property regionId
        expect(instance).to.have.property('regionId');
        // expect(instance.regionId).to.be(expectedValueLiteral);
      });

      it('should have the property solarSystemId (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solarSystemId
        expect(instance).to.have.property('solarSystemId');
        // expect(instance.solarSystemId).to.be(expectedValueLiteral);
      });

      it('should have the property tax (base name: "tax")', function() {
        // TODO: update the code to test the property tax
        expect(instance).to.have.property('tax');
        // expect(instance.tax).to.be(expectedValueLiteral);
      });

      it('should have the property typeId (base name: "type_id")', function() {
        // TODO: update the code to test the property typeId
        expect(instance).to.have.property('typeId');
        // expect(instance.typeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
