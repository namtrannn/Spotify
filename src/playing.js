import React, { useContext } from 'react'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { songs } from './context'

function Playing() {
    const { song, handelSetSong } = useContext(songs)
    const handleClickNext = () => {
        handelSetSong(song.id + 1)

    }

    const handelClickPre = () => {
        handelSetSong(song.id - 1)
    }

    return (
        <div>
            <H5AudioPlayer
                className="play-music"
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext = {handleClickNext}
                onClickPrevious = {handelClickPre}
            />
        </div>
    )
}

export default Playing
