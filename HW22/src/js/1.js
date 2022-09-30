var playList = [

  {

    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN"

  },

  {

    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY"

  },

  {

    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD"

  },

  {

    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER"

  },

  {

    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER"

  },

  {

    author: "AC/DC",

    song: "BACK IN BLACK"

  },

  {

    author: "QUEEN",

    song: "WE WILL ROCK YOU"

  },

  {

    author: "METALLICA",

    song: "ENTER SANDMAN"

  }

];
function createBtn(tag, text, clas, path) {
  btn = document.createElement(tag);
  btn.classList.add(clas);
  btn.href = path;
  btn.textContent = text;
  return btn;
}

const list = document.createElement('ol');
for (let i = 0; i < playList.length; i++) {
  let item = document.createElement('li');
  item.textContent = playList[i].author + ' - ' + playList[i].song;
  list.append(item);
}
document.body.append(list);
let btnNext = createBtn('a', 'NEXT', 'nav-btn', '2.html');
document.body.append(btnNext);



