## FileSystem-Based Routing:

    Next.js uses files and folders to define routes.
    Files and folders inside the "app" folder will be considered for routing.

    /app
        /about.js = example.com/about
        /blog
            /post-1 = example.com/blog/post-1
            /post-2 = example.com/blog/post-2

    Next.js works with React Server Components
        The component is rendered on the server and never on the client side.

    In next.js The components are treated as a server component and is executed on the server and the returned JSX code is than send to the browser to be shown.

    ## File name matters in Next.js

        Next.js relies on reserved, special filenames.
        This only matters inside the "app" folder

        page.js = Defines page content.
        layout.js = Defines wrapper around the page.
        not-found.js = Defines "Not Found" fallback page.
        error.js = Defines "Error" fallback page.

## Navigating Between Pages:

    We can use anchor tags to navigate between pages,but it will always reload a new page so the Single page application functionality on Next app will be of no use.

    When we visit the page for the first time by manually entering the url the componets is rendered on the server and the rendered HTML content is sent to client.
    But if we are on a page and navigating around by clicking on the links, the JSX is updated on the client side using the JS code.
    The anchor tag does not support SPA.(Single Page Application)

    To support SPA we need to use the "Link" component provided by the next/link

## Page & layout

    Page.js file defines the content of the page.
    Layout.js file defines the Shell or container around one or more pages, It is a layout into which the page will be rendered.

    Root Layout.js setups the general skeleton of the website.

    No <head> element/section inside the <html> tag is needed for providing meta data in Next js,it is done automatically with the next js and instead we can use a reserved "metadata" keyword for this

        export const metadata = {
            title: "NextJS Course App",
            description: "Your first NextJS app!",
        };

    ############# icon.png ##########
    The icon that we add inside the "app" folder with name of "icon.png" will be used automatically for the fav icon of the website.
    "icon" is also a reserved keyword in Next.js

    ############# Cutom React Components ###########
    Header.js is custom React component that can be used in Next.js

    Ideally we should keep custom components, utils and other helper functions outside the "app" folder.
    Only routing related Components should be present inside the "app" folder.

    ######## New way of importing in Next.js ########
    import Header from "@/components/header"; ### @ here refers to the root of the project
