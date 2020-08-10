import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mstp = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});
const CollectionPageContainer = compose(
  connect(mstp),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
