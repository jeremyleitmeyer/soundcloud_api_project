var playSong = document.getElementById("playSong")
var pauseSong = document.getElementById("pauseSong")
var help

SC.initialize ({
  client_id: "fd4e76fc67798bfa742089ed619084a6"
})

SC.get("/tracks").then(function(response) {
  info = document.querySelector("div")
  // if()

  template = `
  <div class="container">
    <div class = "image">
      <img src="{{artwork_url}}" width="150px" height:"150px">
    </div>
    <h3 class="title"><a href="{{permalink_url}}">{{title}}</a></h3>
    <h3 class="artist"><a href="{{user.permalink_url}}">{{user.username}}</a></h3>
    <p class="genre">Genre: {{genre}}</p>
    <p class="release">Released in: {{release_year}}</p>
    <p id="id" data-id={{id}}></p>
  </div>  
`
  
  info.innerHTML = Mustache.render(template, response[0]);

  help = document.getElementById("id")
  });

  
playSong.addEventListener("click", function(){

  SC.stream( '/tracks/' + help.dataset.id ).then(function(player){

    pauseSong.addEventListener("click", function(){
    player.pause();
  })
    console.log(player)

    player.play();
  })
})
  

