import apiInterceptor from "./ApiInterceptor";
import storeApiInterceptor from "./StoreApiInterceptor";

export default {
    requestHandlers: [
        apiInterceptor.requestHandler,
        storeApiInterceptor.requestHandler
    ],
    responseHandlers: [
        storeApiInterceptor.responseHandler
    ],
    errorHandlers: [
        storeApiInterceptor.errorHandler
    ]
}