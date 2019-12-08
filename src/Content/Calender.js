import React from 'react'
import  '../assets/plugins/fullcalendar/main.min.css'
  //import  '../assets/plugins/fullcalendar-interaction/main.min.css'
  import  '../assets/plugins/fullcalendar-daygrid/main.min.css'
  import  '../assets/plugins/fullcalendar-timegrid/main.min.css'
   import  '../assets/plugins/fullcalendar-bootstrap/main.min.css'
class Calender extends React.Component {
    render=()=> {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    <div className="sticky-top mb-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Draggable Events</h4>
                            </div>
                            <div className="card-body">
                                <div id="external-events">
                                    <div className="external-event bg-success">Lunch</div>
                                    <div className="external-event bg-warning">Go home</div>
                                    <div className="external-event bg-info">Do homework</div>
                                    <div className="external-event bg-primary">Work on UI design</div>
                                    <div className="external-event bg-danger">Sleep tight</div>
                                    <div className="checkbox">
                                    <label for="drop-remove">
                                        <input type="checkbox" id="drop-remove"/>
                                        remove after drop
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">Create Event</h3>
                        </div>
                        <div className="card-body">
                        <div className="btn-group" style={{width: '100%', marginBottom: '10px'}}>
                            {/*<!--<button type="button" id="color-chooser-btn" className="btn btn-info btn-block dropdown-toggle" data-toggle="dropdown">Color <span className="caret"></span></button>-->*/}
                            <ul className="fc-color-picker" id="color-chooser">
                            <li><a className="text-primary" href="#"><i className="fas fa-square"></i></a></li>
                            <li><a className="text-warning" href="#"><i className="fas fa-square"></i></a></li>
                            <li><a className="text-success" href="#"><i className="fas fa-square"></i></a></li>
                            <li><a className="text-danger" href="#"><i className="fas fa-square"></i></a></li>
                            <li><a className="text-muted" href="#"><i className="fas fa-square"></i></a></li>
                            </ul>
                        </div>
                        <div className="input-group">
                            <input id="new-event" type="text" className="form-control" placeholder="Event Title"/>

                            <div className="input-group-append">
                            <button id="add-new-event" type="button" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card card-primary">
                        <div className="card-body p-0">
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Calender 