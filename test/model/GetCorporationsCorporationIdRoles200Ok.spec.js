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
    describe('GetCorporationsCorporationIdRoles200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdRoles200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdRoles200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok);
      });

      it('should have the property characterId (base name: "character_id")', function() {
        // TODO: update the code to test the property characterId
        expect(instance).to.have.property('characterId');
        // expect(instance.characterId).to.be(expectedValueLiteral);
      });

      it('should have the property grantableRoles (base name: "grantable_roles")', function() {
        // TODO: update the code to test the property grantableRoles
        expect(instance).to.have.property('grantableRoles');
        // expect(instance.grantableRoles).to.be(expectedValueLiteral);
      });

      it('should have the property grantableRolesAtBase (base name: "grantable_roles_at_base")', function() {
        // TODO: update the code to test the property grantableRolesAtBase
        expect(instance).to.have.property('grantableRolesAtBase');
        // expect(instance.grantableRolesAtBase).to.be(expectedValueLiteral);
      });

      it('should have the property grantableRolesAtHq (base name: "grantable_roles_at_hq")', function() {
        // TODO: update the code to test the property grantableRolesAtHq
        expect(instance).to.have.property('grantableRolesAtHq');
        // expect(instance.grantableRolesAtHq).to.be(expectedValueLiteral);
      });

      it('should have the property grantableRolesAtOther (base name: "grantable_roles_at_other")', function() {
        // TODO: update the code to test the property grantableRolesAtOther
        expect(instance).to.have.property('grantableRolesAtOther');
        // expect(instance.grantableRolesAtOther).to.be(expectedValueLiteral);
      });

      it('should have the property roles (base name: "roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtBase (base name: "roles_at_base")', function() {
        // TODO: update the code to test the property rolesAtBase
        expect(instance).to.have.property('rolesAtBase');
        // expect(instance.rolesAtBase).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtHq (base name: "roles_at_hq")', function() {
        // TODO: update the code to test the property rolesAtHq
        expect(instance).to.have.property('rolesAtHq');
        // expect(instance.rolesAtHq).to.be(expectedValueLiteral);
      });

      it('should have the property rolesAtOther (base name: "roles_at_other")', function() {
        // TODO: update the code to test the property rolesAtOther
        expect(instance).to.have.property('rolesAtOther');
        // expect(instance.rolesAtOther).to.be(expectedValueLiteral);
      });

    });
  });

}));
