import React, {Component} from 'react';
import axios from 'axios';
import firebase from 'firebase';

// const token = window.indexedDB.get(firebaseLocalStorageDb.firebaseLocalStorage)

class GetUsers extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000', {headers: {token}})
      .then(res => {
        this.setState({
          users: res.data
        })
      })
    .catch(error => {
      console.log(error)
    });
  }

  render () {
    // console.log(token)
    return (
      <div>
      {
        this.state.users.map(user => <p>{user.firstName}{user.lastName}</p>)
      }
      </div>
    )
  }
}

export default GetUsers;