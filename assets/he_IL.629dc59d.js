import{aY as s}from"./vendor.f8a4aecc.js";import{r as m}from"./_commonjs-dynamic-modules.0552a654.js";function u(o,_){for(var r=0;r<_.length;r++){const e=_[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in o)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(o,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var n,d,a={},l={get exports(){return a},set exports(o){a=o}};n=l,(d=function(o,_){Object.defineProperty(_,"__esModule",{value:!0}),_.default={_decimalSeparator:".",_thousandSeparator:",",_percentPrefix:null,_percentSuffix:"%",_big_number_suffix_3:"k",_big_number_suffix_6:"M",_big_number_suffix_9:"G",_big_number_suffix_12:"T",_big_number_suffix_15:"P",_big_number_suffix_18:"E",_big_number_suffix_21:"Z",_big_number_suffix_24:"Y",_small_number_suffix_3:"m",_small_number_suffix_6:"\u03BC",_small_number_suffix_9:"n",_small_number_suffix_12:"p",_small_number_suffix_15:"f",_small_number_suffix_18:"a",_small_number_suffix_21:"z",_small_number_suffix_24:"y",_byte_suffix_B:"B",_byte_suffix_KB:"KB",_byte_suffix_MB:"MB",_byte_suffix_GB:"GB",_byte_suffix_TB:"TB",_byte_suffix_PB:"PB",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"MMM dd",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",_duration_millisecond_second:"ss.SSS",_duration_millisecond_minute:"mm:ss SSS",_duration_millisecond_hour:"hh:mm:ss SSS",_duration_millisecond_day:"d'd' mm:ss SSS",_duration_millisecond_week:"d'd' mm:ss SSS",_duration_millisecond_month:"M'm' dd'd' mm:ss SSS",_duration_millisecond_year:"y'y' MM'm' dd'd' mm:ss SSS",_duration_second:"ss",_duration_second_minute:"mm:ss",_duration_second_hour:"hh:mm:ss",_duration_second_day:"d'd' hh:mm:ss",_duration_second_week:"d'd' hh:mm:ss",_duration_second_month:"M'm' dd'd' hh:mm:ss",_duration_second_year:"y'y' MM'm' dd'd' hh:mm:ss",_duration_minute:"mm",_duration_minute_hour:"hh:mm",_duration_minute_day:"d'd' hh:mm",_duration_minute_week:"d'd' hh:mm",_duration_minute_month:"M'm' dd'd' hh:mm",_duration_minute_year:"y'y' MM'm' dd'd' hh:mm",_duration_hour:"hh'h'",_duration_hour_day:"d'd' hh'h'",_duration_hour_week:"d'd' hh'h'",_duration_hour_month:"M'm' dd'd' hh'h'",_duration_hour_year:"y'y' MM'm' dd'd' hh'h'",_duration_day:"d'd'",_duration_day_week:"d'd'",_duration_day_month:"M'm' dd'd'",_duration_day_year:"y'y' MM'm' dd'd'",_duration_week:"w'w'",_duration_week_month:"w'w'",_duration_week_year:"w'w'",_duration_month:"M'm'",_duration_month_year:"y'y' MM'm'",_duration_year:"y'y'",_era_ad:"\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4",_era_bc:"\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1",A:"\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6",P:"\u05D0\u05D7\u05D4\u05F4\u05E6",AM:"\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6",PM:"\u05D0\u05D7\u05D4\u05F4\u05E6","A.M.":"\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6","P.M.":"\u05D0\u05D7\u05D4\u05F4\u05E6",January:"\u05D9\u05E0\u05D5\u05D0\u05E8",February:"\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",March:"\u05DE\u05E8\u05E5",April:"\u05D0\u05E4\u05E8\u05D9\u05DC",May:"\u05DE\u05D0\u05D9",June:"\u05D9\u05D5\u05E0\u05D9",July:"\u05D9\u05D5\u05DC\u05D9",August:"\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",September:"\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",October:"\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",November:"\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",December:"\u05D3\u05E6\u05DE\u05D1\u05E8",Jan:"\u05D9\u05E0\u05D5\u05F3",Feb:"\u05E4\u05D1\u05E8\u05F3",Mar:"\u05DE\u05E8\u05E5",Apr:"\u05D0\u05E4\u05E8\u05F3","May(short)":"\u05DE\u05D0\u05D9",Jun:"\u05D9\u05D5\u05E0\u05D9",Jul:"\u05D9\u05D5\u05DC\u05D9",Aug:"\u05D0\u05D5\u05D2\u05F3",Sep:"\u05E1\u05E4\u05D8\u05F3",Oct:"\u05D0\u05D5\u05E7\u05F3",Nov:"\u05E0\u05D5\u05D1\u05F3",Dec:"\u05D3\u05E6\u05DE\u05F3",Sunday:"\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF",Monday:"\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9",Tuesday:"\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9",Wednesday:"\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9",Thursday:"\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9",Friday:"\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9",Saturday:"\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA",Sun:"\u05D9\u05D5\u05DD \u05D0\u05F3",Mon:"\u05D9\u05D5\u05DD \u05D1\u05F3",Tue:"\u05D9\u05D5\u05DD \u05D2\u05F3",Wed:"\u05D9\u05D5\u05DD \u05D3\u05F3",Thu:"\u05D9\u05D5\u05DD \u05D4\u05F3",Fri:"\u05D9\u05D5\u05DD \u05D5\u05F3",Sat:"\u05E9\u05D1\u05EA",_dateOrd:function(r){var e="th";if(r<11||r>13)switch(r%10){case 1:e="st";break;case 2:e="nd";break;case 3:e="rd"}return e},"Zoom Out":"\u05D4\u05EA\u05DE\u05E7\u05D3",Play:"\u05E0\u05D2\u05DF",Stop:"\u05E2\u05E6\u05D5\u05E8",Legend:"\u05DE\u05E7\u05E8\u05D0","Click, tap or press ENTER to toggle":"",Loading:"\u05D8\u05E2\u05D9\u05E0\u05D4",Home:"\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA",Chart:"","Serial chart":"","X/Y chart":"","Pie chart":"","Gauge chart":"","Radar chart":"","Sankey diagram":"","Flow diagram":"","Chord diagram":"","TreeMap chart":"","Sliced chart":"",Series:"","Candlestick Series":"","OHLC Series":"","Column Series":"","Line Series":"","Pie Slice Series":"","Funnel Series":"","Pyramid Series":"","X/Y Series":"",Map:"","Press ENTER to zoom in":"","Press ENTER to zoom out":"","Use arrow keys to zoom in and out":"","Use plus and minus keys on your keyboard to zoom in and out":"",Export:"\u05D4\u05D3\u05E4\u05E1",Image:"\u05EA\u05DE\u05D5\u05E0\u05D4",Data:"\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",Print:"\u05D4\u05D3\u05E4\u05E1","Click, tap or press ENTER to open":"","Click, tap or press ENTER to print.":"","Click, tap or press ENTER to export as %1.":"",'To save the image, right-click this link and choose "Save picture as..."':"",'To save the image, right-click thumbnail on the left and choose "Save picture as..."':"","(Press ESC to close this message)":"","Image Export Complete":"","Export operation took longer than expected. Something might have gone wrong.":"","Saved from":"",PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"","Use left and right arrows to move selection":"","Use left and right arrows to move left selection":"","Use left and right arrows to move right selection":"","Use TAB select grip buttons or up and down arrows to change selection":"","Use up and down arrows to move selection":"","Use up and down arrows to move lower selection":"","Use up and down arrows to move upper selection":"","From %1 to %2":"\u05DE %1 \u05E2\u05D3 %2","From %1":"\u05DE %1","To %1":"\u05E2\u05D3 %1","No parser available for file: %1":"","Error parsing file: %1":"","Unable to load file: %1":"","Invalid date":""}}(m,a))!==void 0&&(n.exports=d);const f=u({__proto__:null,default:s(a)},[a]);export{f as h};
