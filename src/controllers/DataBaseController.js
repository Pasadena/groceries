import PouchDB from 'pouchdb/dist/pouchdb';
import { groceryListsRequested, groceryListsLoaded, activeListLoaded, groceeryListCompleted, groceryListCompleteRequested } from "./../actions/GroceryActions";

let localDb = new PouchDB('groceries');

let currentDocId = 0;

export const loadCompletedLists = () => {
  return dispatch => {
    dispatch(groceryListsRequested());
    return localDb.allDocs({include_docs: true})
      .then(response => {
        dispatch(groceryListsLoaded(response));
      });
  }
}

export const loadActiveList = () => {
  return dispatch => {
    return localDb.allDocs({include_docs: true})
      .then(res => {
        if(res.rows.filter(item => item.completed = false).length != 0 ) {
          dispatch(activeListLoaded(res.rows[0].doc));
        } else {
          let highestId = Math.max.apply(null, res.rows.map(list => parseInt(list.id)));
          saveGroceryList( { _id: String(++highestId), createdDate: new Date(), completedDate: null, completed: false, items: []} )
            .then(res => {
              localDb.get(res.id).then(res => dispatch(activeListLoaded(res)));
            })
            .catch(error => console.log(error));
        }
      })
  }
}

const saveGroceryList = (groceryList) => {
  return localDb.put(groceryList);
}

export const completeGroceryList = (groceryList) => {
  return dispatch => {
    dispatch(groceryListCompleteRequested());
    localDb.get(groceryList._id)
      .then(existingList => {
        existingList.items = groceryList.items;
        existingList.completedDate = new Date();
        existingList.completed = true;
        localDb.put(existingList)
          .then(result => localDb.get(result.id).then(res => {
            dispatch(groceeryListCompleted(res));
            loadActiveList();
          }
        ));
      })
      .catch(error => console.log(error))
    }
}
