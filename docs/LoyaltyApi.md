# EveSwaggerInterface.LoyaltyApi

All URIs are relative to *https://esi.evetech.net/latest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCharactersCharacterIdLoyaltyPoints**](LoyaltyApi.md#getCharactersCharacterIdLoyaltyPoints) | **GET** /characters/{character_id}/loyalty/points/ | Get loyalty points
[**getLoyaltyStoresCorporationIdOffers**](LoyaltyApi.md#getLoyaltyStoresCorporationIdOffers) | **GET** /loyalty/stores/{corporation_id}/offers/ | List loyalty store offers


<a name="getCharactersCharacterIdLoyaltyPoints"></a>
# **getCharactersCharacterIdLoyaltyPoints**
> [GetCharactersCharacterIdLoyaltyPoints200Ok] getCharactersCharacterIdLoyaltyPoints(characterId, opts)

Get loyalty points

Return a list of loyalty points for all corporations the character has worked for  --- Alternate route: `/dev/characters/{character_id}/loyalty/points/`  Alternate route: `/legacy/characters/{character_id}/loyalty/points/`  Alternate route: `/v1/characters/{character_id}/loyalty/points/`  --- This route is cached for up to 3600 seconds

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');
var defaultClient = EveSwaggerInterface.ApiClient.instance;

// Configure OAuth2 access token for authorization: evesso
var evesso = defaultClient.authentications['evesso'];
evesso.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EveSwaggerInterface.LoyaltyApi();

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
apiInstance.getCharactersCharacterIdLoyaltyPoints(characterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **characterId** | **Number**| An EVE character ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 
 **token** | **String**| Access token to use if unable to set a header | [optional] 

### Return type

[**[GetCharactersCharacterIdLoyaltyPoints200Ok]**](GetCharactersCharacterIdLoyaltyPoints200Ok.md)

### Authorization

[evesso](../README.md#evesso)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLoyaltyStoresCorporationIdOffers"></a>
# **getLoyaltyStoresCorporationIdOffers**
> [GetLoyaltyStoresCorporationIdOffers200Ok] getLoyaltyStoresCorporationIdOffers(corporationId, opts)

List loyalty store offers

Return a list of offers from a specific corporation's loyalty store  --- Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`  Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`  Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`  --- This route expires daily at 11:05

### Example
```javascript
var EveSwaggerInterface = require('eve_swagger_interface');

var apiInstance = new EveSwaggerInterface.LoyaltyApi();

var corporationId = 56; // Number | An EVE corporation ID

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
apiInstance.getLoyaltyStoresCorporationIdOffers(corporationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporationId** | **Number**| An EVE corporation ID | 
 **datasource** | **String**| The server name you would like data from | [optional] [default to tranquility]
 **ifNoneMatch** | **String**| ETag from a previous request. A 304 will be returned if this matches the current ETag | [optional] 

### Return type

[**[GetLoyaltyStoresCorporationIdOffers200Ok]**](GetLoyaltyStoresCorporationIdOffers200Ok.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

