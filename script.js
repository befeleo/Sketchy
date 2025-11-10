sketch = document.querySelector('.sketch')
inputSize = document.getElementById('size')
sizeDisplay = document.querySelector('.size-display')

// Buttons
colorPalette = document.getElementById('color-palette')
randomColorBtn = document.getElementById('random-color')
eraseBtn = document.getElementById('erase')
gridBtn = document.getElementById('grid')
clearBtn = document.getElementById('clear')

// Color
const colors = document.querySelectorAll('.color')

// Default Size

let defaultSize = 16
sizeDisplay.textContent = `${defaultSize}X${defaultSize}`
inputSize.value = defaultSize
for (let i = 1; i <= defaultSize ** 2; i++) {
    const defaults = document.createElement('div')
    defaults.classList.add('cell')
    defaults.style.width = `${100 / defaultSize}%`
    defaults.style.height = `${100 / defaultSize}%`
    sketch.appendChild(defaults)
}

// New Grid
const createCell = () => {
    sketch.innerHTML = ''
    let size = inputSize.value
    sizeDisplay.textContent = `${size}X${size}`
    for (let i = 1; i <= size ** 2; i++) {
        const defaults = document.createElement('div')
        defaults.classList.add('cell')
        defaults.style.width = `${100 / size}%`
        defaults.style.height = `${100 / size}%`
        defaults.style.border = gridEnabled ? '1px solid #ddd' : 'none'
        sketch.appendChild(defaults)
    }

}
inputSize.addEventListener('input', () => {
    createCell();
})

// Add color
let colorPaletteEnabled = true

// const inputColorPalette = () => {


// }

// choseColor() = 'black'
const choseColor = () => {
    colors.forEach(color => {
        color.addEventListener('mouseover', () => {
            // console.log(color.id)
            return color.id
        })
    })
}


const getColorPalette = () => {
    colorPaletteEnabled = !colorPaletteEnabled
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = colorPaletteEnabled ? randomColorGenerate() : choseColor()
    })


}
colorPalette.addEventListener('click', () => {
    getColorPalette()
})

// Add random Color
const randomColorGenerate = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    randomColor = `rgb(${r}, ${g}, ${b})`
    return randomColor
}

let randomColorEnabled = false
let eraseEnabled = false

const getRandomColor = () => {
    randomColorEnabled = !randomColorEnabled
    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (randomColorEnabled)
                cell.style.backgroundColor = randomColorGenerate()
        })
    })
    eraseEnabled = false
    // randomColorBtn.textContent = randomColorEnabled ? 'On' : 'Off'

}
randomColorBtn.addEventListener('click', () => {
    getRandomColor()
})


// Add Grid
let gridEnabled = false

const displayGrid = () => {
    gridEnabled = !gridEnabled
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.border = gridEnabled ? '1px solid #ddd' : 'none'
    })
}

gridBtn.addEventListener('click', () => displayGrid())

// Clear

const clearGrid = () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.style.backgroundColor = '#fff')
}

clearBtn.addEventListener('click', () => clearGrid())


// Erase

const eraseGrid = () => {
    eraseEnabled = !eraseEnabled
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (eraseEnabled)
                cell.style.backgroundColor = '#fff'
        })
    })
    randomColorEnabled = false
    // eraseBtn.textContent = eraseEnabled ? 'On' : 'Off'
}

eraseBtn.addEventListener('click', () => eraseGrid())
