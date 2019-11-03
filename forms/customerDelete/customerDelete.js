let allData2 = []
custResults = ""

customerDelete.onshow=function(){
  let query1 = "SELECT * FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + query1)
    if (req1.status == 200) {
            custResults = JSON.parse(req1.responseText)
            for (i=0; i < allData2.length; i++)
            custResults = custResults + allData2[i][1] + "\n"
            txtAreaCustomers.value = custResults
  }

}
btnDelete.onclick=function(){
  let custDelete = inptCustomer.value
  let success = false
  for (i = 0; i < allData2.length; i++) {
    if (custDelete == allData2[i][1])
      success = true
}
if (success == false) {
  txtAreaComp2.value = "This customer is not in the list"
} else if(success == true){
  let customerDel = "DELETE FROM customer WHERE name = " + '"' + custDelete + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + customerDel)
            if (req1.status == 200) {
            txtAreaComp2.value = "You have deleted " + custDelete
          elseif(req1.status += 200)
            txtAreaComp2 = "Error deleting customer " + custDelete
        }
              }
            }
          