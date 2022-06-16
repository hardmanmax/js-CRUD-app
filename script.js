let selectedRow = null;

const onFormSubmit = () => {
  if (validate()) {
      var formData = inputHandler();
      if (selectedRow == null)
          addNewRecord(formData);
      else
          updateRecord(formData);
      resetForm();
  }
}
const inputHandler = () => {
  let formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
  return formData;
};

const addNewRecord = (data) => {
  let table = document.getElementById("dataList").getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.dateOfBirth;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML =  `<button onClick="onEdit(this)">Edit</button>
                      <button onClick="onDelete(this)">Delete</button>`;
}

const resetForm = () => {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value= "";
  document.getElementById("dateOfBirth").value = null;
  selectedRow = null
}

const onEdit = (td) => {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("dateOfBirth").value = selectedRow.cells[2].innerHTML;
}

const updateRecord = (formData) => {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.dateOfBirth;
}

const onDelete = (td) => {
  if (confirm('Are you sure you want to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("dataList").deleteRow(row.rowIndex);
      resetForm();
  }
}


const validate = () => {
  isValid = true;
  if (document.getElementById("dateOfBirth").value == null) {
    isValid = false;
    
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
    document.getElementById("fullNameValidationError").classList.add("hide");
  }
  console.log(document.getElementById("dateOfBirth").type);
  return isValid;
}