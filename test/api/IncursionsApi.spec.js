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
    instance = new EveSwaggerInterface.IncursionsApi();
  });

  describe('(package)', function() {
    describe('IncursionsApi', function() {
      describe('getIncursions', function() {
        it('should call getIncursions successfully', function(done) {
          // TODO: uncomment, update parameter values for getIncursions call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getIncursions(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetIncursions200Ok);
              expect(data.constellationId).to.be.a('number');
              expect(data.constellationId).to.be(0);
              expect(data.factionId).to.be.a('number');
              expect(data.factionId).to.be(0);
              expect(data.hasBoss).to.be.a('boolean');
              expect(data.hasBoss).to.be(false);
              {
                let dataCtr = data.infestedSolarSystems;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.influence).to.be.a('number');
              expect(data.influence).to.be(0.0);
              expect(data.stagingSolarSystemId).to.be.a('number');
              expect(data.stagingSolarSystemId).to.be(0);
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("withdrawing");
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("");
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
