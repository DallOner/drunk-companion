const vm = new Vue({
  el: 'main',
  data: {
    games: [{
      id: 'roulette',
      name: 'Roulette Shots',
      description: 'A Shot Roulette game',
      image: 'assets/img/roulette.jpg',
      url: '#',
      version: '1.0.0'
    },
    {
      id: 'liar',
      name: 'Liar Liar!',
      description: 'A Counter of Liar game',
      image: 'assets/img/liar.jpg',
      url: '#',
      version: '1.0.0'
    },
    {
      id: 'test',
      name: 'Test name',
      description: 'Test description',
      image: 'assets/img/no-img-placeholder.png',
      url: '#',
      version: '1.0.0'
    }
    ]
  },
  methods: {}
});

$(document).ready(function(){
  $('.sidenav').sidenav();
  console.log('jquery loaded')
});