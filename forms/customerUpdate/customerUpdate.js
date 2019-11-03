let allData3 = []

customerUpdate.onshow=function(){
    let query4 = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + query4)
    if (req1.status == 200) {
            allData3 = JSON.parse(req1.responseText)
           txtAreaResults.value = allData3
  }
}




btnUpdate.onclick=function(){
    var oldName = inptOldName.value
    var newName = inptNewName.value
    var updateName = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + updateName)
        if (req1.status == 200) {
            txtAreaResults.value = "Successfully changed name " + oldName
          elseif (req1.status += 200)
            txtAreaResults.value = "Error changing the name " + oldName
            }
          }

btnResults.onclick=function(){
  txtAreaResults.value = ''
  let updatedName = "SELECT name FROM customer"
          req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + updatedName)
    if (req1.status == 200) {
    allData3 = JSON.parse(req1.responseText)
    txtAreaResults.value = allData3
    }
}