import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import {Tag} from './views/Tag';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: #ededed;
  max-width: 520px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          {/* exact 精准匹配 */}
          <Route exact path='/tags'>
            <Tags />
          </Route>
          <Route exact path='/tags/:id'>
            <Tag />
          </Route>
          <Route exact path='/money'>
            <Money />
          </Route>
          <Route exact path='/statistics'>
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/money' />
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
