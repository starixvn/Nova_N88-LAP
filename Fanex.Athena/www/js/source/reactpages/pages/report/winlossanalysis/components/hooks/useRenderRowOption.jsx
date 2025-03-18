import { useSelector } from "react-redux"
import { BreakdownByMode, GroupByMode } from '../../common/constants.js';

export const useRenderRowOption = () => {
    const [requestParam, selectedProduct] = useSelector(state => [state.requestParam, state.selectedProduct]);
    const isGroupByPlayerMode = requestParam.GroupMode == GroupByMode.Player;
    const isShowBetEffectiveField = isGroupByPlayerMode;
    const isBreakDownPlayerMode = requestParam.BreakdownMode == BreakdownByMode.Player;

    return {isGroupByPlayerMode, isBreakDownPlayerMode, isShowBetEffectiveField}
}

export default useRenderRowOption