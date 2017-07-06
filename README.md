# Basic HTML Starter Template

## Install

1. Clone the repository

```
git clone https://github.com/kevinguebert/Basic-HTML-Starter-Template.git
```

2. Install the npm packages - requires Gulp and Browser-sync

```
npm install
```

3. Start the server

```
gulp watch
```

## Project Structure

```
app/index.html     -> Main HTML
app/js/index.js	   -> JS file loaded in index.html
app/css/styles.css -> CSS loaded into index.html
gulpfile.js        -> Gulp build definition
package.json       -> NPM build definition
```

## Browser-sync Settings

Browser-sync is watching all files within the `app` directory for a change. Modify `index.html`, `index.js`, or `styles.css` and the browser will reload. If you would like to add more files, they will also reload, but remember you will have to add them to `index.html` to view changes (depending on project structure)