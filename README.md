# WebTech Lab 01 — Personal Page

**Cristóbal Toro**

Personal webpage created for Lab 1 of Web Technology using HTML and CSS.

## Published Site

https://tjuur.github.io/webtech-lab-01/

## Repository

https://github.com/Tjuur/webtech-lab-01

## Lab 2 additions (Interactive Features)

### Toggle light/dark mode

I added a feature that allows the user to switch between light and dark mode (dark mode by default).

It's located right under the header and index, to activate just click on it and the whole page will change its look.

### Music recommendations

Added a music recommendation feature, it's located just before the contact form and under links. You can browse music recommendations (only 6 by default), add music, filter an artist, song name or genre and even favorite them. The songs must have a song name, artist name and a genre, the genre has a finite amount of options, that way if I want to add another function later, there's a defined amount to work with.

Instructions:
To add music, the user must use the form provided right under the actual song grid, to favorite them, the user must click on the box that has a star symbol. I added a few things like, you can't submit a song if any of the fields are blank/unselected. As for the filter, the user must manually type what they wish to search and the list will only show the songs/artists/genre that fits the criteria, the filter is located on the top of the section.

### Contact form

The contact form now shows message errors when a field is either blank or invalid. The user must have at least a character in both "Message" and "Name" and must enter a valid email, the code will look for both an "@" and a "." symbol, so please make sure to include them in your testing. *Note: the error message also specifies that both symbols must be used, as to avoid ambiguity.

