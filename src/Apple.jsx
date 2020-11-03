import React, { Component } from 'react';

import ListContacts from './ListContacts';

const contacts = [
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <ListContacts contacts={contacts} />
      </div>
    );    
  }//end retrun
}//end render()

export default App;
