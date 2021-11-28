import * as ReactDOM from 'react-dom';
import Root from '@/router/Root';

interface Props {}

const App = ({  }: Props) => {
  if(process.env.NODE_ENV === 'development') { // dev tool
    import('./ReactotronConfig')
    .then(() => console.log('Jerger-note Activate!'))
  }

  return <Root/>;
};

ReactDOM.render(<App />, document.getElementById('app'));