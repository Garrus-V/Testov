import './App.css';
import Brushes from './web/Brushes/Brushes';
import Header from './web/Head/Header.jsx';
import Mtraining from './web/mTraining/mTraining';
import Training from './web/Training/Training';
import Sets from './web/Set/Sets';
import Feedback from './web/Feedback/Feedback';
import Reviews from './web/Reviews/Reviews';
import Footer from './web/Footer/Footer';
import Block from './web/Components/Block/Block';
import Line from './web/Components/Line/Line';


function App(props) {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Block />
        <Line />
        <Mtraining />
        <Line />
        <Training />
        <Line />
        <Brushes />
        <Line />
        <Sets />
        <Line />
        <Feedback />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
