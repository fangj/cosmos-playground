import React from 'react';

module.exports= class Example extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello:{this.props.name}</div>
    );
  }
}
