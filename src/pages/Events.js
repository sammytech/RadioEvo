import React from "react";
import moment from "moment";
import MusicCell from "../components/MusicCell"

import '../sass/events.scss';

export default class Events extends React.Component {

 constructor(props){
   super(props)

   this.state = {
     events: [],
   }
 }
 componentDidMount(){
    this.fetchData(false);
 }

 fetchData(more){
   this.setState({events: []});
   $.ajax({
     url: "../data/events.json",
     dataType: 'json',
     cache: false,
     success: function(data) {
       var filterData = [];

       filterData.sort(function(a, b){
          if(a.first_name.toLowerCase() < b.first_name.toLowerCase()) return -1;
           if(a.first_name.toLowerCase() > b.first_name.toLowerCase()) return 1;
           return 0;
       })
       this.setState({events: data});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
 }
 camelCase(s){
   return s.replace(/\w+/g,
        function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
 }
  render() {

    // this.fetchData();
    return (
      <div className="container" id="events">
        <h1 className="title-header">
          Events
        </h1>

        <div>
          {
            this.state.events.map((event, i)=>
              <div key={i} class="row">
                <div class="event">
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object" src={event.image} alt="..."/>
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">{moment(event.from).format('lll')} to {moment(event.to).format('lll')}</h4>
                      <div class="event-title">{this.camelCase(event.title)} </div>
                      <div class="event-location">{event.location}</div>
                      <div>
                        <div className="btn btn-default" role="button">RSVP</div>
                        <div className="btn btn-primary" role="button">BUY TICKETS</div>
                      </div>
                      {
                        event.price != null ? <div className="price"> {event.price} </div> : null
                        
                      }

                    </div>

                  </div>
                  <div class="separator"></div>
                </div>
              </div>

            )
          }
        </div>
      </div>
    );
  }
}
