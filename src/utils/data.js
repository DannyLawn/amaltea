const discounts = {
    firstLevel: 0.95,
    secondLevel: 0.9
}

const products = [
    {
        name: 'Комфорт ЛОГО. Программно-индикаторное устройство для обучения навыкам саморегуляции, коррекции психоэмоционального состояния и речевых нарушений методом БОС (индикатор компьютерный «УСО-01» с ПО «КОМФОРТ-ЛОГО»)',
        price: 285000,
        _key: [4,3,5],
        count: 0,
        id: "0001",
        section: 1
    },
    {
        name: 'ТОНУС. Программно-индикаторный комплекс для коррекции нарушений опорно-двигательного аппарата методом БОС (индикатор компьютерный «УСО-01» с ПО «Тонус»)',	
        price: 485000,
        _key: [7],
        count: 0,
        id: "0067",
        section: 1
    },
    {
        name: 'Компьютерный комплекс (ноутбук, колонки, мышь)',
        price: 50000,
        _key: [5,7],
        count: 0,
        id: "0064",
        section: 1
    },
    {
        name: 'НЕЙРОКУРС Программно-индикаторное устройство для коррекции психоэмоционального состояния, нарушений внимания и аддиктивного поведения методом БОС (индикатор компьютерный «УСО-01» с ПО «Нейрокурс»)',	
        price: 485000,
        _key: [3,6],
        count: 0,
        id: "0022",
        section: 1
    },
    {
        name: 'Компьютерный комплекс (ноутбук, дополнительный монитор, колонки, мышь)',	
        price: 65000,
        _key: [6],
        count: 0,
        id: "0066",
        section: 1
    },
    {
        name: 'Консультационный  онлайн-семинар «Аппаратно-программные комплексы на основе технологии функционального биоуправления с биологической обратной связью (БОС)»',
        price: 0,
        _key: [5,6,7],
        count: 0,
        id: "0065",
        section: 1
    },
    {
        name: 'Интерактивное зеркало логопеда 28"',	
        price: 139900,
        _key: [4],
        count: 0,
        id: "0002",
        section: 2,
        subsection: 'mirror'
    },
    {
        name: 'Интерактивное зеркало логопеда 33"',	
        price: 189900,
        _key: [4],
        count: 0,
        id: "0003",
        section: 2,
        subsection: 'mirror'
    },
    {
        name: 'Интерактивное зеркало логопеда 28" со встроенным ПК',	
        price: 219900,
        _key: [4],
        count: 0,
        id: "0004",
        section: 2,
        subsection: 'mirror'
    },
    {
        name: 'Интерактивное зеркало логопеда 33" со встроенным ПК',	
        price: 269900,
        _key: [4],
        count: 0,
        id: "0005",
        section: 2,
        subsection: 'mirror'
    },
    {
        name: 'Интерактивный стол логопеда «ВиЭль»',	
        price: 254000,
        _key: [4, 11],
        count: 0,
        id: "0006",
        section: 2,
        subsection: 'table'
    },
    {
        name: 'ИБИС. Тренажер напульсный для тренировки диафрагмального дыхания',	
        price: 95000,
        _key: [4,3,11,10],
        count: 0,
        id: "0007",
        section: 2
    },
    {
        name: 'КОЛИБРИ.Тренажер зрительной координации и внимания по движению глаз',	
        price: 88000,
        _key: [4,3,10],
        count: 0,
        id: "0008",
        section: 2
    },
    {
        name: 'МОБИ «ДУЭТ». Программно-методический комплекс с видеобиоуправлением',	
        price: 69000,
        _key: [4,3,11,10],
        count: 0,
        id: "0009",
        section: 2,
        subsection: 'videobio'
    },
    {
        name: 'МОБИ «ЗНАЙКА». Программно-методический комплекс с видеобиоуправлением',	
        price: 64000,
        _key: [4,11],
        count: 0,
        id: "0010",
        section: 2,
        subsection: 'videobio'
    },
    {
        name: 'Логопедическое обследование детей. Полная и экспресс диагностика (Методика В.М. Акименко)',	
        price: 52900,
        _key: [4],
        count: 0,
        id: "0011",
        section: 3
    },
    {
        name: 'Методика «Развитие и коррекция речи детей 4-8 лет» (Методика В.М. Акименко)',	
        price: 45300,
        _key: [4],
        count: 0,
        id: "0012",
        section: 3
    },
    {
        name: 'Методика профилактики и коррекции четырех видов дисграфии «Море Словесности»',	
        price: 74700,
        _key: [4],
        count: 0,
        id: "0013",
        section: 3
    },
    {
        name: 'Тренажер-корректор зеркального письма “Почерк Леонардо”',	
        price: 52700,
        _key: [4,3,11,10],
        count: 0,
        id: "0014",
        section: 3
    },
    {
        name: 'СЕНСОРИКА 7. «Предметный мир в картинках»',	
        price: 11500,
        _key: [4,3],
        count: 0,
        id: "0015",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'СЕНСОРИКА 7. «Сказки»',	
        price: 10900,
        _key: [4,3],
        count: 0,
        id: "0016",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'СЕНСОРИКА 7. «Свойства предметов»',	
        price: 14300,
        _key: [4,3],
        count: 0,
        id: "0017",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'СЕНСОРИКА 7. «Тактильное домино»',	
        price: 15800,
        _key: [4,3],
        count: 0,
        id: "0018",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'Коррекционно-развивающий комплект «Сенсорные пластины»',	
        price: 17400,
        _key: [4,3],
        count: 0,
        id: "0019",
        section: 3
    },
    {
        name: 'Тест тревожности Р. Тэммл, М. Дорки и Ф. Амен. Авторское руководство В. М. Астапова',	
        price: 7100,
        _key: [4,3,11],
        count: 0,
        id: "0020",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика развития понятийных форм мышления (методика В. М. Астапова) ПКОиТ',	
        prices: [7100, 8600, 12800],
        price: 7100,
        option: 'local',
        _key: [4,3,11],
        count: 0,
        id: "0021",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'БАЛАНС. Тренажер для формирования двигательных навыков по опорной реакции методом ФБУ-БОС',	
        price: 157000,
        _key: [3,11,10],
        count: 0,
        id: "0023",
        section: 2
    },
    {
        name: 'МОБИ «СОЛО». Программно-методический комплекс с видеобиоуправлением',	
        price: 71000,
        _key: [3,11,10],
        count: 0,
        id: "0024",
        section: 2,
        subsection: 'videobio'
    },
    {
        name: 'МОБИ «МАЛЫШ». Программно-методический комплекс с видеобиоуправлением',	
        price: 63000,
        _key: [3,11],
        count: 0,
        id: "0025",
        section: 2,
        subsection: 'videobio'
    },
    {
        name: 'МОБИ «ЛЭНД». Тренажер слухомоторной координации и внимания',	
        price: 75000,
        _key: [3,11,10],
        count: 0,
        id: "0026",
        section: 2,
        subsection: 'videobio'
    },
    {
        name: 'Психолого-педагогическая диагностика познавательного развития детей раннего возраста 2-3 лет.(Методика Е. А. Стребелевой)',	
        price: 21800,
        _key: [3],
        count: 0,
        id: "0027",
        section: 3
    },
    {
        name: 'Тест Д. Векслера (WPPSI) для исследования интеллекта детей дошкольного возраста 4-6,5 лет, в адаптации М. Н. Ильиной',	
        price: 23900,
        _key: [3],
        count: 0,
        id: "0028",
        section: 3
    },
    {
        name: 'Методики автоматизированного исследования индивидуального латерального профиля. Детская версия',	
        price: 29000,
        _key: [3,11],
        count: 0,
        id: "0029",
        section: 3
    },
    {
        name: 'Методика автоматизированного исследования индивидуального латерального профиля',	
        price: 31000,
        _key: [3,10],
        count: 0,
        id: "0030",
        section: 3
    },
    {
        name: 'Диагностический коррекционно-развивающий комплекс с видеорегистрацией «Песочная терапия»',	
        price: 53900,
        _key: [3,11,10],
        count: 0,
        id: "0031",
        section: 3
    },
    {
        name: 'ПСИХОМОТОРИКА 3. Методика развития и коррекции пространственного мышления "Игры с тенями"',	
        price: 25800,
        _key: [3],
        count: 0,
        id: "0032",
        section: 3,
        subsection: 'psy3'
    },
    {
        name: 'ПСИХОМОТОРИКА 3. Методика диагностики пространственного мышления и моделирующей деятельности',	
        price: 42300,
        _key: [3],
        count: 0,
        id: "0033",
        section: 3,
        subsection: 'psy3'
    }, 
    {
        name: 'ПСИХОМОТОРИКА 3. Методика диагностики и коррекции конструктивной деятельности',	
        price: 25800,
        _key: [3],
        count: 0,
        id: "0034",
        section: 3,
        subsection: 'psy3'
    },
    {
        name: 'СЕНСОРИКА 7. «Знакомство с цветом»',	
        price: 28900,
        _key: [3],
        count: 0,
        id: "0035",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'СЕНСОРИКА 7. «Знакомство с формой»',	
        price: 21500,
        _key: [3],
        count: 0,
        id: "0036",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'СЕНСОРИКА 7. «Сенсорный ящик»',	
        price: 29700,
        _key: [3],
        count: 0,
        id: "0037",
        section: 3,
        subsection: 'touch7'
    },
    {
        name: 'Оценка индивидуального риска аддиктивного поведения у подростков',	
        prices: [9200, 11260, 14560],
        price: 9200,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0038",
        section: 4,
        subsection: 'addiction'
    },
    {
        name: 'Оценка выраженности вероятных видов зависимости у подростков',	
        prices: [12400, 15160, 19760],
        price: 12400,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0039",
        section: 4,
        subsection: 'addiction'
    },
    {
        name: 'Оценка психологических факторов предрасположенности к аддиктивному поведению у подростков',	
        prices: [10800, 13260, 17260],
        price: 10800,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0040",
        section: 4,
        subsection: 'addiction'
    },
    {
        name: 'Оценка психологических факторов предрасположенности к аддиктивному поведению у взрослых',	
        price: 10960,
        _key: [3],
        count: 0,
        id: "0041",
        section: 4,
        subsection: 'addiction'
    },
    {
        name: 'Оценка выраженности вероятных видов зависимости у взрослых',	
        price: 12560,
        _key: [3],
        count: 0,
        id: "0042",
        section: 4,
        subsection: 'addiction'
    },
    {
        name: 'Профориентационная система ПРОФИ-I. Готовность к профессиональному самоопределению в условиях профильного обучения в 5-7 классах. ПКОБПТ',	
        prices: [8600, 10390, 15690],
        price: 8600,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0043",
        section: 4,
        subsection: 'career'
    },
    {
        name: 'Профориентационная система ПРОФИ-II. Новая версия. Профессиональное самоопределение в 7-11 классах. ПКОБПТ',	
        prices: [9300, 11290, 16990],
        price: 9300,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0044",
        section: 4,
        subsection: 'career'
    },
    {
        name: 'Профориентационная система ПРОФИ-III. Новая версия. Первичная профориентация, профотбор и движение персонала',	
        prices: [9500, 11590, 17490],
        price: 9500,
        option: 'local',
        _key: [3],
        count: 0,
        id: "0045",
        section: 4,
        subsection: 'career'
    },
    {
        name: 'Профориентационная система отбора в профильные классы «ПрофильКЛАСС» (Методика Г.В. Резапкиной) ПКОБПТ',	
        prices: [11300, 13800, 20800],
        price: 11300,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0046",
        section: 4,
        subsection: 'career'
    },
    {
        name: 'Диагностика готовности к школьному обучению и адаптация первоклассников. ПКОБПТ',	
        prices: [9700, 11890, 16090],
        price: 9700,
        option: 'local',
        _key: [3,11],
        count: 0,
        id: "0047",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика готовности ко второй ступени обучения и адаптация младших подростков. ПКОБПТ',	
        prices: [8700, 9790, 14590],
        price: 8700,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0048",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика школьной адаптации. ПКОБПТ',	
        prices: [7300, 8290, 12490],
        price: 7300,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0049",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика умственного развития абитуриентов и старшеклассников. ПКОиТ',	
        prices: [7600, 9700, 12290],
        price: 7600,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0050",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика и развитие социальной ответственности подростков. ПКОБПТ',	
        prices: [9000, 11090, 16690],
        price: 9000,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0051",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика умственного развития школьника. ПКОБПТ',	
        prices: [6000, 7600, 9790],
        price: 6000,
        option: 'local',
        _key: [3],
        count: 0,
        id: "0052",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Развитие и коррекция мышления подростков. ПКОБПТ',	
        prices: [7200, 9100, 11590],
        price: 7200,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0053",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Развитие и коррекция мышления младших подростков. ПКОБПТ',	
        prices: [7800, 8390, 12590],
        price: 7800,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0054",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Прогрессивные матрицы Дж. Равена (взрослый, детский). ПКОиТ',	
        prices: [7200, 8400, 11300],
        price: 7200,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0055",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика личностных отклонений подросткового возраста. ПКОБПТ',	
        prices: [9100, 11190, 16790],
        price: 9100,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0056",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Родительско-детские отношения. Новая версия',	
        price: 8800,
        _key: [3],
        count: 0,
        id: "0057",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Диагностика  родительства (методика Р.В. Овчаровой). Новая версия',	
        price: 9800,
        _key: [3],
        count: 0,
        id: "0058",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Многофакторный опросник Р. Кеттелла (взрослый (формы А,В, С), подростковый, детский). ПКОиТ',	
        prices: [8800, 12200, 18400],
        price: 8800,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0059",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Тест Р. Амтхауэра. ПКОиТ',	
        prices: [6800, 7900, 11800],
        price: 6800,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0060",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'Тест Э. Ландольта. ПКОиТ',	
        prices: [5600, 6600, 9900],
        price: 5600,
        option: 'local',
        _key: [3,10],
        count: 0,
        id: "0061",
        section: 4,
        subsection: 'socio'
    },
    {
        name: 'АМАЛТЕЯ. Программно-индикаторный комплекс для психофизиологической подготовки беременных к родам и коррекции психоэмоционального состояния пациенток акушерско-гинекологической практики методом БОС (индикатор компьютерный «УСО-01» с ПО «Амалтея»)',	
        price: 485000,
        _key: null,
        count: 0,
        id: "0062",
        section: 1
    },
    {
        name: 'Универсальный БОС. Коррекция психоэмоционального состояния, логопедический, опорно-двигательный (индикатор компьютерный «УСО-01» с ПО «Тонус», «Нейрокурс», «Комфорт-ЛОГО»)',	
        price: 598000,
        _key: null,
        count: 0,
        id: "0063",
        section: 1
    },
];


const divisions = [
    {
        title: 'КАБИНЕТ ПСИХОЛОГА',
        subtitle: 'комнаты психологической разгрузки, сенсорной комнаты',
        _key: 3
    },
    {
        title: 'КАБИНЕТ ЛОГОПЕДА, ДЕФЕКТОЛОГА',
        subtitle: null,
        _key: 4
    },
    {
        title: 'КЛАСС ЗДОРОВЬЯ МАЛЫШ',
        subtitle: 'интерактивные комплексы для групповых коррекционно-развивающих занятий с детьми дошкольного и младшего школьного возраста',
        _key: 11
    },
    {
        title: 'КЛАСС ЗДОРОВЬЯ',
        subtitle: 'интерактивные комплексы для групповых коррекционно-развивающих занятий со школьниками, студентами',
        _key: 10
    },
    {
        title: '«КОМФОРТ-ЛОГО». КАБИНЕТ БИОЛОГИЧЕСКОЙ ОБРАТНОЙ СВЯЗИ',
        subtitle: 'для предотвращения и коррекции речевых нарушений, обучения навыкам саморегуляции, оптимизации психоэмоционального состояния',
        _key: 5
    },
    {
        title: '«НЕЙРОКУРС». КАБИНЕТ БИОЛОГИЧЕСКОЙ ОБРАТНОЙ СВЯЗИ',
        subtitle: 'для профилактики и коррекции нарушений психоэмоционального состояния, когнитивных нарушений, аддиктивного поведения',
        _key: 6
    },
    {
        title: '«ТОНУС». КАБИНЕТ БИОЛОГИЧЕСКОЙ ОБРАТНОЙ СВЯЗИ',
        subtitle: 'для профилактики и коррекции нарушений опорно-двигательного аппарата',
        _key: 7,
        section: 1
    },
    // {
    //     title: 'КОМПЛЕКС «ЛЕКОТЕКА»',
    //     subtitle: 'для сопровождения детей с проблемами развития и их родителей',
    //     _key: 8
    // },
    // {
    //     title: 'КОМПЛЕКТАЦИЯ ОБОРУДОВАНИЯ',
    //     subtitle: 'в рамках приказов об утверждении перечней средств обучения и воспитания для оснащении новых учреждений дошкольного образования и общеобразовательных организаций',
    //     _key: 9
    // },
    // {
    //     title: 'КОМПЛЕКТАЦИЯ ОБОРУДОВАНИЯ',
    //     subtitle: 'по проектам: «Современная школа», «Поддержка семей, имеющих детей», «Успех каждого ребенка»',
    //     _key: 1
    // },
    // {
    //     title: 'КОМПЛЕКТАЦИЯ ОБОРУДОВАНИЯ',
    //     subtitle: 'для предоставления услуг по социальной и профессиональной реабилитации и абилитации',
    //     _key: 2
    // },
];


const sections = [
    {
        _type: 1,
        mainTitle: 'Аппаратно-программные комплексы биологической обратной связи (БОС)',
    },
    {
        _type: 2,
        mainTitle: 'Интерактивные комплексы для коррекции и развития двигательных навыков, когнитивных функций, дыхания, речи',
        subsection_one: 'mirror',
        subsection_two: 'table',
        subsection_three: 'videobio',
        subsectionTitle_one: 'ИНТЕРАКТИВНОЕ УМНОЕ ЗЕРКАЛО ЛОГОПЕДА (варианты\u00A0комплектации)',
        subsectionTitle_two: 'ИНТЕРАКТИВНЫЙ СТОЛ ЛОГОПЕДА "ВИЭЛЬ"',
        subsectionTitle_three: 'КОМПЛЕКСЫ С ВИДЕОБИОУПРАВЛЕНИЕМ ДЛЯ ТРЕНИРОВКИ ДВИГАТЕЛЬНЫХ НАВЫКОВ И КОГНИТИВНЫХ ФУНКЦИЙ'
    },
    {
        _type: 3,
        mainTitle: 'Методики диагностики, развития и коррекции',
        subsection_one: 'psy3',
        subsection_two: 'touch7',
        subsectionTitle_one: 'ПСИХОМОТОРИКА 3',
        subsectionTitle_two: 'СЕНСОРИКА 7.  Наборы методических материалов для развития и коррекции восприятия детей дошкольного и младшего школьного возраста',
    },
    {
        _type: 4,
        mainTitle: 'Автоматизированная психодиагностика (программа компьютерной обработки и тестирования (ПКОиТ) / программа компьютерной обработки блока психологических тестов (ПКОБПТ))',
        subsection_one: 'addiction',
        subsection_two: 'career',
        subsection_three: 'socio',
        subsectionTitle_one: 'Аддиктивное поведение',
        subsectionTitle_two: 'Профориентация',
        subsectionTitle_three: 'Личностные и интеллектуальные особенности, адаптационные ресурсы, социометрия'
    }
]

export { divisions, products, discounts, sections };