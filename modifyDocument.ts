// wanted to run this in headless mode
// https://thevalleyofcode.com/lesson/css-tips/how-to-remove-all-css/
// testing out deno here - js/ts newb
//
// by: sahal

import { DOMParser, Element } from "jsr:@b-fuze/deno-dom";

const filename = Deno.env.get("TASK_FILE")

const decoder = new TextDecoder("utf-8");
//const data = await Deno.readFile("Joplin export.html");
const data = await Deno.readFile(filename);

const document = new DOMParser().
  parseFromString(
    decoder.decode(data),
    "text/html",);

// remove style,script, and linked stylesheets
document.querySelectorAll('style,script,link[rel="stylesheet"]').
  forEach(node => { node.remove() });

// add my custom stylesheet
const link = document.createElement("link");
link.setAttribute("href","../j/exported-notes.css");
link.setAttribute("rel","stylesheet");
document.querySelectorAll('head').
  forEach(node => { node.appendChild(link)});

console.log(document.documentElement.outerHTML);

