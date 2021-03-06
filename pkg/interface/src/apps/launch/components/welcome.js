import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
    this.disableWelcome = this.disableWelcome.bind(this);
  }

  disableWelcome() {
    this.props.api.launch.changeFirstTime(false);
    this.setState({ show: false });
  }

  render() {
    let firstTime = this.props.firstTime;
    return (firstTime && this.state.show) ? (
      <div className={'fl ma2 bg-white bg-gray0-d white-d overflow-hidden ' +
      'ba b--black b--gray1-d pa2 lh-copy'}>
        <p className="f9">Welcome. This virtual computer belongs to you completely. The Urbit ID you used to boot it is yours as well.</p>
        <p className="f9 pt2">Since your ID and OS belong to you, it’s up to you to keep them safe. Be sure your ID is somewhere you won’t lose it and you keep your OS on a machine you trust.</p>
        <p className="f9 pt2">Urbit OS is designed to keep your data secure and hard to lose. But the system is still young — so don’t put anything critical in here just yet.</p>
        <p className="f9 pt2">To begin exploring, you should probably pop into a chat and verify there are signs of life in this new place. If you were invited by a friend, you probably already have access to a few groups.</p>
        <p className="f9 pt2">If you don't know where to go, feel free to <Link className="no-underline bb b--black b--gray1-d dib" to="/~chat/join/~/~dopzod/urbit-help">join our lobby.</Link>
        </p>
        <p className="f9 pt2">Have fun!</p>
        <p className="dib f9 pt2 bb b--black b--gray1-d pointer"
          onClick={(() => {this.disableWelcome()})}>
          Close this note
        </p>
      </div>
    ) : null;
  }
}

