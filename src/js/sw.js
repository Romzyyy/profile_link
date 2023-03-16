this.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open('v1')
            .then((cache) =>
                cache.addAll([
                    '/',
                    'components/Brithday.astro',
                    'components/Button.astro',
                    'components/Footer.astro',
                    'components/Header.astro',
                    'components/Messege.astro',
                    'components/Project.astro',
                    'components/Skill.astro',
                    'data/Backend.js',
                    'data/birthday.js',
                    'data/frontend.js',
                    'data/messege.js',
                    'data/project.js',
                    'data/SosialLinks.js',
                    'pages/index.js',
                ])
            )
    )
})

globalScope.addEventListener('activate', (event) => {
    const cacheAllowlist = ['v2']

    event.waitUntil(
        caches.forEach((cache, cacheName) => {
            if (!cacheAllowlist.includes(cacheName)) {
                return caches.delete(cacheName)
            }
        })
    )
})

self.addEventListener('fetch', (event) => {
    console.log(`Handling fetch event for ${event.request.url}`)

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Found response in cache:', response)
                return response
            }
            console.log(
                'No response found in cache. About to fetch from network…'
            )

            return fetch(event.request)
                .then((response) => {
                    console.log('Response from network is:', response)

                    return response
                })
                .catch((error) => {
                    console.error(`Fetching failed: ${error}`)
                    throw error
                })
        })
    )
})
