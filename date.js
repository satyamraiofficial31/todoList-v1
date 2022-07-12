exports.getDate=function(){
  const today=new Date();
  //var currentDay=today.getDay();
  const options={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const day=today.toLocaleDateString("en-US",options);
  return day;
}
//if you want only the day to be displayed
exports.getDay=function(){
  const today=new Date();
  //var currentDay=today.getDay();
  const options={
    weekday: "long"
  };
  const day=today.toLocaleDateString("en-US",options);
  return day;
}
