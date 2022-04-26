let app = new Vue({
  el: "#app",
  data: {
    a: 0,
    b: 0,
    c: 0,
    finalCheck: false,
    show: false,

    arrfirstChoice: [
      {
        id: 1334,
        image: "img/sword.gif",
      },
      {
        id: 1434,
        image: "img/shield.gif",
      },
      {
        id: 1324,
        image: "img/wand.gif",
      },
    ],
  },

  methods: {
    newChoice(index) {
      this.show = true;
      if (index == 0) {
        this.a++;
      } else if (index == 1) {
        this.b++;
      } else if (index == 2) {
        this.c++;
      }
      this.playEffectTwo();
    },

    showChoice: function () {
      if (this.a == 0 && this.b == 0 && this.c == 0) {
        return true;
      } else {
        return false;
      }
    },

    playEffect() {
      let audio = new Audio("music/hover.mp3");
      audio.play();
    },

    playEffectTwo() {
      let audio = new Audio("music/click.mp3");
      audio.play();
    },

    finalEffect() {
      let audio = new Audio("music/final.mp3");
      audio.play();
    },

    reset() {
      this.show = false;
      this.a = 0;
      this.b = 0;
      this.c = 0;
    },

    finalChoice() {
      setTimeout(() => {
        console.log("hi :D ");
      }, 1000);
      let result = document.querySelector("#app");
      let link = document.createElement("div");
      link.classList.add("container-two", "link");
      link.addEventListener("click", this.finalEffect);
      this.show = false;

      if (this.a > 0) {
        link.innerHTML = `<img src="img/gold.jpg" alt="" class="gold"/>
        <a href="https://store.finalfantasyxiv.com/ffxivstore/en-gb/product/73" target="_blank" class="gradient-text">CHECK THE SURPRISE</a>`;
        result.append(link);
      } else if (this.b > 0) {
        link.innerHTML = `<img src="img/gold.jpg" alt="" class="gold"/>
        <a href="https://store.finalfantasyxiv.com/ffxivstore/en-gb/product/75" target="_blank" @click="finalEffect()" class="gradient-text">CHECK THE SURPRISE</a>`;
        result.append(link);
      } else if (this.c > 0) {
        link.innerHTML = `<img src="img/gold.jpg" alt="" class="gold"/>
        <a href="https://store.finalfantasyxiv.com/ffxivstore/en-gb/product/74"   target="_blank" @click="finalEffect()" class="gradient-text">CHECK THE SURPRISE</a>`;
        result.append(link);
      }
    },
  },

  computed: {},
});

let song = document.querySelector("#song");
song.muted = false;
