const url = '../progit.pdf';

let pdfDoc = null,
    pageNum= 1,
    pageIsRendering = false,
    PageNumIsPending = null;

const scale = 1.5,
    canvas = document.querySelector("#pdf-render"),
    ctx = canvas.getContext('2d');

// render page
const renderPage = num =>{
    pageIsRendering = true;
    // get page number
    pdfDoc.getPage(num).then(page =>{
        const viewport = page.getViewport({scale});
    })

}

// get document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ =>{
    pdfDoc = pdfDoc_;
    document.querySelector("#page-count").textContent = pdfDoc.numPages;
    renderPage(pageNum)

});