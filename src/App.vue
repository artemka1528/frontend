<template>
  <div>
    <div style="border-bottom: 1px solid rgb(242, 242, 242);">
      <HeaderComponent />
    </div>
    <MainComponent />
    <AboutUs />
    <VSlider />

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './components/Header/HeaderComponent.vue';
import AboutUs from './components/AboutUs/AboutUs.vue';
import MainComponent from './components/Main/MainComponent.vue';
import VSlider from './components/Slider/VSlider.vue';
export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    AboutUs,
    MainComponent,
    VSlider
  },
  directives: {
    imgSrc: require('@/assets/bg-main.png')
  },
  data() {
    return {
      isModal: false
    }
  },
  methods: {
  }
})
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  height: 100%;
  position: relative;
  /* background: rgb(229, 229, 229); */
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

textarea {
  outline: none;
  padding: 25px 28px;
  box-sizing: border-box;
  border: 1px solid rgb(224, 224, 224);
  outline: 0;
  outline-offset: 0;
  width: 100%;
  height: 70px;
  color: rgb(36, 38, 39);
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;

  &:hover {
    background: rgb(242, 242, 242);
  }

  &::placeholder {
    font-family: Helios;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
  }
}

#app {
  font-family: Gilroy, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;

}

h1 {
  color: rgb(255, 255, 255);
  font-family: HeliosCond;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0%;
  text-align: left;
}

h2 {
  color: rgb(36, 38, 39);
  font-family: Helios;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0%;
  text-align: left;
}

h3 {
  color: rgb(36, 38, 39);
  font-family: Helios;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
}

p {
  color: rgb(79, 79, 79);
  font-family: Helios;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
}

button {
  font-family: HeliosCond;
}

@font-face {
  font-family: 'Gilroy';
  src: url('./fonts/Gilroy-Regular.eot');
  src: local('./fonts/Gilroy Regular'), local('Gilroy-Regular'),
    url('./fonts/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Gilroy-Regular.woff') format('woff'),
    url('./fonts/Gilroy-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}



@font-face {
  font-family: 'Gilroy';
  src: url('./fonts/Gilroy-Medium.eot');
  src: local('./fonts/Gilroy Medium'), local('Gilroy-Medium'),
    url('./fonts/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Gilroy-Medium.woff') format('woff'),
    url('./fonts/Gilroy-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'HeliosCond';
  src: url('./fonts/heliosc_bold.otf');
  src: local('./fonts/HeliosCond Bold'), local('HeliosCond-Bold'),
    url('./fonts/heliosc_bold.otf?#iefix') format('embedded-opentype'),
    url('./fonts/heliosc_bold.otf') format('woff'),
    url('./fonts/heliosc_bold.otf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Helios';
  src: local('Helios Regular'), local('Helios-Regular'),
    url('./fonts/HeliosC.woff2') format('woff2'),
    url('./fonts/HeliosC.woff') format('woff'),
    url('./fonts/HeliosC.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
</style>
