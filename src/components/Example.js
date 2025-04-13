import React from 'react';

class Example extends React.Component {
  constructor() {
    super();
    console.log('EXAMPLE constrot 333');
  }

  componentDidMount() {
    console.log('EXAMPLE MOUNT 3333');
  }
  render() {
    console.log('EXAMPLE RENDER');
    return <div>HEllo 11</div>;
  }
}

export default Example;
