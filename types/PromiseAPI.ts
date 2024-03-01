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
import { ObservablePriceListApi } from './ObservableAPI';

import { PriceListApiRequestFactory, PriceListApiResponseProcessor} from "../apis/PriceListApi";
export class PromisePriceListApi {
    private api: ObservablePriceListApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PriceListApiRequestFactory,
        responseProcessor?: PriceListApiResponseProcessor
    ) {
        this.api = new ObservablePriceListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param body 
     */
    public createPriceListWithHttpInfo(body: PricelistCreatePriceListRequest, _options?: Configuration): Promise<HttpInfo<PricelistCreatePriceListResponse>> {
        const result = this.api.createPriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param body 
     */
    public createPriceList(body: PricelistCreatePriceListRequest, _options?: Configuration): Promise<PricelistCreatePriceListResponse> {
        const result = this.api.createPriceList(body, _options);
        return result.toPromise();
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param body 
     */
    public deletePriceListItemsWithHttpInfo(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deletePriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param body 
     */
    public deletePriceListItems(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.deletePriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param body 
     */
    public getFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        const result = this.api.getFullPriceItemsByPricelistIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param body 
     */
    public getFullPriceItemsByPricelistId(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Promise<PricelistGetFullPriceItemsResponse> {
        const result = this.api.getFullPriceItemsByPricelistId(body, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param body 
     */
    public getPriceListWithHttpInfo(body: PricelistGetPriceListRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListResponse>> {
        const result = this.api.getPriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param body 
     */
    public getPriceList(body: PricelistGetPriceListRequest, _options?: Configuration): Promise<PricelistGetPriceListResponse> {
        const result = this.api.getPriceList(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param body 
     */
    public getPriceListByCodeWithHttpInfo(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        const result = this.api.getPriceListByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param body 
     */
    public getPriceListByCode(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Promise<PricelistGetPriceListByCodeResponse> {
        const result = this.api.getPriceListByCode(body, _options);
        return result.toPromise();
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param body 
     */
    public getPriceListItemsWithHttpInfo(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListItemsResponse>> {
        const result = this.api.getPriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param body 
     */
    public getPriceListItems(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Promise<PricelistGetPriceListItemsResponse> {
        const result = this.api.getPriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param body 
     */
    public getPricesItemsWithHttpInfo(body: PricelistGetPricesRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPricesResponse>> {
        const result = this.api.getPricesItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param body 
     */
    public getPricesItems(body: PricelistGetPricesRequest, _options?: Configuration): Promise<PricelistGetPricesResponse> {
        const result = this.api.getPricesItems(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param body 
     */
    public listFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistListFullPriceItemsResponse>> {
        const result = this.api.listFullPriceItemsByPricelistIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param body 
     */
    public listFullPriceItemsByPricelistId(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Promise<PricelistListFullPriceItemsResponse> {
        const result = this.api.listFullPriceItemsByPricelistId(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param body 
     */
    public listPriceListsWithHttpInfo(body: PricelistListPriceListsRequest, _options?: Configuration): Promise<HttpInfo<PricelistListPriceListsResponse>> {
        const result = this.api.listPriceListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param body 
     */
    public listPriceLists(body: PricelistListPriceListsRequest, _options?: Configuration): Promise<PricelistListPriceListsResponse> {
        const result = this.api.listPriceLists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(body: PricelistGetPriceItemsByPriceListItemIdsRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceItemsByPriceListItemIdsResponse>> {
        const result = this.api.priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceItemsByPriceListItemIds(body: PricelistGetPriceItemsByPriceListItemIdsRequest, _options?: Configuration): Promise<PricelistGetPriceItemsByPriceListItemIdsResponse> {
        const result = this.api.priceListGetPriceItemsByPriceListItemIds(body, _options);
        return result.toPromise();
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param body 
     */
    public setPriceListItemsWithHttpInfo(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistSetPriceListItemsResponse>> {
        const result = this.api.setPriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param body 
     */
    public setPriceListItems(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Promise<PricelistSetPriceListItemsResponse> {
        const result = this.api.setPriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param body 
     */
    public updatePriceListWithHttpInfo(body: PricelistUpdatePriceListRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updatePriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param body 
     */
    public updatePriceList(body: PricelistUpdatePriceListRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updatePriceList(body, _options);
        return result.toPromise();
    }


}



