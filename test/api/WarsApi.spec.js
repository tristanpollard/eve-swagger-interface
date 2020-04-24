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

  beforeEach(function() {
    instance = new EveSwaggerInterface.WarsApi();
  });

  describe('(package)', function() {
    describe('WarsApi', function() {
      describe('getWars', function() {
        it('should call getWars successfully', function(done) {
          // TODO: uncomment, update parameter values for getWars call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.maxWarId = 56;

          instance.getWars(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWarsWarId', function() {
        it('should call getWarsWarId successfully', function(done) {
          // TODO: uncomment, update parameter values for getWarsWarId call and complete the assertions
          /*
          var warId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getWarsWarId(warId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetWarsWarIdOk);
            expect(data.aggressor).to.be.a(EveSwaggerInterface.GetWarsWarIdAggressor);
                  expect(data.aggressor.allianceId).to.be.a('number');
              expect(data.aggressor.allianceId).to.be(0);
              expect(data.aggressor.corporationId).to.be.a('number');
              expect(data.aggressor.corporationId).to.be(0);
              expect(data.aggressor.iskDestroyed).to.be.a('number');
              expect(data.aggressor.iskDestroyed).to.be(0.0);
              expect(data.aggressor.shipsKilled).to.be.a('number');
              expect(data.aggressor.shipsKilled).to.be(0);
            {
              let dataCtr = data.allies;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetWarsWarIdAlly);
                expect(data.allianceId).to.be.a('number');
                expect(data.allianceId).to.be(0);
                expect(data.corporationId).to.be.a('number');
                expect(data.corporationId).to.be(0);

                      }
            }
            expect(data.declared).to.be.a(Date);
            expect(data.declared).to.be(new Date());
            expect(data.defender).to.be.a(EveSwaggerInterface.GetWarsWarIdDefender);
                  expect(data.defender.allianceId).to.be.a('number');
              expect(data.defender.allianceId).to.be(0);
              expect(data.defender.corporationId).to.be.a('number');
              expect(data.defender.corporationId).to.be(0);
              expect(data.defender.iskDestroyed).to.be.a('number');
              expect(data.defender.iskDestroyed).to.be(0.0);
              expect(data.defender.shipsKilled).to.be.a('number');
              expect(data.defender.shipsKilled).to.be(0);
            expect(data.finished).to.be.a(Date);
            expect(data.finished).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.mutual).to.be.a('boolean');
            expect(data.mutual).to.be(false);
            expect(data.openForAllies).to.be.a('boolean');
            expect(data.openForAllies).to.be(false);
            expect(data.retracted).to.be.a(Date);
            expect(data.retracted).to.be(new Date());
            expect(data.started).to.be.a(Date);
            expect(data.started).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWarsWarIdKillmails', function() {
        it('should call getWarsWarIdKillmails successfully', function(done) {
          // TODO: uncomment, update parameter values for getWarsWarIdKillmails call and complete the assertions
          /*
          var warId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.page = 1;

          instance.getWarsWarIdKillmails(warId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveSwaggerInterface.GetWarsWarIdKillmails200Ok);
              expect(data.killmailHash).to.be.a('string');
              expect(data.killmailHash).to.be("");
              expect(data.killmailId).to.be.a('number');
              expect(data.killmailId).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
