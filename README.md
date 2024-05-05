<video src="proto/assets/videos/J.A.R.V.I.S.mp4" autoplay loop playsinline muted></video>

<h1 align="center">⭐Jarvis⭐<br></h1>

<p align="center"> 
  Greetings All! , I am "Jarvis" a WhatsApp bot made by Sam to do everything that is possible on WhatsApp based on WhatsApp Multi Device(MD) Support.
</p>
</br>

### ✧✧ This bot is still under development so if you want to recode/modify it, pls check this main repo once in 5 days because i am continuously debugging it and making major changes in it.

# Install Manually 👇

## `Requirements`

- [Node.js](https://nodejs.org/en/)

- [Git](https://git-scm.com/downloads)

- [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)

- [Libwebp](https://developers.google.com/speed/webp/download)

- Any text editor

## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

https://github.com/clhuang/heroku-buildpack-webp-binaries.git

```
## `For Termux/Ssh/Ubuntu`

```bash

apt update

apt upgrade

pkg update && pkg upgrade

pkg install bash

pkg install libwebp

pkg install git -y

pkg install nodejs -y

pkg install ffmpeg -y

pkg install wget

pkg install yarn

pkg install imagemagick -y

git clone https://github.com/Sam10224/Jarvis

cd Jarvis

rm -rf session

yarn install

npm start

```

## `For 24/7 Activation (Termux)`

```bash

npm i -g pm2 && pm2 start  index.js && pm2 save && pm2 logs

Feel free to contribute and make this project even more awesome! 🌟
```
