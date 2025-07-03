document.addEventListener('DOMContentLoaded', () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado || !usuarioLogado.autorizado || !usuarioLogado.confirmado) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "login.html";
    return;
  }

  // Verifica se o jsPDF está disponível
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("jsPDF não foi carregado corretamente.");
    return;
  }

  const { jsPDF } = window.jspdf;

  document.getElementById('generatePDF').addEventListener('click', () => {
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const quantity = document.getElementById('quantity').value;
    const invoiceValue = document.getElementById('invoiceValue').value;
    const freightValue = document.getElementById('freightValue').value;
    const observations = document.getElementById('observations').value;

    const doc = new jsPDF();

    // ⚠️ Certifique-se que template.png está no mesmo diretório
    doc.addImage('template.png', 'PNG', 0, 0, 210, 297);

    doc.setFontSize(20);
    doc.setTextColor(80, 80, 80);
    doc.text(`NF: ${invoiceNumber}`, 5, 17);

    doc.setFontSize(14);
    doc.text(`Remetente: ${sender}`, 5, 141);
    doc.text(`Destinatário: ${recipient}`, 5, 156);
    doc.text(`Qtd Vol.: ${quantity}`, 5, 171);
    doc.text(`Vlr da NF: R$ ${invoiceValue}`, 5, 186);
    doc.text(`Vlr do Frete: R$ ${freightValue}`, 5, 265);

    const pageWidth = doc.internal.pageSize.getWidth() - 10;
    const observationsLines = doc.splitTextToSize(`Observações: ${observations}`, pageWidth);
    
    let yOffset = 216;
    observationsLines.forEach(line => {
        doc.text(line, 5, yOffset);
        yOffset += 10;
    });

    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 160, 53);

    doc.save('recibo_pagamento.pdf');
  });
});
