import SelectedPlaylist from './SelectedPlaylist'
import ListArea from './ListArea'
import { playlistList } from './playlistList'
import { songList } from './songList'
import { useState } from 'react'

export default function Playlist(){
    const [Songs, setSongList] = useState(songList)
    function addSong() {
    const newSong = {
        id: Songs.length ? Songs[Songs.length - 1].id+ 1 : 0,
        title: 'testing',
        album: 'testing',
        artist: 'testing',
        length: 'testing'
    }
    setSongList([...Songs, newSong])
}   
    function deleteSong( idToDelete: number) {
            setSongList(Songs.filter(song => song.id !== idToDelete))
    }
    return (
        <div className='d-flex flex-column p-5 container-fluid col-xl-8' style={{height: '100vh', overflowY: 'auto'}}>
            <div><SelectedPlaylist playlist={playlistList[1]}/></div>
            <div><ListArea songs={Songs} addSong={addSong} deleteSong={deleteSong}/></div>
        </div>
    )
}
