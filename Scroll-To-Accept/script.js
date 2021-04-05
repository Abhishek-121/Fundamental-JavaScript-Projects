const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obsCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    obs.unobserve(terms.lastElementChild);
  }
}
//Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other
const obs = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

obs.observe(terms.lastElementChild);