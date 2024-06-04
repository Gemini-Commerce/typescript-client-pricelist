import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ListPriceListsRequestFilter } from '../models/ListPriceListsRequestFilter';
import { ListPriceListsResponsePriceList } from '../models/ListPriceListsResponsePriceList';
import { PricelistChannelFilter } from '../models/PricelistChannelFilter';
import { PricelistCreatePriceListRequest } from '../models/PricelistCreatePriceListRequest';
import { PricelistCreatePriceListResponse } from '../models/PricelistCreatePriceListResponse';
import { PricelistCurrency } from '../models/PricelistCurrency';
import { PricelistCurrencyFilter } from '../models/PricelistCurrencyFilter';
import { PricelistDeletePriceListItemsRequest } from '../models/PricelistDeletePriceListItemsRequest';
import { PricelistFilterCondition } from '../models/PricelistFilterCondition';
import { PricelistGetFullPriceItem } from '../models/PricelistGetFullPriceItem';
import { PricelistGetFullPriceItemPrice } from '../models/PricelistGetFullPriceItemPrice';
import { PricelistGetFullPriceItemsRequest } from '../models/PricelistGetFullPriceItemsRequest';
import { PricelistGetFullPriceItemsResponse } from '../models/PricelistGetFullPriceItemsResponse';
import { PricelistGetPriceItem } from '../models/PricelistGetPriceItem';
import { PricelistGetPriceItemsByPriceListItemIdsRequest } from '../models/PricelistGetPriceItemsByPriceListItemIdsRequest';
import { PricelistGetPriceItemsByPriceListItemIdsResponse } from '../models/PricelistGetPriceItemsByPriceListItemIdsResponse';
import { PricelistGetPriceListByCodeRequest } from '../models/PricelistGetPriceListByCodeRequest';
import { PricelistGetPriceListByCodeResponse } from '../models/PricelistGetPriceListByCodeResponse';
import { PricelistGetPriceListItem } from '../models/PricelistGetPriceListItem';
import { PricelistGetPriceListItemsRequest } from '../models/PricelistGetPriceListItemsRequest';
import { PricelistGetPriceListItemsResponse } from '../models/PricelistGetPriceListItemsResponse';
import { PricelistGetPriceListRequest } from '../models/PricelistGetPriceListRequest';
import { PricelistGetPriceListResponse } from '../models/PricelistGetPriceListResponse';
import { PricelistGetPricesRequest } from '../models/PricelistGetPricesRequest';
import { PricelistGetPricesResponse } from '../models/PricelistGetPricesResponse';
import { PricelistListFullPriceItemsRequest } from '../models/PricelistListFullPriceItemsRequest';
import { PricelistListFullPriceItemsResponse } from '../models/PricelistListFullPriceItemsResponse';
import { PricelistListPriceListsRequest } from '../models/PricelistListPriceListsRequest';
import { PricelistListPriceListsResponse } from '../models/PricelistListPriceListsResponse';
import { PricelistMarketFilter } from '../models/PricelistMarketFilter';
import { PricelistMoney } from '../models/PricelistMoney';
import { PricelistPriceContext } from '../models/PricelistPriceContext';
import { PricelistPriceListType } from '../models/PricelistPriceListType';
import { PricelistPriceListTypeFilter } from '../models/PricelistPriceListTypeFilter';
import { PricelistSegmentFilter } from '../models/PricelistSegmentFilter';
import { PricelistSetPriceListItem } from '../models/PricelistSetPriceListItem';
import { PricelistSetPriceListItemError } from '../models/PricelistSetPriceListItemError';
import { PricelistSetPriceListItemPrice } from '../models/PricelistSetPriceListItemPrice';
import { PricelistSetPriceListItemsRequest } from '../models/PricelistSetPriceListItemsRequest';
import { PricelistSetPriceListItemsResponse } from '../models/PricelistSetPriceListItemsResponse';
import { PricelistUpdatePriceListRequest } from '../models/PricelistUpdatePriceListRequest';
import { PricelistUpdatePriceListRequestPayload } from '../models/PricelistUpdatePriceListRequestPayload';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ObservablePriceListApi } from "./ObservableAPI";
import { PriceListApiRequestFactory, PriceListApiResponseProcessor} from "../apis/PriceListApi";

export interface PriceListApiCreatePriceListRequest {
    /**
     * 
     * @type PricelistCreatePriceListRequest
     * @memberof PriceListApicreatePriceList
     */
    body: PricelistCreatePriceListRequest
}

export interface PriceListApiDeletePriceListItemsRequest {
    /**
     * 
     * @type PricelistDeletePriceListItemsRequest
     * @memberof PriceListApideletePriceListItems
     */
    body: PricelistDeletePriceListItemsRequest
}

export interface PriceListApiGetFullPriceItemsByPricelistIdRequest {
    /**
     * 
     * @type PricelistGetFullPriceItemsRequest
     * @memberof PriceListApigetFullPriceItemsByPricelistId
     */
    body: PricelistGetFullPriceItemsRequest
}

export interface PriceListApiGetPriceListRequest {
    /**
     * 
     * @type PricelistGetPriceListRequest
     * @memberof PriceListApigetPriceList
     */
    body: PricelistGetPriceListRequest
}

export interface PriceListApiGetPriceListByCodeRequest {
    /**
     * 
     * @type PricelistGetPriceListByCodeRequest
     * @memberof PriceListApigetPriceListByCode
     */
    body: PricelistGetPriceListByCodeRequest
}

export interface PriceListApiGetPriceListItemsRequest {
    /**
     * 
     * @type PricelistGetPriceListItemsRequest
     * @memberof PriceListApigetPriceListItems
     */
    body: PricelistGetPriceListItemsRequest
}

export interface PriceListApiGetPricesItemsRequest {
    /**
     * 
     * @type PricelistGetPricesRequest
     * @memberof PriceListApigetPricesItems
     */
    body: PricelistGetPricesRequest
}

export interface PriceListApiListFullPriceItemsByPricelistIdRequest {
    /**
     * 
     * @type PricelistListFullPriceItemsRequest
     * @memberof PriceListApilistFullPriceItemsByPricelistId
     */
    body: PricelistListFullPriceItemsRequest
}

export interface PriceListApiListPriceListsRequest {
    /**
     * 
     * @type PricelistListPriceListsRequest
     * @memberof PriceListApilistPriceLists
     */
    body: PricelistListPriceListsRequest
}

export interface PriceListApiPriceListGetPriceItemsByPriceListItemIdsRequest {
    /**
     * 
     * @type PricelistGetPriceItemsByPriceListItemIdsRequest
     * @memberof PriceListApipriceListGetPriceItemsByPriceListItemIds
     */
    body: PricelistGetPriceItemsByPriceListItemIdsRequest
}

export interface PriceListApiSetPriceListItemsRequest {
    /**
     * 
     * @type PricelistSetPriceListItemsRequest
     * @memberof PriceListApisetPriceListItems
     */
    body: PricelistSetPriceListItemsRequest
}

export interface PriceListApiUpdatePriceListRequest {
    /**
     * 
     * @type PricelistUpdatePriceListRequest
     * @memberof PriceListApiupdatePriceList
     */
    body: PricelistUpdatePriceListRequest
}

export class ObjectPriceListApi {
    private api: ObservablePriceListApi

    public constructor(configuration: Configuration, requestFactory?: PriceListApiRequestFactory, responseProcessor?: PriceListApiResponseProcessor) {
        this.api = new ObservablePriceListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param param the request object
     */
    public createPriceListWithHttpInfo(param: PriceListApiCreatePriceListRequest, options?: Configuration): Promise<HttpInfo<PricelistCreatePriceListResponse>> {
        return this.api.createPriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param param the request object
     */
    public createPriceList(param: PriceListApiCreatePriceListRequest, options?: Configuration): Promise<PricelistCreatePriceListResponse> {
        return this.api.createPriceList(param.body,  options).toPromise();
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param param the request object
     */
    public deletePriceListItemsWithHttpInfo(param: PriceListApiDeletePriceListItemsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deletePriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param param the request object
     */
    public deletePriceListItems(param: PriceListApiDeletePriceListItemsRequest, options?: Configuration): Promise<any> {
        return this.api.deletePriceListItems(param.body,  options).toPromise();
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param param the request object
     */
    public getFullPriceItemsByPricelistIdWithHttpInfo(param: PriceListApiGetFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        return this.api.getFullPriceItemsByPricelistIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param param the request object
     */
    public getFullPriceItemsByPricelistId(param: PriceListApiGetFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<PricelistGetFullPriceItemsResponse> {
        return this.api.getFullPriceItemsByPricelistId(param.body,  options).toPromise();
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param param the request object
     */
    public getPriceListWithHttpInfo(param: PriceListApiGetPriceListRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListResponse>> {
        return this.api.getPriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param param the request object
     */
    public getPriceList(param: PriceListApiGetPriceListRequest, options?: Configuration): Promise<PricelistGetPriceListResponse> {
        return this.api.getPriceList(param.body,  options).toPromise();
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param param the request object
     */
    public getPriceListByCodeWithHttpInfo(param: PriceListApiGetPriceListByCodeRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        return this.api.getPriceListByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param param the request object
     */
    public getPriceListByCode(param: PriceListApiGetPriceListByCodeRequest, options?: Configuration): Promise<PricelistGetPriceListByCodeResponse> {
        return this.api.getPriceListByCode(param.body,  options).toPromise();
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param param the request object
     */
    public getPriceListItemsWithHttpInfo(param: PriceListApiGetPriceListItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListItemsResponse>> {
        return this.api.getPriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param param the request object
     */
    public getPriceListItems(param: PriceListApiGetPriceListItemsRequest, options?: Configuration): Promise<PricelistGetPriceListItemsResponse> {
        return this.api.getPriceListItems(param.body,  options).toPromise();
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param param the request object
     */
    public getPricesItemsWithHttpInfo(param: PriceListApiGetPricesItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPricesResponse>> {
        return this.api.getPricesItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param param the request object
     */
    public getPricesItems(param: PriceListApiGetPricesItemsRequest, options?: Configuration): Promise<PricelistGetPricesResponse> {
        return this.api.getPricesItems(param.body,  options).toPromise();
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param param the request object
     */
    public listFullPriceItemsByPricelistIdWithHttpInfo(param: PriceListApiListFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<HttpInfo<PricelistListFullPriceItemsResponse>> {
        return this.api.listFullPriceItemsByPricelistIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param param the request object
     */
    public listFullPriceItemsByPricelistId(param: PriceListApiListFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<PricelistListFullPriceItemsResponse> {
        return this.api.listFullPriceItemsByPricelistId(param.body,  options).toPromise();
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param param the request object
     */
    public listPriceListsWithHttpInfo(param: PriceListApiListPriceListsRequest, options?: Configuration): Promise<HttpInfo<PricelistListPriceListsResponse>> {
        return this.api.listPriceListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param param the request object
     */
    public listPriceLists(param: PriceListApiListPriceListsRequest, options?: Configuration): Promise<PricelistListPriceListsResponse> {
        return this.api.listPriceLists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(param: PriceListApiPriceListGetPriceItemsByPriceListItemIdsRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceItemsByPriceListItemIdsResponse>> {
        return this.api.priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceItemsByPriceListItemIds(param: PriceListApiPriceListGetPriceItemsByPriceListItemIdsRequest, options?: Configuration): Promise<PricelistGetPriceItemsByPriceListItemIdsResponse> {
        return this.api.priceListGetPriceItemsByPriceListItemIds(param.body,  options).toPromise();
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param param the request object
     */
    public setPriceListItemsWithHttpInfo(param: PriceListApiSetPriceListItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistSetPriceListItemsResponse>> {
        return this.api.setPriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param param the request object
     */
    public setPriceListItems(param: PriceListApiSetPriceListItemsRequest, options?: Configuration): Promise<PricelistSetPriceListItemsResponse> {
        return this.api.setPriceListItems(param.body,  options).toPromise();
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param param the request object
     */
    public updatePriceListWithHttpInfo(param: PriceListApiUpdatePriceListRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updatePriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param param the request object
     */
    public updatePriceList(param: PriceListApiUpdatePriceListRequest, options?: Configuration): Promise<any> {
        return this.api.updatePriceList(param.body,  options).toPromise();
    }

}
