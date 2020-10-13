/* terser faded-text.js -o faded-text-min.js -c -m */

/**
 * @param { string } idElement
 */
export default function FadedText (idElement) {
  this.id = document.getElementById(idElement).id;
  this.textContent = document.getElementById(idElement).textContent;
}

/**
 * @param { number } textDuration
 * @param { number } charDuration
 * @param { number } delay
 */
FadedText.prototype.charFadeIn = function (textDuration = 1000, charDuration =
  1000, delay = 0) {
  let id = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    [...this.textContent].map((c, i) => '<span id="' + this.id + '-' + id +
      '-' + i + '" style="opacity: 0; transition: ' + charDuration + 'ms">' +
      c + '</span>').join('');
  [...this.textContent].forEach((c, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + id + '-' + i).style.opacity = '1',
    Math.floor(Math.random() * textDuration) + delay));
}

/**
 * @param { number } textDuration
 * @param { number } charDuration
 * @param { number } delay
 */
FadedText.prototype.charFadeOut = function (textDuration = 1000, charDuration =
  1000, delay = 0) {
  let id = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    [...this.textContent].map((c, i) => '<span id="' + this.id + '-' + id +
      '-' + i + '" style="opacity: 1; transition: ' + charDuration + 'ms">' +
      c + '</span>').join('');
  [...this.textContent].forEach((c, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + id + '-' + i).style.opacity = '0',
    Math.floor(Math.random() * textDuration) + delay));
}

/**
 * @param { number } textDuration
 * @param { number } wordDuration
 * @param { number } delay
 */
FadedText.prototype.wordFadeIn = function (textDuration = 1000, wordDuration =
  1000, delay = 0) {
  let id = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    this.textContent.split(' ').map((w, i) => '<span id="' + this.id + '-' +
      id + '-' + i + '" style="opacity: 0; transition: ' + wordDuration +
      'ms">' + w + '&nbsp</span>').join('');
  this.textContent.split(' ').forEach((w, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + id + '-' + i).style.opacity = '1',
    Math.floor(Math.random() * textDuration) + delay));
}

/**
 * @param { number } textDuration
 * @param { number } wordDuration
 * @param { number } delay
 */
FadedText.prototype.wordFadeOut = function (textDuration = 1000, wordDuration =
  1000, delay = 0) {
  let id = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    this.textContent.split(' ').map((w, i) => '<span id="' + this.id + '-' +
      id + '-' + i + '" style="opacity: 1; transition: ' + wordDuration +
      'ms">' + w + '&nbsp</span>').join('');
  this.textContent.split(' ').forEach((w, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + id + '-' + i).style.opacity = '0',
    Math.floor(Math.random() * textDuration) + delay));
}
