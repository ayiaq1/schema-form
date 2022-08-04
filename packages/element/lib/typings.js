/** Unix 时间戳（自 Unix 纪元以来的秒数） */
export var Unix = 'unix';
/** Unix 毫秒时间戳（自 Unix 纪元以来的毫秒数） */
export var UnixValueOf = 'unixValueOf';
/** 返回 Moment 格式 */
export var MOMENT = 'moment';
export var HMS = 'HH:mm:ss';
export var HM = 'HH:mm';
export var EnumDataType = {
  /** HH:mm:ss */
  HMS: HMS,
  /** YYYY:HH:mm:ss */
  YMD: 'YYYY-MM-DD',
  /** YYYY-MM-DD HH:mm:ss */
  YMD_HMS: 'YYYY-MM-DD HH:mm:ss',
  /** YYYY-MM-DD 00:00:00 */
  YMD_START_TIME: 'YYYY-MM-DD 00:00:00',
  /** YYYY-MM-DD 23:59:59 */
  YMD_END_TIME: 'YYYY-MM-DD 23:59:59',
};
/** 给 外部判断type用 */
export var Date_Picker = 'datePicker';
export var Range_Picker = 'rangePicker';
export var Time_Picker = 'timePicker';
export var Time_Range_Picker = 'timeRangePicker';
