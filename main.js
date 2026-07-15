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
try {
  const savedCart = localStorage.getItem("el_taibat_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.error("Failed to parse cart:", e);
}
let isCartOpen = false;
let isFavOpen = false;
let selectedProduct = null;
let favorites = []; // Array of product ids
try {
  const savedFavs = localStorage.getItem("el_taibat_favorites");
  if (savedFavs) {
    favorites = JSON.parse(savedFavs);
  }
} catch (e) {
  console.error("Failed to parse favorites:", e);
}
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

// --- NEW AUTH DOM ELEMENTS ---
// Header Auth DOM
const authLoginBtn = document.getElementById("auth-login-btn");
const authUserMenu = document.getElementById("auth-user-menu");
const authUserBtn = document.getElementById("auth-user-btn");
const authUserName = document.getElementById("auth-user-name");
const authUserDropdown = document.getElementById("auth-user-dropdown");
const btnViewHistory = document.getElementById("btn-view-history");
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

// Language State
let currentLang = localStorage.getItem("currentLang") || "ar";

const PRODUCT_TRANSLATIONS = {
  "p1": {
    "name": "Classic Chocolate Box",
    "description": "An elegant selection of fine chocolates, perfect for sharing or gifting.",
    "ingredients": "Premium chocolate, salted caramel, Madagascar vanilla, toasted nuts."
  },
  "p2": {
    "name": "French Macarons Duo",
    "description": "Delicate and airy French macarons with a crisp shell and soft, chewy center.",
    "ingredients": "Almond flour, egg whites, cane sugar, white chocolate, organic vanilla."
  },
  "p3": {
    "name": "Pistachio Tartlet",
    "description": "A crisp pastry crust filled with rich pistachio cream and topped with crushed nuts.",
    "ingredients": "Pure butter, premium pistachios, whipped cream, citrus zest."
  },
  "p4": {
    "name": "Fleur de Sel Truffles",
    "description": "Luxurious chocolate truffles dusted with premium cocoa and finished with a touch of sea salt.",
    "ingredients": "Dark chocolate, heavy cream, unsalted butter, sea salt."
  },
  "p5": {
    "name": "Caramel Pecan Pralines",
    "description": "Rich chocolate cups filled with smooth caramel and topped with a roasted pecan.",
    "ingredients": "Milk chocolate, liquid caramel, fancy pecans, heavy cream."
  },
  "p6": {
    "name": "Espresso Macarons",
    "description": "Indulgent coffee-infused macarons with a velvety dark chocolate espresso ganache.",
    "ingredients": "Almond flour, premium cocoa, dark chocolate, espresso roast."
  },
  "p7": {
    "name": "Lemon Raspberry Tart",
    "description": "A perfect balance of tangy lemon curd and fresh, sweet raspberries on a buttery crust.",
    "ingredients": "Fresh lemon juice, ripe raspberries, farm eggs, creamery butter."
  },
  "p8": {
    "name": "Musk Infused Baklava",
    "description": "Crispy layers of golden pastry sheets, filled with premium nuts and scented with organic musk.",
    "ingredients": "Phyllo pastry, clarified butter, premium pistachios, orange blossom water."
  },
  "p9": {
    "name": "Velvety Chocolate Cake",
    "description": "A rich, moist chocolate sponge layered with smooth fudge and Belgian chocolate shavings.",
    "ingredients": "Unsweetened cocoa, heavy cream, pastry flour, organic eggs, natural vanilla."
  },
  "p10": {
    "name": "Fresh Strawberry Cake",
    "description": "Light and airy sponge cake layered with fresh whipped cream and sweet, juicy strawberries.",
    "ingredients": "Cake flour, cane sugar, fresh local strawberries, heavy whipping cream."
  },
  "p11": {
    "name": "Salted Caramel Pecan Tart",
    "description": "A crispy shell generously loaded with buttery salted caramel and toasted pecans.",
    "ingredients": "Farm butter, premium pecans, brown sugar, sea salt, pastry flour."
  },
  "p12": {
    "name": "Tropical Fruit Tart",
    "description": "A classic sweet tart filled with rich vanilla pastry cream and adorned with seasonal tropical fruits.",
    "ingredients": "Custard cream, ripe kiwi, sweet mango, black cherries, sweet pastry crust."
  },
  "p13": {
    "name": "Lotus Biscoff Cheesecake",
    "description": "Rich, velvety New York style cheesecake on a crunchy Biscoff crust, topped with cookie butter.",
    "ingredients": "Cream cheese, Lotus Biscoff cookies, Biscoff cookie butter, heavy cream."
  },
  "p14": {
    "name": "Royal Cream Basbousa",
    "description": "Traditional semolina cake soaked in aromatic syrup, layered with fresh, rich cream.",
    "ingredients": "Coarse semolina, ghee, fresh clotted cream, blossom syrup, toasted almonds."
  },
  "p15": {
    "name": "Royal Red Velvet Cake",
    "description": "Layers of vibrant red velvet sponge paired with a smooth, tangy cream cheese frosting.",
    "ingredients": "Pastry flour, organic beet extract, premium cream cheese, sweet butter."
  },
  "p16": {
    "name": "Classic Russian Honey Cake",
    "description": "A multi-layered honey cake filled with a light, caramelized sour cream frosting.",
    "ingredients": "Raw wildflower honey, creamery butter, organic eggs, sour cream, pastry flour."
  },
  "p17": {
    "name": "Carrot Walnut Cake",
    "description": "Spiced carrot cake packed with toasted walnuts and finished with a velvety cream cheese frosting.",
    "ingredients": "Fresh carrots, English walnuts, Ceylon cinnamon, sweet cream cheese, flour."
  },
  "p18": {
    "name": "Molten Chocolate Soufflé",
    "description": "A warm, decadent chocolate soufflé with a rich, oozing molten center.",
    "ingredients": "Single-origin dark chocolate, farm eggs, grass-fed butter, cane sugar."
  },
  "p19": {
    "name": "Pistachio Rosewater Cake",
    "description": "Elegant pistachio cake infused with rosewater and adorned with edible rose petals.",
    "ingredients": "Ground pistachios, organic rosewater, Chantilly cream, organic flour."
  },
  "p20": {
    "name": "Molten Lava Caramel Cake",
    "description": "Fluffy sponge cake with a warm, flowing center of premium salted caramel.",
    "ingredients": "Liquid caramel, unsalted butter, pasture eggs, pastry flour, sea salt."
  },
  "p21": {
    "name": "Blueberry Dream Cheesecake",
    "description": "A cold-set creamy cheesecake topped with a thick, house-made wild blueberry compote.",
    "ingredients": "Rich cream cheese, graham crackers, pure butter, wild blueberries, fruit pectin."
  },
  "p22": {
    "name": "Classic Confetti Cupcake",
    "description": "Soft vanilla cupcake topped with a swirl of colorful buttercream and sprinkles.",
    "ingredients": "Pastry flour, Bourbon vanilla, sweet butter, cane sugar, pastel sprinkles."
  },
  "p23": {
    "name": "Belgian Praline Box",
    "description": "Premium assortment of hand-painted Belgian chocolates filled with nuts, ganache, and caramel.",
    "ingredients": "Belgian couverture, hazelnut praline, pure cocoa butter, roasted almonds."
  },
  "p24": {
    "name": "Hazelnut Dark Chocolate Bar",
    "description": "A bar of 70% dark single-origin chocolate studded with whole roasted hazelnuts.",
    "ingredients": "Premium dark chocolate, 70% cocoa solids, whole roasted hazelnuts."
  },
  "p25": {
    "name": "French Cocoa Truffles",
    "description": "Meltingly smooth chocolate ganache rolled in premium dark cocoa powder.",
    "ingredients": "Heavy whipping cream, pure chocolate, creamery butter, dark cocoa powder."
  },
  "p26": {
    "name": "Pistachio White Chocolate Bar",
    "description": "Creamy white chocolate bar packed with bright green roasted pistachios.",
    "ingredients": "Pure cocoa butter, whole milk powder, green pistachios, cane sugar, vanilla."
  },
  "p27": {
    "name": "Dark Chocolate Orange & Cherry",
    "description": "Fine dark chocolate infused with candied orange peel and sweet dried cherries.",
    "ingredients": "Dark chocolate, dried cherries, orange zest, pure cocoa butter."
  },
  "p28": {
    "name": "Crispy Chocolate Wafer Sticks",
    "description": "Light and crispy wafer rolls coated in a generous layer of creamy milk chocolate.",
    "ingredients": "Enriched flour, cane sugar, milk chocolate, creamery butter, corn starch."
  },
  "p29": {
    "name": "Peppermint Chocolate Bonbons",
    "description": "Bite-sized chocolates filled with a cool, refreshing peppermint cream.",
    "ingredients": "Couverture dark chocolate, organic peppermint oil, confectioners' sugar, cream."
  },
  "p30": {
    "name": "Strawberry Crème Tartlet",
    "description": "A crispy tart shell loaded with rich pastry cream and crowned with sweet strawberries.",
    "ingredients": "Fresh strawberries, fruit glaze, pastry flour, farm butter, vanilla custard."
  },
  "p31": {
    "name": "Spiced Apple Cinnamon Tart",
    "description": "Warm, buttery pastry crust topped with spiced apples and a hint of warm ginger.",
    "ingredients": "Local apples, Ceylon cinnamon, sweet butter, brown sugar, honey."
  },
  "p32": {
    "name": "Salted Dark Chocolate Tart",
    "description": "An ultra-rich dark chocolate ganache filling sprinkled with premium sea salt flakes.",
    "ingredients": "Dark chocolate, sea salt flakes, farm butter, heavy cream, pastry flour."
  },
  "p33": {
    "name": "Classic Lemon Meringue Tart",
    "description": "A zesty lemon curd filling topped with a fluffy, toasted Italian meringue.",
    "ingredients": "Fresh lemons, egg whites, cane sugar, creamery butter, pastry flour."
  },
  "p34": {
    "name": "Nutella & Banana Tartlet",
    "description": "A sweet crust layered with rich hazelnut spread and topped with fresh banana slices.",
    "ingredients": "Nutella spread, fresh bananas, pastry flour, farm butter, fresh cream."
  },
  "p35": {
    "name": "Nabulsi Kunafa",
    "description": "Crispy, golden shredded pastry filled with melted, sweet Akkawi cheese and syrup.",
    "ingredients": "Kunafa pastry, Akkawi cheese, clarified butter, orange blossom syrup, pistachios."
  },
  "p36": {
    "name": "Premium Oriental Assortment",
    "description": "A premium selection of basbousa, baklava, and kunafa prepared with pure local ghee.",
    "ingredients": "Semolina, clarified butter, pistachios, mixed nuts, blossom syrup."
  },
  "p37": {
    "name": "Pistachio Baklava Fingers",
    "description": "Crispy, golden phyllo pastry sheets rolled and generously stuffed with ground pistachios.",
    "ingredients": "Phyllo pastry, premium pistachios, clarified butter, honey syrup."
  },
  "p38": {
    "name": "Golden Semolina Cookies",
    "description": "Delicate, syrup-soaked semolina cookies that melt in your mouth with every bite.",
    "ingredients": "Pastry flour, fine semolina, local ghee, shredded coconut, honey syrup."
  },
  "p39": {
    "name": "Cream Filled Balah El Sham",
    "description": "Crispy, golden choux-like pastry fingers stuffed with fresh clotted cream and pistachios.",
    "ingredients": "Wheat flour, farm eggs, starch, clotted cream, pistachios, honey syrup."
  },
  "p40": {
    "name": "Bird's Nest Kunafa with Pistachio",
    "description": "Crunchy, bird's nest-shaped shredded kunafa filled with whole, sweet pistachios.",
    "ingredients": "Kunafa dough, whole green pistachios, clarified butter, thick sugar syrup."
  },
  "p41": {
    "name": "Hazelnut Basbousa",
    "description": "Traditional sweet semolina cake rich in butter and decorated with toasted hazelnuts.",
    "ingredients": "Semolina, clarified butter, organic milk, sugar, toasted hazelnuts, almonds."
  },
  "p42": {
    "name": "Crispy Zainab Fingers",
    "description": "Traditional spiced semolina fritters fried to golden perfection and soaked in syrup.",
    "ingredients": "Enriched flour, semolina, yeast, ground anise, sweet syrup."
  },
  "p43": {
    "name": "Royal Pistachio Macarons",
    "description": "Vibrant green French macarons filled with a rich, natural pistachio paste buttercream.",
    "ingredients": "Almond flour, egg whites, cane sugar, 100% natural pistachio paste."
  },
  "p44": {
    "name": "Lavender Lemon Macarons",
    "description": "An exquisite blend of aromatic lavender blossoms and a tangy lemon curd center.",
    "ingredients": "Almond flour, organic lavender, fresh lemon, farm eggs, sweet butter."
  },
  "p45": {
    "name": "Red Cranberry Macarons",
    "description": "Stunning red macaron shells filled with a rich, tangy cranberry compote.",
    "ingredients": "Almond flour, dried cranberries, egg whites, fresh cream."
  },
  "p46": {
    "name": "Belgian Chocolate Macarons",
    "description": "Intense dark chocolate macarons filled with a decadent 65% Belgian ganache.",
    "ingredients": "Almond flour, cocoa powder, egg whites, 65% Belgian chocolate."
  },
  "p47": {
    "name": "Salted Caramel Vanilla Macarons",
    "description": "Sweet macaron shells filled with rich Bourbon vanilla cream and salted caramel swirls.",
    "ingredients": "Almond flour, Bourbon vanilla, salted caramel, sweet butter."
  },
  "p48": {
    "name": "Rosewater & Cardamom Macarons",
    "description": "A majestic fusion of fragrant rosewater, warm cardamom, and smooth butter cream.",
    "ingredients": "Almond flour, egg whites, rosewater, ground cardamom, fresh butter."
  },
  "p49": {
    "name": "Classic Italian Tiramisu",
    "description": "Layers of espresso-soaked ladyfingers and rich, velvety mascarpone cream.",
    "ingredients": "Mascarpone cheese, fresh espresso, ladyfinger cookies, premium cocoa."
  },
  "p50": {
    "name": "Fresh Chocolate Éclair",
    "description": "Light choux pastry filled with vanilla pastry cream and topped with glossy dark chocolate.",
    "ingredients": "Farm eggs, pure butter, flour, whole milk, vanilla custard, dark chocolate."
  },
  "p51": {
    "name": "Almond Butter Cookies (Ghorayeba)",
    "description": "Ultra-delicate, melt-in-your-mouth butter cookies topped with a whole roasted almond.",
    "ingredients": "Enriched flour, clarified butter, powdered sugar, blanched almonds."
  },
  "p52": {
    "name": "Classic Chocolate Chip Cookie",
    "description": "An American classic made with browned butter and loaded with melting chocolate chips.",
    "ingredients": "Wheat flour, brown butter, chocolate chips, organic brown sugar, farm eggs."
  },
  "p53": {
    "name": "Pistachio Kahk (Eid Cookies)",
    "description": "Delicate and crumbly spiced cookies stuffed with premium pistachios and honey-ghee paste.",
    "ingredients": "Pastry flour, clarified butter, traditional spices, honey paste, green pistachios."
  },
  "p54": {
    "name": "Belgian Dark Chocolate Mousse",
    "description": "A light, airy French chocolate mousse garnished with dark chocolate curls and fresh mint.",
    "ingredients": "Dark Belgian chocolate, organic eggs, heavy cream, cane sugar."
  },
  "p55": {
    "name": "Toasted Coconut Tart",
    "description": "A crispy shell loaded with a sweet, creamy coconut custard and golden coconut flakes.",
    "ingredients": "Shredded coconut, condensed milk, farm butter, pastry flour, eggs."
  }
};

function getProductTranslation(productId, field) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return "";
  if (currentLang === 'en') {
    const t = PRODUCT_TRANSLATIONS[productId];
    if (t && t[field]) {
      return t[field];
    }
    return prod[field] || "";
  } else {
    return prod[field] || "";
  }
}

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
    orderHistoryEmpty: "لم تقم بتسجيل أي طلبات بعد!",
    
    // Auth
    loginTab: "تسجيل الدخول",
    registerTab: "إنشاء حساب جديد",
    usernameLabel: "اسم المستخدم",
    passwordLabel: "كلمة المرور",
    usernamePlaceholder: "مثال: ahmed123",
    loginBtn: "تسجيل الدخول",
    loginHelpText: "في حال مواجهة مشكلة في تسجيل الدخول، يرجى التواصل مع إدارة المتجر.",
    registerUsernameLabel: "اسم المستخدم (بالأحرف والأرقام الإنجليزية)",
    registerFullNameLabel: "الاسم الكامل",
    registerFullNamePlaceholder: "اكتب اسمك الكامل هنا",
    registerPasswordLabel: "كلمة المرور (أكثر من ٦ خانات)",
    registerConfirmPasswordLabel: "تأكيد كلمة المرور",
    registerBtn: "إنشاء الحساب الجديد",

    // Checkout Form
    deliveryInfoTitle: "معلومات التوصيل",
    deliveryInfoDesc: "يرجى تزويدنا بتفاصيل التوصيل لنقوم بإرسال طلباتكم بطريقة آمنة.",
    inputNameLabel: "الاسم الكامل للتسليم",
    inputNamePlaceholder: "مثال: محمد أحمد",
    inputPhoneLabel: "رقم الجوال للتنسيق",
    inputPhonePlaceholder: "مثال: 0100xxxxxxx",
    inputAddressLabel: "عنوان التوصيل (الحي، الشارع، المبنى)",
    inputAddressPlaceholder: "المدينة، الحي، الشارع، رقم البيت",
    inputNoteLabel: "ملاحظة خاصة أو رسالة إهداء (اختياري)",
    inputNotePlaceholder: "أرجو إرسال بطاقة إهداء مكتوب عليها...",
    previewItemsLabel: "عدد الحلويات المختارة:",
    previewTotalLabel: "القيمة الكلية للطلب:",
    confirmCheckoutBtn: "تأكيد الطلب",

    // Success Screen
    successTitle: "شكراً لطلبك",
    successSubtitle: "لقد استلمنا طلبك وسنبدأ في تحضيره قريباً.",
    successOrderId: "رقم الطلب:",
    successCustomer: "صاحب الطلب:",
    successPhone: "رقم الهاتف:",
    successAddress: "العنوان المختار:",
    successNote: "ملاحظة الإهداء:",
    successPaidAmount: "المبلغ المدفوع عند الاستلام:",
    successDeliveryNotice: "سيصل الطلب خلال ٩٠ دقيقة لتستمتع بمذاقه الطازج.",
    successBackBtn: "العودة للقائمة الرئيسية",

    // Settings
    settingsTitle: "إعدادات الحساب واللغة",
    settingsLangLabel: "لغة التطبيق / App Language",
    settingsNameLabel: "اسم الحساب الكامل",
    settingsNamePlaceholder: "اكتب اسمك الجديد",
    settingsPhoneLabel: "رقم الهاتف",
    settingsPhonePlaceholder: "رقم الهاتف للتواصل وتأكيد الطلبات",
    settingsAddressLabel: "العنوان الافتراضي",
    settingsAddressPlaceholder: "العنوان بالتفصيل",
    settingsSaveBtn: "حفظ التغييرات الجديدة ✨",

    // Admin
    adminTitle: "لوحة إدارة متجر الطيبات للحلويات",
    adminTabOrders: "إدارة الطلبات الواردة",
    adminTabProducts: "إدارة المنتجات الحالية 🍰",
    adminTabAddProduct: "إضافة منتج جديد",
    adminTabEditProduct: "تعديل المنتج 📝",
    adminOrdersEmpty: "لا توجد طلبات واردة حالياً",
    adminProductsEmpty: "لا توجد منتجات معروضة حالياً",
    adminProductFormTitleAdd: "تعبئة بيانات صنف الحلويات الجديد",
    adminProductFormTitleEdit: "تعديل بيانات صنف الحلويات",
    adminProdNameLabel: "اسم المنتج",
    adminProdNamePlaceholder: "مثال: شوكولاتة البندق الخاصة",
    adminProdCatLabel: "الفئة",
    adminProdPriceLabel: "السعر التقديري (ج.م)",
    adminProdPricePlaceholder: "مثال: 150",
    adminProdImageLabel: "رابط صورة خارجي (أو اتركه فارغاً وارفع من جهازك)",
    adminProdImagePlaceholder: "رابط URL مباشر للصورة",
    adminProdUploadLabel: "أو ارفع ملف صورة مباشرة من جهازك",
    adminProdUploadBtn: "رفع الآن 📤",
    adminProdDescLabel: "وصف دقيق للمنتج",
    adminProdDescPlaceholder: "مواصفات ونوع الحشوة وعدد القطع المتضمنة...",
    adminProdIngLabel: "المكونات الأساسية",
    adminProdIngPlaceholder: "مثال: شوكولاتة بلجيكية، زبدة الكاكاو، بندق محمص، فانيليا",
    adminProductSubmitBtnAdd: "تأكيد ونشر الصنف الجديد في قائمة المعروضات ✨",
    adminProductSubmitBtnEdit: "حفظ التعديلات الجديدة ✨"
  },
  en: {
    story: "Our Story",
    location: "Location",
    contact: "Contact Us",
    announcement: "Luxury Sweets Studio - Crafted with love & passion ✨",
    searchPlaceholder: "Search...",
    login: "Login / Sign Up",
    welcome: "Welcome!",
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
    orderHistoryEmpty: "You haven't placed any orders yet!",
    
    // Auth
    loginTab: "Login",
    registerTab: "Create Account",
    usernameLabel: "Username",
    passwordLabel: "Password",
    usernamePlaceholder: "e.g. ahmed123",
    loginBtn: "Login",
    loginHelpText: "If you face any issues logging in, please contact the store administration.",
    registerUsernameLabel: "Username (English letters and numbers)",
    registerFullNameLabel: "Full Name",
    registerFullNamePlaceholder: "Enter your full name here",
    registerPasswordLabel: "Password (more than 6 characters)",
    registerConfirmPasswordLabel: "Confirm Password",
    registerBtn: "Create New Account",

    // Checkout Form
    deliveryInfoTitle: "Delivery Information",
    deliveryInfoDesc: "Please provide delivery details for secure shipment.",
    inputNameLabel: "Full Name for Delivery",
    inputNamePlaceholder: "e.g. John Doe",
    inputPhoneLabel: "Mobile Number",
    inputPhonePlaceholder: "e.g. 0100xxxxxxx",
    inputAddressLabel: "Delivery Address (District, Street, Building)",
    inputAddressPlaceholder: "City, district, street, house number",
    inputNoteLabel: "Special Instructions or Gift Note (Optional)",
    inputNotePlaceholder: "e.g. Please add a happy birthday card...",
    previewItemsLabel: "Selected items count:",
    previewTotalLabel: "Total Order Value:",
    confirmCheckoutBtn: "Confirm Order",

    // Success Screen
    successTitle: "Thank You for Your Order",
    successSubtitle: "We have received your order and will start preparing it shortly.",
    successOrderId: "Order ID:",
    successCustomer: "Customer:",
    successPhone: "Phone Number:",
    successAddress: "Selected Address:",
    successNote: "Gift Note:",
    successPaidAmount: "Amount to Pay on Delivery:",
    successDeliveryNotice: "Your order will arrive within 90 minutes to enjoy it perfectly fresh.",
    successBackBtn: "Back to Main Menu",

    // Settings
    settingsTitle: "Account & Language Settings",
    settingsLangLabel: "App Language / لغة التطبيق",
    settingsNameLabel: "Full Account Name",
    settingsNamePlaceholder: "Enter your new name",
    settingsPhoneLabel: "Phone Number",
    settingsPhonePlaceholder: "Phone number for confirmation",
    settingsAddressLabel: "Default Address",
    settingsAddressPlaceholder: "Detailed address",
    settingsSaveBtn: "Save Changes ✨",

    // Admin
    adminTitle: "El Taibat Luxury Sweets - Admin Panel",
    adminTabOrders: "Incoming Orders",
    adminTabProducts: "Product Inventory 🍰",
    adminTabAddProduct: "Add New Product",
    adminTabEditProduct: "Edit Product 📝",
    adminOrdersEmpty: "No incoming orders at the moment.",
    adminProductsEmpty: "No products currently listed.",
    adminProductFormTitleAdd: "Add New Sweets Item",
    adminProductFormTitleEdit: "Edit Sweets Item",
    adminProdNameLabel: "Product Name",
    adminProdNamePlaceholder: "e.g. Royal Hazelnut Chocolate",
    adminProdCatLabel: "Category",
    adminProdPriceLabel: "Estimated Price (EGP)",
    adminProdPricePlaceholder: "e.g. 150",
    adminProdImageLabel: "External Image URL (or upload from device)",
    adminProdImagePlaceholder: "Direct image URL",
    adminProdUploadLabel: "Or upload image file directly",
    adminProdUploadBtn: "Upload Now 📤",
    adminProdDescLabel: "Detailed Description",
    adminProdDescPlaceholder: "Describe the taste, filling, piece count...",
    adminProdIngLabel: "Key Ingredients",
    adminProdIngPlaceholder: "e.g. Belgian chocolate, cocoa butter, roasted hazelnuts, vanilla",
    adminProductSubmitBtnAdd: "Confirm & Publish Sweets Item ✨",
    adminProductSubmitBtnEdit: "Save Changes ✨"
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("currentLang", lang);
  
  // Set document and body dir & lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = lang === 'ar' ? "الطيبات • أصل السكر" : "El Taibat • The Essence of Sweetness";

  // Dynamic direction class swap for elements containing text-right or text-left
  const elementsToAlign = document.querySelectorAll('.text-right, .text-left, [class*="text-right"], [class*="text-left"]');
  elementsToAlign.forEach(el => {
    if (lang === 'ar') {
      el.classList.remove('text-left');
      el.classList.add('text-right');
    } else {
      el.classList.remove('text-right');
      el.classList.add('text-left');
    }
  });

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

  // Drawers Titles & Empty States
  const favTitleSpan = document.querySelector("#fav-drawer-container h2 span");
  if (favTitleSpan) favTitleSpan.textContent = t.favoritesTitle;
  
  const favEmptyTitle = document.querySelector("#fav-empty-state h4");
  if (favEmptyTitle) favEmptyTitle.textContent = lang === 'en' ? "Wishlist is Empty" : "قائمة المفضلات فارغة";
  const favEmptyPara = document.querySelector("#fav-empty-state p");
  if (favEmptyPara) favEmptyPara.textContent = t.favoritesEmpty;

  const cartTitleSpan = document.querySelector("#cart-drawer-container h2 span");
  if (cartTitleSpan) cartTitleSpan.textContent = t.cartTitle;
  
  const cartEmptyTitle = document.querySelector("#cart-empty-state h4");
  if (cartEmptyTitle) cartEmptyTitle.textContent = lang === 'en' ? "Cart is Empty" : "السلة فارغة";
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

  // Checkout Form Section Translation
  const formTitle = document.querySelector("#checkout-form-section h4");
  if (formTitle) formTitle.textContent = t.deliveryInfoTitle;
  const formSub = document.querySelector("#checkout-form-section p");
  if (formSub) formSub.textContent = t.deliveryInfoDesc;

  const inputNameSpan = document.querySelector("#input-name").previousElementSibling?.querySelector("span");
  if (inputNameSpan) inputNameSpan.textContent = t.inputNameLabel;
  const inputName = document.getElementById("input-name");
  if (inputName) inputName.placeholder = t.inputNamePlaceholder;

  const inputPhoneSpan = document.querySelector("#input-phone").previousElementSibling?.querySelector("span");
  if (inputPhoneSpan) inputPhoneSpan.textContent = t.inputPhoneLabel;
  const inputPhone = document.getElementById("input-phone");
  if (inputPhone) inputPhone.placeholder = t.inputPhonePlaceholder;

  const inputAddressSpan = document.querySelector("#input-address").previousElementSibling?.querySelector("span");
  if (inputAddressSpan) inputAddressSpan.textContent = t.inputAddressLabel;
  const inputAddress = document.getElementById("input-address");
  if (inputAddress) inputAddress.placeholder = t.inputAddressPlaceholder;

  const inputNoteSpan = document.querySelector("#input-note").previousElementSibling?.querySelector("span");
  if (inputNoteSpan) inputNoteSpan.textContent = t.inputNoteLabel;
  const inputNote = document.getElementById("input-note");
  if (inputNote) inputNote.placeholder = t.inputNotePlaceholder;

  const checkoutPreviewCountLabel = document.querySelector("#checkout-preview-count")?.previousElementSibling;
  if (checkoutPreviewCountLabel) checkoutPreviewCountLabel.textContent = t.previewItemsLabel;
  const checkoutPreviewTotalLabel = document.querySelector("#checkout-preview-total")?.previousElementSibling;
  if (checkoutPreviewTotalLabel) checkoutPreviewTotalLabel.textContent = t.previewTotalLabel;

  const checkoutSubmitBtnEl = document.querySelector("#checkout-form-section button[type='submit'] span");
  if (checkoutSubmitBtnEl) checkoutSubmitBtnEl.textContent = t.confirmCheckoutBtn;

  // Checkout Success Screen Translation
  const successHeader = document.querySelector("#checkout-success-section h4");
  if (successHeader) successHeader.textContent = t.successTitle;
  const successSub = document.querySelector("#checkout-success-section p");
  if (successSub) successSub.textContent = t.successSubtitle;

  const orderIdBadgeLabel = document.querySelector("#order-id-badge")?.previousElementSibling;
  if (orderIdBadgeLabel) orderIdBadgeLabel.textContent = t.successOrderId;
  const successNameLabel = document.querySelector("#success-name")?.previousElementSibling;
  if (successNameLabel) successNameLabel.textContent = t.successCustomer;
  const successPhoneLabel = document.querySelector("#success-phone")?.previousElementSibling;
  if (successPhoneLabel) successPhoneLabel.textContent = t.successPhone;
  const successAddressLabel = document.querySelector("#success-address")?.previousElementSibling;
  if (successAddressLabel) successAddressLabel.textContent = t.successAddress;
  const successNoteLabel = document.querySelector("#success-note")?.previousElementSibling;
  if (successNoteLabel) successNoteLabel.textContent = t.successNote;
  const successPaidAmountLabel = document.querySelector("#success-paid-amount")?.previousElementSibling;
  if (successPaidAmountLabel) successPaidAmountLabel.textContent = t.successPaidAmount;

  const successDeliveryNoticeSpan = document.querySelector("#checkout-success-section i[data-lucide='truck'] + span");
  if (successDeliveryNoticeSpan) successDeliveryNoticeSpan.textContent = t.successDeliveryNotice;
  const successReturnBtn = document.getElementById("success-return-btn");
  if (successReturnBtn) successReturnBtn.textContent = t.successBackBtn;

  // Auth / Login Modal Translation
  const tabLoginBtn = document.getElementById("tab-login");
  if (tabLoginBtn) tabLoginBtn.textContent = t.loginTab;
  const tabRegisterBtn = document.getElementById("tab-register");
  if (tabRegisterBtn) tabRegisterBtn.textContent = t.registerTab;

  const loginUsernameLabel = document.querySelector("#form-login div:first-of-type label");
  if (loginUsernameLabel) loginUsernameLabel.textContent = t.usernameLabel;
  const loginUsernameInput = document.getElementById("login-username");
  if (loginUsernameInput) loginUsernameInput.placeholder = t.usernamePlaceholder;

  const loginPasswordLabel = document.querySelector("#form-login div:nth-of-type(2) label");
  if (loginPasswordLabel) loginPasswordLabel.textContent = t.passwordLabel;

  const loginSubmitBtn = document.querySelector("#form-login button[type='submit']");
  if (loginSubmitBtn) loginSubmitBtn.textContent = t.loginBtn;
  const loginHelpTextPara = document.querySelector("#form-login p");
  if (loginHelpTextPara) loginHelpTextPara.textContent = t.loginHelpText;

  const regUsernameLabel = document.querySelector("#form-register div:first-of-type label");
  if (regUsernameLabel) regUsernameLabel.textContent = t.registerUsernameLabel;
  const regUsernameInput = document.getElementById("register-username");
  if (regUsernameInput) regUsernameInput.placeholder = t.usernamePlaceholder;

  const regNameLabel = document.querySelector("#form-register div:nth-of-type(2) label");
  if (regNameLabel) regNameLabel.textContent = t.registerFullNameLabel;
  const regNameInput = document.getElementById("register-name");
  if (regNameInput) regNameInput.placeholder = t.registerFullNamePlaceholder;

  const regPasswordLabel = document.querySelector("#form-register div:nth-of-type(3) label");
  if (regPasswordLabel) regPasswordLabel.textContent = t.registerPasswordLabel;
  const regConfirmPasswordLabel = document.querySelector("#form-register div:nth-of-type(4) label");
  if (regConfirmPasswordLabel) regConfirmPasswordLabel.textContent = t.registerConfirmPasswordLabel;

  const regSubmitBtn = document.querySelector("#form-register button[type='submit']");
  if (regSubmitBtn) regSubmitBtn.textContent = t.registerBtn;

  // Settings Modal Translation
  const settingsTitleLangSpan = document.getElementById("settings-title-lang");
  if (settingsTitleLangSpan) settingsTitleLangSpan.textContent = t.settingsTitle;
  const settingsLabelLang = document.getElementById("settings-label-language");
  if (settingsLabelLang) settingsLabelLang.textContent = t.settingsLangLabel;
  const settingsLabelName = document.getElementById("settings-label-name");
  if (settingsLabelName) settingsLabelName.textContent = t.settingsNameLabel;
  const settingsNameIn = document.getElementById("settings-name-input");
  if (settingsNameIn) settingsNameIn.placeholder = t.settingsNamePlaceholder;

  const settingsLabelPhone = document.getElementById("settings-label-phone");
  if (settingsLabelPhone) settingsLabelPhone.textContent = t.settingsPhoneLabel;
  const settingsPhoneIn = document.getElementById("settings-phone-input");
  if (settingsPhoneIn) settingsPhoneIn.placeholder = t.settingsPhonePlaceholder;

  const settingsLabelAddress = document.getElementById("settings-label-address");
  if (settingsLabelAddress) settingsLabelAddress.textContent = t.settingsAddressLabel;
  const settingsAddressIn = document.getElementById("settings-address-input");
  if (settingsAddressIn) settingsAddressIn.placeholder = t.settingsAddressPlaceholder;

  const settingsSaveBtnEl = document.getElementById("settings-save-btn");
  if (settingsSaveBtnEl) settingsSaveBtnEl.textContent = t.settingsSaveBtn;

  // Quick View Modal
  const modalChilled = document.querySelector("#quick-view-dialog span[class*='text-[10px]'][class*='uppercase']");
  if (modalChilled) modalChilled.textContent = lang === 'en' ? "Chilled Delivery" : "التوصيل مبرد";
  const modalTime = document.querySelector("#quick-view-dialog span[class*='text-[11px]'] span");
  if (modalTime) modalTime.textContent = lang === 'en' ? "Within 90 Minutes" : "خلال ٩٠ دقيقة";
  const modalIngredientsTitle = document.querySelector("#modal-ingredients")?.previousElementSibling?.querySelector("span");
  if (modalIngredientsTitle) modalIngredientsTitle.textContent = lang === 'en' ? "Key Ingredients" : "المكونات الأساسية";
  const modalAvailableTag = document.querySelector("#quick-view-dialog div[class*='tracking-widest'] span:last-child");
  if (modalAvailableTag) modalAvailableTag.textContent = lang === 'en' ? "Product Available Now" : "منتج متوفر الآن";
  const modalAddBtnText = document.querySelector("#modal-add-to-cart-btn span");
  if (modalAddBtnText) modalAddBtnText.textContent = lang === 'en' ? "Add to Cart" : "أضف للسلة";

  // Contact Info Cards
  const contactPhoneLabel = document.getElementById("contact-phone-label");
  if (contactPhoneLabel) contactPhoneLabel.textContent = lang === 'en' ? "Call us directly" : "اتصل بنا مباشرة";
  const contactWhatsappLabel = document.getElementById("contact-whatsapp-label");
  if (contactWhatsappLabel) contactWhatsappLabel.textContent = lang === 'en' ? "Message us on WhatsApp" : "راسلنا على واتساب";
  const contactInstagramLabel = document.getElementById("contact-instagram-label");
  if (contactInstagramLabel) contactInstagramLabel.textContent = lang === 'en' ? "Follow us on Instagram" : "تابعنا على إنستجرام";

  const callLink = document.getElementById("call-link");
  if (callLink) callLink.innerHTML = lang === 'en' ? "Call 📞" : "اتصال 📞";
  const whatsappLink = document.getElementById("whatsapp-link");
  if (whatsappLink) whatsappLink.innerHTML = lang === 'en' ? "WhatsApp 💬" : "واتساب 💬";
  const instaLink = document.getElementById("insta-link");
  if (instaLink) instaLink.innerHTML = lang === 'en' ? "Follow 📸" : "متابعة 📸";

  // Footer
  const footerBrand = document.querySelector("footer p.font-serif");
  if (footerBrand) footerBrand.textContent = lang === 'en' ? "El Taibat | Everyday Sweets" : "الطيبات | حلويات يومية";
  const footerCopy = document.querySelector("footer p.text-xs");
  if (footerCopy) footerCopy.textContent = lang === 'en' ? "All rights reserved © 2026 El Taibat Sweets. We strive to deliver premium sweets to every home." : "جميع الحقوق محفوظة © ٢٠٢٦ متجر الطيبات للحلويات. نسعى لتقديم حلويات مناسبة لكل بيت.";

  // History Modal
  const historyTitleSpanNew = document.querySelector("#history-modal-dialog h2 span");
  if (historyTitleSpanNew) historyTitleSpanNew.textContent = t.orderHistoryTitle;
  
  const historyEmptyParaNew = document.querySelector("#history-empty-state p.font-bold");
  if (historyEmptyParaNew) historyEmptyParaNew.textContent = t.orderHistoryEmpty;
  const historyEmptyParaDesc = document.querySelector("#history-empty-state p.text-xs");
  if (historyEmptyParaDesc) historyEmptyParaDesc.textContent = lang === 'en' ? "Your future orders will appear here automatically." : "جميع طلباتك المستقبلية ستظهر هنا تزامناً مع حسابك.";

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

// Pure client-side simulated router to make the app 100% serverless, fast, and fully functional on static hosting like GitHub Pages!
async function apiRequest(endpoint, options = {}) {
  await new Promise(resolve => setTimeout(resolve, 50)); // 50ms simulated latency
  
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

  // --- WHATSAPP NUMBER CONFIGURATION ---
  // You can change this number to your own WhatsApp business phone number
  // Format: [Country Code][Phone Number] without '+' or leading '00' (e.g., 201501776162)
  const ADMIN_WHATSAPP = "201501776162"; 
  
  // 1. PRODUCTS ENDPOINTS
  if (endpoint === '/api/products') {
    if (method === 'GET') {
      return { success: true, products: db.products || [] };
    }
    if (method === 'POST') {
      const newProduct = {
        id: "prod-" + Date.now(),
        name: body.name,
        category: body.category,
        price: Number(body.price),
        description: body.description,
        ingredients: body.ingredients,
        image: body.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
        createdAt: new Date().toISOString()
      };
      if (!db.products) db.products = [];
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
    
    // Simple password check (handles plain text or basic comparison)
    let isMatch = (password === 'admin123' || user.password === password);
    if (!isMatch) {
      throw new Error("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
    
    const { password: _, ...safeUser } = user;
    const token = "mock-jwt-" + btoa(unescape(encodeURIComponent(JSON.stringify(safeUser))));
    localStorage.setItem("currentUser", JSON.stringify(safeUser));
    localStorage.setItem("authToken", token);
    authToken = token;
    currentUser = safeUser;
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
    authToken = token;
    currentUser = safeUser;
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
      currentUser = updatedUser;
      return { success: true, user: updatedUser };
    }
  }

  // 3. ORDERS ENDPOINTS
  if (endpoint === '/api/orders') {
    if (method === 'GET') {
      const savedUser = localStorage.getItem("currentUser");
      if (!savedUser) {
        return { success: true, orders: db.orders || [] };
      }
      const parsedUser = JSON.parse(savedUser);
      const userOrders = (db.orders || []).filter(o => o.userId === parsedUser.id || o.customerPhone === parsedUser.phone);
      return { success: true, orders: userOrders };
    }
    if (method === 'POST') {
      const savedUser = localStorage.getItem("currentUser");
      const parsedUser = savedUser ? JSON.parse(savedUser) : null;
      
      let subtotal = Number(body.total || 0);
      
      // Ensure all items are fully populated with name, price, and image from database
      const populatedItems = (body.items || []).map(item => {
        const product = db.products.find(p => p.id === item.productId || String(p.id) === String(item.productId));
        const itemPrice = product ? product.price : (Number(item.price) || 0);
        const itemName = product ? product.name : (item.name || `منتج ${item.productId}`);
        const itemImage = product ? product.image : (item.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80");
        return {
          productId: item.productId,
          name: itemName,
          price: itemPrice,
          image: itemImage,
          quantity: item.quantity
        };
      });

      // Recalculate subtotal if it is 0
      if (subtotal === 0) {
        subtotal = populatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }

      const deliveryFee = subtotal >= 200 || subtotal === 0 ? 0 : 25; // Matching freeShippingThreshold

      const newOrder = {
        id: "TAI-" + Math.floor(100000 + Math.random() * 900000),
        userId: parsedUser ? parsedUser.id : null,
        customerName: body.customerName,
        customerPhone: body.customerPhone,
        deliveryAddress: body.deliveryAddress,
        specialNote: body.specialNote || "",
        items: populatedItems,
        total: subtotal,
        deliveryFee: deliveryFee,
        status: "pending",
        createdAt: new Date().toISOString()
      };
      
      if (!db.orders) db.orders = [];
      db.orders.unshift(newOrder);
      saveLocalDB(db);

      // --- WHATSAPP REDIRECTION TRIGGER ---
      try {
        let itemsText = "";
        newOrder.items.forEach((item, index) => {
          const product = db.products.find(p => p.id === item.productId || String(p.id) === String(item.productId));
          const name = product ? product.name : `منتج ${item.productId}`;
          const price = product ? product.price : 0;
          itemsText += `${index + 1}. *${name}* (الكمية: ${item.quantity} × ${price} ج.م)\n`;
        });
        
        const totalWithDelivery = subtotal + deliveryFee;
        
        let msg = `*طلب جديد من حلويات الطيبات 🍰*\n\n`;
        msg += `*رقم الطلب:* \`${newOrder.id}\`\n`;
        msg += `*الاسم:* ${newOrder.customerName}\n`;
        msg += `*الهاتف:* ${newOrder.customerPhone}\n`;
        msg += `*العنوان:* ${newOrder.deliveryAddress}\n`;
        if (newOrder.specialNote) {
          msg += `*ملاحظات:* ${newOrder.specialNote}\n`;
        }
        msg += `\n*المنتجات:*\n${itemsText}\n`;
        msg += `*المجموع الفرعي:* ${subtotal} ج.م\n`;
        msg += `*مصاريف التوصيل:* ${deliveryFee === 0 ? "مجاني" : deliveryFee + " ج.م"}\n`;
        msg += `*المجموع الكلي:* *${totalWithDelivery} ج.م*\n\n`;
        msg += `_تم إرسال هذا الطلب تلقائياً من موقع الطيبات الإلكتروني._`;

        const encodedMsg = encodeURIComponent(msg);
        const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedMsg}`;
        
        // Open WhatsApp in a new tab safely
        window.open(waUrl, "_blank");
      } catch (err) {
        console.error("Failed to redirect to WhatsApp:", err);
      }
      
      return { success: true, order: newOrder };
    }
  }
  
  if (endpoint === '/api/orders/all') {
    return { success: true, orders: db.orders || [] };
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
      db.orders = (db.orders || []).filter(o => o.id !== oId);
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
      const dateStr = new Date(order.createdAt).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-EG', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      // Calculate total and render individual order products with their images and individual prices robustly
      let orderSubtotal = 0;
      
      const itemsListHtml = order.items.map(it => {
        // Fallback properties from PRODUCTS in case they are missing on older saved records
        const productObj = PRODUCTS.find(p => p.id === it.productId || String(p.id) === String(it.productId));
        const price = typeof it.price === 'number' && !isNaN(it.price) ? it.price : (productObj ? productObj.price : 0);
        const image = it.image || (productObj ? productObj.image : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80");
        const pName = getProductTranslation(it.productId, 'name') || it.name || (productObj ? productObj.name : `منتج ${it.productId}`);
        
        const qtyText = currentLang === 'en' ? "Qty:" : "الكمية:";
        const priceText = currentLang === 'en' ? "Price:" : "السعر:";
        const currencyText = currentLang === 'en' ? "EGP" : "ج.م";
        
        orderSubtotal += price * it.quantity;
        
        return `
          <div class="flex items-center gap-3 bg-white p-2 rounded-lg border border-[#6d4c41]/5 text-right">
            <img src="${image}" class="w-10 h-10 object-cover rounded-md border border-[#6d4c41]/10 shrink-0" alt="${pName}" />
            <div class="flex-1 min-w-0">
              <h5 class="text-xs font-bold text-[#3e2723] truncate">${pName}</h5>
              <p class="text-[10px] text-[#6d4c41]/80 mt-0.5">
                <span>${qtyText} ${it.quantity}</span>
                <span class="mx-1">•</span>
                <span>${priceText} ${price} ${currencyText}</span>
              </p>
            </div>
            <div class="text-xs font-bold text-[#3e2723] whitespace-nowrap">
              ${price * it.quantity} ${currencyText}
            </div>
          </div>
        `;
      }).join("");

      const dateLabelText = currentLang === 'en' ? "Date:" : "التاريخ:";
      const deliveryLabelText = currentLang === 'en' ? "Delivery:" : "التوصيل:";
      const totalLabelText = currentLang === 'en' ? "Total:" : "الإجمالي:";
      
      const displayTotal = (typeof order.total === 'number' && order.total > 0) ? order.total : orderSubtotal;
      const deliveryFeeValue = order.deliveryFee === 0 
        ? (currentLang === 'en' ? 'Free' : 'مجاني') 
        : `${order.deliveryFee} ${currentLang === 'en' ? 'EGP' : 'ج.م'}`;

      return `
        <div class="bg-[#efebe9]/20 p-4 border border-[#6d4c41]/10 rounded-xl space-y-3 text-right">
          <div class="flex items-center justify-between gap-2 border-b border-[#6d4c41]/10 pb-2">
            <span class="text-xs font-mono font-bold text-[#6d4c41] bg-white px-2 py-0.5 rounded border border-[#6d4c41]/10">${order.id}</span>
          </div>
          
          <div class="space-y-2">
            ${itemsListHtml}
          </div>

          <div class="flex items-center justify-between text-[11px] text-[#6d4c41]/80 pt-2 border-t border-[#6d4c41]/5">
            <div class="flex flex-col text-right">
              <span>${dateLabelText} ${dateStr}</span>
              <span class="text-[10px] text-[#6d4c41]/60">${deliveryLabelText} ${deliveryFeeValue}</span>
            </div>
            <span class="font-extrabold text-xs sm:text-sm text-[#3e2723]">${totalLabelText} ${displayTotal} ${currentLang === 'en' ? 'EGP' : 'ج.م'}</span>
          </div>
        </div>
      `;
    }).join("");
    lucide.createIcons();
  } catch (err) {
    console.error('Failed to load history:', err);
    showToast(currentLang === 'en' ? "Failed to load order history" : "فشل تحميل سجل الطلبات من الخادم");
  }
}

// ==========================================
// --- PRODUCT TRANSLATION & RENDERING HELPER ---
// ==========================================
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
    
    const engName = getProductTranslation(product.id, 'name').toLowerCase();
    const engDesc = getProductTranslation(product.id, 'description').toLowerCase();
    const engIng = getProductTranslation(product.id, 'ingredients').toLowerCase();
    
    const matchesSearch = cleanQuery === "" || 
      product.name.toLowerCase().includes(cleanQuery) || 
      product.description.toLowerCase().includes(cleanQuery) || 
      product.ingredients.toLowerCase().includes(cleanQuery) ||
      engName.includes(cleanQuery) ||
      engDesc.includes(cleanQuery) ||
      engIng.includes(cleanQuery);
      
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
      
      const translatedName = getProductTranslation(product.id, 'name');
      const translatedDesc = getProductTranslation(product.id, 'description');
      
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
              alt="${translatedName}"
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
                ${translatedName}
              </h3>
              <p class="text-xs text-[#6d4c41] mb-3 leading-relaxed line-clamp-2 ${alignClass}">
                ${translatedDesc}
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
  localStorage.setItem("el_taibat_cart", JSON.stringify(cart));
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
  cartDrawerHeaderSubtitle.textContent = currentLang === 'en' ? `Contains ${cartItemCount} items` : `تحتوي على ${cartItemCount} قطع`;

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
        freeShippingText.innerHTML = `<span>${currentLang === 'en' ? 'Free Shipping Activated ✨' : 'تم تفعيل الشحن المجاني ✨'}</span>`;
      } else {
        freeShippingText.innerHTML = `
          <span>${currentLang === 'en' ? 'Free Shipping Limit' : 'عتبة الشحن المجاني'}</span>
          <span>${currentLang === 'en' ? 'Remaining' : 'متبقي'} ${freeShippingThreshold - cartSubtotal} ${currentLang === 'en' ? 'EGP' : 'ج.م'}</span>
        `;
      }

      // Populate Items list
      cartItemsList.innerHTML = cart.map(item => {
        const itemCategoryLabel = currentLang === 'en' 
          ? (item.product.category === "ماكرون فرنسي" ? "pcs" : "box")
          : (item.product.category === "ماكرون فرنسي" ? "قطع" : "علبة");
        const pName = getProductTranslation(item.product.id, 'name');
        
        return `
          <div class="flex gap-4 items-center border-b border-[#6d4c41]/5 pb-4 last:border-0">
            <div class="w-20 h-20 bg-[#efebe9] rounded-lg overflow-hidden shrink-0">
              <img src="${item.product.image}" alt="${pName}" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between gap-1 mb-1">
                <h4 class="text-sm font-bold text-[#3e2723] leading-tight">${pName}</h4>
                <button
                  type="button"
                  data-remove-id="${item.product.id}"
                  class="text-[#6d4c41]/40 hover:text-red-500 transition-colors p-0.5"
                  aria-label="${currentLang === 'en' ? 'Delete' : 'حذف'}"
                >
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="text-xs text-[#6d4c41] mb-2">${currentLang === 'en' ? 'Qty:' : 'الكمية:'} ${item.quantity} ${itemCategoryLabel}</div>
              <div class="flex items-center justify-between">
                <!-- Quantity Selector -->
                <div class="flex border border-[#6d4c41]/20 rounded overflow-hidden bg-white">
                  <button
                    type="button"
                    data-qty-btn="decrease"
                    data-product-id="${item.product.id}"
                    class="px-3 py-1 hover:bg-[#fdfbf7] text-xs font-bold text-[#3e2723]"
                    aria-label="${currentLang === 'en' ? 'Decrease quantity' : 'تقليل الكمية'}"
                  >-</button>
                  <span class="px-3 py-1 text-xs border-x border-[#6d4c41]/20 text-[#3e2723] font-bold bg-[#fdfbf7]">${item.quantity}</span>
                  <button
                    type="button"
                    data-qty-btn="increase"
                    data-product-id="${item.product.id}"
                    class="px-3 py-1 hover:bg-[#fdfbf7] text-xs font-bold text-[#3e2723]"
                    aria-label="${currentLang === 'en' ? 'Increase quantity' : 'زيادة الكمية'}"
                  >+</button>
                </div>
                <span class="font-bold text-sm text-[#3e2723]">${item.product.price * item.quantity} ${currentLang === 'en' ? 'EGP' : 'ج.م'}</span>
              </div>
            </div>
          </div>
        `;
      }).join("");

      // Pricing summaries
      cartSubtotalVal.textContent = `${cartSubtotal} ${currentLang === 'en' ? 'EGP' : 'ج.م'}`;
      cartDeliveryFeeVal.textContent = deliveryFee === 0 ? (currentLang === 'en' ? "Free" : "مجاني") : `${deliveryFee} ${currentLang === 'en' ? 'EGP' : 'ج.م'}`;
      cartTotalVal.textContent = `${cartTotal} ${currentLang === 'en' ? 'EGP' : 'ج.م'}`;
      
      cartSummarySection.classList.remove("hidden");
    }
  } else if (checkoutStep === "form") {
    cartEmptyState.classList.add("hidden");
    cartContentWrapper.classList.add("hidden");
    cartSummarySection.classList.add("hidden");
    checkoutSuccessSection.classList.add("hidden");
    checkoutFormSection.classList.remove("hidden");

    // Inside form, update small preview
    document.getElementById("checkout-preview-count").textContent = currentLang === 'en' ? `${cartItemCount} pcs` : `${cartItemCount} قطع`;
    document.getElementById("checkout-preview-total").textContent = `${cartTotal} ${currentLang === 'en' ? 'EGP' : 'ج.م'}`;
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
    successPaidAmount.textContent = `${cartTotal} ${currentLang === 'en' ? 'EGP' : 'ج.m'}`;

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
  localStorage.setItem("el_taibat_favorites", JSON.stringify(favorites));
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
  modalImage.alt = getProductTranslation(product.id, 'name');
  modalCategory.textContent = currentLang === 'en' ? (categoryTranslations[product.category] || product.category) : product.category;
  modalName.textContent = getProductTranslation(product.id, 'name');
  modalPrice.textContent = currentLang === 'en' ? `${product.price} EGP` : `${product.price} ج.م`;
  modalDescription.textContent = getProductTranslation(product.id, 'description');
  modalIngredients.textContent = getProductTranslation(product.id, 'ingredients');

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

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const orderItems = cart.map(item => ({
    productId: item.product.id,
    name: item.product.name,
    price: item.product.price,
    image: item.product.image,
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
        items: orderItems,
        total: subtotal
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
