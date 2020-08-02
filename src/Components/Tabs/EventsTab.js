import React, { Component }     from 'react';
import EventCard                from '../EventCard';
import { getDateString }        from '../../UtilsFunctions/utilFunctions';
import { Link }                 from "react-router-dom";

export default class EventsTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            eventData: ''
        }
    }

    async componentDidMount() {
        let fetchedData = await fetch('http://localhost:4545/getEvents').then((data) => {
            return data.json();
        });

        this.setState({
            eventData: fetchedData
        })
    }   

    editEvent(e){
        window.location.replace(`http://localhost:3000/EditEvent?id=${e.currentTarget.id}`);
    }

    render(){
        let dynamicEvents = [];

        for (let i = 0; i < this.state.eventData.length; i++){
            dynamicEvents.push(<div className='widget eventContainer' id={`Event${this.state.eventData[i].id}`} key={`Event${this.state.eventData[i].id}`} onClick={(e) => this.editEvent(e)}>
                <EventCard EventName={this.state.eventData[i].event_name} EventDate={getDateString(this.state.eventData[i].event_date.toString())} EventImage={this.state.eventData[i].event_img}/>
            </div>);
        }

        return (
            <div>
                <Link to='/AddEvent'><button className='EventButton'>Add Event</button></Link>
                <button className='EventButton'>Delete Event</button>

                <div className='widgetContainer'>
                    {dynamicEvents}
                </div>
            </div>
        );
    }
}