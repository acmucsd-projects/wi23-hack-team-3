import Scheduler from './Scheduler';

const data = [
    { start_date:'2023-03-07 10:00', end_date:'2023-03-07 11:00', text:'Club Meeting', id: 1},
    { start_date:'2023-03-11 10:00', end_date:'2023-03-11 11:00', text:'Library Study', id: 2 },
    { start_date:'2023-03-12 7:00', end_date:'2023-03-12 10:00', text:'Gym', id: 3 },
    { start_date:'2023-03-12 8:00', end_date:'2023-03-12 9:00', text:'Breakfast', id: 4 },
    { start_date:'2023-03-06 10:00', end_date:'2023-03-06 13:00', text:'Writing', id: 5},
    { start_date:'2023-03-08 13:00', end_date:'2023-03-08 15:00', text:'Math', id: 6 },
    { start_date:'2023-03-10 7:00', end_date:'2023-03-10 10:00', text:'Study', id: 7 }
];

export const Calendar = () => {
    return (
        <>
        <div className='scheduler-container'>
                <Scheduler
                    events={data}
                />
        </div>
        </>
    );
}