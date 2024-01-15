// import logo from './logo.svg';
import './App.css'
import Navbar from './component/navbar'
import DetailSong from './component/detailSong'
import ListSong from './component/listSong'
import { songs } from './context'
import DataSongs from './data/songs.json'
import Playing from './playing'
import { useState } from 'react'

function App() {
    const [song, setSong] = useState(DataSongs[0])
    const handelSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong)
        if (!song) setSong(DataSongs(0))
        else setSong(song)
    }
    return (
        <div className="App">
            <songs.Provider value={{ DataSongs, song, handelSetSong }}>
                <Navbar />
                <div className="grid grid-cols-3 bg-slate-700 h-screen-content-player overflow-hidden">
                    {/* span1 */}
                    <DetailSong />
                    {/* span2 */}
                    <ListSong />
                </div>
                <Playing />
            </songs.Provider>
        </div>
    )
}

export default App
