import usePagination from "./usePagination";
import useReachBottom from "./useReachBottom";


export default function useListPages(request: any, params = {}) {
    const { loading, list, initList, getList, ifDone } = usePagination(request, params);
    console.log(list, 'list');

    useReachBottom(getList);

    return { loading, list, ifDone };
}