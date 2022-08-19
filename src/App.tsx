import './App.css';
import BrandAboutContainer from './containers/brand-about/brand-about-container';
import LocalContainer from './containers/local/local-container';

function App() {
  return (
    <div className="App">
      <BrandAboutContainer></BrandAboutContainer>
      <LocalContainer></LocalContainer>
    </div>
  );
}

export default App;
