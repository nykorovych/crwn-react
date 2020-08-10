import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsstartAsync } from "../../redux/shop/shop.actions";
// import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsstartAsync } = this.props;
    fetchCollectionsstartAsync();
    console.log(this.props);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
    );
  }
}
const mdtp = (dispatch) => ({
  fetchCollectionsstartAsync: () => dispatch(fetchCollectionsstartAsync()),
});
export default connect(null, mdtp)(ShopPage);
