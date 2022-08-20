import Directory from './components/directory/Directory.component'

const App = () => {
  const categories = require('./data/categories.json');

  return (
    <Directory categories={categories} />
  );
};

export default App;
