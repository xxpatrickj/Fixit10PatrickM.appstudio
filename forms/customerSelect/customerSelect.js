let allData = []
results = ""
customerSelect.onshow=function(){
let query = "SELECT DISTINCT state FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + query)
    if (req1.status == 200) {
            results = JSON.parse(req1.responseText)
            txtAreaState.value = results
            if (results.length == 0)
                    NSB.MsgBox("There are no companies in that state.")
                  else{
                    let message = ''
                    for (i = 0; i <= results.length - 1; i++)
                      message = message +results[i][0] + "\n"
                      txtAreaState.value = message
                      }
    } else
        NSB.MsgBox("Error: " + req1.status)
    }
    
btnRun.onclick=function(){
      let check = txtAreaEnter.value
      let query = "SELECT * FROM customer WHERE state =" + '"' + check + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=pjm42085&pass=missouri1107&database=pjm42085&query=" + query)

if (req1.status == 200) {
            results = JSON.parse(req1.responseText)
            txtAreaComp.value = results
            if (results.length == 0)
                    NSB.MsgBox("There are no companies in that state.")
                  else{
                    let message = ''
                    for (i = 0; i <= results.length - 1; i++)
                      message = message +results[i] + "\n"
                      txtAreaComp.value = message
                      }
    } else
        NSB.MsgBox("Error: " + req1.status)
    }