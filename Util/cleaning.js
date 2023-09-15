function cleaning(text) {
  text = text.replace(/[^a-zA-Z0-9\u0621-\u063A\u0641-\u064Aٱ\s]/g, "");
  text = text.replace(/َٰ/g, "ا");
  text = text.replace(/(آ|إ|أ|ٱ)/g, "ا");
  text = text.replace(/(ة)/g, "ه");
  text = text.replace(/(ئ|ؤ)/g, "ء");

  var starter = 0x660;
  for (var i = 0; i < 10; i++) {
    text = text.replace(
      String.fromCharCode(starter + i),
      String.fromCharCode(48 + i)
    );
  }
  return text;
}

module.exports = cleaning;
