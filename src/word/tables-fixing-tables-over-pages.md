---
title: "Tables: Fixing tables over pages"
layout: layout.liquid
permalink: /word/tables-fixing-tables-over-pages/
active: word
---

<h1>Fixing tables over pages</h1>

Tables extending across multiple pages can sometimes throw up a few headaches. Here's a few scenarios you might encounter and fixes for them. In this article:
<ul>
    <li><a href="#table-row-break">Table content splits across pages</a></li>
    <li><a href="#header-rows-repeat">Table header row doesn’t repeat across pages</a></li>
    <li><a href="#header-rows-unwanted-merged-rows">Repeated table header rows with unwanted merged cells</a></li>
    <li><a href="#header-rows-include-subheading-rows">Include subheading rows in repeated table header rows</a></li>
</ul>


<section class="section-light">
<h2 id="table-row-break">Table content splits across pages</h2> 

<p>If your table content can’t fit on a page it will overflow to the next page. So now the row is essentially split straddling both pages. If you don’t want table rows breaking across two pages like this then there is an option you can apply to push the whole row affected down to the next page. This can be useful where it’s important to keep information together.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table row row break over pages.png' | url }}"  alt="Table row breaking over pages" style="height:65%; width:65%; vertical-align:middle">

<p><strong>Right click</strong> anywhere on the table and select <strong>Table Properties</strong>.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties.png' | url }}"  alt="Table Properties" style="height:20%; width:20%; vertical-align:middle">

<p>In Table Properties under the <strong>Row</strong> tab the option <strong>Allow row to break across pages</strong> will be checked by default, <strong>uncheck it</strong>, then press OK.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties row break across pages option.png' | url }}"  alt="Table properties row break across pages option" style="height:40%; width:40%; vertical-align:middle">

Now instead of content overflowing the rows move down to the next page instead. It will leave a space on the page before, so consider whether this is what you want. 

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table row not breaking across pages.png' | url }}"  alt="Table row not breaking across pages" style="height:65%; width:65%; vertical-align:middle">

<u>Note</u>: If even with Allow row to break across pages switched on if your content is longer than a page it will overflow to the next page. If that’s happening for you consider <a href="/word/formatting-text/">reducing the font size</a> or <a href="/word/tables/">expanding the column width</a> so it can fit on the previous page.



<h2 id="header-rows-repeat">Header row doesn’t repeat across pages</h2>

<p>If your table is over more than one page and you have a header row you it won't come across to the next page by default. To have the header row appear the top of each page your table extends to is an easy fix.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table with header row.png' | url }}"  alt="Table with header row" style="height:65%; width:65%; vertical-align:middle">

<p>Click on that header row, then <strong>right click</strong> and select <strong>Table properties</strong>.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties.png' | url }}"  alt="Table Properties" style="height:20%; width:20%; vertical-align:middle">

<p>In Table Properties under <strong>Row</strong> check the option <strong>Repeat as header row at the top of each page</strong>, then click <strong>OK</strong>.</p> 
<p><u>Note</u>: If the option is greyed out for you that means you’ve clicked on/selected another row that’s not the header row.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Table properties repeat header row.png' | url }}"  alt="Table properties repeat header row" style="height:40%; width:40%; vertical-align:middle">

<p>Now the header row is applied at the top of each page.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Header row over multiple pages.png' | url }}"  alt="Table with header row" style="height:65%; width:65%; vertical-align:middle">

<h3>Issues you can come across</h3>
<p>Even when <strong>Repeat as header row</strong> is selected, there are other things that might require some surgery for it to work as you need it.</p>


<h2 id="header-rows-unwanted-merged-rows">Table header rows with unwanted merged cells</h2>

<p>Here we’ve got a cell on the right column merged with the header row. When repeating the header row on the next page it's bringing across that second row which we don’t want.</p>

<img class="border" src="{{ '/assets/images/word/Tables fixing tables over pages/Header row merged cell.png' | url }}"  alt="Header row with merged cells over multiple pages" style="height:55%; width:55%; vertical-align:middle">
<img src="{{ '/assets/images/word/Tables fixing tables over pages/Header row merged cell over multiple pages.png' | url }}"  alt="Header row with merged cells over multiple pages" style="height:65%; width:65%; vertical-align:middle">

<p>There’s a few ways we can tackle this:</p>

<ol>
    <li>Do those cells really need to be merged? You can have them separate and alter table formatting of borders and shading to look merged. That was the top row remains a true header row. See Table formatting.</li>
    <li>If you want merged cells to show on some pages but not on others then that’s trickier. Instead it’s better to split your table into different tables and create a new header row matching the last.</li>
</ol>


<h2 id="header-rows-include-subheading-rows">Include subheading rows in repeated table header rows</h2>

<p>In some case you might want to bring across subheadings with repeated header rows. This is really just a case of merging rows. So long as rows are merged with the header row they will appear and <strong>Repeat as header row</strong> is switched on it will be repeated on other pages the table extends to.</p>
<p>You can actually get quite complex with this. In this example below if merged rows touch rows merged with the header row then Word will recognise it as part of the header row.</p>

<img src="{{ '/assets/images/word/Tables fixing tables over pages/Complex header row example.png' | url }}"  alt="Complex header and subheading rows example" style="height:65%; width:65%; vertical-align:middle">
<img src="{{ '/assets/images/word/Tables fixing tables over pages/Complex header row example across pages.png' | url }}"  alt="Complex header and subheading rows example across pages" style="height:65%; width:65%; vertical-align:middle">

