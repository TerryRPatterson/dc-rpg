import { addUserToStore} from "../actions";
import { addUserToStoreReducer } from "./reducer-fns";
import {progressEncounter, newEncounter} from "../actions/EncounterControl";
import progressEncounterReducer from "./progressEncounterReducer";
import verifyReducer from "./verification-reducer";
import newEncounterReducer from "./newEncounterReducer.js";
import verify from "../actions/verification-action.js";
import attackReducer from "./attackReducer.js";
import attack from "../actions/BattleControl.js";
import newBattle from "../actions/newBattle.js";
import newBattleReducer from "./newBattleReducer.js";

let testLine = {type:"DIALOGUE", speaker:"Test", body:"Hello"};
let testLine2 = {type:"DIALOGUE", speaker:"Test2", body:"sup"};
let testEncounter = [];
testEncounter.push(testLine);
testEncounter.push(testLine2);
const initialState = {
  currentEncounter:testEncounter,
  currentEncounterID: 0,
  currentEncounterProgress:0,
  inventory: [],
  player:{
    name:null,
    id:null
  },
  character:{
    health:0,
    id:null,
    name:null
  }
};

let reducers = {
  [addUserToStore]: addUserToStoreReducer,
  [progressEncounter]: progressEncounterReducer,
  [verify]: verifyReducer,
  [newEncounter]: newEncounterReducer,
  [attack]: attackReducer,
  [newBattle]: newBattleReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;
