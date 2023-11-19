import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';




class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      newUser:[],
    }
  }
  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(data => this.setState({newUser: data}))
    
   }
  render() { 
    
    return ( 
      <div>
        {this.state.newUser.length >0 ? 
        (<Container>
          <Table striped bordered hover size="sm" className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th> Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              {this.state.newUser.map((user)=>{
                return (
                 <tbody>
                 <tr>
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.username}</td>
                   <td>{user.email}</td>
                 </tr>
 
               </tbody>
               )

              })}
             
          </Table>
        </Container>):
        (  <Alert variant="success">
        <Alert.Heading>Loading!</Alert.Heading>
      
      </Alert>)
        }
      </div>
     );
  }
}
 
export default App;