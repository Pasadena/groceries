import PouchDB from 'pouchdb/dist/pouchdb';
import { groceryListsRequested, groceryListsLoaded } from "./../actions/GroceryActions";

let localDb = new PouchDB('groceries');

export const loadGroceryLists = () => {
  return dispatch => {
    dispatch(groceryListsRequested())
    return localDb.allDocs({include_docs: true})
      .then(response => {
        console.log(response);
        dispatch(groceryListsLoaded());
      });
  }
}
