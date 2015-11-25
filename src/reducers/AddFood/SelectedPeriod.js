import { CHANGE_SELECTED_PERIOD } from '../../actions/FoodDiaryActions';
import { RESET_ADD_FOOD_FORM } from '../../actions/SearchFoodActions';

export default function selectedPeriodReducer(state = "", action){
  switch (action.type) {
    case RESET_ADD_FOOD_FORM:
      return "";
    case CHANGE_SELECTED_PERIOD:
      return action.selectedPeriod;
    default:
      return state;
  }
}
