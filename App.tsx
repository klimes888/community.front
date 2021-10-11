import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from '@/router/Root';

interface Props {}

const App = ({  }: Props) => {
  return <Root/>;
};

ReactDOM.render(<App />, document.getElementById('app'));