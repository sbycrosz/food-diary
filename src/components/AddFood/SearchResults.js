import React, { Component, PropTypes } from 'react';
import { isEmpty } from '../../utilities/extendedLodash';

import NoResult from '../common/NoResult';
import StaggerAnimation from '../common/StaggerAnimation';

export default class SearchResults extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  _renderSearchResult = (searchResult) => {
    const {onSelect} = this.props;
    return (
      <div className='search-result'
          key={searchResult._id}
          onClick={onSelect.bind(this, searchResult)}>
        {searchResult.name}
      </div>);
  }

  _renderSearchResults(searchResults){
    return(
      <div className='search-results'>
        <StaggerAnimation>
          { searchResults.map(this._renderSearchResult)}
        </StaggerAnimation>
      </div>
      );
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div className='search-results-container'>
        { isEmpty(searchResults)? <NoResult message="No result found"/>:
                                  this._renderSearchResults(searchResults)}
      </div>
    );
  }
}
