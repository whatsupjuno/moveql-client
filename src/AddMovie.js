import React, { useState } from 'react'
import { ADD_MOVIE } from './queries'
import { Mutation } from 'react-apollo'


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddMovie = () => {

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [mcover, setMcover] = useState('')

    return (
        <Mutation mutation={ADD_MOVIE}>
        {( addMovie, { loading, error, data } ) => {
            return (
                <div>
                    <h2>Input Your Movie</h2>
                    <TextField
                        autoFocus
                        placeholder="id"
                        onChange={e => {setId(e.target.value)}}
                        value={id}
                    />
                    <TextField
                        placeholder="title"     
                        onChange={e => {setTitle(e.target.value)}}
                        value={title}
                    />
                    <TextField
                        placeholder="mcover"     
                        onChange={e => {setMcover(e.target.value)}}
                        value={mcover}
                    />
                    <Button onClick={() => {
                        addMovie({variables: { Number(id), title, mcover }})
                        console.log("id is " + id)
                        console.log("title is " + title)
                        console.log("mcover is " + mcover)}}
                        >전송
                    </Button>    
                </div>
            )
        }}
    </Mutation>
    )
}



export default AddMovie;


// class AddMovie extends Component {
//     render() {
//         return (
//             <Mutation mutation={ADD_MOVIE}>
//             {( addMovie, { loading, error, data } ) => {
//                 return (
//                     <div>
//                         <form onSubmit={async e => {
//                             e.preventDefault()
//                             const { id, title } = this.state
//                             await addMovie({
//                                 variables: { id, title 
//                                 }
//                             })
//                             }}
//                         >
//                             <h2>Input Your Movie</h2>
//                             <input
//                                 autoFocus
//                                 onChange={e => this.ListeningStateChangedEvent({ title: e.target.value })}
//                                 value={this.state.title}
//                                 />
//                             <input
//                                 autoFocus
//                                 onChange={e => this.ListeningStateChangedEvent({ title: e.target.value })}
//                                 value={this.state.id}
//                                 />
                            
//                         </form>
//                     </div>
//                 )
//             }}
//         </Mutation>
//         )
//     }
// }