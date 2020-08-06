import ShopActionType from "./shop.types";

export const updateCollections = (collectionsMap) => {
  return { type: ShopActionType.UPDATE_COLLECTION, payload: collectionsMap };
};
