Prepare Joplin Export
---

This can be used in a pipeline to automagically export prettier versions
of Joplin exported HTML files.

I used to do this manually. I still do, but I used to too. (rip Mitch)

Its kind of a pain in the ass to launch a whole instance of a browser and
the Web Console to just remove a few style/script elements, don't'cha
think?

## Use

See `Taskfile.yml` or run `task`.

## Required

Go ask your OS docs (pls not an AI) how to install the following, or
just put these in your path.

* `perl-rename` - https://stackoverflow.com/a/22578623
* `deno` - https://deno.com/
* `tidy` aka 'HTML Tidy': https://www.html-tidy.org/

