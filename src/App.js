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
import Line1 from './web/Components/Line/Line1';
import Line2 from './web/Components/Line/Line2';
import Line3 from './web/Components/Line/Line3';
import Line4 from './web/Components/Line/Line4';


function App(props) {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <Block />
        <Line />
        <Mtraining />
        <Line1 />
        <Training />
        <Line2 />
        <Brushes />
        <Line3 />
        <Sets />
        <Line4 />
        <Feedback />
        <Line4 />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
