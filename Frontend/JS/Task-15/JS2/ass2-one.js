let msgPrompt =prompt("Print Number From – To","Example: 5-20").split("-") .map(Number).sort((a, b) => a - b);
for(let i=msgPrompt[0]; i<=msgPrompt[1];i++){
    document.write(`${i}<br>`);
}
