# Webpack
## The basic set up for Webpack

Sometimes setting up webpack for every new project is a hassle.
For a VanillaJS projects, use [Parcel](https://parceljs.org/).
If you are getting started, [create-react-app](https://create-react-app.dev/docs/getting-started/) is better suited for you.
The main purpose of this repo is to set up webpack with react. See under the hood and get your hands dirty 🔧

### The main branch has the basic set up (fully up-to-date)
* file-loader --> no needed anymore in webpack 5
* css-loader
* html-loader
* CleanWebpackPlugin
* HtmlWebpackPlugin
* HotModuleReplacementPlugin
### Support for Sass out-the-box
* sass-loader
* sass (dart)

### The project include ReactJS configured
* @babel/core
* @babel/preset-env
* babel-loader
* react (v17.01)
* react-dom


> Note: react branch and main branch are the same. react branch will get updated with redux support in the future

### The react-tailwind branch is when you feel crazy enough to play around with TailwindCSS
* tailwindcss
* postcss-cli
* autoprefixer
> Note: This brach is paused. Tailwind just had a major release. I'm tweaking some things to get the most out the framework
