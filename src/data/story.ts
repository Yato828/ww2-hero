export const fullName = 'Зинаида Михайловна Туснолобова-Марченко';

export type SourceId = 'source-archive' | 'source-city' | 'source-letter' | 'source-photo';

export interface HistoricalSource {
  id: SourceId;
  title: string;
  description: string;
  url: string;
}

export const sources: HistoricalSource[] = [
  {
    id: 'source-archive',
    title: 'Городской архив Кемерова',
    description: 'Добровольный уход в армию в 1942 году, боевой путь и даты награждения.',
    url: 'https://gorarhiv.kemerovo.ru/tpost/isgfl8g991-mm-nosov-starshii-leitenant-v-tanke-s-na',
  },
  {
    id: 'source-city',
    title: 'Администрация Ленинска-Кузнецкого',
    description: 'Биография: 128 спасённых бойцов, письмо фронту и послевоенная жизнь.',
    url: 'https://leninsk.kemobl.ru/city/people/heroes_su/5680/',
  },
  {
    id: 'source-letter',
    title: '«Медсанбат» · ЦНИИОИЗ Минздрава России',
    description: 'Текст письма из книги «Герои в белых халатах».',
    url: 'https://medsanbat.mednet.ru/page68528883.html',
  },
  {
    id: 'source-photo',
    title: 'Архивный портрет, 1941 год · Wikimedia Commons',
    description: 'Автор неизвестен. Общественное достояние согласно карточке файла.',
    url: 'https://commons.wikimedia.org/wiki/File:Zinaida_Tusnolobova-Marchenko,_1941.jpg',
  },
];

export interface TimelineEvent {
  id: string;
  year: string;
  dateTime?: string;
  chapter: string;
  title: string;
  description: string;
  detailTitle: string;
  detail: string;
  sourceId: SourceId;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'the-choice',
    year: '1941–1942',
    chapter: 'Выбор',
    title: 'Быть там, где нужна помощь',
    description: 'С началом войны Зинаида решает стать медсестрой. Окончив курсы, в 1942 году добровольно уходит в Красную армию. Её частью становится 849-й стрелковый полк 303-й стрелковой дивизии.',
    detailTitle: 'Из мирной жизни — на передовую',
    detail: 'До войны она работала лаборанткой-химиком в Ленинске-Кузнецком. Медицинская подготовка дала ей возможность помогать раненым и выносить бойцов из-под огня.',
    sourceId: 'source-archive',
  },
  {
    id: 'saving-lives',
    year: '1942–1943',
    chapter: 'Передовая',
    title: '128 спасённых жизней',
    description: 'Восемь месяцев боёв. Под огнём противника Зинаида перевязывает раны и выносит с поля боя 128 бойцов и командиров. Возвращается за теми, кто не может идти сам.',
    detailTitle: 'Мужество фронтовой медсестры',
    detail: 'Её боевой путь связан с Воронежским фронтом. За спасение раненых Зинаида награждена орденами Красной Звезды и Красного Знамени.',
    sourceId: 'source-city',
  },
  {
    id: 'the-hardest-battle',
    year: 'Февраль 1943',
    dateTime: '1943-02-02',
    chapter: 'Испытание',
    title: 'Самый тяжёлый бой',
    description: '2 февраля у станции Горшечное Зинаида спешит на помощь раненому командиру и сама получает тяжёлое ранение. После долгих часов на морозе её находят разведчики. Обморожение и повреждения приводят к ампутации рук и ног.',
    detailTitle: 'Научиться жить заново',
    detail: 'В госпитале начинается длительное лечение. После операций Зинаида заново осваивает повседневные действия, учится писать с помощью специального приспособления. Её поддерживают врачи и близкие.',
    sourceId: 'source-letter',
  },
  {
    id: 'letter-to-the-front',
    year: 'Май 1944',
    dateTime: '1944-05',
    chapter: 'Слово',
    title: 'Письмо, услышанное фронтом',
    description: 'Из госпиталя Зинаида обращается к воинам 1-го Прибалтийского фронта. Её письмо находит тысячи откликов. На танках и самолётах появляется надпись «За Зину Туснолобову!».',
    detailTitle: 'Три тысячи ответов',
    detail: 'На обращение приходит более трёх тысяч писем с фронта. Бойцы поддерживают Зинаиду, пишут о своей жизни и обещают приблизить Победу.',
    sourceId: 'source-city',
  },
  {
    id: 'life-goes-on',
    year: 'После войны',
    chapter: 'Любовь и жизнь',
    title: 'Будущее, в которое она верила',
    description: 'Вместе с мужем Иосифом Марченко Зинаида живёт в Полоцке, воспитывает детей и участвует в общественной жизни. В 1957 году ей присвоено звание Героя Советского Союза, в 1965-м — вручена медаль Флоренс Найтингейл.',
    detailTitle: 'Признание подвига',
    detail: 'Указ о присвоении звания Героя датирован 6 декабря 1957 года. Медаль Международного комитета Красного Креста отмечает её мужество и преданность делу спасения людей.',
    sourceId: 'source-archive',
  },
];

// Подлинный фрагмент письма. Текст и источник хранятся вместе.
export const letterQuote = {
  text: 'Я была вашим товарищем, шла с вами в одном ряду. Теперь я не могу больше сражаться.',
  emphasis: 'И я прошу вас: отомстите!',
  attribution: 'Зинаида Туснолобова',
  date: 'Май 1944 года',
  sourceUrl: 'https://medsanbat.mednet.ru/page68528883.html',
};
