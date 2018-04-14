let files = [
"/",
"css/application.css",
"js/lib/jquery.min.js",
"js/application.js",
"img/icon.png",
]

self.addEventListener("install", function(){
    console.log("Instalou")
    caches.open("week-number-files").then(cache => {
        cache.addAll(files)
    })
})

self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})
