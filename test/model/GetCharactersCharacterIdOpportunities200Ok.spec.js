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
    describe('GetCharactersCharacterIdOpportunities200Ok', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdOpportunities200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdOpportunities200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdOpportunities200Ok
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdOpportunities200Ok);
      });

      it('should have the property completedAt (base name: "completed_at")', function() {
        // TODO: update the code to test the property completedAt
        expect(instance).to.have.property('completedAt');
        // expect(instance.completedAt).to.be(expectedValueLiteral);
      });

      it('should have the property taskId (base name: "task_id")', function() {
        // TODO: update the code to test the property taskId
        expect(instance).to.have.property('taskId');
        // expect(instance.taskId).to.be(expectedValueLiteral);
      });

    });
  });

}));
