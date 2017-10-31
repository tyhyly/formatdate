# formatdate
format date to custom style, show one week, one quarter, etc. for example, format '2016-01-01' to '2016-01-01~2016-01-07'
### feature function

1、formatDateToWeek function
* input  "2016-01-01"
* output  "2016-01-01~2016-01-07"
* remarks: input time is starttime

2、formatDateToQuarter function
* input "2016-01-01"
* output "2016年Q1"

3、formatDateToMonth function
* input "2016-01-01"
* output "2016年01月"

### usage

import {formatDateToQuarter} from 'format-date-to-week';
```
let inputDate = '2016-01-01';
let outputDate = formatDateToQuarter(inputDate);
console.log(outputDate);// '2016年Q1'
```


