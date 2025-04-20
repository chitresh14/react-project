import UserContext from '../utils/contexts/UserContext';
import User from './User';
import UserClass from './UserClass';
import React from 'react';

//  const About = () => {
// //   return (
// //     <div>
// //       <h1>About</h1>
// //       <h2>This is a About us component to show about information</h2>
// //       <User
// //         name={'Chitresh Sharma (function based)'}
// //         location={'Location: Bangalore'}
// //         contact={'Contact: @chitreshSharma'}
// //       />
// //       <UserClass
// //         name={'Chitresh Sharma (class based)'}
// //         location={'Location: Bangalore'}
// //         contact={'Contact: @chitreshSharma'}
// //       />
// //     </div>
// //   );
// // };

class About extends React.Component {
  constructor() {
    super();
    console.log('About111 construtor');
  }

  componentDidMount() {
    console.log('About componentDidMount111');
  }

  render() {
    console.log('About render111');
    return (
      <div>
        <h1>About</h1>
        <h2>This is a About us component to show about information</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass
          name={'Chitresh Sharma (class based 1)'}
          location={'Location: Bangalore'}
          contact={'Contact: @chitreshSharma'}
        />
      </div>
    );
  }
}

export default About;
