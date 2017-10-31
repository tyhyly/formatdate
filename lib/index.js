// 根据当前时间显示一周时间函数
/**
 * @params: date 目前暂时只支持'2016-01-01'格式
 * @return: date~ date+6的一周时间段('2016-01-01~2016-01-07')
 **/
export function formatDateToWeek(date) {
    if (date === '' && date === null) return;
    let newDate = date;
    let [y, m, d] = newDate.split('-');

    let numberDay = Number(d), numberMonth = Number(m), numberYear = Number(y);
    //区分闰年平年函数
    function runYear(year) {
        if (typeof year !== 'number') {
            year = Number(year);
        }
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    //一年中31天的月份
    let m1 = ['01', '03', '05', '07', '08', '10', '12'];
    let year = y, month = m, day = d;
    if (m1.indexOf(m) > -1) {
        //处理当月有31天的月份
        if (numberDay <= 25) {
            day = (6 + numberDay) < 10 ? ('0' + (6 + numberDay)) : (6 + numberDay);
        } else {
            day = '0' + (6 - (31 - numberDay));
            if (m === '12') {
                year = 1 + numberYear;
                month = '01';
            } else {
                month = (1 + numberMonth) < 10 ? ('0' + (1 + numberMonth)) : (1 + numberMonth);
            }
        }
    } else {
        //三十天的月份分为二月（平年28天，闰年29天），其他月
        if (m === '02') {
            if (runYear(numberYear)) {
                //闰年2月29天
                if (numberDay <= 23) {
                    day = (6 + numberDay) < 10 ? ('0' + (6 + numberDay)) : (6 + numberDay);
                } else {
                    month = '03';
                    day = '0' + (6 - (29 - numberDay))
                }
            } else {
                //平年2月28天
                if (numberDay <= 22) {
                    day = (6 + numberDay) < 10 ? ('0' + (6 + numberDay)) : (6 + numberDay);
                } else {
                    month = '03';
                    day = '0' + (6 - (28 - numberDay))
                }
            }
        } else {
            if (numberDay <= 24) {
                day = (6 + numberDay) < 10 ? ('0' + (6 + numberDay)) : (6 + numberDay);
            } else {
                day = '0' + (6 - (30 - numberDay));
                month = (1 + numberMonth) < 10 ? ('0' + (1 + numberMonth)) : (1 + numberMonth);
            }
        }
    }

    let tmp = [String(year), String(month), String(day)];
    return `${date} ~ ${tmp.join('-')}`;
}