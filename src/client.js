import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import AudioPlayer from "./components/AudioPlayer"
const app = document.getElementById('app');
const audio = document.getElementById('audio');
ReactDOM.render(<Layout/>, app);
ReactDOM.render(<AudioPlayer/>, audio);
