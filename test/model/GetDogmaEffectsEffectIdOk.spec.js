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
    describe('GetDogmaEffectsEffectIdOk', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetDogmaEffectsEffectIdOk();
      });

      it('should create an instance of GetDogmaEffectsEffectIdOk', function() {
        // TODO: update the code to test GetDogmaEffectsEffectIdOk
        expect(instance).to.be.a(EveSwaggerInterface.GetDogmaEffectsEffectIdOk);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property disallowAutoRepeat (base name: "disallow_auto_repeat")', function() {
        // TODO: update the code to test the property disallowAutoRepeat
        expect(instance).to.have.property('disallowAutoRepeat');
        // expect(instance.disallowAutoRepeat).to.be(expectedValueLiteral);
      });

      it('should have the property dischargeAttributeId (base name: "discharge_attribute_id")', function() {
        // TODO: update the code to test the property dischargeAttributeId
        expect(instance).to.have.property('dischargeAttributeId');
        // expect(instance.dischargeAttributeId).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "display_name")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property durationAttributeId (base name: "duration_attribute_id")', function() {
        // TODO: update the code to test the property durationAttributeId
        expect(instance).to.have.property('durationAttributeId');
        // expect(instance.durationAttributeId).to.be(expectedValueLiteral);
      });

      it('should have the property effectCategory (base name: "effect_category")', function() {
        // TODO: update the code to test the property effectCategory
        expect(instance).to.have.property('effectCategory');
        // expect(instance.effectCategory).to.be(expectedValueLiteral);
      });

      it('should have the property effectId (base name: "effect_id")', function() {
        // TODO: update the code to test the property effectId
        expect(instance).to.have.property('effectId');
        // expect(instance.effectId).to.be(expectedValueLiteral);
      });

      it('should have the property electronicChance (base name: "electronic_chance")', function() {
        // TODO: update the code to test the property electronicChance
        expect(instance).to.have.property('electronicChance');
        // expect(instance.electronicChance).to.be(expectedValueLiteral);
      });

      it('should have the property falloffAttributeId (base name: "falloff_attribute_id")', function() {
        // TODO: update the code to test the property falloffAttributeId
        expect(instance).to.have.property('falloffAttributeId');
        // expect(instance.falloffAttributeId).to.be(expectedValueLiteral);
      });

      it('should have the property iconId (base name: "icon_id")', function() {
        // TODO: update the code to test the property iconId
        expect(instance).to.have.property('iconId');
        // expect(instance.iconId).to.be(expectedValueLiteral);
      });

      it('should have the property isAssistance (base name: "is_assistance")', function() {
        // TODO: update the code to test the property isAssistance
        expect(instance).to.have.property('isAssistance');
        // expect(instance.isAssistance).to.be(expectedValueLiteral);
      });

      it('should have the property isOffensive (base name: "is_offensive")', function() {
        // TODO: update the code to test the property isOffensive
        expect(instance).to.have.property('isOffensive');
        // expect(instance.isOffensive).to.be(expectedValueLiteral);
      });

      it('should have the property isWarpSafe (base name: "is_warp_safe")', function() {
        // TODO: update the code to test the property isWarpSafe
        expect(instance).to.have.property('isWarpSafe');
        // expect(instance.isWarpSafe).to.be(expectedValueLiteral);
      });

      it('should have the property modifiers (base name: "modifiers")', function() {
        // TODO: update the code to test the property modifiers
        expect(instance).to.have.property('modifiers');
        // expect(instance.modifiers).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property postExpression (base name: "post_expression")', function() {
        // TODO: update the code to test the property postExpression
        expect(instance).to.have.property('postExpression');
        // expect(instance.postExpression).to.be(expectedValueLiteral);
      });

      it('should have the property preExpression (base name: "pre_expression")', function() {
        // TODO: update the code to test the property preExpression
        expect(instance).to.have.property('preExpression');
        // expect(instance.preExpression).to.be(expectedValueLiteral);
      });

      it('should have the property published (base name: "published")', function() {
        // TODO: update the code to test the property published
        expect(instance).to.have.property('published');
        // expect(instance.published).to.be(expectedValueLiteral);
      });

      it('should have the property rangeAttributeId (base name: "range_attribute_id")', function() {
        // TODO: update the code to test the property rangeAttributeId
        expect(instance).to.have.property('rangeAttributeId');
        // expect(instance.rangeAttributeId).to.be(expectedValueLiteral);
      });

      it('should have the property rangeChance (base name: "range_chance")', function() {
        // TODO: update the code to test the property rangeChance
        expect(instance).to.have.property('rangeChance');
        // expect(instance.rangeChance).to.be(expectedValueLiteral);
      });

      it('should have the property trackingSpeedAttributeId (base name: "tracking_speed_attribute_id")', function() {
        // TODO: update the code to test the property trackingSpeedAttributeId
        expect(instance).to.have.property('trackingSpeedAttributeId');
        // expect(instance.trackingSpeedAttributeId).to.be(expectedValueLiteral);
      });

    });
  });

}));
