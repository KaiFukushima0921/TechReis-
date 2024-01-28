function changeColor(clickedColor) {
    const redLight = document.querySelector('#red-light');
    const yellowLight = document.querySelector('#yellow-light');
    const greenLight = document.querySelector('#green-light');
  
    switch (clickedColor) {
      case 'red':
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'gray';
        greenLight.style.backgroundColor = 'gray';
        break;
      case 'yellow':
        redLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'gray';
        break;
      case 'green':
        redLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'gray';
        greenLight.style.backgroundColor = 'blue';
        break;
    }
  }
  