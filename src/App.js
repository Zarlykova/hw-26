
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MuiSnackbar } from './components/UI/Snackbar';
import { AppRoutes } from './routes/Routes';
import { store } from './store';
import { uiActions } from './store/ui/uiSlice';

export function AppContent() {
  const dispatch = useDispatch()

const snackbar = useSelector(state => state.ui.snackbar)





  return (
    <>

       
      <MuiSnackbar
       isOpen={snackbar.isOpen}
       severity={snackbar.severity}
       message={snackbar.message}
       onClose={()=>dispatch(uiActions.closeSnackbar())}
       />
    <AppRoutes/>
    
    </>
    
     
    
  );
}

const App = () => {
 
return(
  <BrowserRouter>
   <Provider store={store} >
<AppContent/>
  </Provider>
  </BrowserRouter>
   
 
  
)
}
export default App;

