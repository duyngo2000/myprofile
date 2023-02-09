const CACHE_NAME = "Version-1"
const urlsToCache = [
    "index.html",
    "logo-16.png",
    "logo-32.png",
    "logo-64.png",
    "logo-129.png",
    "logo-360.png",
    "logo-512.png",
    "logo.png",
    "service-worker.js",
    "./src/index.js",
    "./src/App.js",
    "./src/index.css",
    "./src/components/AboutMe/AboutMe.jsx",
    "./src/components/Contact/Contact.jsx",
    "./src/components/Contants/HideInput.jsx",
    "./src/components/Contants/sizeScreen.js",
    "./src/components/Contants/Title.jsx",
    "./src/components/Education/Education.jsx",
    "./src/components/Education/Map.jsx",
    "./src/components/Header/Header.jsx",
    "./src/components/Skills/Skills.jsx",
    "./src/components/Skills/imgSkills.js",
    "./src/components/Summary/Summary.jsx",
    "./src/components/WorkExperiences/WorkExperiences.jsx",
]

const self = this

// install WS
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opend cache")
            return cache.addAll(urlsToCache)
        })
    )
})

// listen for request
self.addEventListener("fetch", (event) => {
    // Let the browser do its default thing
    // for non-GET requests.
    if (event.request.method !== "GET") return

    // Prevent the default, and handle the request ourselves.
    event.respondWith(
        (async () => {
            // Try to get the response from a cache.
            const cache = await caches.open("dynamic-v1")
            const cachedResponse = await cache.match(event.request)

            if (cachedResponse) {
                // If we found a match in the cache, return it, but also
                // update the entry in the cache in the background.
                // console.log("found in cache")
                // console.log(event.request)
                event.waitUntil(cache.add(event.request))
                return cachedResponse
            }
            // console.log("not found")
            // console.log(event.request)
            // If we didn't find a match in the cache, use the network.
            return fetch(event.request)
        })()
    )
})

// activate the WS
self.addEventListener("activate", (event) => {
    console.log("Activated!")

    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName)
                    }
                })
            )
        )
    )
})