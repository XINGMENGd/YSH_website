import { Options } from "ahooks/lib/useRequest/src/types";

export default interface RequestProps<T> {
    data?: any,
    config?: Options<{
        data: T;
    }, any>;
}