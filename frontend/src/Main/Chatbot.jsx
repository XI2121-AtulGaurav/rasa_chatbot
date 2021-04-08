import React, { Component, Fragment } from 'react'
import { Widget } from 'rasa-webchat';
import { botConfig } from '../config';
import '../Styles/bot.scss'
import BotImg from '../Assets/bot.png';
import ExitImg from '../Assets/exit.svg';
import BotSound from '../Assets/bot.ogg';


class FaqChatbot extends Component {
  componentDidMount() {
    this.audio.volume = 0.1;
  }
  render() {
    return (
      <Fragment>
        <audio src={BotSound} ref={(audio) => this.audio = audio}></audio>
        <Widget 
          initPayload={botConfig.initPayload}
          socketUrl={botConfig.socketUrl}
          socketPath={"/socket.io/"}
          customData={{ "language": "en" }}
          profileAvatar={BotImg}
          title={botConfig.title}
          subtitle={botConfig.subtitle}
          showMessageDate={(timestamp, message) => new Date(timestamp).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
          autoClearCache={true}
          inputTextFieldHint={botConfig.inputHint}
          showCloseButton={true}
          closeImage={ExitImg}
          connectingText={"Recharging cells of bot, please wait..."}
          params={{ storage: "local" }}
          onSocketEvent={{ 'bot_uttered': () => { setTimeout(() => this.audio.play(), 800) } }}
        />
      </Fragment>
    )
  }
}

export default FaqChatbot;