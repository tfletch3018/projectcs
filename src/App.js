import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Film from "./pages/Film";
import Music from "./pages/Music";
import Host from "./pages/Host";
import Improvement from "./pages/Improvement";
import Artist from "./views/artist";
import Production from "./views/production";
import daBauls from "./views/daBauls";
import Videos from "./views/videos";
import Resume from "./views/resume";
import Reel from "./views/reel";
import Clips from "./views/clips";
import Bio from "./views/bio";
import hostClips from "./views/hostClips";
import Request from "./views/request";
import Challenge from "./views/challenge";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/film" component={Film} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/improvement" component={Improvement} />
        <Route exact path="/music/artist" component={Artist} />
        <Route exact path="/music/production" component={Production} />
        <Route exact path="/music/daBauls" component={daBauls} />
        <Route exact path="/music/videos" component={Videos} />
        <Route exact path="/film/resume" component={Resume} />
        <Route exact path="/film/reel" component={Reel} />
        <Route exact path="/film/clips" component={Clips} />
        <Route exact path="/host/bio" component={Bio} />
        <Route exact path="/host/clips" component={hostClips} />
        <Route exact path="/host/request" component={Request} />
        <Route exact path="/improvement/challenge" component={Challenge} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;