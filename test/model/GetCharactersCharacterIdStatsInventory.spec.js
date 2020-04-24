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
    describe('GetCharactersCharacterIdStatsInventory', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsInventory();
      });

      it('should create an instance of GetCharactersCharacterIdStatsInventory', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsInventory
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsInventory);
      });

      it('should have the property abandonLootQuantity (base name: "abandon_loot_quantity")', function() {
        // TODO: update the code to test the property abandonLootQuantity
        expect(instance).to.have.property('abandonLootQuantity');
        // expect(instance.abandonLootQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property trashItemQuantity (base name: "trash_item_quantity")', function() {
        // TODO: update the code to test the property trashItemQuantity
        expect(instance).to.have.property('trashItemQuantity');
        // expect(instance.trashItemQuantity).to.be(expectedValueLiteral);
      });

    });
  });

}));
