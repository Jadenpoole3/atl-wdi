import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
 constructor(){
   super();
   this.state = {
     movie: ''
   }
 }

 //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
 _searchByTitle = (event) => {
   event.preventDefault()
   console.log('This is searchByTitle')
   axios.get('http://www.omdbapi.com/', {
           params: {
               apikey: 'd31f1a94'
           }
       }).then((response) => {
           const film = response.data.Title

           this.setState({ movie: film })
       }).catch((error) => {
           console.log(error)
       })
     
   }

 _searchById = (event) => {
   axios.get('http://www.omdbapi.com/', {
           params: {
               apikey: 'd31f1a94'
           }
       }).then((response) => {
           const _searchById = response.data.Id

       }).catch((error) => {
           console.log(error)
       })
     }

 componentWillMount(){
   this._searchById()
 }
 //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
 render() {
   return (
     <div className="App">
       <Header />
       <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
       <Movie />
     </div>
   );
 }
}

export default App;