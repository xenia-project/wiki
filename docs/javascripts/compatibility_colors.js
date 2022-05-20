/*
 MIT License

 Copyright (c) 2022 Caroline Joy Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

// TODO(halotroop2288): Parse these from JSON file
var labels = ['state-playable', 'state-nothing', 'state-load', 'state-title', 'state-menus', 'state-gameplay',
  'state-hang', 'state-crash-OBSELETE', 'state-intro', 'state-crash-guest', 'state-crash-host', 'state-crash-xna-WONTFIX'];
var labelColors = ['#22bb22', '#880000', '#ff9999', '#ee6633', '#fbca04', '#99aa00', '#BB0000', '#bb0000', '#ff3300',
  '#bb0000', '#bb0000', '#bb0000'];

var tds, text, color, label;
tds=document.getElementsByTagName('td');

// Someone clever could give the labels column an html id and get the td via that instead of using this for loop
for (i=0; i < tds.length; i++) {
  td = tds[i];
  text = td.innerText;
  for (l=0; l < labels.length; l++) {
    if ( text.includes(labels[l]) ) {
      td.style.border = "inset " + labelColors[l];
    }
  }
}
