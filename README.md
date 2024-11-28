tsconfig.json  - configuration file for TS 
tailwind.config - tailwind 
postcss.config.mjs - to process css from different plugins
package.lock
package.json
next-env.d.ts - ts declaration for nextjs 
next.config.ts - configure next js features
gitignore -
exlintrc.json - configure linting options

public
    static assests
    nodemodules
app
    page.tsx - writing the code 
    fonts - to store fonts 
    globals.css
    layout.tsx - anything we do here will be applied to all 

NOTE - 
    1.By defautl the comoponnent is server side 
    2.CLient side componennts are pre-rendered on server side and then hydrated
    3.error boundaries shoulw be client side rendered

Concepts -
    1.Route Groups - 
        Organizing routes into groups.
        This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
    2.Error -
        displays error closest to its route. meaning global-error.tsx and error.tsx of particular route 
        both wont show same errors
    3.ServerComponentHMRcache
        the fetch requests in server side are cached across HMR
        serverside rendering leads to better seo optimization as crawlers can access content easily
    3.Server Side generation
        the result is cached and pushed during build time.
        good for documentation,posts and blogs.not good for website requiring frequent user updates 
        otherwise we have to go for incremental static regeneration(ISR) extension of SSR. 
        Also check about PPR latest stratgergy.Combines static and dynamic parts of the webpage automatically, which is static content and which requires frequent updates 
