# My Website!

Welcome to my website! This is the github repository that includes all of the code to run my website. Below is a description of how this works for you and future Francis when he inevitably forgets.

There are two branches here that matter: master and gh-pages (if the main branch is still present, then it's some old code that I need to delete lol). Master is the branch with the actual code and files. In the src folder I have all of the components and data for this website. In the public file is all the assets that I want to include when this website is being built including fonts, photos, icons, and documents. The gh-pages branch is created automatically when I run the `npm run deploy` command which builds the website and deploys it using github pages.

This website is using Vite's fast development server in the React library template. I use react's component-based architecture along with the Tailwind CSS framework to make this website. This website is mostly simple react components and tailwind layouts.

This [tutorial](https://www.youtube.com/watch?v=b0pkpcD8Ms4 'Tutorial'), which is included in the references, was my starting point for this project. Then I played around with the different TailwindCSS classes to make it more personal. After getting more comfortable I started adding features of my own. My inspiration websites are all listed below.

`npm run dev` starts a local vite server which is used for testing. `npm run deploy` will deploy the code using github pages. 

*Special thanks to Edwin Zhang, who I cold-emailed asking advice on how to build a website and he pointed me in the right direction.*

## References
- https://www.youtube.com/watch?v=b0pkpcD8Ms4
- https://www.tailwindtoolbox.com/icons
- https://favicon.io/
- https://fonts.google.com/
- https://colorpalettes.net/color-palette-4581/

## Inspiration
- https://www.edwinzhang.me/
- https://aravwatwani.com/
- https://anniesun.ca/
- https://dillion.io/projects
- https://thehackershideout.com/

## TODO
- dark mode with dark color pallete
- add navigation bar? (use fixed positioning)