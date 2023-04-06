function meetings(scheduele) {
  let meetings = {};
  for (const meeting of scheduele) {
    let [meetingDay, person] = meeting.split(" ");
    if (!meetings.hasOwnProperty(meetingDay)) {
      meetings[meetingDay] = person;
      console.log(`Scheduled for ${meetingDay}`);
    } else {
      console.log(`Conflict on ${meetingDay}!`);
    }
  }

  for (let [day, name] of Object.entries(meetings)) {
    console.log(`${day} -> ${name}`);
  }
}
meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);
