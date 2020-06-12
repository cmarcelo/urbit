import GraphReducer from '../reducers/graph-update';

import BaseStore from './base';


export default class GraphStore extends BaseStore {
  constructor() {
    super();
    this.graphReducer = new GraphReducer();
  }

  initialState() {
    return {
      keys: new Set([]),
      graphs: {},
      sidebarShown: true,
    };
  }

  reduce(data, state) {
    console.log(data);
    this.graphReducer.reduce(data, this.state);
    console.log(state);
  }
}
