# reactvr_musical

A simplified version of [The Musical Forest](https://webvrexperiments.com/experiment/musical-forest) made with React VR and Pusher. Follow the tutorial [here](https://pusher.com/tutorials/realtime-reactvr/).

[![Musical experience with React VR and Pusher](https://img.youtube.com/vi/vm5vKh7h0b4/0.jpg)](http://www.youtube.com/watch?v=vm5vKh7h0b4)

## Getting Started
1. Clone this repository and `cd` into it.
2. Create an app at https://dashboard.pusher.com and enter your Pusher info in `index.vr.js`.
3. Execute `npm install` to download dependencies.
4. Donwload and execute the [Node.js server](https://github.com/eh3rrera/server_pusher_reactvr_musical) with the same Pusher info.
5. Update your server URL in `index.vr.js`.
5. Execute `npm start` to start the development server.
6. Go to `http://localhost:8081/vr/` to play with the app (preferably with a fully compatible WebVR browser). You can have URLs like http://localhost:8081/vr/?channel=1234 so people in the same channel can play sounds together.

### Prerequisites
- [Pusher account](https://pusher.com/signup)

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [React VR](https://facebook.github.io/react-vr/) - To build VR websites and interactive 360 experiences with React

## Acknowledgments
* Thanks to [Pusher](https://pusher.com/) for sponsoring this tutorial.
* [The Musical Forest](https://webvrexperiments.com/experiment/musical-forest)
* Sounds used under the Creative Commons Attribution license at https://creativecommons.org/licenses/by/3.0/:
  - https://www.freesound.org/people/dobroide/sounds/34162/
  - https://www.freesound.org/people/Adam_N/sounds/164482/
  - https://www.freesound.org/people/NoiseCollector/sounds/4911/
  - https://www.freesound.org/people/dobroide/sounds/59367/
  - https://www.freesound.org/people/funkymuskrat/sounds/217050/
  - https://www.freesound.org/people/zippi1/sounds/18271/

## License
MIT
