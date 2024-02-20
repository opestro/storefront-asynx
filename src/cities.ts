const cities = [
    {
        "id": 22,
        "commune_name_ascii": "timekten",
        "commune_name": "تيمقتن",
        "daira_name_ascii": "aoulef",
        "daira_name": "أولف",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 6,
        "commune_name_ascii": "bouda",
        "commune_name": "بودة",
        "daira_name_ascii": "adrar",
        "daira_name": "أدرار",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 13,
        "commune_name_ascii": "ouled ahmed timmi",
        "commune_name": "أولاد أحمد تيمي",
        "daira_name_ascii": "adrar",
        "daira_name": "أدرار",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 1,
        "commune_name_ascii": "adrar",
        "commune_name": "أدرار",
        "daira_name_ascii": "adrar",
        "daira_name": "أدرار",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 9,
        "commune_name_ascii": "fenoughil",
        "commune_name": "فنوغيل",
        "daira_name_ascii": "fenoughil",
        "daira_name": "فنوغيل",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 10,
        "commune_name_ascii": "in zghmir",
        "commune_name": "إن زغمير",
        "daira_name_ascii": "zaouiat kounta",
        "daira_name": "زاوية كنتة",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 16,
        "commune_name_ascii": "reggane",
        "commune_name": "رقان",
        "daira_name_ascii": "reggane",
        "daira_name": "رقان",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 17,
        "commune_name_ascii": "sali",
        "commune_name": "سالي",
        "daira_name_ascii": "reggane",
        "daira_name": "رقان",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 18,
        "commune_name_ascii": "sebaa",
        "commune_name": "السبع",
        "daira_name_ascii": "tsabit",
        "daira_name": "تسابيت",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 27,
        "commune_name_ascii": "tsabit",
        "commune_name": "تسابيت",
        "daira_name_ascii": "tsabit",
        "daira_name": "تسابيت",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 21,
        "commune_name_ascii": "tamest",
        "commune_name": "تامست",
        "daira_name_ascii": "fenoughil",
        "daira_name": "فنوغيل",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 20,
        "commune_name_ascii": "tamantit",
        "commune_name": "تامنطيط",
        "daira_name_ascii": "fenoughil",
        "daira_name": "فنوغيل",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 26,
        "commune_name_ascii": "tit",
        "commune_name": "تيت",
        "daira_name_ascii": "aoulef",
        "daira_name": "أولف",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 28,
        "commune_name_ascii": "zaouiet kounta",
        "commune_name": "زاوية كنتة",
        "daira_name_ascii": "zaouiat kounta",
        "daira_name": "زاوية كنتة",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 2,
        "commune_name_ascii": "akabli",
        "commune_name": "اقبلي",
        "daira_name_ascii": "aoulef",
        "daira_name": "أولف",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 4,
        "commune_name_ascii": "aoulef",
        "commune_name": "أولف",
        "daira_name_ascii": "aoulef",
        "daira_name": "أولف",
        "wilaya_code": "01",
        "wilaya_name_ascii": "adrar",
        "wilaya_name": "أدرار"
    },
    {
        "id": 60,
        "commune_name_ascii": "talassa",
        "commune_name": "تلعصة",
        "daira_name_ascii": "abou el hassane",
        "daira_name": "أبو الحسن",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 63,
        "commune_name_ascii": "zeboudja",
        "commune_name": "الزبوجة",
        "daira_name_ascii": "zeboudja",
        "daira_name": "الزبوجة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 41,
        "commune_name_ascii": "el hadjadj",
        "commune_name": "الحجاج",
        "daira_name_ascii": "ouled ben abdelkader",
        "daira_name": "أولاد بن عبد القادر",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 52,
        "commune_name_ascii": "ouled ben abdelkader",
        "commune_name": "أولاد بن عبد القادر",
        "daira_name_ascii": "ouled ben abdelkader",
        "daira_name": "أولاد بن عبد القادر",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 30,
        "commune_name_ascii": "ain merane",
        "commune_name": "عين مران",
        "daira_name_ascii": "ain merane",
        "daira_name": "عين مران",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 37,
        "commune_name_ascii": "breira",
        "commune_name": "بريرة",
        "daira_name_ascii": "beni haoua",
        "daira_name": "بني حواء",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 51,
        "commune_name_ascii": "ouled abbes",
        "commune_name": "أولاد عباس",
        "daira_name_ascii": "oued fodda",
        "daira_name": "وادي الفضة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 48,
        "commune_name_ascii": "oued fodda",
        "commune_name": "وادي الفضة",
        "daira_name_ascii": "oued fodda",
        "daira_name": "وادي الفضة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 34,
        "commune_name_ascii": "beni rached",
        "commune_name": "بني راشد",
        "daira_name_ascii": "oued fodda",
        "daira_name": "وادي الفضة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 45,
        "commune_name_ascii": "herenfa",
        "commune_name": "الهرانفة",
        "daira_name_ascii": "ain merane",
        "daira_name": "عين مران",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 59,
        "commune_name_ascii": "tadjena",
        "commune_name": "تاجنة",
        "daira_name_ascii": "abou el hassane",
        "daira_name": "أبو الحسن",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 43,
        "commune_name_ascii": "el marsa",
        "commune_name": "المرسى",
        "daira_name_ascii": "el marsa",
        "daira_name": "المرسى",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 39,
        "commune_name_ascii": "chlef",
        "commune_name": "الشلف",
        "daira_name_ascii": "chlef",
        "daira_name": "الشلف",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 54,
        "commune_name_ascii": "oum drou",
        "commune_name": "أم الدروع",
        "daira_name_ascii": "chlef",
        "daira_name": "الشلف",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 55,
        "commune_name_ascii": "sendjas",
        "commune_name": "سنجاس",
        "daira_name_ascii": "chlef",
        "daira_name": "الشلف",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 56,
        "commune_name_ascii": "sidi abderrahmane",
        "commune_name": "سيدي عبد الرحمن",
        "daira_name_ascii": "tenes",
        "daira_name": "تنس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 57,
        "commune_name_ascii": "sidi akkacha",
        "commune_name": "سيدي عكاشة",
        "daira_name_ascii": "tenes",
        "daira_name": "تنس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 62,
        "commune_name_ascii": "tenes",
        "commune_name": "تنس",
        "daira_name_ascii": "tenes",
        "daira_name": "تنس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 32,
        "commune_name_ascii": "benibouattab",
        "commune_name": "بني بوعتاب",
        "daira_name_ascii": "el karimia",
        "daira_name": "الكريمية",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 42,
        "commune_name_ascii": "el karimia",
        "commune_name": "الكريمية",
        "daira_name_ascii": "el karimia",
        "daira_name": "الكريمية",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 44,
        "commune_name_ascii": "harchoun",
        "commune_name": "حرشون",
        "daira_name_ascii": "el karimia",
        "daira_name": "الكريمية",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 36,
        "commune_name_ascii": "bouzeghaia",
        "commune_name": "بوزغاية",
        "daira_name_ascii": "zeboudja",
        "daira_name": "الزبوجة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 61,
        "commune_name_ascii": "taougrit",
        "commune_name": "تاوقريت",
        "daira_name_ascii": "taougrit",
        "daira_name": "تاوقريت",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 33,
        "commune_name_ascii": "beni haoua",
        "commune_name": "بني حواء",
        "daira_name_ascii": "beni haoua",
        "daira_name": "بني حواء",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 29,
        "commune_name_ascii": "abou el hassane",
        "commune_name": "أبو الحسن",
        "daira_name_ascii": "abou el hassane",
        "daira_name": "أبو الحسن",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 49,
        "commune_name_ascii": "oued goussine",
        "commune_name": "وادي قوسين",
        "daira_name_ascii": "beni haoua",
        "daira_name": "بني حواء",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 38,
        "commune_name_ascii": "chettia",
        "commune_name": "الشطية",
        "daira_name_ascii": "ouled fares",
        "daira_name": "أولاد فارس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 47,
        "commune_name_ascii": "moussadek",
        "commune_name": "مصدق",
        "daira_name_ascii": "el marsa",
        "daira_name": "المرسى",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 53,
        "commune_name_ascii": "ouled fares",
        "commune_name": "أولاد فارس",
        "daira_name_ascii": "ouled fares",
        "daira_name": "أولاد فارس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 35,
        "commune_name_ascii": "boukadir",
        "commune_name": "بوقادير",
        "daira_name_ascii": "boukadir",
        "daira_name": "بوقادير",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 50,
        "commune_name_ascii": "oued sly",
        "commune_name": "وادي سلي",
        "daira_name_ascii": "boukadir",
        "daira_name": "بوقادير",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 58,
        "commune_name_ascii": "sobha",
        "commune_name": "الصبحة",
        "daira_name_ascii": "boukadir",
        "daira_name": "بوقادير",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 31,
        "commune_name_ascii": "benairia",
        "commune_name": "بنايرية",
        "daira_name_ascii": "zeboudja",
        "daira_name": "الزبوجة",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 46,
        "commune_name_ascii": "labiod medjadja",
        "commune_name": "الأبيض مجاجة",
        "daira_name_ascii": "ouled fares",
        "daira_name": "أولاد فارس",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 40,
        "commune_name_ascii": "dahra",
        "commune_name": "الظهرة",
        "daira_name_ascii": "taougrit",
        "daira_name": "تاوقريت",
        "wilaya_code": "02",
        "wilaya_name_ascii": "chlef",
        "wilaya_name": " الشلف"
    },
    {
        "id": 67,
        "commune_name_ascii": "el beidha",
        "commune_name": "البيضاء",
        "daira_name_ascii": "gueltat sidi saad",
        "daira_name": "قتلة سيدي سعيد",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 73,
        "commune_name_ascii": "gueltat sidi saad",
        "commune_name": "قلتة سيدي سعد",
        "daira_name_ascii": "gueltat sidi saad",
        "daira_name": "قتلة سيدي سعيد",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 69,
        "commune_name_ascii": "brida",
        "commune_name": "بريدة",
        "daira_name_ascii": "brida",
        "daira_name": "بريدة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 66,
        "commune_name_ascii": "ain sidi ali",
        "commune_name": "عين سيدي علي",
        "daira_name_ascii": "gueltat sidi saad",
        "daira_name": "قتلة سيدي سعيد",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 85,
        "commune_name_ascii": "tadjemout",
        "commune_name": "تاجموت",
        "daira_name_ascii": "ain madhi",
        "daira_name": "عين ماضي",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 74,
        "commune_name_ascii": "hadj mechri",
        "commune_name": "الحاج مشري",
        "daira_name_ascii": "brida",
        "daira_name": "بريدة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 87,
        "commune_name_ascii": "taouiala",
        "commune_name": "تاويالة",
        "daira_name_ascii": "brida",
        "daira_name": "بريدة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 71,
        "commune_name_ascii": "el ghicha",
        "commune_name": "الغيشة",
        "daira_name_ascii": "el ghicha",
        "daira_name": "الغيشة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 86,
        "commune_name_ascii": "tadjrouna",
        "commune_name": "تاجرونة",
        "daira_name_ascii": "ain madhi",
        "daira_name": "عين ماضي",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 82,
        "commune_name_ascii": "sebgag",
        "commune_name": "سبقاق",
        "daira_name_ascii": "aflou",
        "daira_name": "أفلو",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 83,
        "commune_name_ascii": "sidi bouzid",
        "commune_name": "سيدي بوزيد",
        "daira_name_ascii": "aflou",
        "daira_name": "أفلو",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 80,
        "commune_name_ascii": "oued morra",
        "commune_name": "وادي مرة",
        "daira_name_ascii": "oued morra",
        "daira_name": "وادي مرة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 79,
        "commune_name_ascii": "laghouat",
        "commune_name": "الأغواط",
        "daira_name_ascii": "laghouat",
        "daira_name": "الأغواط",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 81,
        "commune_name_ascii": "oued m'zi",
        "commune_name": "وادي مزي",
        "daira_name_ascii": "oued morra",
        "daira_name": "وادي مرة",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 78,
        "commune_name_ascii": "ksar el hirane",
        "commune_name": "قصر الحيران",
        "daira_name_ascii": "ksar el hirane",
        "daira_name": "قصر الحيران",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 70,
        "commune_name_ascii": "el assafia",
        "commune_name": "العسافية",
        "daira_name_ascii": "sidi makhlouf",
        "daira_name": "سيدي مخلوف",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 84,
        "commune_name_ascii": "sidi makhlouf",
        "commune_name": "سيدي مخلوف",
        "daira_name_ascii": "sidi makhlouf",
        "daira_name": "سيدي مخلوف",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 75,
        "commune_name_ascii": "hassi delaa",
        "commune_name": "حاسي الدلاعة",
        "daira_name_ascii": "hassi r'mel",
        "daira_name": "حاسي الرمل",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 76,
        "commune_name_ascii": "hassi r'mel",
        "commune_name": "حاسي الرمل",
        "daira_name_ascii": "hassi r'mel",
        "daira_name": "حاسي الرمل",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 65,
        "commune_name_ascii": "ain madhi",
        "commune_name": "عين ماضي",
        "daira_name_ascii": "ain madhi",
        "daira_name": "عين ماضي",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 72,
        "commune_name_ascii": "el haouaita",
        "commune_name": "الحويطة",
        "daira_name_ascii": "ain madhi",
        "daira_name": "عين ماضي",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 77,
        "commune_name_ascii": "kheneg",
        "commune_name": "الخنق",
        "daira_name_ascii": "ain madhi",
        "daira_name": "عين ماضي",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 68,
        "commune_name_ascii": "benacer benchohra",
        "commune_name": "بن ناصر بن شهرة",
        "daira_name_ascii": "ksar el hirane",
        "daira_name": "قصر الحيران",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 64,
        "commune_name_ascii": "aflou",
        "commune_name": "أفلو",
        "daira_name_ascii": "aflou",
        "daira_name": "أفلو",
        "wilaya_code": "03",
        "wilaya_name_ascii": "laghouat",
        "wilaya_name": "الأغواط"
    },
    {
        "id": 104,
        "commune_name_ascii": "fkirina",
        "commune_name": "فكيرينة",
        "daira_name_ascii": "f'kirina",
        "daira_name": "فكيرينة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 102,
        "commune_name_ascii": "el fedjoudj boughrara sa",
        "commune_name": "الفجوج بوغرارة سعودي",
        "daira_name_ascii": "ain fekroun",
        "daira_name": "عين فكرون",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 91,
        "commune_name_ascii": "ain fekroun",
        "commune_name": "عين فكرون",
        "daira_name_ascii": "ain fekroun",
        "daira_name": "عين فكرون",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 113,
        "commune_name_ascii": "rahia",
        "commune_name": "الرحية",
        "daira_name_ascii": "meskiana",
        "daira_name": "مسكيانة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 107,
        "commune_name_ascii": "meskiana",
        "commune_name": "مسكيانة",
        "daira_name_ascii": "meskiana",
        "daira_name": "مسكيانة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 100,
        "commune_name_ascii": "el belala",
        "commune_name": "البلالة",
        "daira_name_ascii": "meskiana",
        "daira_name": "مسكيانة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 95,
        "commune_name_ascii": "behir chergui",
        "commune_name": "بحير الشرقي",
        "daira_name_ascii": "meskiana",
        "daira_name": "مسكيانة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 106,
        "commune_name_ascii": "ksar sbahi",
        "commune_name": "قصر الصباحي",
        "daira_name_ascii": "ksar sbahi",
        "daira_name": "قصر الصباحي",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 115,
        "commune_name_ascii": "souk naamane",
        "commune_name": "سوق نعمان",
        "daira_name_ascii": "souk naamane",
        "daira_name": "سوق نعمان",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 111,
        "commune_name_ascii": "ouled zouai",
        "commune_name": "أولاد زواي",
        "daira_name_ascii": "souk naamane",
        "daira_name": "سوق نعمان",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 112,
        "commune_name_ascii": "oum el bouaghi",
        "commune_name": "أم البواقي",
        "daira_name_ascii": "oum el bouaghi",
        "daira_name": "أم البواقي",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 88,
        "commune_name_ascii": "ain babouche",
        "commune_name": "عين ببوش",
        "daira_name_ascii": "ain babouche",
        "daira_name": "عين ببوش",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 94,
        "commune_name_ascii": "ain zitoun",
        "commune_name": "عين الزيتون",
        "daira_name_ascii": "oum el bouaghi",
        "daira_name": "أم البواقي",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 97,
        "commune_name_ascii": "bir chouhada",
        "commune_name": "بئر الشهداء",
        "daira_name_ascii": "souk naamane",
        "daira_name": "سوق نعمان",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 89,
        "commune_name_ascii": "ain beida",
        "commune_name": "عين البيضاء",
        "daira_name_ascii": "ain beida",
        "daira_name": "عين البيضاء",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 96,
        "commune_name_ascii": "berriche",
        "commune_name": "بريش",
        "daira_name_ascii": "ain beida",
        "daira_name": "عين البيضاء",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 116,
        "commune_name_ascii": "zorg",
        "commune_name": "الزرق",
        "daira_name_ascii": "ain beida",
        "daira_name": "عين البيضاء",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 93,
        "commune_name_ascii": "ain m'lila",
        "commune_name": "عين مليلة",
        "daira_name_ascii": "ain m'lila",
        "daira_name": "عين مليلة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 109,
        "commune_name_ascii": "ouled gacem",
        "commune_name": "أولاد قاسم",
        "daira_name_ascii": "ain m'lila",
        "daira_name": "عين مليلة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 110,
        "commune_name_ascii": "ouled hamla",
        "commune_name": "أولاد حملة",
        "daira_name_ascii": "ain m'lila",
        "daira_name": "عين مليلة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 99,
        "commune_name_ascii": "el amiria",
        "commune_name": "العامرية",
        "daira_name_ascii": "sigus",
        "daira_name": "سيقوس",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 114,
        "commune_name_ascii": "sigus",
        "commune_name": "سيقوس",
        "daira_name_ascii": "sigus",
        "daira_name": "سيقوس",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 108,
        "commune_name_ascii": "oued nini",
        "commune_name": "وادي نيني",
        "daira_name_ascii": "f'kirina",
        "daira_name": "فكيرينة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 90,
        "commune_name_ascii": "ain diss",
        "commune_name": "عين الديس",
        "daira_name_ascii": "ain babouche",
        "daira_name": "عين ببوش",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 98,
        "commune_name_ascii": "dhalaa",
        "commune_name": "الضلعة",
        "daira_name_ascii": "dhalaa",
        "daira_name": "الضلعة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 101,
        "commune_name_ascii": "el djazia",
        "commune_name": "الجازية",
        "daira_name_ascii": "dhalaa",
        "daira_name": "الضلعة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 92,
        "commune_name_ascii": "ain kercha",
        "commune_name": "عين كرشة",
        "daira_name_ascii": "ain kercha",
        "daira_name": "عين كرشة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 103,
        "commune_name_ascii": "el harmilia",
        "commune_name": "الحرملية",
        "daira_name_ascii": "ain kercha",
        "daira_name": "عين كرشة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 105,
        "commune_name_ascii": "hanchir toumghani",
        "commune_name": "هنشير تومغني",
        "daira_name_ascii": "ain kercha",
        "daira_name": "عين كرشة",
        "wilaya_code": "04",
        "wilaya_name_ascii": "oum el bouaghi",
        "wilaya_name": "أم البواقي"
    },
    {
        "id": 150,
        "commune_name_ascii": "maafa",
        "commune_name": "معافة",
        "daira_name_ascii": "ain touta",
        "daira_name": "عين التوتة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 139,
        "commune_name_ascii": "gosbat",
        "commune_name": "القصبات",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 176,
        "commune_name_ascii": "timgad",
        "commune_name": "تيمقاد",
        "daira_name_ascii": "timgad",
        "daira_name": "تيمقاد",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 170,
        "commune_name_ascii": "taxlent",
        "commune_name": "تاكسلانت",
        "daira_name_ascii": "ouled si slimane",
        "daira_name": "أولاد سي سليمان",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 161,
        "commune_name_ascii": "ouled si slimane",
        "commune_name": "أولاد سي سليمان",
        "daira_name_ascii": "ouled si slimane",
        "daira_name": "أولاد سي سليمان",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 148,
        "commune_name_ascii": "lemcene",
        "commune_name": "لمسان",
        "daira_name_ascii": "ouled si slimane",
        "daira_name": "أولاد سي سليمان",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 169,
        "commune_name_ascii": "talkhamt",
        "commune_name": "تالخمت",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 164,
        "commune_name_ascii": "ras el aioun",
        "commune_name": "رأس العيون",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 163,
        "commune_name_ascii": "rahbat",
        "commune_name": "الرحبات",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 160,
        "commune_name_ascii": "ouled sellem",
        "commune_name": "أولاد سلام",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 140,
        "commune_name_ascii": "guigba",
        "commune_name": "القيقبة",
        "daira_name_ascii": "ras el aioun",
        "daira_name": "رأس العيون",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 172,
        "commune_name_ascii": "teniet el abed",
        "commune_name": "ثنية العابد",
        "daira_name_ascii": "theniet el abed",
        "daira_name": "ثنية العابد",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 123,
        "commune_name_ascii": "batna",
        "commune_name": "باتنة",
        "daira_name_ascii": "batna",
        "daira_name": "باتنة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 136,
        "commune_name_ascii": "fesdis",
        "commune_name": "فسديس",
        "daira_name_ascii": "batna",
        "daira_name": "باتنة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 154,
        "commune_name_ascii": "oued chaaba",
        "commune_name": "وادي الشعبة",
        "daira_name_ascii": "batna",
        "daira_name": "باتنة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 141,
        "commune_name_ascii": "hidoussa",
        "commune_name": "حيدوسة",
        "daira_name_ascii": "merouana",
        "daira_name": "مروانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 145,
        "commune_name_ascii": "ksar bellezma",
        "commune_name": "قصر بلزمة",
        "daira_name_ascii": "merouana",
        "daira_name": "مروانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 152,
        "commune_name_ascii": "merouana",
        "commune_name": "مروانة",
        "daira_name_ascii": "merouana",
        "daira_name": "مروانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 155,
        "commune_name_ascii": "oued el ma",
        "commune_name": "وادي الماء",
        "daira_name_ascii": "merouana",
        "daira_name": "مروانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 147,
        "commune_name_ascii": "lazrou",
        "commune_name": "لازرو",
        "daira_name_ascii": "seriana",
        "daira_name": "سريانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 167,
        "commune_name_ascii": "seriana",
        "commune_name": "سريانة",
        "daira_name_ascii": "seriana",
        "daira_name": "سريانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 177,
        "commune_name_ascii": "zanet el beida",
        "commune_name": "زانة البيضاء",
        "daira_name_ascii": "seriana",
        "daira_name": "سريانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 151,
        "commune_name_ascii": "menaa",
        "commune_name": "منعة",
        "daira_name_ascii": "menaa",
        "daira_name": "منعة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 174,
        "commune_name_ascii": "tigharghar",
        "commune_name": "تغرغار",
        "daira_name_ascii": "menaa",
        "daira_name": "منعة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 119,
        "commune_name_ascii": "ain yagout",
        "commune_name": "عين ياقوت",
        "daira_name_ascii": "el madher",
        "daira_name": "المعذر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 128,
        "commune_name_ascii": "boumia",
        "commune_name": "بومية",
        "daira_name_ascii": "el madher",
        "daira_name": "المعذر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 132,
        "commune_name_ascii": "djerma",
        "commune_name": "جرمة",
        "daira_name_ascii": "el madher",
        "daira_name": "المعذر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 135,
        "commune_name_ascii": "el madher",
        "commune_name": "المعذر",
        "daira_name_ascii": "el madher",
        "daira_name": "المعذر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 162,
        "commune_name_ascii": "ouyoun el assafir",
        "commune_name": "عيون العصافير",
        "daira_name_ascii": "tazoult",
        "daira_name": "تازولت",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 171,
        "commune_name_ascii": "tazoult",
        "commune_name": "تازولت",
        "daira_name_ascii": "tazoult",
        "daira_name": "تازولت",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 127,
        "commune_name_ascii": "boumagueur",
        "commune_name": "بومقر",
        "daira_name_ascii": "n'gaous",
        "daira_name": "نقاوس",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 153,
        "commune_name_ascii": "n gaous",
        "commune_name": "نقاوس",
        "daira_name_ascii": "n'gaous",
        "daira_name": "نقاوس",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 165,
        "commune_name_ascii": "sefiane",
        "commune_name": "سفيان",
        "daira_name_ascii": "n'gaous",
        "daira_name": "نقاوس",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 120,
        "commune_name_ascii": "arris",
        "commune_name": "أريس",
        "daira_name_ascii": "arris",
        "daira_name": "أريس",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 173,
        "commune_name_ascii": "tighanimine",
        "commune_name": "تيغانمين",
        "daira_name_ascii": "arris",
        "daira_name": "أريس",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 117,
        "commune_name_ascii": "ain djasser",
        "commune_name": "عين جاسر",
        "daira_name_ascii": "ain djasser",
        "daira_name": "عين جاسر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 134,
        "commune_name_ascii": "el hassi",
        "commune_name": "الحاسي",
        "daira_name_ascii": "ain djasser",
        "daira_name": "عين جاسر",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 166,
        "commune_name_ascii": "seggana",
        "commune_name": "سقانة",
        "daira_name_ascii": "seggana",
        "daira_name": "سقانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 175,
        "commune_name_ascii": "tilatou",
        "commune_name": "تيلاطو",
        "daira_name_ascii": "seggana",
        "daira_name": "سقانة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 137,
        "commune_name_ascii": "foum toub",
        "commune_name": "فم الطوب",
        "daira_name_ascii": "ichemoul",
        "daira_name": "إشمول",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 142,
        "commune_name_ascii": "ichemoul",
        "commune_name": "إشمول",
        "daira_name_ascii": "ichemoul",
        "daira_name": "إشمول",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 143,
        "commune_name_ascii": "inoughissen",
        "commune_name": "إينوغيسن",
        "daira_name_ascii": "ichemoul",
        "daira_name": "إشمول",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 129,
        "commune_name_ascii": "bouzina",
        "commune_name": "بوزينة",
        "daira_name_ascii": "bouzina",
        "daira_name": "بوزينة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 146,
        "commune_name_ascii": "larbaa",
        "commune_name": "لارباع",
        "daira_name_ascii": "bouzina",
        "daira_name": "بوزينة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 126,
        "commune_name_ascii": "boulhilat",
        "commune_name": "بولهيلات",
        "daira_name_ascii": "chemora",
        "daira_name": "الشمرة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 130,
        "commune_name_ascii": "chemora",
        "commune_name": "الشمرة",
        "daira_name_ascii": "chemora",
        "daira_name": "الشمرة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 122,
        "commune_name_ascii": "barika",
        "commune_name": "بريكة",
        "daira_name_ascii": "barika",
        "daira_name": "بريكة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 125,
        "commune_name_ascii": "bitam",
        "commune_name": "بيطام",
        "daira_name_ascii": "barika",
        "daira_name": "بريكة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 149,
        "commune_name_ascii": "m doukal",
        "commune_name": "إمدوكل",
        "daira_name_ascii": "barika",
        "daira_name": "بريكة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 121,
        "commune_name_ascii": "azil abedelkader",
        "commune_name": "عزيل عبد القادر",
        "daira_name_ascii": "djezzar",
        "daira_name": "الجزار",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 133,
        "commune_name_ascii": "djezzar",
        "commune_name": "الجزار",
        "daira_name_ascii": "djezzar",
        "daira_name": "الجزار",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 157,
        "commune_name_ascii": "ouled ammar",
        "commune_name": "أولاد عمار",
        "daira_name_ascii": "djezzar",
        "daira_name": "الجزار",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 138,
        "commune_name_ascii": "ghassira",
        "commune_name": "غسيرة",
        "daira_name_ascii": "tkout",
        "daira_name": "تكوت",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 144,
        "commune_name_ascii": "kimmel",
        "commune_name": "كيمل",
        "daira_name_ascii": "tkout",
        "daira_name": "تكوت",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 168,
        "commune_name_ascii": "t kout",
        "commune_name": "تكوت",
        "daira_name_ascii": "tkout",
        "daira_name": "تكوت",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 118,
        "commune_name_ascii": "ain touta",
        "commune_name": "عين التوتة",
        "daira_name_ascii": "ain touta",
        "daira_name": "عين التوتة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 124,
        "commune_name_ascii": "beni foudhala el hakania",
        "commune_name": "بني فضالة الحقانية",
        "daira_name_ascii": "ain touta",
        "daira_name": "عين التوتة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 159,
        "commune_name_ascii": "ouled fadel",
        "commune_name": "أولاد فاضل",
        "daira_name_ascii": "timgad",
        "daira_name": "تيمقاد",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 158,
        "commune_name_ascii": "ouled aouf",
        "commune_name": "أولاد عوف",
        "daira_name_ascii": "ain touta",
        "daira_name": "عين التوتة",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 131,
        "commune_name_ascii": "chir",
        "commune_name": "شير",
        "daira_name_ascii": "theniet el abed",
        "daira_name": "ثنية العابد",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 156,
        "commune_name_ascii": "oued taga",
        "commune_name": "وادي الطاقة",
        "daira_name_ascii": "theniet el abed",
        "daira_name": "ثنية العابد",
        "wilaya_code": "05",
        "wilaya_name_ascii": "batna",
        "wilaya_name": "باتنة"
    },
    {
        "id": 212,
        "commune_name_ascii": "sidi ayad",
        "commune_name": "سيدي عياد",
        "daira_name_ascii": "sidi aich",
        "daira_name": "سيدي عيش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 186,
        "commune_name_ascii": "barbacha",
        "commune_name": "برباشة",
        "daira_name_ascii": "barbacha",
        "daira_name": "برباشة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 199,
        "commune_name_ascii": "leflaye",
        "commune_name": "الفلاي",
        "daira_name_ascii": "sidi aich",
        "daira_name": "سيدي عيش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 206,
        "commune_name_ascii": "kendira",
        "commune_name": "كنديرة",
        "daira_name_ascii": "barbacha",
        "daira_name": "برباشة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 213,
        "commune_name_ascii": "sidi-aich",
        "commune_name": "سيدي عيش",
        "daira_name_ascii": "sidi aich",
        "daira_name": "سيدي عيش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 225,
        "commune_name_ascii": "tifra",
        "commune_name": "تيفرة",
        "daira_name_ascii": "sidi aich",
        "daira_name": "سيدي عيش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 227,
        "commune_name_ascii": "tinebdar",
        "commune_name": "تينبدار",
        "daira_name_ascii": "sidi aich",
        "daira_name": "سيدي عيش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 200,
        "commune_name_ascii": "el kseur",
        "commune_name": "القصر",
        "daira_name_ascii": "el kseur",
        "daira_name": "القصر",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 201,
        "commune_name_ascii": "fenaia il maten",
        "commune_name": "فناية الماثن",
        "daira_name_ascii": "el kseur",
        "daira_name": "القصر",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 229,
        "commune_name_ascii": "toudja",
        "commune_name": "توجة",
        "daira_name_ascii": "el kseur",
        "daira_name": "القصر",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 198,
        "commune_name_ascii": "dra el caid",
        "commune_name": "ذراع القايد",
        "daira_name_ascii": "kherrata",
        "daira_name": "خراطة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 207,
        "commune_name_ascii": "kherrata",
        "commune_name": "خراطة",
        "daira_name_ascii": "kherrata",
        "daira_name": "خراطة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 187,
        "commune_name_ascii": "bejaia",
        "commune_name": "بجاية",
        "daira_name_ascii": "bejaia",
        "daira_name": "بجاية",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 210,
        "commune_name_ascii": "oued ghir",
        "commune_name": "وادي غير",
        "daira_name_ascii": "bejaia",
        "daira_name": "بجاية",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 191,
        "commune_name_ascii": "benimaouche",
        "commune_name": "بني معوش",
        "daira_name_ascii": "beni maouche",
        "daira_name": "بني معوش",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 188,
        "commune_name_ascii": "beni djellil",
        "commune_name": "بني جليل",
        "daira_name_ascii": "amizour",
        "daira_name": "أميزور",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 202,
        "commune_name_ascii": "feraoun",
        "commune_name": "فرعون",
        "daira_name_ascii": "amizour",
        "daira_name": "أميزور",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 214,
        "commune_name_ascii": "smaoun",
        "commune_name": "سمعون",
        "daira_name_ascii": "amizour",
        "daira_name": "أميزور",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 226,
        "commune_name_ascii": "timezrit",
        "commune_name": "تيمزريت",
        "daira_name_ascii": "timezrit",
        "daira_name": "تيمزريت",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 209,
        "commune_name_ascii": "melbou",
        "commune_name": "مالبو",
        "daira_name_ascii": "souk el tenine",
        "daira_name": "سوق الإثنين",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 215,
        "commune_name_ascii": "souk el tenine",
        "commune_name": "سوق لإثنين",
        "daira_name_ascii": "souk el tenine",
        "daira_name": "سوق الإثنين",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 219,
        "commune_name_ascii": "tamridjet",
        "commune_name": "تامريجت",
        "daira_name_ascii": "souk el tenine",
        "daira_name": "سوق الإثنين",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 194,
        "commune_name_ascii": "boukhelifa",
        "commune_name": "بوخليفة",
        "daira_name_ascii": "tichy",
        "daira_name": "تيشي",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 217,
        "commune_name_ascii": "tala hamza",
        "commune_name": "تالة حمزة",
        "daira_name_ascii": "tichy",
        "daira_name": "تيشي",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 224,
        "commune_name_ascii": "tichy",
        "commune_name": "تيشي",
        "daira_name_ascii": "tichy",
        "daira_name": "تيشي",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 179,
        "commune_name_ascii": "ait r'zine",
        "commune_name": "أيت رزين",
        "daira_name_ascii": "ighil ali",
        "daira_name": "إغيل علي",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 204,
        "commune_name_ascii": "ighil-ali",
        "commune_name": "إغيل علي",
        "daira_name_ascii": "ighil ali",
        "daira_name": "إغيل علي",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 180,
        "commune_name_ascii": "ait-smail",
        "commune_name": "أيت إسماعيل",
        "daira_name_ascii": "darguina",
        "daira_name": "درقينة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 197,
        "commune_name_ascii": "darguina",
        "commune_name": "درقينة",
        "daira_name_ascii": "darguina",
        "daira_name": "درقينة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 221,
        "commune_name_ascii": "taskriout",
        "commune_name": "تاسكريوت",
        "daira_name_ascii": "darguina",
        "daira_name": "درقينة",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 185,
        "commune_name_ascii": "aokas",
        "commune_name": "أوقاس",
        "daira_name_ascii": "aokas",
        "daira_name": "أوقاس",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 228,
        "commune_name_ascii": "tizi-n'berber",
        "commune_name": "تيزي نبربر",
        "daira_name_ascii": "aokas",
        "daira_name": "أوقاس",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 178,
        "commune_name_ascii": "adekar",
        "commune_name": "أدكار",
        "daira_name_ascii": "adekar",
        "daira_name": "أدكار",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 189,
        "commune_name_ascii": "beni k'sila",
        "commune_name": "بني كسيلة",
        "daira_name_ascii": "adekar",
        "daira_name": "أدكار",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 220,
        "commune_name_ascii": "taourit ighil",
        "commune_name": "تاوريرت إغيل",
        "daira_name_ascii": "adekar",
        "daira_name": "أدكار",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 181,
        "commune_name_ascii": "akbou",
        "commune_name": "أقبو",
        "daira_name_ascii": "akbou",
        "daira_name": "أقبو",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 195,
        "commune_name_ascii": "chellata",
        "commune_name": "شلاطة",
        "daira_name_ascii": "akbou",
        "daira_name": "أقبو",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 205,
        "commune_name_ascii": "ighram",
        "commune_name": "اغرم",
        "daira_name_ascii": "akbou",
        "daira_name": "أقبو",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 218,
        "commune_name_ascii": "tamokra",
        "commune_name": "تامقرة",
        "daira_name_ascii": "akbou",
        "daira_name": "أقبو",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 183,
        "commune_name_ascii": "amalou",
        "commune_name": "أمالو",
        "daira_name_ascii": "seddouk",
        "daira_name": "صدوق",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 193,
        "commune_name_ascii": "bouhamza",
        "commune_name": "بوحمزة",
        "daira_name_ascii": "seddouk",
        "daira_name": "صدوق",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 208,
        "commune_name_ascii": "m'cisna",
        "commune_name": "مسيسنة",
        "daira_name_ascii": "seddouk",
        "daira_name": "صدوق",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 211,
        "commune_name_ascii": "seddouk",
        "commune_name": "صدوق",
        "daira_name_ascii": "seddouk",
        "daira_name": "صدوق",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 190,
        "commune_name_ascii": "beni-mallikeche",
        "commune_name": "بني مليكش",
        "daira_name_ascii": "tazmalt",
        "daira_name": "تازملت",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 192,
        "commune_name_ascii": "boudjellil",
        "commune_name": "بو جليل",
        "daira_name_ascii": "tazmalt",
        "daira_name": "تازملت",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 222,
        "commune_name_ascii": "tazmalt",
        "commune_name": "تازمالت",
        "daira_name_ascii": "tazmalt",
        "daira_name": "تازملت",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 182,
        "commune_name_ascii": "akfadou",
        "commune_name": "أكفادو",
        "daira_name_ascii": "chemini",
        "daira_name": "شميني",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 196,
        "commune_name_ascii": "chemini",
        "commune_name": "شميني",
        "daira_name_ascii": "chemini",
        "daira_name": "شميني",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 216,
        "commune_name_ascii": "souk oufella",
        "commune_name": "سوق اوفلا",
        "daira_name_ascii": "chemini",
        "daira_name": "شميني",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 223,
        "commune_name_ascii": "tibane",
        "commune_name": "طيبان",
        "daira_name_ascii": "chemini",
        "daira_name": "شميني",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 203,
        "commune_name_ascii": "ouzellaguen",
        "commune_name": "أوزلاقن",
        "daira_name_ascii": "ifri ouzellaguene",
        "daira_name": "إفري أوزلاقن",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 184,
        "commune_name_ascii": "amizour",
        "commune_name": "أميزور",
        "daira_name_ascii": "amizour",
        "daira_name": "أميزور",
        "wilaya_code": "06",
        "wilaya_name_ascii": "bejaia",
        "wilaya_name": " بجاية"
    },
    {
        "id": 241,
        "commune_name_ascii": "el feidh",
        "commune_name": "الفيض",
        "daira_name_ascii": "zeribet el oued",
        "daira_name": "زريبة الوادي",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 249,
        "commune_name_ascii": "lichana",
        "commune_name": "ليشانة",
        "daira_name_ascii": "tolga",
        "daira_name": "طولقة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 235,
        "commune_name_ascii": "bouchakroun",
        "commune_name": "بوشقرون",
        "daira_name_ascii": "tolga",
        "daira_name": "طولقة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 252,
        "commune_name_ascii": "mekhadma",
        "commune_name": "مخادمة",
        "daira_name_ascii": "ourlal",
        "daira_name": "أورلال",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 239,
        "commune_name_ascii": "djemorah",
        "commune_name": "جمورة",
        "daira_name_ascii": "djemorah",
        "daira_name": "جمورة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 236,
        "commune_name_ascii": "branis",
        "commune_name": "برانيس",
        "daira_name_ascii": "djemorah",
        "daira_name": "جمورة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 246,
        "commune_name_ascii": "el outaya",
        "commune_name": "الوطاية",
        "daira_name_ascii": "el outaya",
        "daira_name": "الوطاية",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 245,
        "commune_name_ascii": "el kantara",
        "commune_name": "القنطرة",
        "daira_name_ascii": "el kantara",
        "daira_name": "القنطرة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 248,
        "commune_name_ascii": "khenguet sidi nadji",
        "commune_name": "خنقة سيدي ناجي",
        "daira_name_ascii": "zeribet el oued",
        "daira_name": "زريبة الوادي",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 231,
        "commune_name_ascii": "ain zaatout",
        "commune_name": "عين زعطوط",
        "daira_name_ascii": "el kantara",
        "daira_name": "القنطرة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 262,
        "commune_name_ascii": "zeribet el oued",
        "commune_name": "زريبة الوادي",
        "daira_name_ascii": "zeribet el oued",
        "daira_name": "زريبة الوادي",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 253,
        "commune_name_ascii": "meziraa",
        "commune_name": "المزيرعة",
        "daira_name_ascii": "zeribet el oued",
        "daira_name": "زريبة الوادي",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 233,
        "commune_name_ascii": "biskra",
        "commune_name": "بسكرة",
        "daira_name_ascii": "biskra",
        "daira_name": "بسكرة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 243,
        "commune_name_ascii": "el hadjab",
        "commune_name": "الحاجب",
        "daira_name_ascii": "biskra",
        "daira_name": "بسكرة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 254,
        "commune_name_ascii": "m'lili",
        "commune_name": "مليلي",
        "daira_name_ascii": "ourlal",
        "daira_name": "أورلال",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 247,
        "commune_name_ascii": "foughala",
        "commune_name": "فوغالة",
        "daira_name_ascii": "foughala",
        "daira_name": "فوغالة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 242,
        "commune_name_ascii": "el ghrous",
        "commune_name": "الغروس",
        "daira_name_ascii": "foughala",
        "daira_name": "فوغالة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 234,
        "commune_name_ascii": "bordj ben azzouz",
        "commune_name": "برج بن عزوز",
        "daira_name_ascii": "tolga",
        "daira_name": "طولقة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 257,
        "commune_name_ascii": "ourlal",
        "commune_name": "أورلال",
        "daira_name_ascii": "ourlal",
        "daira_name": "أورلال",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 256,
        "commune_name_ascii": "oumache",
        "commune_name": "أوماش",
        "daira_name_ascii": "ourlal",
        "daira_name": "أورلال",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 230,
        "commune_name_ascii": "ain naga",
        "commune_name": "عين الناقة",
        "daira_name_ascii": "sidi okba",
        "daira_name": "سيدي عقبة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 238,
        "commune_name_ascii": "chetma",
        "commune_name": "شتمة",
        "daira_name_ascii": "sidi okba",
        "daira_name": "سيدي عقبة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 244,
        "commune_name_ascii": "el haouch",
        "commune_name": "الحوش",
        "daira_name_ascii": "sidi okba",
        "daira_name": "سيدي عقبة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 260,
        "commune_name_ascii": "sidi okba",
        "commune_name": "سيدي عقبة",
        "daira_name_ascii": "sidi okba",
        "daira_name": "سيدي عقبة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 251,
        "commune_name_ascii": "m'chouneche",
        "commune_name": "مشونش",
        "daira_name_ascii": "mechouneche",
        "daira_name": "مشونش",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 250,
        "commune_name_ascii": "lioua",
        "commune_name": "ليوة",
        "daira_name_ascii": "ourlal",
        "daira_name": "أورلال",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 261,
        "commune_name_ascii": "tolga",
        "commune_name": "طولقة",
        "daira_name_ascii": "tolga",
        "daira_name": "طولقة",
        "wilaya_code": "07",
        "wilaya_name_ascii": "biskra",
        "wilaya_name": "بسكرة"
    },
    {
        "id": 264,
        "commune_name_ascii": "bechar",
        "commune_name": "بشار",
        "daira_name_ascii": "bechar",
        "daira_name": "بشار",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 268,
        "commune_name_ascii": "boukais",
        "commune_name": "بوكايس",
        "daira_name_ascii": "lahmar",
        "daira_name": "لحمر",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 275,
        "commune_name_ascii": "lahmar",
        "commune_name": "لحمر",
        "daira_name_ascii": "lahmar",
        "daira_name": "لحمر",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 278,
        "commune_name_ascii": "mogheul",
        "commune_name": "موغل",
        "daira_name_ascii": "lahmar",
        "daira_name": "لحمر",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 277,
        "commune_name_ascii": "meridja",
        "commune_name": "المريجة",
        "daira_name_ascii": "kenadsa",
        "daira_name": "القنادسة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 281,
        "commune_name_ascii": "taghit",
        "commune_name": "تاغيت",
        "daira_name_ascii": "taghit",
        "daira_name": "تاغيت",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 263,
        "commune_name_ascii": "abadla",
        "commune_name": "العبادلة",
        "daira_name_ascii": "abadla",
        "daira_name": "العبادلة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 270,
        "commune_name_ascii": "erg-ferradj",
        "commune_name": "عرق فراج",
        "daira_name_ascii": "abadla",
        "daira_name": "العبادلة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 276,
        "commune_name_ascii": "machraa-houari-boumediene",
        "commune_name": "مشرع هواري بومدين",
        "daira_name_ascii": "abadla",
        "daira_name": "العبادلة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 267,
        "commune_name_ascii": "beni-ounif",
        "commune_name": "بني ونيف",
        "daira_name_ascii": "beni ounif",
        "daira_name": "بني ونيف",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 280,
        "commune_name_ascii": "tabelbala",
        "commune_name": "تبلبالة",
        "daira_name_ascii": "tabelbala",
        "daira_name": "تبلبالة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 272,
        "commune_name_ascii": "kenadsa",
        "commune_name": "القنادسة",
        "daira_name_ascii": "kenadsa",
        "daira_name": "القنادسة",
        "wilaya_code": "08",
        "wilaya_name_ascii": "bechar",
        "wilaya_name": "بشار"
    },
    {
        "id": 285,
        "commune_name_ascii": "beni mered",
        "commune_name": "بني مراد",
        "daira_name_ascii": "ouled yaich",
        "daira_name": "أولاد يعيش",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 305,
        "commune_name_ascii": "ouled slama",
        "commune_name": "اولاد سلامة",
        "daira_name_ascii": "bougara",
        "daira_name": "بوقرة",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 302,
        "commune_name_ascii": "mouzaia",
        "commune_name": "موزاية",
        "daira_name_ascii": "mouzaia",
        "daira_name": "موزاية",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 299,
        "commune_name_ascii": "hammam elouane",
        "commune_name": "حمام ملوان",
        "daira_name_ascii": "bougara",
        "daira_name": "بوقرة",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 291,
        "commune_name_ascii": "bougara",
        "commune_name": "بوقرة",
        "daira_name_ascii": "bougara",
        "daira_name": "بوقرة",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 307,
        "commune_name_ascii": "souhane",
        "commune_name": "صوحان",
        "daira_name_ascii": "larbaa",
        "daira_name": "الأربعاء",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 300,
        "commune_name_ascii": "larbaa",
        "commune_name": "الأربعاء",
        "daira_name_ascii": "larbaa",
        "daira_name": "الأربعاء",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 308,
        "commune_name_ascii": "soumaa",
        "commune_name": "الصومعة",
        "daira_name_ascii": "boufarik",
        "daira_name": "بوفاريك",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 298,
        "commune_name_ascii": "guerrouaou",
        "commune_name": "قرواو",
        "daira_name_ascii": "boufarik",
        "daira_name": "بوفاريك",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 290,
        "commune_name_ascii": "boufarik",
        "commune_name": "بوفاريك",
        "daira_name_ascii": "boufarik",
        "daira_name": "بوفاريك",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 301,
        "commune_name_ascii": "meftah",
        "commune_name": "مفتاح",
        "daira_name_ascii": "meftah",
        "daira_name": "مفتاح",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 294,
        "commune_name_ascii": "chiffa",
        "commune_name": "الشفة",
        "daira_name_ascii": "mouzaia",
        "daira_name": "موزاية",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 284,
        "commune_name_ascii": "ain romana",
        "commune_name": "عين الرمانة",
        "daira_name_ascii": "mouzaia",
        "daira_name": "موزاية",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 303,
        "commune_name_ascii": "oueddjer",
        "commune_name": "وادي جر",
        "daira_name_ascii": "el affroun",
        "daira_name": "العفرون",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 297,
        "commune_name_ascii": "el-affroun",
        "commune_name": "العفرون",
        "daira_name_ascii": "el affroun",
        "daira_name": "العفرون",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 306,
        "commune_name_ascii": "ouled yaich",
        "commune_name": "أولاد يعيش",
        "daira_name_ascii": "ouled yaich",
        "daira_name": "أولاد يعيش",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 295,
        "commune_name_ascii": "chrea",
        "commune_name": "الشريعة",
        "daira_name_ascii": "ouled yaich",
        "daira_name": "أولاد يعيش",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 296,
        "commune_name_ascii": "djebabra",
        "commune_name": "جبابرة",
        "daira_name_ascii": "meftah",
        "daira_name": "مفتاح",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 304,
        "commune_name_ascii": "oued el alleug",
        "commune_name": "وادي العلايق",
        "daira_name_ascii": "oued el alleug",
        "daira_name": "وادي العلايق",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 287,
        "commune_name_ascii": "benkhelil",
        "commune_name": "بن خليل",
        "daira_name_ascii": "oued el alleug",
        "daira_name": "وادي العلايق",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 286,
        "commune_name_ascii": "beni-tamou",
        "commune_name": "بني تامو",
        "daira_name_ascii": "oued el alleug",
        "daira_name": "وادي العلايق",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 293,
        "commune_name_ascii": "chebli",
        "commune_name": "الشبلي",
        "daira_name_ascii": "bouinan",
        "daira_name": "بوعينان",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 292,
        "commune_name_ascii": "bouinan",
        "commune_name": "بوعينان",
        "daira_name_ascii": "bouinan",
        "daira_name": "بوعينان",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 289,
        "commune_name_ascii": "bouarfa",
        "commune_name": "بوعرفة",
        "daira_name_ascii": "blida",
        "daira_name": "البليدة",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 288,
        "commune_name_ascii": "blida",
        "commune_name": "البليدة",
        "daira_name_ascii": "blida",
        "daira_name": "البليدة",
        "wilaya_code": "09",
        "wilaya_name_ascii": "blida",
        "wilaya_name": "البليدة"
    },
    {
        "id": 312,
        "commune_name_ascii": "ain laloui",
        "commune_name": "عين العلوي",
        "daira_name_ascii": "ain bessem",
        "daira_name": "عين بسام",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 334,
        "commune_name_ascii": "hadjera zerga",
        "commune_name": "الحجرة الزرقاء",
        "daira_name_ascii": "bordj okhriss",
        "daira_name": "برج أوخريص",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 342,
        "commune_name_ascii": "mezdour",
        "commune_name": "مزدور",
        "daira_name_ascii": "bordj okhriss",
        "daira_name": "برج أوخريص",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 351,
        "commune_name_ascii": "taguedite",
        "commune_name": "تاقديت",
        "daira_name_ascii": "bordj okhriss",
        "daira_name": "برج أوخريص",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 346,
        "commune_name_ascii": "ridane",
        "commune_name": "ريدان",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 341,
        "commune_name_ascii": "maamora",
        "commune_name": "المعمورة",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 331,
        "commune_name_ascii": "el-hakimia",
        "commune_name": "الحاكمية",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 310,
        "commune_name_ascii": "ahl el ksar",
        "commune_name": "أهل القصر",
        "daira_name_ascii": "bechloul",
        "daira_name": "بشلول",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 325,
        "commune_name_ascii": "dirah",
        "commune_name": "ديرة",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 324,
        "commune_name_ascii": "dechmia",
        "commune_name": "الدشمية",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 317,
        "commune_name_ascii": "bechloul",
        "commune_name": "بشلول",
        "daira_name_ascii": "bechloul",
        "daira_name": "بشلول",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 352,
        "commune_name_ascii": "ath mansour",
        "commune_name": "آثمنصور",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 347,
        "commune_name_ascii": "saharidj",
        "commune_name": "سحاريج",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 327,
        "commune_name_ascii": "el adjiba",
        "commune_name": "العجيبة",
        "daira_name_ascii": "bechloul",
        "daira_name": "بشلول",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 328,
        "commune_name_ascii": "el asnam",
        "commune_name": "الأسنام",
        "daira_name_ascii": "bechloul",
        "daira_name": "بشلول",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 339,
        "commune_name_ascii": "m chedallah",
        "commune_name": "أمشدالة",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 319,
        "commune_name_ascii": "bordj okhriss",
        "commune_name": "برج أوخريص",
        "daira_name_ascii": "bordj okhriss",
        "daira_name": "برج أوخريص",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 349,
        "commune_name_ascii": "sour el ghozlane",
        "commune_name": "سور الغزلان",
        "daira_name_ascii": "sour el ghozlane",
        "daira_name": "سور الغزلان",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 336,
        "commune_name_ascii": "hanif",
        "commune_name": "حنيف",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 323,
        "commune_name_ascii": "chorfa",
        "commune_name": "شرفة",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 344,
        "commune_name_ascii": "ouled rached",
        "commune_name": "أولاد راشد",
        "daira_name_ascii": "bechloul",
        "daira_name": "بشلول",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 311,
        "commune_name_ascii": "ain el hadjar",
        "commune_name": "عين الحجر",
        "daira_name_ascii": "ain bessem",
        "daira_name": "عين بسام",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 309,
        "commune_name_ascii": "aghbalou",
        "commune_name": "أغبالو",
        "daira_name_ascii": "m'chedallah",
        "daira_name": "مشد الله",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 345,
        "commune_name_ascii": "raouraoua",
        "commune_name": "روراوة",
        "daira_name_ascii": "bir ghbalou",
        "daira_name": "بئر غبالو",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 330,
        "commune_name_ascii": "el khabouzia",
        "commune_name": "الخبوزية",
        "daira_name_ascii": "bir ghbalou",
        "daira_name": "بئر غبالو",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 318,
        "commune_name_ascii": "bir ghbalou",
        "commune_name": "بئر غبالو",
        "daira_name_ascii": "bir ghbalou",
        "daira_name": "بئر غبالو",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 321,
        "commune_name_ascii": "bouira",
        "commune_name": "البويرة",
        "daira_name_ascii": "bouira",
        "daira_name": "البويرة",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 313,
        "commune_name_ascii": "ain turk",
        "commune_name": "عين الترك",
        "daira_name_ascii": "bouira",
        "daira_name": "البويرة",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 315,
        "commune_name_ascii": "ait laaziz",
        "commune_name": "أيت لعزيز",
        "daira_name_ascii": "bouira",
        "daira_name": "البويرة",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 314,
        "commune_name_ascii": "ain-bessem",
        "commune_name": "عين بسام",
        "daira_name_ascii": "ain bessem",
        "daira_name": "عين بسام",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 332,
        "commune_name_ascii": "el-mokrani",
        "commune_name": "المقراني",
        "daira_name_ascii": "souk el khemis",
        "daira_name": "سوق الخميس",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 348,
        "commune_name_ascii": "souk el khemis",
        "commune_name": "سوق الخميس",
        "daira_name_ascii": "souk el khemis",
        "daira_name": "سوق الخميس",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 316,
        "commune_name_ascii": "aomar",
        "commune_name": "أعمر",
        "daira_name_ascii": "kadiria",
        "daira_name": "القادرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 326,
        "commune_name_ascii": "djebahia",
        "commune_name": "جباحية",
        "daira_name_ascii": "kadiria",
        "daira_name": "القادرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 329,
        "commune_name_ascii": "el hachimia",
        "commune_name": "الهاشمية",
        "daira_name_ascii": "el hachimia",
        "daira_name": "الهاشمية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 335,
        "commune_name_ascii": "haizer",
        "commune_name": "حيزر",
        "daira_name_ascii": "haizer",
        "daira_name": "الحيزر",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 350,
        "commune_name_ascii": "taghzout",
        "commune_name": "تاغزوت",
        "daira_name_ascii": "haizer",
        "daira_name": "الحيزر",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 320,
        "commune_name_ascii": "bouderbala",
        "commune_name": "بودربالة",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 322,
        "commune_name_ascii": "boukram",
        "commune_name": "بوكرم",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 333,
        "commune_name_ascii": "guerrouma",
        "commune_name": "قرومة",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 338,
        "commune_name_ascii": "lakhdaria",
        "commune_name": "الأخضرية",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 340,
        "commune_name_ascii": "maala",
        "commune_name": "معلة",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 337,
        "commune_name_ascii": "kadiria",
        "commune_name": "قادرية",
        "daira_name_ascii": "kadiria",
        "daira_name": "القادرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 353,
        "commune_name_ascii": "z'barbar (el isseri )",
        "commune_name": "زبربر",
        "daira_name_ascii": "lakhdaria",
        "daira_name": "الأخضرية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 343,
        "commune_name_ascii": "oued el berdi",
        "commune_name": "وادي البردي",
        "daira_name_ascii": "el hachimia",
        "daira_name": "الهاشمية",
        "wilaya_code": "10",
        "wilaya_name_ascii": "bouira",
        "wilaya_name": "البويرة"
    },
    {
        "id": 362,
        "commune_name_ascii": "tazrouk",
        "commune_name": "تاظروك",
        "daira_name_ascii": "tazrouk",
        "daira_name": "تاظروك",
        "wilaya_code": "11",
        "wilaya_name_ascii": "tamanrasset",
        "wilaya_name": "تمنراست"
    },
    {
        "id": 354,
        "commune_name_ascii": "abelsa",
        "commune_name": "ابلسة",
        "daira_name_ascii": "silet",
        "daira_name": "سيلت",
        "wilaya_code": "11",
        "wilaya_name_ascii": "tamanrasset",
        "wilaya_name": "تمنراست"
    },
    {
        "id": 361,
        "commune_name_ascii": "tamanrasset",
        "commune_name": "تمنراست",
        "daira_name_ascii": "tamanrasset",
        "daira_name": "تمنراست",
        "wilaya_code": "11",
        "wilaya_name_ascii": "tamanrasset",
        "wilaya_name": "تمنراست"
    },
    {
        "id": 355,
        "commune_name_ascii": "ain amguel",
        "commune_name": "عين امقل",
        "daira_name_ascii": "tamanrasset",
        "daira_name": "تمنراست",
        "wilaya_code": "11",
        "wilaya_name_ascii": "tamanrasset",
        "wilaya_name": "تمنراست"
    },
    {
        "id": 359,
        "commune_name_ascii": "idles",
        "commune_name": "أدلس",
        "daira_name_ascii": "tazrouk",
        "daira_name": "تاظروك",
        "wilaya_code": "11",
        "wilaya_name_ascii": "tamanrasset",
        "wilaya_name": "تمنراست"
    },
    {
        "id": 380,
        "commune_name_ascii": "el-houidjbet",
        "commune_name": "الحويجبات",
        "daira_name_ascii": "el malabiod",
        "daira_name": "الماء الابيض",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 379,
        "commune_name_ascii": "el-aouinet",
        "commune_name": "العوينات",
        "daira_name_ascii": "el aouinet",
        "daira_name": "العوينات",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 381,
        "commune_name_ascii": "ferkane",
        "commune_name": "فركان",
        "daira_name_ascii": "negrine",
        "daira_name": "نقرين",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 385,
        "commune_name_ascii": "negrine",
        "commune_name": "نقرين",
        "daira_name_ascii": "negrine",
        "daira_name": "نقرين",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 368,
        "commune_name_ascii": "bir mokkadem",
        "commune_name": "بئر مقدم",
        "daira_name_ascii": "bir mokadem",
        "daira_name": "بئر مقدم",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 367,
        "commune_name_ascii": "bir dheheb",
        "commune_name": "بئر الذهب",
        "daira_name_ascii": "morsott",
        "daira_name": "مرسط",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 388,
        "commune_name_ascii": "saf saf el ouesra",
        "commune_name": "صفصاف الوسرى",
        "daira_name_ascii": "oum ali",
        "daira_name": "أم علي",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 382,
        "commune_name_ascii": "guorriguer",
        "commune_name": "قريقر",
        "daira_name_ascii": "bir mokadem",
        "daira_name": "بئر مقدم",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 366,
        "commune_name_ascii": "bekkaria",
        "commune_name": "بكارية",
        "daira_name_ascii": "el kouif",
        "daira_name": "الكويف",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 371,
        "commune_name_ascii": "boulhaf dyr",
        "commune_name": "بولحاف الدير",
        "daira_name_ascii": "el kouif",
        "daira_name": "الكويف",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 387,
        "commune_name_ascii": "oum ali",
        "commune_name": "أم علي",
        "daira_name_ascii": "oum ali",
        "daira_name": "أم علي",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 370,
        "commune_name_ascii": "boukhadra",
        "commune_name": "بوخضرة",
        "daira_name_ascii": "el aouinet",
        "daira_name": "العوينات",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 374,
        "commune_name_ascii": "el malabiod",
        "commune_name": "الماء الابيض",
        "daira_name_ascii": "el malabiod",
        "daira_name": "الماء الابيض",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 386,
        "commune_name_ascii": "ouenza",
        "commune_name": "الونزة",
        "daira_name_ascii": "ouenza",
        "daira_name": "الونزة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 375,
        "commune_name_ascii": "el meridj",
        "commune_name": "المريج",
        "daira_name_ascii": "ouenza",
        "daira_name": "الونزة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 364,
        "commune_name_ascii": "ain zerga",
        "commune_name": "عين الزرقاء",
        "daira_name_ascii": "ouenza",
        "daira_name": "الونزة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 389,
        "commune_name_ascii": "stah guentis",
        "commune_name": "سطح قنطيس",
        "daira_name_ascii": "el ogla",
        "daira_name": "العقلة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 377,
        "commune_name_ascii": "el ogla",
        "commune_name": "العقلة",
        "daira_name_ascii": "el ogla",
        "daira_name": "العقلة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 376,
        "commune_name_ascii": "el mezeraa",
        "commune_name": "المزرعة",
        "daira_name_ascii": "el ogla",
        "daira_name": "العقلة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 365,
        "commune_name_ascii": "bedjene",
        "commune_name": "بجن",
        "daira_name_ascii": "el ogla",
        "daira_name": "العقلة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 384,
        "commune_name_ascii": "morsott",
        "commune_name": "مرسط",
        "daira_name_ascii": "morsott",
        "daira_name": "مرسط",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 391,
        "commune_name_ascii": "telidjen",
        "commune_name": "ثليجان",
        "daira_name_ascii": "cheria",
        "daira_name": "الشريعة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 372,
        "commune_name_ascii": "cheria",
        "commune_name": "الشريعة",
        "daira_name_ascii": "cheria",
        "daira_name": "الشريعة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 378,
        "commune_name_ascii": "el ogla el malha",
        "commune_name": "العقلة المالحة",
        "daira_name_ascii": "bir el ater",
        "daira_name": "بئر العاتر",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 369,
        "commune_name_ascii": "bir-el-ater",
        "commune_name": "بئر العاتر",
        "daira_name_ascii": "bir el ater",
        "daira_name": "بئر العاتر",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 390,
        "commune_name_ascii": "tebessa",
        "commune_name": "تبسة",
        "daira_name_ascii": "tebessa",
        "daira_name": "تبسة",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 383,
        "commune_name_ascii": "hammamet",
        "commune_name": "الحمامات",
        "daira_name_ascii": "bir mokadem",
        "daira_name": "بئر مقدم",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 373,
        "commune_name_ascii": "el kouif",
        "commune_name": "الكويف",
        "daira_name_ascii": "el kouif",
        "daira_name": "الكويف",
        "wilaya_code": "12",
        "wilaya_name_ascii": "tebessa",
        "wilaya_name": "تبسة"
    },
    {
        "id": 400,
        "commune_name_ascii": "bab el assa",
        "commune_name": "باب العسة",
        "daira_name_ascii": "bab el assa",
        "daira_name": "باب العسة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 441,
        "commune_name_ascii": "terny beni hediel",
        "commune_name": "تيرني بني هديل",
        "daira_name_ascii": "mansourah",
        "daira_name": "منصورة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 424,
        "commune_name_ascii": "mansourah",
        "commune_name": "منصورة",
        "daira_name_ascii": "mansourah",
        "daira_name": "منصورة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 404,
        "commune_name_ascii": "beni mester",
        "commune_name": "بني مستر",
        "daira_name_ascii": "mansourah",
        "daira_name": "منصورة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 394,
        "commune_name_ascii": "ain ghoraba",
        "commune_name": "عين غرابة",
        "daira_name_ascii": "mansourah",
        "daira_name": "منصورة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 411,
        "commune_name_ascii": "chetouane",
        "commune_name": "شتوان",
        "daira_name_ascii": "chetouane",
        "daira_name": "شتوان",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 399,
        "commune_name_ascii": "amieur",
        "commune_name": "عمير",
        "daira_name_ascii": "chetouane",
        "daira_name": "شتوان",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 393,
        "commune_name_ascii": "ain fezza",
        "commune_name": "عين فزة",
        "daira_name_ascii": "chetouane",
        "daira_name": "شتوان",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 422,
        "commune_name_ascii": "honnaine",
        "commune_name": "هنين",
        "daira_name_ascii": "honnaine",
        "daira_name": "هنين",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 403,
        "commune_name_ascii": "beni khellad",
        "commune_name": "بني خلاد",
        "daira_name_ascii": "honnaine",
        "daira_name": "هنين",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 436,
        "commune_name_ascii": "sidi djillali",
        "commune_name": "سيدي الجيلالي",
        "daira_name_ascii": "sidi djillali",
        "daira_name": "سيدي الجيلالي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 410,
        "commune_name_ascii": "bouihi",
        "commune_name": "البويهي",
        "daira_name_ascii": "sidi djillali",
        "daira_name": "سيدي الجيلالي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 427,
        "commune_name_ascii": "nedroma",
        "commune_name": "ندرومة",
        "daira_name_ascii": "nedroma",
        "daira_name": "ندرومة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 426,
        "commune_name_ascii": "m'sirda fouaga",
        "commune_name": "مسيردة الفواقة",
        "daira_name_ascii": "marsa ben mehdi",
        "daira_name": "مرسى بن مهيدي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 425,
        "commune_name_ascii": "marsa ben m'hidi",
        "commune_name": "مرسى بن مهيدي",
        "daira_name_ascii": "marsa ben mehdi",
        "daira_name": "مرسى بن مهيدي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 437,
        "commune_name_ascii": "sidi medjahed",
        "commune_name": "سيدي مجاهد",
        "daira_name_ascii": "beni boussaid",
        "daira_name": "بني بوسعيد",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 402,
        "commune_name_ascii": "beni boussaid",
        "commune_name": "بني بوسعيد",
        "daira_name_ascii": "beni boussaid",
        "daira_name": "بني بوسعيد",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 434,
        "commune_name_ascii": "sebdou",
        "commune_name": "سبدو",
        "daira_name_ascii": "sebdou",
        "daira_name": "سبدو",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 417,
        "commune_name_ascii": "el gor",
        "commune_name": "القور",
        "daira_name_ascii": "sebdou",
        "daira_name": "سبدو",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 414,
        "commune_name_ascii": "el aricha",
        "commune_name": "العريشة",
        "daira_name_ascii": "sebdou",
        "daira_name": "سبدو",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 409,
        "commune_name_ascii": "bouhlou",
        "commune_name": "بوحلو",
        "daira_name_ascii": "sabra",
        "daira_name": "صبرة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 423,
        "commune_name_ascii": "maghnia",
        "commune_name": "مغنية",
        "daira_name_ascii": "maghnia",
        "daira_name": "مغنية",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 420,
        "commune_name_ascii": "hammam boughrara",
        "commune_name": "حمام بوغرارة",
        "daira_name_ascii": "maghnia",
        "daira_name": "مغنية",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 444,
        "commune_name_ascii": "zenata",
        "commune_name": "زناتة",
        "daira_name_ascii": "hennaya",
        "daira_name": "الحناية",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 430,
        "commune_name_ascii": "ouled riyah",
        "commune_name": "أولاد رياح",
        "daira_name_ascii": "hennaya",
        "daira_name": "الحناية",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 421,
        "commune_name_ascii": "hennaya",
        "commune_name": "الحناية",
        "daira_name_ascii": "hennaya",
        "daira_name": "الحناية",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 435,
        "commune_name_ascii": "sidi abdelli",
        "commune_name": "سيدي العبدلي",
        "daira_name_ascii": "bensekrane",
        "daira_name": "بن سكران",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 440,
        "commune_name_ascii": "souk tleta",
        "commune_name": "سوق الثلاثاء",
        "daira_name_ascii": "bab el assa",
        "daira_name": "باب العسة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 408,
        "commune_name_ascii": "bensekrane",
        "commune_name": "بن سكران",
        "daira_name_ascii": "bensekrane",
        "daira_name": "بن سكران",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 418,
        "commune_name_ascii": "fellaoucene",
        "commune_name": "فلاوسن",
        "daira_name_ascii": "fellaoucene",
        "daira_name": "فلاوسن",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 395,
        "commune_name_ascii": "ain kebira",
        "commune_name": "عين الكبيرة",
        "daira_name_ascii": "fellaoucene",
        "daira_name": "فلاوسن",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 392,
        "commune_name_ascii": "ain fetah",
        "commune_name": "عين فتاح",
        "daira_name_ascii": "fellaoucene",
        "daira_name": "فلاوسن",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 443,
        "commune_name_ascii": "tlemcen",
        "commune_name": "تلمسان",
        "daira_name_ascii": "tlemcen",
        "daira_name": "تلمسان",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 396,
        "commune_name_ascii": "ain nehala",
        "commune_name": "عين النحالة",
        "daira_name_ascii": "ain tellout",
        "daira_name": "عين تالوت",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 397,
        "commune_name_ascii": "ain tellout",
        "commune_name": "عين تالوت",
        "daira_name_ascii": "ain tellout",
        "daira_name": "عين تالوت",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 398,
        "commune_name_ascii": "ain youcef",
        "commune_name": "عين يوسف",
        "daira_name_ascii": "remchi",
        "daira_name": "الرمشي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 405,
        "commune_name_ascii": "beni ouarsous",
        "commune_name": "بني وارسوس",
        "daira_name_ascii": "remchi",
        "daira_name": "الرمشي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 416,
        "commune_name_ascii": "el fehoul",
        "commune_name": "الفحول",
        "daira_name_ascii": "remchi",
        "daira_name": "الرمشي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 431,
        "commune_name_ascii": "remchi",
        "commune_name": "الرمشي",
        "daira_name_ascii": "remchi",
        "daira_name": "الرمشي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 433,
        "commune_name_ascii": "sebbaa chioukh",
        "commune_name": "سبعة شيوخ",
        "daira_name_ascii": "remchi",
        "daira_name": "الرمشي",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 439,
        "commune_name_ascii": "souani",
        "commune_name": "السواني",
        "daira_name_ascii": "bab el assa",
        "daira_name": "باب العسة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 432,
        "commune_name_ascii": "sabra",
        "commune_name": "صبرة",
        "daira_name_ascii": "sabra",
        "daira_name": "صبرة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 412,
        "commune_name_ascii": "dar yaghmoracen",
        "commune_name": "دار يغمراسن",
        "daira_name_ascii": "ghazaouet",
        "daira_name": "الغزوات",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 419,
        "commune_name_ascii": "ghazaouet",
        "commune_name": "الغزوات",
        "daira_name_ascii": "ghazaouet",
        "daira_name": "الغزوات",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 438,
        "commune_name_ascii": "souahlia",
        "commune_name": "السواحلية",
        "daira_name_ascii": "ghazaouet",
        "daira_name": "الغزوات",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 442,
        "commune_name_ascii": "tianet",
        "commune_name": "تيانت",
        "daira_name_ascii": "ghazaouet",
        "daira_name": "الغزوات",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 406,
        "commune_name_ascii": "beni smiel",
        "commune_name": "بني صميل",
        "daira_name_ascii": "ouled mimoun",
        "daira_name": "أولاد ميمون",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 428,
        "commune_name_ascii": "oued lakhdar",
        "commune_name": "وادي الخضر",
        "daira_name_ascii": "ouled mimoun",
        "daira_name": "أولاد ميمون",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 429,
        "commune_name_ascii": "ouled mimoun",
        "commune_name": "أولاد ميمون",
        "daira_name_ascii": "ouled mimoun",
        "daira_name": "أولاد ميمون",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 401,
        "commune_name_ascii": "beni bahdel",
        "commune_name": "بني بهدل",
        "daira_name_ascii": "beni snous",
        "daira_name": "بني سنوس",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 407,
        "commune_name_ascii": "beni snous",
        "commune_name": "بني سنوس",
        "daira_name_ascii": "beni snous",
        "daira_name": "بني سنوس",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 415,
        "commune_name_ascii": "azail",
        "commune_name": "العزايل",
        "daira_name_ascii": "beni snous",
        "daira_name": "بني سنوس",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 413,
        "commune_name_ascii": "djebala",
        "commune_name": "جبالة",
        "daira_name_ascii": "nedroma",
        "daira_name": "ندرومة",
        "wilaya_code": "13",
        "wilaya_name_ascii": "tlemcen",
        "wilaya_name": "تلمسان"
    },
    {
        "id": 461,
        "commune_name_ascii": "mahdia",
        "commune_name": "مهدية",
        "daira_name_ascii": "mahdia",
        "daira_name": "مهدية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 447,
        "commune_name_ascii": "ain dzarit",
        "commune_name": "عين دزاريت",
        "daira_name_ascii": "mahdia",
        "daira_name": "مهدية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 472,
        "commune_name_ascii": "sebaine",
        "commune_name": "السبعين",
        "daira_name_ascii": "mahdia",
        "daira_name": "مهدية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 455,
        "commune_name_ascii": "faidja",
        "commune_name": "الفايجة",
        "daira_name_ascii": "sougueur",
        "daira_name": "السوقر",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 475,
        "commune_name_ascii": "si abdelghani",
        "commune_name": "سي عبد الغني",
        "daira_name_ascii": "sougueur",
        "daira_name": "السوقر",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 480,
        "commune_name_ascii": "sougueur",
        "commune_name": "السوقر",
        "daira_name_ascii": "sougueur",
        "daira_name": "السوقر",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 485,
        "commune_name_ascii": "tousnina",
        "commune_name": "توسنينة",
        "daira_name_ascii": "sougueur",
        "daira_name": "السوقر",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 465,
        "commune_name_ascii": "meghila",
        "commune_name": "مغيلة",
        "daira_name_ascii": "meghila",
        "daira_name": "مغيلة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 473,
        "commune_name_ascii": "sebt",
        "commune_name": "السبت",
        "daira_name_ascii": "meghila",
        "daira_name": "مغيلة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 479,
        "commune_name_ascii": "sidi hosni",
        "commune_name": "سيدي حسني",
        "daira_name_ascii": "meghila",
        "daira_name": "مغيلة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 448,
        "commune_name_ascii": "ain el hadid",
        "commune_name": "عين الحديد",
        "daira_name_ascii": "frenda",
        "daira_name": "فرندة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 456,
        "commune_name_ascii": "frenda",
        "commune_name": "فرندة",
        "daira_name_ascii": "frenda",
        "daira_name": "فرندة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 482,
        "commune_name_ascii": "takhemaret",
        "commune_name": "تخمرت",
        "daira_name_ascii": "frenda",
        "daira_name": "فرندة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 449,
        "commune_name_ascii": "ain kermes",
        "commune_name": "عين كرمس",
        "daira_name_ascii": "ain kermes",
        "daira_name": "عين كرمس",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 453,
        "commune_name_ascii": "djebilet rosfa",
        "commune_name": "جبيلات الرصفاء",
        "daira_name_ascii": "ain kermes",
        "daira_name": "عين كرمس",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 460,
        "commune_name_ascii": "madna",
        "commune_name": "مادنة",
        "daira_name_ascii": "ain kermes",
        "daira_name": "عين كرمس",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 463,
        "commune_name_ascii": "medrissa",
        "commune_name": "مدريسة",
        "daira_name_ascii": "ain kermes",
        "daira_name": "عين كرمس",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 476,
        "commune_name_ascii": "sidi abderrahmane",
        "commune_name": "سيدي عبد الرحمن",
        "daira_name_ascii": "ain kermes",
        "daira_name": "عين كرمس",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 459,
        "commune_name_ascii": "ksar chellala",
        "commune_name": "قصر الشلالة",
        "daira_name_ascii": "ksar chellala",
        "daira_name": "قصر الشلالة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 457,
        "commune_name_ascii": "guertoufa",
        "commune_name": "قرطوفة",
        "daira_name_ascii": "rahouia",
        "daira_name": "رحوية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 474,
        "commune_name_ascii": "serghine",
        "commune_name": "سرغين",
        "daira_name_ascii": "ksar chellala",
        "daira_name": "قصر الشلالة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 486,
        "commune_name_ascii": "zmalet el emir abdelkade",
        "commune_name": "زمالةالأمير عبد القادر",
        "daira_name_ascii": "ksar chellala",
        "daira_name": "قصر الشلالة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 469,
        "commune_name_ascii": "oued lilli",
        "commune_name": "وادي ليلي",
        "daira_name_ascii": "oued lili",
        "daira_name": "وادي ليلي",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 477,
        "commune_name_ascii": "sidi ali mellal",
        "commune_name": "سيدي علي ملال",
        "daira_name_ascii": "oued lili",
        "daira_name": "وادي ليلي",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 454,
        "commune_name_ascii": "djillali ben amar",
        "commune_name": "جيلالي بن عمار",
        "daira_name_ascii": "mechraa sfa",
        "daira_name": "مشرع الصفا",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 462,
        "commune_name_ascii": "mechraa safa",
        "commune_name": "مشرع الصفا",
        "daira_name_ascii": "mechraa sfa",
        "daira_name": "مشرع الصفا",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 481,
        "commune_name_ascii": "tagdempt",
        "commune_name": "تاقدمت",
        "daira_name_ascii": "mechraa sfa",
        "daira_name": "مشرع الصفا",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 450,
        "commune_name_ascii": "bougara",
        "commune_name": "بوقرة",
        "daira_name_ascii": "hamadia",
        "daira_name": "حمادية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 458,
        "commune_name_ascii": "hamadia",
        "commune_name": "حمادية",
        "daira_name_ascii": "hamadia",
        "daira_name": "حمادية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 471,
        "commune_name_ascii": "rechaiga",
        "commune_name": "الرشايقة",
        "daira_name_ascii": "hamadia",
        "daira_name": "حمادية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 484,
        "commune_name_ascii": "tidda",
        "commune_name": "تيدة",
        "daira_name_ascii": "oued lili",
        "daira_name": "وادي ليلي",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 467,
        "commune_name_ascii": "nadorah",
        "commune_name": "الناظورة",
        "daira_name_ascii": "mahdia",
        "daira_name": "مهدية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 483,
        "commune_name_ascii": "tiaret",
        "commune_name": "تيارت",
        "daira_name_ascii": "tiaret",
        "daira_name": "تيارت",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 464,
        "commune_name_ascii": "medroussa",
        "commune_name": "مدروسة",
        "daira_name_ascii": "medroussa",
        "daira_name": "مدروسة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 466,
        "commune_name_ascii": "mellakou",
        "commune_name": "ملاكو",
        "daira_name_ascii": "medroussa",
        "daira_name": "مدروسة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 478,
        "commune_name_ascii": "sidi bakhti",
        "commune_name": "سيدي بختي",
        "daira_name_ascii": "medroussa",
        "daira_name": "مدروسة",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 446,
        "commune_name_ascii": "ain deheb",
        "commune_name": "عين الذهب",
        "daira_name_ascii": "ain deheb",
        "daira_name": "عين الذهب",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 451,
        "commune_name_ascii": "chehaima",
        "commune_name": "شحيمة",
        "daira_name_ascii": "ain deheb",
        "daira_name": "عين الذهب",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 468,
        "commune_name_ascii": "naima",
        "commune_name": "النعيمة",
        "daira_name_ascii": "ain deheb",
        "daira_name": "عين الذهب",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 445,
        "commune_name_ascii": "ain bouchekif",
        "commune_name": "عين بوشقيف",
        "daira_name_ascii": "dahmouni",
        "daira_name": "دحموني",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 452,
        "commune_name_ascii": "dahmouni",
        "commune_name": "دحموني",
        "daira_name_ascii": "dahmouni",
        "daira_name": "دحموني",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 470,
        "commune_name_ascii": "rahouia",
        "commune_name": "الرحوية",
        "daira_name_ascii": "rahouia",
        "daira_name": "رحوية",
        "wilaya_code": "14",
        "wilaya_name_ascii": "tiaret",
        "wilaya_name": "تيارت"
    },
    {
        "id": 535,
        "commune_name_ascii": "mizrana",
        "commune_name": "ميزرانة",
        "daira_name_ascii": "tigzirt",
        "daira_name": "تيقزيرت",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 522,
        "commune_name_ascii": "idjeur",
        "commune_name": "إيجار",
        "daira_name_ascii": "bouzeguene",
        "daira_name": "بوزقن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 510,
        "commune_name_ascii": "beni-douala",
        "commune_name": "بني دوالة",
        "daira_name_ascii": "beni douala",
        "daira_name": "بني دوالة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 512,
        "commune_name_ascii": "beni-zikki",
        "commune_name": "بني زيكي",
        "daira_name_ascii": "bouzeguene",
        "daira_name": "بوزقن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 527,
        "commune_name_ascii": "illoula oumalou",
        "commune_name": "إيلولة أومالو",
        "daira_name_ascii": "bouzeguene",
        "daira_name": "بوزقن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 489,
        "commune_name_ascii": "agouni-gueghrane",
        "commune_name": "أقني قغران",
        "daira_name_ascii": "ouadhias",
        "daira_name": "واضية",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 493,
        "commune_name_ascii": "ait bouaddou",
        "commune_name": "أيت بوادو",
        "daira_name_ascii": "ouadhias",
        "daira_name": "واضية",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 538,
        "commune_name_ascii": "ouadhias",
        "commune_name": "واضية",
        "daira_name_ascii": "ouadhias",
        "daira_name": "واضية",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 547,
        "commune_name_ascii": "tizi n'tleta",
        "commune_name": "تيزي نثلاثة",
        "daira_name_ascii": "ouadhias",
        "daira_name": "واضية",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 488,
        "commune_name_ascii": "aghribs",
        "commune_name": "أغريب",
        "daira_name_ascii": "azeffoun",
        "daira_name": "أزفون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 498,
        "commune_name_ascii": "ait-chafaa",
        "commune_name": "أيت شافع",
        "daira_name_ascii": "azeffoun",
        "daira_name": "أزفون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 504,
        "commune_name_ascii": "akerrou",
        "commune_name": "أقرو",
        "daira_name_ascii": "azeffoun",
        "daira_name": "أزفون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 507,
        "commune_name_ascii": "azeffoun",
        "commune_name": "أزفون",
        "daira_name_ascii": "azeffoun",
        "daira_name": "أزفون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 525,
        "commune_name_ascii": "iflissen",
        "commune_name": "إفليسن",
        "daira_name_ascii": "tigzirt",
        "daira_name": "تيقزيرت",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 544,
        "commune_name_ascii": "tigzirt",
        "commune_name": "تيقزيرت",
        "daira_name_ascii": "tigzirt",
        "daira_name": "تيقزيرت",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 505,
        "commune_name_ascii": "assi-youcef",
        "commune_name": "أسي يوسف",
        "daira_name_ascii": "boghni",
        "daira_name": "بوغني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 513,
        "commune_name_ascii": "boghni",
        "commune_name": "بوغني",
        "daira_name_ascii": "boghni",
        "daira_name": "بوغني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 515,
        "commune_name_ascii": "bounouh",
        "commune_name": "بونوح",
        "daira_name_ascii": "boghni",
        "daira_name": "بوغني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 533,
        "commune_name_ascii": "mechtras",
        "commune_name": "مشطراس",
        "daira_name_ascii": "boghni",
        "daira_name": "بوغني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 517,
        "commune_name_ascii": "draa-ben-khedda",
        "commune_name": "ذراع بن خدة",
        "daira_name_ascii": "draa ben khedda",
        "daira_name": "ذراع بن خدة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 540,
        "commune_name_ascii": "sidi namane",
        "commune_name": "سيدي نعمان",
        "daira_name_ascii": "draa ben khedda",
        "daira_name": "ذراع بن خدة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 543,
        "commune_name_ascii": "tadmait",
        "commune_name": "تادمايت",
        "daira_name_ascii": "draa ben khedda",
        "daira_name": "ذراع بن خدة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 546,
        "commune_name_ascii": "tirmitine",
        "commune_name": "تيرمتين",
        "daira_name_ascii": "draa ben khedda",
        "daira_name": "ذراع بن خدة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 494,
        "commune_name_ascii": "ait boumahdi",
        "commune_name": "أيت بومهدي",
        "daira_name_ascii": "ouacif",
        "daira_name": "واسيف",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 501,
        "commune_name_ascii": "ait-toudert",
        "commune_name": "أيت تودرت",
        "daira_name_ascii": "ouacif",
        "daira_name": "واسيف",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 509,
        "commune_name_ascii": "beni-aissi",
        "commune_name": "بني عيسي",
        "daira_name_ascii": "beni douala",
        "daira_name": "بني دوالة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 537,
        "commune_name_ascii": "ouacif",
        "commune_name": "واسيف",
        "daira_name_ascii": "ouacif",
        "daira_name": "واسيف",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 495,
        "commune_name_ascii": "ait khellili",
        "commune_name": "أيت خليلي",
        "daira_name_ascii": "mekla",
        "daira_name": "مقلع",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 534,
        "commune_name_ascii": "mekla",
        "commune_name": "مقلع",
        "daira_name_ascii": "mekla",
        "daira_name": "مقلع",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 541,
        "commune_name_ascii": "souama",
        "commune_name": "صوامع",
        "daira_name_ascii": "mekla",
        "daira_name": "مقلع",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 511,
        "commune_name_ascii": "beni-yenni",
        "commune_name": "بني يني",
        "daira_name_ascii": "benni yenni",
        "daira_name": "بني يني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 521,
        "commune_name_ascii": "iboudrarene",
        "commune_name": "إبودرارن",
        "daira_name_ascii": "benni yenni",
        "daira_name": "بني يني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 549,
        "commune_name_ascii": "tizi-ouzou",
        "commune_name": "تيزي وزو",
        "daira_name_ascii": "tizi ouzou",
        "daira_name": "تيزي وزو",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 487,
        "commune_name_ascii": "abi-youcef",
        "commune_name": "أبي يوسف",
        "daira_name_ascii": "ain el hammam",
        "daira_name": "عين الحمام",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 490,
        "commune_name_ascii": "ain-el-hammam",
        "commune_name": "عين الحمام",
        "daira_name_ascii": "ain el hammam",
        "daira_name": "عين الحمام",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 502,
        "commune_name_ascii": "ait-yahia",
        "commune_name": "أيت يحيى",
        "daira_name_ascii": "ain el hammam",
        "daira_name": "عين الحمام",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 503,
        "commune_name_ascii": "akbil",
        "commune_name": "اقبيل",
        "daira_name_ascii": "ain el hammam",
        "daira_name": "عين الحمام",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 514,
        "commune_name_ascii": "boudjima",
        "commune_name": "بوجيمة",
        "daira_name_ascii": "makouda",
        "daira_name": "ماكودة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 532,
        "commune_name_ascii": "makouda",
        "commune_name": "ماكودة",
        "daira_name_ascii": "makouda",
        "daira_name": "ماكودة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 491,
        "commune_name_ascii": "ain-zaouia",
        "commune_name": "عين الزاوية",
        "daira_name_ascii": "draa el mizan",
        "daira_name": "ذراع الميزان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 496,
        "commune_name_ascii": "ait yahia moussa",
        "commune_name": "أيت يحي موسى",
        "daira_name_ascii": "draa el mizan",
        "daira_name": "ذراع الميزان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 518,
        "commune_name_ascii": "draa-el-mizan",
        "commune_name": "ذراع الميزان",
        "daira_name_ascii": "draa el mizan",
        "daira_name": "ذراع الميزان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 520,
        "commune_name_ascii": "frikat",
        "commune_name": "فريقات",
        "daira_name_ascii": "draa el mizan",
        "daira_name": "ذراع الميزان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 536,
        "commune_name_ascii": "m'kira",
        "commune_name": "مكيرة",
        "daira_name_ascii": "tizi-ghenif",
        "daira_name": "تيزي غنيف",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 548,
        "commune_name_ascii": "tizi-gheniff",
        "commune_name": "تيزي غنيف",
        "daira_name_ascii": "tizi-ghenif",
        "daira_name": "تيزي غنيف",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 552,
        "commune_name_ascii": "yatafene",
        "commune_name": "يطافن",
        "daira_name_ascii": "benni yenni",
        "daira_name": "بني يني",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 526,
        "commune_name_ascii": "illilten",
        "commune_name": "إيليلتن",
        "daira_name_ascii": "iferhounene",
        "daira_name": "إفرحونان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 528,
        "commune_name_ascii": "imsouhal",
        "commune_name": "إمسوحال",
        "daira_name_ascii": "iferhounene",
        "daira_name": "إفرحونان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 506,
        "commune_name_ascii": "azazga",
        "commune_name": "عزازقة",
        "daira_name_ascii": "azazga",
        "daira_name": "عزازقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 519,
        "commune_name_ascii": "freha",
        "commune_name": "فريحة",
        "daira_name_ascii": "azazga",
        "daira_name": "عزازقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 524,
        "commune_name_ascii": "ifigha",
        "commune_name": "إيفيغاء",
        "daira_name_ascii": "azazga",
        "daira_name": "عزازقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 551,
        "commune_name_ascii": "yakourene",
        "commune_name": "إعكورن",
        "daira_name_ascii": "azazga",
        "daira_name": "عزازقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 553,
        "commune_name_ascii": "zekri",
        "commune_name": "زكري",
        "daira_name_ascii": "azazga",
        "daira_name": "عزازقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 492,
        "commune_name_ascii": "ait aggouacha",
        "commune_name": "أيت عقواشة",
        "daira_name_ascii": "larbaa nath iraten",
        "daira_name": "الأربعاء ناث إيراثن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 529,
        "commune_name_ascii": "irdjen",
        "commune_name": "إيرجن",
        "daira_name_ascii": "larbaa nath iraten",
        "daira_name": "الأربعاء ناث إيراثن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 530,
        "commune_name_ascii": "larbaa nath irathen",
        "commune_name": "الأربعاء ناث إيراثن",
        "daira_name_ascii": "larbaa nath iraten",
        "daira_name": "الأربعاء ناث إيراثن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 500,
        "commune_name_ascii": "ait-oumalou",
        "commune_name": "أيتأومالو",
        "daira_name_ascii": "tizi rached",
        "daira_name": "تيزي راشد",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 550,
        "commune_name_ascii": "tizi-rached",
        "commune_name": "تيزي راشد",
        "daira_name_ascii": "tizi rached",
        "daira_name": "تيزي راشد",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 497,
        "commune_name_ascii": "ait-aissa-mimoun",
        "commune_name": "أيت عيسى ميمون",
        "daira_name_ascii": "ouaguenoun",
        "daira_name": "واقنون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 539,
        "commune_name_ascii": "ouaguenoun",
        "commune_name": "واقنون",
        "daira_name_ascii": "ouaguenoun",
        "daira_name": "واقنون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 545,
        "commune_name_ascii": "timizart",
        "commune_name": "تيميزار",
        "daira_name_ascii": "ouaguenoun",
        "daira_name": "واقنون",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 531,
        "commune_name_ascii": "maatkas",
        "commune_name": "معاتقة",
        "daira_name_ascii": "maatkas",
        "daira_name": "معاتقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 542,
        "commune_name_ascii": "souk-el-tenine",
        "commune_name": "سوق الإثنين",
        "daira_name_ascii": "maatkas",
        "daira_name": "معاتقة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 499,
        "commune_name_ascii": "ait-mahmoud",
        "commune_name": "أيت محمود",
        "daira_name_ascii": "beni douala",
        "daira_name": "بني دوالة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 508,
        "commune_name_ascii": "beni zmenzer",
        "commune_name": "بني زمنزار",
        "daira_name_ascii": "beni douala",
        "daira_name": "بني دوالة",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 523,
        "commune_name_ascii": "iferhounene",
        "commune_name": "إفرحونان",
        "daira_name_ascii": "iferhounene",
        "daira_name": "إفرحونان",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 516,
        "commune_name_ascii": "bouzeguene",
        "commune_name": "بوزقن",
        "daira_name_ascii": "bouzeguene",
        "daira_name": "بوزقن",
        "wilaya_code": "15",
        "wilaya_name_ascii": "tizi ouzou",
        "wilaya_name": "تيزي وزو"
    },
    {
        "id": 588,
        "commune_name_ascii": "hussein dey",
        "commune_name": "حسين داي",
        "daira_name_ascii": "hussein dey",
        "daira_name": "حسين داي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 592,
        "commune_name_ascii": "les eucalyptus",
        "commune_name": "الكاليتوس",
        "daira_name_ascii": "baraki",
        "daira_name": "براقي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 606,
        "commune_name_ascii": "sidi moussa",
        "commune_name": "سيدي موسى",
        "daira_name_ascii": "baraki",
        "daira_name": "براقي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 591,
        "commune_name_ascii": "kouba",
        "commune_name": "القبة",
        "daira_name_ascii": "hussein dey",
        "daira_name": "حسين داي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 594,
        "commune_name_ascii": "mohamed belouzdad",
        "commune_name": "محمد بلوزداد",
        "daira_name_ascii": "hussein dey",
        "daira_name": "حسين داي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 555,
        "commune_name_ascii": "ain taya",
        "commune_name": "عين طاية",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 558,
        "commune_name_ascii": "bab ezzouar",
        "commune_name": "باب الزوار",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 569,
        "commune_name_ascii": "bordj el kiffan",
        "commune_name": "برج الكيفان",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 574,
        "commune_name_ascii": "dar el beida",
        "commune_name": "الدار البيضاء",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 584,
        "commune_name_ascii": "el marsa",
        "commune_name": "المرسى",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 595,
        "commune_name_ascii": "mohammadia",
        "commune_name": "المحمدية",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 566,
        "commune_name_ascii": "bir touta",
        "commune_name": "بئر توتة",
        "daira_name_ascii": "birtouta",
        "daira_name": "بئر توتة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 598,
        "commune_name_ascii": "ouled chebel",
        "commune_name": "اولاد شبل",
        "daira_name_ascii": "birtouta",
        "daira_name": "بئر توتة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 609,
        "commune_name_ascii": "tessala el merdja",
        "commune_name": "تسالة المرجة",
        "daira_name_ascii": "birtouta",
        "daira_name": "بئر توتة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 587,
        "commune_name_ascii": "herraoua",
        "commune_name": "هراوة",
        "daira_name_ascii": "rouiba",
        "daira_name": "الرويبة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 602,
        "commune_name_ascii": "reghaia",
        "commune_name": "رغاية",
        "daira_name_ascii": "rouiba",
        "daira_name": "الرويبة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 603,
        "commune_name_ascii": "rouiba",
        "commune_name": "الرويبة",
        "daira_name_ascii": "rouiba",
        "daira_name": "الرويبة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 593,
        "commune_name_ascii": "maalma",
        "commune_name": "المعالمة",
        "daira_name_ascii": "zeralda",
        "daira_name": "زرالدة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 600,
        "commune_name_ascii": "rahmania",
        "commune_name": "الرحمانية",
        "daira_name_ascii": "zeralda",
        "daira_name": "زرالدة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 607,
        "commune_name_ascii": "souidania",
        "commune_name": "سويدانية",
        "daira_name_ascii": "zeralda",
        "daira_name": "زرالدة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 608,
        "commune_name_ascii": "staoueli",
        "commune_name": "سطاوالي",
        "daira_name_ascii": "zeralda",
        "daira_name": "زرالدة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 610,
        "commune_name_ascii": "zeralda",
        "commune_name": "زرالدة",
        "daira_name_ascii": "zeralda",
        "daira_name": "زرالدة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 559,
        "commune_name_ascii": "baba hassen",
        "commune_name": "بابا حسن",
        "daira_name_ascii": "draria",
        "daira_name": "الدرارية",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 577,
        "commune_name_ascii": "douira",
        "commune_name": "الدويرة",
        "daira_name_ascii": "draria",
        "daira_name": "الدرارية",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 578,
        "commune_name_ascii": "draria",
        "commune_name": "الدرارية",
        "daira_name_ascii": "draria",
        "daira_name": "الدرارية",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 579,
        "commune_name_ascii": "el achour",
        "commune_name": "العاشور",
        "daira_name_ascii": "draria",
        "daira_name": "الدرارية",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 590,
        "commune_name_ascii": "khraissia",
        "commune_name": "الخرايسية",
        "daira_name_ascii": "draria",
        "daira_name": "الدرارية",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 554,
        "commune_name_ascii": "ain benian",
        "commune_name": "عين بنيان",
        "daira_name_ascii": "cheraga",
        "daira_name": "الشراقة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 573,
        "commune_name_ascii": "cheraga",
        "commune_name": "الشراقة",
        "daira_name_ascii": "cheraga",
        "daira_name": "الشراقة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 575,
        "commune_name_ascii": "dely ibrahim",
        "commune_name": "دالي ابراهيم",
        "daira_name_ascii": "cheraga",
        "daira_name": "الشراقة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 586,
        "commune_name_ascii": "hammamet",
        "commune_name": "الحمامات",
        "daira_name_ascii": "cheraga",
        "daira_name": "الشراقة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 599,
        "commune_name_ascii": "ouled fayet",
        "commune_name": "اولاد فايت",
        "daira_name_ascii": "cheraga",
        "daira_name": "الشراقة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 556,
        "commune_name_ascii": "alger centre",
        "commune_name": "الجزائر الوسطى",
        "daira_name_ascii": "sidi m'hamed",
        "daira_name": "سيدي امحمد",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 582,
        "commune_name_ascii": "el madania",
        "commune_name": "المدنية",
        "daira_name_ascii": "sidi m'hamed",
        "daira_name": "سيدي امحمد",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 585,
        "commune_name_ascii": "el mouradia",
        "commune_name": "المرادية",
        "daira_name_ascii": "sidi m'hamed",
        "daira_name": "سيدي امحمد",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 605,
        "commune_name_ascii": "sidi m'hamed",
        "commune_name": "سيدي امحمد",
        "daira_name_ascii": "sidi m'hamed",
        "daira_name": "سيدي امحمد",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 604,
        "commune_name_ascii": "sehaoula",
        "commune_name": "السحاولة",
        "daira_name_ascii": "bir mourad rais",
        "daira_name": "بئر مراد رايس",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 567,
        "commune_name_ascii": "bologhine ibnou ziri",
        "commune_name": "بولوغين بن زيري",
        "daira_name_ascii": "bab el oued",
        "daira_name": "باب الوادي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 572,
        "commune_name_ascii": "casbah",
        "commune_name": "القصبة",
        "daira_name_ascii": "bab el oued",
        "daira_name": "باب الوادي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 596,
        "commune_name_ascii": "oued koriche",
        "commune_name": "وادي قريش",
        "daira_name_ascii": "bab el oued",
        "daira_name": "باب الوادي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 601,
        "commune_name_ascii": "rais hamidou",
        "commune_name": "الرايس حميدو",
        "daira_name_ascii": "bab el oued",
        "daira_name": "باب الوادي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 564,
        "commune_name_ascii": "bir mourad rais",
        "commune_name": "بئر مراد رايس",
        "daira_name_ascii": "bir mourad rais",
        "daira_name": "بئر مراد رايس",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 565,
        "commune_name_ascii": "birkhadem",
        "commune_name": "بئر خادم",
        "daira_name_ascii": "bir mourad rais",
        "daira_name": "بئر مراد رايس",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 576,
        "commune_name_ascii": "djasr kasentina",
        "commune_name": "جسر قسنطينة",
        "daira_name_ascii": "bir mourad rais",
        "daira_name": "بئر مراد رايس",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 589,
        "commune_name_ascii": "hydra",
        "commune_name": "حيدرة",
        "daira_name_ascii": "bir mourad rais",
        "daira_name": "بئر مراد رايس",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 583,
        "commune_name_ascii": "el magharia",
        "commune_name": "المغارية",
        "daira_name_ascii": "hussein dey",
        "daira_name": "حسين داي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 562,
        "commune_name_ascii": "ben aknoun",
        "commune_name": "ابن عكنون",
        "daira_name_ascii": "bouzareah",
        "daira_name": "بوزريعة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 563,
        "commune_name_ascii": "beni messous",
        "commune_name": "بني مسوس",
        "daira_name_ascii": "bouzareah",
        "daira_name": "بوزريعة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 571,
        "commune_name_ascii": "bouzareah",
        "commune_name": "بوزريعة",
        "daira_name_ascii": "bouzareah",
        "daira_name": "بوزريعة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 580,
        "commune_name_ascii": "el biar",
        "commune_name": "الابيار",
        "daira_name_ascii": "bouzareah",
        "daira_name": "بوزريعة",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 560,
        "commune_name_ascii": "bachedjerah",
        "commune_name": "باش جراح",
        "daira_name_ascii": "el harrach",
        "daira_name": "الحراش",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 570,
        "commune_name_ascii": "bourouba",
        "commune_name": "بوروبة",
        "daira_name_ascii": "el harrach",
        "daira_name": "الحراش",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 581,
        "commune_name_ascii": "el harrach",
        "commune_name": "الحراش",
        "daira_name_ascii": "el harrach",
        "daira_name": "الحراش",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 597,
        "commune_name_ascii": "oued smar",
        "commune_name": "وادي السمار",
        "daira_name_ascii": "el harrach",
        "daira_name": "الحراش",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 561,
        "commune_name_ascii": "baraki",
        "commune_name": "براقي",
        "daira_name_ascii": "baraki",
        "daira_name": "براقي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 568,
        "commune_name_ascii": "bordj el bahri",
        "commune_name": "برج البحري",
        "daira_name_ascii": "dar el beida",
        "daira_name": "الدار البيضاء",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 557,
        "commune_name_ascii": "bab el oued",
        "commune_name": "باب الوادي",
        "daira_name_ascii": "bab el oued",
        "daira_name": "باب الوادي",
        "wilaya_code": "16",
        "wilaya_name_ascii": "alger",
        "wilaya_name": "الجزائر"
    },
    {
        "id": 634,
        "commune_name_ascii": "hassi el euch",
        "commune_name": "حاسي العش",
        "daira_name_ascii": "hassi bahbah",
        "daira_name": "حاسي بحبح",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 612,
        "commune_name_ascii": "ain el ibel",
        "commune_name": "عين الإبل",
        "daira_name_ascii": "ain el ibel",
        "daira_name": "عين الإبل",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 626,
        "commune_name_ascii": "el guedid",
        "commune_name": "القديد",
        "daira_name_ascii": "charef",
        "daira_name": "الشارف",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 621,
        "commune_name_ascii": "charef",
        "commune_name": "الشارف",
        "daira_name_ascii": "charef",
        "daira_name": "الشارف",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 618,
        "commune_name_ascii": "benyagoub",
        "commune_name": "بن يعقوب",
        "daira_name_ascii": "charef",
        "daira_name": "الشارف",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 642,
        "commune_name_ascii": "sidi baizid",
        "commune_name": "سيدي بايزيد",
        "daira_name_ascii": "dar chioukh",
        "daira_name": "دار الشيوخ",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 637,
        "commune_name_ascii": "m'liliha",
        "commune_name": "مليليحة",
        "daira_name_ascii": "dar chioukh",
        "daira_name": "دار الشيوخ",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 622,
        "commune_name_ascii": "dar chioukh",
        "commune_name": "دار الشيوخ",
        "daira_name_ascii": "dar chioukh",
        "daira_name": "دار الشيوخ",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 644,
        "commune_name_ascii": "taadmit",
        "commune_name": "تعظميت",
        "daira_name_ascii": "ain el ibel",
        "daira_name": "عين الإبل",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 632,
        "commune_name_ascii": "had sahary",
        "commune_name": "حد الصحاري",
        "daira_name_ascii": "had sahary",
        "daira_name": "حد الصحاري",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 620,
        "commune_name_ascii": "bouira lahdab",
        "commune_name": "بويرة الأحداب",
        "daira_name_ascii": "had sahary",
        "daira_name": "حد الصحاري",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 613,
        "commune_name_ascii": "ain fekka",
        "commune_name": "عين فقه",
        "daira_name_ascii": "had sahary",
        "daira_name": "حد الصحاري",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 643,
        "commune_name_ascii": "sidi laadjel",
        "commune_name": "سيدي لعجال",
        "daira_name_ascii": "sidi laadjel",
        "daira_name": "سيدي لعجال",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 635,
        "commune_name_ascii": "hassi fedoul",
        "commune_name": "حاسي فدول",
        "daira_name_ascii": "sidi laadjel",
        "daira_name": "سيدي لعجال",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 628,
        "commune_name_ascii": "el khemis",
        "commune_name": "الخميس",
        "daira_name_ascii": "sidi laadjel",
        "daira_name": "سيدي لعجال",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 641,
        "commune_name_ascii": "selmana",
        "commune_name": "سلمانة",
        "daira_name_ascii": "messaad",
        "daira_name": "مسعد",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 640,
        "commune_name_ascii": "sed rahal",
        "commune_name": "سد الرحال",
        "daira_name_ascii": "messaad",
        "daira_name": "مسعد",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 636,
        "commune_name_ascii": "messaad",
        "commune_name": "مسعد",
        "daira_name_ascii": "messaad",
        "daira_name": "مسعد",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 631,
        "commune_name_ascii": "guettara",
        "commune_name": "قطارة",
        "daira_name_ascii": "messaad",
        "daira_name": "مسعد",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 623,
        "commune_name_ascii": "deldoul",
        "commune_name": "دلدول",
        "daira_name_ascii": "messaad",
        "daira_name": "مسعد",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 646,
        "commune_name_ascii": "zaccar",
        "commune_name": "زكار",
        "daira_name_ascii": "ain el ibel",
        "daira_name": "عين الإبل",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 625,
        "commune_name_ascii": "douis",
        "commune_name": "دويس",
        "daira_name_ascii": "el idrissia",
        "daira_name": "الادريسية",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 627,
        "commune_name_ascii": "el idrissia",
        "commune_name": "الادريسية",
        "daira_name_ascii": "el idrissia",
        "daira_name": "الادريسية",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 611,
        "commune_name_ascii": "ain chouhada",
        "commune_name": "عين الشهداء",
        "daira_name_ascii": "el idrissia",
        "daira_name": "الادريسية",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 624,
        "commune_name_ascii": "djelfa",
        "commune_name": "الجلفة",
        "daira_name_ascii": "djelfa",
        "daira_name": "الجلفة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 619,
        "commune_name_ascii": "birine",
        "commune_name": "بيرين",
        "daira_name_ascii": "birine",
        "daira_name": "بيرين",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 639,
        "commune_name_ascii": "oum laadham",
        "commune_name": "أم العظام",
        "daira_name_ascii": "faidh el botma",
        "daira_name": "فيض البطمة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 629,
        "commune_name_ascii": "faidh el botma",
        "commune_name": "فيض البطمة",
        "daira_name_ascii": "faidh el botma",
        "daira_name": "فيض البطمة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 616,
        "commune_name_ascii": "amourah",
        "commune_name": "عمورة",
        "daira_name_ascii": "faidh el botma",
        "daira_name": "فيض البطمة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 645,
        "commune_name_ascii": "zaafrane",
        "commune_name": "زعفران",
        "daira_name_ascii": "hassi bahbah",
        "daira_name": "حاسي بحبح",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 630,
        "commune_name_ascii": "guernini",
        "commune_name": "قرنيني",
        "daira_name_ascii": "ain oussera",
        "daira_name": "عين وسارة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 615,
        "commune_name_ascii": "ain oussera",
        "commune_name": "عين وسارة",
        "daira_name_ascii": "ain oussera",
        "daira_name": "عين وسارة",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 617,
        "commune_name_ascii": "benhar",
        "commune_name": "بنهار",
        "daira_name_ascii": "birine",
        "daira_name": "بيرين",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 614,
        "commune_name_ascii": "ain maabed",
        "commune_name": "عين معبد",
        "daira_name_ascii": "hassi bahbah",
        "daira_name": "حاسي بحبح",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 633,
        "commune_name_ascii": "hassi bahbah",
        "commune_name": "حاسي بحبح",
        "daira_name_ascii": "hassi bahbah",
        "daira_name": "حاسي بحبح",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 638,
        "commune_name_ascii": "moudjebara",
        "commune_name": "مجبارة",
        "daira_name_ascii": "ain el ibel",
        "daira_name": "عين الإبل",
        "wilaya_code": "17",
        "wilaya_name_ascii": "djelfa",
        "wilaya_name": "الجلفة"
    },
    {
        "id": 662,
        "commune_name_ascii": "jijel",
        "commune_name": "جيجل",
        "daira_name_ascii": "jijel",
        "daira_name": "جيجل",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 656,
        "commune_name_ascii": "el aouana",
        "commune_name": "العوانة",
        "daira_name_ascii": "el aouana",
        "daira_name": "العوانة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 668,
        "commune_name_ascii": "selma benziada",
        "commune_name": "سلمى بن زيادة",
        "daira_name_ascii": "el aouana",
        "daira_name": "العوانة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 660,
        "commune_name_ascii": "erraguene souissi",
        "commune_name": "أراقن سويسي",
        "daira_name_ascii": "ziamah mansouriah",
        "daira_name": "زيامة منصورية",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 650,
        "commune_name_ascii": "boussif ouled askeur",
        "commune_name": "بوسيف أولاد عسكر",
        "daira_name_ascii": "taher",
        "daira_name": "الطاهير",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 674,
        "commune_name_ascii": "ziama mansouriah",
        "commune_name": "زيامة منصورية",
        "daira_name_ascii": "ziamah mansouriah",
        "daira_name": "زيامة منصورية",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 651,
        "commune_name_ascii": "chahna",
        "commune_name": "الشحنة",
        "daira_name_ascii": "taher",
        "daira_name": "الطاهير",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 659,
        "commune_name_ascii": "emir abdelkader",
        "commune_name": "الامير عبد القادر",
        "daira_name_ascii": "taher",
        "daira_name": "الطاهير",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 665,
        "commune_name_ascii": "oudjana",
        "commune_name": "وجانة",
        "daira_name_ascii": "taher",
        "daira_name": "الطاهير",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 672,
        "commune_name_ascii": "taher",
        "commune_name": "الطاهير",
        "daira_name_ascii": "taher",
        "daira_name": "الطاهير",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 652,
        "commune_name_ascii": "chekfa",
        "commune_name": "الشقفة",
        "daira_name_ascii": "chekfa",
        "daira_name": "الشقفة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 657,
        "commune_name_ascii": "el kennar nouchfi",
        "commune_name": "القنار نشفي",
        "daira_name_ascii": "chekfa",
        "daira_name": "الشقفة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 670,
        "commune_name_ascii": "sidi abdelaziz",
        "commune_name": "سيدي عبد العزيز",
        "daira_name_ascii": "chekfa",
        "daira_name": "الشقفة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 658,
        "commune_name_ascii": "el milia",
        "commune_name": "الميلية",
        "daira_name_ascii": "el milia",
        "daira_name": "الميلية",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 667,
        "commune_name_ascii": "ouled yahia khadrouch",
        "commune_name": "أولاد يحيى خدروش",
        "daira_name_ascii": "el milia",
        "daira_name": "الميلية",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 666,
        "commune_name_ascii": "ouled rabah",
        "commune_name": "أولاد رابح",
        "daira_name_ascii": "sidi marouf",
        "daira_name": "سيدي معروف",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 671,
        "commune_name_ascii": "sidi marouf",
        "commune_name": "سيدي معروف",
        "daira_name_ascii": "sidi marouf",
        "daira_name": "سيدي معروف",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 661,
        "commune_name_ascii": "ghebala",
        "commune_name": "غبالة",
        "daira_name_ascii": "settara",
        "daira_name": "السطارة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 669,
        "commune_name_ascii": "settara",
        "commune_name": "السطارة",
        "daira_name_ascii": "settara",
        "daira_name": "السطارة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 649,
        "commune_name_ascii": "bouraoui belhadef",
        "commune_name": "بوراوي بلهادف",
        "daira_name_ascii": "el ancer",
        "daira_name": "العنصر",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 655,
        "commune_name_ascii": "el ancer",
        "commune_name": "العنصر",
        "daira_name_ascii": "el ancer",
        "daira_name": "العنصر",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 664,
        "commune_name_ascii": "khiri oued adjoul",
        "commune_name": "خيري واد عجول",
        "daira_name_ascii": "el ancer",
        "daira_name": "العنصر",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 654,
        "commune_name_ascii": "djimla",
        "commune_name": "جيملة",
        "daira_name_ascii": "djimla",
        "daira_name": "جيملة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 663,
        "commune_name_ascii": "kaous",
        "commune_name": "قاوس",
        "daira_name_ascii": "texenna",
        "daira_name": "تاكسنة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 673,
        "commune_name_ascii": "texenna",
        "commune_name": "تاكسنة",
        "daira_name_ascii": "texenna",
        "daira_name": "تاكسنة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 647,
        "commune_name_ascii": "bordj t'har",
        "commune_name": "برج الطهر",
        "daira_name_ascii": "chekfa",
        "daira_name": "الشقفة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 648,
        "commune_name_ascii": "boudria beniyadjis",
        "commune_name": "بودريعة بنيياجيس",
        "daira_name_ascii": "djimla",
        "daira_name": "جيملة",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 653,
        "commune_name_ascii": "djemaa beni habibi",
        "commune_name": "الجمعة بني حبيبي",
        "daira_name_ascii": "el ancer",
        "daira_name": "العنصر",
        "wilaya_code": "18",
        "wilaya_name_ascii": "jijel",
        "wilaya_name": "جيجل"
    },
    {
        "id": 726,
        "commune_name_ascii": "rosfa",
        "commune_name": "الرصفة",
        "daira_name_ascii": "salah bey",
        "daira_name": "صالح باي",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 721,
        "commune_name_ascii": "oued el bared",
        "commune_name": "واد البارد",
        "daira_name_ascii": "amoucha",
        "daira_name": "عموشة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 734,
        "commune_name_ascii": "tizi n'bechar",
        "commune_name": "تيزي نبشار",
        "daira_name_ascii": "amoucha",
        "daira_name": "عموشة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 720,
        "commune_name_ascii": "mezloug",
        "commune_name": "مزلوق",
        "daira_name_ascii": "ain arnat",
        "daira_name": "عين أرنات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 709,
        "commune_name_ascii": "guellal",
        "commune_name": "قلال",
        "daira_name_ascii": "ain oulmene",
        "daira_name": "عين ولمان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 717,
        "commune_name_ascii": "kasr el abtal",
        "commune_name": "قصر الابطال",
        "daira_name_ascii": "ain oulmene",
        "daira_name": "عين ولمان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 724,
        "commune_name_ascii": "ouled si ahmed",
        "commune_name": "أولاد سي أحمد",
        "daira_name_ascii": "ain oulmene",
        "daira_name": "عين ولمان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 684,
        "commune_name_ascii": "ait naoual mezada",
        "commune_name": "أيت نوال مزادة",
        "daira_name_ascii": "bouandas",
        "daira_name": "بوعنداس",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 685,
        "commune_name_ascii": "ait-tizi",
        "commune_name": "ايت تيزي",
        "daira_name_ascii": "bouandas",
        "daira_name": "بوعنداس",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 699,
        "commune_name_ascii": "bouandas",
        "commune_name": "بوعنداس",
        "daira_name_ascii": "bouandas",
        "daira_name": "بوعنداس",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 701,
        "commune_name_ascii": "bousselam",
        "commune_name": "بوسلام",
        "daira_name_ascii": "bouandas",
        "daira_name": "بوعنداس",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 713,
        "commune_name_ascii": "hamam soukhna",
        "commune_name": "حمام السخنة",
        "daira_name_ascii": "hammam sokhna",
        "daira_name": "حمام السخنة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 732,
        "commune_name_ascii": "taya",
        "commune_name": "الطاية",
        "daira_name_ascii": "hammam sokhna",
        "daira_name": "حمام السخنة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 733,
        "commune_name_ascii": "tella",
        "commune_name": "التلة",
        "daira_name_ascii": "hammam sokhna",
        "daira_name": "حمام السخنة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 680,
        "commune_name_ascii": "ain oulmene",
        "commune_name": "عين ولمان",
        "daira_name_ascii": "ain oulmene",
        "daira_name": "عين ولمان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 702,
        "commune_name_ascii": "boutaleb",
        "commune_name": "بوطالب",
        "daira_name_ascii": "salah bey",
        "daira_name": "صالح باي",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 714,
        "commune_name_ascii": "hamma",
        "commune_name": "الحامة",
        "daira_name_ascii": "salah bey",
        "daira_name": "صالح باي",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 725,
        "commune_name_ascii": "ouled tebben",
        "commune_name": "أولاد تبان",
        "daira_name_ascii": "salah bey",
        "daira_name": "صالح باي",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 686,
        "commune_name_ascii": "amoucha",
        "commune_name": "عموشة",
        "daira_name_ascii": "amoucha",
        "daira_name": "عموشة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 727,
        "commune_name_ascii": "salah bey",
        "commune_name": "صالح باي",
        "daira_name_ascii": "salah bey",
        "daira_name": "صالح باي",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 677,
        "commune_name_ascii": "ain azel",
        "commune_name": "عين أزال",
        "daira_name_ascii": "ain azel",
        "daira_name": "عين أزال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 679,
        "commune_name_ascii": "ain lahdjar",
        "commune_name": "عين الحجر",
        "daira_name_ascii": "ain azel",
        "daira_name": "عين أزال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 689,
        "commune_name_ascii": "beidha bordj",
        "commune_name": "بيضاء برج",
        "daira_name_ascii": "ain azel",
        "daira_name": "عين أزال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 697,
        "commune_name_ascii": "bir haddada",
        "commune_name": "بئر حدادة",
        "daira_name_ascii": "ain azel",
        "daira_name": "عين أزال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 711,
        "commune_name_ascii": "guenzet",
        "commune_name": "قنزات",
        "daira_name_ascii": "guenzet",
        "daira_name": "قنزات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 716,
        "commune_name_ascii": "harbil",
        "commune_name": "حربيل",
        "daira_name_ascii": "guenzet",
        "daira_name": "قنزات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 682,
        "commune_name_ascii": "ain-roua",
        "commune_name": "عين الروى",
        "daira_name_ascii": "bougaa",
        "daira_name": "بوقاعة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 694,
        "commune_name_ascii": "beni oussine",
        "commune_name": "بني وسين",
        "daira_name_ascii": "bougaa",
        "daira_name": "بوقاعة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 707,
        "commune_name_ascii": "el ouricia",
        "commune_name": "أوريسيا",
        "daira_name_ascii": "ain arnat",
        "daira_name": "عين أرنات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 700,
        "commune_name_ascii": "bougaa",
        "commune_name": "بوقاعة",
        "daira_name_ascii": "bougaa",
        "daira_name": "بوقاعة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 705,
        "commune_name_ascii": "draa-kebila",
        "commune_name": "ذراع قبيلة",
        "daira_name_ascii": "hammam guergour",
        "daira_name": "حمام قرقور",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 715,
        "commune_name_ascii": "hammam guergour",
        "commune_name": "حمام قرقور",
        "daira_name_ascii": "hammam guergour",
        "daira_name": "حمام قرقور",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 729,
        "commune_name_ascii": "setif",
        "commune_name": "سطيف",
        "daira_name_ascii": "setif",
        "daira_name": "سطيف",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 678,
        "commune_name_ascii": "ain el kebira",
        "commune_name": "عين الكبيرة",
        "daira_name_ascii": "ain el kebira",
        "daira_name": "عين الكبيرة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 703,
        "commune_name_ascii": "dehamcha",
        "commune_name": "الدهامشة",
        "daira_name_ascii": "ain el kebira",
        "daira_name": "عين الكبيرة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 722,
        "commune_name_ascii": "ouled addouane",
        "commune_name": "أولاد عدوان",
        "daira_name_ascii": "ain el kebira",
        "daira_name": "عين الكبيرة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 683,
        "commune_name_ascii": "ain-sebt",
        "commune_name": "عين السبت",
        "daira_name_ascii": "beni aziz",
        "daira_name": "بني عزيز",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 695,
        "commune_name_ascii": "beni-aziz",
        "commune_name": "بني عزيز",
        "daira_name_ascii": "beni aziz",
        "daira_name": "بني عزيز",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 718,
        "commune_name_ascii": "maaouia",
        "commune_name": "معاوية",
        "daira_name_ascii": "beni aziz",
        "daira_name": "بني عزيز",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 690,
        "commune_name_ascii": "bellaa",
        "commune_name": "بلاعة",
        "daira_name_ascii": "bir el arch",
        "daira_name": "بئر العرش",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 698,
        "commune_name_ascii": "bir-el-arch",
        "commune_name": "بئر العرش",
        "daira_name_ascii": "bir el arch",
        "daira_name": "بئر العرش",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 708,
        "commune_name_ascii": "el-ouldja",
        "commune_name": "الولجة",
        "daira_name_ascii": "bir el arch",
        "daira_name": "بئر العرش",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 730,
        "commune_name_ascii": "tachouda",
        "commune_name": "تاشودة",
        "daira_name_ascii": "bir el arch",
        "daira_name": "بئر العرش",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 731,
        "commune_name_ascii": "tala-ifacene",
        "commune_name": "تالة إيفاسن",
        "daira_name_ascii": "maoklane",
        "daira_name": "ماوكلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 728,
        "commune_name_ascii": "serdj-el-ghoul",
        "commune_name": "سرج الغول",
        "daira_name_ascii": "babor",
        "daira_name": "بابور",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 712,
        "commune_name_ascii": "guidjel",
        "commune_name": "قجال",
        "daira_name_ascii": "guidjel",
        "daira_name": "قجال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 723,
        "commune_name_ascii": "ouled sabor",
        "commune_name": "أولاد صابر",
        "daira_name_ascii": "guidjel",
        "daira_name": "قجال",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 688,
        "commune_name_ascii": "bazer-sakra",
        "commune_name": "بازر سكرة",
        "daira_name_ascii": "el eulma",
        "daira_name": "العلمة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 706,
        "commune_name_ascii": "el eulma",
        "commune_name": "العلمة",
        "daira_name_ascii": "el eulma",
        "daira_name": "العلمة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 710,
        "commune_name_ascii": "guelta zerka",
        "commune_name": "قلتة زرقاء",
        "daira_name_ascii": "el eulma",
        "daira_name": "العلمة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 692,
        "commune_name_ascii": "beni fouda",
        "commune_name": "بني فودة",
        "daira_name_ascii": "djemila",
        "daira_name": "جميلة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 704,
        "commune_name_ascii": "djemila",
        "commune_name": "جميلة",
        "daira_name_ascii": "djemila",
        "daira_name": "جميلة",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 681,
        "commune_name_ascii": "ain-legradj",
        "commune_name": "عين لقراج",
        "daira_name_ascii": "beni ourtilane",
        "daira_name": "بني ورتيلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 691,
        "commune_name_ascii": "beni chebana",
        "commune_name": "بني شبانة",
        "daira_name_ascii": "beni ourtilane",
        "daira_name": "بني ورتيلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 693,
        "commune_name_ascii": "beni ourtilane",
        "commune_name": "بني ورتيلان",
        "daira_name_ascii": "beni ourtilane",
        "daira_name": "بني ورتيلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 696,
        "commune_name_ascii": "beni-mouhli",
        "commune_name": "بني موحلي",
        "daira_name_ascii": "beni ourtilane",
        "daira_name": "بني ورتيلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 675,
        "commune_name_ascii": "ain abessa",
        "commune_name": "عين عباسة",
        "daira_name_ascii": "ain arnat",
        "daira_name": "عين أرنات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 676,
        "commune_name_ascii": "ain arnat",
        "commune_name": "عين أرنات",
        "daira_name_ascii": "ain arnat",
        "daira_name": "عين أرنات",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 687,
        "commune_name_ascii": "babor",
        "commune_name": "بابور",
        "daira_name_ascii": "babor",
        "daira_name": "بابور",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 719,
        "commune_name_ascii": "maouaklane",
        "commune_name": "ماوكلان",
        "daira_name_ascii": "maoklane",
        "daira_name": "ماوكلان",
        "wilaya_code": "19",
        "wilaya_name_ascii": "setif",
        "wilaya_name": "سطيف"
    },
    {
        "id": 745,
        "commune_name_ascii": "saida",
        "commune_name": "سعيدة",
        "daira_name_ascii": "saida",
        "daira_name": "سعيدة",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 749,
        "commune_name_ascii": "tircine",
        "commune_name": "تيرسين",
        "daira_name_ascii": "ouled brahim",
        "daira_name": "أولاد ابراهيم",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 743,
        "commune_name_ascii": "ouled brahim",
        "commune_name": "أولاد إبراهيم",
        "daira_name_ascii": "ouled brahim",
        "daira_name": "أولاد ابراهيم",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 737,
        "commune_name_ascii": "ain soltane",
        "commune_name": "عين السلطان",
        "daira_name_ascii": "ouled brahim",
        "daira_name": "أولاد ابراهيم",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 741,
        "commune_name_ascii": "maamora",
        "commune_name": "المعمورة",
        "daira_name_ascii": "el hassasna",
        "daira_name": "الحساسنة",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 739,
        "commune_name_ascii": "el hassasna",
        "commune_name": "الحساسنة",
        "daira_name_ascii": "el hassasna",
        "daira_name": "الحساسنة",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 736,
        "commune_name_ascii": "ain sekhouna",
        "commune_name": "عين السخونة",
        "daira_name_ascii": "el hassasna",
        "daira_name": "الحساسنة",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 748,
        "commune_name_ascii": "sidi boubekeur",
        "commune_name": "سيدي بوبكر",
        "daira_name_ascii": "sidi boubekeur",
        "daira_name": "سيدي بوبكر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 744,
        "commune_name_ascii": "ouled khaled",
        "commune_name": "أولاد خالد",
        "daira_name_ascii": "sidi boubekeur",
        "daira_name": "سيدي بوبكر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 740,
        "commune_name_ascii": "hounet",
        "commune_name": "هونت",
        "daira_name_ascii": "sidi boubekeur",
        "daira_name": "سيدي بوبكر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 750,
        "commune_name_ascii": "youb",
        "commune_name": "يوب",
        "daira_name_ascii": "youb",
        "daira_name": "يوب",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 738,
        "commune_name_ascii": "doui thabet",
        "commune_name": "دوي ثابت",
        "daira_name_ascii": "youb",
        "daira_name": "يوب",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 746,
        "commune_name_ascii": "sidi ahmed",
        "commune_name": "سيدي احمد",
        "daira_name_ascii": "ain el hadjar",
        "daira_name": "عين الحجر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 742,
        "commune_name_ascii": "moulay larbi",
        "commune_name": "مولاي العربي",
        "daira_name_ascii": "ain el hadjar",
        "daira_name": "عين الحجر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 735,
        "commune_name_ascii": "ain el hadjar",
        "commune_name": "عين الحجر",
        "daira_name_ascii": "ain el hadjar",
        "daira_name": "عين الحجر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 747,
        "commune_name_ascii": "sidi amar",
        "commune_name": "سيدي عمر",
        "daira_name_ascii": "sidi boubekeur",
        "daira_name": "سيدي بوبكر",
        "wilaya_code": "20",
        "wilaya_name_ascii": "saida",
        "wilaya_name": "سعيدة"
    },
    {
        "id": 751,
        "commune_name_ascii": "ain bouziane",
        "commune_name": "عين بوزيان",
        "daira_name_ascii": "sidi mezghiche",
        "daira_name": "سيدي مزغيش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 783,
        "commune_name_ascii": "salah bouchaour",
        "commune_name": "صالح بو الشعور",
        "daira_name_ascii": "el harrouch",
        "daira_name": "الحروش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 768,
        "commune_name_ascii": "el hadaiek",
        "commune_name": "الحدائق",
        "daira_name_ascii": "el hadaiek",
        "daira_name": "الحدائق",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 787,
        "commune_name_ascii": "zerdezas",
        "commune_name": "زردازة",
        "daira_name_ascii": "el harrouch",
        "daira_name": "الحروش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 780,
        "commune_name_ascii": "ouled habbaba",
        "commune_name": "أولاد حبابة",
        "daira_name_ascii": "el harrouch",
        "daira_name": "الحروش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 759,
        "commune_name_ascii": "beni oulbane",
        "commune_name": "بني ولبان",
        "daira_name_ascii": "sidi mezghiche",
        "daira_name": "سيدي مزغيش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 784,
        "commune_name_ascii": "sidi mezghiche",
        "commune_name": "سيدي مزغيش",
        "daira_name_ascii": "sidi mezghiche",
        "daira_name": "سيدي مزغيش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 758,
        "commune_name_ascii": "beni bechir",
        "commune_name": "بني بشير",
        "daira_name_ascii": "ramdane djamel",
        "daira_name": "رمضان جمال",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 782,
        "commune_name_ascii": "ramdane djamel",
        "commune_name": "رمضان جمال",
        "daira_name_ascii": "ramdane djamel",
        "daira_name": "رمضان جمال",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 761,
        "commune_name_ascii": "bin el ouiden",
        "commune_name": "بين الويدان",
        "daira_name_ascii": "tamalous",
        "daira_name": "تمالوس",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 770,
        "commune_name_ascii": "emjez edchich",
        "commune_name": "مجاز الدشيش",
        "daira_name_ascii": "el harrouch",
        "daira_name": "الحروش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 786,
        "commune_name_ascii": "tamalous",
        "commune_name": "تمالوس",
        "daira_name_ascii": "tamalous",
        "daira_name": "تمالوس",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 753,
        "commune_name_ascii": "ain kechra",
        "commune_name": "عين قشرة",
        "daira_name_ascii": "ain kechra",
        "daira_name": "عين قشرة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 778,
        "commune_name_ascii": "ouldja boulbalout",
        "commune_name": "الولجة بولبلوط",
        "daira_name_ascii": "ain kechra",
        "daira_name": "عين قشرة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 781,
        "commune_name_ascii": "oum toub",
        "commune_name": "أم الطوب",
        "daira_name_ascii": "oum toub",
        "daira_name": "أم الطوب",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 767,
        "commune_name_ascii": "el ghedir",
        "commune_name": "الغدير",
        "daira_name_ascii": "azzaba",
        "daira_name": "عزابة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 775,
        "commune_name_ascii": "kerkara",
        "commune_name": "الكركرة",
        "daira_name_ascii": "tamalous",
        "daira_name": "تمالوس",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 766,
        "commune_name_ascii": "el arrouch",
        "commune_name": "الحروش",
        "daira_name_ascii": "el harrouch",
        "daira_name": "الحروش",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 788,
        "commune_name_ascii": "zitouna",
        "commune_name": "الزيتونة",
        "daira_name_ascii": "zitouna",
        "daira_name": "الزيتونة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 779,
        "commune_name_ascii": "ouled attia",
        "commune_name": "أولاد عطية",
        "daira_name_ascii": "ouled attia",
        "daira_name": "أولاد عطية",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 777,
        "commune_name_ascii": "oued zhour",
        "commune_name": "وادي الزهور",
        "daira_name_ascii": "ouled attia",
        "daira_name": "أولاد عطية",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 764,
        "commune_name_ascii": "collo",
        "commune_name": "القل",
        "daira_name_ascii": "collo",
        "daira_name": "القل",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 763,
        "commune_name_ascii": "cheraia",
        "commune_name": "الشرايع",
        "daira_name_ascii": "collo",
        "daira_name": "القل",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 760,
        "commune_name_ascii": "beni zid",
        "commune_name": "بني زيد",
        "daira_name_ascii": "collo",
        "daira_name": "القل",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 776,
        "commune_name_ascii": "khenag maoune",
        "commune_name": "خناق مايو",
        "daira_name_ascii": "ouled attia",
        "daira_name": "أولاد عطية",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 769,
        "commune_name_ascii": "el marsa",
        "commune_name": "المرسى",
        "daira_name_ascii": "ben azzouz",
        "daira_name": "بن عزوز",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 757,
        "commune_name_ascii": "ben azzouz",
        "commune_name": "بن عزوز",
        "daira_name_ascii": "ben azzouz",
        "daira_name": "بن عزوز",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 756,
        "commune_name_ascii": "bekkouche lakhdar",
        "commune_name": "بكوش لخضر",
        "daira_name_ascii": "ben azzouz",
        "daira_name": "بن عزوز",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 771,
        "commune_name_ascii": "es sebt",
        "commune_name": "السبت",
        "daira_name_ascii": "azzaba",
        "daira_name": "عزابة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 752,
        "commune_name_ascii": "ain charchar",
        "commune_name": "عين شرشار",
        "daira_name_ascii": "azzaba",
        "daira_name": "عزابة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 755,
        "commune_name_ascii": "azzaba",
        "commune_name": "عزابة",
        "daira_name_ascii": "azzaba",
        "daira_name": "عزابة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 762,
        "commune_name_ascii": "bouchetata",
        "commune_name": "بوشطاطة",
        "daira_name_ascii": "el hadaiek",
        "daira_name": "الحدائق",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 772,
        "commune_name_ascii": "filfila",
        "commune_name": "فلفلة",
        "daira_name_ascii": "skikda",
        "daira_name": "سكيكدة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 773,
        "commune_name_ascii": "hammadi krouma",
        "commune_name": "حمادي كرومة",
        "daira_name_ascii": "skikda",
        "daira_name": "سكيكدة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 785,
        "commune_name_ascii": "skikda",
        "commune_name": "سكيكدة",
        "daira_name_ascii": "skikda",
        "daira_name": "سكيكدة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 754,
        "commune_name_ascii": "ain zouit",
        "commune_name": "عين زويت",
        "daira_name_ascii": "el hadaiek",
        "daira_name": "الحدائق",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 765,
        "commune_name_ascii": "djendel saadi mohamed",
        "commune_name": "جندل سعدي محمد",
        "daira_name_ascii": "azzaba",
        "daira_name": "عزابة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 774,
        "commune_name_ascii": "kanoua",
        "commune_name": "قنواع",
        "daira_name_ascii": "zitouna",
        "daira_name": "الزيتونة",
        "wilaya_code": "21",
        "wilaya_name_ascii": "skikda",
        "wilaya_name": "سكيكدة"
    },
    {
        "id": 822,
        "commune_name_ascii": "sidi ali benyoub",
        "commune_name": "سيدي علي بن يوب",
        "daira_name_ascii": "sidi ali ben youb",
        "daira_name": "سيدي علي بن يوب",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 814,
        "commune_name_ascii": "moulay slissen",
        "commune_name": "مولاي سليسن",
        "daira_name_ascii": "moulay slissen",
        "daira_name": "مولاي سليسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 804,
        "commune_name_ascii": "el hacaiba",
        "commune_name": "الحصيبة",
        "daira_name_ascii": "moulay slissen",
        "daira_name": "مولاي سليسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 792,
        "commune_name_ascii": "ain tindamine",
        "commune_name": "عين تندمين",
        "daira_name_ascii": "moulay slissen",
        "daira_name": "مولاي سليسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 837,
        "commune_name_ascii": "tenira",
        "commune_name": "تنيرة",
        "daira_name_ascii": "tenira",
        "daira_name": "تنيرة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 816,
        "commune_name_ascii": "oued sefioun",
        "commune_name": "وادي سفيون",
        "daira_name_ascii": "tenira",
        "daira_name": "تنيرة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 805,
        "commune_name_ascii": "hassi dahou",
        "commune_name": "حاسي دحو",
        "daira_name_ascii": "tenira",
        "daira_name": "تنيرة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 817,
        "commune_name_ascii": "oued taourira",
        "commune_name": "وادي تاوريرة",
        "daira_name_ascii": "merine",
        "daira_name": "مرين",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 798,
        "commune_name_ascii": "benachiba chelia",
        "commune_name": "بن عشيبة شلية",
        "daira_name_ascii": "tenira",
        "daira_name": "تنيرة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 831,
        "commune_name_ascii": "sidi yacoub",
        "commune_name": "سيدي يعقوب",
        "daira_name_ascii": "sidi lahcene",
        "daira_name": "سيدي لحسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 830,
        "commune_name_ascii": "sidi lahcene",
        "commune_name": "سيدي لحسن",
        "daira_name_ascii": "sidi lahcene",
        "daira_name": "سيدي لحسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 829,
        "commune_name_ascii": "sidi khaled",
        "commune_name": "سيدي خالد",
        "daira_name_ascii": "sidi lahcene",
        "daira_name": "سيدي لحسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 832,
        "commune_name_ascii": "tabia",
        "commune_name": "طابية",
        "daira_name_ascii": "sidi ali ben youb",
        "daira_name": "سيدي علي بن يوب",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 825,
        "commune_name_ascii": "sidi brahim",
        "commune_name": "سيدي ابراهيم",
        "daira_name_ascii": "ain el berd",
        "daira_name": "عين البرد",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 794,
        "commune_name_ascii": "amarnas",
        "commune_name": "العمارنة",
        "daira_name_ascii": "sidi lahcene",
        "daira_name": "سيدي لحسن",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 801,
        "commune_name_ascii": "boukhanefis",
        "commune_name": "بوخنفيس",
        "daira_name_ascii": "sidi ali ben youb",
        "daira_name": "سيدي علي بن يوب",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 806,
        "commune_name_ascii": "hassi zahana",
        "commune_name": "حاسي زهانة",
        "daira_name_ascii": "ben badis",
        "daira_name": "بن باديس",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 802,
        "commune_name_ascii": "chetouane belaila",
        "commune_name": "شيطوان البلايلة",
        "daira_name_ascii": "ben badis",
        "daira_name": "بن باديس",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 797,
        "commune_name_ascii": "ben badis",
        "commune_name": "بن باديس",
        "daira_name_ascii": "ben badis",
        "daira_name": "بن باديس",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 795,
        "commune_name_ascii": "bedrabine el mokrani",
        "commune_name": "بضرابين المقراني",
        "daira_name_ascii": "ben badis",
        "daira_name": "بن باديس",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 821,
        "commune_name_ascii": "sfisef",
        "commune_name": "سفيزف",
        "daira_name_ascii": "sfisef",
        "daira_name": "سفيزف",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 810,
        "commune_name_ascii": "m'cid",
        "commune_name": "مسيد",
        "daira_name_ascii": "sfisef",
        "daira_name": "سفيزف",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 800,
        "commune_name_ascii": "boudjebaa el bordj",
        "commune_name": "بوجبهة البرج",
        "daira_name_ascii": "sfisef",
        "daira_name": "سفيزف",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 793,
        "commune_name_ascii": "ain- adden",
        "commune_name": "عين أدن",
        "daira_name_ascii": "sfisef",
        "daira_name": "سفيزف",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 828,
        "commune_name_ascii": "sidi hamadouche",
        "commune_name": "سيدي حمادوش",
        "daira_name_ascii": "ain el berd",
        "daira_name": "عين البرد",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 826,
        "commune_name_ascii": "sidi chaib",
        "commune_name": "سيدي شعيب",
        "daira_name_ascii": "marhoum",
        "daira_name": "مرحوم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 808,
        "commune_name_ascii": "makedra",
        "commune_name": "مكدرة",
        "daira_name_ascii": "ain el berd",
        "daira_name": "عين البرد",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 789,
        "commune_name_ascii": "ain el berd",
        "commune_name": "عين البرد",
        "daira_name_ascii": "ain el berd",
        "daira_name": "عين البرد",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 819,
        "commune_name_ascii": "redjem demouche",
        "commune_name": "رجم دموش",
        "daira_name_ascii": "ras el ma",
        "daira_name": "راس الماء",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 818,
        "commune_name_ascii": "ras el ma",
        "commune_name": "راس الماء",
        "daira_name_ascii": "ras el ma",
        "daira_name": "راس الماء",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 815,
        "commune_name_ascii": "oued sebaa",
        "commune_name": "وادي السبع",
        "daira_name_ascii": "ras el ma",
        "daira_name": "راس الماء",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 809,
        "commune_name_ascii": "marhoum",
        "commune_name": "مرحوم",
        "daira_name_ascii": "marhoum",
        "daira_name": "مرحوم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 824,
        "commune_name_ascii": "sidi bel-abbes",
        "commune_name": "سيدي بلعباس",
        "daira_name_ascii": "sidi bel abbes",
        "daira_name": "سيدي بلعباس",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 791,
        "commune_name_ascii": "ain thrid",
        "commune_name": "عين الثريد",
        "daira_name_ascii": "tessala",
        "daira_name": "تسالة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 820,
        "commune_name_ascii": "sehala thaoura",
        "commune_name": "السهالة الثورة",
        "daira_name_ascii": "tessala",
        "daira_name": "تسالة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 838,
        "commune_name_ascii": "tessala",
        "commune_name": "تسالة",
        "daira_name_ascii": "tessala",
        "daira_name": "تسالة",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 796,
        "commune_name_ascii": "belarbi",
        "commune_name": "بلعربي",
        "daira_name_ascii": "mostefaben brahim",
        "daira_name": "مصطفى بن ابراهيم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 813,
        "commune_name_ascii": "mostefaben brahim",
        "commune_name": "مصطفى بن ابراهيم",
        "daira_name_ascii": "mostefaben brahim",
        "daira_name": "مصطفى بن ابراهيم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 839,
        "commune_name_ascii": "tilmouni",
        "commune_name": "تلموني",
        "daira_name_ascii": "mostefaben brahim",
        "daira_name": "مصطفى بن ابراهيم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 840,
        "commune_name_ascii": "zerouala",
        "commune_name": "زروالة",
        "daira_name_ascii": "mostefaben brahim",
        "daira_name": "مصطفى بن ابراهيم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 803,
        "commune_name_ascii": "dhaya",
        "commune_name": "الضاية",
        "daira_name_ascii": "telagh",
        "daira_name": "تلاغ",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 812,
        "commune_name_ascii": "mezaourou",
        "commune_name": "مزاورو",
        "daira_name_ascii": "telagh",
        "daira_name": "تلاغ",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 835,
        "commune_name_ascii": "teghalimet",
        "commune_name": "تغاليمت",
        "daira_name_ascii": "telagh",
        "daira_name": "تلاغ",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 836,
        "commune_name_ascii": "telagh",
        "commune_name": "تلاغ",
        "daira_name_ascii": "telagh",
        "daira_name": "تلاغ",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 790,
        "commune_name_ascii": "ain kada",
        "commune_name": "عين قادة",
        "daira_name_ascii": "sidi ali boussidi",
        "daira_name": "سيدي علي بوسيدي",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 807,
        "commune_name_ascii": "lamtar",
        "commune_name": "لمطار",
        "daira_name_ascii": "sidi ali boussidi",
        "daira_name": "سيدي علي بوسيدي",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 823,
        "commune_name_ascii": "sidi ali boussidi",
        "commune_name": "سيدي علي بوسيدي",
        "daira_name_ascii": "sidi ali boussidi",
        "daira_name": "سيدي علي بوسيدي",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 827,
        "commune_name_ascii": "sidi dahou zairs",
        "commune_name": "سيدي دحو الزاير",
        "daira_name_ascii": "sidi ali boussidi",
        "daira_name": "سيدي علي بوسيدي",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 799,
        "commune_name_ascii": "bir el hammam",
        "commune_name": "بئر الحمام",
        "daira_name_ascii": "marhoum",
        "daira_name": "مرحوم",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 811,
        "commune_name_ascii": "merine",
        "commune_name": "مرين",
        "daira_name_ascii": "merine",
        "daira_name": "مرين",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 834,
        "commune_name_ascii": "tefessour",
        "commune_name": "تفسور",
        "daira_name_ascii": "merine",
        "daira_name": "مرين",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 833,
        "commune_name_ascii": "taoudmout",
        "commune_name": "تاودموت",
        "daira_name_ascii": "merine",
        "daira_name": "مرين",
        "wilaya_code": "22",
        "wilaya_name_ascii": "sidi bel abbes",
        "wilaya_name": "سيدي بلعباس"
    },
    {
        "id": 842,
        "commune_name_ascii": "annaba",
        "commune_name": "عنابة",
        "daira_name_ascii": "annaba",
        "daira_name": "عنابة",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 850,
        "commune_name_ascii": "seraidi",
        "commune_name": "سرايدي",
        "daira_name_ascii": "annaba",
        "daira_name": "عنابة",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 843,
        "commune_name_ascii": "berrahal",
        "commune_name": "برحال",
        "daira_name_ascii": "berrahal",
        "daira_name": "برحال",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 849,
        "commune_name_ascii": "oued el aneb",
        "commune_name": "واد العنب",
        "daira_name_ascii": "berrahal",
        "daira_name": "برحال",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 848,
        "commune_name_ascii": "el hadjar",
        "commune_name": "الحجار",
        "daira_name_ascii": "el hadjar",
        "daira_name": "الحجار",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 851,
        "commune_name_ascii": "sidi amar",
        "commune_name": "سيدي عمار",
        "daira_name_ascii": "el hadjar",
        "daira_name": "الحجار",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 846,
        "commune_name_ascii": "el bouni",
        "commune_name": "البوني",
        "daira_name_ascii": "el bouni",
        "daira_name": "البوني",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 841,
        "commune_name_ascii": "ain el berda",
        "commune_name": "عين الباردة",
        "daira_name_ascii": "ain el berda",
        "daira_name": "عين الباردة",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 845,
        "commune_name_ascii": "cheurfa",
        "commune_name": "الشرفة",
        "daira_name_ascii": "ain el berda",
        "daira_name": "عين الباردة",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 847,
        "commune_name_ascii": "el eulma",
        "commune_name": "العلمة",
        "daira_name_ascii": "ain el berda",
        "daira_name": "عين الباردة",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 852,
        "commune_name_ascii": "treat",
        "commune_name": "التريعات",
        "daira_name_ascii": "berrahal",
        "daira_name": "برحال",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 844,
        "commune_name_ascii": "chetaibi",
        "commune_name": "شطايبي",
        "daira_name_ascii": "chetaibi",
        "daira_name": "شطايبي",
        "wilaya_code": "23",
        "wilaya_name_ascii": "annaba",
        "wilaya_name": "عنابة"
    },
    {
        "id": 875,
        "commune_name_ascii": "nechmaya",
        "commune_name": "نشماية",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 863,
        "commune_name_ascii": "bou hamdane",
        "commune_name": "بوحمدان",
        "daira_name_ascii": "hammam debagh",
        "daira_name": "حمام دباغ",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 872,
        "commune_name_ascii": "hammam debagh",
        "commune_name": "حمام دباغ",
        "daira_name_ascii": "hammam debagh",
        "daira_name": "حمام دباغ",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 884,
        "commune_name_ascii": "roknia",
        "commune_name": "الركنية",
        "daira_name_ascii": "hammam debagh",
        "daira_name": "حمام دباغ",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 867,
        "commune_name_ascii": "dahouara",
        "commune_name": "الدهوارة",
        "daira_name_ascii": "hammam n'bails",
        "daira_name": "حمام النبايل",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 873,
        "commune_name_ascii": "hammam n'bail",
        "commune_name": "حمام النبايل",
        "daira_name_ascii": "hammam n'bails",
        "daira_name": "حمام النبايل",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 871,
        "commune_name_ascii": "guelma",
        "commune_name": "قالمة",
        "daira_name_ascii": "guelma",
        "daira_name": "قالمة",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 866,
        "commune_name_ascii": "boumahra ahmed",
        "commune_name": "بومهرة أحمد",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 853,
        "commune_name_ascii": "ain ben beida",
        "commune_name": "عين بن بيضاء",
        "daira_name_ascii": "bouchegouf",
        "daira_name": "بوشقوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 865,
        "commune_name_ascii": "bouchegouf",
        "commune_name": "بوشقوف",
        "daira_name_ascii": "bouchegouf",
        "daira_name": "بوشقوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 878,
        "commune_name_ascii": "medjez sfa",
        "commune_name": "مجاز الصفاء",
        "daira_name_ascii": "bouchegouf",
        "daira_name": "بوشقوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 881,
        "commune_name_ascii": "oued ferragha",
        "commune_name": "وادي فراغة",
        "daira_name_ascii": "bouchegouf",
        "daira_name": "بوشقوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 864,
        "commune_name_ascii": "bouati mahmoud",
        "commune_name": "بوعاتي محمود",
        "daira_name_ascii": "heliopolis",
        "daira_name": "هيليوبوليس",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 869,
        "commune_name_ascii": "el fedjoudj",
        "commune_name": "الفجوج",
        "daira_name_ascii": "heliopolis",
        "daira_name": "هيليوبوليس",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 874,
        "commune_name_ascii": "heliopolis",
        "commune_name": "هيليوبوليس",
        "daira_name_ascii": "heliopolis",
        "daira_name": "هيليوبوليس",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 877,
        "commune_name_ascii": "medjez amar",
        "commune_name": "مجاز عمار",
        "daira_name_ascii": "ain hessainia",
        "daira_name": "عين حساينية",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 879,
        "commune_name_ascii": "houari boumedienne",
        "commune_name": "هواري بومدين",
        "daira_name_ascii": "ain hessainia",
        "daira_name": "عين حساينية",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 883,
        "commune_name_ascii": "ras el agba",
        "commune_name": "رأس العقبة",
        "daira_name_ascii": "ain hessainia",
        "daira_name": "عين حساينية",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 885,
        "commune_name_ascii": "sellaoua announa",
        "commune_name": "سلاوة عنونة",
        "daira_name_ascii": "ain hessainia",
        "daira_name": "عين حساينية",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 868,
        "commune_name_ascii": "djeballah khemissi",
        "commune_name": "جبالة الخميسي",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 861,
        "commune_name_ascii": "bordj sabath",
        "commune_name": "برج صباط",
        "daira_name_ascii": "oued zenati",
        "daira_name": "وادي الزناتي",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 882,
        "commune_name_ascii": "oued zenati",
        "commune_name": "وادي الزناتي",
        "daira_name_ascii": "oued zenati",
        "daira_name": "وادي الزناتي",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 856,
        "commune_name_ascii": "ain regada",
        "commune_name": "عين رقادة",
        "daira_name_ascii": "oued zenati",
        "daira_name": "وادي الزناتي",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 854,
        "commune_name_ascii": "ain larbi",
        "commune_name": "عين العربي",
        "daira_name_ascii": "ain makhlouf",
        "daira_name": "عين مخلوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 855,
        "commune_name_ascii": "ain makhlouf",
        "commune_name": "عين مخلوف",
        "daira_name_ascii": "ain makhlouf",
        "daira_name": "عين مخلوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 886,
        "commune_name_ascii": "tamlouka",
        "commune_name": "تاملوكة",
        "daira_name_ascii": "ain makhlouf",
        "daira_name": "عين مخلوف",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 857,
        "commune_name_ascii": "ain sandel",
        "commune_name": "عين صندل",
        "daira_name_ascii": "khezaras",
        "daira_name": "خزارة",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 862,
        "commune_name_ascii": "bou hachana",
        "commune_name": "بوحشانة",
        "daira_name_ascii": "khezaras",
        "daira_name": "خزارة",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 876,
        "commune_name_ascii": "khezaras",
        "commune_name": "لخزارة",
        "daira_name_ascii": "khezaras",
        "daira_name": "خزارة",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 858,
        "commune_name_ascii": "belkheir",
        "commune_name": "بلخير",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 860,
        "commune_name_ascii": "beni mezline",
        "commune_name": "بني مزلين",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 870,
        "commune_name_ascii": "guelaat bou sbaa",
        "commune_name": "قلعة بوصبع",
        "daira_name_ascii": "guelaat bousbaa",
        "daira_name": "قلعة بوصبع",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 880,
        "commune_name_ascii": "oued cheham",
        "commune_name": "وادي الشحم",
        "daira_name_ascii": "hammam n'bails",
        "daira_name": "حمام النبايل",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 859,
        "commune_name_ascii": "bendjarah",
        "commune_name": "بن جراح",
        "daira_name_ascii": "guelma",
        "daira_name": "قالمة",
        "wilaya_code": "24",
        "wilaya_name_ascii": "guelma",
        "wilaya_name": "قالمة"
    },
    {
        "id": 892,
        "commune_name_ascii": "didouche mourad",
        "commune_name": "ديدوش مراد",
        "daira_name_ascii": "hamma bouziane",
        "daira_name": "حامة بوزيان",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 894,
        "commune_name_ascii": "hamma bouziane",
        "commune_name": "حامة بوزيان",
        "daira_name_ascii": "hamma bouziane",
        "daira_name": "حامة بوزيان",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 890,
        "commune_name_ascii": "beni hamidane",
        "commune_name": "بني حميدان",
        "daira_name_ascii": "zighoud youcef",
        "daira_name": "زيغود يوسف",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 898,
        "commune_name_ascii": "zighoud youcef",
        "commune_name": "زيغود يوسف",
        "daira_name_ascii": "zighoud youcef",
        "daira_name": "زيغود يوسف",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 888,
        "commune_name_ascii": "ain smara",
        "commune_name": "عين السمارة",
        "daira_name_ascii": "el khroub",
        "daira_name": "الخروب",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 893,
        "commune_name_ascii": "el khroub",
        "commune_name": "الخروب",
        "daira_name_ascii": "el khroub",
        "daira_name": "الخروب",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 897,
        "commune_name_ascii": "ouled rahmoun",
        "commune_name": "أولاد رحمون",
        "daira_name_ascii": "el khroub",
        "daira_name": "الخروب",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 887,
        "commune_name_ascii": "ain abid",
        "commune_name": "عين عبيد",
        "daira_name_ascii": "ain abid",
        "daira_name": "عين عبيد",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 889,
        "commune_name_ascii": "ben badis",
        "commune_name": "أبن باديس الهرية",
        "daira_name_ascii": "ain abid",
        "daira_name": "عين عبيد",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 895,
        "commune_name_ascii": "ibn ziad",
        "commune_name": "ابن زياد",
        "daira_name_ascii": "ibn ziad",
        "daira_name": "ابن زياد",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 896,
        "commune_name_ascii": "messaoud boudjeriou",
        "commune_name": "بوجريو مسعود",
        "daira_name_ascii": "ibn ziad",
        "daira_name": "ابن زياد",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 891,
        "commune_name_ascii": "constantine",
        "commune_name": "قسنطينة",
        "daira_name_ascii": "constantine",
        "daira_name": "قسنطينة",
        "wilaya_code": "25",
        "wilaya_name_ascii": "constantine",
        "wilaya_name": "قسنطينة"
    },
    {
        "id": 943,
        "commune_name_ascii": "ouled hellal",
        "commune_name": "أولاد هلال",
        "daira_name_ascii": "ouled antar",
        "daira_name": "أولاد عنتر",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 956,
        "commune_name_ascii": "souagui",
        "commune_name": "السواقي",
        "daira_name_ascii": "souaghi",
        "daira_name": "السواقي",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 929,
        "commune_name_ascii": "ksar el boukhari",
        "commune_name": "قصر البخاري",
        "daira_name_ascii": "ksar el boukhari",
        "daira_name": "قصر البخاري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 934,
        "commune_name_ascii": "m'fatha",
        "commune_name": "مفاتحة",
        "daira_name_ascii": "ksar el boukhari",
        "daira_name": "قصر البخاري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 947,
        "commune_name_ascii": "saneg",
        "commune_name": "السانق",
        "daira_name_ascii": "ksar el boukhari",
        "daira_name": "قصر البخاري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 920,
        "commune_name_ascii": "el azizia",
        "commune_name": "العزيزية",
        "daira_name_ascii": "el azizia",
        "daira_name": "العزيزية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 930,
        "commune_name_ascii": "maghraoua",
        "commune_name": "مغراوة",
        "daira_name_ascii": "el azizia",
        "daira_name": "العزيزية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 935,
        "commune_name_ascii": "mihoub",
        "commune_name": "ميهوب",
        "daira_name_ascii": "el azizia",
        "daira_name": "العزيزية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 909,
        "commune_name_ascii": "bouaiche",
        "commune_name": "بوعيش",
        "daira_name_ascii": "chahbounia",
        "daira_name": "الشهبونية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 912,
        "commune_name_ascii": "boughzoul",
        "commune_name": "بوغزول",
        "daira_name_ascii": "chahbounia",
        "daira_name": "الشهبونية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 914,
        "commune_name_ascii": "chabounia",
        "commune_name": "الشهبونية",
        "daira_name_ascii": "chahbounia",
        "daira_name": "الشهبونية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 926,
        "commune_name_ascii": "hannacha",
        "commune_name": "حناشة",
        "daira_name_ascii": "ouamri",
        "daira_name": "عوامري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 936,
        "commune_name_ascii": "ouamri",
        "commune_name": "عوامري",
        "daira_name_ascii": "ouamri",
        "daira_name": "عوامري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 937,
        "commune_name_ascii": "oued harbil",
        "commune_name": "وادي حربيل",
        "daira_name_ascii": "ouamri",
        "daira_name": "عوامري",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 905,
        "commune_name_ascii": "beni slimane",
        "commune_name": "بني سليمان",
        "daira_name_ascii": "beni slimane",
        "daira_name": "بني سليمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 910,
        "commune_name_ascii": "bouaichoune",
        "commune_name": "بوعيشون",
        "daira_name_ascii": "si mahdjoub",
        "daira_name": "سي المحجوب",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 939,
        "commune_name_ascii": "ouled bouachra",
        "commune_name": "أولاد بوعشرة",
        "daira_name_ascii": "si mahdjoub",
        "daira_name": "سي المحجوب",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 950,
        "commune_name_ascii": "si mahdjoub",
        "commune_name": "سي المحجوب",
        "daira_name_ascii": "si mahdjoub",
        "daira_name": "سي المحجوب",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 913,
        "commune_name_ascii": "bouskene",
        "commune_name": "بوسكن",
        "daira_name_ascii": "beni slimane",
        "daira_name": "بني سليمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 953,
        "commune_name_ascii": "sidi rabie",
        "commune_name": "سيدي الربيع",
        "daira_name_ascii": "beni slimane",
        "daira_name": "بني سليمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 906,
        "commune_name_ascii": "berrouaghia",
        "commune_name": "البرواقية",
        "daira_name_ascii": "berrouaghia",
        "daira_name": "البرواقية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 941,
        "commune_name_ascii": "ouled deid",
        "commune_name": "أولاد دايد",
        "daira_name_ascii": "berrouaghia",
        "daira_name": "البرواقية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 946,
        "commune_name_ascii": "rebaia",
        "commune_name": "الربعية",
        "daira_name_ascii": "berrouaghia",
        "daira_name": "البرواقية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 932,
        "commune_name_ascii": "medjebar",
        "commune_name": "مجبر",
        "daira_name_ascii": "seghouane",
        "daira_name": "سغوان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 961,
        "commune_name_ascii": "tletat ed douair",
        "commune_name": "ثلاث دوائر",
        "daira_name_ascii": "seghouane",
        "daira_name": "سغوان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 962,
        "commune_name_ascii": "zoubiria",
        "commune_name": "الزبيرية",
        "daira_name_ascii": "seghouane",
        "daira_name": "سغوان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 901,
        "commune_name_ascii": "aissaouia",
        "commune_name": "العيساوية",
        "daira_name_ascii": "tablat",
        "daira_name": "تابلاط",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 923,
        "commune_name_ascii": "el haoudane",
        "commune_name": "الحوضان",
        "daira_name_ascii": "tablat",
        "daira_name": "تابلاط",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 933,
        "commune_name_ascii": "mezerana",
        "commune_name": "مزغنة",
        "daira_name_ascii": "tablat",
        "daira_name": "تابلاط",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 957,
        "commune_name_ascii": "tablat",
        "commune_name": "تابلاط",
        "daira_name_ascii": "tablat",
        "daira_name": "تابلاط",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 908,
        "commune_name_ascii": "boghar",
        "commune_name": "بوغار",
        "daira_name_ascii": "ouled antar",
        "daira_name": "أولاد عنتر",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 949,
        "commune_name_ascii": "seghouane",
        "commune_name": "سغوان",
        "daira_name_ascii": "seghouane",
        "daira_name": "سغوان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 919,
        "commune_name_ascii": "draa esmar",
        "commune_name": "ذراع السمار",
        "daira_name_ascii": "medea",
        "daira_name": "المدية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 931,
        "commune_name_ascii": "medea",
        "commune_name": "المدية",
        "daira_name_ascii": "medea",
        "daira_name": "المدية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 959,
        "commune_name_ascii": "tamesguida",
        "commune_name": "تمسقيدة",
        "daira_name_ascii": "medea",
        "daira_name": "المدية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 904,
        "commune_name_ascii": "ben chicao",
        "commune_name": "بن شكاو",
        "daira_name_ascii": "ouzera",
        "daira_name": "وزرة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 922,
        "commune_name_ascii": "el hamdania",
        "commune_name": "الحمدانية",
        "daira_name_ascii": "ouzera",
        "daira_name": "وزرة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 945,
        "commune_name_ascii": "ouzera",
        "commune_name": "وزرة",
        "daira_name_ascii": "ouzera",
        "daira_name": "وزرة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 960,
        "commune_name_ascii": "tizi mahdi",
        "commune_name": "تيزي مهدي",
        "daira_name_ascii": "ouzera",
        "daira_name": "وزرة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 899,
        "commune_name_ascii": "ain boucif",
        "commune_name": "عين بوسيف",
        "daira_name_ascii": "ain boucif",
        "daira_name": "عين بوسيف",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 925,
        "commune_name_ascii": "el ouinet",
        "commune_name": "العوينات",
        "daira_name_ascii": "ain boucif",
        "daira_name": "عين بوسيف",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 927,
        "commune_name_ascii": "kef lakhdar",
        "commune_name": "الكاف الاخضر",
        "daira_name_ascii": "ain boucif",
        "daira_name": "عين بوسيف",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 942,
        "commune_name_ascii": "ouled emaaraf",
        "commune_name": "أولاد امعرف",
        "daira_name_ascii": "ain boucif",
        "daira_name": "عين بوسيف",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 951,
        "commune_name_ascii": "sidi demed",
        "commune_name": "سيدي دامد",
        "daira_name_ascii": "ain boucif",
        "daira_name": "عين بوسيف",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 903,
        "commune_name_ascii": "baata",
        "commune_name": "بعطة",
        "daira_name_ascii": "el omaria",
        "daira_name": "العمارية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 924,
        "commune_name_ascii": "el omaria",
        "commune_name": "العمارية",
        "daira_name_ascii": "el omaria",
        "daira_name": "العمارية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 940,
        "commune_name_ascii": "ouled brahim",
        "commune_name": "أولاد إبراهيم",
        "daira_name_ascii": "el omaria",
        "daira_name": "العمارية",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 907,
        "commune_name_ascii": "bir ben laabed",
        "commune_name": "بئر بن عابد",
        "daira_name_ascii": "guelb el kebir",
        "daira_name": "القلب الكبير",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 921,
        "commune_name_ascii": "el guelbelkebir",
        "commune_name": "القلب الكبير",
        "daira_name_ascii": "guelb el kebir",
        "daira_name": "القلب الكبير",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 948,
        "commune_name_ascii": "sedraya",
        "commune_name": "سدراية",
        "daira_name_ascii": "guelb el kebir",
        "daira_name": "القلب الكبير",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 900,
        "commune_name_ascii": "ain ouksir",
        "commune_name": "عين اقصير",
        "daira_name_ascii": "chellalat el adhaoura",
        "daira_name": "شلالة العذاورة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 915,
        "commune_name_ascii": "chelalet el adhaoura",
        "commune_name": "شلالة العذاورة",
        "daira_name_ascii": "chellalat el adhaoura",
        "daira_name": "شلالة العذاورة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 916,
        "commune_name_ascii": "cheniguel",
        "commune_name": "شنيقل",
        "daira_name_ascii": "chellalat el adhaoura",
        "daira_name": "شلالة العذاورة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 958,
        "commune_name_ascii": "tafraout",
        "commune_name": "تفراوت",
        "daira_name_ascii": "chellalat el adhaoura",
        "daira_name": "شلالة العذاورة",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 911,
        "commune_name_ascii": "bouchrahil",
        "commune_name": "بوشراحيل",
        "daira_name_ascii": "sidi naamane",
        "daira_name": "سيدي نعمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 928,
        "commune_name_ascii": "khams djouamaa",
        "commune_name": "خمس جوامع",
        "daira_name_ascii": "sidi naamane",
        "daira_name": "سيدي نعمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 952,
        "commune_name_ascii": "sidi naamane",
        "commune_name": "سيدي نعمان",
        "daira_name_ascii": "sidi naamane",
        "daira_name": "سيدي نعمان",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 902,
        "commune_name_ascii": "aziz",
        "commune_name": "عزيز",
        "daira_name_ascii": "aziz",
        "daira_name": "عزيز",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 917,
        "commune_name_ascii": "derrag",
        "commune_name": "دراق",
        "daira_name_ascii": "aziz",
        "daira_name": "عزيز",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 944,
        "commune_name_ascii": "oum el djellil",
        "commune_name": "أم الجليل",
        "daira_name_ascii": "aziz",
        "daira_name": "عزيز",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 918,
        "commune_name_ascii": "djouab",
        "commune_name": "جواب",
        "daira_name_ascii": "souaghi",
        "daira_name": "السواقي",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 954,
        "commune_name_ascii": "sidi zahar",
        "commune_name": "سيدي زهار",
        "daira_name_ascii": "souaghi",
        "daira_name": "السواقي",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 955,
        "commune_name_ascii": "sidi ziane",
        "commune_name": "سيدي زيان",
        "daira_name_ascii": "souaghi",
        "daira_name": "السواقي",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 938,
        "commune_name_ascii": "ouled antar",
        "commune_name": "أولاد عنتر",
        "daira_name_ascii": "ouled antar",
        "daira_name": "أولاد عنتر",
        "wilaya_code": "26",
        "wilaya_name_ascii": "medea",
        "wilaya_name": "المدية"
    },
    {
        "id": 970,
        "commune_name_ascii": "fornaka",
        "commune_name": "فرناقة",
        "daira_name_ascii": "ain nouicy",
        "daira_name": "عين نويسي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 981,
        "commune_name_ascii": "oued el kheir",
        "commune_name": "وادي الخير",
        "daira_name_ascii": "ain tedeles",
        "daira_name": "عين تادلس",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 973,
        "commune_name_ascii": "hassiane",
        "commune_name": "الحسيان (بني ياحي",
        "daira_name_ascii": "ain nouicy",
        "daira_name": "عين نويسي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 972,
        "commune_name_ascii": "hassi mameche",
        "commune_name": "حاسي ماماش",
        "daira_name_ascii": "hassi mameche",
        "daira_name": "حاسي ماماش",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 977,
        "commune_name_ascii": "mazagran",
        "commune_name": "مزغران",
        "daira_name_ascii": "hassi mameche",
        "daira_name": "حاسي ماماش",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 992,
        "commune_name_ascii": "stidia",
        "commune_name": "ستيدية",
        "daira_name_ascii": "hassi mameche",
        "daira_name": "حاسي ماماش",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 967,
        "commune_name_ascii": "ain-tedles",
        "commune_name": "عين تادلس",
        "daira_name_ascii": "ain tedeles",
        "daira_name": "عين تادلس",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 987,
        "commune_name_ascii": "sidi belaattar",
        "commune_name": "سيدي بلعطار",
        "daira_name_ascii": "ain tedeles",
        "daira_name": "عين تادلس",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 991,
        "commune_name_ascii": "sour",
        "commune_name": "سور",
        "daira_name_ascii": "ain tedeles",
        "daira_name": "عين تادلس",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 964,
        "commune_name_ascii": "ain-boudinar",
        "commune_name": "عين بودينار",
        "daira_name_ascii": "kheir eddine",
        "daira_name": "خير الدين",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 975,
        "commune_name_ascii": "kheir-eddine",
        "commune_name": "خير الدين",
        "daira_name_ascii": "kheir eddine",
        "daira_name": "خير الدين",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 985,
        "commune_name_ascii": "sayada",
        "commune_name": "صيادة",
        "daira_name_ascii": "kheir eddine",
        "daira_name": "خير الدين",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 986,
        "commune_name_ascii": "sidi ali",
        "commune_name": "سيدي علي",
        "daira_name_ascii": "sidi ali",
        "daira_name": "سيدي علي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 993,
        "commune_name_ascii": "tazgait",
        "commune_name": "تزقايت",
        "daira_name_ascii": "sidi ali",
        "daira_name": "سيدي علي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 968,
        "commune_name_ascii": "benabdelmalek ramdane",
        "commune_name": "بن عبد المالك رمضان",
        "daira_name_ascii": "sidi lakhdar",
        "daira_name": "سيدي لخضر",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 979,
        "commune_name_ascii": "mostaganem",
        "commune_name": "مستغانم",
        "daira_name_ascii": "mostaganem",
        "daira_name": "مستغانم",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 971,
        "commune_name_ascii": "hadjadj",
        "commune_name": "حجاج",
        "daira_name_ascii": "sidi lakhdar",
        "daira_name": "سيدي لخضر",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 988,
        "commune_name_ascii": "sidi-lakhdar",
        "commune_name": "سيدي لخضر",
        "daira_name_ascii": "sidi lakhdar",
        "daira_name": "سيدي لخضر",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 963,
        "commune_name_ascii": "achaacha",
        "commune_name": "عشعاشة",
        "daira_name_ascii": "achaacha",
        "daira_name": "عشعاشة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 974,
        "commune_name_ascii": "khadra",
        "commune_name": "خضرة",
        "daira_name_ascii": "achaacha",
        "daira_name": "عشعاشة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 980,
        "commune_name_ascii": "nekmaria",
        "commune_name": "نكمارية",
        "daira_name_ascii": "achaacha",
        "daira_name": "عشعاشة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 982,
        "commune_name_ascii": "ouled boughalem",
        "commune_name": "أولاد بوغالم",
        "daira_name_ascii": "achaacha",
        "daira_name": "عشعاشة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 969,
        "commune_name_ascii": "bouguirat",
        "commune_name": "بوقيراط",
        "daira_name_ascii": "bouguirat",
        "daira_name": "بوقيراط",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 984,
        "commune_name_ascii": "safsaf",
        "commune_name": "صفصاف",
        "daira_name_ascii": "bouguirat",
        "daira_name": "بوقيراط",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 989,
        "commune_name_ascii": "sirat",
        "commune_name": "سيرات",
        "daira_name_ascii": "bouguirat",
        "daira_name": "بوقيراط",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 990,
        "commune_name_ascii": "souaflia",
        "commune_name": "السوافلية",
        "daira_name_ascii": "bouguirat",
        "daira_name": "بوقيراط",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 966,
        "commune_name_ascii": "ain-sidi cherif",
        "commune_name": "عين سيدي الشريف",
        "daira_name_ascii": "mesra",
        "daira_name": "ماسرة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 976,
        "commune_name_ascii": "mansourah",
        "commune_name": "منصورة",
        "daira_name_ascii": "mesra",
        "daira_name": "ماسرة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 978,
        "commune_name_ascii": "mesra",
        "commune_name": "ماسرة",
        "daira_name_ascii": "mesra",
        "daira_name": "ماسرة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 994,
        "commune_name_ascii": "touahria",
        "commune_name": "الطواهرية",
        "daira_name_ascii": "mesra",
        "daira_name": "ماسرة",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 965,
        "commune_name_ascii": "ain-nouissy",
        "commune_name": "عين نويسي",
        "daira_name_ascii": "ain nouicy",
        "daira_name": "عين نويسي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 983,
        "commune_name_ascii": "ouled-maalah",
        "commune_name": "أولاد مع الله",
        "daira_name_ascii": "sidi ali",
        "daira_name": "سيدي علي",
        "wilaya_code": "27",
        "wilaya_name_ascii": "mostaganem",
        "wilaya_name": "مستغانم"
    },
    {
        "id": 1008,
        "commune_name_ascii": "chellal",
        "commune_name": "شلال",
        "daira_name_ascii": "chellal",
        "daira_name": "شلال",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1028,
        "commune_name_ascii": "ouled madhi",
        "commune_name": "أولاد ماضي",
        "daira_name_ascii": "chellal",
        "daira_name": "شلال",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1014,
        "commune_name_ascii": "khettouti sed-el-jir",
        "commune_name": "خطوطي سد الجير",
        "daira_name_ascii": "chellal",
        "daira_name": "شلال",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1000,
        "commune_name_ascii": "belaiba",
        "commune_name": "بلعايبة",
        "daira_name_ascii": "magra",
        "daira_name": "مقرة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1004,
        "commune_name_ascii": "berhoum",
        "commune_name": "برهوم",
        "daira_name_ascii": "magra",
        "daira_name": "مقرة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1009,
        "commune_name_ascii": "dehahna",
        "commune_name": "دهاهنة",
        "daira_name_ascii": "magra",
        "daira_name": "مقرة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1018,
        "commune_name_ascii": "magra",
        "commune_name": "مقرة",
        "daira_name_ascii": "magra",
        "daira_name": "مقرة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1002,
        "commune_name_ascii": "beni ilmane",
        "commune_name": "بني يلمان",
        "daira_name_ascii": "sidi aissa",
        "daira_name": "سيدي عيسى",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1007,
        "commune_name_ascii": "bouti sayeh",
        "commune_name": "بوطي السايح",
        "daira_name_ascii": "sidi aissa",
        "daira_name": "سيدي عيسى",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1033,
        "commune_name_ascii": "sidi aissa",
        "commune_name": "سيدي عيسى",
        "daira_name_ascii": "sidi aissa",
        "daira_name": "سيدي عيسى",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 995,
        "commune_name_ascii": "ain el hadjel",
        "commune_name": "عين الحجل",
        "daira_name_ascii": "ain el hadjel",
        "daira_name": "عين الحجل",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1035,
        "commune_name_ascii": "sidi hadjeres",
        "commune_name": "سيدي هجرس",
        "daira_name_ascii": "ain el hadjel",
        "daira_name": "عين الحجل",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1006,
        "commune_name_ascii": "bou saada",
        "commune_name": "بوسعادة",
        "daira_name_ascii": "bousaada",
        "daira_name": "بوسعادة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1011,
        "commune_name_ascii": "el hamel",
        "commune_name": "الهامل",
        "daira_name_ascii": "bousaada",
        "daira_name": "بوسعادة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1032,
        "commune_name_ascii": "oulteme",
        "commune_name": "ولتام",
        "daira_name_ascii": "bousaada",
        "daira_name": "بوسعادة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1003,
        "commune_name_ascii": "benzouh",
        "commune_name": "بن زوه",
        "daira_name_ascii": "ouled sidi brahim",
        "daira_name": "أولاد سيدي ابراهيم",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1030,
        "commune_name_ascii": "ouled sidi brahim",
        "commune_name": "أولاد سيدي ابراهيم",
        "daira_name_ascii": "ouled sidi brahim",
        "daira_name": "أولاد سيدي ابراهيم",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1034,
        "commune_name_ascii": "sidi ameur",
        "commune_name": "سيدي عامر",
        "daira_name_ascii": "sidi ameur",
        "daira_name": "سيدي عامر",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1039,
        "commune_name_ascii": "tamsa",
        "commune_name": "تامسة",
        "daira_name_ascii": "sidi ameur",
        "daira_name": "سيدي عامر",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1001,
        "commune_name_ascii": "ben srour",
        "commune_name": "بن سرور",
        "daira_name_ascii": "ben srour",
        "daira_name": "بن سرور",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1022,
        "commune_name_ascii": "mohamed boudiaf",
        "commune_name": "محمد بوضياف",
        "daira_name_ascii": "ben srour",
        "daira_name": "بن سرور",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1031,
        "commune_name_ascii": "ouled slimane",
        "commune_name": "أولاد سليمان",
        "daira_name_ascii": "ben srour",
        "daira_name": "بن سرور",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1041,
        "commune_name_ascii": "zarzour",
        "commune_name": "زرزور",
        "daira_name_ascii": "ben srour",
        "daira_name": "بن سرور",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 996,
        "commune_name_ascii": "ain el melh",
        "commune_name": "عين الملح",
        "daira_name_ascii": "ain el melh",
        "daira_name": "عين الملح",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 997,
        "commune_name_ascii": "ain fares",
        "commune_name": "عين فارس",
        "daira_name_ascii": "ain el melh",
        "daira_name": "عين الملح",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 999,
        "commune_name_ascii": "ain rich",
        "commune_name": "عين الريش",
        "daira_name_ascii": "ain el melh",
        "daira_name": "عين الملح",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1005,
        "commune_name_ascii": "bir foda",
        "commune_name": "بئر فضة",
        "daira_name_ascii": "ain el melh",
        "daira_name": "عين الملح",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1036,
        "commune_name_ascii": "sidi m'hamed",
        "commune_name": "سيدي امحمد",
        "daira_name_ascii": "ain el melh",
        "daira_name": "عين الملح",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1020,
        "commune_name_ascii": "medjedel",
        "commune_name": "امجدل",
        "daira_name_ascii": "medjedel",
        "daira_name": "امجدل",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1021,
        "commune_name_ascii": "menaa",
        "commune_name": "مناعة",
        "daira_name_ascii": "medjedel",
        "daira_name": "امجدل",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1010,
        "commune_name_ascii": "djebel messaad",
        "commune_name": "جبل مساعد",
        "daira_name_ascii": "djebel messaad",
        "daira_name": "جبل مساعد",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1037,
        "commune_name_ascii": "slim",
        "commune_name": "سليم",
        "daira_name_ascii": "djebel messaad",
        "daira_name": "جبل مساعد",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1023,
        "commune_name_ascii": "msila",
        "commune_name": "المسيلة",
        "daira_name_ascii": "msila",
        "daira_name": "المسيلة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1013,
        "commune_name_ascii": "hammam dalaa",
        "commune_name": "حمام الضلعة",
        "daira_name_ascii": "hammam dalaa",
        "daira_name": "حمام الضلعة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1025,
        "commune_name_ascii": "ouanougha",
        "commune_name": "ونوغة",
        "daira_name_ascii": "hammam dalaa",
        "daira_name": "حمام الضلعة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1029,
        "commune_name_ascii": "ouled mansour",
        "commune_name": "أولاد منصور",
        "daira_name_ascii": "hammam dalaa",
        "daira_name": "حمام الضلعة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1040,
        "commune_name_ascii": "tarmount",
        "commune_name": "تارمونت",
        "daira_name_ascii": "hammam dalaa",
        "daira_name": "حمام الضلعة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1016,
        "commune_name_ascii": "maadid",
        "commune_name": "المعاضيد",
        "daira_name_ascii": "ouled derradj",
        "daira_name": "أولاد دراج",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1024,
        "commune_name_ascii": "m'tarfa",
        "commune_name": "المطارفة",
        "daira_name_ascii": "ouled derradj",
        "daira_name": "أولاد دراج",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1017,
        "commune_name_ascii": "maarif",
        "commune_name": "معاريف",
        "daira_name_ascii": "chellal",
        "daira_name": "شلال",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1027,
        "commune_name_ascii": "ouled derradj",
        "commune_name": "أولاد دراج",
        "daira_name_ascii": "ouled derradj",
        "daira_name": "أولاد دراج",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1038,
        "commune_name_ascii": "souamaa",
        "commune_name": "السوامع",
        "daira_name_ascii": "ouled derradj",
        "daira_name": "أولاد دراج",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1012,
        "commune_name_ascii": "el houamed",
        "commune_name": "الحوامد",
        "daira_name_ascii": "khoubana",
        "daira_name": "خبانة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1015,
        "commune_name_ascii": "khoubana",
        "commune_name": "خبانة",
        "daira_name_ascii": "khoubana",
        "daira_name": "خبانة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1019,
        "commune_name_ascii": "m'cif",
        "commune_name": "مسيف",
        "daira_name_ascii": "khoubana",
        "daira_name": "خبانة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 998,
        "commune_name_ascii": "ain khadra",
        "commune_name": "عين الخضراء",
        "daira_name_ascii": "magra",
        "daira_name": "مقرة",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1026,
        "commune_name_ascii": "ouled addi guebala",
        "commune_name": "أولاد عدي لقبالة",
        "daira_name_ascii": "ouled derradj",
        "daira_name": "أولاد دراج",
        "wilaya_code": "28",
        "wilaya_name_ascii": "msila",
        "wilaya_name": "المسيلة"
    },
    {
        "id": 1075,
        "commune_name_ascii": "oued el abtal",
        "commune_name": "وادي الأبطال",
        "daira_name_ascii": "oued el abtal",
        "daira_name": "وادي الأبطال",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1081,
        "commune_name_ascii": "sidi abdelmoumene",
        "commune_name": "سيدي عبد المومن",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1078,
        "commune_name_ascii": "sedjerara",
        "commune_name": "سجرارة",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1072,
        "commune_name_ascii": "mohammadia",
        "commune_name": "المحمدية",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1085,
        "commune_name_ascii": "tighennif",
        "commune_name": "تيغنيف",
        "daira_name_ascii": "tighennif",
        "daira_name": "تيغنيف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1071,
        "commune_name_ascii": "mocta-douz",
        "commune_name": "مقطع الدوز",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1060,
        "commune_name_ascii": "ferraguig",
        "commune_name": "فراقيق",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1054,
        "commune_name_ascii": "el ghomri",
        "commune_name": "الغمري",
        "daira_name_ascii": "mohammadia",
        "daira_name": "المحمدية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1087,
        "commune_name_ascii": "zahana",
        "commune_name": "زهانة",
        "daira_name_ascii": "zahana",
        "daira_name": "زهانة",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1053,
        "commune_name_ascii": "el gaada",
        "commune_name": "القعدة",
        "daira_name_ascii": "zahana",
        "daira_name": "زهانة",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1077,
        "commune_name_ascii": "ras el ain amirouche",
        "commune_name": "رأس عين عميروش",
        "daira_name_ascii": "oggaz",
        "daira_name": "عقاز",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1074,
        "commune_name_ascii": "oggaz",
        "commune_name": "عقاز",
        "daira_name_ascii": "oggaz",
        "daira_name": "عقاز",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1046,
        "commune_name_ascii": "alaimia",
        "commune_name": "العلايمية",
        "daira_name_ascii": "oggaz",
        "daira_name": "عقاز",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1084,
        "commune_name_ascii": "sig",
        "commune_name": "سيق",
        "daira_name_ascii": "sig",
        "daira_name": "سيق",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1051,
        "commune_name_ascii": "chorfa",
        "commune_name": "الشرفاء",
        "daira_name_ascii": "sig",
        "daira_name": "سيق",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1049,
        "commune_name_ascii": "bou henni",
        "commune_name": "بوهني",
        "daira_name_ascii": "sig",
        "daira_name": "سيق",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1058,
        "commune_name_ascii": "el mamounia",
        "commune_name": "المأمونية",
        "daira_name_ascii": "ain fares",
        "daira_name": "عين فارس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1055,
        "commune_name_ascii": "el gueitena",
        "commune_name": "القطنة",
        "daira_name_ascii": "bouhanifia",
        "daira_name": "بوحنيفية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1042,
        "commune_name_ascii": "ain fares",
        "commune_name": "عين فارس",
        "daira_name_ascii": "ain fares",
        "daira_name": "عين فارس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1062,
        "commune_name_ascii": "gharrous",
        "commune_name": "غروس",
        "daira_name_ascii": "aouf",
        "daira_name": "عوف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1048,
        "commune_name_ascii": "benian",
        "commune_name": "بنيان",
        "daira_name_ascii": "aouf",
        "daira_name": "عوف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1047,
        "commune_name_ascii": "aouf",
        "commune_name": "عوف",
        "daira_name_ascii": "aouf",
        "daira_name": "عوف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1064,
        "commune_name_ascii": "guerdjoum",
        "commune_name": "قرجوم",
        "daira_name_ascii": "oued taria",
        "daira_name": "وادي التاغية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1045,
        "commune_name_ascii": "ain frass",
        "commune_name": "عين أفرص",
        "daira_name_ascii": "ain fekan",
        "daira_name": "عين فكان",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1043,
        "commune_name_ascii": "ain fekan",
        "commune_name": "عين فكان",
        "daira_name_ascii": "ain fekan",
        "daira_name": "عين فكان",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1066,
        "commune_name_ascii": "khalouia",
        "commune_name": "خلوية",
        "daira_name_ascii": "el bordj",
        "daira_name": "البرج",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1059,
        "commune_name_ascii": "el menaouer",
        "commune_name": "المنور",
        "daira_name_ascii": "el bordj",
        "daira_name": "البرج",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1052,
        "commune_name_ascii": "el bordj",
        "commune_name": "البرج",
        "daira_name_ascii": "el bordj",
        "daira_name": "البرج",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1082,
        "commune_name_ascii": "sidi boussaid",
        "commune_name": "سيدي بوسعيد",
        "daira_name_ascii": "ghriss",
        "daira_name": "غريس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1070,
        "commune_name_ascii": "matemore",
        "commune_name": "المطمور",
        "daira_name_ascii": "ghriss",
        "daira_name": "غريس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1083,
        "commune_name_ascii": "sidi kada",
        "commune_name": "سيدي قادة",
        "daira_name_ascii": "tighennif",
        "daira_name": "تيغنيف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1067,
        "commune_name_ascii": "makhda",
        "commune_name": "ماقضة",
        "daira_name_ascii": "ghriss",
        "daira_name": "غريس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1069,
        "commune_name_ascii": "mascara",
        "commune_name": "معسكر",
        "daira_name_ascii": "mascara",
        "daira_name": "معسكر",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1050,
        "commune_name_ascii": "bouhanifia",
        "commune_name": "بوحنيفية",
        "daira_name_ascii": "bouhanifia",
        "daira_name": "بوحنيفية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1063,
        "commune_name_ascii": "ghriss",
        "commune_name": "غريس",
        "daira_name_ascii": "ghriss",
        "daira_name": "غريس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1065,
        "commune_name_ascii": "hacine",
        "commune_name": "حسين",
        "daira_name_ascii": "bouhanifia",
        "daira_name": "بوحنيفية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1057,
        "commune_name_ascii": "el keurt",
        "commune_name": "القرط",
        "daira_name_ascii": "tizi",
        "daira_name": "تيزي",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1061,
        "commune_name_ascii": "froha",
        "commune_name": "فروحة",
        "daira_name_ascii": "tizi",
        "daira_name": "تيزي",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1086,
        "commune_name_ascii": "tizi",
        "commune_name": "تيزي",
        "daira_name_ascii": "tizi",
        "daira_name": "تيزي",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1079,
        "commune_name_ascii": "sehailia",
        "commune_name": "السهايلية",
        "daira_name_ascii": "tighennif",
        "daira_name": "تيغنيف",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1068,
        "commune_name_ascii": "maoussa",
        "commune_name": "ماوسة",
        "daira_name_ascii": "ghriss",
        "daira_name": "غريس",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1080,
        "commune_name_ascii": "sidi abdeldjebar",
        "commune_name": "سيدي عبد الجبار",
        "daira_name_ascii": "oued el abtal",
        "daira_name": "وادي الأبطال",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1056,
        "commune_name_ascii": "el hachem",
        "commune_name": "الحشم",
        "daira_name_ascii": "hachem",
        "daira_name": "الحشم",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1073,
        "commune_name_ascii": "nesmot",
        "commune_name": "نسمط",
        "daira_name_ascii": "hachem",
        "daira_name": "الحشم",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1088,
        "commune_name_ascii": "zelamta",
        "commune_name": "زلامطة",
        "daira_name_ascii": "hachem",
        "daira_name": "الحشم",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1044,
        "commune_name_ascii": "ain ferah",
        "commune_name": "عين فراح",
        "daira_name_ascii": "oued el abtal",
        "daira_name": "وادي الأبطال",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1076,
        "commune_name_ascii": "oued taria",
        "commune_name": "وادي التاغية",
        "daira_name_ascii": "oued taria",
        "daira_name": "وادي التاغية",
        "wilaya_code": "29",
        "wilaya_name_ascii": "mascara",
        "wilaya_name": "معسكر"
    },
    {
        "id": 1101,
        "commune_name_ascii": "ouargla",
        "commune_name": "ورقلة",
        "daira_name_ascii": "ouargla",
        "daira_name": "ورقلة",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1096,
        "commune_name_ascii": "hassi messaoud",
        "commune_name": "حاسي مسعود",
        "daira_name_ascii": "hassi messaoud",
        "daira_name": "حاسي مسعود",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1089,
        "commune_name_ascii": "ain beida",
        "commune_name": "عين البيضاء",
        "daira_name_ascii": "sidi khouiled",
        "daira_name": "سيدي خويلد",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1095,
        "commune_name_ascii": "hassi ben abdellah",
        "commune_name": "حاسي بن عبد الله",
        "daira_name_ascii": "sidi khouiled",
        "daira_name": "سيدي خويلد",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1103,
        "commune_name_ascii": "sidi khouiled",
        "commune_name": "سيدي خويلد",
        "daira_name_ascii": "sidi khouiled",
        "daira_name": "سيدي خويلد",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1093,
        "commune_name_ascii": "el borma",
        "commune_name": "البرمة",
        "daira_name_ascii": "el borma",
        "daira_name": "البرمة",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1102,
        "commune_name_ascii": "rouissat",
        "commune_name": "الرويسات",
        "daira_name_ascii": "ouargla",
        "daira_name": "ورقلة",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1100,
        "commune_name_ascii": "n'goussa",
        "commune_name": "انقوسة",
        "daira_name_ascii": "n'goussa",
        "daira_name": "انقوسة",
        "wilaya_code": "30",
        "wilaya_name_ascii": "ouargla",
        "wilaya_name": "ورقلة"
    },
    {
        "id": 1134,
        "commune_name_ascii": "sidi chami",
        "commune_name": "سيدي الشحمي",
        "daira_name_ascii": "es senia",
        "daira_name": "السانية",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1127,
        "commune_name_ascii": "hassi mefsoukh",
        "commune_name": "حاسي مفسوخ",
        "daira_name_ascii": "gdyel",
        "daira_name": "قديل",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1116,
        "commune_name_ascii": "bir el djir",
        "commune_name": "بئر الجير",
        "daira_name_ascii": "bir el djir",
        "daira_name": "بئر الجير",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1125,
        "commune_name_ascii": "hassi ben okba",
        "commune_name": "حاسي بن عقبة",
        "daira_name_ascii": "bir el djir",
        "daira_name": "بئر الجير",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1124,
        "commune_name_ascii": "gdyel",
        "commune_name": "قديل",
        "daira_name_ascii": "gdyel",
        "daira_name": "قديل",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1126,
        "commune_name_ascii": "hassi bounif",
        "commune_name": "حاسي بونيف",
        "daira_name_ascii": "bir el djir",
        "daira_name": "بئر الجير",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1122,
        "commune_name_ascii": "el kerma",
        "commune_name": "الكرمة",
        "daira_name_ascii": "es senia",
        "daira_name": "السانية",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1123,
        "commune_name_ascii": "es senia",
        "commune_name": "السانية",
        "daira_name_ascii": "es senia",
        "daira_name": "السانية",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1114,
        "commune_name_ascii": "ben freha",
        "commune_name": "بن فريحة",
        "daira_name_ascii": "gdyel",
        "daira_name": "قديل",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1113,
        "commune_name_ascii": "arzew",
        "commune_name": "أرزيو",
        "daira_name_ascii": "arzew",
        "daira_name": "أرزيو",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1133,
        "commune_name_ascii": "sidi ben yebka",
        "commune_name": "سيدي بن يبقى",
        "daira_name_ascii": "arzew",
        "daira_name": "أرزيو",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1110,
        "commune_name_ascii": "ain biya",
        "commune_name": "عين البية",
        "daira_name_ascii": "bethioua",
        "daira_name": "بطيوة",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1115,
        "commune_name_ascii": "bethioua",
        "commune_name": "بطيوة",
        "daira_name_ascii": "bethioua",
        "daira_name": "بطيوة",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1128,
        "commune_name_ascii": "marsat el hadjadj",
        "commune_name": "مرسى الحجاج",
        "daira_name_ascii": "bethioua",
        "daira_name": "بطيوة",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1112,
        "commune_name_ascii": "ain turk",
        "commune_name": "عين الترك",
        "daira_name_ascii": "ain turk",
        "daira_name": "عين الترك",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1131,
        "commune_name_ascii": "oran",
        "commune_name": "وهران",
        "daira_name_ascii": "oran",
        "daira_name": "وهران",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1120,
        "commune_name_ascii": "el ancor",
        "commune_name": "العنصر",
        "daira_name_ascii": "ain turk",
        "daira_name": "عين الترك",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1129,
        "commune_name_ascii": "mers el kebir",
        "commune_name": "المرسى الكبير",
        "daira_name_ascii": "ain turk",
        "daira_name": "عين الترك",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1117,
        "commune_name_ascii": "boufatis",
        "commune_name": "بوفاتيس",
        "daira_name_ascii": "oued tlelat",
        "daira_name": "وادي تليلات",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1121,
        "commune_name_ascii": "el braya",
        "commune_name": "البراية",
        "daira_name_ascii": "oued tlelat",
        "daira_name": "وادي تليلات",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1132,
        "commune_name_ascii": "oued tlelat",
        "commune_name": "وادي تليلات",
        "daira_name_ascii": "oued tlelat",
        "daira_name": "وادي تليلات",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1111,
        "commune_name_ascii": "ain kerma",
        "commune_name": "عين الكرمة",
        "daira_name_ascii": "boutlelis",
        "daira_name": "بوتليليس",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1119,
        "commune_name_ascii": "boutlelis",
        "commune_name": "بوتليليس",
        "daira_name_ascii": "boutlelis",
        "daira_name": "بوتليليس",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1130,
        "commune_name_ascii": "messerghin",
        "commune_name": "مسرغين",
        "daira_name_ascii": "boutlelis",
        "daira_name": "بوتليليس",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1118,
        "commune_name_ascii": "bousfer",
        "commune_name": "بوسفر",
        "daira_name_ascii": "ain turk",
        "daira_name": "عين الترك",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1135,
        "commune_name_ascii": "tafraoui",
        "commune_name": "طفراوي",
        "daira_name_ascii": "oued tlelat",
        "daira_name": "وادي تليلات",
        "wilaya_code": "31",
        "wilaya_name_ascii": "oran",
        "wilaya_name": "وهران"
    },
    {
        "id": 1136,
        "commune_name_ascii": "ain el orak",
        "commune_name": "عين العراك",
        "daira_name_ascii": "labiodh sidi cheikh",
        "daira_name": "الأبيض سيدي الشيخ",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1151,
        "commune_name_ascii": "krakda",
        "commune_name": "كراكدة",
        "daira_name_ascii": "brezina",
        "daira_name": "بريزينة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1154,
        "commune_name_ascii": "sidi slimane",
        "commune_name": "سيدي سليمان",
        "daira_name_ascii": "boualem",
        "daira_name": "بوعلام",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1153,
        "commune_name_ascii": "sidi ameur",
        "commune_name": "سيدي عامر",
        "daira_name_ascii": "boualem",
        "daira_name": "بوعلام",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1138,
        "commune_name_ascii": "boualem",
        "commune_name": "بوعلام",
        "daira_name_ascii": "boualem",
        "daira_name": "بوعلام",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1146,
        "commune_name_ascii": "el bnoud",
        "commune_name": "البنود",
        "daira_name_ascii": "labiodh sidi cheikh",
        "daira_name": "الأبيض سيدي الشيخ",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1139,
        "commune_name_ascii": "bougtoub",
        "commune_name": "بوقطب",
        "daira_name_ascii": "bougtoub",
        "daira_name": "بوقطب",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1147,
        "commune_name_ascii": "el kheiter",
        "commune_name": "الخيثر",
        "daira_name_ascii": "bougtoub",
        "daira_name": "بوقطب",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1157,
        "commune_name_ascii": "tousmouline",
        "commune_name": "توسمولين",
        "daira_name_ascii": "bougtoub",
        "daira_name": "بوقطب",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1155,
        "commune_name_ascii": "sidi tiffour",
        "commune_name": "سيدي طيفور",
        "daira_name_ascii": "boualem",
        "daira_name": "بوعلام",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1156,
        "commune_name_ascii": "stitten",
        "commune_name": "ستيتن",
        "daira_name_ascii": "boualem",
        "daira_name": "بوعلام",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1144,
        "commune_name_ascii": "el bayadh",
        "commune_name": "البيض",
        "daira_name_ascii": "el bayadh",
        "daira_name": "البيض",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1152,
        "commune_name_ascii": "rogassa",
        "commune_name": "رقاصة",
        "daira_name_ascii": "rogassa",
        "daira_name": "رقاصة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1148,
        "commune_name_ascii": "el mehara",
        "commune_name": "المحرة",
        "daira_name_ascii": "chellala",
        "daira_name": "شلالة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1150,
        "commune_name_ascii": "kef el ahmar",
        "commune_name": "الكاف الأحمر",
        "daira_name_ascii": "rogassa",
        "daira_name": "رقاصة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1141,
        "commune_name_ascii": "brezina",
        "commune_name": "بريزينة",
        "daira_name_ascii": "brezina",
        "daira_name": "بريزينة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1149,
        "commune_name_ascii": "ghassoul",
        "commune_name": "الغاسول",
        "daira_name_ascii": "brezina",
        "daira_name": "بريزينة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1145,
        "commune_name_ascii": "labiodh sidi cheikh",
        "commune_name": "الأبيض سيدي الشيخ",
        "daira_name_ascii": "labiodh sidi cheikh",
        "daira_name": "الأبيض سيدي الشيخ",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1140,
        "commune_name_ascii": "boussemghoun",
        "commune_name": "بوسمغون",
        "daira_name_ascii": "boussemghoun",
        "daira_name": "بوسمغون",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1142,
        "commune_name_ascii": "cheguig",
        "commune_name": "الشقيق",
        "daira_name_ascii": "rogassa",
        "daira_name": "رقاصة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1143,
        "commune_name_ascii": "chellala",
        "commune_name": "شلالة",
        "daira_name_ascii": "chellala",
        "daira_name": "شلالة",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1137,
        "commune_name_ascii": "arbaouat",
        "commune_name": "اربوات",
        "daira_name_ascii": "labiodh sidi cheikh",
        "daira_name": "الأبيض سيدي الشيخ",
        "wilaya_code": "32",
        "wilaya_name_ascii": "el bayadh",
        "wilaya_name": "البيض"
    },
    {
        "id": 1159,
        "commune_name_ascii": "bordj omar driss",
        "commune_name": "برج عمر إدريس",
        "daira_name_ascii": "in amenas",
        "daira_name": "إن أمناس",
        "wilaya_code": "33",
        "wilaya_name_ascii": "illizi",
        "wilaya_name": "إليزي"
    },
    {
        "id": 1160,
        "commune_name_ascii": "debdeb",
        "commune_name": "دبداب",
        "daira_name_ascii": "in amenas",
        "daira_name": "إن أمناس",
        "wilaya_code": "33",
        "wilaya_name_ascii": "illizi",
        "wilaya_name": "إليزي"
    },
    {
        "id": 1163,
        "commune_name_ascii": "in amenas",
        "commune_name": "إن أمناس",
        "daira_name_ascii": "in amenas",
        "daira_name": "إن أمناس",
        "wilaya_code": "33",
        "wilaya_name_ascii": "illizi",
        "wilaya_name": "إليزي"
    },
    {
        "id": 1162,
        "commune_name_ascii": "illizi",
        "commune_name": "إيليزي",
        "daira_name_ascii": "illizi",
        "daira_name": "إيليزي",
        "wilaya_code": "33",
        "wilaya_name_ascii": "illizi",
        "wilaya_name": "إليزي"
    },
    {
        "id": 1177,
        "commune_name_ascii": "elhammadia",
        "commune_name": "الحمادية",
        "daira_name_ascii": "el hamadia",
        "daira_name": "الحمادية",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1189,
        "commune_name_ascii": "ouled sidi-brahim",
        "commune_name": "أولاد سيدي ابراهيم",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1164,
        "commune_name_ascii": "ain taghrout",
        "commune_name": "عين تاغروت",
        "daira_name_ascii": "ain taghrout",
        "daira_name": "عين تاغروت",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1197,
        "commune_name_ascii": "tixter",
        "commune_name": "تيكستار",
        "daira_name_ascii": "ain taghrout",
        "daira_name": "عين تاغروت",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1167,
        "commune_name_ascii": "belimour",
        "commune_name": "بليمور",
        "daira_name_ascii": "bordj ghedir",
        "daira_name": "برج الغدير",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1176,
        "commune_name_ascii": "el annasseur",
        "commune_name": "العناصر",
        "daira_name_ascii": "bordj ghedir",
        "daira_name": "برج الغدير",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1180,
        "commune_name_ascii": "ghailasa",
        "commune_name": "غيلاسة",
        "daira_name_ascii": "bordj ghedir",
        "daira_name": "برج الغدير",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1194,
        "commune_name_ascii": "taglait",
        "commune_name": "تقلعيت",
        "daira_name_ascii": "bordj ghedir",
        "daira_name": "برج الغدير",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1170,
        "commune_name_ascii": "bordj ghedir",
        "commune_name": "برج الغدير",
        "daira_name_ascii": "bordj ghedir",
        "daira_name": "برج الغدير",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1174,
        "commune_name_ascii": "el euch",
        "commune_name": "العش",
        "daira_name_ascii": "el hamadia",
        "daira_name": "الحمادية",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1192,
        "commune_name_ascii": "sidi-embarek",
        "commune_name": "سيدي أمبارك",
        "daira_name_ascii": "bir kasdali",
        "daira_name": "بئر قاصد علي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1183,
        "commune_name_ascii": "khelil",
        "commune_name": "خليل",
        "daira_name_ascii": "bir kasdali",
        "daira_name": "بئر قاصد علي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1169,
        "commune_name_ascii": "bir kasdali",
        "commune_name": "بئر قاصد علي",
        "daira_name_ascii": "bir kasdali",
        "daira_name": "بئر قاصد علي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1193,
        "commune_name_ascii": "tefreg",
        "commune_name": "تفرق",
        "daira_name_ascii": "djaafra",
        "daira_name": "جعافرة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1178,
        "commune_name_ascii": "el main",
        "commune_name": "الماين",
        "daira_name_ascii": "djaafra",
        "daira_name": "جعافرة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1173,
        "commune_name_ascii": "djaafra",
        "commune_name": "جعافرة",
        "daira_name_ascii": "djaafra",
        "daira_name": "جعافرة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1172,
        "commune_name_ascii": "colla",
        "commune_name": "القلة",
        "daira_name_ascii": "djaafra",
        "daira_name": "جعافرة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1196,
        "commune_name_ascii": "teniet en nasr",
        "commune_name": "ثنية النصر",
        "daira_name_ascii": "medjana",
        "daira_name": "مجانة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1179,
        "commune_name_ascii": "el m'hir",
        "commune_name": "المهير",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1184,
        "commune_name_ascii": "ksour",
        "commune_name": "القصور",
        "daira_name_ascii": "el hamadia",
        "daira_name": "الحمادية",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1185,
        "commune_name_ascii": "mansoura",
        "commune_name": "المنصورة",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1181,
        "commune_name_ascii": "haraza",
        "commune_name": "حرازة",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1190,
        "commune_name_ascii": "rabta",
        "commune_name": "الرابطة",
        "daira_name_ascii": "el hamadia",
        "daira_name": "الحمادية",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1175,
        "commune_name_ascii": "el achir",
        "commune_name": "الياشير",
        "daira_name_ascii": "medjana",
        "daira_name": "مجانة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1182,
        "commune_name_ascii": "hasnaoua",
        "commune_name": "حسناوة",
        "daira_name_ascii": "medjana",
        "daira_name": "مجانة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1186,
        "commune_name_ascii": "medjana",
        "commune_name": "مجانة",
        "daira_name_ascii": "medjana",
        "daira_name": "مجانة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1165,
        "commune_name_ascii": "ain tesra",
        "commune_name": "عين تسرة",
        "daira_name_ascii": "ras el oued",
        "daira_name": "رأس الوادي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1187,
        "commune_name_ascii": "ouled brahem",
        "commune_name": "أولاد أبراهم",
        "daira_name_ascii": "ras el oued",
        "daira_name": "رأس الوادي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1191,
        "commune_name_ascii": "ras el oued",
        "commune_name": "رأس الوادي",
        "daira_name_ascii": "ras el oued",
        "daira_name": "رأس الوادي",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1171,
        "commune_name_ascii": "bordj zemmoura",
        "commune_name": "برج زمورة",
        "daira_name_ascii": "bordj zemmoura",
        "daira_name": "برج زمورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1188,
        "commune_name_ascii": "ouled dahmane",
        "commune_name": "أولاد دحمان",
        "daira_name_ascii": "bordj zemmoura",
        "daira_name": "برج زمورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1195,
        "commune_name_ascii": "tassamert",
        "commune_name": "تسامرت",
        "daira_name_ascii": "bordj zemmoura",
        "daira_name": "برج زمورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1166,
        "commune_name_ascii": "b. b. arreridj",
        "commune_name": "برج بوعريرج",
        "daira_name_ascii": "bordj bou arreridj",
        "daira_name": "برج بوعريريج",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1168,
        "commune_name_ascii": "ben daoud",
        "commune_name": "بن داود",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "34",
        "wilaya_name_ascii": "bordj bou arreridj",
        "wilaya_name": "برج بوعريريج"
    },
    {
        "id": 1212,
        "commune_name_ascii": "el kharrouba",
        "commune_name": "الخروبة",
        "daira_name_ascii": "boudouaou",
        "daira_name": "بودواو",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1210,
        "commune_name_ascii": "dellys",
        "commune_name": "دلس",
        "daira_name_ascii": "dellys",
        "daira_name": "دلس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1201,
        "commune_name_ascii": "ben choud",
        "commune_name": "بن شود",
        "daira_name_ascii": "dellys",
        "daira_name": "دلس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1198,
        "commune_name_ascii": "afir",
        "commune_name": "أعفير",
        "daira_name_ascii": "dellys",
        "daira_name": "دلس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1226,
        "commune_name_ascii": "thenia",
        "commune_name": "الثنية",
        "daira_name_ascii": "thenia",
        "daira_name": "الثنية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1202,
        "commune_name_ascii": "beni amrane",
        "commune_name": "بني عمران",
        "daira_name_ascii": "thenia",
        "daira_name": "الثنية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1215,
        "commune_name_ascii": "khemis el khechna",
        "commune_name": "خميس الخشنة",
        "daira_name_ascii": "khemis el khechna",
        "daira_name": "خميس الخشنة",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1199,
        "commune_name_ascii": "ammal",
        "commune_name": "عمال",
        "daira_name_ascii": "thenia",
        "daira_name": "الثنية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1228,
        "commune_name_ascii": "timezrit",
        "commune_name": "تيمزريت",
        "daira_name_ascii": "isser",
        "daira_name": "يسر",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1229,
        "commune_name_ascii": "zemmouri",
        "commune_name": "زموري",
        "daira_name_ascii": "bordj menaiel",
        "daira_name": "برج منايل",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1216,
        "commune_name_ascii": "larbatache",
        "commune_name": "الاربعطاش",
        "daira_name_ascii": "khemis el khechna",
        "daira_name": "خميس الخشنة",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1214,
        "commune_name_ascii": "isser",
        "commune_name": "يسر",
        "daira_name_ascii": "isser",
        "daira_name": "يسر",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1208,
        "commune_name_ascii": "chabet el ameur",
        "commune_name": "شعبة العامر",
        "daira_name_ascii": "isser",
        "daira_name": "يسر",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1219,
        "commune_name_ascii": "ouled aissa",
        "commune_name": "أولاد عيسى",
        "daira_name_ascii": "naciria",
        "daira_name": "الناصرية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1218,
        "commune_name_ascii": "naciria",
        "commune_name": "الناصرية",
        "daira_name_ascii": "naciria",
        "daira_name": "الناصرية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1207,
        "commune_name_ascii": "bouzegza keddara",
        "commune_name": "بوزقزة قدارة",
        "daira_name_ascii": "boudouaou",
        "daira_name": "بودواو",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1224,
        "commune_name_ascii": "souk el had",
        "commune_name": "سوق الحد",
        "daira_name_ascii": "thenia",
        "daira_name": "الثنية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1223,
        "commune_name_ascii": "sidi daoud",
        "commune_name": "سيدي داود",
        "daira_name_ascii": "baghlia",
        "daira_name": "بغلية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1200,
        "commune_name_ascii": "baghlia",
        "commune_name": "بغلية",
        "daira_name_ascii": "baghlia",
        "daira_name": "بغلية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1217,
        "commune_name_ascii": "leghata",
        "commune_name": "لقاطة",
        "daira_name_ascii": "bordj menaiel",
        "daira_name": "برج منايل",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1211,
        "commune_name_ascii": "djinet",
        "commune_name": "جنات",
        "daira_name_ascii": "bordj menaiel",
        "daira_name": "برج منايل",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1227,
        "commune_name_ascii": "tidjelabine",
        "commune_name": "تيجلابين",
        "daira_name_ascii": "boumerdes",
        "daira_name": "بومرداس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1222,
        "commune_name_ascii": "si mustapha",
        "commune_name": "سي مصطفى",
        "daira_name_ascii": "isser",
        "daira_name": "يسر",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1220,
        "commune_name_ascii": "ouled hedadj",
        "commune_name": "أولاد هداج",
        "daira_name_ascii": "boudouaou",
        "daira_name": "بودواو",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1221,
        "commune_name_ascii": "ouled moussa",
        "commune_name": "أولاد موسى",
        "daira_name_ascii": "khemis el khechna",
        "daira_name": "خميس الخشنة",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1206,
        "commune_name_ascii": "boumerdes",
        "commune_name": "بومرداس",
        "daira_name_ascii": "boumerdes",
        "daira_name": "بومرداس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1209,
        "commune_name_ascii": "corso",
        "commune_name": "قورصو",
        "daira_name_ascii": "boumerdes",
        "daira_name": "بومرداس",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1203,
        "commune_name_ascii": "bordj menaiel",
        "commune_name": "برج منايل",
        "daira_name_ascii": "bordj menaiel",
        "daira_name": "برج منايل",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1204,
        "commune_name_ascii": "boudouaou",
        "commune_name": "بودواو",
        "daira_name_ascii": "boudouaou",
        "daira_name": "بودواو",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1205,
        "commune_name_ascii": "boudouaou el bahri",
        "commune_name": "بودواو البحري",
        "daira_name_ascii": "boudouaou",
        "daira_name": "بودواو",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1225,
        "commune_name_ascii": "taourga",
        "commune_name": "تاورقة",
        "daira_name_ascii": "baghlia",
        "daira_name": "بغلية",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1213,
        "commune_name_ascii": "hammedi",
        "commune_name": "حمادي",
        "daira_name_ascii": "khemis el khechna",
        "daira_name": "خميس الخشنة",
        "wilaya_code": "35",
        "wilaya_name_ascii": "boumerdes",
        "wilaya_name": "بومرداس"
    },
    {
        "id": 1230,
        "commune_name_ascii": "ain el assel",
        "commune_name": "عين العسل",
        "daira_name_ascii": "el tarf",
        "daira_name": "الطارف",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1236,
        "commune_name_ascii": "bougous",
        "commune_name": "بوقوس",
        "daira_name_ascii": "el tarf",
        "daira_name": "الطارف",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1246,
        "commune_name_ascii": "el tarf",
        "commune_name": "الطارف",
        "daira_name_ascii": "el tarf",
        "daira_name": "الطارف",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1253,
        "commune_name_ascii": "zitouna",
        "commune_name": "الزيتونة",
        "daira_name_ascii": "el tarf",
        "daira_name": "الطارف",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1235,
        "commune_name_ascii": "besbes",
        "commune_name": "البسباس",
        "daira_name_ascii": "besbes",
        "daira_name": "البسباس",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1231,
        "commune_name_ascii": "ain kerma",
        "commune_name": "عين الكرمة",
        "daira_name_ascii": "bouhadjar",
        "daira_name": "بوحجار",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1237,
        "commune_name_ascii": "bouhadjar",
        "commune_name": "بوحجار",
        "daira_name_ascii": "bouhadjar",
        "daira_name": "بوحجار",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1247,
        "commune_name_ascii": "hammam beni salah",
        "commune_name": "حمام بني صالح",
        "daira_name_ascii": "bouhadjar",
        "daira_name": "بوحجار",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1249,
        "commune_name_ascii": "oued zitoun",
        "commune_name": "وادي الزيتون",
        "daira_name_ascii": "bouhadjar",
        "daira_name": "بوحجار",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1233,
        "commune_name_ascii": "ben m hidi",
        "commune_name": "بن مهيدي",
        "daira_name_ascii": "ben m'hidi",
        "daira_name": "بن مهيدي",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1234,
        "commune_name_ascii": "berrihane",
        "commune_name": "بريحان",
        "daira_name_ascii": "ben m'hidi",
        "daira_name": "بن مهيدي",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1239,
        "commune_name_ascii": "chebaita mokhtar",
        "commune_name": "شبيطة مختار",
        "daira_name_ascii": "drean",
        "daira_name": "الذرعان",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1243,
        "commune_name_ascii": "echatt",
        "commune_name": "الشط",
        "daira_name_ascii": "ben m'hidi",
        "daira_name": "بن مهيدي",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1244,
        "commune_name_ascii": "el aioun",
        "commune_name": "العيون",
        "daira_name_ascii": "el kala",
        "daira_name": "القالة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1245,
        "commune_name_ascii": "el kala",
        "commune_name": "القالة",
        "daira_name_ascii": "el kala",
        "daira_name": "القالة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1251,
        "commune_name_ascii": "souarekh",
        "commune_name": "السوارخ",
        "daira_name_ascii": "el kala",
        "daira_name": "القالة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1252,
        "commune_name_ascii": "zerizer",
        "commune_name": "زريزر",
        "daira_name_ascii": "besbes",
        "daira_name": "البسباس",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1238,
        "commune_name_ascii": "bouteldja",
        "commune_name": "بوثلجة",
        "daira_name_ascii": "bouteldja",
        "daira_name": "بوثلجة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1240,
        "commune_name_ascii": "chefia",
        "commune_name": "الشافية",
        "daira_name_ascii": "bouteldja",
        "daira_name": "بوثلجة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1248,
        "commune_name_ascii": "lac des oiseaux",
        "commune_name": "بحيرة الطيور",
        "daira_name_ascii": "bouteldja",
        "daira_name": "بوثلجة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1241,
        "commune_name_ascii": "chihani",
        "commune_name": "شحاني",
        "daira_name_ascii": "drean",
        "daira_name": "الذرعان",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1250,
        "commune_name_ascii": "raml souk",
        "commune_name": "رمل السوق",
        "daira_name_ascii": "el kala",
        "daira_name": "القالة",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1232,
        "commune_name_ascii": "asfour",
        "commune_name": "عصفور",
        "daira_name_ascii": "besbes",
        "daira_name": "البسباس",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1242,
        "commune_name_ascii": "drean",
        "commune_name": "الذرعان",
        "daira_name_ascii": "drean",
        "daira_name": "الذرعان",
        "wilaya_code": "36",
        "wilaya_name_ascii": "el tarf",
        "wilaya_name": "الطارف"
    },
    {
        "id": 1255,
        "commune_name_ascii": "tindouf",
        "commune_name": "تندوف",
        "daira_name_ascii": "tindouf",
        "daira_name": "تندوف",
        "wilaya_code": "37",
        "wilaya_name_ascii": "tindouf",
        "wilaya_name": "تندوف"
    },
    {
        "id": 1254,
        "commune_name_ascii": "oum el assel",
        "commune_name": "أم العسل",
        "daira_name_ascii": "tindouf",
        "daira_name": "تندوف",
        "wilaya_code": "37",
        "wilaya_name_ascii": "tindouf",
        "wilaya_name": "تندوف"
    },
    {
        "id": 1262,
        "commune_name_ascii": "khemisti",
        "commune_name": "خميستي",
        "daira_name_ascii": "khemisti",
        "daira_name": "خميستي",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1275,
        "commune_name_ascii": "theniet el had",
        "commune_name": "ثنية الاحد",
        "daira_name_ascii": "theniet el had",
        "daira_name": "ثنية الاحد",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1269,
        "commune_name_ascii": "ouled bessam",
        "commune_name": "أولاد بسام",
        "daira_name_ascii": "tissemsilt",
        "daira_name": "تيسمسيلت",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1271,
        "commune_name_ascii": "sidi boutouchent",
        "commune_name": "سيدي بوتوشنت",
        "daira_name_ascii": "theniet el had",
        "daira_name": "ثنية الاحد",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1276,
        "commune_name_ascii": "tissemsilt",
        "commune_name": "تيسمسيلت",
        "daira_name_ascii": "tissemsilt",
        "daira_name": "تيسمسيلت",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1272,
        "commune_name_ascii": "sidi lantri",
        "commune_name": "سيدي العنتري",
        "daira_name_ascii": "lardjem",
        "daira_name": "لرجام",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1257,
        "commune_name_ascii": "beni chaib",
        "commune_name": "بني شعيب",
        "daira_name_ascii": "bordj bounaama",
        "daira_name": "برج بونعامة",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1258,
        "commune_name_ascii": "beni lahcene",
        "commune_name": "بني لحسن",
        "daira_name_ascii": "bordj bounaama",
        "daira_name": "برج بونعامة",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1270,
        "commune_name_ascii": "sidi abed",
        "commune_name": "سيدي عابد",
        "daira_name_ascii": "ammari",
        "daira_name": "عماري",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1273,
        "commune_name_ascii": "sidi slimane",
        "commune_name": "سيدي سليمان",
        "daira_name_ascii": "bordj bounaama",
        "daira_name": "برج بونعامة",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1261,
        "commune_name_ascii": "boucaid",
        "commune_name": "بوقائد",
        "daira_name_ascii": "lazharia",
        "daira_name": "الأزهرية",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1263,
        "commune_name_ascii": "larbaa",
        "commune_name": "الأربعاء",
        "daira_name_ascii": "lazharia",
        "daira_name": "الأزهرية",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1266,
        "commune_name_ascii": "lazharia",
        "commune_name": "الأزهرية",
        "daira_name_ascii": "lazharia",
        "daira_name": "الأزهرية",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1264,
        "commune_name_ascii": "lardjem",
        "commune_name": "لرجام",
        "daira_name_ascii": "lardjem",
        "daira_name": "لرجام",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1268,
        "commune_name_ascii": "melaab",
        "commune_name": "الملعب",
        "daira_name_ascii": "lardjem",
        "daira_name": "لرجام",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1265,
        "commune_name_ascii": "layoune",
        "commune_name": "العيون",
        "daira_name_ascii": "khemisti",
        "daira_name": "خميستي",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1274,
        "commune_name_ascii": "tamellahet",
        "commune_name": "تملاحت",
        "daira_name_ascii": "lardjem",
        "daira_name": "لرجام",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1277,
        "commune_name_ascii": "youssoufia",
        "commune_name": "اليوسفية",
        "daira_name_ascii": "bordj emir abdelkader",
        "daira_name": "برج الأمير عبد القادر",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1260,
        "commune_name_ascii": "bordj el emir abdelkader",
        "commune_name": "برج الأمير عبد القادر",
        "daira_name_ascii": "bordj emir abdelkader",
        "daira_name": "برج الأمير عبد القادر",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1256,
        "commune_name_ascii": "ammari",
        "commune_name": "عماري",
        "daira_name_ascii": "ammari",
        "daira_name": "عماري",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1267,
        "commune_name_ascii": "maacem",
        "commune_name": "المعاصم",
        "daira_name_ascii": "ammari",
        "daira_name": "عماري",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1259,
        "commune_name_ascii": "bordj bounaama",
        "commune_name": "برج بونعامة",
        "daira_name_ascii": "bordj bounaama",
        "daira_name": "برج بونعامة",
        "wilaya_code": "38",
        "wilaya_name_ascii": "tissemsilt",
        "wilaya_name": "تيسمسيلت"
    },
    {
        "id": 1282,
        "commune_name_ascii": "douar el maa",
        "commune_name": "دوار الماء",
        "daira_name_ascii": "taleb larbi",
        "daira_name": "الطالب العربي",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1283,
        "commune_name_ascii": "el ogla",
        "commune_name": "العقلة",
        "daira_name_ascii": "robbah",
        "daira_name": "الرباح",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1291,
        "commune_name_ascii": "magrane",
        "commune_name": "المقرن",
        "daira_name_ascii": "magrane",
        "daira_name": "المقرن",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1301,
        "commune_name_ascii": "sidi aoun",
        "commune_name": "سيدي عون",
        "daira_name_ascii": "magrane",
        "daira_name": "المقرن",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1292,
        "commune_name_ascii": "mih ouansa",
        "commune_name": "اميه وانسة",
        "daira_name_ascii": "mih ouensa",
        "daira_name": "اميه وانسة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1290,
        "commune_name_ascii": "kouinine",
        "commune_name": "كوينين",
        "daira_name_ascii": "el oued",
        "daira_name": "الوادي",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1278,
        "commune_name_ascii": "bayadha",
        "commune_name": "البياضة",
        "daira_name_ascii": "bayadha",
        "daira_name": "البياضة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1294,
        "commune_name_ascii": "nakhla",
        "commune_name": "النخلة",
        "daira_name_ascii": "robbah",
        "daira_name": "الرباح",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1299,
        "commune_name_ascii": "robbah",
        "commune_name": "الرباح",
        "daira_name_ascii": "robbah",
        "daira_name": "الرباح",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1286,
        "commune_name_ascii": "guemar",
        "commune_name": "قمار",
        "daira_name_ascii": "guemar",
        "daira_name": "قمار",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1279,
        "commune_name_ascii": "ben guecha",
        "commune_name": "بنقشة",
        "daira_name_ascii": "taleb larbi",
        "daira_name": "الطالب العربي",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1297,
        "commune_name_ascii": "ourmes",
        "commune_name": "ورماس",
        "daira_name_ascii": "guemar",
        "daira_name": "قمار",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1304,
        "commune_name_ascii": "taghzout",
        "commune_name": "تغزوت",
        "daira_name_ascii": "guemar",
        "daira_name": "قمار",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1287,
        "commune_name_ascii": "hamraia",
        "commune_name": "الحمراية",
        "daira_name_ascii": "reguiba",
        "daira_name": "الرقيبة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1298,
        "commune_name_ascii": "reguiba",
        "commune_name": "الرقيبة",
        "daira_name_ascii": "reguiba",
        "daira_name": "الرقيبة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1280,
        "commune_name_ascii": "debila",
        "commune_name": "الدبيلة",
        "daira_name_ascii": "debila",
        "daira_name": "الدبيلة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1288,
        "commune_name_ascii": "hassani abdelkrim",
        "commune_name": "حساني عبد الكريم",
        "daira_name_ascii": "debila",
        "daira_name": "الدبيلة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1289,
        "commune_name_ascii": "hassi khalifa",
        "commune_name": "حاسي خليفة",
        "daira_name_ascii": "hassi khalifa",
        "daira_name": "حاسي خليفة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1307,
        "commune_name_ascii": "trifaoui",
        "commune_name": "الطريفاوي",
        "daira_name_ascii": "hassi khalifa",
        "daira_name": "حاسي خليفة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1305,
        "commune_name_ascii": "taleb larbi",
        "commune_name": "الطالب العربي",
        "daira_name_ascii": "taleb larbi",
        "daira_name": "الطالب العربي",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1295,
        "commune_name_ascii": "oued el alenda",
        "commune_name": "وادي العلندة",
        "daira_name_ascii": "mih ouensa",
        "daira_name": "اميه وانسة",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1285,
        "commune_name_ascii": "el-oued",
        "commune_name": "الوادي",
        "daira_name_ascii": "el oued",
        "daira_name": "الوادي",
        "wilaya_code": "39",
        "wilaya_name_ascii": "el oued",
        "wilaya_name": "الوادي"
    },
    {
        "id": 1321,
        "commune_name_ascii": "khirane",
        "commune_name": "خيران",
        "daira_name_ascii": "chechar",
        "daira_name": "ششار",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1309,
        "commune_name_ascii": "babar",
        "commune_name": "بابار",
        "daira_name_ascii": "babar",
        "daira_name": "بابار",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1316,
        "commune_name_ascii": "el mahmal",
        "commune_name": "المحمل",
        "daira_name_ascii": "ouled rechache",
        "daira_name": "أولاد رشاش",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1324,
        "commune_name_ascii": "ouled rechache",
        "commune_name": "أولاد رشاش",
        "daira_name_ascii": "ouled rechache",
        "daira_name": "أولاد رشاش",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1314,
        "commune_name_ascii": "djellal",
        "commune_name": "جلال",
        "daira_name_ascii": "chechar",
        "daira_name": "ششار",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1328,
        "commune_name_ascii": "yabous",
        "commune_name": "يابوس",
        "daira_name_ascii": "bouhmama",
        "daira_name": "بوحمامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1320,
        "commune_name_ascii": "khenchela",
        "commune_name": "خنشلة",
        "daira_name_ascii": "khenchela",
        "daira_name": "خنشلة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1319,
        "commune_name_ascii": "kais",
        "commune_name": "قايس",
        "daira_name_ascii": "kais",
        "daira_name": "قايس",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1313,
        "commune_name_ascii": "chelia",
        "commune_name": "شلية",
        "daira_name_ascii": "bouhmama",
        "daira_name": "بوحمامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1325,
        "commune_name_ascii": "remila",
        "commune_name": "الرميلة",
        "daira_name_ascii": "kais",
        "daira_name": "قايس",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1327,
        "commune_name_ascii": "taouzianat",
        "commune_name": "تاوزيانت",
        "daira_name_ascii": "kais",
        "daira_name": "قايس",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1310,
        "commune_name_ascii": "baghai",
        "commune_name": "بغاي",
        "daira_name_ascii": "el hamma",
        "daira_name": "الحامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1315,
        "commune_name_ascii": "el hamma",
        "commune_name": "الحامة",
        "daira_name_ascii": "el hamma",
        "daira_name": "الحامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1318,
        "commune_name_ascii": "ensigha",
        "commune_name": "انسيغة",
        "daira_name_ascii": "el hamma",
        "daira_name": "الحامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1326,
        "commune_name_ascii": "tamza",
        "commune_name": "طامزة",
        "daira_name_ascii": "el hamma",
        "daira_name": "الحامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1308,
        "commune_name_ascii": "ain touila",
        "commune_name": "عين الطويلة",
        "daira_name_ascii": "ain touila",
        "daira_name": "عين الطويلة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1323,
        "commune_name_ascii": "m'toussa",
        "commune_name": "متوسة",
        "daira_name_ascii": "ain touila",
        "daira_name": "عين الطويلة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1311,
        "commune_name_ascii": "bouhmama",
        "commune_name": "بوحمامة",
        "daira_name_ascii": "bouhmama",
        "daira_name": "بوحمامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1317,
        "commune_name_ascii": "el oueldja",
        "commune_name": "الولجة",
        "daira_name_ascii": "chechar",
        "daira_name": "ششار",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1322,
        "commune_name_ascii": "m'sara",
        "commune_name": "مصارة",
        "daira_name_ascii": "bouhmama",
        "daira_name": "بوحمامة",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1312,
        "commune_name_ascii": "chechar",
        "commune_name": "ششار",
        "daira_name_ascii": "chechar",
        "daira_name": "ششار",
        "wilaya_code": "40",
        "wilaya_name_ascii": "khenchela",
        "wilaya_name": "خنشلة"
    },
    {
        "id": 1349,
        "commune_name_ascii": "souk ahras",
        "commune_name": "سوق أهراس",
        "daira_name_ascii": "souk ahras",
        "daira_name": "سوق أهراس",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1329,
        "commune_name_ascii": "ain soltane",
        "commune_name": "عين سلطان",
        "daira_name_ascii": "sedrata",
        "daira_name": "سدراتة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1347,
        "commune_name_ascii": "sedrata",
        "commune_name": "سدراتة",
        "daira_name_ascii": "sedrata",
        "daira_name": "سدراتة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1334,
        "commune_name_ascii": "hanencha",
        "commune_name": "الحنانشة",
        "daira_name_ascii": "mechroha",
        "daira_name": "المشروحة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1337,
        "commune_name_ascii": "machroha",
        "commune_name": "المشروحة",
        "daira_name_ascii": "mechroha",
        "daira_name": "المشروحة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1330,
        "commune_name_ascii": "ain zana",
        "commune_name": "عين الزانة",
        "daira_name_ascii": "ouled driss",
        "daira_name": "أولاد إدريس",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1341,
        "commune_name_ascii": "ouled driss",
        "commune_name": "أولاد إدريس",
        "daira_name_ascii": "ouled driss",
        "daira_name": "أولاد إدريس",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1351,
        "commune_name_ascii": "terraguelt",
        "commune_name": "ترقالت",
        "daira_name_ascii": "oum el adhaim",
        "daira_name": "أم العظايم",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1343,
        "commune_name_ascii": "oum el adhaim",
        "commune_name": "أم العظايم",
        "daira_name_ascii": "oum el adhaim",
        "daira_name": "أم العظايم",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1340,
        "commune_name_ascii": "oued kebrit",
        "commune_name": "وادي الكبريت",
        "daira_name_ascii": "oum el adhaim",
        "daira_name": "أم العظايم",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1352,
        "commune_name_ascii": "tiffech",
        "commune_name": "تيفاش",
        "daira_name_ascii": "m'daourouche",
        "daira_name": "مداوروش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1345,
        "commune_name_ascii": "ragouba",
        "commune_name": "الراقوبة",
        "daira_name_ascii": "m'daourouche",
        "daira_name": "مداوروش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1332,
        "commune_name_ascii": "drea",
        "commune_name": "الدريعة",
        "daira_name_ascii": "taoura",
        "daira_name": "تاورة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1350,
        "commune_name_ascii": "taoura",
        "commune_name": "تاورة",
        "daira_name_ascii": "taoura",
        "daira_name": "تاورة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1353,
        "commune_name_ascii": "zaarouria",
        "commune_name": "الزعرورية",
        "daira_name_ascii": "taoura",
        "daira_name": "تاورة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1333,
        "commune_name_ascii": "haddada",
        "commune_name": "الحدادة",
        "daira_name_ascii": "haddada",
        "daira_name": "الحدادة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1335,
        "commune_name_ascii": "khedara",
        "commune_name": "الخضارة",
        "daira_name_ascii": "haddada",
        "daira_name": "الحدادة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1342,
        "commune_name_ascii": "ouled moumen",
        "commune_name": "أولاد مومن",
        "daira_name_ascii": "haddada",
        "daira_name": "الحدادة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1339,
        "commune_name_ascii": "merahna",
        "commune_name": "المراهنة",
        "daira_name_ascii": "merahna",
        "daira_name": "المراهنة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1344,
        "commune_name_ascii": "ouillen",
        "commune_name": "ويلان",
        "daira_name_ascii": "merahna",
        "daira_name": "المراهنة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1348,
        "commune_name_ascii": "sidi fredj",
        "commune_name": "سيدي فرج",
        "daira_name_ascii": "merahna",
        "daira_name": "المراهنة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1331,
        "commune_name_ascii": "bir bouhouche",
        "commune_name": "بئر بوحوش",
        "daira_name_ascii": "bir bouhouche",
        "daira_name": "بئر بوحوش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1346,
        "commune_name_ascii": "safel el ouiden",
        "commune_name": "سافل الويدان",
        "daira_name_ascii": "bir bouhouche",
        "daira_name": "بئر بوحوش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1336,
        "commune_name_ascii": "khemissa",
        "commune_name": "خميسة",
        "daira_name_ascii": "sedrata",
        "daira_name": "سدراتة",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1338,
        "commune_name_ascii": "m'daourouche",
        "commune_name": "مداوروش",
        "daira_name_ascii": "m'daourouche",
        "daira_name": "مداوروش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1354,
        "commune_name_ascii": "zouabi",
        "commune_name": "الزوابي",
        "daira_name_ascii": "bir bouhouche",
        "daira_name": "بئر بوحوش",
        "wilaya_code": "41",
        "wilaya_name_ascii": "souk ahras",
        "wilaya_name": "سوق أهراس"
    },
    {
        "id": 1369,
        "commune_name_ascii": "hadjout",
        "commune_name": "حجوط",
        "daira_name_ascii": "hadjout",
        "daira_name": "حجوط",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1375,
        "commune_name_ascii": "merad",
        "commune_name": "مراد",
        "daira_name_ascii": "hadjout",
        "daira_name": "حجوط",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1374,
        "commune_name_ascii": "menaceur",
        "commune_name": "مناصر",
        "daira_name_ascii": "sidi amar",
        "daira_name": "سيدي أعمر",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1355,
        "commune_name_ascii": "aghbal",
        "commune_name": "أغبال",
        "daira_name_ascii": "gouraya",
        "daira_name": "قوراية",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1377,
        "commune_name_ascii": "nador",
        "commune_name": "الناظور",
        "daira_name_ascii": "sidi amar",
        "daira_name": "سيدي أعمر",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1381,
        "commune_name_ascii": "sidi-amar",
        "commune_name": "سيدي عامر",
        "daira_name_ascii": "sidi amar",
        "daira_name": "سيدي أعمر",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1368,
        "commune_name_ascii": "gouraya",
        "commune_name": "قوراية",
        "daira_name_ascii": "gouraya",
        "daira_name": "قوراية",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1376,
        "commune_name_ascii": "messelmoun",
        "commune_name": "مسلمون",
        "daira_name_ascii": "gouraya",
        "daira_name": "قوراية",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1364,
        "commune_name_ascii": "cherchell",
        "commune_name": "شرشال",
        "daira_name_ascii": "cherchell",
        "daira_name": "شرشال",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1370,
        "commune_name_ascii": "hadjret ennous",
        "commune_name": "حجرة النص",
        "daira_name_ascii": "cherchell",
        "daira_name": "شرشال",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1378,
        "commune_name_ascii": "sidi ghiles",
        "commune_name": "سيدي غيلاس",
        "daira_name_ascii": "cherchell",
        "daira_name": "شرشال",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1365,
        "commune_name_ascii": "damous",
        "commune_name": "الداموس",
        "daira_name_ascii": "damous",
        "daira_name": "الداموس",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1373,
        "commune_name_ascii": "larhat",
        "commune_name": "الأرهاط",
        "daira_name_ascii": "damous",
        "daira_name": "الداموس",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1367,
        "commune_name_ascii": "fouka",
        "commune_name": "فوكة",
        "daira_name_ascii": "fouka",
        "daira_name": "فوكة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1357,
        "commune_name_ascii": "ain tagourait",
        "commune_name": "عين تاقورايت",
        "daira_name_ascii": "bou ismail",
        "daira_name": "بواسماعيل",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1360,
        "commune_name_ascii": "bou haroun",
        "commune_name": "بوهارون",
        "daira_name_ascii": "bou ismail",
        "daira_name": "بواسماعيل",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1361,
        "commune_name_ascii": "bou ismail",
        "commune_name": "بواسماعيل",
        "daira_name_ascii": "bou ismail",
        "daira_name": "بواسماعيل",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1371,
        "commune_name_ascii": "khemisti",
        "commune_name": "خميستي",
        "daira_name_ascii": "bou ismail",
        "daira_name": "بواسماعيل",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1356,
        "commune_name_ascii": "ahmer el ain",
        "commune_name": "أحمر العين",
        "daira_name_ascii": "ahmar el ain",
        "daira_name": "أحمر العين",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1362,
        "commune_name_ascii": "bourkika",
        "commune_name": "بورقيقة",
        "daira_name_ascii": "ahmar el ain",
        "daira_name": "أحمر العين",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1366,
        "commune_name_ascii": "douaouda",
        "commune_name": "دواودة",
        "daira_name_ascii": "fouka",
        "daira_name": "فوكة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1379,
        "commune_name_ascii": "sidi rached",
        "commune_name": "سيدي راشد",
        "daira_name_ascii": "ahmar el ain",
        "daira_name": "أحمر العين",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1358,
        "commune_name_ascii": "attatba",
        "commune_name": "الحطاطبة",
        "daira_name_ascii": "kolea",
        "daira_name": "القليعة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1363,
        "commune_name_ascii": "chaiba",
        "commune_name": "الشعيبة",
        "daira_name_ascii": "kolea",
        "daira_name": "القليعة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1372,
        "commune_name_ascii": "kolea",
        "commune_name": "القليعة",
        "daira_name_ascii": "kolea",
        "daira_name": "القليعة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1380,
        "commune_name_ascii": "sidi semiane",
        "commune_name": "سيدي سميان",
        "daira_name_ascii": "cherchell",
        "daira_name": "شرشال",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1382,
        "commune_name_ascii": "tipaza",
        "commune_name": "تيبازة",
        "daira_name_ascii": "tipaza",
        "daira_name": "تيبازة",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1359,
        "commune_name_ascii": "beni mileuk",
        "commune_name": "بني ميلك",
        "daira_name_ascii": "damous",
        "daira_name": "الداموس",
        "wilaya_code": "42",
        "wilaya_name_ascii": "tipaza",
        "wilaya_name": "تيبازة"
    },
    {
        "id": 1394,
        "commune_name_ascii": "el mechira",
        "commune_name": "مشيرة",
        "daira_name_ascii": "teleghma",
        "daira_name": "التلاغمة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1393,
        "commune_name_ascii": "el ayadi barbes",
        "commune_name": "العياضي برباس",
        "daira_name_ascii": "ain beida harriche",
        "daira_name": "عين البيضاء أحريش",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1384,
        "commune_name_ascii": "ain beida harriche",
        "commune_name": " عين البيضاء أحريش",
        "daira_name_ascii": "ain beida harriche",
        "daira_name": "عين البيضاء أحريش",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1411,
        "commune_name_ascii": "tassala lematai",
        "commune_name": "تسالة لمطاعي",
        "daira_name_ascii": "terrai bainen",
        "daira_name": "ترعي باينان",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1410,
        "commune_name_ascii": "terrai bainen",
        "commune_name": "ترعي باينان",
        "daira_name_ascii": "terrai bainen",
        "daira_name": "ترعي باينان",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1387,
        "commune_name_ascii": "amira arres",
        "commune_name": "اعميرة اراس",
        "daira_name_ascii": "terrai bainen",
        "daira_name": "ترعي باينان",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1408,
        "commune_name_ascii": "tassadane haddada",
        "commune_name": "تسدان حدادة",
        "daira_name_ascii": "tassadane haddada",
        "daira_name": "تسدان حدادة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1399,
        "commune_name_ascii": "minar zarza",
        "commune_name": "مينار زارزة",
        "daira_name_ascii": "tassadane haddada",
        "daira_name": "تسدان حدادة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1406,
        "commune_name_ascii": "sidi merouane",
        "commune_name": "سيدي مروان",
        "daira_name_ascii": "sidi merouane",
        "daira_name": "سيدي مروان",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1391,
        "commune_name_ascii": "chigara",
        "commune_name": "الشيقارة",
        "daira_name_ascii": "sidi merouane",
        "daira_name": "سيدي مروان",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1397,
        "commune_name_ascii": "hamala",
        "commune_name": "حمالة",
        "daira_name_ascii": "grarem gouga",
        "daira_name": "القرارم قوقة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1396,
        "commune_name_ascii": "grarem gouga",
        "commune_name": "القرارم قوقة",
        "daira_name_ascii": "grarem gouga",
        "daira_name": "القرارم قوقة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1412,
        "commune_name_ascii": "tiberguent",
        "commune_name": "تيبرقنت",
        "daira_name_ascii": "rouached",
        "daira_name": "الرواشد",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1404,
        "commune_name_ascii": "rouached",
        "commune_name": "الرواشد",
        "daira_name_ascii": "rouached",
        "daira_name": "الرواشد",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1392,
        "commune_name_ascii": "derrahi bousselah",
        "commune_name": "دراحي بوصلاح",
        "daira_name_ascii": "bouhatem",
        "daira_name": "بوحاتم",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1414,
        "commune_name_ascii": "zeghaia",
        "commune_name": "زغاية",
        "daira_name_ascii": "oued endja",
        "daira_name": "وادي النجاء",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1401,
        "commune_name_ascii": "oued endja",
        "commune_name": "وادي النجاء",
        "daira_name_ascii": "oued endja",
        "daira_name": "وادي النجاء",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1383,
        "commune_name_ascii": "ahmed rachedi",
        "commune_name": "أحمد راشدي",
        "daira_name_ascii": "oued endja",
        "daira_name": "وادي النجاء",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1407,
        "commune_name_ascii": "tadjenanet",
        "commune_name": "تاجنانت",
        "daira_name_ascii": "tadjenanet",
        "daira_name": "تاجنانت",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1385,
        "commune_name_ascii": "ain mellouk",
        "commune_name": "عين الملوك",
        "daira_name_ascii": "chelghoum laid",
        "daira_name": "شلغوم العيد",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1403,
        "commune_name_ascii": "ouled khalouf",
        "commune_name": "أولاد اخلوف",
        "daira_name_ascii": "tadjenanet",
        "daira_name": "تاجنانت",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1388,
        "commune_name_ascii": "benyahia abderrahmane",
        "commune_name": "بن يحي عبد الرحمن",
        "daira_name_ascii": "tadjenanet",
        "daira_name": "تاجنانت",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1409,
        "commune_name_ascii": "teleghma",
        "commune_name": "التلاغمة",
        "daira_name_ascii": "teleghma",
        "daira_name": "التلاغمة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1402,
        "commune_name_ascii": "oued seguen",
        "commune_name": "وادي سقان",
        "daira_name_ascii": "teleghma",
        "daira_name": "التلاغمة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1400,
        "commune_name_ascii": "oued athmenia",
        "commune_name": "وادي العثمانية",
        "daira_name_ascii": "chelghoum laid",
        "daira_name": "شلغوم العيد",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1386,
        "commune_name_ascii": "ain tine",
        "commune_name": "عين التين",
        "daira_name_ascii": "mila",
        "daira_name": "ميلة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1390,
        "commune_name_ascii": "chelghoum laid",
        "commune_name": "شلغوم العيد",
        "daira_name_ascii": "chelghoum laid",
        "daira_name": "شلغوم العيد",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1413,
        "commune_name_ascii": "yahia beniguecha",
        "commune_name": "يحي بني قشة",
        "daira_name_ascii": "ferdjioua",
        "daira_name": "فرجيوة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1395,
        "commune_name_ascii": "ferdjioua",
        "commune_name": "فرجيوة",
        "daira_name_ascii": "ferdjioua",
        "daira_name": "فرجيوة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1405,
        "commune_name_ascii": "sidi khelifa",
        "commune_name": "سيدي خليفة",
        "daira_name_ascii": "mila",
        "daira_name": "ميلة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1398,
        "commune_name_ascii": "mila",
        "commune_name": "ميلة",
        "daira_name_ascii": "mila",
        "daira_name": "ميلة",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1389,
        "commune_name_ascii": "bouhatem",
        "commune_name": "بوحاتم",
        "daira_name_ascii": "bouhatem",
        "daira_name": "بوحاتم",
        "wilaya_code": "43",
        "wilaya_name_ascii": "mila",
        "wilaya_name": "ميلة"
    },
    {
        "id": 1440,
        "commune_name_ascii": "khemis-miliana",
        "commune_name": "خميس مليانة",
        "daira_name_ascii": "khemis",
        "daira_name": "خميس",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1446,
        "commune_name_ascii": "sidi-lakhdar",
        "commune_name": "سيدي الأخضر",
        "daira_name_ascii": "khemis",
        "daira_name": "خميس",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1415,
        "commune_name_ascii": "ain-benian",
        "commune_name": "عين البنيان",
        "daira_name_ascii": "hammam righa",
        "daira_name": "حمام ريغة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1420,
        "commune_name_ascii": "ain-torki",
        "commune_name": "عين التركي",
        "daira_name_ascii": "hammam righa",
        "daira_name": "حمام ريغة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1437,
        "commune_name_ascii": "hammam-righa",
        "commune_name": "حمام ريغة",
        "daira_name_ascii": "hammam righa",
        "daira_name": "حمام ريغة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1429,
        "commune_name_ascii": "bourached",
        "commune_name": "بوراشد",
        "daira_name_ascii": "djelida",
        "daira_name": "جليدة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1439,
        "commune_name_ascii": "hoceinia",
        "commune_name": "الحسينية",
        "daira_name_ascii": "boumedfaa",
        "daira_name": "بومدفع",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1430,
        "commune_name_ascii": "djelida",
        "commune_name": "جليدة",
        "daira_name_ascii": "djelida",
        "daira_name": "جليدة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1421,
        "commune_name_ascii": "arib",
        "commune_name": "عريب",
        "daira_name_ascii": "el amra",
        "daira_name": "العامرة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1431,
        "commune_name_ascii": "djemaa ouled cheikh",
        "commune_name": "جمعة أولاد الشيخ",
        "daira_name_ascii": "djelida",
        "daira_name": "جليدة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1434,
        "commune_name_ascii": "el-amra",
        "commune_name": "العامرة",
        "daira_name_ascii": "el amra",
        "daira_name": "العامرة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1435,
        "commune_name_ascii": "el-attaf",
        "commune_name": "العطاف",
        "daira_name_ascii": "el attaf",
        "daira_name": "العطاف",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1449,
        "commune_name_ascii": "tiberkanine",
        "commune_name": "تبركانين",
        "daira_name_ascii": "el attaf",
        "daira_name": "العطاف",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1416,
        "commune_name_ascii": "ain-bouyahia",
        "commune_name": "عين بويحيى",
        "daira_name_ascii": "el abadia",
        "daira_name": "العبادية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1433,
        "commune_name_ascii": "el-abadia",
        "commune_name": "العبادية",
        "daira_name_ascii": "el abadia",
        "daira_name": "العبادية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1447,
        "commune_name_ascii": "tacheta zegagha",
        "commune_name": "تاشتة زقاغة",
        "daira_name_ascii": "el abadia",
        "daira_name": "العبادية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1422,
        "commune_name_ascii": "birbouche",
        "commune_name": "بربوش",
        "daira_name_ascii": "djendel",
        "daira_name": "جندل",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1432,
        "commune_name_ascii": "djendel",
        "commune_name": "جندل",
        "daira_name_ascii": "djendel",
        "daira_name": "جندل",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1425,
        "commune_name_ascii": "ben allal",
        "commune_name": "بن علال",
        "daira_name_ascii": "miliana",
        "daira_name": "مليانة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1443,
        "commune_name_ascii": "oued chorfa",
        "commune_name": "وادي الشرفاء",
        "daira_name_ascii": "djendel",
        "daira_name": "جندل",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1428,
        "commune_name_ascii": "boumedfaa",
        "commune_name": "بومدفع",
        "daira_name_ascii": "boumedfaa",
        "daira_name": "بومدفع",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1418,
        "commune_name_ascii": "ain-lechiakh",
        "commune_name": "عين الاشياخ",
        "daira_name_ascii": "ain lechiakh",
        "daira_name": "عين الاشياخ",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1419,
        "commune_name_ascii": "ain-soltane",
        "commune_name": "عين السلطان",
        "daira_name_ascii": "ain lechiakh",
        "daira_name": "عين الاشياخ",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1444,
        "commune_name_ascii": "oued djemaa",
        "commune_name": "واد الجمعة",
        "daira_name_ascii": "ain lechiakh",
        "daira_name": "عين الاشياخ",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1436,
        "commune_name_ascii": "el-maine",
        "commune_name": "الماين",
        "daira_name_ascii": "rouina",
        "daira_name": "الروينة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1445,
        "commune_name_ascii": "rouina",
        "commune_name": "الروينة",
        "daira_name_ascii": "rouina",
        "daira_name": "الروينة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1450,
        "commune_name_ascii": "zeddine",
        "commune_name": "زدين",
        "daira_name_ascii": "rouina",
        "daira_name": "الروينة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1426,
        "commune_name_ascii": "bir-ould-khelifa",
        "commune_name": "بئر ولد خليفة",
        "daira_name_ascii": "bordj el emir khaled",
        "daira_name": "برج الأمير خالد",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1427,
        "commune_name_ascii": "bordj-emir-khaled",
        "commune_name": "برج الأمير خالد",
        "daira_name_ascii": "bordj el emir khaled",
        "daira_name": "برج الأمير خالد",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1448,
        "commune_name_ascii": "tarik-ibn-ziad",
        "commune_name": "طارق بن زياد",
        "daira_name_ascii": "bordj el emir khaled",
        "daira_name": "برج الأمير خالد",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1423,
        "commune_name_ascii": "bathia",
        "commune_name": "بطحية",
        "daira_name_ascii": "bathia",
        "daira_name": "بطحية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1424,
        "commune_name_ascii": "belaas",
        "commune_name": "بلعاص",
        "daira_name_ascii": "bathia",
        "daira_name": "بطحية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1438,
        "commune_name_ascii": "hassania",
        "commune_name": "الحسانية",
        "daira_name_ascii": "bathia",
        "daira_name": "بطحية",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1417,
        "commune_name_ascii": "ain-defla",
        "commune_name": "عين الدفلى",
        "daira_name_ascii": "ain defla",
        "daira_name": "عين الدفلى",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1442,
        "commune_name_ascii": "miliana",
        "commune_name": "مليانة",
        "daira_name_ascii": "miliana",
        "daira_name": "مليانة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1441,
        "commune_name_ascii": "mekhatria",
        "commune_name": "المخاطرية",
        "daira_name_ascii": "el amra",
        "daira_name": "العامرة",
        "wilaya_code": "44",
        "wilaya_name_ascii": "ain defla",
        "wilaya_name": "عين الدفلة"
    },
    {
        "id": 1462,
        "commune_name_ascii": "tiout",
        "commune_name": "تيوت",
        "daira_name_ascii": "ain sefra",
        "daira_name": "عين الصفراء",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1459,
        "commune_name_ascii": "moghrar",
        "commune_name": "مغرار",
        "daira_name_ascii": "moghrar",
        "daira_name": "مغرار",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1453,
        "commune_name_ascii": "asla",
        "commune_name": "عسلة",
        "daira_name_ascii": "asla",
        "daira_name": "عسلة",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1456,
        "commune_name_ascii": "kasdir",
        "commune_name": "القصدير",
        "daira_name_ascii": "mekmen ben amar",
        "daira_name": "مكمن بن عمار",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1457,
        "commune_name_ascii": "makmen ben amar",
        "commune_name": "مكمن بن عمار",
        "daira_name_ascii": "mekmen ben amar",
        "daira_name": "مكمن بن عمار",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1452,
        "commune_name_ascii": "ain sefra",
        "commune_name": "عين الصفراء",
        "daira_name_ascii": "ain sefra",
        "daira_name": "عين الصفراء",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1458,
        "commune_name_ascii": "mecheria",
        "commune_name": "المشرية",
        "daira_name_ascii": "mecheria",
        "daira_name": "المشرية",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1455,
        "commune_name_ascii": "el biodh",
        "commune_name": "البيوض",
        "daira_name_ascii": "mecheria",
        "daira_name": "المشرية",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1451,
        "commune_name_ascii": "ain ben khelil",
        "commune_name": "عين بن خليل",
        "daira_name_ascii": "mecheria",
        "daira_name": "المشرية",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1460,
        "commune_name_ascii": "naama",
        "commune_name": "النعامة",
        "daira_name_ascii": "naama",
        "daira_name": "النعامة",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1454,
        "commune_name_ascii": "djenienne bourezg",
        "commune_name": "جنين بورزق",
        "daira_name_ascii": "moghrar",
        "daira_name": "مغرار",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1461,
        "commune_name_ascii": "sfissifa",
        "commune_name": "سفيسيفة",
        "daira_name_ascii": "sfissifa",
        "daira_name": "سفيسيفة",
        "wilaya_code": "45",
        "wilaya_name_ascii": "naama",
        "wilaya_name": "النعامة"
    },
    {
        "id": 1486,
        "commune_name_ascii": "sidi boumediene",
        "commune_name": "سيدي بومدين",
        "daira_name_ascii": "ain larbaa",
        "daira_name": "عين الأربعاء",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1489,
        "commune_name_ascii": "tamzoura",
        "commune_name": "تامزورة",
        "daira_name_ascii": "ain larbaa",
        "daira_name": "عين الأربعاء",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1471,
        "commune_name_ascii": "chaabat el ham",
        "commune_name": "شعبة اللحم",
        "daira_name_ascii": "el maleh",
        "daira_name": "المالح",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1474,
        "commune_name_ascii": "el maleh",
        "commune_name": "المالح",
        "daira_name_ascii": "el maleh",
        "daira_name": "المالح",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1483,
        "commune_name_ascii": "ouled kihal",
        "commune_name": "أولاد الكيحل",
        "daira_name_ascii": "el maleh",
        "daira_name": "المالح",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1472,
        "commune_name_ascii": "chentouf",
        "commune_name": "شنتوف",
        "daira_name_ascii": "hammam bou hadjar",
        "daira_name": "حمام بوحجر",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1490,
        "commune_name_ascii": "terga",
        "commune_name": "تارقة",
        "daira_name_ascii": "el maleh",
        "daira_name": "المالح",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1481,
        "commune_name_ascii": "oued sebbah",
        "commune_name": "وادي الصباح",
        "daira_name_ascii": "ain larbaa",
        "daira_name": "عين الأربعاء",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1473,
        "commune_name_ascii": "el amria",
        "commune_name": "العامرية",
        "daira_name_ascii": "el amria",
        "daira_name": "العامرية",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1479,
        "commune_name_ascii": "hassi el ghella",
        "commune_name": "حاسي الغلة",
        "daira_name_ascii": "el amria",
        "daira_name": "العامرية",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1482,
        "commune_name_ascii": "ouled boudjemaa",
        "commune_name": "أولاد بوجمعة",
        "daira_name_ascii": "el amria",
        "daira_name": "العامرية",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1463,
        "commune_name_ascii": "aghlal",
        "commune_name": "أغلال",
        "daira_name_ascii": "ain kihel",
        "daira_name": "عين الكيحل",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1465,
        "commune_name_ascii": "ain kihal",
        "commune_name": "عين الكيحل",
        "daira_name_ascii": "ain kihel",
        "daira_name": "عين الكيحل",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1467,
        "commune_name_ascii": "ain tolba",
        "commune_name": "عين الطلبة",
        "daira_name_ascii": "ain kihel",
        "daira_name": "عين الكيحل",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1468,
        "commune_name_ascii": "aoubellil",
        "commune_name": "عقب الليل",
        "daira_name_ascii": "ain kihel",
        "daira_name": "عين الكيحل",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1469,
        "commune_name_ascii": "beni saf",
        "commune_name": "بني صاف",
        "daira_name_ascii": "beni saf",
        "daira_name": "بني صاف",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1478,
        "commune_name_ascii": "hassasna",
        "commune_name": "الحساسنة",
        "daira_name_ascii": "hammam bou hadjar",
        "daira_name": "حمام بوحجر",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1476,
        "commune_name_ascii": "emir abdelkader",
        "commune_name": "الأمير عبد القادر",
        "daira_name_ascii": "beni saf",
        "daira_name": "بني صاف",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1488,
        "commune_name_ascii": "sidi safi",
        "commune_name": "سيدي صافي",
        "daira_name_ascii": "beni saf",
        "daira_name": "بني صاف",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1484,
        "commune_name_ascii": "oulhaca el gheraba",
        "commune_name": "ولهاصة الغرابة",
        "daira_name_ascii": "oulhassa gheraba",
        "daira_name": "ولهاصة الغرابة",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1487,
        "commune_name_ascii": "sidi ouriache",
        "commune_name": "سيدي ورياش",
        "daira_name_ascii": "oulhassa gheraba",
        "daira_name": "ولهاصة الغرابة",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1464,
        "commune_name_ascii": "ain el arbaa",
        "commune_name": "عين الأربعاء",
        "daira_name_ascii": "ain larbaa",
        "daira_name": "عين الأربعاء",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1475,
        "commune_name_ascii": "el messaid",
        "commune_name": "المساعيد",
        "daira_name_ascii": "el amria",
        "daira_name": "العامرية",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1480,
        "commune_name_ascii": "oued berkeche",
        "commune_name": "وادي برقش",
        "daira_name_ascii": "hammam bou hadjar",
        "daira_name": "حمام بوحجر",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1485,
        "commune_name_ascii": "sidi ben adda",
        "commune_name": "سيدي بن عدة",
        "daira_name_ascii": "ain temouchent",
        "daira_name": "عين تموشنت",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1466,
        "commune_name_ascii": "ain temouchent",
        "commune_name": "عين تموشنت",
        "daira_name_ascii": "ain temouchent",
        "daira_name": "عين تموشنت",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1470,
        "commune_name_ascii": "bouzedjar",
        "commune_name": "بوزجار",
        "daira_name_ascii": "el amria",
        "daira_name": "العامرية",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1477,
        "commune_name_ascii": "hammam bou hadjar",
        "commune_name": "حمام بوحجر",
        "daira_name_ascii": "hammam bou hadjar",
        "daira_name": "حمام بوحجر",
        "wilaya_code": "46",
        "wilaya_name_ascii": "ain temouchent",
        "wilaya_name": "عين تيموشنت"
    },
    {
        "id": 1493,
        "commune_name_ascii": "dhayet bendhahoua",
        "commune_name": "ضاية بن ضحوة",
        "daira_name_ascii": "dhayet ben dhahoua",
        "daira_name": "ضاية بن ضحوة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1500,
        "commune_name_ascii": "mansoura",
        "commune_name": "المنصورة",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1494,
        "commune_name_ascii": "el atteuf",
        "commune_name": "العطف",
        "daira_name_ascii": "bounoura",
        "daira_name": "بونورة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1492,
        "commune_name_ascii": "bounoura",
        "commune_name": "بونورة",
        "daira_name_ascii": "bounoura",
        "daira_name": "بونورة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1503,
        "commune_name_ascii": "zelfana",
        "commune_name": "زلفانة",
        "daira_name_ascii": "zelfana",
        "daira_name": "زلفانة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1497,
        "commune_name_ascii": "el guerrara",
        "commune_name": "القرارة",
        "daira_name_ascii": "el guerrara",
        "daira_name": "القرارة",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1502,
        "commune_name_ascii": "sebseb",
        "commune_name": "سبسب",
        "daira_name_ascii": "metlili",
        "daira_name": "متليلي",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1501,
        "commune_name_ascii": "metlili",
        "commune_name": "متليلي",
        "daira_name_ascii": "metlili",
        "daira_name": "متليلي",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1491,
        "commune_name_ascii": "berriane",
        "commune_name": "بريان",
        "daira_name_ascii": "berriane",
        "daira_name": "بريان",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1496,
        "commune_name_ascii": "ghardaia",
        "commune_name": "غرداية",
        "daira_name_ascii": "ghardaia",
        "daira_name": "غرداية",
        "wilaya_code": "47",
        "wilaya_name_ascii": "ghardaia",
        "wilaya_name": "غرداية"
    },
    {
        "id": 1516,
        "commune_name_ascii": "el-guettar",
        "commune_name": "القطار",
        "daira_name_ascii": "mazouna",
        "daira_name": "مازونة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1530,
        "commune_name_ascii": "ouled aiche",
        "commune_name": "أولاد يعيش",
        "daira_name_ascii": "ammi moussa",
        "daira_name": "عمي موسى",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1509,
        "commune_name_ascii": "beni dergoun",
        "commune_name": "بني درقن",
        "daira_name_ascii": "zemmoura",
        "daira_name": "زمورة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1511,
        "commune_name_ascii": "dar ben abdelah",
        "commune_name": "دار بن عبد الله",
        "daira_name_ascii": "zemmoura",
        "daira_name": "زمورة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1541,
        "commune_name_ascii": "zemmoura",
        "commune_name": "زمورة",
        "daira_name_ascii": "zemmoura",
        "daira_name": "زمورة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1512,
        "commune_name_ascii": "djidiouia",
        "commune_name": "جديوية",
        "daira_name_ascii": "djidiouia",
        "daira_name": "جديوية",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1519,
        "commune_name_ascii": "hamri",
        "commune_name": "حمري",
        "daira_name_ascii": "djidiouia",
        "daira_name": "جديوية",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1507,
        "commune_name_ascii": "belaassel bouzagza",
        "commune_name": "بلعسل بوزقزة",
        "daira_name_ascii": "el matmar",
        "daira_name": "المطمر",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1517,
        "commune_name_ascii": "el-matmar",
        "commune_name": "المطمر",
        "daira_name_ascii": "el matmar",
        "daira_name": "المطمر",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1534,
        "commune_name_ascii": "sidi khettab",
        "commune_name": "سيديخطاب",
        "daira_name_ascii": "el matmar",
        "daira_name": "المطمر",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1537,
        "commune_name_ascii": "sidi m'hamed benaouda",
        "commune_name": "سيدي امحمد بن عودة",
        "daira_name_ascii": "el matmar",
        "daira_name": "المطمر",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1505,
        "commune_name_ascii": "ain-tarek",
        "commune_name": "عين طارق",
        "daira_name_ascii": "ain tarek",
        "daira_name": "عين طارق",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1518,
        "commune_name_ascii": "had echkalla",
        "commune_name": "حد الشكالة",
        "daira_name_ascii": "ain tarek",
        "daira_name": "عين طارق",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1515,
        "commune_name_ascii": "el ouldja",
        "commune_name": "الولجة",
        "daira_name_ascii": "ammi moussa",
        "daira_name": "عمي موسى",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1522,
        "commune_name_ascii": "mazouna",
        "commune_name": "مازونة",
        "daira_name_ascii": "mazouna",
        "daira_name": "مازونة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1504,
        "commune_name_ascii": "ain rahma",
        "commune_name": "عين الرحمة",
        "daira_name_ascii": "yellel",
        "daira_name": "يلل",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1520,
        "commune_name_ascii": "kalaa",
        "commune_name": "القلعة",
        "daira_name_ascii": "yellel",
        "daira_name": "يلل",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1538,
        "commune_name_ascii": "sidi saada",
        "commune_name": "سيدي سعادة",
        "daira_name_ascii": "yellel",
        "daira_name": "يلل",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1540,
        "commune_name_ascii": "yellel",
        "commune_name": "يلل",
        "daira_name_ascii": "yellel",
        "daira_name": "يلل",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1539,
        "commune_name_ascii": "souk el had",
        "commune_name": "سوق الحد",
        "daira_name_ascii": "ramka",
        "daira_name": "الرمكة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1524,
        "commune_name_ascii": "mendes",
        "commune_name": "منداس",
        "daira_name_ascii": "mendes",
        "daira_name": "منداس",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1528,
        "commune_name_ascii": "oued essalem",
        "commune_name": "وادي السلام",
        "daira_name_ascii": "mendes",
        "daira_name": "منداس",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1535,
        "commune_name_ascii": "sidi lazreg",
        "commune_name": "سيدي لزرق",
        "daira_name_ascii": "mendes",
        "daira_name": "منداس",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1506,
        "commune_name_ascii": "ammi moussa",
        "commune_name": "عمي موسى",
        "daira_name_ascii": "ammi moussa",
        "daira_name": "عمي موسى",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1526,
        "commune_name_ascii": "ouarizane",
        "commune_name": "واريزان",
        "daira_name_ascii": "oued rhiou",
        "daira_name": "وادي رهيو",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1525,
        "commune_name_ascii": "merdja sidi abed",
        "commune_name": "مرجة سيدي عابد",
        "daira_name_ascii": "oued rhiou",
        "daira_name": "وادي رهيو",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1531,
        "commune_name_ascii": "ouled sidi mihoub",
        "commune_name": "أولاد سيدي الميهوب",
        "daira_name_ascii": "djidiouia",
        "daira_name": "جديوية",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1508,
        "commune_name_ascii": "bendaoud",
        "commune_name": "بن داود",
        "daira_name_ascii": "relizane",
        "daira_name": "غليزان",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1529,
        "commune_name_ascii": "oued-rhiou",
        "commune_name": "وادي رهيو",
        "daira_name_ascii": "oued rhiou",
        "daira_name": "وادي رهيو",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1513,
        "commune_name_ascii": "el hassi",
        "commune_name": "الحاسي",
        "daira_name_ascii": "ammi moussa",
        "daira_name": "عمي موسى",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1536,
        "commune_name_ascii": "sidi m'hamed benali",
        "commune_name": "سيدي أمحمد بن علي",
        "daira_name_ascii": "sidi m'hamed ben ali",
        "daira_name": "سيدي أمحمد بن علي",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1523,
        "commune_name_ascii": "mediouna",
        "commune_name": "مديونة",
        "daira_name_ascii": "sidi m'hamed ben ali",
        "daira_name": "سيدي أمحمد بن علي",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1510,
        "commune_name_ascii": "beni zentis",
        "commune_name": "بني زنطيس",
        "daira_name_ascii": "sidi m'hamed ben ali",
        "daira_name": "سيدي أمحمد بن علي",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1527,
        "commune_name_ascii": "oued el djemaa",
        "commune_name": "وادي الجمعة",
        "daira_name_ascii": "el h'madna",
        "daira_name": "الحمادنة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1521,
        "commune_name_ascii": "lahlef",
        "commune_name": "لحلاف",
        "daira_name_ascii": "oued rhiou",
        "daira_name": "وادي رهيو",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1533,
        "commune_name_ascii": "relizane",
        "commune_name": "غليزان",
        "daira_name_ascii": "relizane",
        "daira_name": "غليزان",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1514,
        "commune_name_ascii": "el h'madna",
        "commune_name": "الحمادنة",
        "daira_name_ascii": "el h'madna",
        "daira_name": "الحمادنة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 1532,
        "commune_name_ascii": "ramka",
        "commune_name": "الرمكة",
        "daira_name_ascii": "ramka",
        "daira_name": "الرمكة",
        "wilaya_code": "48",
        "wilaya_name_ascii": "relizane",
        "wilaya_name": "غليزان"
    },
    {
        "id": 25,
        "commune_name_ascii": "tinerkouk",
        "commune_name": "تنركوك",
        "daira_name_ascii": "tinerkouk",
        "daira_name": "تنركوك",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 24,
        "commune_name_ascii": "timimoun",
        "commune_name": "تيميمون",
        "daira_name_ascii": "timimoun",
        "daira_name": "تيميمون",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 15,
        "commune_name_ascii": "ouled said",
        "commune_name": "أولاد السعيد",
        "daira_name_ascii": "timimoun",
        "daira_name": "تيميمون",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 12,
        "commune_name_ascii": "metarfa",
        "commune_name": "المطارفة",
        "daira_name_ascii": "aougrout",
        "daira_name": "أوقروت",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 19,
        "commune_name_ascii": "talmine",
        "commune_name": "طالمين",
        "daira_name_ascii": "charouine",
        "daira_name": "شروين",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 14,
        "commune_name_ascii": "ouled aissa",
        "commune_name": "أولاد عيسى",
        "daira_name_ascii": "charouine",
        "daira_name": "شروين",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 7,
        "commune_name_ascii": "charouine",
        "commune_name": "شروين",
        "daira_name_ascii": "charouine",
        "daira_name": "شروين",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 3,
        "commune_name_ascii": "aougrout",
        "commune_name": "أوقروت",
        "daira_name_ascii": "aougrout",
        "daira_name": "أوقروت",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 8,
        "commune_name_ascii": "deldoul",
        "commune_name": "دلدول",
        "daira_name_ascii": "aougrout",
        "daira_name": "أوقروت",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 11,
        "commune_name_ascii": "ksar kaddour",
        "commune_name": "قصر قدور",
        "daira_name_ascii": "tinerkouk",
        "daira_name": "تنركوك",
        "wilaya_code": "49",
        "wilaya_name_ascii": "timimoun",
        "wilaya_name": "تيميمون"
    },
    {
        "id": 23,
        "commune_name_ascii": "timiaouine",
        "commune_name": "تيمياوين",
        "daira_name_ascii": "bordj badji mokhtar",
        "daira_name": "برج باجي مختار",
        "wilaya_code": "50",
        "wilaya_name_ascii": "bordj badji mokhtar",
        "wilaya_name": "برج باجي مختار"
    },
    {
        "id": 5,
        "commune_name_ascii": "bordj badji mokhtar",
        "commune_name": "برج باجي مختار",
        "daira_name_ascii": "bordj badji mokhtar",
        "daira_name": "برج باجي مختار",
        "wilaya_code": "50",
        "wilaya_name_ascii": "bordj badji mokhtar",
        "wilaya_name": "برج باجي مختار"
    },
    {
        "id": 258,
        "commune_name_ascii": "ras el miad",
        "commune_name": "رأس الميعاد",
        "daira_name_ascii": "sidi khaled",
        "daira_name": "سيديخالد",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 232,
        "commune_name_ascii": "besbes",
        "commune_name": "بسباس",
        "daira_name_ascii": "sidi khaled",
        "daira_name": "سيديخالد",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 259,
        "commune_name_ascii": "sidi khaled",
        "commune_name": "سيديخالد",
        "daira_name_ascii": "sidi khaled",
        "daira_name": "سيديخالد",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 240,
        "commune_name_ascii": "doucen",
        "commune_name": "الدوسن",
        "daira_name_ascii": "ouled djellal",
        "daira_name": "أولاد جلال",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 237,
        "commune_name_ascii": "chaiba",
        "commune_name": "الشعيبة",
        "daira_name_ascii": "ouled djellal",
        "daira_name": "أولاد جلال",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 255,
        "commune_name_ascii": "ouled djellal",
        "commune_name": "أولاد جلال",
        "daira_name_ascii": "ouled djellal",
        "daira_name": "أولاد جلال",
        "wilaya_code": "51",
        "wilaya_name_ascii": "ouled djellal",
        "wilaya_name": "أولاد جلال"
    },
    {
        "id": 265,
        "commune_name_ascii": "beni-abbes",
        "commune_name": "بني عباس",
        "daira_name_ascii": "beni abbes",
        "daira_name": "بني عباس",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 282,
        "commune_name_ascii": "tamtert",
        "commune_name": "تامترت",
        "daira_name_ascii": "beni abbes",
        "daira_name": "بني عباس",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 271,
        "commune_name_ascii": "igli",
        "commune_name": "إقلي",
        "daira_name_ascii": "igli",
        "daira_name": "إقلي",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 269,
        "commune_name_ascii": "el ouata",
        "commune_name": "الواتة",
        "daira_name_ascii": "el ouata",
        "daira_name": "الواتة",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 279,
        "commune_name_ascii": "ouled-khodeir",
        "commune_name": "أولاد خضير",
        "daira_name_ascii": "ouled khodeir",
        "daira_name": "أولاد خضير",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 273,
        "commune_name_ascii": "kerzaz",
        "commune_name": "كرزاز",
        "daira_name_ascii": "kerzaz",
        "daira_name": "كرزاز",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 283,
        "commune_name_ascii": "timoudi",
        "commune_name": "تيمودي",
        "daira_name_ascii": "kerzaz",
        "daira_name": "كرزاز",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 274,
        "commune_name_ascii": "ksabi",
        "commune_name": "القصابي",
        "daira_name_ascii": "ouled khodeir",
        "daira_name": "أولاد خضير",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 266,
        "commune_name_ascii": "beni-ikhlef",
        "commune_name": "بن يخلف",
        "daira_name_ascii": "kerzaz",
        "daira_name": "كرزاز",
        "wilaya_code": "52",
        "wilaya_name_ascii": "beni abbes",
        "wilaya_name": "بني عباس"
    },
    {
        "id": 360,
        "commune_name_ascii": "inghar",
        "commune_name": "إينغر",
        "daira_name_ascii": "in ghar",
        "daira_name": "إينغر",
        "wilaya_code": "53",
        "wilaya_name_ascii": "in salah",
        "wilaya_name": "عين صالح"
    },
    {
        "id": 357,
        "commune_name_ascii": "ain salah",
        "commune_name": "عين صالح",
        "daira_name_ascii": "in salah",
        "daira_name": "عين صالح",
        "wilaya_code": "53",
        "wilaya_name_ascii": "in salah",
        "wilaya_name": "عين صالح"
    },
    {
        "id": 358,
        "commune_name_ascii": "foggaret ezzoua",
        "commune_name": "فقارة الزوى",
        "daira_name_ascii": "in salah",
        "daira_name": "عين صالح",
        "wilaya_code": "53",
        "wilaya_name_ascii": "in salah",
        "wilaya_name": "عين صالح"
    },
    {
        "id": 363,
        "commune_name_ascii": "tin zouatine",
        "commune_name": "تين زواتين",
        "daira_name_ascii": "tin zouatine",
        "daira_name": "تين زواتين",
        "wilaya_code": "54",
        "wilaya_name_ascii": "in guezzam",
        "wilaya_name": "عين قزام"
    },
    {
        "id": 356,
        "commune_name_ascii": "ain guezzam",
        "commune_name": "عين قزام",
        "daira_name_ascii": "in guezzam",
        "daira_name": "عين قزام",
        "wilaya_code": "54",
        "wilaya_name_ascii": "in guezzam",
        "wilaya_name": "عين قزام"
    },
    {
        "id": 1107,
        "commune_name_ascii": "temacine",
        "commune_name": "تماسين",
        "daira_name_ascii": "temacine",
        "daira_name": "تماسين",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1104,
        "commune_name_ascii": "sidi slimane",
        "commune_name": "سيدي سليمان",
        "daira_name_ascii": "megarine",
        "daira_name": "المقارين",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1097,
        "commune_name_ascii": "megarine",
        "commune_name": "المقارين",
        "daira_name_ascii": "megarine",
        "daira_name": "المقارين",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1099,
        "commune_name_ascii": "nezla",
        "commune_name": "النزلة",
        "daira_name_ascii": "touggourt",
        "daira_name": "تقرت",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1091,
        "commune_name_ascii": "blidet amor",
        "commune_name": "بلدة اعمر",
        "daira_name_ascii": "temacine",
        "daira_name": "تماسين",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1106,
        "commune_name_ascii": "tebesbest",
        "commune_name": "تبسبست",
        "daira_name_ascii": "touggourt",
        "daira_name": "تقرت",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1108,
        "commune_name_ascii": "touggourt",
        "commune_name": "تقرت",
        "daira_name_ascii": "touggourt",
        "daira_name": "تقرت",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1105,
        "commune_name_ascii": "taibet",
        "commune_name": "الطيبات",
        "daira_name_ascii": "taibet",
        "daira_name": "الطيبات",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1092,
        "commune_name_ascii": "el alia",
        "commune_name": "العالية",
        "daira_name_ascii": "el-hadjira",
        "daira_name": "الحجيرة",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1094,
        "commune_name_ascii": "el-hadjira",
        "commune_name": "الحجيرة",
        "daira_name_ascii": "el-hadjira",
        "daira_name": "الحجيرة",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1090,
        "commune_name_ascii": "benaceur",
        "commune_name": "بن ناصر",
        "daira_name_ascii": "taibet",
        "daira_name": "الطيبات",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1098,
        "commune_name_ascii": "m'naguer",
        "commune_name": "المنقر",
        "daira_name_ascii": "taibet",
        "daira_name": "الطيبات",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1109,
        "commune_name_ascii": "zaouia el abidia",
        "commune_name": "الزاوية العابدية",
        "daira_name_ascii": "touggourt",
        "daira_name": "تقرت",
        "wilaya_code": "55",
        "wilaya_name_ascii": "touggourt",
        "wilaya_name": "تقرت"
    },
    {
        "id": 1161,
        "commune_name_ascii": "djanet",
        "commune_name": "جانت",
        "daira_name_ascii": "djanet",
        "daira_name": "جانت",
        "wilaya_code": "56",
        "wilaya_name_ascii": "djanet",
        "wilaya_name": "جانت"
    },
    {
        "id": 1158,
        "commune_name_ascii": "bordj el haouass",
        "commune_name": "برج الحواس",
        "daira_name_ascii": "djanet",
        "daira_name": "جانت",
        "wilaya_code": "56",
        "wilaya_name_ascii": "djanet",
        "wilaya_name": "جانت"
    },
    {
        "id": 1296,
        "commune_name_ascii": "oum touyour",
        "commune_name": "أم الطيور",
        "daira_name_ascii": "el meghaier",
        "daira_name": "المغير",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1300,
        "commune_name_ascii": "sidi amrane",
        "commune_name": "سيدي عمران",
        "daira_name_ascii": "djamaa",
        "daira_name": "جامعة",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1293,
        "commune_name_ascii": "m'rara",
        "commune_name": "المرارة",
        "daira_name_ascii": "djamaa",
        "daira_name": "جامعة",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1281,
        "commune_name_ascii": "djamaa",
        "commune_name": "جامعة",
        "daira_name_ascii": "djamaa",
        "daira_name": "جامعة",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1306,
        "commune_name_ascii": "tenedla",
        "commune_name": "تندلة",
        "daira_name_ascii": "djamaa",
        "daira_name": "جامعة",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1284,
        "commune_name_ascii": "el-m'ghaier",
        "commune_name": "المغير",
        "daira_name_ascii": "el meghaier",
        "daira_name": "المغير",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1303,
        "commune_name_ascii": "still",
        "commune_name": "سطيل",
        "daira_name_ascii": "el meghaier",
        "daira_name": "المغير",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1302,
        "commune_name_ascii": "sidi khelil",
        "commune_name": "سيدي خليل",
        "daira_name_ascii": "el meghaier",
        "daira_name": "المغير",
        "wilaya_code": "57",
        "wilaya_name_ascii": "el meghaier",
        "wilaya_name": "المغير"
    },
    {
        "id": 1495,
        "commune_name_ascii": "el meniaa",
        "commune_name": "المنيعة",
        "daira_name_ascii": "el menia",
        "daira_name": "المنيعة",
        "wilaya_code": "58",
        "wilaya_name_ascii": "el menia",
        "wilaya_name": "المنيعة"
    },
    {
        "id": 1499,
        "commune_name_ascii": "hassi gara",
        "commune_name": "حاسي القارة",
        "daira_name_ascii": "el menia",
        "daira_name": "المنيعة",
        "wilaya_code": "58",
        "wilaya_name_ascii": "el menia",
        "wilaya_name": "المنيعة"
    },
    {
        "id": 1498,
        "commune_name_ascii": "hassi fehal",
        "commune_name": "حاسي الفحل",
        "daira_name_ascii": "mansourah",
        "daira_name": "المنصورة",
        "wilaya_code": "58",
        "wilaya_name_ascii": "el menia",
        "wilaya_name": "المنيعة"
    }
];

interface Wilaya {
    ar: string;
    en: string;
    code: string;
    dairats?: Daira[];
    baladiyats?: Baladiya[];
}

interface Daira {
    ar: string;
    en: string;
    baladiyats?: Baladiya[];
}

interface Baladiya {
    ar: string;
    en: string;
}

var _cachedWilayat: Wilaya[] | null = null;


function getWilayat() {
    _cachedWilayat = _cachedWilayat || cities.map((city) => {
        return {
            ar: city.wilaya_name,
            en: city.wilaya_name_ascii,
            code: city.wilaya_code,
            dairats: cities.filter((c) => c.wilaya_code === city.wilaya_code).map((c) => {
                return {
                    ar: c.daira_name,
                    en: c.daira_name_ascii,
                    baladiyats: cities.filter((b) => b.daira_name === c.daira_name).map((b) => {
                        return {
                            ar: b.commune_name,
                            en: b.commune_name_ascii,
                        };
                    }),
                };
            }),
            baladiyats: cities.filter((b) => b.wilaya_code === city.wilaya_code).map((b) => {
                return {
                    ar: b.commune_name,
                    en: b.commune_name_ascii,
                };
            }),
        };
    }).filter((city, index, self) =>
        index === self.findIndex((t) => (
            t.ar === city.ar && t.en === city.en
        ))
    );
    return _cachedWilayat;
}


var _cachedDairats: Daira[] | null = null;
function getDairats() {
    if (_cachedDairats) return _cachedDairats;
    _cachedDairats = [];
    getWilayat().forEach((wilaya) => {
        _cachedDairats!.push(...wilaya.dairats || []);
    });
    return _cachedDairats;
}

var _cachedBaladiyats: Baladiya[] | null = null;
function getBaladiyats() {
    if (_cachedBaladiyats) return _cachedBaladiyats;
    _cachedBaladiyats = [];
    getDairats().forEach((daira) => {
        _cachedBaladiyats!.push(...daira.baladiyats || []);
    });
    return _cachedBaladiyats;
}

function getBaladiyaByWilayaEnglishName(wilayaName: string) {
    var wilaya = getWilayat().find((wilaya) => wilaya.en === wilayaName);
    if (!wilaya) return [];
    var baladiyats: Baladiya[] = [];
    wilaya.dairats!.forEach((daira) => {
        baladiyats.push(...daira.baladiyats || []);
    });
    return baladiyats;
}


export { getWilayat, getDairats, getBaladiyats, getBaladiyaByWilayaEnglishName };