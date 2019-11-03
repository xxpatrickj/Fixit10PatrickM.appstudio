
btnInsert.onclick=function(){
  var insertCustomer = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + insertCustomer)
  if (req1.status == 200)
  alert("Customer added successfully")
  else
  alert("Error: " + req1.status)
}