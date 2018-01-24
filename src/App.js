import React from 'react';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="body">
        <header>
          <h3>In the beginning, there was jack and jack had a groove.</h3>
        </header>
        <article>
          <p>And from this groove came the groove of all grooves.</p>
          <br />
          <h4><em>"Let there be HOUSE!"</em></h4>
        </article>
      </div>
    );
  }
}
