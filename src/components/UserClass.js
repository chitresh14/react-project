import React, { use } from 'react';
import Example from './Example';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log('User Construtor 222');
    this.state = {
      userInfo: {
        name: '',
        location: '',
      },
    };
  }

  fetchUSerData = async () => {
    return await fetch('https://api.github.com/users/chitresh14');
  };

  async componentDidMount() {
    // console.log('After the component reneder: USer class 222');
    const userData = await this.fetchUSerData();
    const jsonUserData = await userData.json();

    this.setState({
      userInfo: jsonUserData,
    });
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log('USer class RENDER 222');
    return (
      <div className="user-card">
        {/* <h1>{count}</h1> */}
        {/* <button onClick={this.updateCount}>Increase Count</button> */}
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>{location}</h3>
        {/* <Example /> */}
      </div>
    );
  }
}

export default UserClass;
