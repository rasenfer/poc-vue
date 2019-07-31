
import Api from '@/core/api/Api';
export {default as axiosinterceptors} from '@/core/api/axios-interceptors';

export const api = new Api();
export const local = new Api("test");
export const mock = new Api("local");