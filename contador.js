let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let prefixText = "+ de "; // Texto a ser adicionado antes do valor
    let suffixText = " mil"; // Texto a ser adicionado depois do valor
  
    // Condição para adicionar "%"
    if (endValue === 92) {
      suffixText = "%"; // Limpar o sufixo para não adicionar o "%"
      
    }
    if (endValue === 18) {
      suffixText = " anos"; // Limpar o sufixo para não adicionar o "anos"
      prefixText = " ";
    }

  
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      let displayValue = prefixText + startValue.toString() + suffixText;
      valueDisplay.textContent = displayValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
  
  