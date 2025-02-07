function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|;)" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
  console.log(matches)
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, options) {
  options = {
    path: '/',
    ...options
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  let optionKey;
  for (optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie
}

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1
  })
}