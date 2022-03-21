import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Store/firbaseContext'
import Context  from './Store/firbaseContext';
import firebase from './firebase/Config'


ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>

<Context>

<App />
</Context>

</FirebaseContext.Provider>,
 document.getElementById('root'));
