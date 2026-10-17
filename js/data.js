import {getRandomInteger, getRandomArrayElement} from './util.js';

const MESSAGES = [
  'В целом всё неплохо.',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вероника',
  'Кирилл',
  'Виктория',
  'Диана',
  'Астемир',
  'Александр',
  'Алика',
  'Роман',
];

const DESCRIPTIONS = [
  'Прекрасный день.',
  'Утренний кофе.',
  'Лучшие моменты.',
  'Закат на побережье.',
];

const createMessage = () => {
  const sentencesCount = getRandomInteger(1, 2);

  if (sentencesCount === 1) {
    return getRandomArrayElement(MESSAGES);
  }

  const firstSentence = getRandomArrayElement(MESSAGES);
  let secondSentence = getRandomArrayElement(MESSAGES);

  while (secondSentence === firstSentence) {
    secondSentence = getRandomArrayElement(MESSAGES);
  }

  return `${firstSentence} ${secondSentence}`;
};

let commentId = 1;

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = Array.from({ length: commentsCount }, createComment);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments,
  };
};

const photos = [];

for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto(i));
}

export {createPhoto};
