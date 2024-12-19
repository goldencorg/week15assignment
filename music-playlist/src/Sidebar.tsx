import { useState } from 'react'
import AlternativeChoices from './AlternativeChoices'
import PlaylistChoices from './PlaylistChoices'
import { playlistList } from './playlistList'

export default function Sidebar() {
    const [Playlists, setPlaylistList] = useState(playlistList);

    function addPlaylist() {
        const newPlaylist = {
            id: Playlists.length ? Playlists[Playlists.length -1].id + 1 : 0,
            title: 'testing'
        }
        setPlaylistList([...Playlists, newPlaylist])
    }
    function deletePlaylist( idToDelete: number) {
        setPlaylistList(Playlists.filter(playlist => playlist.id !== idToDelete))
}
    return (
        <div className='border-end p-4 d-flex flex-column col-xl-2' style={{height: '100vh', overflowY: 'auto'}}>
            <div><AlternativeChoices /></div>
                <h6 className="text-muted">Playlists</h6>
                <button className='btn btn-sm' type='button' onClick={addPlaylist}>+</button>
            <div>{ Playlists.map( playlist => <PlaylistChoices key={playlist.id} playlist={playlist} deletePlaylist={deletePlaylist}/>)}</div>
        </div> 
      )
}