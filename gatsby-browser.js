let injected = false;
const style = document.createElement('style');
style.textContent = `
  body {
    padding-left: 0 !important;
    width: 100% !important;
  }
`;

function inject() {
  if (injected)
    return;

  injected = true;
  document.head.appendChild(style);
}

function remove() {
  if (!injected)
    return;

  injected = false;
  document.head.removeChild(style);
}


export function onRouteUpdate({location}) {
  if (location.pathname.includes('/decks/'))
    inject();
  else
    remove();
}
