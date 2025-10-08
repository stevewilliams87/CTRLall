---
title: Tables
layout: layout.liquid
permalink: /word/tables/
active: word
---

<h1>Tables</h1>

<section class="section-light">
<h2>Creating tables</h2>
To create a table, select the <strong>Insert</strong> tab on the ribbon, then select <strong>Table</strong>.

<h2>Altering tables</h2>
  <p>Altering tables is straightforward once you know how. Depending on where you hover the cursor the cursor icon will change for different tools to adjust the table or content within.</p>

  <div style="margin: 2rem 0rem 1rem; text-align: left;">
    <p><strong>Hover over a row to see that function in action.</strong></p>
  </div>

  <table class="word-tables-cursor-icons table-row-hover">
    <colgroup>
      <col style="width: 17%;">
      <col style="width: 63%;">
      <col style="width: 20%;">
    </colgroup>
    <thead>
      <tr>
        <th>Function</th>
        <th>Action</th>
        <th>Cursor icon</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/select text example.gif' | url }}">
        <td>Select text in table cell</td>
        <td>Hover over text, then when the cursor icon changes double click to select a word.</td>
        <td><img src="{{ '/assets/images/word/tables/select%20text%20icon.png' | url }}" alt="Selecting text" style="display: block; margin: auto; width: 30px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/select%20cell%20example.gif' | url }}">
        <td>Select whole cell</td>
        <td>Hover just to the right of the left cell border, then click when the cursor icon changes.</td>
        <td><img src="{{ '/assets/images/word/tables/select%20cell%20arrow.png' | url }}" alt="Select cell arrow" style="display: block; margin: auto; width: 30px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/select%20multiple%20cells%20example.gif' | url }}" data-gif-style="max-width:180px;">
        <td>Select multiple cells</td>
        <td>Hold down click and then drag ('click and drag') from one cell to another.</td>
        <td><img src="{{ '/assets/images/word/tables/select%20text%20icon.png' | url }}" alt="Selecting text" style="display: block; margin: auto; width: 30px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/select column example.gif' | url }}">
        <td>Select whole column</td>
        <td>Hover over top of column, then click when the cursor icon changes.</td>
        <td><img src="{{ '/assets/images/word/tables/select%20column%20arrow.png' | url }}" alt="Select column arrow" style="display: block; margin: auto; width: 24px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/select%20table%20example.gif' | url }}">
        <td>Select whole table</td>
        <td>Hover anywhere in the table, then click the square icon that appears in the top right corner.</td>
        <td><img src="{{ '/assets/images/word/tables/select%20table%20square.png' | url }}" alt="Select table icon" style="display: block; margin: auto; width: 50px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/adjust%20column%20width%20example.gif' | url }}">
        <td>Adjust column width</td>
        <td>Hover just to the right of the left cell border, then click and drag when the cursor icon changes.</td>
        <td><img src="{{ '/assets/images/word/tables/adjust%20column%20width.png' | url }}" alt="Adjust column icon" style="display: block; margin: auto; width: 40px;"></td>
      </tr>
      <tr class="tooltip-row" data-gif="{{ '/assets/images/word/tables/adjust%20row%20height%20example.gif' | url }}">
        <td>Adjust row height</td>
        <td>Hover over row border, then click and drag when the cursor icon changes.</td>
        <td><img src="{{ '/assets/images/word/tables/adjust%20row%20height.png' | url }}" alt="Adjust row icon" style="display: block; margin: auto; width: 40px;"></td>
      </tr>
    </tbody>
  </table>

  <div id="gif-tooltip">
    <img src="" alt="Tooltip preview">
  </div>

  <div style="height: 300px;"></div>
</section>
