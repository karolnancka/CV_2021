window.onload = function (){
    document.getElementById("pdf")
        .addEventListener("click",()=>{
            const printDiv = this.document.querySelector(".container");
            //html2pdf().from(printDiv).save();
            let opt = {
                margin: 1,
                image: {type: "jpeg", quality: 0.98},
                html2canvas: {scale: 1},
                jsPDF: { unit: "in", format: "letter"}
            }
            html2pdf().from(printDiv).set(opt).save();

        })
}