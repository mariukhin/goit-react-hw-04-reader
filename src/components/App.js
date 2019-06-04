import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './ReaderComponent/Reader/Reader';

const App = () => (
  <div>
    <Route path="/" component={Reader} />
    {/* <Route path="/pets/:id" component={AsyncPetPage} />
      <Route path="/pets" component={AsyncPetsPage} />
      <Route path="/about" component={AsyncAboutPage} />
      <Redirect to="/" /> */}
  </div>
);
export default App;
