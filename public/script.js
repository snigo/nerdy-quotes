// eslint-disable-next-line func-names
(function () {
  const messageBox = document.getElementById('messageBox');
  const nextBtn = document.getElementById('nextBtn');

  const DEFAULT_QUOTE = 'git reset --hard 2020';
  const DEFAULT_AUTHOR = 'Nerdy Quotes App';
  const ERROR_QUOTE = 'Even serverless app may very well surf! But not this one...';
  const ERROR_AUTHOR = 'Server Error 500';
  const br = '<br>';

  let typing = false;

  const clear = () => {
    messageBox.innerHTML = '';
  };
  const t = (ms) => new Promise((res) => setTimeout(res, ms));
  const random = (min, max) => Math.floor(min + Math.random() * (max - min));
  const newline = () => {
    messageBox.innerHTML += br;
  };
  const nbsp = () => {
    messageBox.innerHTML += '&nbsp;';
  };
  const appendAuthor = (name) => `\n\n\t\t— ${name}`;
  const type = async (str, author, speedRange = [30, 90]) => {
    if (!str.length) {
      typing = false;
      return undefined;
    }
    typing = true;
    const [min, max] = speedRange;
    const [head, ...rest] = str + (author ? appendAuthor(author) : '');
    switch (head) {
      case '\n':
        newline();
        break;
      case '\t':
        nbsp();
        break;
      default:
        messageBox.innerHTML += head;
    }

    await t(random(min, max));
    type(rest.join(''));
    return undefined;
  };
  const typeDefault = () => type(DEFAULT_QUOTE, DEFAULT_AUTHOR);
  const typeError = () => type(ERROR_QUOTE, ERROR_AUTHOR);

  const handleClick = async () => {
    if (typing) return undefined;
    clear();
    await t(200);
    try {
      const response = await fetch('/api/quote');
      const { quote, author } = await response.json();
      type(quote, author);
    } catch (err) {
      typeError();
    }
    return undefined;
  };

  nextBtn.addEventListener('click', handleClick);

  setTimeout(typeDefault, 200);
}());
