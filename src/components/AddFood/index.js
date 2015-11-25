import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'
import * as SearchFoodAction from '../../actions/SearchFoodAction';
import * as FoodDiaryActions from '../../actions/FoodDiaryActions'

import AddFoodHeader from './AddFoodHeader';
import SearchFood from './SearchFood';
import DateTimeInput from './DateTimeInput/';

import "./AddFood.sass";

@connect( state => state.addFood,
          bindActions({ NavigationActions, SearchFoodAction, FoodDiaryActions}))
export default class AddFood extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    SearchFoodAction: PropTypes.objectOf(PropTypes.func).isRequired,
    FoodDiaryActions: PropTypes.objectOf(PropTypes.func).isRequired,
    NavigationActions: PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const targetDate = new Date(this.props.params.targetDate);
    const { searchTerm, searchResults, selectedPeriod } = this.props;

    const { onSearchTermChanges, onSearch } = this.props.SearchFoodAction;
    const { gotoDashboard, gotoAddFood } = this.props.NavigationActions;
    const { addFood, changeSelectedPeriod } = this.props.FoodDiaryActions;

    return (
      <div className='add-food-container'>
        <AddFoodHeader onCancel={gotoDashboard.bind(this, targetDate, "slideDown")}/>
        <DateTimeInput date={targetDate}
                       onDateChange={gotoAddFood}
                       period={ selectedPeriod }
                       onPeriodChange={changeSelectedPeriod}/>
        <SearchFood searchTerm={searchTerm}
                    searchResults={searchResults}
                    onSearch={onSearch}
                    onSearchTermChanges={onSearchTermChanges}
                    onSelect={addFood.bind(this, targetDate, selectedPeriod)}/>

      </div>
    );
  }
}
