
function copyToClipboard(str){
  const div = document.createElement('div');
  div.appendChild(document.createElement('pre')).textContent = str;
  div.style.position = 'fixed';
  div.style.left = '-100%';
  document.body.appendChild(div);
  document.getSelection().selectAllChildren(div);
  const result = document.execCommand('copy');
  document.body.removeChild(div);
  return result;
}
