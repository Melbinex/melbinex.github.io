const DEFAULT_IMAGE = 'img/1.png'
const PICTURES = [
  'img/1.png', 'img/2.png', 'img/3.png',
  'img/4.png', 'img/5.png', 'img/6.png'
]
//ELLEMENST



function toObject(from = {}, to = {}) {
  for (let key in from) {
    let value = from[key]

    if (typeof value === 'object' && value && !Array.isArray(value)) {
      toObject(value, to[key] || (to[key] = {}))
      continue
    }

    to[key] = value
  }

  return to
}

/**
 * @param {string} tagName
 * @param {Partial<HTMLElement> & { parent: HTMLElement, ref(v: HTMLDivElement) => void}} options
 * @param {HTMLElement[]} childs
 */
function createElement(tagName = '', options = {}, childs = []) {
  const element = document.createElement(tagName)

  if (options.parent) {
    if (options.parent instanceof HTMLElement)
      options.parent.appendChild(element)

    delete options.parent
  }

  if (options.ref) {
    if (typeof options.ref == 'function')
      options.ref(element)

    delete options.ref
  }

  toObject(options, element)

  for (let child of childs)
    element.appendChild(child)

  return element
}

function rand(min = 0, max = 2 ** 16 - 1) {
  const { floor, random } = Math
  return floor(random() * (max - min + 1)) + min
}

function randArray(array = []) {
  return array[rand(0, array.length - 1)]
}

function init(length = 5, defaultImage = DEFAULT_IMAGE) {
  /** @type {HTMLImageElement[]} */
  const elementsArray = []

  for (let i = 0; i < length; i++) {
    elementsArray.push(
      createElement('img', {
        style: { width: '100px' },
        src: defaultImage
      })
    )
  }

  return elementsArray
}

/** @param {HTMLImageElement[]} elementsArray */
function resetState(elementsArray = [], defaultImage = DEFAULT_IMAGE) {
  for (let element of elementsArray)
    element.src = defaultImage
}

const elements = init(5)

createElement('div', {
  id: 'elements',
  parent: document.body
}, elements)

createElement('div', {
  id: 'buttons',
  parent: document.body
}, [
  createElement('button', {
    innerText: 'Reset state',
    onclick: () => {
      resetState(elements)
      document.querySelectorAll('li').forEach(el => {
        el.remove()
      })
    }
  }),

  createElement('button', {
    innerText: 'Random state',
    onclick: () => {
      let textInPre = document.createElement('li')
      let textUl = document.getElementById(`pre`)

      const state = []
      for (i = 0; i < 5; i++) {
        state[i] = PICTURES[rand(0, PICTURES.length - 1)]
      }
      state.forEach((e, i) =>
        elements[i] && (elements[i].src = e))


      const count1 = state.reduce((tally, fruit) => {
        tally[fruit] = (tally[fruit] || 0) + 1;
        return tally;
      }, {})
      for (const [key, value] of Object.entries(count1)) {
        let tostr = key;
        let text = tostr.replace('img/', '')
        let text2 = text.replace('.png', '')

        let textinli = createElement('div')
        textinli.textContent = `A cube with the value ${text2}, dropped ${value} time`
        textInPre.appendChild(textinli)
      }
      let textafterli = createElement('span')
      textafterli.textContent = '_________________'
      textInPre.appendChild(textafterli)

      textUl.appendChild(textInPre)
    },

  }),

  createElement('button', {
    innerText: 'Start random',
    onclick: () => {
      let textInPre = document.createElement('li')
      let textUl = document.getElementById(`pre`)

      const elementIndex = rand(0, elements.length - 1)
      const element = elements[elementIndex]

      const imageIndex = rand(0, PICTURES.length - 1)
      const image = PICTURES[imageIndex]

      element.src = image

      let textinli = createElement('div')
      textinli.textContent = `You set in ${elementIndex + 1} cube value ${imageIndex + 1}`
      textInPre.appendChild(textinli)

      let textafterli = createElement('span')
      textafterli.textContent = '_________________'
      textInPre.appendChild(textafterli)

      textUl.appendChild(textInPre)

    }
  })
])



function log(...text) {
  let outText = text.join(' ').trim()

  if (logs.innerText)
    logs.innerText += '\n'

  logs.innerText += outText
  logs.scrollTop = logs.scrollHeight
}


