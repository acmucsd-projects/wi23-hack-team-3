import React, { Component } from 'react';
import Scheduler from './components/Scheduler';
import './App.css';


const data = [
    { start_date:'2023-03-07 15:00', end_date:'2023-03-07 18:00', text:'ACM Meeting', id: 1},
    { start_date:'2023-03-10 0:00', end_date:'2023-03-10 12:00', text:'Closer to Closer release', id: 2 },
    { start_date:'2023-03-12 7:00', end_date:'2023-03-12 10:00', text:'Church', id: 3 },
    { start_date:'2023-03-12 10:00', end_date:'2023-03-12 12:00', text:'Brunch so yummy', id: 4 },
    { start_date:'2023-03-9 18:00', end_date:'2023-03-9 20:00', text:'CSE 21 BIG QUIZZ', id: 5 }
];

class App extends Component {
    state = {
        currentTimeFormatState: true,
        messages: []
    };

    handleTimeFormatStateChange = (state) => {
        this.setState({
            currentTimeFormatState: state
        });
    }


    render() {
        //Create select element
var select = document.createElement("select");
select.name = "menu";

//Create options and add to select element
var options = ["ACM Hack Team", "Volleyball", "Tritones"];
for (var i = 0; i < options.length; i++) {
  var option = document.createElement("option");
  option.value = options[i];
  option.text = options[i];
  select.appendChild(option);
}

//Append select element to body
var body = document.getElementsByTagName("body")[0];
body.appendChild(select);

//Add event listener to select element
select.addEventListener("change", function() {
  var selectedOption = select.options[select.selectedIndex];
  alert(selectedOption.value + " was selected");
});

//keeping it in top left corner
select.style.position = "fixed";
select.style.top = "10px";
select.style.left = "10px";
select.style.padding = "5px";
select.style.fontSize = "16px";

//Add CSS styles for dropdown menu
select.style.backgroundColor = "white";
select.style.border = "1px solid gray";
select.style.borderRadius = "4px";
select.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
select.style.width = "150px";

        const { currentTimeFormatState } = this.state;
        return (
            <div className='scheduler-container'>
                <Scheduler
                    events={data}
                    // timeFormatState={currentTimeFormatState}
                    onDataUpdated={this.logDataUpdate}
                />
            </div>
        );
    }
}
export default App;
