# HTML introduction
*(2026/02/06)*

## Presentation of the class (1h30)

- Structure, assignments, assessement criteria
- Round table (names, pronoums, curiosities, anxieties)

## Introduction

Presentation: An overview of HTML

[HTML tutorial on W3C school](https://www.w3schools.com/html/default.asp)

## Exercice

### XML ‘in-situ snapshot’ coding exercice (30min)

Bring in class a picture from your surrounding. When taking that picture, document it. Record audio / video as well. Think about what you see but also what you hear and smell. 

Write the 'code' of the picture on a piece of paper. You do **not** write it in *HTML*. Instead, use the logic of XML languages:

- Tags that open and close
- Tags that contain other tags
- The use of attributes that giving specifications on the tags.

More about XML:

- [List of XML languages on Wikipedia](https://en.wikipedia.org/wiki/List_of_XML_markup_languages)
- [BeerXML, a XML language for beer recipesl](https://beerxml.com/recipes.xml)
- [Epub, a XML for digital booksl](https://gist.github.com/stormwild/86673836eb6153e6ab2e65b4353a289e)
- [RecipeML, a XML for recipesl](https://en.wikipedia.org/wiki/RecipeML)
- [XML plant catalog on W3Schools](https://www.w3schools.com/xml/plant_catalog.xml)

Example:

```
<pond size=”small”>

  <surface status=”still”>

    <waterlilies>

      <waterlily blossom-count=”3”></waterlily>
      <waterlily blossom-count=”2”></waterlily>
      <waterlily blossom-count=”5”></waterlily>
      <frog status=”sleeping”></frog>

    </waterlilies>

  </surface>

  <underwater>

    <fish color=”red”></fish>
    <frog status=”active”></frog>

  </underwater>

</pond>
```

### Mapping elements (30min)

Based on the analogue code previously written. You are assigned someone else's previous *XML snapshot*.

- Draw a the structure of all elements as boxes on a piece of paper.
- Annotate each box by their tag name.
- Take a picture and/or scan this.
- Add it into the Teams folder corresponding to the right code.

### Presentation of the exercises (30min)

Everybody present their *XML snapshots* exercice (picture + scan of analogue code + box).

## Tutorial: Visual Studio (15min)

Install VS code + set up a document (and do’s and don’t)

- Download and install: https://code.visualstudio.com <br>
- Set `word wrap` option on by going to `view` -> `word wrap`.

Shortcut for HTML template:

- When creating a new document, either select `HTML`, or if creating a new 'text file', then click on `choose language` and select (by typing) `html`.
- `Shift` + `1` and `Enter` to auto-populate HTML Doctype in HTML.
