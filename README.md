# saa_victoria_subtheme (https://github.com/SU-SWS/saa_victoria_subtheme)
##### Version: 8.x-1.0-dev

Changelog: [Changelog.txt](CHANGELOG.txt)

## Description


SAA Victoria is a Stanford Alumni Association sub-theme that works with the Stanford Basic theme.

## Installation


Copy this theme and change all files, folders, and names from saa_victoria_subtheme to the name of your theme.


## Configuration


Nothing special needed. Install, enable, and set as the default active theme.

Developer
---

If you wish to develop on this theme you will most likely need to compile some new css. Please use the sass structure provided and compile with the sass compiler packaged in this theme. To install:

```
npm install
```
After you've made a change you want to see processed, you can run:
```
npm run build
```
or
```
npm run publish
```
This will process scss, js, and asset files, preparing them from the src directory to the dist directory.
It will also copy decanter twig templates from node_modules to the dist/templates/decanter directory to be used.
Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this theme. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)

### Utility Class Approach
We are employing utility classes a lot in this theme to improve efficiency and reduce code maintainance. The CSS framework Tailwind helps us with that:
https://tailwindcss.com/

#### Benefits
You aren't wasting energy inventing class names. No more adding silly class names like sidebar-inner-wrapper just to be able to style something, and no more agonizing over the perfect abstract name for something that's really just a flex container.

Your CSS stops growing. Using a traditional approach, your CSS files get bigger every time you add a new feature. With utilities, everything is reusable so you rarely need to write new CSS.

Making changes feels safer. CSS is global and you never know what you're breaking when you make a change. Classes in your HTML are local, so you can change them without worrying about something else breaking.
