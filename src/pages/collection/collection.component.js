import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.component.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};
const mstp = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mstp)(CollectionPage);
