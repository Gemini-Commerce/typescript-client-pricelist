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
     * @param body 
     */
    public priceListCreatePriceListWithHttpInfo(body: PricelistCreatePriceListRequest, _options?: Configuration): Observable<HttpInfo<PricelistCreatePriceListResponse>> {
        const requestContextPromise = this.requestFactory.priceListCreatePriceList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListCreatePriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListCreatePriceList(body: PricelistCreatePriceListRequest, _options?: Configuration): Observable<PricelistCreatePriceListResponse> {
        return this.priceListCreatePriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistCreatePriceListResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListDeletePriceListItemsWithHttpInfo(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.priceListDeletePriceListItems(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListDeletePriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListDeletePriceListItems(body: PricelistDeletePriceListItemsRequest, _options?: Configuration): Observable<any> {
        return this.priceListDeletePriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListGetFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetFullPriceItemsResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetFullPriceItemsByPricelistId(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetFullPriceItemsByPricelistIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetFullPriceItemsByPricelistId(body: PricelistGetFullPriceItemsRequest, _options?: Configuration): Observable<PricelistGetFullPriceItemsResponse> {
        return this.priceListGetFullPriceItemsByPricelistIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetFullPriceItemsResponse>) => apiResponse.data));
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
     * @param body 
     */
    public priceListGetPriceListWithHttpInfo(body: PricelistGetPriceListRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetPriceList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetPriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetPriceList(body: PricelistGetPriceListRequest, _options?: Configuration): Observable<PricelistGetPriceListResponse> {
        return this.priceListGetPriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListGetPriceListByCodeWithHttpInfo(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListByCodeResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetPriceListByCode(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetPriceListByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetPriceListByCode(body: PricelistGetPriceListByCodeRequest, _options?: Configuration): Observable<PricelistGetPriceListByCodeResponse> {
        return this.priceListGetPriceListByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListByCodeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListGetPriceListItemsWithHttpInfo(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPriceListItemsResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetPriceListItems(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetPriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetPriceListItems(body: PricelistGetPriceListItemsRequest, _options?: Configuration): Observable<PricelistGetPriceListItemsResponse> {
        return this.priceListGetPriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPriceListItemsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListGetPricesItemsWithHttpInfo(body: PricelistGetPricesRequest, _options?: Configuration): Observable<HttpInfo<PricelistGetPricesResponse>> {
        const requestContextPromise = this.requestFactory.priceListGetPricesItems(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListGetPricesItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListGetPricesItems(body: PricelistGetPricesRequest, _options?: Configuration): Observable<PricelistGetPricesResponse> {
        return this.priceListGetPricesItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistGetPricesResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListListFullPriceItemsByPricelistIdWithHttpInfo(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistListFullPriceItemsResponse>> {
        const requestContextPromise = this.requestFactory.priceListListFullPriceItemsByPricelistId(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListListFullPriceItemsByPricelistIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListListFullPriceItemsByPricelistId(body: PricelistListFullPriceItemsRequest, _options?: Configuration): Observable<PricelistListFullPriceItemsResponse> {
        return this.priceListListFullPriceItemsByPricelistIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistListFullPriceItemsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListListPriceListsWithHttpInfo(body: PricelistListPriceListsRequest, _options?: Configuration): Observable<HttpInfo<PricelistListPriceListsResponse>> {
        const requestContextPromise = this.requestFactory.priceListListPriceLists(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListListPriceListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListListPriceLists(body: PricelistListPriceListsRequest, _options?: Configuration): Observable<PricelistListPriceListsResponse> {
        return this.priceListListPriceListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistListPriceListsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListSetPriceListItemsWithHttpInfo(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Observable<HttpInfo<PricelistSetPriceListItemsResponse>> {
        const requestContextPromise = this.requestFactory.priceListSetPriceListItems(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListSetPriceListItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListSetPriceListItems(body: PricelistSetPriceListItemsRequest, _options?: Configuration): Observable<PricelistSetPriceListItemsResponse> {
        return this.priceListSetPriceListItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PricelistSetPriceListItemsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public priceListUpdatePriceListWithHttpInfo(body: PricelistUpdatePriceListRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.priceListUpdatePriceList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListUpdatePriceListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public priceListUpdatePriceList(body: PricelistUpdatePriceListRequest, _options?: Configuration): Observable<any> {
        return this.priceListUpdatePriceListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
