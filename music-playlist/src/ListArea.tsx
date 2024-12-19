import Song from './Song'
import { SongType } from './types'

type ListAreaProps = {
    songs: Array<SongType>
    addSong: () => void
    deleteSong: (id:number) => void
}
export default function ListArea({songs, addSong, deleteSong}: ListAreaProps) {
    return (
        <div className='pt-5'>
            <button type='button' className='btn' style={{width: '100%'}} onClick={addSong}>+</button>
            { songs.map( song => <Song key={song.id} song={song} deleteSong= {deleteSong}/>)}
        </div>
    )
}