import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ]);
    const [age,setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }]);
    };

    useEffect( () => {
        console.log('useEffects hook run', songs)
    }, [songs])

    return (
        <div className='song-list'>
        <ul>
            {songs.map((song) => {
            return <li key={song.id}>{song.title}</li>;
            })}
        </ul>
        <NewSongForm addSong={addSong}/>
        <button onClick={()=> setAge(age + 1)}>add 1 to age: {age}</button>

        </div>
    ); 
    };

export default Songlist;
