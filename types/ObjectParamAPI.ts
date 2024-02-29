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

export interface PriceListApiPriceListCreatePriceListRequest {
    /**
     * 
     * @type PricelistCreatePriceListRequest
     * @memberof PriceListApipriceListCreatePriceList
     */
    body: PricelistCreatePriceListRequest
}

export interface PriceListApiPriceListDeletePriceListItemsRequest {
    /**
     * 
     * @type PricelistDeletePriceListItemsRequest
     * @memberof PriceListApipriceListDeletePriceListItems
     */
    body: PricelistDeletePriceListItemsRequest
}

export interface PriceListApiPriceListGetFullPriceItemsByPricelistIdRequest {
    /**
     * 
     * @type PricelistGetFullPriceItemsRequest
     * @memberof PriceListApipriceListGetFullPriceItemsByPricelistId
     */
    body: PricelistGetFullPriceItemsRequest
}

export interface PriceListApiPriceListGetPriceItemsByPriceListItemIdsRequest {
    /**
     * 
     * @type PricelistGetPriceItemsByPriceListItemIdsRequest
     * @memberof PriceListApipriceListGetPriceItemsByPriceListItemIds
     */
    body: PricelistGetPriceItemsByPriceListItemIdsRequest
}

export interface PriceListApiPriceListGetPriceListRequest {
    /**
     * 
     * @type PricelistGetPriceListRequest
     * @memberof PriceListApipriceListGetPriceList
     */
    body: PricelistGetPriceListRequest
}

export interface PriceListApiPriceListGetPriceListByCodeRequest {
    /**
     * 
     * @type PricelistGetPriceListByCodeRequest
     * @memberof PriceListApipriceListGetPriceListByCode
     */
    body: PricelistGetPriceListByCodeRequest
}

export interface PriceListApiPriceListGetPriceListItemsRequest {
    /**
     * 
     * @type PricelistGetPriceListItemsRequest
     * @memberof PriceListApipriceListGetPriceListItems
     */
    body: PricelistGetPriceListItemsRequest
}

export interface PriceListApiPriceListGetPricesItemsRequest {
    /**
     * 
     * @type PricelistGetPricesRequest
     * @memberof PriceListApipriceListGetPricesItems
     */
    body: PricelistGetPricesRequest
}

export interface PriceListApiPriceListListFullPriceItemsByPricelistIdRequest {
    /**
     * 
     * @type PricelistListFullPriceItemsRequest
     * @memberof PriceListApipriceListListFullPriceItemsByPricelistId
     */
    body: PricelistListFullPriceItemsRequest
}

export interface PriceListApiPriceListListPriceListsRequest {
    /**
     * 
     * @type PricelistListPriceListsRequest
     * @memberof PriceListApipriceListListPriceLists
     */
    body: PricelistListPriceListsRequest
}

export interface PriceListApiPriceListSetPriceListItemsRequest {
    /**
     * 
     * @type PricelistSetPriceListItemsRequest
     * @memberof PriceListApipriceListSetPriceListItems
     */
    body: PricelistSetPriceListItemsRequest
}

export interface PriceListApiPriceListUpdatePriceListRequest {
    /**
     * 
     * @type PricelistUpdatePriceListRequest
     * @memberof PriceListApipriceListUpdatePriceList
     */
    body: PricelistUpdatePriceListRequest
}

export class ObjectPriceListApi {
    private api: ObservablePriceListApi

    public constructor(configuration: Configuration, requestFactory?: PriceListApiRequestFactory, responseProcessor?: PriceListApiResponseProcessor) {
        this.api = new ObservablePriceListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public priceListCreatePriceListWithHttpInfo(param: PriceListApiPriceListCreatePriceListRequest, options?: Configuration): Promise<HttpInfo<PricelistCreatePriceListResponse>> {
        return this.api.priceListCreatePriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListCreatePriceList(param: PriceListApiPriceListCreatePriceListRequest, options?: Configuration): Promise<PricelistCreatePriceListResponse> {
        return this.api.priceListCreatePriceList(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListDeletePriceListItemsWithHttpInfo(param: PriceListApiPriceListDeletePriceListItemsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.priceListDeletePriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListDeletePriceListItems(param: PriceListApiPriceListDeletePriceListItemsRequest, options?: Configuration): Promise<any> {
        return this.api.priceListDeletePriceListItems(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetFullPriceItemsByPricelistIdWithHttpInfo(param: PriceListApiPriceListGetFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        return this.api.priceListGetFullPriceItemsByPricelistIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetFullPriceItemsByPricelistId(param: PriceListApiPriceListGetFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<PricelistGetFullPriceItemsResponse> {
        return this.api.priceListGetFullPriceItemsByPricelistId(param.body,  options).toPromise();
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
     * @param param the request object
     */
    public priceListGetPriceListWithHttpInfo(param: PriceListApiPriceListGetPriceListRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListResponse>> {
        return this.api.priceListGetPriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceList(param: PriceListApiPriceListGetPriceListRequest, options?: Configuration): Promise<PricelistGetPriceListResponse> {
        return this.api.priceListGetPriceList(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceListByCodeWithHttpInfo(param: PriceListApiPriceListGetPriceListByCodeRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        return this.api.priceListGetPriceListByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceListByCode(param: PriceListApiPriceListGetPriceListByCodeRequest, options?: Configuration): Promise<PricelistGetPriceListByCodeResponse> {
        return this.api.priceListGetPriceListByCode(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceListItemsWithHttpInfo(param: PriceListApiPriceListGetPriceListItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPriceListItemsResponse>> {
        return this.api.priceListGetPriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPriceListItems(param: PriceListApiPriceListGetPriceListItemsRequest, options?: Configuration): Promise<PricelistGetPriceListItemsResponse> {
        return this.api.priceListGetPriceListItems(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPricesItemsWithHttpInfo(param: PriceListApiPriceListGetPricesItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistGetPricesResponse>> {
        return this.api.priceListGetPricesItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListGetPricesItems(param: PriceListApiPriceListGetPricesItemsRequest, options?: Configuration): Promise<PricelistGetPricesResponse> {
        return this.api.priceListGetPricesItems(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListListFullPriceItemsByPricelistIdWithHttpInfo(param: PriceListApiPriceListListFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<HttpInfo<PricelistListFullPriceItemsResponse>> {
        return this.api.priceListListFullPriceItemsByPricelistIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListListFullPriceItemsByPricelistId(param: PriceListApiPriceListListFullPriceItemsByPricelistIdRequest, options?: Configuration): Promise<PricelistListFullPriceItemsResponse> {
        return this.api.priceListListFullPriceItemsByPricelistId(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListListPriceListsWithHttpInfo(param: PriceListApiPriceListListPriceListsRequest, options?: Configuration): Promise<HttpInfo<PricelistListPriceListsResponse>> {
        return this.api.priceListListPriceListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListListPriceLists(param: PriceListApiPriceListListPriceListsRequest, options?: Configuration): Promise<PricelistListPriceListsResponse> {
        return this.api.priceListListPriceLists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListSetPriceListItemsWithHttpInfo(param: PriceListApiPriceListSetPriceListItemsRequest, options?: Configuration): Promise<HttpInfo<PricelistSetPriceListItemsResponse>> {
        return this.api.priceListSetPriceListItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListSetPriceListItems(param: PriceListApiPriceListSetPriceListItemsRequest, options?: Configuration): Promise<PricelistSetPriceListItemsResponse> {
        return this.api.priceListSetPriceListItems(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListUpdatePriceListWithHttpInfo(param: PriceListApiPriceListUpdatePriceListRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.priceListUpdatePriceListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public priceListUpdatePriceList(param: PriceListApiPriceListUpdatePriceListRequest, options?: Configuration): Promise<any> {
        return this.api.priceListUpdatePriceList(param.body,  options).toPromise();
    }

}
