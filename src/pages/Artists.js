import React from "react";
import MusicCell from "../components/MusicCell"
import '../sass/artists.scss';
import { Link } from "react-router";
const alphabet = ["all", "#",].concat("abcdefghijklmnopqrstuvwxyz".split(""));

export default class Artists extends React.Component {

 constructor(props){
   super(props)

   this.state = {
     artists: [],
   }
 }
 componentDidMount(){
   var letter = this.props.location.query.letter
   var index = alphabet.indexOf(letter ? letter.toLowerCase() : "all")
   if(index => 0){
     this.fetchData(alphabet[index])
   } else{
     this.fetchData(undefined)
   }
 }
 componentWillReceiveProps(nextProps){
   this.fetchData(nextProps.location.query.letter);
 }
 fetchData(letter){
   this.setState({artists: []});
   $.ajax({
     url: "../data/artists.json",
     dataType: 'json',
     cache: false,
     success: function(data) {
       var filterData = [];
       if(letter != undefined && letter != "all"){
         var that = this;
         data.forEach(function(artist){
           if(artist.first_name.toLowerCase()[0] === letter.toLowerCase()){
             filterData.push(artist);
           }

         })
       } else{
         filterData = data;
       }
       filterData.sort(function(a, b){
          if(a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
           if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
           return 0;
       })
       this.setState({artists: filterData});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
 }
  render() {

    // this.fetchData();
    return (
      <div className="container" id="artists">
        <h1 className="title-header">
          Artists
        </h1>
        <div className="filters">
          {alphabet.map((letter, i)=>
            <span key={i}>
            <Link to={{pathname:"/artists", query: {letter: letter.toLowerCase()}}}> {letter.toUpperCase()} </Link>
            </span>
        )}
        </div>
        <div>
          {
            this.state.artists.map((artist, i)=>
              <div key={i} class="col-sm-6 col-md-4 artist">
                <Link to="/artist">
                  <div className="artist-thumbnail">
                    <img src={artist.avatar}/>
                    <div class="after">
                      <h3>{artist.first_name.toUpperCase()}</h3>
                    </div>
                  </div>
                </Link>

              </div>
            )
          }
        </div>
      </div>
    );
  }
}
