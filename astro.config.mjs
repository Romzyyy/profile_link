// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import compress from 'astro-compress'

export default { integrations: [tailwind(), compress()] }
