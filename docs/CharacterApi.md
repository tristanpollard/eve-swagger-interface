# EveSwaggerInterface.CharacterApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterId**](CharacterApi.md#getCharactersCharacterId) | **GET** /characters/{character_id}/ | Get character's public information
[**getCharactersCharacterIdAgentsResearch**](CharacterApi.md#getCharactersCharacterIdAgentsResearch) | **GET** /characters/{character_id}/agents_research/ | Get agents research
[**getCharactersCharacterIdBlueprints**](CharacterApi.md#getCharactersCharacterIdBlueprints) | **GET** /characters/{character_id}/blueprints/ | Get blueprints
[**getCharactersCharacterIdCorporationhistory**](CharacterApi.md#getCharactersCharacterIdCorporationhistory) | **GET** /characters/{character_id}/corporationhistory/ | Get corporation history
[**getCharactersCharacterIdFatigue**](CharacterApi.md#getCharactersCharacterIdFatigue) | **GET** /characters/{character_id}/fatigue/ | Get jump fatigue
[**getCharactersCharacterIdMedals**](CharacterApi.md#getCharactersCharacterIdMedals) | **GET** /characters/{character_id}/medals/ | Get medals
[**getCharactersCharacterIdNotifications**](CharacterApi.md#getCharactersCharacterIdNotifications) | **GET** /characters/{character_id}/notifications/ | Get character notifications
[**getCharactersCharacterIdNotificationsContacts**](CharacterApi.md#getCharactersCharacterIdNotificationsContacts) | **GET** /characters/{character_id}/notifications/contacts/ | Get new contact notifications
[**getCharactersCharacterIdPortrait**](CharacterApi.md#getCharactersCharacterIdPortrait) | **GET** /characters/{character_id}/portrait/ | Get character portraits
[**getCharactersCharacterIdRoles**](CharacterApi.md#getCharactersCharacterIdRoles) | **GET** /characters/{character_id}/roles/ | Get character corporation roles
[**getCharactersCharacterIdStandings**](CharacterApi.md#getCharactersCharacterIdStandings) | **GET** /characters/{character_id}/standings/ | Get standings
[**getCharactersCharacterIdStats**](CharacterApi.md#getCharactersCharacterIdStats) | **GET** /characters/{character_id}/stats/ | Yearly aggregate stats
[**getCharactersCharacterIdTitles**](CharacterApi.md#getCharactersCharacterIdTitles) | **GET** /characters/{character_id}/titles/ | Get character corporation titles
[**postCharactersAffiliation**](CharacterApi.md#postCharactersAffiliation) | **POST** /characters/affiliation/ | Character affiliation
[**postCharactersCharacterIdCspa**](CharacterApi.md#postCharactersCharacterIdCspa) | **POST** /characters/{character_id}/cspa/ | Calculate a CSPA charge cost


<a name="getCharactersCharacterId"></a>
# **getCharactersCharacterId**
> GetCharactersCharacterIdOk getCharactersCharacterId(characterId, opts)

Get character's public information

Public information about a character  --- Alternate route: `/dev/characters/{character_id}/`  Alternate route: `/v4/characters/{character_id}/`  --- This route is cached for up to 86400 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterId(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetCharactersCharacterIdOk**](GetCharactersCharacterIdOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdAgentsResearch"></a>
# **getCharactersCharacterIdAgentsResearch**
> [GetCharactersCharacterIdAgentsResearch200Ok] getCharactersCharacterIdAgentsResearch(characterId, opts)

Get agents research

Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)  --- Alternate route: `/dev/characters/{character_id}/agents_research/`  Alternate route: `/legacy/characters/{character_id}/agents_research/`  Alternate route: `/v1/characters/{character_id}/agents_research/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdAgentsResearch(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdAgentsResearch200Ok]**](GetCharactersCharacterIdAgentsResearch200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdBlueprints"></a>
# **getCharactersCharacterIdBlueprints**
> [GetCharactersCharacterIdBlueprints200Ok] getCharactersCharacterIdBlueprints(characterId, opts)

Get blueprints

Return a list of blueprints the character owns  --- Alternate route: `/dev/characters/{character_id}/blueprints/`  Alternate route: `/v2/characters/{character_id}/blueprints/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'page': 1 // Number | Which page of results to return
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdBlueprints(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **page** | **Number**| Which page of results to return | [optional] [default to 1]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdBlueprints200Ok]**](GetCharactersCharacterIdBlueprints200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdCorporationhistory"></a>
# **getCharactersCharacterIdCorporationhistory**
> [GetCharactersCharacterIdCorporationhistory200Ok] getCharactersCharacterIdCorporationhistory(characterId, opts)

Get corporation history

Get a list of all the corporations a character has been a member of  --- Alternate route: `/dev/characters/{character_id}/corporationhistory/`  Alternate route: `/legacy/characters/{character_id}/corporationhistory/`  Alternate route: `/v1/characters/{character_id}/corporationhistory/`  --- This route is cached for up to 86400 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdCorporationhistory(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetCharactersCharacterIdCorporationhistory200Ok]**](GetCharactersCharacterIdCorporationhistory200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdFatigue"></a>
# **getCharactersCharacterIdFatigue**
> GetCharactersCharacterIdFatigueOk getCharactersCharacterIdFatigue(characterId, opts)

Get jump fatigue

Return a character's jump activation and fatigue information  --- Alternate route: `/dev/characters/{character_id}/fatigue/`  Alternate route: `/legacy/characters/{character_id}/fatigue/`  Alternate route: `/v1/characters/{character_id}/fatigue/`  --- This route is cached for up to 300 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdFatigue(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdFatigueOk**](GetCharactersCharacterIdFatigueOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdMedals"></a>
# **getCharactersCharacterIdMedals**
> [GetCharactersCharacterIdMedals200Ok] getCharactersCharacterIdMedals(characterId, opts)

Get medals

Return a list of medals the character has  --- Alternate route: `/dev/characters/{character_id}/medals/`  Alternate route: `/legacy/characters/{character_id}/medals/`  Alternate route: `/v1/characters/{character_id}/medals/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdMedals(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdMedals200Ok]**](GetCharactersCharacterIdMedals200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdNotifications"></a>
# **getCharactersCharacterIdNotifications**
> [GetCharactersCharacterIdNotifications200Ok] getCharactersCharacterIdNotifications(characterId, opts)

Get character notifications

Return character notifications  --- Alternate route: `/dev/characters/{character_id}/notifications/`  Alternate route: `/v5/characters/{character_id}/notifications/`  --- This route is cached for up to 600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdNotifications(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdNotifications200Ok]**](GetCharactersCharacterIdNotifications200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdNotificationsContacts"></a>
# **getCharactersCharacterIdNotificationsContacts**
> [GetCharactersCharacterIdNotificationsContacts200Ok] getCharactersCharacterIdNotificationsContacts(characterId, opts)

Get new contact notifications

Return notifications about having been added to someone's contact list  --- Alternate route: `/dev/characters/{character_id}/notifications/contacts/`  Alternate route: `/legacy/characters/{character_id}/notifications/contacts/`  Alternate route: `/v1/characters/{character_id}/notifications/contacts/`  --- This route is cached for up to 600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdNotificationsContacts(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdNotificationsContacts200Ok]**](GetCharactersCharacterIdNotificationsContacts200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdPortrait"></a>
# **getCharactersCharacterIdPortrait**
> GetCharactersCharacterIdPortraitOk getCharactersCharacterIdPortrait(characterId, opts)

Get character portraits

Get portrait urls for a character  --- Alternate route: `/v2/characters/{character_id}/portrait/`  --- This route expires daily at 11:05  --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/portrait/)

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdPortrait(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**GetCharactersCharacterIdPortraitOk**](GetCharactersCharacterIdPortraitOk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdRoles"></a>
# **getCharactersCharacterIdRoles**
> GetCharactersCharacterIdRolesOk getCharactersCharacterIdRoles(characterId, opts)

Get character corporation roles

Returns a character's corporation roles  --- Alternate route: `/dev/characters/{character_id}/roles/`  Alternate route: `/v2/characters/{character_id}/roles/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdRoles(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**GetCharactersCharacterIdRolesOk**](GetCharactersCharacterIdRolesOk.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdStandings"></a>
# **getCharactersCharacterIdStandings**
> [GetCharactersCharacterIdStandings200Ok] getCharactersCharacterIdStandings(characterId, opts)

Get standings

Return character standings from agents, NPC corporations, and factions  --- Alternate route: `/dev/characters/{character_id}/standings/`  Alternate route: `/legacy/characters/{character_id}/standings/`  Alternate route: `/v1/characters/{character_id}/standings/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdStandings(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdStandings200Ok]**](GetCharactersCharacterIdStandings200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdStats"></a>
# **getCharactersCharacterIdStats**
> [GetCharactersCharacterIdStats200Ok] getCharactersCharacterIdStats(characterId, opts)

Yearly aggregate stats

Returns aggregate yearly stats for a character  --- Alternate route: `/dev/characters/{character_id}/stats/`  Alternate route: `/v2/characters/{character_id}/stats/`  --- This route is cached for up to 86400 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdStats(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdStats200Ok]**](GetCharactersCharacterIdStats200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCharactersCharacterIdTitles"></a>
# **getCharactersCharacterIdTitles**
> [GetCharactersCharacterIdTitles200Ok] getCharactersCharacterIdTitles(characterId, opts)

Get character corporation titles

Returns a character's titles  --- Alternate route: `/dev/characters/{character_id}/titles/`  Alternate route: `/legacy/characters/{character_id}/titles/`  Alternate route: `/v1/characters/{character_id}/titles/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'ifNoneMatch': "ifNoneMatch_example", // String | ETag from a previous request. A 304 will be returned if this matches the current ETag
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCharactersCharacterIdTitles(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdTitles200Ok]**](GetCharactersCharacterIdTitles200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCharactersAffiliation"></a>
# **postCharactersAffiliation**
> [PostCharactersAffiliation200Ok] postCharactersAffiliation(characters, opts)

Character affiliation

Bulk lookup of character IDs to corporation, alliance and faction  --- Alternate route: `/dev/characters/affiliation/`  Alternate route: `/legacy/characters/affiliation/`  Alternate route: `/v1/characters/affiliation/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characters = [new EveSwaggerInterface.[Number]()]; // [Number] | The character IDs to fetch affiliations for. All characters must exist, or none will be returned

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCharactersAffiliation(characters, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characters** | **[Number]**| The character IDs to fetch affiliations for. All characters must exist, or none will be returned | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]

### Return type

[**[PostCharactersAffiliation200Ok]**](PostCharactersAffiliation200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postCharactersCharacterIdCspa"></a>
# **postCharactersCharacterIdCspa**
> 'Number' postCharactersCharacterIdCspa(characterIdcharacters, opts)

Calculate a CSPA charge cost

Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost  --- Alternate route: `/dev/characters/{character_id}/cspa/`  Alternate route: `/v4/characters/{character_id}/cspa/` 

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.CharacterApi();

var characterId = 56; // Number | An EVE character ID

var characters = [new EveSwaggerInterface.[Number]()]; // [Number] | The target characters to calculate the charge for

var opts = { 
  'datasource': "tranquility", // String | The server name you would like data from
  'token': "token_example" // String | Access token to use if unable to set a header
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCharactersCharacterIdCspa(characterIdcharacters, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **characters** | **[Number]**| The target characters to calculate the charge for | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

**'Number'**

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

