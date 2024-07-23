
function handleDownload(file){
    let a = document.createElement('a');
    a.setAttribute('href',file);
    a.setAttribute('download',"arun_singh_resume")
    a.click();
}
export default handleDownload;