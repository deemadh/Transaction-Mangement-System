** TMS : Transaction Mangement System **
This project gives people a sense of control over their money and help them to manage their incomes and expenses.


**Prerequisites**
 Eclipse-jee , MySql workbench 
 Visual Studio code --> optional 


***Getting started***

-- About MySql --
1. open mySql workbench
2. create a new database 
3. import "TMSproject" sql file  to database and then check that should contains these tables :   
   ( `dictionary` , `dictionaryentries` , `expense` , `frequenttransaction` , `income` , `transaction` ).

*****************************************

-- About eclipse --
4. open eclipse and make sure that should be for java ee development.
5. import TMS_Eclipse folder as  a Maven project.
6. there is a configFile.txt in  src/main/resources , update its information about sql as 
 ( first line : database name
   second line : username
   third line : password )

-->for example in my case was : 
tms2
admin
admin

7. Add tomcat 9.0 to servers and it should work on port 8080 ; in browse you can find it in tools folder.
8. run project as on server.
9. check that there is no erros in console.

****************************************

-- About front folder --
10.install node js ; you can found it in tools folder
11.open cmd and change current directory to TMS-front folder
12. run the command :  npm install
13. run the command :  npm run start 
14. goto to browser and then finally open link that appears in cmd for example in my case was : "http://localhost:8081/"
 