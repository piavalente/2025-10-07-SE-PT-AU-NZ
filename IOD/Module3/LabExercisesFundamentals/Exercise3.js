//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')
//0 is FALSE. It will not print

if ("0") console.log('#2 zero is true')     
//will print because anything inside "" is TRUE. The if block will run

if (null) console.log('null is true')
//null is FALSE. It will not print

if (-1) console.log('negative is true')     
//will print because -1 is a non-zero number and it is TRUE. 0 is false. The if bloack will print.

if (1) console.log('positive is true')      
//will print because agai, 1 is a non-zero number and it is TRUE.