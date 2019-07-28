import apiInterceptor from "./ApiInterceptor";
import storeApiInterceptor from "./StoreApiInterceptor";

export default {
    requestHandlers: [
        apiInterceptor.requestHandler
    ],
    responseHandlers: [
        storeApiInterceptor.responseHandler
    ],
    errorHandlers: [

    ]
}