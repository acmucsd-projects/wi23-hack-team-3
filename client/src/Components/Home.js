import Scheduler from './Scheduler';

const data = [
    { start_date:'2023-03-07 15:00', end_date:'2023-03-07 18:00', text:'ACM Meeting', id: 1},
    { start_date:'2023-03-10 0:00', end_date:'2023-03-10 12:00', text:'Closer to Closer release', id: 2 },
    { start_date:'2023-03-12 7:00', end_date:'2023-03-12 10:00', text:'Church', id: 3 },
    { start_date:'2023-03-12 10:00', end_date:'2023-03-12 12:00', text:'Brunch so yummy', id: 4 },
    { start_date:'2023-03-9 18:00', end_date:'2023-03-9 20:00', text:'CSE 21 BIG QUIZZ', id: 5 }
];

export const Home = () => {
    return (
        <>
        <div className='scheduler-container'>
                <Scheduler
                    events={data}
                    // timeFormatState={currentTimeFormatState}
                    // onDataUpdated={this.logDataUpdate}
                />
        </div>
        </>
    );
}