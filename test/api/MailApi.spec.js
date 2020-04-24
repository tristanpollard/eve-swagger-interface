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
    instance = new EveSwaggerInterface.MailApi();
  });

  describe('(package)', function() {
    describe('MailApi', function() {
      describe('deleteCharactersCharacterIdMailLabelsLabelId', function() {
        it('should call deleteCharactersCharacterIdMailLabelsLabelId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCharactersCharacterIdMailLabelsLabelId call
          /*
          var characterId = 56;
          var labelId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteCharactersCharacterIdMailLabelsLabelId(characterId, labelId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteCharactersCharacterIdMailMailId', function() {
        it('should call deleteCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCharactersCharacterIdMailMailId call
          /*
          var characterId = 56;
          var mailId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteCharactersCharacterIdMailMailId(characterId, mailId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMail', function() {
        it('should call getCharactersCharacterIdMail successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMail call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.labels = [3.4];
          opts.lastMailId = 56;
          opts.token = "token_example";

          instance.getCharactersCharacterIdMail(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMail200Ok);
              expect(data.from).to.be.a('number');
              expect(data.from).to.be(0);
              expect(data.isRead).to.be.a('boolean');
              expect(data.isRead).to.be(false);
              {
                let dataCtr = data.labels;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.mailId).to.be.a('number');
              expect(data.mailId).to.be(0);
              {
                let dataCtr = data.recipients;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailRecipient);
                  expect(data.recipientId).to.be.a('number');
                  expect(data.recipientId).to.be(0);
                  expect(data.recipientType).to.be.a('string');
                  expect(data.recipientType).to.be("alliance");
  
                        }
              }
              expect(data.subject).to.be.a('string');
              expect(data.subject).to.be("");
              expect(data.timestamp).to.be.a(Date);
              expect(data.timestamp).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailLabels', function() {
        it('should call getCharactersCharacterIdMailLabels successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailLabels call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailLabels(characterId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailLabelsOk);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailLabelsLabel);
                expect(data.color).to.be.a('string');
                expect(data.color).to.be("#0000fe");
                expect(data.labelId).to.be.a('number');
                expect(data.labelId).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.unreadCount).to.be.a('number');
                expect(data.unreadCount).to.be(0);

                      }
            }
            expect(data.totalUnreadCount).to.be.a('number');
            expect(data.totalUnreadCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailLists', function() {
        it('should call getCharactersCharacterIdMailLists successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailLists call and complete the assertions
          /*
          var characterId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailLists(characterId, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailLists200Ok);
              expect(data.mailingListId).to.be.a('number');
              expect(data.mailingListId).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailMailId', function() {
        it('should call getCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailMailId call and complete the assertions
          /*
          var characterId = 56;
          var mailId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailMailId(characterId, mailId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailMailIdOk);
            expect(data.body).to.be.a('string');
            expect(data.body).to.be("");
            expect(data.from).to.be.a('number');
            expect(data.from).to.be(0);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.read).to.be.a('boolean');
            expect(data.read).to.be(false);
            {
              let dataCtr = data.recipients;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMailMailIdRecipient);
                expect(data.recipientId).to.be.a('number');
                expect(data.recipientId).to.be(0);
                expect(data.recipientType).to.be.a('string');
                expect(data.recipientType).to.be("alliance");

                      }
            }
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("");
            expect(data.timestamp).to.be.a(Date);
            expect(data.timestamp).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdMail', function() {
        it('should call postCharactersCharacterIdMail successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdMail call and complete the assertions
          /*
          var characterId = 56;
          var mail = new EveSwaggerInterface.PostCharactersCharacterIdMailMail();
          mail.approvedCost = "0";
          mail.body = "";
          mail.recipients = [new EveSwaggerInterface.PostCharactersCharacterIdMailRecipient()];
          mail.recipients[0].recipientId = 0;
          mail.recipients[0].recipientType = "alliance";
          mail.subject = "";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdMail(characterId, mail, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('number');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdMailLabels', function() {
        it('should call postCharactersCharacterIdMailLabels successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdMailLabels call and complete the assertions
          /*
          var characterId = 56;
          var label = new EveSwaggerInterface.PostCharactersCharacterIdMailLabelsLabel();
          label.color = "#0000fe";
          label.name = "";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdMailLabels(characterId, label, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('number');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putCharactersCharacterIdMailMailId', function() {
        it('should call putCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for putCharactersCharacterIdMailMailId call
          /*
          var characterId = 56;
          var contents = new EveSwaggerInterface.PutCharactersCharacterIdMailMailIdContents();
          contents.labels = [0];
          contents.read = false;
          var mailId = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putCharactersCharacterIdMailMailId(characterId, contents, mailId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
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
