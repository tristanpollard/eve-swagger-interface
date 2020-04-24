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
    describe('GetCharactersCharacterIdStatsMarket', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsMarket();
      });

      it('should create an instance of GetCharactersCharacterIdStatsMarket', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsMarket
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsMarket);
      });

      it('should have the property acceptContractsCourier (base name: "accept_contracts_courier")', function() {
        // TODO: update the code to test the property acceptContractsCourier
        expect(instance).to.have.property('acceptContractsCourier');
        // expect(instance.acceptContractsCourier).to.be(expectedValueLiteral);
      });

      it('should have the property acceptContractsItemExchange (base name: "accept_contracts_item_exchange")', function() {
        // TODO: update the code to test the property acceptContractsItemExchange
        expect(instance).to.have.property('acceptContractsItemExchange');
        // expect(instance.acceptContractsItemExchange).to.be(expectedValueLiteral);
      });

      it('should have the property buyOrdersPlaced (base name: "buy_orders_placed")', function() {
        // TODO: update the code to test the property buyOrdersPlaced
        expect(instance).to.have.property('buyOrdersPlaced');
        // expect(instance.buyOrdersPlaced).to.be(expectedValueLiteral);
      });

      it('should have the property cancelMarketOrder (base name: "cancel_market_order")', function() {
        // TODO: update the code to test the property cancelMarketOrder
        expect(instance).to.have.property('cancelMarketOrder');
        // expect(instance.cancelMarketOrder).to.be(expectedValueLiteral);
      });

      it('should have the property createContractsAuction (base name: "create_contracts_auction")', function() {
        // TODO: update the code to test the property createContractsAuction
        expect(instance).to.have.property('createContractsAuction');
        // expect(instance.createContractsAuction).to.be(expectedValueLiteral);
      });

      it('should have the property createContractsCourier (base name: "create_contracts_courier")', function() {
        // TODO: update the code to test the property createContractsCourier
        expect(instance).to.have.property('createContractsCourier');
        // expect(instance.createContractsCourier).to.be(expectedValueLiteral);
      });

      it('should have the property createContractsItemExchange (base name: "create_contracts_item_exchange")', function() {
        // TODO: update the code to test the property createContractsItemExchange
        expect(instance).to.have.property('createContractsItemExchange');
        // expect(instance.createContractsItemExchange).to.be(expectedValueLiteral);
      });

      it('should have the property deliverCourierContract (base name: "deliver_courier_contract")', function() {
        // TODO: update the code to test the property deliverCourierContract
        expect(instance).to.have.property('deliverCourierContract');
        // expect(instance.deliverCourierContract).to.be(expectedValueLiteral);
      });

      it('should have the property iskGained (base name: "isk_gained")', function() {
        // TODO: update the code to test the property iskGained
        expect(instance).to.have.property('iskGained');
        // expect(instance.iskGained).to.be(expectedValueLiteral);
      });

      it('should have the property iskSpent (base name: "isk_spent")', function() {
        // TODO: update the code to test the property iskSpent
        expect(instance).to.have.property('iskSpent');
        // expect(instance.iskSpent).to.be(expectedValueLiteral);
      });

      it('should have the property modifyMarketOrder (base name: "modify_market_order")', function() {
        // TODO: update the code to test the property modifyMarketOrder
        expect(instance).to.have.property('modifyMarketOrder');
        // expect(instance.modifyMarketOrder).to.be(expectedValueLiteral);
      });

      it('should have the property searchContracts (base name: "search_contracts")', function() {
        // TODO: update the code to test the property searchContracts
        expect(instance).to.have.property('searchContracts');
        // expect(instance.searchContracts).to.be(expectedValueLiteral);
      });

      it('should have the property sellOrdersPlaced (base name: "sell_orders_placed")', function() {
        // TODO: update the code to test the property sellOrdersPlaced
        expect(instance).to.have.property('sellOrdersPlaced');
        // expect(instance.sellOrdersPlaced).to.be(expectedValueLiteral);
      });

    });
  });

}));
