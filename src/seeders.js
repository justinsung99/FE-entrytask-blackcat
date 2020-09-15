import faker from 'faker';

const seed = 2402;
export function generatePostList() {
  faker.seed(seed);
  // {
  //   user: {
  //     avatar: "",
  //     username: "",
  //     channel_name: ""
  //   },
  //   post_title: "",
  //   post_pic: '',
  //   date_start: "",
  //   date_end: "",
  //   description: "",
  //   going_count: 0,
  //   like_count: 0
  // }
  let postList = [];
  for (let id = 1; id <= 5; id++) {
    let avatar = faker.internet.avatar();
    let username = faker.internet.userName();
    let channel_name = faker.internet.domainName();
    let post_title = faker.lorem.sentence();
    let date_start = tsToDate(faker.date.past());
    let date_end = tsToDate(faker.date.future());
    let description = faker.lorem.paragraph();
    let post_pic = faker.image.image();

    postList.push({
      id: id,
      user: {
        avatar: avatar,
        username: username,
        channel_name: channel_name,
      },
      post_title: post_title,
      post_pic: post_pic,
      date_start: date_start,
      date_end: date_end,
      description: description,
      going_count: faker.random.number(),
      like_count: faker.random.number(),
    });
  }

  return postList;
}

function tsToDate(epoch) {
  const numToMonth = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  const t = new Date(epoch);
  const minutes = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes();
  const hours = t.getHours() < 10 ? `0${t.getHours()}` : t.getHours();

  return `${t.getDate()} ${numToMonth[t.getMonth()]} ${t.getFullYear()} ${hours}:${minutes}`;
}
