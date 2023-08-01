// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getEvents } from '../../JS/Actions/ActEvent';
// import EventCard from '../EventCard/EventCard';

// const EventList = () => {
//      const dispatch = useDispatch();
//      const listEvents = useSelector(state => state.eventReducer.listEvents);
//      const load = useSelector(state => state.eventReducer.load);
//      useEffect(()=> {
//         dispatch(getEvents())
//      }, [dispatch])

//   return (
//     <div style={{ display: "flex", justifyContent: "space-around", margin: "2%",flexWrap: "wrap",
//     padding: "2%"}}>

//         {load ?
//         <h2>Loading ...</h2>
//               : 
//         listEvents.map((el)=> <EventCard event={el} key={el._id}/> )}
//     </div>
//   )
// };

// export default EventList;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../JS/Actions/ActEvent';
import EventCard from '../EventCard/EventCard';


const EventstList = () => {

    const listEvents = useSelector((state)=> state.eventReducer.event);

    const load = useSelector(state => state.eventReducer.load);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getEvents());
    }, [dispatch]);


  return (
    <div>{ load ? (<h2> loading ... </h2>) : (listEvents.map((el) => < EventCard event={el} key={el.id}/>))}</div>
  )
}

export default EventstList;


