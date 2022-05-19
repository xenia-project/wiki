# Xenia Wiki Contribution Guide

???+ info "Prerequisites"
    ## Prerequisites
    - Knowledge and a copy of [Git](http://git-scm.com/)
    - A [GitHub](https://github.com) account

    ### For testing

    You'll need MkDocs installed locally via Python to test your changes.

    1. [Python 3.7+](https://www.python.org/downloads/)
      - Ensure Python gets added to your PATH

    2. [MkDocs](https://www.mkdocs.org/), and [mkdocs-material](https://squidfunk.github.io/mkdocs-material/):
      - Run `python -m pip install mkdocs mkdocs-material` in your command prompt


???+ info "Instructions"
    ***If this is your first time contributing, be sure to read this entire section before you begin.***

    1. Clone the [repo](https://github.com/xenia-project/wiki) and open it in your favorite editor.

    2. If your editor creates editor-specific files, add them to the `.gitignore` file.

    3. Write your article using Markdown. The many features of Markdown extensions can be found in the links below.
       If you'd like to use a Markdown extension not listed in [mkdocs.yml](https://github.com/xenia-project/wiki/blob/main/mkdocs.yml),
       you may add them to the list. You should ensure compatibility with other articles (so their layout does not
       accidentally change) before your changes are merged.
        - [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/)
        - [MkDocs Material Extensions](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions)

    4. [Test](#testing) and spell-check your article before it is merged.

    5. Submit a pull request to [the wiki repo](https://github.com/xenia-project/wiki/compare)


???+ info "Testing"
    To serve your copy of the website for testing:

    1. Run `python -m mkdocs serve` in your command prompt

    2. Open `127.0.0.1:8000` in your browser
       (be sure not to include `http(s)://` this will cause errors in the browser)

    3. If you get any errors, read them carefully. The most common errors are broken links. You may have typed them wrong.
       - Keep in mind that `/` resolves to the `docs` folder. So, this page for example would be located at `/meta/contributing`
       - Embedded images must have extensions.
         Links to documents on this Wiki must have extensions.
         Articles on the wiki are do not need `.md` extensions (except in `mkdocs.yml`).


## Guidelines

1. ***Never*** attach files or links to content that is private to another party.<br/>
   This includes leaked documentation (such as the XDK), piracy websites and other pirated content.
2. If you attach a link to code on :material-github:GitHub in your article, make sure to get the *permalink.*<br/>
   Attaching links to branches (such as master/main) leads to dead or incorrect links down the road!


## Tips

Stumped on how to do something? These resources might help!

- [MkDocs Material Setup](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)
  Explains the setup of MkDocs Material sites, such as fonts, colors, and [navigation].
- [MkDocs Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)<br/>
  Includes details about the features of MkDocs Material, the theme used by Xenia Wiki.
  Want to know how to use features like emoji, tables, buttons, and diagrams? It's all in there.
- [Xenia Discord](https://discord.gg/Q9mxZf9)<br/>
  Talking to developers may give you ideas for documentation.<br/>
  The `#dev-references` channel may have additional references to add to the wiki.

### Tools
- [Xenia](/faq/quickstart/download) - You'll probably need it!
- [Lightshot](https://app.prntscr.com/en/index.html) - An easy screenshot program for Windows and Mac<br/>
  Has a few more features than Snipping Tool, including automatic upload and a dedicated screenshot hotkey.
- [Flameshot](https://flameshot.org/) - Almost the same as Lightshot, but on Linux!

### Suggestions

[Config Options](/faq/options) are often added updated, and could always use documentation.

[Additional languages can be supported.](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language-selector)
Although Xenia itself does not yet support multiple languages, the wiki can!
If you would like to translate the wiki to your language, [start here!](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language-selector)

[navigation]:https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/