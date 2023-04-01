function solve(r, h) {
  let l = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
  // Math.sqrt(r(2) + h(2)) - slanted height formula
  let area = Math.PI * Math.pow(r, 2) + Math.PI * r * l;
  // π r(2) + π r l - area formula
  let volume = (Math.PI * Math.pow(r, 2) * h) / 3;
  // π ∙ r(2) ∙ h / 3 - volume formula

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
solve(3, 5);
