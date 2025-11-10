sketch = document.querySelector('.sketch')
cell = document.querySelectorAll(".cell")
sizeDisplay = document.querySelector('.size-display')
inputSize = document.getElementById('size')


// Default size
const defaultSize = 16

for (let i = 1; i <= defaultSize ** 2; i++) {
    const defaults = document.createElement('div')
    defaults.classList.add('cell')
    defaults.style.width = `${100 / defaultSize}%`
    defaults.style.height = `${100 / defaultSize}%`
    sketch.appendChild(defaults)

    defaults.addEventListener('mouseover', () => {
        defaults.style.backgroundColor = 'pink'
    })
}

// Random Color
const randomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

// Modify Size 

inputSize.addEventListener('input', () => {
    sizeDisplay.textContent = `${inputSize.value}X${inputSize.value}`
    sketch.innerHTML = ''

    let size = inputSize.value
    for (let i = 1; i <= size ** 2; i++) {
        const newCell = document.createElement('div')
        newCell.classList.add('cell')
        newCell.style.width = `${100 / size}%`
        newCell.style.height = `${100 / size}%`

        newCell.addEventListener('mouseover', () => {
            newCell.style.backgroundColor = randomColor()
        })
        sketch.appendChild(newCell)
    }
})
