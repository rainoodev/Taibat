const initialDb = {
  "users": [
    {
      "id": "admin-id",
      "username": "admin",
      "password": "$2b$10$RllMTGibBjvqruquIG3ETufzcvecRUEFTzGgIvyc2zbQhlXKRndOu",
      "role": "admin",
      "name": "مدير النظام",
      "phone": "01000000000",
      "address": "المكتب الرئيسي - شارع الجمهورية",
      "createdAt": "2026-07-14T12:01:02.599Z"
    },
    {
      "id": "u-v7awykhaf",
      "username": "raino",
      "password": "$2b$10$gZHV4A7ixZXG6WlZnEY/cuFvPzjuFGP4xedzfhHx66EMpc9.zwtWu",
      "role": "customer",
      "name": "raino",
      "phone": "324234234324",
      "address": "4564565645",
      "createdAt": "2026-07-14T12:40:25.117Z",
      "updatedAt": "2026-07-14T12:41:38.845Z"
    }
  ],
  "products": [
    {
      "id": "p1",
      "name": "صندوق شوكولاتة",
      "category": "شوكولاتة",
      "price": 180,
      "description": "شوكولاتة بسيطة ومناسبة للبيت أو كهدية صغيرة.",
      "ingredients": "شوكولاتة، كراميل، فانيليا، مكسرات.",
      "image": "https://images.unsplash.com/photo-1548907040-4d42b3228b3a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p2",
      "name": "ماكرون بسيط",
      "category": "ماكرون فرنسي",
      "price": 220,
      "description": "ماكرون لطيف ومناسب للضيافة أو أي وقت.",
      "ingredients": "دقيق اللوز، بياض البيض، سكر، شوكولاتة، فانيليا.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p3",
      "name": "تارت بالفستق",
      "category": "تارت",
      "price": 45,
      "description": "تارت سهل ومناسب للغداء أو القهوة.",
      "ingredients": "زبدة، فستق، كريمة، ليمون.",
      "image": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p4",
      "name": "ترافل بالشوكولاتة",
      "category": "شوكولاتة",
      "price": 140,
      "description": "ترافل بالشوكولاتة والملح بشكل بسيط ومقبول.",
      "ingredients": "شوكولاتة، كريمة، زبدة، ملح.",
      "image": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p5",
      "name": "شوكولاتة بالكراميل",
      "category": "شوكولاتة",
      "price": 95,
      "description": "شوكولاتة بالكراميل ومناسبة للبيت أو هدية صغيرة.",
      "ingredients": "شوكولاتة، كراميل، بيكان، كريمة.",
      "image": "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p6",
      "name": "ماكرون بالقهوة",
      "category": "ماكرون فرنسي",
      "price": 110,
      "description": "ماكرون بالشوكولاتة والقهوة بشكل بسيط ومشبع.",
      "ingredients": "دقيق اللوز، كاكاو، شوكولاتة، قهوة.",
      "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p7",
      "name": "تارت بالتوت والليمون",
      "category": "تارت",
      "price": 42,
      "description": "تارت مع طعم ليمون وتوت مناسب للغداء أو القهوة.",
      "ingredients": "ليمون، توت، بيض، زبدة.",
      "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p8",
      "name": "بقلاوة بالمسك",
      "category": "حلويات شرقية",
      "price": 160,
      "description": "بقلاوة بنكهة لطيفة ومناسبة للعائلة أو الضيوف.",
      "ingredients": "فيلو، سمن، فستق، ماء ورد.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T11:53:03.561Z"
    },
    {
      "id": "p9",
      "name": "كيكة الشوكولاتة المخملية",
      "category": "كيك",
      "price": 250,
      "description": "كيكة شوكولاتة غنية بالكريمة الناعمة ومزينة برقائق الشوكولاتة البلجيكية الفاخرة.",
      "ingredients": "كاكاو خام، كريمة مخفوقة، دقيق، بيض، فانيليا طبيعية.",
      "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p10",
      "name": "كعكة الفراولة الطازجة",
      "category": "كيك",
      "price": 210,
      "description": "كيك إسفنجي خفيف مغطى بطبقات الكريمة الطازجة وقطع الفراولة الحمراء الشهية.",
      "ingredients": "دقيق، سكر، فراولة طازجة، كريمة طازجة، بيض.",
      "image": "https://images.unsplash.com/photo-1464349110291-1f5b13f68c1a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p11",
      "name": "تارت الكراميل والبيكان",
      "category": "تارت",
      "price": 55,
      "description": "قاعدة مقرمشة محشوة بالكراميل المملح الغني وحبات البيكان المحمصة اللذيذة.",
      "ingredients": "زبدة، بيكان، كراميل، ملح بحري، دقيق.",
      "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p12",
      "name": "تارت الفواكه الاستوائية",
      "category": "تارت",
      "price": 48,
      "description": "تارت كلاسيكي مخبوز مع الكاسترد الكريمي الناعم ومغطى بقطع الكيوي والمانجو والكرز.",
      "ingredients": "كاسترد، كيوي، مانجو، كرز، عجينة التارت الهشة.",
      "image": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p13",
      "name": "تشيز كيك اللوتس",
      "category": "كيك",
      "price": 230,
      "description": "تشيز كيك مخبوز على الطريقة النيويوركية الغنية مع زبدة وبسكويت اللوتس المقرمش.",
      "ingredients": "جبنة كريمية، بسكويت لوتس، زبدة لوتس، كريمة سائلة.",
      "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p14",
      "name": "بسبوسة فاخرة بالقشطة",
      "category": "حلويات شرقية",
      "price": 120,
      "description": "بسبوسة شرقية تقليدية غنية بالسمن البلدي واللوز، محشوة بطبقة غنية من القشطة الطازجة.",
      "ingredients": "سميد، سمن بلدي، قشطة، شربات، لوز محمص.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p15",
      "name": "كيك ريد فيلفيت الملكي",
      "category": "كيك",
      "price": 240,
      "description": "كيك ريد فيلفيت فاخر بطبقات كريمة الجبن الغنية والناعمة.",
      "ingredients": "دقيق، بنجر أحمر طبيعي، جبنة كريمية، زبدة، سكر.",
      "image": "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p16",
      "name": "كيكة العسل الروسية",
      "category": "كيك",
      "price": 260,
      "description": "كيكة العسل المتعددة الطبقات بنكهة الكراميل والعسل الطبيعي المميز.",
      "ingredients": "عسل نحل طبيعي، زبدة، بيض، قشطة، دقيق.",
      "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p17",
      "name": "كيك الجزر بالجوز",
      "category": "كيك",
      "price": 190,
      "description": "كيك الجزر الكلاسيكي مع قطع الجوز المقرمشة وبهارات القرفة العطرية وكريمة الجبن.",
      "ingredients": "جزر مبشور، جوز (عين جمل)، قرفة، جبن كريمي، دقيق.",
      "image": "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p18",
      "name": "سوفليه الشوكولاتة الذائبة",
      "category": "كيك",
      "price": 65,
      "description": "سوفليه ساخن مخبوز بعناية ومحشو بقلب شوكولاتة ذائبة غنية ولذيثة.",
      "ingredients": "شوكولاتة داكنة، بيض، زبدة، سكر، دقيق.",
      "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p19",
      "name": "كيك الفستق الوردي",
      "category": "كيك",
      "price": 270,
      "description": "كيك الفستق الفاخر المزين بكريمة ماء الورد وبتلات الورد الصالحة للأكل.",
      "ingredients": "فستق حلبي مطحون، ماء ورد، كريمة مخفوقة، دقيق، سكر.",
      "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p20",
      "name": "مولتن كيك الكراميل",
      "category": "كيك",
      "price": 70,
      "description": "كيك مخبوز محشو بصلصة الكراميل المملح الساخنة والذائبة.",
      "ingredients": "كراميل، زبدة، بيض، دقيق، ملح بحري.",
      "image": "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p21",
      "name": "تشيز كيك التوت الأزرق",
      "category": "كيك",
      "price": 220,
      "description": "تشيز كيك بارد غني ومغطى بصلصة التوت الأزرق الطبيعية واللذيذة.",
      "ingredients": "جبنة كريمية، بسكويت مقرمش، زبدة، توت أزرق، جيلاتين طبيعي.",
      "image": "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p22",
      "name": "كاب كيك الفانيليا الملون",
      "category": "كيك",
      "price": 25,
      "description": "كب كيك كلاسيكي هش بنكهة الفانيليا ومغطى بكريمة مخفوقة ملونة ولذيذة.",
      "ingredients": "دقيق، فانيليا طبيعية، زبدة، سكر، زينة سكرية ملونة.",
      "image": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p23",
      "name": "علبة برالين بلجيكي فاخر",
      "category": "شوكولاتة",
      "price": 350,
      "description": "مجموعة فاخرة من حبات الشوكولاتة البلجيكية المحشوة بالبرالين والكراميل والمكسرات.",
      "ingredients": "شوكولاتة بلجيكية، برالين بندق، زبدة كاكاو، لوز.",
      "image": "https://images.unsplash.com/photo-1548907040-4d42b3228b3a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p24",
      "name": "ألواح شوكولاتة داكنة بالبندق",
      "category": "شوكولاتة",
      "price": 80,
      "description": "شوكولاتة داكنة ٧٠٪ كاكاو غنية بحبات البندق المحمص والمقرمش.",
      "ingredients": "شوكولاتة داكنة، كاكاو ٧٠٪، بندق محمص كامل.",
      "image": "https://images.unsplash.com/photo-1548907040-4d42b3228b3a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p25",
      "name": "كرات الكمأة الفاخرة (ترافل)",
      "category": "شوكولاتة",
      "price": 180,
      "description": "كرات شوكولاتة ذائبة مغطاة بمسحوق الكاكاو الفاخر على الطريقة الفرنسية.",
      "ingredients": "كريمة ثقيلة، شوكولاتة خام، زبدة، مسحوق كاكاو بودرة.",
      "image": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p26",
      "name": "شوكولاتة بيضاء بالفستق",
      "category": "شوكولاتة",
      "price": 95,
      "description": "شوكولاتة بيضاء كريمية غنية بحبات الفستق الحلبي الأخضر الطازج.",
      "ingredients": "زبدة كاكاو، حليب مجفف، فستق حلبي، سكر، فانيليا.",
      "image": "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p27",
      "name": "شوكولاتة بالكرز والبرتقال",
      "category": "شوكولاتة",
      "price": 110,
      "description": "مزيج منعش من الشوكولاتة الداكنة مع قطع الكرز المجفف وقشر البرتقال المعسل.",
      "ingredients": "شوكولاتة داكنة، كرز مجفف، قشر برتقال، زبدة كاكاو.",
      "image": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p28",
      "name": "أصابع الشوكولاتة المقرمشة",
      "category": "شوكولاتة",
      "price": 85,
      "description": "أصابع الويفر المقرمشة المغطاة بالكامل بطبقة سميكة من شوكولاتة الحليب الفاخرة.",
      "ingredients": "دقيق، سكر، شوكولاتة الحليب، زبدة، نشا.",
      "image": "https://images.unsplash.com/photo-1548907040-4d42b3228b3a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p29",
      "name": "بونبون الشوكولاتة بالنعناع",
      "category": "شوكولاتة",
      "price": 120,
      "description": "قطع شوكولاتة صغيرة محشوة بكريمة النعناع المنعشة والباردة.",
      "ingredients": "شوكولاتة داكنة، زيت نعناع طبيعي، سكر بودرة، كريمة.",
      "image": "https://images.unsplash.com/photo-1548907040-4d42b3228b3a?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p30",
      "name": "تارت الفراولة بالكريمة",
      "category": "تارت",
      "price": 46,
      "description": "تارت مقرمش محشو بكريمة الباستيري الغنية ومزين بحبات الفراولة الحمراء الطازجة.",
      "ingredients": "فراولة طازجة، جيلاتين، دقيق، زبدة، باستيري كريم.",
      "image": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p31",
      "name": "تارت التفاح والقرفة الكلاسيكي",
      "category": "تارت",
      "price": 44,
      "description": "تارت التفاح الدافئ بنكهة القرفة والزنجبيل ومزين بشرائح التفاح الرائعة.",
      "ingredients": "تفاح، قرفة، زبدة، دقيق، سكر بني، عسل.",
      "image": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p32",
      "name": "تارت الشوكولاتة الداكنة المملحة",
      "category": "تارت",
      "price": 50,
      "description": "تارت غني بالكامل بجاناش الشوكولاتة الداكنة ولمسة خفيفة من ملح البحر البحري المميز.",
      "ingredients": "شوكولاتة داكنة، ملح بحري، زبدة، كريمة ثقيلة، دقيق.",
      "image": "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p33",
      "name": "تارت ليمون ميرانغ الفاخر",
      "category": "تارت",
      "price": 48,
      "description": "تارت منعش بحشوة كريمة الليمون الحامضة ومغطى بطبقة كثيفة من الميرانغ المحمص.",
      "ingredients": "ليمون طازج، ميرانغ بيض، سكر، زبدة، دقيق.",
      "image": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p34",
      "name": "تارت النوتيلا والموز",
      "category": "تارت",
      "price": 45,
      "description": "قاعدة تارت هشة محشوة بشوكولاتة نوتيلا اللذيثة وشرائح الموز الطازج.",
      "ingredients": "نوتيلا، موز طازج، دقيق، زبدة، قشطة.",
      "image": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p35",
      "name": "كنافة نابلسية بالجبن",
      "category": "حلويات شرقية",
      "price": 130,
      "description": "كنافة نابلسية دافئة ومقرمشة مع الجبن العكاوي الفاخر مغطاة بالشربات الساخن والفستق.",
      "ingredients": "كنافة، جبن عكاوي، سمن بلدي، شربات، فستق حلبي.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p36",
      "name": "مشكل حلويات شرقية فاخرة",
      "category": "حلويات شرقية",
      "price": 240,
      "description": "تشكيلة من بسبوسة، بقلاوة، كنافة، وأصابع زينب المحضرة بالسمن البلدي.",
      "ingredients": "سميد، سمن بلدي، فستق، مكسرات، شربات، كنافة.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p37",
      "name": "أصابع بقلاوة بالفستق",
      "category": "حلويات شرقية",
      "price": 150,
      "description": "رقائق الفيلو الهشة والذهبية الملفوفة بعناية ومحشوة بالفستق الحلبي الغني.",
      "ingredients": "رقائق فيلو، فستق حلبي مطحون، سمن بلدي، شربات.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p38",
      "name": "رموش الست الذهبية",
      "category": "حلويات شرقية",
      "price": 100,
      "description": "قطع رموش الست الشهية والناعمة تذوب بالفم ومسقية بالشربات الخفيف.",
      "ingredients": "دقيق، سميد، سمن، جوز هند، شربات.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p39",
      "name": "بلح الشام بالقشطة",
      "category": "حلويات شرقية",
      "price": 110,
      "description": "أصابع بلح الشام المقرمشة والمحشوة بالقشطة البلدية الطازجة والمزينة بالفستق.",
      "ingredients": "دقيق، بيض، نشا، قشطة بلدي، فستق حلبي، شربات.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p40",
      "name": "عش البلبل بالفستق",
      "category": "حلويات شرقية",
      "price": 160,
      "description": "كنافة عش البلبل المقرمشة والمحشوة بحبات الفستق الحلبي الكامل والشهي.",
      "ingredients": "كنافة شعر، فستق حلبي كامل، سمن بلدي، شربات غليظ.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p41",
      "name": "بسبوسة بالبندق والمكسرات",
      "category": "حلويات شرقية",
      "price": 115,
      "description": "بسبوسة شرقية غنية بالسمن ومغطاة بالبندق واللوز المحمص الذهبي.",
      "ingredients": "سميد، سمن بلدي، حليب، سكر، بندق، لوز.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p42",
      "name": "أصابع زينب المقرمشة",
      "category": "حلويات شرقية",
      "price": 75,
      "description": "أصابع زينب التقليدية المقلية بعناية حتى الاحمرار والمسقية بالشربات العطري.",
      "ingredients": "دقيق، سميد، خميرة، يانسون، شربات.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p43",
      "name": "ماكرون الفستق الفاخر",
      "category": "ماكرون فرنسي",
      "price": 110,
      "description": "حبات ماكرون فرنسي باللون الأخضر الزاهي محشو بكريمة غنية بنكهة الفستق الطبيعي.",
      "ingredients": "دقيق لوز، بياض بيض، سكر، زبدة فستق طبيعي.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p44",
      "name": "ماكرون اللافندر والليمون",
      "category": "ماكرون فرنسي",
      "price": 120,
      "description": "ماكرون ناعم ومميز بمزيج عطري من زهور اللافندر الطبيعي وكريمة الليمون المنعشة.",
      "ingredients": "دقيق لوز, لافندر مجفف، ليمون، بيض، زبدة.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p45",
      "name": "ماكرون التوت البري الأحمر",
      "category": "ماكرون فرنسي",
      "price": 115,
      "description": "ماكرون فرنسي أحمر جذاب ومحشو بصلصة التوت البري المركزة والحامضة.",
      "ingredients": "دقيق لوز، توت بري مجفف، بياض بيض، كريمة.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p46",
      "name": "ماكرون الشوكولاتة البلجيكية",
      "category": "ماكرون فرنسي",
      "price": 110,
      "description": "ماكرون غامق ولذيذ محشو بجاناش الشوكولاتة البلجيكية الداكنة ٦٥٪.",
      "ingredients": "دقيق لوز، كاكاو بودرة، بياض بيض، شوكولاتة بلجيكية.",
      "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p47",
      "name": "ماكرون الفانيليا والكراميل",
      "category": "ماكرون فرنسي",
      "price": 110,
      "description": "ماكرون فرنسي محشو بكريمة الفانيليا البوربون وخطوط الكراميل المملح.",
      "ingredients": "دقيق لوز، فانيليا بوربون، كراميل مملح، زبدة.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p48",
      "name": "ماكرون ماء الورد والهيل",
      "category": "ماكرون فرنسي",
      "price": 125,
      "description": "مزيج ساحر من النكهات الشرقية والفرنسية بماء الورد العطري والمسك والهيل.",
      "ingredients": "دقيق لوز، بياض بيض، ماء ورد، هيل مطحون، زبدة.",
      "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p49",
      "name": "تراميسو كلاسيكي إيطالي",
      "category": "كيك",
      "price": 85,
      "description": "حلوى التراميسو الإيطالية الشهيرة بطبقات البسكويت المغمس بالقهوة الإسبريسو وكريمة الماسكاربوني.",
      "ingredients": "جبن ماسكاربوني، قهوة إسبريسو، بسكويت ليدي فينجر، كاكاو.",
      "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p50",
      "name": "إكلير الشوكولاتة الطازج",
      "category": "كيك",
      "price": 40,
      "description": "حلوى الشو الفرنسية الخفيفة المحشوة بكريمة الكاسترد والمغطاة بالشوكولاتة اللامعة.",
      "ingredients": "بيض، زبدة، دقيق، حليب، كاسترد، شوكولاتة غامقة.",
      "image": "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p51",
      "name": "غريبة ناعمة باللوز",
      "category": "حلويات شرقية",
      "price": 90,
      "description": "حبات الغريبة الشرقية الناعمة جداً التي تذوب بالفم ومزينة بحبة لوز كاملة.",
      "ingredients": "دقيق، سمن بلدي، سكر بودرة، لوز مقشر.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p52",
      "name": "بسكويت الكوكيز بالرقائق",
      "category": "شوكولاتة",
      "price": 30,
      "description": "بسكويت كوكيز أمريكي كلاسيكي محضر بالزبدة الطازجة والعديد من رقائق الشوكولاتة الذائبة.",
      "ingredients": "دقيق، زبدة بني، رقائق شوكولاتة، سكر أسمر، بيض.",
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p53",
      "name": "كعك العيد بالفستق",
      "category": "حلويات شرقية",
      "price": 140,
      "description": "كعك العيد الفاخر والناعم المحشو بالعجمية اللذيذة والفستق الحلبي.",
      "ingredients": "دقيق، سمن بلدي، ريحة كعك، عجمية، فستق حلبي.",
      "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p54",
      "name": "موس الشوكولاتة الداكنة",
      "category": "شوكولاتة",
      "price": 70,
      "description": "موس الشوكولاتة الفرنسي الكثيف والمزين ببتلات الشوكولاتة والنعناع المنعش.",
      "ingredients": "شوكولاتة بلجيكية داكنة، بيض، كريمة مخفوقة، سكر.",
      "image": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    },
    {
      "id": "p55",
      "name": "تارت جوز الهند المحمص",
      "category": "تارت",
      "price": 42,
      "description": "تارت مقرمش بحشوة جوز الهند الكريمية ومغطى بقطع جوز الهند المحمصة والمقرمشة.",
      "ingredients": "جوز هند، حليب مكثف، زبدة، دقيق، بيض.",
      "image": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
      "createdAt": "2026-07-14T12:15:00.000Z"
    }
  ],
  "orders": [
    {
      "id": "AND-283912",
      "userId": "u-v7awykhaf",
      "customerName": "raino",
      "customerPhone": "01000000000",
      "deliveryAddress": "ابلابل",
      "specialNote": "",
      "items": [
        {
          "productId": "p2",
          "name": "ماكرون بسيط",
          "price": 220,
          "quantity": 1,
          "image": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800"
        },
        {
          "productId": "p6",
          "name": "ماكرون بالقهوة",
          "price": 110,
          "quantity": 1,
          "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
        }
      ],
      "subtotal": 330,
      "deliveryFee": 20,
      "total": 350,
      "status": "pending",
      "createdAt": "2026-07-14T12:40:53.121Z"
    }
  ]
};

// --- PRODUCTS DATA ---
const CATEGORIES = [
  "الكل",
  "شوكولاتة",
  "كيك",
  "تارت",
  "حلويات شرقية",
  "ماكرون فرنسي"
];

let PRODUCTS = [];

// --- APP STATE ---
let activeCategory = "الكل";
let searchQuery = "";
let cart = []; // Array of { product, quantity }
let isCartOpen = false;
let isFavOpen = false;
let selectedProduct = null;
let favorites = []; // Array of product ids
let isCartBouncing = false;
let toastTimeout = null;
let checkoutStep = "cart"; // "cart" | "form" | "success"

let userName = "";
let userPhone = "";
let userAddress = "";
let specialNote = "";
let orderId = "";

// Authentication & Session State
let authToken = localStorage.getItem("authToken") || null;
let currentUser = null;

const freeShippingThreshold = 300;

// --- DOM ELEMENTS ---
const categoriesContainer = document.getElementById("categories-container");
const productsGrid = document.getElementById("products-grid");
const totalCountDisplay = document.getElementById("total-count-display");
const emptyState = document.getElementById("empty-state");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const searchInput = document.getElementById("search-input");
const cartTriggerBtn = document.getElementById("cart-trigger-btn");
const cartBadge = document.getElementById("cart-badge");

// Favorites Drawer elements
const favTriggerBtn = document.getElementById("fav-trigger-btn");
const favBadge = document.getElementById("fav-badge");
const favDrawer = document.getElementById("fav-drawer");
const favDrawerContainer = document.getElementById("fav-drawer-container");
const favOverlay = document.getElementById("fav-overlay");
const closeFavBtn = document.getElementById("close-fav-btn");
const favDrawerSubtitle = document.getElementById("fav-drawer-subtitle");
const favEmptyState = document.getElementById("fav-empty-state");
const favContentWrapper = document.getElementById("fav-content-wrapper");
const favItemsList = document.getElementById("fav-items-list");
const startFavShoppingBtn = document.getElementById("start-fav-shopping-btn");

// Cart Drawer elements
const cartDrawer = document.getElementById("cart-drawer");
const cartDrawerContainer = document.getElementById("cart-drawer-container");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartDrawerHeaderTitle = document.getElementById("cart-drawer-header-title");
const cartDrawerHeaderSubtitle = document.getElementById("cart-drawer-header-subtitle");

const cartContentWrapper = document.getElementById("cart-content-wrapper");
const cartEmptyState = document.getElementById("cart-empty-state");
const cartItemsList = document.getElementById("cart-items-list");
const freeShippingBanner = document.getElementById("free-shipping-banner");
const freeShippingProgress = document.getElementById("free-shipping-progress");
const freeShippingText = document.getElementById("free-shipping-text");
const cartSubtotalVal = document.getElementById("cart-subtotal-val");
const cartDeliveryFeeVal = document.getElementById("cart-delivery-fee-val");
const cartTotalVal = document.getElementById("cart-total-val");
const cartSummarySection = document.getElementById("cart-summary-section");
const checkoutFormSection = document.getElementById("checkout-form-section");
const checkoutSuccessSection = document.getElementById("checkout-success-section");

const toCheckoutBtn = document.getElementById("to-checkout-btn");
const backToCartBtn = document.getElementById("back-to-cart-btn");
const checkoutForm = document.getElementById("checkout-form");
const startShoppingBtn = document.getElementById("start-shopping-btn");

// Success elements
const orderIdBadge = document.getElementById("order-id-badge");
const successName = document.getElementById("success-name");
const successPhone = document.getElementById("success-phone");
const successAddress = document.getElementById("success-address");
const successNoteRow = document.getElementById("success-note-row");
const successNote = document.getElementById("success-note");
const successPaidAmount = document.getElementById("success-paid-amount");
const successReturnBtn = document.getElementById("success-return-btn");

// Modal Quick View elements
const quickViewModal = document.getElementById("quick-view-modal");
const quickViewOverlay = document.getElementById("quick-view-overlay");
const closeQuickViewBtn = document.getElementById("close-quick-view-btn");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");

// Toast elements
const toastNotification = document.getElementById("toast-notification");
const toastText = document.getElementById("toast-text");

// Footer brand click
const brandLogo = document.getElementById("brand-logo");

// --- NEW AUTH & ADMIN DOM ELEMENTS ---
// Header Auth DOM
const authLoginBtn = document.getElementById("auth-login-btn");
const authUserMenu = document.getElementById("auth-user-menu");
const authUserBtn = document.getElementById("auth-user-btn");
const authUserName = document.getElementById("auth-user-name");
const authUserDropdown = document.getElementById("auth-user-dropdown");
const btnViewHistory = document.getElementById("btn-view-history");
const btnAdminDashboard = document.getElementById("btn-admin-dashboard");
const btnLogout = document.getElementById("btn-logout");

// Auth Modal DOM
const authModal = document.getElementById("auth-modal");
const authModalOverlay = document.getElementById("auth-modal-overlay");
const authModalDialog = document.getElementById("auth-modal-dialog");
const closeAuthModalBtn = document.getElementById("close-auth-modal-btn");
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");

// History Modal DOM
const historyModal = document.getElementById("history-modal");
const historyModalOverlay = document.getElementById("history-modal-overlay");
const historyModalDialog = document.getElementById("history-modal-dialog");
const closeHistoryModalBtn = document.getElementById("close-history-modal-btn");
const historyEmptyState = document.getElementById("history-empty-state");
const historyItemsContainer = document.getElementById("history-items-container");

// Info Modal DOM
const infoModal = document.getElementById("info-modal");
const infoModalOverlay = document.getElementById("info-modal-overlay");
const infoModalDialog = document.getElementById("info-modal-dialog");
const closeInfoModalBtn = document.getElementById("close-info-modal-btn");
const tabBtnStory = document.getElementById("tab-btn-story");
const tabBtnLocation = document.getElementById("tab-btn-location");
const tabBtnContact = document.getElementById("tab-btn-contact");
const tabContentStory = document.getElementById("tab-content-story");
const tabContentLocation = document.getElementById("tab-content-location");
const tabContentContact = document.getElementById("tab-content-contact");
const infoContactForm = document.getElementById("info-contact-form");

// Admin Modal DOM
const adminModal = document.getElementById("admin-modal");
const adminModalOverlay = document.getElementById("admin-modal-overlay");
const adminModalDialog = document.getElementById("admin-modal-dialog");
const closeAdminModalBtn = document.getElementById("close-admin-modal-btn");
const adminSubtabOrders = document.getElementById("admin-subtab-orders");
const adminSubtabAddProduct = document.getElementById("admin-subtab-addproduct");
const adminOrdersSection = document.getElementById("admin-orders-section");
const adminAddProductSection = document.getElementById("admin-addproduct-section");
const adminOrdersEmpty = document.getElementById("admin-orders-empty");
const adminOrdersList = document.getElementById("admin-orders-list");
const formAddProduct = document.getElementById("form-add-product");

// --- SETTINGS DOM ELEMENTS ---
const btnSettings = document.getElementById("btn-settings");
const settingsModal = document.getElementById("settings-modal");
const settingsModalOverlay = document.getElementById("settings-modal-overlay");
const settingsModalDialog = document.getElementById("settings-modal-dialog");
const closeSettingsModalBtn = document.getElementById("close-settings-modal-btn");
const formSettings = document.getElementById("form-settings");
const settingsNameInput = document.getElementById("settings-name-input");
const settingsPhoneInput = document.getElementById("settings-phone-input");
const settingsAddressInput = document.getElementById("settings-address-input");
const langBtnAr = document.getElementById("lang-btn-ar");
const langBtnEn = document.getElementById("lang-btn-en");

// --- ADMIN PRODUCTS MANAGEMENT DOM ELEMENTS ---
const adminSubtabProducts = document.getElementById("admin-subtab-products");
const adminProductsSection = document.getElementById("admin-products-section");
const adminProductsEmpty = document.getElementById("admin-products-empty");
const adminProductsList = document.getElementById("admin-products-list");
const btnUploadFile = document.getElementById("btn-upload-file");
const prodImageFile = document.getElementById("prod-image-file");
const uploadStatusText = document.getElementById("upload-status-text");

// Language State
let currentLang = localStorage.getItem("currentLang") || "ar";

const translations = {
  ar: {
    story: "قصتنا",
    location: "الموقع",
    contact: "تواصل معنا",
    announcement: "متجر الطيبات - حلويات فاخرة تصنع بحب وشغف ✨",
    searchPlaceholder: "ابحث...",
    login: "تسجيل الدخول",
    welcome: "مرحباً بك!",
    myOrders: "طلباتي السابقة",
    settings: "إعدادات الحساب ",
    adminDashboard: "لوحة الإدارة ",
    logout: "تسجيل الخروج",
    heroBadge: "حلويات طازجة ومناسبة لكل مناسبة",
    heroTitle1: "دلّع نفسك..",
    heroTitle2: "واختار على ذوقك",
    heroSubtitle: "عندنا تشكيلة من الحلويات اللذيذة والمناسبة لأعيادك أو أي مناسبة بسيطة. تقدر تختار اللي يعجبك وتطلبه بسهولة من خلال السلة.",
    categoryAll: "الكل",
    emptyStateTitle: "لم نجد ما تبحث عنه",
    emptyStateSubtitle: "عذراً، لم تظهر أي نتائج مطابقة لبحثك أو التصنيف المحدد. حاول تغيير كلمات البحث أو استعراض تصنيفات أخرى.",
    emptyStateBtn: "استعراض كافة القائمة",
    cartTitle: "سلة المشتريات",
    cartEmpty: "السلة فارغة حالياً",
    cartSubtotal: "المجموع الفرعي:",
    cartDelivery: "خدمة التوصيل:",
    cartTotal: "الإجمالي النهائي:",
    checkoutBtn: "تأكيد الطلب والتسليم 🛒",
    backToShop: "العودة للتسوق",
    favoritesTitle: "قائمة مفضلاتي",
    favoritesEmpty: "قائمة المفضلة فارغة حالياً",
    orderHistoryTitle: "سجل طلباتي السابقة",
    orderHistoryEmpty: "لم تقم بتسجيل أي طلبات بعد!"
  },
  en: {
    story: "Our Story",
    location: "Location",
    contact: "Contact Us",
    announcement: "Luxury Sweets Studio - Crafted with love & passion ✨",
    searchPlaceholder: "Search...",
    login: "Login / Sign Up",
    welcome: "Welcome back!",
    myOrders: "My Orders",
    settings: "Account Settings ",
    adminDashboard: "Admin Panel ",
    logout: "Logout",
    heroBadge: "Fresh sweets perfect for any occasion",
    heroTitle1: "Treat yourself...",
    heroTitle2: "And Choose What You Love",
    heroSubtitle: "We have a curated selection of exquisite sweets perfect for your birthdays, celebrations, or daily cravings. Order easily with premium delivery.",
    categoryAll: "All",
    emptyStateTitle: "No results matched your criteria",
    emptyStateSubtitle: "Sorry, no items matched your search or selected category. Try changing your search query or exploring other categories.",
    emptyStateBtn: "Show All Products",
    cartTitle: "Shopping Cart",
    cartEmpty: "Your cart is currently empty",
    cartSubtotal: "Subtotal:",
    cartDelivery: "Delivery:",
    cartTotal: "Total Amount:",
    checkoutBtn: "Confirm Order & Delivery 🛒",
    backToShop: "Back to Shop",
    favoritesTitle: "My Wishlist",
    favoritesEmpty: "Your wishlist is currently empty",
    orderHistoryTitle: "My Order History",
    orderHistoryEmpty: "You haven't placed any orders yet!"
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("currentLang", lang);
  
  // Set document dir & lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  const t = translations[lang];
  
  // Header Navigation Links
  const navLinks = document.querySelectorAll("header a");
  if (navLinks.length >= 3) {
    navLinks[0].textContent = t.story;
    navLinks[1].textContent = t.location;
    navLinks[2].textContent = t.contact;
  }
  
  // Announcement banner
  const annSpan = document.querySelector("#announcement-banner-text");
  if (annSpan) {
    annSpan.textContent = t.announcement;
  }
  
  // Search placeholder
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }
  
  // Login button
  if (authLoginBtn) {
    const textNode = authLoginBtn.querySelector("span");
    if (textNode) textNode.textContent = t.login;
  }
  
  // Dropdown text
  const dropdownUserInfo = document.getElementById("dropdown-user-info");
  if (dropdownUserInfo) {
    dropdownUserInfo.textContent = t.welcome;
  }
  
  if (btnViewHistory) {
    const textNode = btnViewHistory.querySelector("span");
    if (textNode) textNode.textContent = t.myOrders;
  }
  
  if (btnSettings) {
    const textNode = btnSettings.querySelector("span");
    if (textNode) textNode.textContent = t.settings;
  }
  
  if (btnAdminDashboard) {
    const textNode = btnAdminDashboard.querySelector("span");
    if (textNode) textNode.textContent = t.adminDashboard;
  }
  
  if (btnLogout) {
    const textNode = btnLogout.querySelector("span");
    if (textNode) textNode.textContent = t.logout;
  }
  
  // Hero texts
  const heroBadgeEl = document.querySelector("section.relative span.inline-flex");
  if (heroBadgeEl) {
    heroBadgeEl.textContent = t.heroBadge;
  }
  
  const heroTitleEl = document.querySelector("section.relative h2");
  if (heroTitleEl) {
    heroTitleEl.innerHTML = `${t.heroTitle1}<br /><span class="text-[#6d4c41] font-serif italic font-normal block mt-2">${t.heroTitle2}</span>`;
  }
  
  const heroSubtitleEl = document.querySelector("section.relative p");
  if (heroSubtitleEl) {
    heroSubtitleEl.textContent = t.heroSubtitle;
  }
  
  // Empty states
  const emptyTitleEl = document.querySelector("#empty-state h3");
  if (emptyTitleEl) emptyTitleEl.textContent = t.emptyStateTitle;
  
  const emptySubEl = document.querySelector("#empty-state p");
  if (emptySubEl) emptySubEl.textContent = t.emptyStateSubtitle;
  
  if (clearFiltersBtn) {
    clearFiltersBtn.textContent = t.emptyStateBtn;
  }

  // Drawers Titles
  const favTitleSpan = document.querySelector("#fav-drawer-container h2 span");
  if (favTitleSpan) favTitleSpan.textContent = t.favoritesTitle;
  
  const favEmptyPara = document.querySelector("#fav-empty-state p");
  if (favEmptyPara) favEmptyPara.textContent = t.favoritesEmpty;

  const cartTitleSpan = document.querySelector("#cart-drawer-container h2 span");
  if (cartTitleSpan) cartTitleSpan.textContent = t.cartTitle;
  
  const cartEmptyPara = document.querySelector("#cart-empty-state p");
  if (cartEmptyPara) cartEmptyPara.textContent = t.cartEmpty;
  
  const subtotalLabel = document.getElementById("cart-subtotal-label");
  if (subtotalLabel) subtotalLabel.textContent = t.cartSubtotal;
  
  const deliveryLabel = document.getElementById("cart-delivery-label");
  if (deliveryLabel) deliveryLabel.textContent = t.cartDelivery;
  
  const totalLabel = document.getElementById("cart-total-label");
  if (totalLabel) totalLabel.textContent = t.cartTotal;
  
  if (toCheckoutBtn) {
    toCheckoutBtn.textContent = t.checkoutBtn;
  }
  
  if (backToCartBtn) {
    backToCartBtn.textContent = t.backToShop;
  }

  // History Modal
  const historyTitleSpan = document.querySelector("#history-modal-dialog h2 span");
  if (historyTitleSpan) historyTitleSpan.textContent = t.orderHistoryTitle;
  
  const historyEmptyPara = document.querySelector("#history-empty-state p");
  if (historyEmptyPara) historyEmptyPara.textContent = t.orderHistoryEmpty;

  // Update Settings buttons design
  const btnAr = document.getElementById("lang-btn-ar");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnAr && btnEn) {
    if (lang === 'ar') {
      btnAr.className = "py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-center bg-[#3e2723] border-[#3e2723] text-white";
      btnEn.className = "py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-center bg-white border-[#6d4c41]/20 text-[#6d4c41] hover:bg-[#efebe9]/20";
    } else {
      btnEn.className = "py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-center bg-[#3e2723] border-[#3e2723] text-white";
      btnAr.className = "py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer text-center bg-white border-[#6d4c41]/20 text-[#6d4c41] hover:bg-[#efebe9]/20";
    }
  }

  // Translate Info Modal tabs
  if (tabBtnStory) tabBtnStory.textContent = t.story;
  if (tabBtnLocation) tabBtnLocation.textContent = t.location;
  if (tabBtnContact) tabBtnContact.textContent = t.contact;

  const storyTitle = document.getElementById("story-title");
  const storyP1 = document.getElementById("story-p1");
  const storyP2 = document.getElementById("story-p2");
  const storyStat1 = document.getElementById("story-stat1");
  const storyStat2 = document.getElementById("story-stat2");
  const storyStat3 = document.getElementById("story-stat3");
  
  const locationTitle = document.getElementById("location-title");
  const locationSubtitle = document.getElementById("location-subtitle");
  const locationDesc = document.getElementById("location-desc");
  
  const contactTitle = document.getElementById("contact-title");
  const contactSubtitle = document.getElementById("contact-subtitle");
  const contactLabelName = document.getElementById("contact-label-name");
  const contactLabelPhone = document.getElementById("contact-label-phone");
  const contactLabelMsg = document.getElementById("contact-label-msg");
  const contactSubmitBtn = document.getElementById("contact-submit-btn");

  const whatsappLinkText = document.querySelector("#whatsapp-link span");
  const callLinkText = document.querySelector("#call-link span");
  const instaLinkText = document.querySelector("#insta-link span");

  if (lang === 'ar') {
    if (storyTitle) storyTitle.textContent = "قصتنا وعشقنا للحلويات";
    if (storyP1) storyP1.innerHTML = "بدأت رحلة <strong>الطيبات</strong> في قلب شغفنا المتوارث بصناعة الحلويات والمخبوزات الفاخرة. لم تكن مجرد فكرة تجارية، بل كانت رؤية لتقديم قطع متميزة من السعادة تُصنع بكل حب وبأعلى جودة ممكنة. نختار مكوناتنا بعناية فائقة، بدءاً من حبات الكاكاو الغنية، والزبدة الطبيعية الطازجة، وحتى الفواكه المنتقاة بعناية.";
    if (storyP2) storyP2.innerHTML = "في مطبخنا، نجمع بين عراقة النكهات والتقنيات العصرية لنقدم لكم تجربة لا تُنسى في كل قضمة. كل كعكة، وكل قطعة تارت، وكل حبة شوكولاتة تحمل بصمتنا الخاصة وتعبّر عن هويتنا المتمثلة في الدقة والابتكار. نحن نؤمن بأن الحلويات ليست مجرد طعام، بل هي لغة للاحتفال والحب والترابط بين الناس.";
    if (storyStat1) storyStat1.textContent = "مكونات طبيعية";
    if (storyStat2) storyStat2.textContent = "تحضير طازج";
    if (storyStat3) storyStat3.textContent = "شغف الصنعة";
    
    if (locationTitle) locationTitle.textContent = "موقعنا ومكان فرعنا";
    if (locationSubtitle) locationSubtitle.textContent = "يسعدنا دائماً استقبالكم لزيارتنا واكتشاف المزيد من منتجاتنا";
    if (locationDesc) locationDesc.innerHTML = "<strong>عنوان الفرع الرئيسي:</strong> شارع الجمهورية، بجوار ساحة الشهداء، خلف مجمع المحاكم. نوفر خدمة توصيل سريعة ومميزة لكافة أنحاء المدينة.";
    
    if (contactTitle) contactTitle.textContent = "تواصل معنا";
    if (contactSubtitle) contactSubtitle.textContent = "نحن هنا دائماً للإجابة على استفساراتكم وتلقي طلباتكم الخاصة";
    if (contactLabelName) contactLabelName.textContent = "الاسم الكامل";
    if (contactLabelPhone) contactLabelPhone.textContent = "رقم الهاتف";
    if (contactLabelMsg) contactLabelMsg.textContent = "موضوع الرسالة";
    if (contactSubmitBtn) contactSubmitBtn.textContent = "إرسال الرسالة الآن ✉️";
    
    if (whatsappLinkText) whatsappLinkText.textContent = "واتساب";
    if (callLinkText) callLinkText.textContent = "اتصال";
    if (instaLinkText) instaLinkText.textContent = "إنستجرام";
  } else {
    if (storyTitle) storyTitle.textContent = "Our Story & Passion for Sweets";
    if (storyP1) storyP1.innerHTML = "The journey of <strong>El Taibat</strong> began in the heart of our inherited passion for creating premium sweets and fine bakeries. It was not just a commercial idea, but a vision to deliver exceptional bites of happiness crafted with love and the highest possible quality. We choose our ingredients with extreme care, starting from rich cocoa beans, fresh natural butter, to carefully selected fruits.";
    if (storyP2) storyP2.innerHTML = "In our kitchen, we combine authentic flavors with modern techniques to offer you an unforgettable experience in every bite. Every cake, every tart, and every chocolate piece carries our special touch and represents our identity of precision and innovation. We believe that sweets are not just food, but a language of celebration, love, and bonding.";
    if (storyStat1) storyStat1.textContent = "100% Natural";
    if (storyStat2) storyStat2.textContent = "Daily Fresh";
    if (storyStat3) storyStat3.textContent = "Craft Passion";
    
    if (locationTitle) locationTitle.textContent = "Our Store Location";
    if (locationSubtitle) locationSubtitle.textContent = "We are always delighted to welcome you to discover our products";
    if (locationDesc) locationDesc.innerHTML = "<strong>Main Branch Address:</strong> El Goumhouria Street, next to Martyrs Square, behind the Court Complex. We provide fast and excellent delivery to all parts of the city.";
    
    if (contactTitle) contactTitle.textContent = "Contact Us";
    if (contactSubtitle) contactSubtitle.textContent = "We are always here to answer your inquiries and receive your special requests";
    if (contactLabelName) contactLabelName.textContent = "Full Name";
    if (contactLabelPhone) contactLabelPhone.textContent = "Phone Number";
    if (contactLabelMsg) contactLabelMsg.textContent = "Message Subject";
    if (contactSubmitBtn) contactSubmitBtn.textContent = "Send Message Now ✉️";
    
    if (whatsappLinkText) whatsappLinkText.textContent = "WhatsApp";
    if (callLinkText) callLinkText.textContent = "Call Us";
    if (instaLinkText) instaLinkText.textContent = "Instagram";
  }

  renderCategories();
  renderProducts();
}

// --- FUNCTIONS & RENDERING ---

// Toast notifier
function showToast(message) {
  toastText.textContent = message;
  toastNotification.classList.remove("translate-y-4", "opacity-0", "pointer-events-none");
  toastNotification.classList.add("translate-y-0", "opacity-100");
  
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  toastTimeout = setTimeout(() => {
    toastNotification.classList.add("translate-y-4", "opacity-0", "pointer-events-none");
    toastNotification.classList.remove("translate-y-0", "opacity-100");
  }, 3000);
}

// =========================================================================
// --- PURE CLIENT-SIDE DB & ROUTER ENGINE (NO-SERVER) ---
// =========================================================================

function getLocalDB() {
  let dbStr = localStorage.getItem("el_taibat_db");
  if (!dbStr) {
    localStorage.setItem("el_taibat_db", JSON.stringify(initialDb));
    return initialDb;
  }
  try {
    return JSON.parse(dbStr);
  } catch (e) {
    localStorage.setItem("el_taibat_db", JSON.stringify(initialDb));
    return initialDb;
  }
}

function saveLocalDB(db) {
  localStorage.setItem("el_taibat_db", JSON.stringify(db));
}

// Client-side simulated router to make the app 100% serverless and super fast!
async function apiRequest(endpoint, options = {}) {
  await new Promise(resolve => setTimeout(resolve, 30)); // 30ms fake network delay
  
  const db = getLocalDB();
  const method = options.method ? options.method.toUpperCase() : 'GET';
  
  let body = null;
  if (options.body) {
    if (typeof options.body === 'string') {
      try {
        body = JSON.parse(options.body);
      } catch (e) {
        body = options.body;
      }
    } else {
      body = options.body;
    }
  }
  
  // 1. PRODUCTS ENDPOINTS
  if (endpoint === '/api/products') {
    if (method === 'GET') {
      return { success: true, products: db.products };
    }
    if (method === 'POST') {
      const newProduct = {
        id: "prod-" + Date.now(),
        name: body.name,
        category: body.category,
        price: Number(body.price),
        description: body.description,
        ingredients: body.ingredients,
        image: body.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
      };
      db.products.unshift(newProduct);
      saveLocalDB(db);
      return { success: true, product: newProduct };
    }
  }
  
  if (endpoint.startsWith('/api/products/')) {
    const pId = endpoint.split('/').pop();
    if (method === 'PUT') {
      const idx = db.products.findIndex(p => p.id === pId || String(p.id) === String(pId));
      if (idx !== -1) {
        db.products[idx] = {
          ...db.products[idx],
          name: body.name,
          category: body.category,
          price: Number(body.price),
          description: body.description,
          ingredients: body.ingredients,
          image: body.image
        };
        saveLocalDB(db);
        return { success: true, product: db.products[idx] };
      } else {
        throw new Error('المنتج غير موجود');
      }
    }
    if (method === 'DELETE') {
      db.products = db.products.filter(p => p.id !== pId && String(p.id) !== String(pId));
      saveLocalDB(db);
      return { success: true };
    }
  }

  // 2. AUTH ENDPOINTS
  if (endpoint === '/api/auth/login') {
    const { username, password } = body;
    const user = db.users.find(u => u.username === username);
    if (!user) {
      throw new Error("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
    
    let isMatch = false;
    if (username === 'admin') {
      isMatch = (password === 'admin123');
    } else {
      isMatch = (user.password === password);
    }
    
    if (!isMatch) {
      throw new Error("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
    
    const { password: _, ...safeUser } = user;
    const token = "mock-jwt-" + btoa(unescape(encodeURIComponent(JSON.stringify(safeUser))));
    localStorage.setItem("currentUser", JSON.stringify(safeUser));
    localStorage.setItem("authToken", token);
    return { success: true, token, user: safeUser };
  }
  
  if (endpoint === '/api/auth/register') {
    const { username, password, name, phone, address } = body;
    if (db.users.some(u => u.username === username)) {
      throw new Error("اسم المستخدم هذا مسجل بالفعل");
    }
    const newUser = {
      id: "usr-" + Date.now(),
      username,
      password,
      role: "user",
      name,
      phone,
      address,
      createdAt: new Date().toISOString()
    };
    db.users.push(newUser);
    saveLocalDB(db);
    
    const { password: _, ...safeUser } = newUser;
    const token = "mock-jwt-" + btoa(unescape(encodeURIComponent(JSON.stringify(safeUser))));
    localStorage.setItem("currentUser", JSON.stringify(safeUser));
    localStorage.setItem("authToken", token);
    return { success: true, token, user: safeUser };
  }
  
  if (endpoint === '/api/auth/profile') {
    const savedUser = localStorage.getItem("currentUser");
    if (!savedUser) {
      throw new Error("غير مصرح بالوصول");
    }
    const parsedUser = JSON.parse(savedUser);
    
    if (method === 'GET') {
      return { success: true, user: parsedUser };
    }
    if (method === 'PUT') {
      const idx = db.users.findIndex(u => u.id === parsedUser.id);
      const updatedUser = {
        ...parsedUser,
        name: body.name || parsedUser.name,
        phone: body.phone || parsedUser.phone,
        address: body.address || parsedUser.address
      };
      if (idx !== -1) {
        db.users[idx] = {
          ...db.users[idx],
          ...updatedUser
        };
      }
      saveLocalDB(db);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      return { success: true, user: updatedUser };
    }
  }

  // 3. ORDERS ENDPOINTS
  if (endpoint === '/api/orders') {
    if (method === 'GET') {
      const savedUser = localStorage.getItem("currentUser");
      if (!savedUser) {
        return { success: true, orders: [] };
      }
      const parsedUser = JSON.parse(savedUser);
      const userOrders = db.orders.filter(o => o.userId === parsedUser.id || o.customerPhone === parsedUser.phone);
      return { success: true, orders: userOrders };
    }
    if (method === 'POST') {
      const savedUser = localStorage.getItem("currentUser");
      const parsedUser = savedUser ? JSON.parse(savedUser) : null;
      
      const newOrder = {
        id: "TAI-" + Math.floor(100000 + Math.random() * 900000),
        userId: parsedUser ? parsedUser.id : null,
        customerName: body.customerName,
        customerPhone: body.customerPhone,
        deliveryAddress: body.deliveryAddress,
        specialNote: body.specialNote || "",
        items: body.items,
        total: Number(body.total),
        status: "pending",
        createdAt: new Date().toISOString()
      };
      
      db.orders.unshift(newOrder);
      saveLocalDB(db);
      return { success: true, order: newOrder };
    }
  }
  
  if (endpoint === '/api/orders/all') {
    return { success: true, orders: db.orders };
  }
  
  if (endpoint.startsWith('/api/orders/')) {
    const parts = endpoint.split('/');
    const oId = parts[3];
    
    if (parts.length === 5 && parts[4] === 'cancel') {
      const idx = db.orders.findIndex(o => o.id === oId);
      if (idx !== -1) {
        db.orders[idx].status = 'cancelled';
        saveLocalDB(db);
        return { success: true };
      } else {
        throw new Error('الطلب غير موجود');
      }
    }
    
    if (parts.length === 5 && parts[4] === 'status') {
      const idx = db.orders.findIndex(o => o.id === oId);
      if (idx !== -1) {
        db.orders[idx].status = body.status;
        saveLocalDB(db);
        return { success: true };
      } else {
        throw new Error('الطلب غير موجود');
      }
    }
    
    if (method === 'DELETE') {
      db.orders = db.orders.filter(o => o.id !== oId);
      saveLocalDB(db);
      return { success: true };
    }
  }
  
  throw new Error(`Endpoint ${endpoint} not found in client-side router`);
}

// Verify saved token on startup and retrieve fresh user profile details
async function verifySession() {
  const savedUser = localStorage.getItem("currentUser");
  if (authToken && savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      clearSession();
    }
  } else {
    clearSession();
  }
}

function clearSession() {
  authToken = null;
  currentUser = null;
  localStorage.removeItem("authToken");
  localStorage.removeItem("currentUser");
}

// Dynamic login state and dropdown menu updates in the UI
function updateAuthUI() {
  if (currentUser) {
    authLoginBtn.classList.add("hidden");
    authUserMenu.classList.remove("hidden");
    authUserName.textContent = currentUser.name.split(" ")[0]; // First name
    
    if (currentUser.role === 'admin') {
      btnAdminDashboard.classList.remove("hidden");
    } else {
      btnAdminDashboard.classList.add("hidden");
    }
    
    // Auto fill form fields
    const inputName = document.getElementById("input-name");
    const inputPhone = document.getElementById("input-phone");
    const inputAddress = document.getElementById("input-address");
    
    if (inputName && !inputName.value) inputName.value = currentUser.name || "";
    if (inputPhone && !inputPhone.value) inputPhone.value = currentUser.phone || "";
    if (inputAddress && !inputAddress.value) inputAddress.value = currentUser.address || "";
  } else {
    authLoginBtn.classList.remove("hidden");
    authUserMenu.classList.add("hidden");
    btnAdminDashboard.classList.add("hidden");
    authUserDropdown.classList.add("hidden");
  }
}

// ==========================================
// --- AUTH MODAL DIALOG OPERATIONS ---
// ==========================================
function openAuthModal() {
  authModal.classList.remove("pointer-events-none");
  authModalOverlay.classList.remove("opacity-0");
  authModalOverlay.classList.add("opacity-100");
  authModalDialog.classList.remove("scale-95", "opacity-0");
  authModalDialog.classList.add("scale-100", "opacity-100");
  switchAuthTab('login');
}

function closeAuthModal() {
  authModalOverlay.classList.remove("opacity-100");
  authModalOverlay.classList.add("opacity-0");
  authModalDialog.classList.remove("scale-100", "opacity-100");
  authModalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    authModal.classList.add("pointer-events-none");
  }, 500);
}

function switchAuthTab(tab) {
  if (tab === 'login') {
    tabLogin.classList.add("border-[#3e2723]", "text-[#3e2723]");
    tabLogin.classList.remove("border-transparent", "text-[#6d4c41]/60");
    tabRegister.classList.remove("border-[#3e2723]", "text-[#3e2723]");
    tabRegister.classList.add("border-transparent", "text-[#6d4c41]/60");
    formLogin.classList.remove("hidden");
    formRegister.classList.add("hidden");
  } else {
    tabRegister.classList.add("border-[#3e2723]", "text-[#3e2723]");
    tabRegister.classList.remove("border-transparent", "text-[#6d4c41]/60");
    tabLogin.classList.remove("border-[#3e2723]", "text-[#3e2723]");
    tabLogin.classList.add("border-transparent", "text-[#6d4c41]/60");
    formRegister.classList.remove("hidden");
    formLogin.classList.add("hidden");
  }
}

// ==========================================
// --- ORDER HISTORY MODAL OPERATIONS ---
// ==========================================
async function openHistoryModal() {
  historyModal.classList.remove("pointer-events-none");
  historyModalOverlay.classList.remove("opacity-0");
  historyModalOverlay.classList.add("opacity-100");
  historyModalDialog.classList.remove("scale-95", "opacity-0");
  historyModalDialog.classList.add("scale-100", "opacity-100");
  
  await loadOrderHistory();
}

function closeHistoryModal() {
  historyModalOverlay.classList.remove("opacity-100");
  historyModalOverlay.classList.add("opacity-0");
  historyModalDialog.classList.remove("scale-100", "opacity-100");
  historyModalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    historyModal.classList.add("pointer-events-none");
  }, 500);
}

async function loadOrderHistory() {
  try {
    const data = await apiRequest('/api/orders');
    if (!data.success || data.orders.length === 0) {
      historyEmptyState.classList.remove("hidden");
      historyItemsContainer.innerHTML = "";
      return;
    }
    
    historyEmptyState.classList.add("hidden");
    historyItemsContainer.innerHTML = data.orders.map(order => {
      const dateStr = new Date(order.createdAt).toLocaleDateString('ar-EG', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      
      let statusColor = "bg-amber-100 text-amber-800";
      let statusLabel = "معلق";
      if (order.status === "preparing") {
        statusColor = "bg-blue-100 text-blue-800";
        statusLabel = "قيد التحضير";
      } else if (order.status === "delivered") {
        statusColor = "bg-green-100 text-green-800";
        statusLabel = "تم التوصيل ✓";
      } else if (order.status === "cancelled") {
        statusColor = "bg-red-100 text-red-800";
        statusLabel = "ملغي";
      }

      // Render individual order products with their images and individual prices
      const itemsListHtml = order.items.map(it => `
        <div class="flex items-center gap-3 bg-white p-2 rounded-lg border border-[#6d4c41]/5 text-right">
          <img src="${it.image}" class="w-10 h-10 object-cover rounded-md border border-[#6d4c41]/10 shrink-0" alt="${it.name}" />
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-[#3e2723] truncate">${it.name}</h5>
            <p class="text-[10px] text-[#6d4c41]/80 mt-0.5">
              <span>الكمية: ${it.quantity}</span>
              <span class="mx-1">•</span>
              <span>السعر: ${it.price} ج.م</span>
            </p>
          </div>
          <div class="text-xs font-bold text-[#3e2723] whitespace-nowrap">
            ${it.price * it.quantity} ج.م
          </div>
        </div>
      `).join("");

      // Allow cancelling only if the order is pending or preparing
      const canCancel = order.status === 'pending' || order.status === 'preparing';
      const cancelBtnHtml = canCancel 
        ? `<button type="button" data-cancel-order-id="${order.id}" class="cancel-customer-order-btn text-[11px] font-bold text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100/80 px-3 py-1.5 rounded-lg border border-red-200/40 transition-colors cursor-pointer flex items-center gap-1">
             <i data-lucide="x-circle" class="w-3.5 h-3.5"></i>
             <span>إلغاء الطلب</span>
           </button>`
        : '';

      return `
        <div class="bg-[#efebe9]/20 p-4 border border-[#6d4c41]/10 rounded-xl space-y-3 text-right">
          <div class="flex items-center justify-between gap-2 border-b border-[#6d4c41]/10 pb-2">
            <span class="text-xs font-mono font-bold text-[#6d4c41] bg-white px-2 py-0.5 rounded border border-[#6d4c41]/10">${order.id}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${statusColor}">${statusLabel}</span>
          </div>
          
          <div class="space-y-2">
            ${itemsListHtml}
          </div>

          <div class="flex items-center justify-between text-[11px] text-[#6d4c41]/80 pt-2 border-t border-[#6d4c41]/5">
            <div class="flex flex-col text-right">
              <span>التاريخ: ${dateStr}</span>
              <span class="text-[10px] text-[#6d4c41]/60">التوصيل: ${order.deliveryFee} ج.م</span>
            </div>
            <span class="font-extrabold text-xs sm:text-sm text-[#3e2723]">الإجمالي: ${order.total} ج.م</span>
          </div>

          ${cancelBtnHtml ? `
          <div class="flex justify-end pt-1">
            ${cancelBtnHtml}
          </div>
          ` : ''}
        </div>
      `;
    }).join("");
    lucide.createIcons();
  } catch (err) {
    console.error('Failed to load history:', err);
    showToast("فشل تحميل سجل الطلبات من الخادم");
  }
}

// ==========================================
// --- ADMIN DASHBOARD MODAL OPERATIONS ---
// ==========================================
async function openAdminModal() {
  adminModal.classList.remove("pointer-events-none");
  adminModalOverlay.classList.remove("opacity-0");
  adminModalOverlay.classList.add("opacity-100");
  adminModalDialog.classList.remove("scale-95", "opacity-0");
  adminModalDialog.classList.add("scale-100", "opacity-100");
  
  switchAdminSubtab('orders');
}

function closeAdminModal() {
  adminModalOverlay.classList.remove("opacity-100");
  adminModalOverlay.classList.add("opacity-0");
  adminModalDialog.classList.remove("scale-100", "opacity-100");
  adminModalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    adminModal.classList.add("pointer-events-none");
  }, 500);
}

function switchAdminSubtab(subtab) {
  // Reset all tabs styles
  adminSubtabOrders.classList.remove("border-amber-800", "text-amber-800");
  adminSubtabOrders.classList.add("border-transparent", "text-[#6d4c41]/60");
  if (adminSubtabProducts) {
    adminSubtabProducts.classList.remove("border-amber-800", "text-amber-800");
    adminSubtabProducts.classList.add("border-transparent", "text-[#6d4c41]/60");
  }
  adminSubtabAddProduct.classList.remove("border-amber-800", "text-amber-800");
  adminSubtabAddProduct.classList.add("border-transparent", "text-[#6d4c41]/60");

  // Hide all sections
  adminOrdersSection.classList.add("hidden");
  if (adminProductsSection) adminProductsSection.classList.add("hidden");
  adminAddProductSection.classList.add("hidden");

  if (subtab === 'orders') {
    adminSubtabOrders.classList.add("border-amber-800", "text-amber-800");
    adminSubtabOrders.classList.remove("border-transparent", "text-[#6d4c41]/60");
    adminOrdersSection.classList.remove("hidden");
    loadAdminOrders();
  } else if (subtab === 'products') {
    if (adminSubtabProducts) {
      adminSubtabProducts.classList.add("border-amber-800", "text-amber-800");
      adminSubtabProducts.classList.remove("border-transparent", "text-[#6d4c41]/60");
    }
    if (adminProductsSection) adminProductsSection.classList.remove("hidden");
    loadAdminProducts();
  } else if (subtab === 'addproduct') {
    adminSubtabAddProduct.classList.add("border-amber-800", "text-amber-800");
    adminSubtabAddProduct.classList.remove("border-transparent", "text-[#6d4c41]/60");
    adminAddProductSection.classList.remove("hidden");
    
    const editIdInput = document.getElementById("prod-edit-id");
    if (editIdInput && editIdInput.value) {
      adminSubtabAddProduct.textContent = "تعديل المنتج 📝";
      document.getElementById("admin-product-form-title").textContent = "تعديل بيانات صنف الحلويات";
      document.getElementById("admin-product-submit-btn").textContent = "حفظ التعديلات الجديدة ✨";
    } else {
      adminSubtabAddProduct.textContent = "إضافة منتج جديد";
      document.getElementById("admin-product-form-title").textContent = "تعبئة بيانات صنف الحلويات الجديد";
      document.getElementById("admin-product-submit-btn").textContent = "تأكيد ونشر الصنف الجديد في قائمة المعروضات ✨";
    }
  }
}

async function loadAdminProducts() {
  try {
    const data = await apiRequest('/api/products');
    if (!data.success || data.products.length === 0) {
      adminProductsEmpty.classList.remove("hidden");
      adminProductsList.innerHTML = "";
      return;
    }
    
    adminProductsEmpty.classList.add("hidden");
    adminProductsList.innerHTML = data.products.map(prod => `
      <div class="bg-white p-4 border border-[#6d4c41]/10 rounded-xl flex gap-3 text-right items-center">
        <img src="${prod.image}" class="w-14 h-14 object-cover rounded-lg border border-[#6d4c41]/10 shrink-0" alt="${prod.name}" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-[#3e2723] truncate">${prod.name}</h4>
          <span class="inline-block bg-[#efebe9] text-[#6d4c41] px-2 py-0.5 rounded text-[10px] mt-1 font-semibold">${prod.category}</span>
          <p class="text-xs font-bold text-amber-800 mt-1">${prod.price} ج.م</p>
        </div>
        <div class="flex flex-col gap-1.5 shrink-0">
          <button type="button" data-edit-product-id="${prod.id}" class="admin-edit-product-btn text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors cursor-pointer flex items-center justify-center gap-1">
            <i data-lucide="edit-3" class="w-3 h-3"></i>
            <span>تعديل</span>
          </button>
          <button type="button" data-delete-product-id="${prod.id}" class="admin-delete-product-btn text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg border border-red-200 transition-colors cursor-pointer flex items-center justify-center gap-1">
            <i data-lucide="trash-2" class="w-3 h-3"></i>
            <span>حذف</span>
          </button>
        </div>
      </div>
    `).join("");
    lucide.createIcons();
  } catch (err) {
    console.error('Failed to load admin products:', err);
    showToast("فشل تحميل قائمة المنتجات");
  }
}

async function loadAdminOrders() {
  try {
    const data = await apiRequest('/api/orders/all');
    if (!data.success || data.orders.length === 0) {
      adminOrdersEmpty.classList.remove("hidden");
      adminOrdersList.innerHTML = "";
      return;
    }
    
    adminOrdersEmpty.classList.add("hidden");
    adminOrdersList.innerHTML = data.orders.map(order => {
      const dateStr = new Date(order.createdAt).toLocaleDateString('ar-EG', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      
      const itemsStr = order.items.map(it => `
        <div class="flex items-center gap-2 text-xs bg-white px-2 py-1 rounded border border-[#6d4c41]/5">
          <img src="${it.image}" class="w-6 h-6 object-cover rounded" />
          <span class="font-bold text-[#3e2723]">${it.name} x${it.quantity}</span>
        </div>
      `).join("");

      return `
        <div class="bg-[#efebe9]/20 p-5 border border-[#6d4c41]/10 rounded-xl space-y-3 text-right">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#6d4c41]/10 pb-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-[#6d4c41] bg-white px-2 py-0.5 rounded border border-[#6d4c41]/10">${order.id}</span>
              <span class="text-xs text-[#6d4c41]">${dateStr}</span>
            </div>
            
            <div class="flex items-center gap-2">
              <!-- Delete Order Action -->
              <button type="button" data-delete-order-id="${order.id}" class="text-red-500 hover:text-red-700 hover:scale-110 p-1 transition-transform cursor-pointer" title="حذف الطلب">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
              
              <!-- Update Status Action -->
              <select data-order-id="${order.id}" class="status-updater text-xs border border-[#6d4c41]/20 rounded px-2 py-1 bg-white font-bold text-[#3e2723] focus:outline-none focus:ring-1 focus:ring-amber-800 cursor-pointer">
                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>معلق</option>
                <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>قيد التحضير</option>
                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>تم التوصيل</option>
                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي</option>
              </select>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
            <div class="space-y-1">
              <p><strong class="text-[#6d4c41]">العميل:</strong> ${order.customerName}</p>
              <p><strong class="text-[#6d4c41]">الهاتف:</strong> ${order.customerPhone}</p>
              <p><strong class="text-[#6d4c41]">العنوان:</strong> ${order.deliveryAddress}</p>
            </div>
            <div class="space-y-1">
              <p><strong class="text-[#6d4c41]">رسالة الإهداء:</strong> ${order.specialNote || '<لا يوجد>'}</p>
              <p><strong class="text-[#6d4c41]">قيمة الطلب:</strong> <span class="font-bold text-[#3e2723]">${order.total} ج.م</span> (توصيل: ${order.deliveryFee} ج.م)</p>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-2 pt-2 border-t border-[#6d4c41]/5">
            ${itemsStr}
          </div>
        </div>
      `;
    }).join("");
    lucide.createIcons();
  } catch (err) {
    console.error('Failed to load admin orders:', err);
    showToast("فشل تحميل طلبات الإدارة");
  }
}

// Category Translations helper for English
const categoryTranslations = {
  "الكل": "All",
  "شوكولاتة": "Chocolate",
  "كيك": "Cakes",
  "تارت": "Tarts",
  "حلويات شرقية": "Oriental Sweets"
};

// Render the Category Filter Buttons
function renderCategories() {
  categoriesContainer.innerHTML = CATEGORIES.map(category => {
    const isActive = activeCategory === category;
    const label = currentLang === 'en' ? (categoryTranslations[category] || category) : category;
    return `
      <button
        data-category="${category}"
        class="pb-1 border-b-2 text-sm font-medium transition-colors cursor-pointer focus:outline-none ${
          isActive
            ? "border-[#3e2723] text-[#3e2723] font-bold"
            : "border-transparent text-[#6d4c41]/60 hover:text-[#3e2723]"
        }"
      >
        ${label}
      </button>
    `;
  }).join("");
}

// Render Products Grid
function renderProducts() {
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "الكل" || product.category === activeCategory;
    const cleanQuery = searchQuery.trim().toLowerCase();
    const matchesSearch = cleanQuery === "" || 
      product.name.toLowerCase().includes(cleanQuery) || 
      product.description.toLowerCase().includes(cleanQuery) || 
      product.ingredients.toLowerCase().includes(cleanQuery);
    return matchesCategory && matchesSearch;
  });

  if (currentLang === 'en') {
    totalCountDisplay.textContent = `Showing ${filteredProducts.length} of ${PRODUCTS.length} items`;
  } else {
    totalCountDisplay.textContent = `عرض ${filteredProducts.length} من ${PRODUCTS.length} قطعة`;
  }

  if (filteredProducts.length === 0) {
    productsGrid.classList.add("hidden");
    emptyState.classList.remove("hidden");
  } else {
    productsGrid.classList.remove("hidden");
    emptyState.classList.add("hidden");

    productsGrid.innerHTML = filteredProducts.map(product => {
      const isFav = favorites.includes(product.id);
      const categoryLabel = currentLang === 'en' ? (categoryTranslations[product.category] || product.category) : product.category;
      const priceLabel = currentLang === 'en' ? `${product.price} EGP` : `${product.price} ج.م`;
      const estPriceLabel = currentLang === 'en' ? "Estimated Price" : "السعر التقديري";
      const favLabel = currentLang === 'en' ? "Add to wishlist" : "أضف للمفضلة";
      const addLabel = currentLang === 'en' ? "Add to cart" : "أضف للسلة";
      const alignClass = currentLang === 'en' ? "text-left" : "text-right";
      
      return `
        <div 
          data-product-id="${product.id}"
          class="group bg-white p-4 border border-[#6d4c41]/10 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col relative"
        >
          <!-- Favorite circular button -->
          <button
            type="button"
            data-favorite-action-id="${product.id}"
            class="absolute top-6 left-6 z-10 p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#6d4c41]/10 text-[#6d4c41] hover:text-red-500 hover:scale-110 transition-all duration-300"
            aria-label="${favLabel}"
          >
            <i data-lucide="heart" class="w-4 h-4 transition-colors ${isFav ? 'fill-red-500 text-red-500' : 'text-[#3e2723]'}"></i>
          </button>

          <!-- Category Badge -->
          <div class="absolute top-6 right-6 z-10 px-2 py-0.5 rounded bg-[#3e2723]/85 text-[10px] text-white font-medium">
            ${categoryLabel}
          </div>

          <!-- Image Container with aspect ratio 1:1 -->
          <div class="relative aspect-square overflow-hidden bg-[#efebe9] rounded mb-4 flex items-center justify-center">
            <img
              src="${product.image}"
              alt="${product.name}"
              class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <!-- Floating Add Button on product image -->
            <button
              type="button"
              data-add-cart-id="${product.id}"
              class="absolute bottom-3 right-3 bg-[#3e2723] text-white p-2 rounded-full shadow-lg hover:bg-[#6d4c41] hover:scale-110 transition-all duration-300 z-10 flex items-center justify-center"
              aria-label="${addLabel}"
            >
              <i data-lucide="plus" class="w-[18px] h-[18px]"></i>
            </button>
          </div>

          <!-- Card details -->
          <div class="flex-1 flex flex-col justify-between">
            <div class="space-y-1">
              <h3 class="text-lg font-bold text-[#3e2723] group-hover:text-[#6d4c41] transition-colors leading-snug ${alignClass}">
                ${product.name}
              </h3>
              <p class="text-xs text-[#6d4c41] mb-3 leading-relaxed line-clamp-2 ${alignClass}">
                ${product.description}
              </p>
            </div>

            <!-- Pricing -->
            <div class="pt-2 border-t border-[#6d4c41]/5 flex items-center justify-between">
              <span class="text-[10px] text-[#6d4c41]/50 uppercase font-bold tracking-wider">${estPriceLabel}</span>
              <span class="font-bold text-sm text-[#3e2723]">
                ${priceLabel}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join("");
    lucide.createIcons();
  }
}

// Calculate metrics and update all cart indicators and forms
function updateCartMetrics() {
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const deliveryFee = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 25;
  const cartTotal = cartSubtotal + deliveryFee;

  // Cart Badge count
  if (cartItemCount > 0) {
    cartBadge.innerHTML = `<span class="absolute -top-1 -left-1 bg-[#6d4c41] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">${cartItemCount}</span>`;
  } else {
    cartBadge.innerHTML = "";
  }

  // Header texts
  cartDrawerHeaderSubtitle.textContent = `تحتوي على ${cartItemCount} قطع`;

  // Draw list and summaries based on checkout step
  if (checkoutStep === "cart") {
    checkoutFormSection.classList.add("hidden");
    checkoutSuccessSection.classList.add("hidden");

    if (cart.length === 0) {
      cartEmptyState.classList.remove("hidden");
      cartContentWrapper.classList.add("hidden");
    } else {
      cartEmptyState.classList.add("hidden");
      cartContentWrapper.classList.remove("hidden");

      // Free shipping progress calculation
      const progressPercent = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);
      freeShippingProgress.style.width = `${progressPercent}%`;

      if (cartSubtotal >= freeShippingThreshold) {
        freeShippingText.innerHTML = `<span>تم تفعيل الشحن المجاني ✨</span>`;
      } else {
        freeShippingText.innerHTML = `
          <span>عتبة الشحن المجاني</span>
          <span>متبقي ${freeShippingThreshold - cartSubtotal} ج.م</span>
        `;
      }

      // Populate Items list
      cartItemsList.innerHTML = cart.map(item => {
        const itemCategoryLabel = item.product.category === "ماكرون فرنسي" ? "قطع" : "علبة";
        return `
          <div class="flex gap-4 items-center border-b border-[#6d4c41]/5 pb-4 last:border-0">
            <div class="w-20 h-20 bg-[#efebe9] rounded-lg overflow-hidden shrink-0">
              <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between gap-1 mb-1">
                <h4 class="text-sm font-bold text-[#3e2723] leading-tight">${item.product.name}</h4>
                <button
                  type="button"
                  data-remove-id="${item.product.id}"
                  class="text-[#6d4c41]/40 hover:text-red-500 transition-colors p-0.5"
                  aria-label="حذف"
                >
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="text-xs text-[#6d4c41] mb-2">الكمية: ${item.quantity} ${itemCategoryLabel}</div>
              <div class="flex items-center justify-between">
                <!-- Quantity Selector -->
                <div class="flex border border-[#6d4c41]/20 rounded overflow-hidden bg-white">
                  <button
                    type="button"
                    data-qty-btn="decrease"
                    data-product-id="${item.product.id}"
                    class="px-3 py-1 hover:bg-[#fdfbf7] text-xs font-bold text-[#3e2723]"
                    aria-label="تقليل الكمية"
                  >-</button>
                  <span class="px-3 py-1 text-xs border-x border-[#6d4c41]/20 text-[#3e2723] font-bold bg-[#fdfbf7]">${item.quantity}</span>
                  <button
                    type="button"
                    data-qty-btn="increase"
                    data-product-id="${item.product.id}"
                    class="px-3 py-1 hover:bg-[#fdfbf7] text-xs font-bold text-[#3e2723]"
                    aria-label="زيادة الكمية"
                  >+</button>
                </div>
                <span class="font-bold text-sm text-[#3e2723]">${item.product.price * item.quantity} ج.م</span>
              </div>
            </div>
          </div>
        `;
      }).join("");

      // Pricing summaries
      cartSubtotalVal.textContent = `${cartSubtotal} ج.م`;
      cartDeliveryFeeVal.textContent = deliveryFee === 0 ? "مجاني" : `${deliveryFee} ج.م`;
      cartTotalVal.textContent = `${cartTotal} ج.م`;
      
      cartSummarySection.classList.remove("hidden");
    }
  } else if (checkoutStep === "form") {
    cartEmptyState.classList.add("hidden");
    cartContentWrapper.classList.add("hidden");
    cartSummarySection.classList.add("hidden");
    checkoutSuccessSection.classList.add("hidden");
    checkoutFormSection.classList.remove("hidden");

    // Inside form, update small preview
    document.getElementById("checkout-preview-count").textContent = `${cartItemCount} قطع`;
    document.getElementById("checkout-preview-total").textContent = `${cartTotal} ج.م`;
  } else if (checkoutStep === "success") {
    cartEmptyState.classList.add("hidden");
    cartContentWrapper.classList.add("hidden");
    cartSummarySection.classList.add("hidden");
    checkoutFormSection.classList.add("hidden");
    checkoutSuccessSection.classList.remove("hidden");

    // Populate order success fields
    orderIdBadge.textContent = orderId;
    successName.textContent = userName;
    successPhone.textContent = userPhone;
    successAddress.textContent = userAddress;
    successPaidAmount.textContent = `${cartTotal} ج.م`;

    if (specialNote.trim()) {
      successNote.textContent = specialNote;
      successNoteRow.classList.remove("hidden");
    } else {
      successNoteRow.classList.add("hidden");
    }
  }

  lucide.createIcons();
}

// Add item to cart state action
function addToCart(product) {
  const existingItem = cart.find(item => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  // Subtle bounce animation trigger on Cart Icon
  cartTriggerBtn.classList.add("animate-luxury-bounce");
  setTimeout(() => {
    cartTriggerBtn.classList.remove("animate-luxury-bounce");
  }, 1000);

  showToast(`تمت إضافة "${product.name}" إلى السلة`);
  updateCartMetrics();
}

// Favorite Toggle action
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("تمت الإزالة من المفضلة");
  } else {
    favorites.push(productId);
    showToast("تمت الإضافة للمفضلة ✨");
  }
  renderProducts();
  updateFavoritesUI();
}

// Update Favorites Drawer UI
function updateFavoritesUI() {
  // Update badge count
  if (favorites.length > 0) {
    favBadge.innerHTML = `<span class="absolute -top-1 -left-1 bg-[#6d4c41] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">${favorites.length}</span>`;
  } else {
    favBadge.innerHTML = "";
  }

  // Update subtitle
  favDrawerSubtitle.textContent = `تحتوي على ${favorites.length} قطع`;

  if (favorites.length === 0) {
    favEmptyState.classList.remove("hidden");
    favContentWrapper.classList.add("hidden");
  } else {
    favEmptyState.classList.add("hidden");
    favContentWrapper.classList.remove("hidden");

    // Render favorites items list
    favItemsList.innerHTML = favorites.map(id => {
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return "";
      return `
        <div class="flex gap-4 items-center border-b border-[#6d4c41]/5 pb-4 last:border-0 text-right">
          <div class="w-20 h-20 bg-[#efebe9] rounded-lg overflow-hidden shrink-0">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-1 mb-1">
              <h4 class="text-sm font-bold text-[#3e2723] leading-tight">${product.name}</h4>
              <button
                type="button"
                data-fav-remove-id="${product.id}"
                class="text-[#6d4c41]/40 hover:text-red-500 transition-colors p-0.5"
                aria-label="حذف من المفضلة"
              >
                <i data-lucide="heart" class="w-4 h-4 fill-red-500 text-red-500"></i>
              </button>
            </div>
            <div class="text-xs text-[#6d4c41] mb-2">${product.category}</div>
            <div class="flex items-center justify-between">
              <button
                type="button"
                data-fav-add-to-cart-id="${product.id}"
                class="px-3 py-1.5 bg-[#3e2723] hover:bg-[#6d4c41] text-white text-[10px] font-bold rounded-full transition-colors flex items-center gap-1"
              >
                <i data-lucide="shopping-cart" class="w-3 h-3"></i>
                <span>أضف للسلة</span>
              </button>
              <span class="font-bold text-sm text-[#3e2723]">${product.price} ج.م</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
  lucide.createIcons();
}

// Show/Hide Favorites Drawer
function openFav() {
  isFavOpen = true;
  favDrawer.classList.remove("pointer-events-none");
  favOverlay.classList.remove("opacity-0");
  favOverlay.classList.add("opacity-100");
  favDrawerContainer.classList.remove("-translate-x-full");
  favDrawerContainer.classList.add("translate-x-0");
  updateFavoritesUI();
}

function closeFav() {
  isFavOpen = false;
  favDrawerContainer.classList.remove("translate-x-0");
  favDrawerContainer.classList.add("-translate-x-full");
  favOverlay.classList.remove("opacity-100");
  favOverlay.classList.add("opacity-0");
  setTimeout(() => {
    if (!isFavOpen) {
      favDrawer.classList.add("pointer-events-none");
    }
  }, 500);
}

// Show/Hide Cart Drawer
function openCart() {
  isCartOpen = true;
  cartDrawer.classList.remove("pointer-events-none");
  cartOverlay.classList.remove("opacity-0");
  cartOverlay.classList.add("opacity-100");
  cartDrawerContainer.classList.remove("translate-x-full");
  cartDrawerContainer.classList.add("translate-x-0");
  updateCartMetrics();
}

function closeCart() {
  isCartOpen = false;
  cartDrawerContainer.classList.remove("translate-x-0");
  cartDrawerContainer.classList.add("translate-x-full");
  cartOverlay.classList.remove("opacity-100");
  cartOverlay.classList.add("opacity-0");
  setTimeout(() => {
    if (!isCartOpen) {
      cartDrawer.classList.add("pointer-events-none");
    }
  }, 500);
}

// Show Quick View modal
function showQuickView(product) {
  selectedProduct = product;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalCategory.textContent = product.category;
  modalName.textContent = product.name;
  modalPrice.textContent = `${product.price} ج.م`;
  modalDescription.textContent = product.description;
  modalIngredients.textContent = product.ingredients;

  quickViewModal.classList.remove("pointer-events-none");
  quickViewOverlay.classList.remove("opacity-0");
  quickViewOverlay.classList.add("opacity-100");
  
  const modalDialog = document.getElementById("quick-view-dialog");
  modalDialog.classList.remove("scale-95", "opacity-0");
  modalDialog.classList.add("scale-100", "opacity-100");
}

function closeQuickView() {
  selectedProduct = null;
  quickViewOverlay.classList.remove("opacity-100");
  quickViewOverlay.classList.add("opacity-0");
  const modalDialog = document.getElementById("quick-view-dialog");
  modalDialog.classList.remove("scale-100", "opacity-100");
  modalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    if (!selectedProduct) {
      quickViewModal.classList.add("pointer-events-none");
    }
  }, 500);
}

// Reset entire order flow
function resetOrderFlow() {
  cart = [];
  checkoutStep = "cart";
  userName = "";
  userPhone = "";
  userAddress = "";
  specialNote = "";
  orderId = "";
  
  // Clear HTML input fields
  document.getElementById("input-name").value = "";
  document.getElementById("input-phone").value = "";
  document.getElementById("input-address").value = "";
  document.getElementById("input-note").value = "";

  closeCart();
  updateCartMetrics();
  renderProducts();
}


// --- EVENT LISTENERS (DELEGATED) ---

// Categories list click handler
categoriesContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  renderCategories();
  renderProducts();
});

// Clear Filters buttons
clearFiltersBtn.addEventListener("click", () => {
  activeCategory = "الكل";
  searchQuery = "";
  searchInput.value = "";
  renderCategories();
  renderProducts();
});

// Search inputs
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// Favorites Drawer open and close buttons
favTriggerBtn.addEventListener("click", openFav);
closeFavBtn.addEventListener("click", closeFav);
favOverlay.addEventListener("click", closeFav);
startFavShoppingBtn.addEventListener("click", closeFav);

// Favorites items actions delegation (remove from favorites, add to cart)
favItemsList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest("[data-fav-remove-id]");
  const addToCartBtn = e.target.closest("[data-fav-add-to-cart-id]");

  if (removeBtn) {
    const pId = removeBtn.dataset.favRemoveId;
    toggleFavorite(pId);
    return;
  }

  if (addToCartBtn) {
    const pId = addToCartBtn.dataset.favAddToCartId;
    const prod = PRODUCTS.find(p => p.id === pId);
    if (prod) {
      addToCart(prod);
    }
  }
});

// Cart Drawer open and close buttons
cartTriggerBtn.addEventListener("click", () => {
  checkoutStep = "cart";
  openCart();
});

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Quick View Close buttons
closeQuickViewBtn.addEventListener("click", closeQuickView);
quickViewOverlay.addEventListener("click", closeQuickView);

// Product Cards Grid delegation (favorite button, add-to-cart, view modal)
productsGrid.addEventListener("click", (e) => {
  const favBtn = e.target.closest("[data-favorite-action-id]");
  const addBtn = e.target.closest("[data-add-cart-id]");
  const card = e.target.closest("[data-product-id]");

  if (favBtn) {
    e.stopPropagation();
    const pId = favBtn.dataset.favoriteActionId;
    toggleFavorite(pId);
    return;
  }

  if (addBtn) {
    e.stopPropagation();
    const pId = addBtn.dataset.addCartId;
    const prod = PRODUCTS.find(p => p.id === pId);
    if (prod) addToCart(prod);
    return;
  }

  if (card) {
    const pId = card.dataset.productId;
    const prod = PRODUCTS.find(p => p.id === pId);
    if (prod) showQuickView(prod);
  }
});

// Cart items actions delegation (remove item, adjust quantity)
cartItemsList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest("[data-remove-id]");
  const qtyBtn = e.target.closest("[data-qty-btn]");

  if (removeBtn) {
    const pId = removeBtn.dataset.removeId;
    cart = cart.filter(item => item.product.id !== pId);
    showToast("تم إزالة المنتج من السلة");
    updateCartMetrics();
    return;
  }

  if (qtyBtn) {
    const pId = qtyBtn.dataset.productId;
    const action = qtyBtn.dataset.qtyBtn;
    const cartItem = cart.find(item => item.product.id === pId);
    
    if (cartItem) {
      if (action === "increase") {
        cartItem.quantity += 1;
      } else if (action === "decrease") {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
          cart = cart.filter(item => item.product.id !== pId);
          showToast("تم إزالة المنتج من السلة");
        }
      }
      updateCartMetrics();
    }
  }
});

// Checkout process switches
toCheckoutBtn.addEventListener("click", () => {
  checkoutStep = "form";
  updateCartMetrics();
});

backToCartBtn.addEventListener("click", () => {
  checkoutStep = "cart";
  updateCartMetrics();
});

// Quick View Modal add to cart button
modalAddToCartBtn.addEventListener("click", () => {
  if (selectedProduct) {
    addToCart(selectedProduct);
    closeQuickView();
  }
});

// Form submission for Checkout (Full-Stack Persistent Order Submission)
checkoutForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  userName = document.getElementById("input-name").value.trim();
  userPhone = document.getElementById("input-phone").value.trim();
  userAddress = document.getElementById("input-address").value.trim();
  specialNote = document.getElementById("input-note").value.trim();

  if (!userName || !userPhone || !userAddress) {
    showToast("يرجى ملء جميع الحقول المطلوبة لضمان جودة التوصيل");
    return;
  }

  const orderItems = cart.map(item => ({
    productId: item.product.id,
    quantity: item.quantity
  }));

  try {
    // Send persistent order details to Express API
    const data = await apiRequest('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        customerName: userName,
        customerPhone: userPhone,
        deliveryAddress: userAddress,
        specialNote,
        items: orderItems
      })
    });

    if (data.success) {
      orderId = data.order.id;
      checkoutStep = "success";
      showToast("تم تسجيل طلبك بنجاح وسنتواصل معك قريباً لتأكيده! 🎉");
      
      // Reset local cart
      cart = [];
      updateCartMetrics();
    }
  } catch (err) {
    showToast(err.message || "فشل إرسال طلبك إلى الخادم");
  }
});

// Return home buttons
startShoppingBtn.addEventListener("click", closeCart);
successReturnBtn.addEventListener("click", resetOrderFlow);

brandLogo.addEventListener("click", () => {
  activeCategory = "الكل";
  searchQuery = "";
  searchInput.value = "";
  renderCategories();
  renderProducts();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================
// --- NEW LISTENABLE AUTH & ADMIN EVENTS ---
// ==========================================

// Dropdown toggle
authUserBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  authUserDropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  authUserDropdown.classList.add("hidden");
});

// Open auth modal
authLoginBtn.addEventListener("click", openAuthModal);
closeAuthModalBtn.addEventListener("click", closeAuthModal);
authModalOverlay.addEventListener("click", closeAuthModal);

// Toggling tabs in Auth modal
tabLogin.addEventListener("click", () => switchAuthTab('login'));
tabRegister.addEventListener("click", () => switchAuthTab('register'));

// Login form submit
formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("login-username").value.trim();
  const passwordInput = document.getElementById("login-password").value;
  
  try {
    const data = await apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username: usernameInput, password: passwordInput })
    });
    
    if (data.success) {
      authToken = data.token;
      currentUser = data.user;
      localStorage.setItem("authToken", authToken);
      showToast("تم تسجيل الدخول بنجاح! ✨");
      closeAuthModal();
      updateAuthUI();
      updateCartMetrics(); // Updates inputs in checkout drawer
    }
  } catch (err) {
    showToast(err.message || "خطأ في تسجيل الدخول");
  }
});

// Register form submit
formRegister.addEventListener("submit", async (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("register-username").value.trim();
  const nameInput = document.getElementById("register-name").value.trim();
  const passwordInput = document.getElementById("register-password").value;
  const confirmPasswordInput = document.getElementById("register-confirm-password").value;
  
  if (passwordInput !== confirmPasswordInput) {
    showToast("كلمة المرور وتأكيدها غير متطابقين");
    return;
  }

  try {
    const data = await apiRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameInput,
        name: nameInput,
        password: passwordInput,
        confirmPassword: confirmPasswordInput
      })
    });
    
    if (data.success) {
      authToken = data.token;
      currentUser = data.user;
      localStorage.setItem("authToken", authToken);
      showToast("تم إنشاء الحساب بنجاح! 🎉");
      closeAuthModal();
      updateAuthUI();
      updateCartMetrics();
    }
  } catch (err) {
    showToast(err.message || "خطأ في إنشاء الحساب");
  }
});

// Logout action
btnLogout.addEventListener("click", () => {
  clearSession();
  showToast("تم تسجيل الخروج بنجاح");
  updateAuthUI();
  // Clear inputs
  document.getElementById("input-name").value = "";
  document.getElementById("input-phone").value = "";
  document.getElementById("input-address").value = "";
  updateCartMetrics();
});

// History modal triggers
btnViewHistory.addEventListener("click", openHistoryModal);
closeHistoryModalBtn.addEventListener("click", closeHistoryModal);
historyModalOverlay.addEventListener("click", closeHistoryModal);

// Cancel order by customer listener
historyItemsContainer.addEventListener("click", async (e) => {
  const cancelBtn = e.target.closest("[data-cancel-order-id]");
  if (cancelBtn) {
    const oId = cancelBtn.dataset.cancelOrderId;
    if (confirm(`هل أنت متأكد من رغبتك في إلغاء الطلب ${oId}؟`)) {
      try {
        const data = await apiRequest(`/api/orders/${oId}/cancel`, {
          method: 'PATCH'
        });
        if (data.success) {
          showToast("تم إلغاء طلبك بنجاح");
          await loadOrderHistory();
        }
      } catch (err) {
        showToast(err.message || "فشل إلغاء الطلب");
      }
    }
  }
});

// Admin dashboard triggers
btnAdminDashboard.addEventListener("click", openAdminModal);
closeAdminModalBtn.addEventListener("click", closeAdminModal);
adminModalOverlay.addEventListener("click", closeAdminModal);
adminSubtabOrders.addEventListener("click", () => switchAdminSubtab('orders'));
if (adminSubtabProducts) {
  adminSubtabProducts.addEventListener("click", () => switchAdminSubtab('products'));
}
adminSubtabAddProduct.addEventListener("click", () => {
  // Clear any existing edit mode state when adding a new product
  document.getElementById("prod-edit-id").value = "";
  formAddProduct.reset();
  document.getElementById("admin-product-form-title").textContent = "تعبئة بيانات صنف الحلويات الجديد";
  document.getElementById("admin-product-submit-btn").textContent = "تأكيد ونشر الصنف الجديد في قائمة المعروضات ✨";
  document.getElementById("upload-status-text").classList.add("hidden");
  switchAdminSubtab('addproduct');
});

// Admin order status update and order deletion delegators
adminOrdersList.addEventListener("click", async (e) => {
  const deleteBtn = e.target.closest("[data-delete-order-id]");
  if (deleteBtn) {
    const oId = deleteBtn.dataset.deleteOrderId;
    if (confirm(`هل أنت متأكد من رغبتك في حذف الطلب ${oId}؟`)) {
      try {
        const data = await apiRequest(`/api/orders/${oId}`, { method: 'DELETE' });
        if (data.success) {
          showToast("تم حذف الطلب بنجاح");
          await loadAdminOrders();
        }
      } catch (err) {
        showToast(err.message || "فشل حذف الطلب");
      }
    }
  }
});

// Status change select change
adminOrdersList.addEventListener("change", async (e) => {
  const select = e.target.closest(".status-updater");
  if (select) {
    const oId = select.dataset.orderId;
    const newStatus = select.value;
    try {
      const data = await apiRequest(`/api/orders/${oId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus })
      });
      if (data.success) {
        showToast("تم تحديث حالة الطلب");
        await loadAdminOrders();
      }
    } catch (err) {
      showToast(err.message || "فشل تحديث حالة الطلب");
    }
  }
});

// Admin products list actions delegation (Edit / Delete)
if (adminProductsList) {
  adminProductsList.addEventListener("click", async (e) => {
    // Delete product click
    const deleteBtn = e.target.closest("[data-delete-product-id]");
    if (deleteBtn) {
      const pId = deleteBtn.dataset.deleteProductId;
      if (confirm("هل أنت متأكد من رغبتك في حذف هذا المنتج نهائياً من المتجر؟")) {
        try {
          const data = await apiRequest(`/api/products/${pId}`, { method: 'DELETE' });
          if (data.success) {
            showToast("تم حذف المنتج بنجاح");
            
            // Reload PRODUCTS state and refresh lists
            const fresh = await apiRequest('/api/products');
            if (fresh.success) {
              PRODUCTS = fresh.products;
            }
            renderProducts();
            loadAdminProducts();
          }
        } catch (err) {
          showToast(err.message || "فشل حذف المنتج");
        }
      }
      return;
    }

    // Edit product click
    const editBtn = e.target.closest("[data-edit-product-id]");
    if (editBtn) {
      const pId = editBtn.dataset.editProductId;
      const prod = PRODUCTS.find(p => p.id === pId);
      if (prod) {
        // Fill form fields
        document.getElementById("prod-edit-id").value = prod.id;
        document.getElementById("prod-name").value = prod.name;
        document.getElementById("prod-category").value = prod.category;
        document.getElementById("prod-price").value = prod.price;
        document.getElementById("prod-image").value = prod.image;
        document.getElementById("prod-desc").value = prod.description;
        document.getElementById("prod-ingredients").value = prod.ingredients;
        
        // Update Title & buttons
        document.getElementById("admin-product-form-title").textContent = "تعديل بيانات صنف الحلويات";
        document.getElementById("admin-product-submit-btn").textContent = "حفظ التعديلات الجديدة ✨";
        adminSubtabAddProduct.textContent = "تعديل المنتج 📝";
        
        // Hide upload status message
        document.getElementById("upload-status-text").classList.add("hidden");

        // Open addproduct tab
        switchAdminSubtab('addproduct');
      }
    }
  });
}

// Upload file button handler
if (btnUploadFile) {
  btnUploadFile.addEventListener("click", () => {
    if (!prodImageFile.files || prodImageFile.files.length === 0) {
      showToast("يرجى اختيار ملف صورة أولاً من جهازك");
      return;
    }

    const file = prodImageFile.files[0];

    try {
      btnUploadFile.disabled = true;
      btnUploadFile.textContent = "جاري المعالجة... ⏳";

      const reader = new FileReader();
      reader.onload = function(e) {
        const base64Data = e.target.result;
        
        // Prefill text input field with base64 data url
        document.getElementById("prod-image").value = base64Data;
        
        // Update success text
        uploadStatusText.textContent = `تم معالجة وحفظ الصورة محلياً بنجاح! ✨`;
        uploadStatusText.classList.remove("hidden");
        
        showToast("تم تحويل وحفظ ملف الصورة بنجاح على المتصفح! 🍰");
        btnUploadFile.disabled = false;
        btnUploadFile.textContent = "رفع الآن 📤";
      };
      
      reader.onerror = function() {
        throw new Error("فشل قراءة الملف");
      };

      reader.readAsDataURL(file);
    } catch (err) {
      showToast(err.message || "فشل معالجة الصورة");
      btnUploadFile.disabled = false;
      btnUploadFile.textContent = "رفع الآن 📤";
    }
  });
}

// Add/Edit Product Form Submit
formAddProduct.addEventListener("submit", async (e) => {
  e.preventDefault();
  const editId = document.getElementById("prod-edit-id").value;
  const prodName = document.getElementById("prod-name").value.trim();
  const prodCat = document.getElementById("prod-category").value;
  const prodPrice = parseFloat(document.getElementById("prod-price").value);
  const prodImage = document.getElementById("prod-image").value.trim();
  const prodDesc = document.getElementById("prod-desc").value.trim();
  const prodIngs = document.getElementById("prod-ingredients").value.trim();
  
  if (!prodImage) {
    showToast("يرجى تحديد صورة أو رفع ملف أولاً");
    return;
  }

  try {
    let data;
    if (editId) {
      // Edit Mode
      data = await apiRequest(`/api/products/${editId}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: prodName,
          category: prodCat,
          price: prodPrice,
          image: prodImage,
          description: prodDesc,
          ingredients: prodIngs
        })
      });
      if (data.success) {
        showToast("تم تحديث بيانات المنتج بنجاح! ✨");
      }
    } else {
      // Create Mode
      data = await apiRequest('/api/products', {
        method: 'POST',
        body: JSON.stringify({
          name: prodName,
          category: prodCat,
          price: prodPrice,
          image: prodImage,
          description: prodDesc,
          ingredients: prodIngs
        })
      });
      if (data.success) {
        showToast("تمت إضافة المنتج الجديد لقائمة المعروضات! ✨");
      }
    }
    
    if (data.success) {
      // Refetch products list
      const fresh = await apiRequest('/api/products');
      if (fresh.success) {
        PRODUCTS = fresh.products;
      }
      renderProducts();
      
      // Reset form
      formAddProduct.reset();
      document.getElementById("prod-edit-id").value = "";
      document.getElementById("admin-product-form-title").textContent = "تعبئة بيانات صنف الحلويات الجديد";
      document.getElementById("admin-product-submit-btn").textContent = "تأكيد ونشر الصنف الجديد في قائمة المعروضات ✨";
      uploadStatusText.classList.add("hidden");
      
      switchAdminSubtab('products');
    }
  } catch (err) {
    showToast(err.message || "فشل معالجة الطلب");
  }
});

// --- SETTINGS DIALOG LISTENERS & PROFILE SUBMIT ---
function openSettingsModal() {
  if (!currentUser) {
    showToast("يرجى تسجيل الدخول أولاً للوصول إلى الإعدادات");
    return;
  }
  
  // Fill values
  settingsNameInput.value = currentUser.name || "";
  settingsPhoneInput.value = currentUser.phone || "";
  settingsAddressInput.value = currentUser.address || "";
  
  settingsModal.classList.remove("pointer-events-none");
  settingsModalOverlay.classList.remove("opacity-0");
  settingsModalOverlay.classList.add("opacity-100");
  settingsModalDialog.classList.remove("scale-95", "opacity-0");
  settingsModalDialog.classList.add("scale-100", "opacity-100");
}

function closeSettingsModal() {
  settingsModalOverlay.classList.remove("opacity-100");
  settingsModalOverlay.classList.add("opacity-0");
  settingsModalDialog.classList.remove("scale-100", "opacity-100");
  settingsModalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    settingsModal.classList.add("pointer-events-none");
  }, 500);
}

if (btnSettings) {
  btnSettings.addEventListener("click", (e) => {
    e.stopPropagation();
    openSettingsModal();
  });
}
if (closeSettingsModalBtn) {
  closeSettingsModalBtn.addEventListener("click", closeSettingsModal);
}
if (settingsModalOverlay) {
  settingsModalOverlay.addEventListener("click", closeSettingsModal);
}

// Language toggle clicks
if (langBtnAr) {
  langBtnAr.addEventListener("click", () => {
    applyLanguage('ar');
    showToast("تم تحويل لغة الموقع إلى العربية 🇸🇦");
  });
}
if (langBtnEn) {
  langBtnEn.addEventListener("click", () => {
    applyLanguage('en');
    showToast("Website language switched to English 🇬🇧");
  });
}

// Settings Profile Form Submit
if (formSettings) {
  formSettings.addEventListener("submit", async (e) => {
    e.preventDefault();
    const updatedName = settingsNameInput.value.trim();
    const updatedPhone = settingsPhoneInput.value.trim();
    const updatedAddress = settingsAddressInput.value.trim();

    if (!updatedName) {
      showToast("حقل الاسم مطلوب");
      return;
    }

    try {
      const data = await apiRequest('/api/auth/profile', {
        method: 'PUT',
        body: JSON.stringify({
          name: updatedName,
          phone: updatedPhone,
          address: updatedAddress
        })
      });

      if (data.success) {
        currentUser = data.user;
        showToast(currentLang === 'en' ? "Profile settings updated successfully! ✨" : "تم تحديث إعدادات الحساب بنجاح! ✨");
        updateAuthUI();
        closeSettingsModal();
      }
    } catch (err) {
      showToast(err.message || "فشل تحديث الإعدادات");
    }
  });
}


// --- SHOP INFO MODAL FUNCTIONS ---
let mapInstance = null;

function switchInfoTab(tabName) {
  // Hide all contents
  tabContentStory.classList.add("hidden");
  tabContentLocation.classList.add("hidden");
  tabContentContact.classList.add("hidden");

  // De-activate all tabs
  tabBtnStory.className = "pb-2 border-b-2 border-transparent transition-all hover:text-[#3e2723] cursor-pointer text-[#6d4c41]";
  tabBtnLocation.className = "pb-2 border-b-2 border-transparent transition-all hover:text-[#3e2723] cursor-pointer text-[#6d4c41]";
  tabBtnContact.className = "pb-2 border-b-2 border-transparent transition-all hover:text-[#3e2723] cursor-pointer text-[#6d4c41]";

  if (tabName === 'story') {
    tabContentStory.classList.remove("hidden");
    tabBtnStory.className = "pb-2 border-b-2 border-[#3e2723] text-[#3e2723] transition-all cursor-pointer font-extrabold";
  } else if (tabName === 'location') {
    tabContentLocation.classList.remove("hidden");
    tabBtnLocation.className = "pb-2 border-b-2 border-[#3e2723] text-[#3e2723] transition-all cursor-pointer font-extrabold";
    // Initialize or invalidate Map size
    setTimeout(() => {
      initInfoMap();
    }, 100);
  } else if (tabName === 'contact') {
    tabContentContact.classList.remove("hidden");
    tabBtnContact.className = "pb-2 border-b-2 border-[#3e2723] text-[#3e2723] transition-all cursor-pointer font-extrabold";
  }
}

function initInfoMap() {
  if (mapInstance) {
    setTimeout(() => {
      mapInstance.invalidateSize();
    }, 200);
    return;
  }
  
  if (typeof L === 'undefined') {
    console.warn("Leaflet library not loaded yet.");
    return;
  }

  // Set coordinates to a scenic spot in Cairo (e.g. Korba, Heliopolis: 30.0811, 31.3259)
  mapInstance = L.map('info-map', {
    center: [30.0811, 31.3259],
    zoom: 16,
    zoomControl: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  const sweetIcon = L.divIcon({
    className: 'custom-map-marker',
    html: `<div class="w-8 h-8 rounded-full bg-[#3e2723] border-2 border-[#c5a059] flex items-center justify-center text-white shadow-lg animate-bounce">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16h16"/><path d="M10 9h4V6a2 2 0 0 0-4 0z"/><path d="M9 13v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });

  L.marker([30.0811, 31.3259], { icon: sweetIcon }).addTo(mapInstance)
    .bindPopup(`<div class="text-right font-sans p-1">
                  <h4 class="font-bold text-[#3e2723] text-xs">متجر الطيبات للحلويات</h4>
                  <p class="text-[10px] text-[#6d4c41] mt-1">حلويات فاخرة تُصنع بحب يومياً ✨</p>
                </div>`)
    .openPopup();

  setTimeout(() => {
    mapInstance.invalidateSize();
  }, 300);
}

function openInfoModal(initialTab = 'story') {
  infoModal.classList.remove("pointer-events-none");
  infoModalOverlay.classList.remove("opacity-0");
  infoModalOverlay.classList.add("opacity-100");
  infoModalDialog.classList.remove("scale-95", "opacity-0");
  infoModalDialog.classList.add("scale-100", "opacity-100");
  
  switchInfoTab(initialTab);
}

function closeInfoModal() {
  infoModalOverlay.classList.remove("opacity-100");
  infoModalOverlay.classList.add("opacity-0");
  infoModalDialog.classList.remove("scale-100", "opacity-100");
  infoModalDialog.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    infoModal.classList.add("pointer-events-none");
  }, 500);
}

// Bind tabs clicks
if (tabBtnStory) tabBtnStory.addEventListener("click", () => switchInfoTab('story'));
if (tabBtnLocation) tabBtnLocation.addEventListener("click", () => switchInfoTab('location'));
if (tabBtnContact) tabBtnContact.addEventListener("click", () => switchInfoTab('contact'));

// Bind header navigation clicks
const headerLinks = document.querySelectorAll("header a");
if (headerLinks.length >= 3) {
  headerLinks[0].addEventListener("click", (e) => {
    e.preventDefault();
    openInfoModal('story');
  });
  headerLinks[1].addEventListener("click", (e) => {
    e.preventDefault();
    openInfoModal('location');
  });
  headerLinks[2].addEventListener("click", (e) => {
    e.preventDefault();
    openInfoModal('contact');
  });
}

// Close events
if (closeInfoModalBtn) closeInfoModalBtn.addEventListener("click", closeInfoModal);
if (infoModalOverlay) infoModalOverlay.addEventListener("click", closeInfoModal);

// Contact form submit
if (infoContactForm) {
  infoContactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contact-input-name");
    const phoneInput = document.getElementById("contact-input-phone");
    const msgInput = document.getElementById("contact-input-msg");

    // Success toast based on language
    const successMsg = currentLang === 'en' 
      ? "Thank you! Your inquiry was sent successfully. We will call you soon! ✨"
      : "شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك في أقرب وقت! ✨";
      
    showToast(successMsg);
    
    // Reset inputs
    if (nameInput) nameInput.value = "";
    if (phoneInput) phoneInput.value = "";
    if (msgInput) msgInput.value = "";
    
    closeInfoModal();
  });
}


// --- INITIALIZE ---
async function init() {
  // 1. Verify User Token session on startup
  await verifySession();
  
  // 2. Fetch products dynamically from backend
  try {
    const data = await apiRequest('/api/products');
    if (data.success && data.products.length > 0) {
      PRODUCTS = data.products;
    }
  } catch (err) {
    console.error('Could not fetch products from database:', err);
  }

  // 3. Render all UI modules
  applyLanguage(currentLang);
  updateCartMetrics();
  updateFavoritesUI();
  updateAuthUI();
}

init();
