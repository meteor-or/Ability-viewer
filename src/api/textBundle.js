function setTextBundle(text) {
  if(typeof(text) !== 'string') return false;

  const text = text.replace(/(\r\n|\n|\r)/gm, '<BR>');
  const arr = text.split('<BR>');
  const textBundle = arr.filter(text => text !== '');
  return textBundle;
}