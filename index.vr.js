import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  SpotLight,
  View,
  Cylinder,
  Box,
  Sphere,
  MediaPlayerState,
  NativeModules,
} from 'react-vr';
import Forest from './components/Forest';
import SoundShape from './components/SoundShape';

importScripts('https://js.pusher.com/4.1/pusher.worker.min.js');

const Location = NativeModules.Location;

export default class musical_exp_react_vr_pusher extends React.Component {
	
  constructor(props) {
    super(props);
	
    this.config = [
      {sound: asset('sounds/bird.wav'), playerState: new MediaPlayerState({})},
      {sound: asset('sounds/bird2.wav'), playerState: new MediaPlayerState({})},
      {sound: asset('sounds/bird3.wav'), playerState: new MediaPlayerState({})},
      {sound: asset('sounds/cat.wav'), playerState: new MediaPlayerState({})},
      {sound: asset('sounds/cricket.wav'), playerState: new MediaPlayerState({})},
      {sound: asset('sounds/dog.wav'), playerState: new MediaPlayerState({})},
    ];
  }
  
  componentWillMount() {
	  const pusher = new Pusher('<INSERT_PUSHER_APP_KEY>', {
        cluster: '<INSERT_PUSHER_APP_CLUSTER>',
		encrypted: true,
	  });
      this.socketId = null;
      pusher.connection.bind('connected', () => {
        this.socketId = pusher.connection.socket_id;
      });
	  this.channelName = 'channel-' + this.getChannelId();
	  const channel = pusher.subscribe(this.channelName);
	  channel.bind('sound_played',  (data) => {
	    this.config[data.index].playerState.play();
	    console.log('play from pusher ' + data.index);
	  });
  }
  
  getChannelId() {
	  let channel = this.getParameterByName('channel', Location.href);
	  if(!channel) {
		  channel = 0;
	  }
	  
	  return channel;
  }
  
  getParameterByName(name, url) {
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  onShapeClicked(index) {
    this.config[index].playerState.play();
    console.log('play ' + index);
    fetch('http://<INSERT_YOUR_SERVER_URL>/pusher/trigger', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: index,
        socketId: this.socketId,
        channelName: this.channelName,
      })
    });
  }
  
  render() {
    return (
      <View>
        <Pano source={asset('images/background.jpg')} />
		
		<Forest trees={100} perimeter={15} colors={['#016549', '#87b926', '#b1c96b']} />

        <SpotLight intensity={1} style={{transform: [{translate: [1, 4, 4]}],}} />
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(0)} 
		    sound={this.config[0].sound} 
			playerState={this.config[0].playerState}>
          <Cylinder
            radiusTop={0.2}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={8}
            lit={true}
            style={{
              color: '#96ff00', 
              transform: [{translate: [-1.5,-0.2,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(1)} 
			sound={this.config[1].sound} 
			playerState={this.config[1].playerState}>
          <Cylinder
            radiusTop={0}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={4}
            lit={true}
            style={{
              color: '#96de4e',
              transform: [{translate: [-1,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(2)} 
			sound={this.config[2].sound} 
			playerState={this.config[2].playerState}>
		  <Box
            dimWidth={0.2}
            dimDepth={0.2}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#a0da90', 
              transform: [{translate: [-0.5,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(3)} 
			sound={this.config[3].sound} 
			playerState={this.config[3].playerState}>
		  <Box
            dimWidth={0.4}
            dimDepth={0.2}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#b7dd60',
              transform: [{translate: [0,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(4)} 
			sound={this.config[4].sound} 
			playerState={this.config[4].playerState}>
		  <Sphere
            radius={0.15}
            widthSegments={20}
            heightSegments={12}
            lit={true}
            style={{
              color: '#cee030',
              transform: [{translate: [0.5,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
		
        <SoundShape 
		    onClick={() => this.onShapeClicked(5)} 
			sound={this.config[5].sound} 
			playerState={this.config[5].playerState}>
		  <Cylinder
            radiusTop={0.2}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={3}
            lit={true}
            style={{
              color: '#e6e200',
              transform: [{translate: [1,-0.2,-2]}, {rotateX: 30}],
            }}
            />
        </SoundShape>
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
