const timeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingWithinWorkday = (workStart, workEnd, meetingStart, duration) => {
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

isMeetingWithinWorkday('08:00', '17:30', '14:00', 90); // true
isMeetingWithinWorkday('8:0', '10:0', '8:0', 120);     // true
isMeetingWithinWorkday('08:00', '14:30', '14:00', 90); // false
isMeetingWithinWorkday('14:00', '17:30', '08:0', 90);  // false
isMeetingWithinWorkday('8:00', '17:30', '08:00', 900); // false
