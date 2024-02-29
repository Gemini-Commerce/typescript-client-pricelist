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
     * @param body 
     */
    public priceListCreatePriceListWithHttpInfo(body: PricelistCreatePriceListRequest, _options?: Configuration): Promise<HttpInfo<PricelistCreatePriceListResponse>> {
        const result = this.api.priceListCreatePriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListCreatePriceList(body: PricelistCreatePriceListRequest, _options?: Configuration): Promise<PricelistCreatePriceListResponse> {
        const result = this.api.priceListCreatePriceList(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListDeletePriceListItemsWithHttpInfo(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.priceListDeletePriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListDeletePriceListItems(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.priceListDeletePriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        const result = this.api.priceListGetFullPriceItemsByPricelistIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetFullPriceItemsByPricelistId(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Promise<PricelistGetFullPriceItemsResponse> {
        const result = this.api.priceListGetFullPriceItemsByPricelistId(body, _options);
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
     * @param body 
     */
    public priceListGetPriceListWithHttpInfo(body: PricelistGetPriceListRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListResponse>> {
        const result = this.api.priceListGetPriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceList(body: PricelistGetPriceListRequest, _options?: Configuration): Promise<PricelistGetPriceListResponse> {
        const result = this.api.priceListGetPriceList(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceListByCodeWithHttpInfo(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        const result = this.api.priceListGetPriceListByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceListByCode(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Promise<PricelistGetPriceListByCodeResponse> {
        const result = this.api.priceListGetPriceListByCode(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceListItemsWithHttpInfo(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPriceListItemsResponse>> {
        const result = this.api.priceListGetPriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPriceListItems(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Promise<PricelistGetPriceListItemsResponse> {
        const result = this.api.priceListGetPriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPricesItemsWithHttpInfo(body: PricelistGetPricesRequest, _options?: Configuration): Promise<HttpInfo<PricelistGetPricesResponse>> {
        const result = this.api.priceListGetPricesItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListGetPricesItems(body: PricelistGetPricesRequest, _options?: Configuration): Promise<PricelistGetPricesResponse> {
        const result = this.api.priceListGetPricesItems(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListListFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistListFullPriceItemsResponse>> {
        const result = this.api.priceListListFullPriceItemsByPricelistIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListListFullPriceItemsByPricelistId(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Promise<PricelistListFullPriceItemsResponse> {
        const result = this.api.priceListListFullPriceItemsByPricelistId(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListListPriceListsWithHttpInfo(body: PricelistListPriceListsRequest, _options?: Configuration): Promise<HttpInfo<PricelistListPriceListsResponse>> {
        const result = this.api.priceListListPriceListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListListPriceLists(body: PricelistListPriceListsRequest, _options?: Configuration): Promise<PricelistListPriceListsResponse> {
        const result = this.api.priceListListPriceLists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListSetPriceListItemsWithHttpInfo(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Promise<HttpInfo<PricelistSetPriceListItemsResponse>> {
        const result = this.api.priceListSetPriceListItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListSetPriceListItems(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Promise<PricelistSetPriceListItemsResponse> {
        const result = this.api.priceListSetPriceListItems(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListUpdatePriceListWithHttpInfo(body: PricelistUpdatePriceListRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.priceListUpdatePriceListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public priceListUpdatePriceList(body: PricelistUpdatePriceListRequest, _options?: Configuration): Promise<any> {
        const result = this.api.priceListUpdatePriceList(body, _options);
        return result.toPromise();
    }


}



