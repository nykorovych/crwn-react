import ShopActionType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return { type: ShopActionType.FETCH_COLLECTIONS_START };
};
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailute = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsstartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailute(error.message)));
  };
};
