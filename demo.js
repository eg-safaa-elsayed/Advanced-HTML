// Add row of new data to table
function funOfAdd() {
    var nameOfUser = document.getElementById("name")
    var valueOfUserName = nameOfUser.value
    var emailOfUser = document.getElementById("email")
    var valueOfUserEmail = emailOfUser.value
    var passwordOfUser = document.getElementById("password")
    var valueOfUserPassword = passwordOfUser.value

    var tableOfData = document.getElementById("tableData")
    var row = document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    var cell3 = document.createElement("td")

    cell1.innerText = valueOfUserName
    cell2.innerText = valueOfUserEmail
    cell3.innerText = valueOfUserPassword

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tableOfData.appendChild(row);

}