import createHttpMethod from "src/utils/createHttpMethod";
import { useMemo } from "react";


export default function useAxiosMethods(axios) {
    return useMemo(() => createHttpMethod(axios), [])
}