import './App.css';
import BrandAboutContainer from './containers/brand-about/brand-about-container';
import CategoryContainer from './containers/categorys/categorys';
import LocalContainer from './containers/local/local-container';

function App() {
  return (
    <div className="App">
      <BrandAboutContainer></BrandAboutContainer>
      <LocalContainer></LocalContainer>
      <CategoryContainer></CategoryContainer>
    </div>
  );
}

export default App;
