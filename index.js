export default function FadedText (element) {
  this.id = element.id;
  this.textContent = element.textContent;
}

/**
 * @param { number } duration
 * @param { number } delay
 */
FadedText.prototype.charFadeIn = function (duration, delay) {
  let temp = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    [...this.textContent].map((c, i) => '<span id="' + this.id + '-' + temp +
      '-' + i + '" style="visibility: hidden">' + c + '</span>').join('');
  [...this.textContent].forEach((c, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + temp + '-' + i).style.visibility =
      'visible', Math.floor(Math.random() * duration) + delay));
}

/**
 * @param { number } duration
 * @param { number } delay
 */
FadedText.prototype.charFadeOut = function (duration, delay) {
  let temp = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    [...this.textContent].map((c, i) => '<span id="' + this.id + '-' + temp +
      '-' + i + '" style="visibility: visible">' + c + '</span>').join('');
  [...this.textContent].forEach((c, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + temp + '-' + i).style.visibility =
      'hidden', Math.floor(Math.random() * duration) + delay));
}

/**
 * @param { number } duration
 * @param { number } delay
 */
FadedText.prototype.wordFadeIn = function (duration, delay) {
  let temp = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    this.textContent.split(' ').map((w, i) => '<span id="' + this.id + '-' +
      temp + '-' + i + '" style="visibility: hidden">' + w +
      '&nbsp</span>').join('');
  this.textContent.split(' ').forEach((w, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + temp + '-' + i).style.visibility =
      'visible', Math.floor(Math.random() * duration) + delay));
}

/**
 * @param { number } duration
 * @param { number } delay
 */
FadedText.prototype.wordFadeOut = function (duration, delay) {
  let temp = Math.random().toString(36).substr(2);
  document.getElementById(this.id).innerHTML =
    this.textContent.split(' ').map((w, i) => '<span id="' + this.id + '-' +
      temp + '-' + i + '" style="visibility: visible">' + w +
      '&nbsp</span>').join('');
  this.textContent.split(' ').forEach((w, i) => setTimeout(() =>
    document.getElementById(this.id + '-' + temp + '-' + i).style.visibility =
      'hidden', Math.floor(Math.random() * duration) + delay));
}
