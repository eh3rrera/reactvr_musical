import React from 'react';
import {
  VrButton,
  Animated,
  Sound,
} from 'react-vr';

export default class SoundShape extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  
  animateEnter() {
    Animated.spring(  
      this.state.bounceValue, 
      {
        toValue: 1, 
        friction: 4, 
      }
    ).start(); 
  }

  animateExit() {
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 0,
        duration: 50,
      }
    ).start();
  }
  
  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {rotateX: this.state.bounceValue},
          ],
        }}
      >
        <VrButton
		  onClick={() => this.props.onClick()}
          onEnter={()=>this.animateEnter()}
          onExit={()=>this.animateExit()}
        >
          {this.props.children}
        </VrButton>
        <Sound playerState={this.props.playerState} source={this.props.sound} />
      </Animated.View>
    );
  }
};