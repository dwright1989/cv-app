
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';


const GeneratePDF = () => {

    html2canvas(document.querySelector("#content")).then(function(canvas) {         
            var imgData = canvas.toDataURL(
                'image/png');              
            var doc = new JsPDF('p', 'px');
            const imgProps= doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save('sample-file.pdf');
        }
    );
};

export default GeneratePDF;