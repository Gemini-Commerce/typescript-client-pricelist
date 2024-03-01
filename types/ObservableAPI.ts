import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { PriceListApiRequestFactory, PriceListApiResponseProcessor} from "../apis/PriceListApi";
export class ObservablePriceListApi {
    private requestFactory: PriceListApiRequestFactory;
    private responseProcessor: PriceListApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PriceListApiRequestFactory,
        responseProcessor?: PriceListApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PriceListApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PriceListApiResponseProcessor();
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param body 
     */
    public createPriceListWithHttpInfo(body: PricelistCreatePriceListRequest, _options?: Configuration): Observable<HttpInfo<PricelistCreatePriceListResponse>> {
        const requestContextPromise = this.requestFactory.createPriceList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allows the creation of a new price list with specified details such as code, name, currency, and type.
     * Create new list
     * @param body 
     */
    public createPriceList(body: PricelistCreatePriceListRequest, _options?: Configuration): Observable<PricelistCreatePriceListResponse> {
        return this.createPriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistCreatePriceListResponse>) => apiResponse.data));
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param body 
     */
    public deletePriceListItemsWithHttpInfo(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deletePriceListItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes specified items from a price list based on their unique identifiers.
     * Get prices for items
     * @param body 
     */
    public deletePriceListItems(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Observable<any> {
        return this.deletePriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param body 
     */
    public getFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        const requestContextPromise = this.requestFactory.getFullPriceItemsByPricelistId(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFullPriceItemsByPricelistIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches detailed information about items, including historical price data, for a specific price list.
     * List detailed items
     * @param body 
     */
    public getFullPriceItemsByPricelistId(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Observable<PricelistGetFullPriceItemsResponse> {
        return this.getFullPriceItemsByPricelistIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetFullPriceItemsResponse>) => apiResponse.data));
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param body 
     */
    public getPriceListWithHttpInfo(body: PricelistGetPriceListRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListResponse>> {
        const requestContextPromise = this.requestFactory.getPriceList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about a particular price list identified by tenant ID and price list ID. The response includes details such as code, name, currency, and type.
     * Get specific list
     * @param body 
     */
    public getPriceList(body: PricelistGetPriceListRequest, _options?: Configuration): Observable<PricelistGetPriceListResponse> {
        return this.getPriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListResponse>) => apiResponse.data));
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param body 
     */
    public getPriceListByCodeWithHttpInfo(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        const requestContextPromise = this.requestFactory.getPriceListByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPriceListByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information about a specific price list using the unique code associated with it. The response includes details such as code, name, currency, and type.
     * Get list by code
     * @param body 
     */
    public getPriceListByCode(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Observable<PricelistGetPriceListByCodeResponse> {
        return this.getPriceListByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListByCodeResponse>) => apiResponse.data));
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param body 
     */
    public getPriceListItemsWithHttpInfo(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListItemsResponse>> {
        const requestContextPromise = this.requestFactory.getPriceListItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches a paginated list of items associated with a particular price list.
     * Get items in list
     * @param body 
     */
    public getPriceListItems(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Observable<PricelistGetPriceListItemsResponse> {
        return this.getPriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListItemsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param body 
     */
    public getPricesItemsWithHttpInfo(body: PricelistGetPricesRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPricesResponse>> {
        const requestContextPromise = this.requestFactory.getPricesItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPricesItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the current prices of specified items considering the provided context, such as currency and market.
     * Get detailed items
     * @param body 
     */
    public getPricesItems(body: PricelistGetPricesRequest, _options?: Configuration): Observable<PricelistGetPricesResponse> {
        return this.getPricesItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPricesResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param body 
     */
    public listFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistListFullPriceItemsResponse>> {
        const requestContextPromise = this.requestFactory.listFullPriceItemsByPricelistId(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFullPriceItemsByPricelistIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a paginated list of detailed price items, including historical data, for a specific price list.
     * List detailed price items for a specific price list
     * @param body 
     */
    public listFullPriceItemsByPricelistId(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Observable<PricelistListFullPriceItemsResponse> {
        return this.listFullPriceItemsByPricelistIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistListFullPriceItemsResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param body 
     */
    public listPriceListsWithHttpInfo(body: PricelistListPriceListsRequest, _options?: Configuration): Observable<HttpInfo<PricelistListPriceListsResponse>> {
        const requestContextPromise = this.requestFactory.listPriceLists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPriceListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a list of price lists based on optional filters such as name, code, and other attributes. The response includes details such as code, name, currency, and type.
     * List all price lists
     * @param body 
     */
    public listPriceLists(body: PricelistListPriceListsRequest, _options?: Configuration): Observable<PricelistListPriceListsResponse> {
        return this.listPriceListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistListPriceListsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(body: PricelistGetPriceItemsByPriceListItemIdsRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceItemsByPriceListItemIdsResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetPriceItemsByPriceListItemIds(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetPriceItemsByPriceListItemIds(body: PricelistGetPriceItemsByPriceListItemIdsRequest, _options?: Configuration): Observable<PricelistGetPriceItemsByPriceListItemIdsResponse> {
        return this.priceListGetPriceItemsByPriceListItemIdsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceItemsByPriceListItemIdsResponse>) => apiResponse.data));
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param body 
     */
    public setPriceListItemsWithHttpInfo(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistSetPriceListItemsResponse>> {
        const requestContextPromise = this.requestFactory.setPriceListItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setPriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates or creates items for a given price list, allowing bulk modifications.
     * Set items in list
     * @param body 
     */
    public setPriceListItems(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Observable<PricelistSetPriceListItemsResponse> {
        return this.setPriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistSetPriceListItemsResponse>) => apiResponse.data));
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param body 
     */
    public updatePriceListWithHttpInfo(body: PricelistUpdatePriceListRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updatePriceList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modifies the attributes of an existing price list based on the provided payload and field mask. The field mask is used to specify which attributes of the price list are to be updated. The field mask is a comma-separated list of fully qualified names of fields. Example: `code,name,currency,type`
     * Update list
     * @param body 
     */
    public updatePriceList(body: PricelistUpdatePriceListRequest, _options?: Configuration): Observable<any> {
        return this.updatePriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
