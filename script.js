//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

const band = document.querySelector('#band');

function stripArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

bands.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  band.appendChild(li);
});
