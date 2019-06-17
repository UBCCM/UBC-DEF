---
description: Step by step instructions
---

# Contribute a new component

## **Before you start**

{% hint style="info" %}
Answer these questions:
{% endhint %}

* Is this a new component or a customization request for an existing component?  _\[link to customization request xxxxx\]_
* Has this component or something similar already been requested and is in progress? 

  _\[link to backlog xxxxx\]_ 

* Has a request for this component or something similar been rejected?  _\[link to public ticketing system or github requests xxxxx\]_
* Can an existing component\(s\) be used or customized to achieve the same result? _\[link to components page xxxxx\]_

{% hint style="success" %}
Does the new component fulfill these base requirements?
{% endhint %}

## **Considerations**

Is your proposed component:

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Useful</b>
      </th>
      <th style="text-align:left"><b>Unique</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">
        <p><em>It&apos;s not intended for one use case. </em>
        </p>
        <p>Which user storie(s) does this component solve beyond the current need?
          [link to user stories xxxxx]</p>
      </td>
      <td style="text-align:left">
        <p><em>It&apos;s not duplicating existing components.</em>
        </p>
        <p>Does this component replicate something that already exists in this design
          system or is it intended to replace an existing component?</p>
      </td>
    </tr>
  </tbody>
</table>## Design criteria

Does your proposed component fulfill these criteria:

| CRITERIA | DESCRIPTION |
| :--- | :--- |
| **Visually consistent** | It uses existing styles and components in the design system where possible. |
| **Versatile** | It can be applied in different contexts \(ex. responsive, different content types\). |
| **Deliberate** | It has documentation and rationale for its existence. |
| **Accessible** | It has been tested against the design accessibility checklist. |

### Design accessibility checklist

{% hint style="info" %}
Accessibility guidelines are based on the international standard - [Web Content Accessibility Guidelines \(WCAG\)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html#contents). The level of compliance we test against is [AA](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa).
{% endhint %}

#### Colour requirements

* [ ] Don't use other colours than the recommended colour palette and recommended text/background colour combinations. _\[link to colour palette xxxxx\]_
* [ ] Don’t use color alone to convey meaning. Use icons, written content, and other visual elements to reinforce clear communication of the content.
  * [ ] Test what it’s like to view your designs through a [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).
* [ ] Don’t use pure black text on a pure white background. Stark contrast can result in blurred or moving text for people with Irlen syndrome.

--- _Exceptions_

* Color contrast requirements don't apply for logos, text that is part of a logo or incidental graphic elements \(pure decoration, not visible to anyone, or part of a picture that contains significant other visual content\).
* Text that is part of a disabled control states or disabled buttons does not need to meet the minimum contrast ratio.
* To use text over images, add a solid background behind the text or a dark overlay to the image.

_--- Proposing new colours_

Any new colour additions to the recommended palette should be accompanied by:

* [ ] A rationale.
* [ ] Completed test for colour combinations with a tool like [Contrast Grid](http://contrast-grid.eightshapes.com) or [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure the contrast between the text and background is greater than or equal to 4.5:1 for small text \(smaller than 18pt\) and 3:1 for large text \(18pt+\).
* [ ] Completed test with a [color blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/).

> [WCAG 2.0 Reference](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum)

#### Mobile requirements

* [ ] Ensure primary actions are easily reachable with either right or left thumbs.
* [ ] Make touch targets at least 48px, so they can be tapped by the average adult finger pad, which measures 10mm. 
* [ ] In most cases, touch targets should be separated by 8px of space or more to avoid user errors.

## Development criteria

Does your proposed component fulfill these criteria:

| CRITERIA | DESCRIPTION |
| :--- | :--- |
| **Coded** | Components are ready to merge in. |
| **Tested** | It’s been tested and shown to work with supported browsers, assistive technologies and devices. _\[link to supported browsers list xxxxx\]_ |

### Development standards checklist

{% hint style="danger" %}
James + Michael to include below.....
{% endhint %}

### Development accessibility checklist

#### Testing

You've tested your component as follows:

_Screen readers_

* [ ] Through a screen reader to make sure you can land on component controls and that the content is announced in the appropriate order and context is provided \(i.e. labels before form fields, etc.\).
* [ ] To use VoiceOver, the built-in screen reader for Mac, just hit ⌘ + F5. This will start voice narration and display most of the spoken information in a text box. Use alt + control + left/right to navigate a web page and alt + control + space to click on an element. [Help with VoiceOver](https://www.apple.com/voiceover/info/guide/_1124.html).

> _Note:_ behaviors in different screen readers can differ when navigating the same web page. The more comprehensive the testing, the better.

_Keyboard only_

* [ ] Via keyboard only by navigating through the page using the `tab` key or `shift+tab` for going back to your component's interactive elements.
* [ ] Ensured you can reach all interactive elements and trigger them with the `spacebar`, `enter` key, or arrow keys, and ensure that you have designed intentional styles for these states: focus, hover, active, and visited.
* [ ] Checked to see that focus is always visible for interactive elements that are part of your component.
* [ ] If your component triggers an action \(ex. a modal\), you tested to ensure you can back out by using `esc`

