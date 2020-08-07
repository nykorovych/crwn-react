import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { fetchCollectionsstartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsstartAsync} = this.props
    fetchCollectionsstartAsync()
    console.log( this.props)
  }
  render() {

    const { match, isCollectionsFetching, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}
const mstp = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});
const mdtp = (dispatch) => ({
  fetchCollectionsstartAsync: () => dispatch(fetchCollectionsstartAsync()),
});
export default connect(mstp, mdtp)(ShopPage);
