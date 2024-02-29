# .PriceListApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priceListCreatePriceList**](PriceListApi.md#priceListCreatePriceList) | **POST** /pricelist.PriceList/CreatePriceList | 
[**priceListDeletePriceListItems**](PriceListApi.md#priceListDeletePriceListItems) | **POST** /pricelist.PriceList/DeletePriceListItems | 
[**priceListGetFullPriceItemsByPricelistId**](PriceListApi.md#priceListGetFullPriceItemsByPricelistId) | **POST** /pricelist.PriceList/GetFullPriceItemsByPricelistId | 
[**priceListGetPriceItemsByPriceListItemIds**](PriceListApi.md#priceListGetPriceItemsByPriceListItemIds) | **POST** /pricelist.PriceList/GetPriceItemsByPriceListItemIds | 
[**priceListGetPriceList**](PriceListApi.md#priceListGetPriceList) | **POST** /pricelist.PriceList/GetPriceList | 
[**priceListGetPriceListByCode**](PriceListApi.md#priceListGetPriceListByCode) | **POST** /pricelist.PriceList/GetPriceListByCode | 
[**priceListGetPriceListItems**](PriceListApi.md#priceListGetPriceListItems) | **POST** /pricelist.PriceList/GetPriceListItems | 
[**priceListGetPricesItems**](PriceListApi.md#priceListGetPricesItems) | **POST** /pricelist.PriceList/GetPricesItems | 
[**priceListListFullPriceItemsByPricelistId**](PriceListApi.md#priceListListFullPriceItemsByPricelistId) | **POST** /pricelist.PriceList/ListFullPriceItemsByPricelistId | 
[**priceListListPriceLists**](PriceListApi.md#priceListListPriceLists) | **POST** /pricelist.PriceList/ListPriceLists | 
[**priceListSetPriceListItems**](PriceListApi.md#priceListSetPriceListItems) | **POST** /pricelist.PriceList/SetPriceListItems | 
[**priceListUpdatePriceList**](PriceListApi.md#priceListUpdatePriceList) | **POST** /pricelist.PriceList/UpdatePriceList | 


# **priceListCreatePriceList**
> PricelistCreatePriceListResponse priceListCreatePriceList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListCreatePriceListRequest = {
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

apiInstance.priceListCreatePriceList(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListDeletePriceListItems**
> any priceListDeletePriceListItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListDeletePriceListItemsRequest = {
  // PricelistDeletePriceListItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    itemsGrn: [
      "itemsGrn_example",
    ],
  },
};

apiInstance.priceListDeletePriceListItems(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetFullPriceItemsByPricelistId**
> PricelistGetFullPriceItemsResponse priceListGetFullPriceItemsByPricelistId(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetFullPriceItemsByPricelistIdRequest = {
  // PricelistGetFullPriceItemsRequest
  body: {
    tenantId: "tenantId_example",
    pricelistId: "pricelistId_example",
    itemsGrn: [
      "itemsGrn_example",
    ],
  },
};

apiInstance.priceListGetFullPriceItemsByPricelistId(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetPriceList**
> PricelistGetPriceListResponse priceListGetPriceList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetPriceListRequest = {
  // PricelistGetPriceListRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.priceListGetPriceList(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetPriceListByCode**
> PricelistGetPriceListByCodeResponse priceListGetPriceListByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetPriceListByCodeRequest = {
  // PricelistGetPriceListByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.priceListGetPriceListByCode(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetPriceListItems**
> PricelistGetPriceListItemsResponse priceListGetPriceListItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetPriceListItemsRequest = {
  // PricelistGetPriceListItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.priceListGetPriceListItems(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListGetPricesItems**
> PricelistGetPricesResponse priceListGetPricesItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListGetPricesItemsRequest = {
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

apiInstance.priceListGetPricesItems(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListListFullPriceItemsByPricelistId**
> PricelistListFullPriceItemsResponse priceListListFullPriceItemsByPricelistId(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListListFullPriceItemsByPricelistIdRequest = {
  // PricelistListFullPriceItemsRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.priceListListFullPriceItemsByPricelistId(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListListPriceLists**
> PricelistListPriceListsResponse priceListListPriceLists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListListPriceListsRequest = {
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

apiInstance.priceListListPriceLists(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListSetPriceListItems**
> PricelistSetPriceListItemsResponse priceListSetPriceListItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListSetPriceListItemsRequest = {
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

apiInstance.priceListSetPriceListItems(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **priceListUpdatePriceList**
> any priceListUpdatePriceList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PriceListApi(configuration);

let body:.PriceListApiPriceListUpdatePriceListRequest = {
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

apiInstance.priceListUpdatePriceList(body).then((data:any) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


