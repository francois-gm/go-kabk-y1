# Class 5, 2026/03/09

## Intro (15min)

- *A website you like* (Alex, Szófia, Preslav)

## Recap (10min)

Question:

<!--
- What is likely to be the most **common** coding "issue" experienced during previous classes (guess: it's not really a ~~coding~~ mistake)?
-->

## Tutorial: extending on CSS selectors (10min)

In previous classes, we saw several ways of writing *CSS selectors* to style our HTML elements.

In short: The more the combination is specific, the more it has 'cascade points' and the more it has precedence over other CSS rules.

But how does the 'CSS algorithm' actually works?

<img src="css-specificity.svg" width="600px">

- Inline CSS = `1`-`0`-`0`-`0`
- Id = `0`-`1`-`0`-`0` (added for each in a matching selector)
- Class, pseudo-class, attribute = `0`-`0`-`1`-`0` (added for each in a matching selector)
- Element, pseudo-element, `0`-`0`-`0`-`1` (added for each in a matching selector)

### Read more

- [All CSS selectors on W3school](https://www.w3schools.com/cssref/css_selectors.php)
- [CSS selectors on web.dev](https://web.dev/learn/css/selectors?hl=en)
- [More about how specificity gets calculated](https://webdesign.tutsplus.com/what-is-css-specificity--cms-34141t)
- [Visual examples on specificity](https://www.w3schools.com/cssref/trysel.php?)
- Practice your selectors by [playing the CSS Diner](https://flukeout.github.io) game!
- ... or play [this other game](https://toolness.github.io/css-selector-game/)

## Tutorial: linking files (self-hosted vs. online, relative vs. absolute) (10min)

### Self-hosted

**The files are in your website folder** (you push them online, they are hosted under the url of your project).

#### Relative links

- `./` → Current folder (you can often skip this)
- `../` → Go *up one folder level* (to the parent folder)
- `../../` → Go *up two levels*
- `../../../` → Go *up three levels*, etc.

Common mistakes:

- ❌ Forgetting `../` → the browser looks in the same folder and fails to find the file.
- ❌ Too many `../` → you go above the root folder, which doesn’t exist.
- ✅ Always think in “steps”: each `../` goes one folder up.

`/`→ Start from the root of the website.

Example: 

```
https://example.com/
```

Doing something like...

```
<link rel="stylesheet" href="/css/style.css">
```

then `/css/style.css` means:

`https://example.com/css/style.css`

… even if the page in which the stylesheet link is like `https://example.com/content/subpage/sub-subpage/index.html`

### Hosted by a third party / online

#### Absolute link

Usually used as external links (point to other websites). Preferably **not used** for images in your website (if the hosting party deletes the images, your website does not display the images anymore).

Example: `<a href="https://www.another-website.com/another-link" target="_blank">Another link</a>`

An absolute link always has the `https://` starting the links, as well as the full domain of the website.

For images files, always prefer the **.jpg** format!

## Time for assignment, small groups (1h15)

<!--

| Time | Group |
|-|-------------- |
| 15min | Laura, Alex, Szófia, Milena, Loth |
| 15min | K, Valentijn, Izabela, Fabian, Emily |
| 15min | Issy, Frédérique, Anita, Bente |
| 15min | Simone, Anastasia, Arina, Beena |
| 15min | Pepijn, Lara, Preslav, Billie |

-->


## Time for assignment (individual) (2h) (5min each)

(see spreadsheet)