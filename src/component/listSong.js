import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { songs } from '../context'

function ListSong() {
    const { DataSongs, handelSetSong, song } = useContext(songs)
    const [idSong, setidSong] = useState(0)
    const handelPlaySong = (idSong) => {
        setidSong(idSong)
        handelSetSong(idSong)
    }
    useEffect(() => {
        if (!song) setidSong(song.id)
    }, [song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">
                            <FontAwesomeIcon icon={faDownload} />
                        </th>
                    </tr>
                </thead>
                <tbody className=" ">
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`bg-slate-800 h-12 text-gray-500 cursor-pointer hover:bg-slate-600 hover:text-zinc-300 ${idSong === song.id && 'text-zinc-100 bg-slate-600'}`}
                            onClick={() => handelPlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href="{song.url}">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListSong
