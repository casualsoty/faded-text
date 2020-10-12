# Faded Text
## Installation
```bash
npm i faded-text
```
## Usage
### Documentation
<table>
    <thead>
        <tr>
            <th>Functions</th>
            <th colspan="3">Arguments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>.charFadeIn()</td>
            <td rowspan="4">
                textDuration (default: 1000)<br>
                Type: Number
            </td>
            <td rowspan="2">
                charDuration (default: 1000)<br>
                Type: Number
            </td>
            <td rowspan="4">
                delay (default: 0)<br>
                Type: Number
            </td>
        </tr>
        <tr>
            <td>.charFadeOut()</td>
        </tr>
        <tr>
            <td>.wordFadeIn()</td>
            <td rowspan="2">
                wordDuration (default: 1000)<br>
                Type: Number
            </td>
        </tr>
        <tr>
            <td>.wordFadeOut()</td>
        </tr>
    </tbody>
</table>

### Example
```html
<div id="idElement">Hello world</div>
```
```javascript
import FadedText from '/faded-text';

const FADED_TEXT = new FadedText('idElement');

FadedText.charFadeIn();
```
![Hello world](https://github.com/knouy/faded-text/blob/master/hello-world.gif)
