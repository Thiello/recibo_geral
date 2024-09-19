document.getElementById('generatePDF').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;

    if (!jsPDF) {
        console.error('jsPDF não está disponível.');
        return;
    }

    // Coleta os valores do formulário
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const quantity = document.getElementById('quantity').value;
    const invoiceValue = document.getElementById('invoiceValue').value;
    const freightValue = document.getElementById('freightValue').value;
    const observations = document.getElementById('observations').value;

    // Cria um novo documento PDF
    const doc = new jsPDF();

    // Adiciona o template da imagem
    doc.addImage('template.png', 'PNG', 0, 0, 210, 297); // Ajuste conforme o tamanho do seu template

    // Define o tamanho e a cor da fonte padrão
    doc.setFontSize(20);
    doc.setTextColor(80, 80, 80); // Cor cinza escuro

    // Adiciona o conteúdo do formulário no PDF com formatação
    doc.text(`NF: ${invoiceNumber}`, 5, 17);

    doc.setFontSize(14); // Ajusta o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro
    doc.text(`Remetente: ${sender}`, 5, 141);

    doc.setFontSize(14); // Mantém o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro
    doc.text(`Destinatário: ${recipient}`, 5, 156);

    doc.setFontSize(14); // Mantém o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro
    doc.text(`Qtd Vol.: ${quantity}`, 5, 171);

    doc.setFontSize(14); // Mantém o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro
    doc.text(`Vlr da NF: R$ ${invoiceValue}`, 5, 186);

    doc.setFontSize(14); // Mantém o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro
    doc.text(`Vlr do Frete: R$ ${freightValue}`, 5, 265);

    doc.setFontSize(14); // Mantém o tamanho da fonte
    doc.setTextColor(80, 80, 80); // Cor cinza escuro

    // Define a largura máxima para a linha de texto
    const pageWidth = doc.internal.pageSize.getWidth() - 10; // Largura da página - margem
    const observationsLines = doc.splitTextToSize(`Observações: ${observations}`, pageWidth);
    
    // Adiciona o texto com quebras de linha
    let yOffset = 216; // Posição inicial para as observações
    observationsLines.forEach(line => {
        doc.text(line, 5, yOffset);
        yOffset += 10; // Ajusta a distância entre linhas
    });

    // Salva o PDF
    doc.save('recibo_pagamento.pdf');
});
