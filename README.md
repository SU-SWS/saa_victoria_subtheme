# saa_victoria_subtheme (https://github.com/SU-SWS/saa_victoria_subtheme)
##### Version: 8.x-1.0-dev

Changelog: [Changelog.txt](CHANGELOG.txt)

## Description


SAA Victoria is a Stanford Alumni Association sub-theme that works with the Stanford Basic theme.

## Installation


Copy this theme and change all files, folders, and names from saa_victoria_subtheme to the name of your theme.


## Configuration


Nothing special needed. Install, enable, and set as the default active theme.

## Developer
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

### Overridding decanter and Jumpstart UI paragraphs

Twig debug doesn't show some of the steps that are happening with patterns_ui module.
You might think a preprocess paragraph function would work for our react paragraphs,
but you have to do the display suite entity preprocess because of how the patterns_ui module
processes it. This is not very clear when inspecting with twig debug, and not documented well
online. Note how I was able to override/extend the card template.

The example of overridding card template:
The decanter card twig template is referenced by
https://github.com/SU-SWS/jumpstart_ui/tree/8.x-1.x/templates/components/card
and to override that template inside our theme we created this file here:
https://github.com/SU-SWS/saa_victoria_subtheme/blob/1.x/templates/components/pattern-card.html.twig

Note that our file is pattern-NAMEOFFILE  So it is not the same file name in jumpstart_ui.

### Preprocessing our paragraphs

In our theme, we wanted to process and prepare some attributes when a paragraph was used.
You might think to use a preprocess_paragraph function in the theme file, but it is more complicated
because we are using the patterns_ui module.

If you view the .theme file you will see the function `saa_victoria_subtheme_preprocess_ds_entity_view`
(Display Suite entity view).
This is how we target our paragraph that has been processed with patterns ui module.
