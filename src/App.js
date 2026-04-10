// React Component API — App is the root component tree
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// React Components — importing named components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

// React Component Life Cycle — class component demonstrates lifecycle methods
class App extends Component {
  // React Constructor — initializes state
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  // Lifecycle: componentDidMount — runs after component mounts
  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 100);
  }

  // Lifecycle: componentWillUnmount — cleanup on unmount
  componentWillUnmount() {
    // cleanup if needed
  }

  render() {
    const { loaded } = this.state;
    return (
      <Router>
        <div className={`app ${loaded ? 'is-loaded' : ''}`}>
          {/* Custom cursor component — React Props: no props needed, self-contained */}
          <Cursor />
          {/* Nav receives no props — uses router internally */}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
