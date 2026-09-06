---
title: "How to use the track changes feature in Microsoft Word – Ctrl All"
layout: layout.liquid
permalink: /word/track-changes/
description: Guide to using the track changes feature in a Microsoft Word document.
asset_id: ctrlall-track-changes-v1
date: 2026-07-19
last_modified: 2026-07-19
difficultyLevels:
  - level: Beginner
    description: "Introduces track changes in Microsoft Word documents."
    urlSuffix: "#beginner"
  - level: Intermediate
    description: "Explores track changes in Word documents for intermediate level."
    urlSuffix: "#intermediate"
tags:
  - ctrlall.org
  - ctrlall
  - ctrl all
  - microsoft word
  - track changes
  - commenting
  - make edits
  - track an edit
  - track edits
  - tracking edits
  - highlight an edit
  - highlight edits
  - highlighting edits
  - see an edit
  - see edits
  - seeing edits
  - view an edit
  - view edits
  - viewing edits
  - make changes
  - track a change
  - track changes
  - tracking changes
  - highlight a change
  - highlight changes
  - highlighting changes
  - see a change
  - see changes
  - seeing changes
  - view a change
  - view changes
  - viewing changes
  - leaving track changes
  - add track changes
  - delete track changes
  - approve track changes
  - accept track changes
  - reject track changes
  - deny track changes
  - dismiss track changes
  - Accept all track changes
  - Reject all track changes
  - Lock track changes
  - Lock changes
  - Lock edits
  - Lock tracking
active: word
relatedArticles:
  - url: /word/save-as-pdf/?difficulty=intermediate#pdf-comments-track-changes
    label: "Comments/track changes showing in the PDF"
  - url: /word/comments/
    label: "Comments"
---
<h1>Track changes</h1>

<article class="difficulty-wrapper" role="article" aria-label="Tutorial introducing Microsoft Word track changes feature for beginner and intermediate versions">
<div id="article-badge" class="article-badge beginner">⭐ Beginner Level</div>
<!-- Beginner version -->
<div class="difficulty beginner-version"  aria-label="Beginner introduction to Microsoft Word track changes tool">

  <section class="section-light">
  <h2>What are Track changes?</h2>
    <p>Track changes is a useful tool for making proposed edits to content without directly affecting it in a document. The <strong>Track changes</strong> tool is found under the <strong>Review</strong> tab on the <span class="glossary-hover" data-term="ribbon">ribbon</span>, and when the tool is turned on any edits that you make will be shown with text formatting in red.</p> 
    <p><img class="thumbnail border" src="{{ '/assets/images/word/Track changes/Track changes options.png' | url }}" alt="Example track changes options in Word" style="max-width:254px; width:100%; height:auto; vertical-align:middle"></p>
    <p><img class="thumbnail border" src="{{ '/assets/images/word/Track changes/Example deletion.png' | url }}" alt="Example track changes deletion in Word" style="max-width:742px; width:100%; height:auto; vertical-align:middle"></p>
    <p>The changes can then be accepted or it can be rejected (you don't have to accept it). The document’s content is not changed until those edits are accepted or rejected. See more on this in the <a href="/word/track-changes/?difficulty=intermediate#accept-reject">intermediate</a> version of this article.</p>
    <p>If you add, remove, move or replace content then this will be shown as a change. The example above shows how text is affected but keep in mind track changes can also include images, tables and objects.</p>
    
  <h2>Why use track changes?</h2>
    <p>Track changes are normally used to collaborate with others when editing a document together or when seeking approval. Word allows multiple users to leave edits on the same document. Different users' edits appear in a different colours:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Multiple user edits.png' | url }}" alt="Example multiple user edits to text in Word" style="max-width:662px; width:100%; height:auto; vertical-align:middle"></p>
    <p>Hovering over an edit will show a tooltip of what change has been made, the user who made it and a timestamp:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Multiple user edit hover tooltip.png' | url }}" alt="Example multiple user edits to text in Word" style="max-width:399px; width:100%; height:auto; vertical-align:middle"></p>
  <h2>Types of edits in track changes</h2>
  <h4>Adding content</h4>
    <p>Content that is added is underlined:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example addition.png' | url }}" alt="Example track changes addition in Word" style="max-width:743px; width:100%; height:auto; vertical-align:middle"></p>
  <h4>Removing content</h4>
    <p>Content that is deleted is given strikethrough formatting:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example deletion.png' | url }}" alt="Example track changes deletion in Word" style="max-width:742px; width:100%; height:auto; vertical-align:middle"></p>
  <h4>Replacing content (e.g. selecting existing text and typing over it) </h4>
    <p>When content is replaced Word treats this as a deletion and addition:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example replace deletion and addition.png' | url }}" alt="Example track changes replacing text in Word" style="max-width:743px; width:100%; height:auto; vertical-align:middle"></p>
  <h4>Moving content</h4>
    <p>When text is moved its original position is struck through and underlined double where it is moved to, this is coloured differently to illustrate that the content hasn’t changed, it’s just moved location:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example moved text.png' | url }}" alt="Example track changes moved text in Word" style="max-width:743px; width:100%; height:auto; vertical-align:middle"></p>
    
  </section>
</div>

<!-- Intermediate version -->
<div class="difficulty intermediate-version" aria-label="Intermediate article exploring advanced track changes options in Word" style="display:none;">

  <section class="section-light">
  <ul>
  <li><a href="#views">Views for track changes</a></li>
  <li><a href="#reviewing-pane">View track changes in the Reviewing pane</a></li>
  <li><a href="#accept-reject">Accepting and rejecting track changes</a></li>
  <li><a href="#lock-tracking">Lock tracking</a></li>
  <li><a href="#markup">Deciding what markup should appear</a></li>
  <li><a href="#pdf">Saving as a PDF with track changes</a></li>
  </ul>
  <h2 id="views">Views for track changes</h2>
    <p>Word gives you 4 view displays for review options which are found on the ribbon via <strong>Review > Markup > top right drop down menu</strong>:
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Views.png' | url }}" alt="Review display view options drop down on ribbon in Word" style="max-width:277px; width:100%; height:auto; vertical-align:middle"></p>
    <ul>
      <li><strong>Original</strong> – Previews the document as if all changes were rejected, without rejecting them.</li>
      <li><strong>No Markup</strong> – Previews the document as if all changes were accepted, without accepting them.</li>
      <li><strong>All Markup</strong> – Every change shown inline (underlines, strikethrough, moves) with full comment balloons.</li>
      <li><strong>Simple Markup</strong> – Final text with change bars in the margin; comments as icons only. Word's default view.</li>
    </ul>
    <h2 id="reviewing-pane">View track changes in the Reviewing pane</h2>
    <p>You can review all track changes with the <strong>Reviewing pane</strong> found on the <span class="glossary-hover" data-term="ribbon">ribbon</span> under <strong>Review > Markup</strong> that will display track changes that appears on the left by default. You can dock this any side of the page if you prefer (left/right of the page, above/below the page).</p>
    <p>This will show you who has made what edits in the order they appear on the page. It's useful to see all the edits together than scrolling through a document, especially if it's a large document.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Reviewing pane on ribbon.png' | url }}" alt="Reviewing pane option on ribbon in Word" style="max-width:220px; width:100%; height:auto; vertical-align:middle"></p>
    <img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Reviewing pane.png' | url }}" alt="Reviewing pane showing track changes in Word" style="max-width:250px; width:100%; height:auto; vertical-align:middle">
    <ul>
      <li><strong>Left click</strong> on an edit in the pane and Word will take you to its location.</li> 
      <li>You can also <strong>right click</strong> on an edit and from the <span class="glossary-hover" data-term="right-click-menu">right click menu</span> choose to <strong>Accept</strong> or <strong>Reject</strong> it.</li>
      <li>There is also the option to <strong>Copy Link to Location</strong> if you need to share it.</li>
    </ul>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Reviewing pane right click menu options.png' | url }}" alt="Reviewing pane right click menu options for track changes in Word" style="max-width:301px; width:100%; height:auto; vertical-align:middle"></p>
    <h2 id="accept-reject">Accepting and rejecting track changes</h2>
    <p>Once edits have been made in track changes, they can be accepted or rejected. Using the tracking tools on the <span class="glossary-hover" data-term="ribbon">ribbon</span> you can cycle through all the edits in the document with the <strong>Previous</strong> and <strong>Next</strong> buttons and choose to <strong>Accept</strong> or <strong>Reject</strong> each one.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Track changes options highlighted.png' | url }}" alt="Example track changes options in Word" style="max-width:242px; width:100%; height:auto; vertical-align:middle"></p>
    <p>Alternatively you can <strong>right click</strong> on an edit to bring up the <span class="glossary-hover" data-term="right-click-menu">right-click menu</span> and choose the applicable <strong>Accept</strong> or <strong>Reject</strong> option for that individual edit. This is quicker for specific changes rather than having to cycle through all the edits in the document.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example accept or reject right click menu.png' | url }}" alt="Example track changes accepted deletion in Word" style="max-width:318px; width:100%; height:auto; vertical-align:middle"></p>
    <p>Let's take a look how accepting and rejecting edits works.</p>
    <p>In this paragraph below, track changes has been enabled. The first edit made has been to delete ‘a lot’ from the first line:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example deletion.png' | url }}" alt="Example track changes deletion in Word" style="max-width:742px; width:100%; height:auto; vertical-align:middle"></p>
    <p>If we accept the deletion, the content will be deleted on the page:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example accepted deletion.png' | url }}" alt="Example track changes accepted deletion in Word" style="max-width:743px; width:100%; height:auto; vertical-align:middle"></p>
    <p>Or we can reject the deletion edit which will be removed and the content remains unchanged:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Example rejected deletion.png' | url }}" alt="Example track changes rejected deletion in Word" style="max-width:743px; width:100%; height:auto; vertical-align:middle"></p>
    <h4>Accept All / Reject All changes</h4>
    <p>You can also choose to accept or reject all the track changes in a document in one action. To do this go to the the <span class="glossary-hover" data-term="ribbon">ribbon</span> and click on the <strong>Accept</strong> or <strong>Reject</strong> drop down menu and select <strong>Accept All Changes</strong> or <strong>Reject All Changes</strong>. There's also the option to do these and <strong>stop tracking</strong> at the same time.</p>
    <div class="image-row">
      <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Accept options.png' | url }}" alt="Example track changes accept options in Word" style="max-width:345px; width:100%; height:auto; vertical-align:middle"></p>
      <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Reject options.png' | url }}" alt="Example track changes reject options in Word" style="max-width:386px; width:100%; height:auto; vertical-align:middle"></p>
    </div>
    <h2 id="lock-tracking">Lock tracking</h2>
    <p>You can also lock track changes to stop other users turning it off which would let them then make changes without visibility or approval.</p>
    <p>To lock track changes go to <strong>Track Changes > Lock Tracking</strong>:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Lock Tracking.png' | url }}" alt="Lock tracking option in Word" style="max-width:245px; width:100%; height:auto; vertical-align:middle"></p>
    <p>You'll then be prompted to set up a password, enter this in twice. There is a note to say it's not a security feature which is true, it doesn't stop any one accessing or editing the document. Then click <strong>OK</strong>.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Lock tracking 2.png' | url }}" alt="Lock tracking password prompt in Word" style="max-width:366px; width:100%; height:auto; vertical-align:middle"></p>
    <p>The document will now have track changes locked. No one will be able to accept or reject changes and no one will be able to turn it off. You'll see the options on the Review tab greyed out.</p>
    <h4>Unlock track changes</h4>
    <p>To unlock track changes go to the same path: <strong>Track Changes > Lock Tracking</strong></p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Lock tracking 3.png' | url }}" alt="Locked track changes options greyed out in Word" style="max-width:161px; width:100%; height:auto; vertical-align:middle"></p>
    <p>You'll be prompted for the password entered before, once entered press <strong>OK</strong> and track changes will be unlocked. You'll see the options on the <span class="glossary-hover" data-term="ribbon">ribbon</span> stop being greyed out.</p>
    <p><u>Note</u>: Track changes will unlocked but will still be turned on.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Lock tracking 4.png' | url }}" alt="Unlock tracking password prompt in Word" style="max-width:286px; width:100%; height:auto; vertical-align:middle"></p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Track changes unlocked.png' | url }}" alt="Track changes options on ribbon active after unlocking in Word" style="max-width:248px; width:100%; height:auto; vertical-align:middle"></p>
    <p><u>Note</u>: If a user enters the wrong password they will be met with this message and track changes will remain locked.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Lock tracking 5.png' | url }}" alt="Incorrect password message when attempting to unlock track changes in Word" style="max-width:369px; width:100%; height:auto; vertical-align:middle"></p>
    <h2 id="markup">Deciding what markup should appear</h2>
    <p>You can also decide what markup appears and how.</p>
    <p>On the ribbon click the <strong>Show Markup</strong> drop down menu and you'll be presented with several options including ones under <strong>Balloons</strong>. Balloons are the little margin boxes that show tracked changes in a pane off to the side of the page when they're enabled.</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Balloons menu.png' | url }}" alt="Show markup Balloons menu for track changes viewing options in Word" style="max-width:514px; width:100%; height:auto; vertical-align:middle"></p>
    <p>You can determine what appears here or whether the pane does at all. Hover over the red dots to see what each option does.</p>
    <!-- Page setup Margins... tooltip overlay -->
    <div class="overlay-container">
      <img src="/assets/images/word/Track changes/Balloons menu.png" alt="Show markup Balloons menu for track changes viewing options in Word" class="base-image" data-width="514" data-height="237">
      <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Show-markup-options-tooltip-1" style="top:67px; left:237px;"></div>
      <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Show-markup-options-tooltip-2" style="top:90px; left:237px;"></div>
      <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Show-markup-options-tooltip-3" style="top:118px; left:480px ;"></div>
      <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Show-markup-options-tooltip-4" style="top:144px; left:480px;"></div>
      <div class="hotspot rich-tooltip-trigger" data-tooltip-id="Show-markup-options-tooltip-5" style="top:169px; left:480px;"></div>
    </div>
    <p><u>Note</u>: Insertions always appear inline (underlined on the page) regardless of which balloons option is selected. There's no setting that shows inserted text in a balloon. Deletions and formatting changes are the only edit types that appear in the side pane; that's what <em>Show Revisions in Balloons</em> actually controls.</p>
    <p>On top of this you can decide who's edits appear too via <strong>Show Markup > Specific People</strong>:</p>
    <p><img class="thumbnail border left" src="{{ '/assets/images/word/Track changes/Show markup users.gif' | url }}" alt="Show markup Specific people menu for deciding whose track changes should appear in Word" style="max-width:450px; width:100%; height:auto; vertical-align:middle"></p>
    <h2 id="pdf">Saving as a PDF with track changes</h2>
    <p>When using track changes there's a trap most people fall into when saving the document as a PDF as the comments and track changes show up in the PDF by default.</p>
    <p>As you can see it's quite messy. Unless you have editors who insist on annotating on paper you won't want this. To stop track changes and comments appearing PDFs you need to change settings before saving as a PDF. See this article for how to prevent this: <a href="/word/save-as-pdf/?difficulty=intermediate#pdf-comments-track-changes">Comments/track changes showing in the PDF</a>.</p>
    <img class="thumbnail border" src="{{ '/assets/images/word/Save as PDF/Example track changes in PDF.png' | url }}" alt="PDF with comments" style="max-width:792px; width:100%; height:auto; vertical-align:middle">
    
  
  <!-- Printing — track changes showing or hidden -->
  <!-- bubbles -->

  </section>
</div>
</article>


<div class="article-share">
{% include "share-menu.liquid" %}
</div>


<!-- Global tooltip layer -->
  <div id="tooltip-layer"></div>

  <!-- Tooltip logic -->
  <script>
    const tooltips = {
      "Show-markup-options-tooltip-1": `
        <div class="rich-tooltip">
          <p><strong>Insertions and Deletions</strong>: Shows balloons in a side pane to the side of the page for all revisions made to the content.</p>
        </div>`,
      "Show-markup-options-tooltip-2": `
        <div class="rich-tooltip">
          <p><strong>Formatting</strong>: Toggles whether formatting changes are shown at all, on the page and in any balloons.</p>
        </div>`,
      "Show-markup-options-tooltip-3": `
        <div class="rich-tooltip">
          <p><strong>Show Revisions in Balloons</strong>: Shows balloons in a side pane to the side of the page for all revisions made to the content.</p>
        </div>`,
      "Show-markup-options-tooltip-4": `
        <div class="rich-tooltip">
          <p><strong>Show All Revisions Inline</strong>: Will not show a side pane against the page, essentially turning off the balloons feature.</p>
        </div>`,
      "Show-markup-options-tooltip-5": `
        <div class="rich-tooltip">
          <p><strong>Show Only Formatting in Balloons</strong>: Will only show formatting balloons in the pane.</p>
        </div>`
    };

document.querySelectorAll('.rich-tooltip-trigger').forEach(trigger => {
  const id = trigger.dataset.tooltipId;
  const layer = document.getElementById('tooltip-layer');

  trigger.addEventListener('mouseenter', () => {
    if (!tooltips[id]) return;

    // clear previous
    layer.innerHTML = '';

    // build tooltip
    const wrapper = document.createElement('div');
    wrapper.innerHTML = tooltips[id];
    const tooltip = wrapper.firstElementChild;

    // position tooltip near hotspot
    const rect = trigger.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.top = `${rect.top + (rect.height / 2)}px`;
    tooltip.style.left = `${rect.right + 10}px`;
    tooltip.style.display = 'block';

    // rely on CSS for max-width and wrapping
    tooltip.style.maxWidth = "400px";

    // add to layer
    layer.appendChild(tooltip);

    // keep visible while hovering tooltip
    tooltip.addEventListener('mouseenter', () => {
      tooltip.classList.add('visible');
    });
    tooltip.addEventListener('mouseleave', () => {
      tooltip.remove();
    });
  });

  trigger.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('#tooltip-layer .rich-tooltip');
    if (tooltip) {
      // delay so you can move into tooltip
      setTimeout(() => {
        if (!tooltip.matches(':hover')) {
          tooltip.remove();
        }
      }, 150);
    }
  });
});
</script>
