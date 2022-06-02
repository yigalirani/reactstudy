import React from 'react';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export function  FileUpload(){
  var [selected,set_selected]=React.useState(null)
  function onChange(e){
    console.log('onChange')
    set_selected(e.target.files[0].name)
    console.log('onChange2')
    getBase64(e.target.files[0]).then(
      data => console.log(data)
    );
  }
  return <div>
    {selected}
    <input type="file" accept=".pdf" {...{onChange}} /> 
  </div>

}
