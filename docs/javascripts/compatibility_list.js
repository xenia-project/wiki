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

// map from github issue label to compat bar category
const labelMap = {
    "wontfix": "unsupported",
    "xam-live-signin-required": "unsupported",
    "crash": "nothing",
    "state-nothing": "nothing",
    "state-intro": "loads",
    "state-load": "loads",
    "state-title": "loads",
    "state-menus": "loads",
    "state-gameplay": "in-game",
    "state-playable": "playable"
}

/**
 * load compatibility data from compat json file 
 * @returns object containing compatibility data
 */
async function loadCompatibilityJson() {
    const res = await fetch("/faq/compatibility/compatibility.json");
    if (res.ok) {
        return await res.json();
    }
    throw "not found";
}

/**
 * Get progress category for issue label
 * @param {string} label 
 * @returns progress category as string
 */
function getCategoryForLabel(label) {
    if (label in labelMap) {
        return labelMap[label];
    }
    return undefined;
}

/**
 * Generate progress bars based on supplied issue object and compat map
 * @param {*} issues 
 * @param {*} compatMap 
 */
function generateCompatibilityProgressBars(issues, compatMap) {
    const total = issues.length;

    // loop over each progress category, calculate its percentage makeup of the issue count
    // and set progress bar to that percent
    for (const [categoryLabel, count] of compatMap.entries()) {

        const percent = Math.round((count / total) * 100);
        const elements = document.getElementsByClassName(`label-${categoryLabel}`);
        if (elements.length > 0) {
            elements[0].classList.remove("progress-0plus");
            elements[0].classList.add(`progress-${percent}plus`);
            elements[0].firstElementChild.style.width = `${percent}%`;
        }
    }

    // disable spinner and show progress bars
    const loadingDiv = document.getElementsByClassName("progress-bars-loading")[0];
    const progressBarDiv = document.getElementsByClassName("progress-bars")[0];
    loadingDiv.style.display = "none";
    progressBarDiv.style.display = "block";
}


// load compat json then create a map of all required progress categories and their count
loadCompatibilityJson().then(json => {
    const issues = json.data.repository.issues.nodes;
    let compatMap = new Map();
    for (const issue of issues) {
        for (const label of issue.labels.edges) {
            // find category label for this issue label
            // skip ones we don't care about 
            const categoryLabel = getCategoryForLabel(label.node.name);
            if (categoryLabel === undefined) continue;

            // increment issue count for this category
            if (compatMap.has(categoryLabel)) {
                compatMap.set(categoryLabel, compatMap.get(categoryLabel)+1);
            } else {
                compatMap.set(categoryLabel, 1);
            }
        }
    }

    generateCompatibilityProgressBars(issues, compatMap);

}).catch(e => {
    // hide spinner and show error message
    const loadingDiv = document.getElementsByClassName("progress-bars-loading")[0];
    loadingDiv.firstElementChild.style.display = "none";
    loadingDiv.lastElementChild.style.display = "block";
});
