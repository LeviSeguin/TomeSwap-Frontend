import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HorizontalScrollList from './components/HorizontalScrollList.js';

const items = [
  <div className="item-content">Item 1</div>,
  <div className="item-content">Item 2</div>,
  <div className="item-content">Item 3</div>,
  <div className="item-content">Item 4</div>,
  <div className="item-content">Item 5</div>,
  <div className="item-content">Item 5</div>,
  <div className="item-content">Item 5</div>,
];

function App() {
  return (
    <div className="App">
      <Header />
      <HorizontalScrollList items={items} />
      
      <Footer />
    </div>
  );
}

export default App;
