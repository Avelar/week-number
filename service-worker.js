const version = 2;

let files = [
"/",
"/index.html",
"css/application.css",
"js/lib/jquery.min.js",
"js/application.js",
"img/icon.png",
"https://fonts.googleapis.com/css?family=Montserrat:400,900",
]

self.addEventListener("install", function(){
  console.log("Week number ready");

  caches.open("week-number-files-" + version).then(cache => {
    cache.addAll(files)
      .then(function(){
        caches.delete("week-number-files-" + (version - 1));
        caches.delete("week-number-files");
      });
  });

});

self.addEventListener("fetch", function(event){
    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })
    event.respondWith(promiseResposta)
})
