const container = document.querySelector('#container');

numSquare = 16;
generateGrid(numSquare);

function generateGrid(numSquare) {
    for (let i = 0; i < numSquare; i++) {

        let gridRow = document.createElement('div');
        let size = 960 / numSquare;



        gridRow.classList.add('gridRow');

        container.appendChild(gridRow);
        for (let i = 0; i < numSquare; i++) {


            let gridElement = document.createElement('div');

            gridElement.classList.add('gridElement');
            gridElement.style.height = `${size}px`;
            gridElement.style.width = `${size}px`;

            gridElement.addEventListener('mouseover', () => {
                gridElement.classList.add('black');

            });
            gridRow.appendChild(gridElement);


        }

    }
}



const reset = function reset() {
    container.innerHTML = '';
    let no = prompt('Enter Number of square per side');
    generateGrid(no);

}