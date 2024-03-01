# .PriceListApi

All URIs are relative to *https://pricelist.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPriceList**](PriceListApi.md#createPriceList) | **POST** /pricelist.PriceList/CreatePriceList | Create new list
[**deletePriceListItems**](PriceListApi.md#deletePriceListItems) | **POST** /pricelist.PriceList/DeletePriceListItems | Get prices for items
[**getFullPriceItemsByPricelistId**](PriceListApi.md#getFullPriceItemsByPricelistId) | **POST** /pricelist.PriceList/GetFullPriceItemsByPricelistId | List detailed items
[**getPriceList**](PriceListApi.md#getPriceList) | **POST** /pricelist.PriceList/GetPriceList | Get specific list
[**getPriceListByCode**](PriceListApi.md#getPriceListByCode) | **POST** /pricelist.PriceList/GetPriceListByCode | Get list by code
[**getPriceListItems**](PriceListApi.md#getPriceListItems) | **POST** /pricelist.PriceList/GetPriceListItems | Get items in list
[**getPricesItems**](PriceListApi.md#getPricesItems) | **POST** /pricelist.PriceList/GetPricesItems | Get detailed items
[**listFullPriceItemsByPricelistId**](PriceListApi.md#listFullPriceItemsByPricelistId) | **POST** /pricelist.PriceList/ListFullPriceItemsByPricelistId | List detailed price items for a specific price list
[**listPriceLists**](PriceListApi.md#listPriceLists) | **POST** /pricelist.PriceList/ListPriceLists | List all price lists
[**priceListGetPriceItemsByPriceListItemIds**](PriceListApi.md#priceListGetPriceItemsByPriceListItemIds) | **POST** /pricelist.PriceList/GetPriceItemsByPriceListItemIds | 
[**setPriceListItems**](PriceListApi.md#setPriceListItems) | **POST** /pricelist.PriceList/SetPriceListItems | Set items in list
[**updatePriceList**](PriceListApi.md#updatePriceList) | **POST** /pricelist.PriceList/UpdatePriceList | Update list


# **createPriceList**
> PricelistCreatePriceListResponse createPriceList(body)

Allows the creation of a new price list with specified details such as code, name, currency, and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiCreatePriceListRequest = {
  // PricelistCreatePriceListRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    name: "name_example",
    description: "description_example",
    isActive: true,
    isDefault: true,
    currency: "XXX",
    vatIncluded: true,
    deliveredDutyPaid: true,
    segments: [
      "segments_example",
    ],
    markets: [
      "markets_example",
    ],
    channels: [
      "channels_example",
    ],
    type: "UNKNOWN",
    isSystem: true,
  },
};

apiInstance.createPriceList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistCreatePriceListRequest**|  |


### Return type

**PricelistCreatePriceListResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePriceListItems**
> any deletePriceListItems(body)

Deletes specified items from a price list based on their unique identifiers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiDeletePriceListItemsRequest = {
  // PricelistDeletePriceListItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    itemsGrn: [
      "itemsGrn_example",
    ],
  },
};

apiInstance.deletePriceListItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistDeletePriceListItemsRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFullPriceItemsByPricelistId**
> PricelistGetFullPriceItemsResponse getFullPriceItemsByPricelistId(body)

Fetches detailed information about items, including historical price data, for a specific price list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiGetFullPriceItemsByPricelistIdRequest = {
  // PricelistGetFullPriceItemsRequest
  body: {
    tenantId: "tenantId_example",
    pricelistId: "pricelistId_example",
    itemsGrn: [
      "itemsGrn_example",
    ],
  },
};

apiInstance.getFullPriceItemsByPricelistId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetFullPriceItemsRequest**|  |


### Return type

**PricelistGetFullPriceItemsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPriceList**
> PricelistGetPriceListResponse getPriceList(body)

Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiGetPriceListRequest = {
  // PricelistGetPriceListRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getPriceList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetPriceListRequest**|  |


### Return type

**PricelistGetPriceListResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPriceListByCode**
> PricelistGetPriceListByCodeResponse getPriceListByCode(body)

Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiGetPriceListByCodeRequest = {
  // PricelistGetPriceListByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getPriceListByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetPriceListByCodeRequest**|  |


### Return type

**PricelistGetPriceListByCodeResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPriceListItems**
> PricelistGetPriceListItemsResponse getPriceListItems(body)

Fetches a paginated list of items associated with a particular price list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiGetPriceListItemsRequest = {
  // PricelistGetPriceListItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.getPriceListItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetPriceListItemsRequest**|  |


### Return type

**PricelistGetPriceListItemsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPricesItems**
> PricelistGetPricesResponse getPricesItems(body)

Retrieves the current prices of specified items considering the provided context, such as currency and market.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiGetPricesItemsRequest = {
  // PricelistGetPricesRequest
  body: {
    tenantId: "tenantId_example",
    itemsGrn: [
      "itemsGrn_example",
    ],
    context: {
      currency: "XXX",
      segment: "segment_example",
      segments: [
        "segments_example",
      ],
      market: "market_example",
      channel: "channel_example",
    },
  },
};

apiInstance.getPricesItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetPricesRequest**|  |


### Return type

**PricelistGetPricesResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFullPriceItemsByPricelistId**
> PricelistListFullPriceItemsResponse listFullPriceItemsByPricelistId(body)

Retrieves a paginated list of detailed price items, including historical data, for a specific price list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiListFullPriceItemsByPricelistIdRequest = {
  // PricelistListFullPriceItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.listFullPriceItemsByPricelistId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistListFullPriceItemsRequest**|  |


### Return type

**PricelistListFullPriceItemsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPriceLists**
> PricelistListPriceListsResponse listPriceLists(body)

Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiListPriceListsRequest = {
  // PricelistListPriceListsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    searchQuery: "searchQuery_example",
    filterMask: "filterMask_example",
    filter: {
      code: "code_example",
      name: "name_example",
      description: "description_example",
      isActive: true,
      isDefault: true,
      currencyFilter: {
        currencies: [
          "XXX",
        ],
        condition: "IN",
      },
      vatIncluded: true,
      deliveredDutyPaid: true,
      segmentsFilter: {
        segments: [
          "segments_example",
        ],
        condition: "IN",
      },
      marketsFilter: {
        markets: [
          "markets_example",
        ],
        condition: "IN",
      },
      channelsFilter: {
        channels: [
          "channels_example",
        ],
        condition: "IN",
      },
      typeFilter: {
        pricelistTypes: [
          "UNKNOWN",
        ],
        condition: "IN",
      },
      isSystem: true,
    },
  },
};

apiInstance.listPriceLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistListPriceListsRequest**|  |


### Return type

**PricelistListPriceListsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetPriceItemsByPriceListItemIds**
> PricelistGetPriceItemsByPriceListItemIdsResponse priceListGetPriceItemsByPriceListItemIds(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetPriceItemsByPriceListItemIdsRequest = {
  // PricelistGetPriceItemsByPriceListItemIdsRequest
  body: {
    tenantId: "tenantId_example",
    priceListItemId: [
      "priceListItemId_example",
    ],
  },
};

apiInstance.priceListGetPriceItemsByPriceListItemIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistGetPriceItemsByPriceListItemIdsRequest**|  |


### Return type

**PricelistGetPriceItemsByPriceListItemIdsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setPriceListItems**
> PricelistSetPriceListItemsResponse setPriceListItems(body)

Updates or creates items for a given price list, allowing bulk modifications.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiSetPriceListItemsRequest = {
  // PricelistSetPriceListItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    items: [
      {
        itemGrn: "itemGrn_example",
        basePrice: {
          units: "units_example",
          micros: 1,
        },
        priceItems: [
          {
            price: {
              units: "units_example",
              micros: 1,
            },
            isEnabled: true,
            startAt: new Date('1970-01-01T00:00:00.00Z'),
            endAt: new Date('1970-01-01T00:00:00.00Z'),
            order: 1,
            basePrice: {
              units: "units_example",
              micros: 1,
            },
          },
        ],
        hasTierPrices: true,
      },
    ],
  },
};

apiInstance.setPriceListItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistSetPriceListItemsRequest**|  |


### Return type

**PricelistSetPriceListItemsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePriceList**
> any updatePriceList(body)

Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiUpdatePriceListRequest = {
  // PricelistUpdatePriceListRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      isActive: true,
      isDefault: true,
      currency: "XXX",
      vatIncluded: true,
      deliveredDutyPaid: true,
      segments: [
        "segments_example",
      ],
      markets: [
        "markets_example",
      ],
      channels: [
        "channels_example",
      ],
      type: "UNKNOWN",
      isSystem: true,
      name: "name_example",
      description: "description_example",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.updatePriceList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PricelistUpdatePriceListRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


