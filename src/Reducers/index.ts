import { combineReducers } from 'redux';
import blackjack from './Blackjack/index';
import { BlackjackStore } from './Blackjack/Blackjack.model';

interface ApplicationState {
    blackjack: BlackjackStore
}

const rootReducer = combineReducers({ 
    blackjack 
});

export default rootReducer;