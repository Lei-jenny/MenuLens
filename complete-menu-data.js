// Complete WARKA PUB menu data with translations
const polishMenuData = {
    original: "Polish",
    dishes: [
        // SHOTS
        {
            polish: "MINIONS NEW",
            english: "Minions Shot",
            chinese: "小黄人鸡尾酒",
            japanese: "ミニオンズショット",
            description: "Wyborowa Vodka, banana liqueur, milk, sour cream.",
            tags: ["contains-dairy", "alcohol"],
            nutrition: { calories: 180, protein: 2, carbs: 8, fat: 4, sodium: 15, allergens: "Dairy, Alcohol" }
        },
        {
            polish: "MAD BEAR",
            english: "Mad Bear Shot",
            chinese: "疯狂熊鸡尾酒",
            japanese: "マッドベアショット",
            description: "Slivovitz, tabasco, raspberry juice.",
            tags: ["spicy", "alcohol"],
            nutrition: { calories: 120, protein: 0, carbs: 12, fat: 0, sodium: 5, allergens: "Alcohol" }
        },
        {
            polish: "MAD DOG",
            english: "Mad Dog Shot",
            chinese: "疯狂狗鸡尾酒",
            japanese: "マッドドッグショット",
            description: "Vodka, Tabasco, raspberry juice.",
            tags: ["spicy", "alcohol"],
            nutrition: { calories: 110, protein: 0, carbs: 10, fat: 0, sodium: 3, allergens: "Alcohol" }
        },
        {
            polish: "PINEAPPLE",
            english: "Pineapple Shot",
            chinese: "菠萝鸡尾酒",
            japanese: "パイナップルショット",
            description: "Wyborowa vodka, pineapple sauce, lemon sauce, grenadine syrup.",
            tags: ["alcohol"],
            nutrition: { calories: 150, protein: 0, carbs: 15, fat: 0, sodium: 8, allergens: "Alcohol" }
        },
        {
            polish: "BANIECZKA",
            english: "Banieczka Shot",
            chinese: "班尼茨卡鸡尾酒",
            japanese: "バニエチカショット",
            description: "Wyborowa vodka, lemon juice, sugar, angostura.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 12, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "PASSIONSHOTS",
            english: "Passion Shots",
            chinese: "激情鸡尾酒",
            japanese: "パッションショット",
            description: "Havana Club 3, rum, maracuja puree, fresh lemon juice, red grapefruit.",
            tags: ["alcohol"],
            nutrition: { calories: 160, protein: 0, carbs: 14, fat: 0, sodium: 4, allergens: "Alcohol" }
        },
        // KAMIKADZE
        {
            polish: "BLUEBERRY NEW",
            english: "Blueberry Kamikaze",
            chinese: "蓝莓神风鸡尾酒",
            japanese: "ブルーベリーカミカゼ",
            description: "Blueberry flavored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 140, protein: 0, carbs: 13, fat: 0, sodium: 3, allergens: "Alcohol" }
        },
        {
            polish: "PASSION FRUIT NEW",
            english: "Passion Fruit Kamikaze",
            chinese: "百香果神风鸡尾酒",
            japanese: "パッションフルーツカミカゼ",
            description: "Passion fruit flavored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 135, protein: 0, carbs: 12, fat: 0, sodium: 3, allergens: "Alcohol" }
        },
        {
            polish: "BLUE",
            english: "Blue Kamikaze",
            chinese: "蓝色神风鸡尾酒",
            japanese: "ブルーカミカゼ",
            description: "Blue colored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 11, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "STRAWBERRY",
            english: "Strawberry Kamikaze",
            chinese: "草莓神风鸡尾酒",
            japanese: "ストロベリーカミカゼ",
            description: "Strawberry flavored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 135, protein: 0, carbs: 12, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "APPLE",
            english: "Apple Kamikaze",
            chinese: "苹果神风鸡尾酒",
            japanese: "アップルカミカゼ",
            description: "Apple flavored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 11, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "MANGO",
            english: "Mango Kamikaze",
            chinese: "芒果神风鸡尾酒",
            japanese: "マンゴーカミカゼ",
            description: "Mango flavored kamikaze cocktail.",
            tags: ["alcohol"],
            nutrition: { calories: 140, protein: 0, carbs: 13, fat: 0, sodium: 3, allergens: "Alcohol" }
        },
        // PROSECCO
        {
            polish: "PROSECCO",
            english: "Prosecco",
            chinese: "普罗塞克起泡酒",
            japanese: "プロセッコ",
            description: "Italian sparkling wine.",
            tags: ["alcohol"],
            nutrition: { calories: 80, protein: 0, carbs: 2, fat: 0, sodium: 1, allergens: "Alcohol" }
        },
        {
            polish: "PROSECCO DI VICI",
            english: "Prosecco Di Vici",
            chinese: "维西普罗塞克",
            japanese: "プロセッコディヴィチ",
            description: "Premium Italian sparkling wine.",
            tags: ["alcohol"],
            nutrition: { calories: 85, protein: 0, carbs: 2, fat: 0, sodium: 1, allergens: "Alcohol" }
        },
        {
            polish: "PROSECCO FRIZZANTE BOTTER",
            english: "Prosecco Frizzante Botter",
            chinese: "博特普罗塞克起泡酒",
            japanese: "プロセッコフリッツァンテボッター",
            description: "Italian frizzante sparkling wine.",
            tags: ["alcohol"],
            nutrition: { calories: 82, protein: 0, carbs: 2, fat: 0, sodium: 1, allergens: "Alcohol" }
        },
        // WHITE WINES
        {
            polish: "PINOT GRIGIO",
            english: "Pinot Grigio",
            chinese: "灰皮诺白葡萄酒",
            japanese: "ピノグリージョ",
            description: "Italian white wine.",
            tags: ["alcohol"],
            nutrition: { calories: 120, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "SAUVIGNON BLANC",
            english: "Sauvignon Blanc",
            chinese: "长相思白葡萄酒",
            japanese: "ソーヴィニヨンブラン",
            description: "Chilean white wine.",
            tags: ["alcohol"],
            nutrition: { calories: 125, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "CHARDONNAY",
            english: "Chardonnay",
            chinese: "霞多丽白葡萄酒",
            japanese: "シャルドネ",
            description: "South African white wine.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "RIESLING",
            english: "Riesling",
            chinese: "雷司令白葡萄酒",
            japanese: "リースリング",
            description: "German white wine.",
            tags: ["alcohol"],
            nutrition: { calories: 115, protein: 0, carbs: 4, fat: 0, sodium: 1, allergens: "Alcohol" }
        },
        {
            polish: "MULTI-STRAIN",
            english: "Multi-Strain White",
            chinese: "多品种白葡萄酒",
            japanese: "マルチストレイン白",
            description: "French white wine blend.",
            tags: ["alcohol"],
            nutrition: { calories: 120, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        // RED WINES
        {
            polish: "MULTI-STRAIN RED",
            english: "Multi-Strain Red",
            chinese: "多品种红葡萄酒",
            japanese: "マルチストレイン赤",
            description: "Italian red wine blend.",
            tags: ["alcohol"],
            nutrition: { calories: 125, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "PRIMITIVO",
            english: "Primitivo",
            chinese: "普里米蒂沃红葡萄酒",
            japanese: "プリミティーヴォ",
            description: "Italian red wine.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "DIODORO PRIMITIVO",
            english: "Diodoro Primitivo",
            chinese: "迪奥多罗普里米蒂沃",
            japanese: "ディオドロプリミティーヴォ",
            description: "Premium Italian red wine.",
            tags: ["alcohol"],
            nutrition: { calories: 135, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "CARMENERE",
            english: "Carmenere",
            chinese: "佳美娜红葡萄酒",
            japanese: "カルメネール",
            description: "Chilean red wine.",
            tags: ["alcohol"],
            nutrition: { calories: 125, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "MERLOT",
            english: "Merlot",
            chinese: "梅洛红葡萄酒",
            japanese: "メルロー",
            description: "Uruguayan red wine.",
            tags: ["alcohol"],
            nutrition: { calories: 130, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        {
            polish: "SHIRAZ",
            english: "Shiraz",
            chinese: "西拉红葡萄酒",
            japanese: "シラーズ",
            description: "Australian red wine.",
            tags: ["alcohol"],
            nutrition: { calories: 135, protein: 0, carbs: 3, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        // FRENCH FRIES
        {
            polish: "BUNCH OF SWEET POTATOES",
            english: "Sweet Potato Fries",
            chinese: "红薯条",
            japanese: "スイートポテトフライ",
            description: "Sweet potato fries with kimchi mayo sauce.",
            tags: ["vegetarian", "spicy"],
            nutrition: { calories: 320, protein: 4, carbs: 45, fat: 12, sodium: 480, allergens: "None" }
        },
        {
            polish: "BELGIAN FRIES CLASSIC",
            english: "Classic Belgian Fries",
            chinese: "经典比利时薯条",
            japanese: "クラシックベルギーフライ",
            description: "Traditional Belgian fries with original Heinz ketchup.",
            tags: ["vegetarian"],
            nutrition: { calories: 380, protein: 5, carbs: 48, fat: 18, sodium: 520, allergens: "None" }
        },
        {
            polish: "BELGIAN FRIES WITH CHEESE",
            english: "Belgian Fries with Cheese",
            chinese: "奶酪比利时薯条",
            japanese: "チーズベルギーフライ",
            description: "Belgian fries with baked cheese and original Heinz ketchup.",
            tags: ["contains-dairy"],
            nutrition: { calories: 450, protein: 12, carbs: 48, fat: 24, sodium: 680, allergens: "Dairy" }
        },
        // COLD BEVERAGES
        {
            polish: "FRESH FRUIT JUICE",
            english: "Fresh Fruit Juice",
            chinese: "新鲜果汁",
            japanese: "フレッシュフルーツジュース",
            description: "Freshly squeezed fruit juice - orange, grapefruit, or mixed.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 120, protein: 2, carbs: 28, fat: 0, sodium: 5, allergens: "None" }
        },
        {
            polish: "LEMONADE",
            english: "Lemonade",
            chinese: "柠檬水",
            japanese: "レモネード",
            description: "Fresh lemonade - lemon or tropical flavor.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 80, protein: 0, carbs: 20, fat: 0, sodium: 3, allergens: "None" }
        },
        {
            polish: "COCA-COLA",
            english: "Coca-Cola",
            chinese: "可口可乐",
            japanese: "コカ・コーラ",
            description: "Classic Coca-Cola soft drink.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 140, protein: 0, carbs: 35, fat: 0, sodium: 10, allergens: "None" }
        },
        {
            polish: "CAPPY JUICE",
            english: "Cappy Juice",
            chinese: "卡皮果汁",
            japanese: "キャッピージュース",
            description: "Fruit juice - orange, apple, currant, tomato, grapefruit, or multivitamin.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 110, protein: 1, carbs: 26, fat: 0, sodium: 8, allergens: "None" }
        },
        {
            polish: "FUZETEA",
            english: "Fuzetea",
            chinese: "福泽茶",
            japanese: "フゼティー",
            description: "Iced tea - lemon or peach flavor.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 90, protein: 0, carbs: 22, fat: 0, sodium: 5, allergens: "None" }
        },
        {
            polish: "CISOWIANKA PERLAGE",
            english: "Cisowianka Perlage",
            chinese: "西索维安卡气泡水",
            japanese: "チソヴィアンカペルラージュ",
            description: "Sparkling mineral water.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 2, allergens: "None" }
        },
        {
            polish: "MINERAL WATER",
            english: "Mineral Water",
            chinese: "矿泉水",
            japanese: "ミネラルウォーター",
            description: "Sparkling or non-sparkling mineral water.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 1, allergens: "None" }
        },
        {
            polish: "BURN ENERGY DRINK",
            english: "Burn Energy Drink",
            chinese: "燃烧能量饮料",
            japanese: "バーンエナジードリンク",
            description: "Energy drink with caffeine and taurine.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 160, protein: 0, carbs: 40, fat: 0, sodium: 15, allergens: "None" }
        },
        {
            polish: "RED BULL",
            english: "Red Bull",
            chinese: "红牛",
            japanese: "レッドブル",
            description: "Energy drink with caffeine and taurine.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 110, protein: 1, carbs: 27, fat: 0, sodium: 10, allergens: "None" }
        },
        // DESSERTS
        {
            polish: "CHOCOLATE MOUSSE WITH CHIA SEEDS NEW",
            english: "Chocolate Mousse with Chia Seeds",
            chinese: "奇亚籽巧克力慕斯",
            japanese: "チアシードチョコレートムース",
            description: "Creamy chocolate mousse with nutritious chia seeds.",
            tags: ["vegetarian", "contains-dairy"],
            nutrition: { calories: 280, protein: 8, carbs: 32, fat: 14, sodium: 45, allergens: "Dairy" }
        },
        {
            polish: "TAPIOCA PUDDING NEW",
            english: "Tapioca Pudding",
            chinese: "木薯布丁",
            japanese: "タピオカプディング",
            description: "Tapioca balls in coconut milk with mango sauce and fresh fruits.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 220, protein: 3, carbs: 45, fat: 4, sodium: 25, allergens: "None" }
        },
        {
            polish: "BROWNIE",
            english: "Brownie",
            chinese: "布朗尼蛋糕",
            japanese: "ブラウニー",
            description: "Chocolate cake with miso caramel and a scoop of ice cream.",
            tags: ["contains-dairy", "contains-eggs"],
            nutrition: { calories: 420, protein: 6, carbs: 58, fat: 18, sodium: 180, allergens: "Dairy, Eggs, Wheat" }
        },
        // COFFEE & TEA
        {
            polish: "CAFFE LATTE",
            english: "Caffe Latte",
            chinese: "拿铁咖啡",
            japanese: "カフェラテ",
            description: "Espresso coffee with steamed milk.",
            tags: ["contains-dairy"],
            nutrition: { calories: 120, protein: 6, carbs: 8, fat: 4, sodium: 60, allergens: "Dairy" }
        },
        {
            polish: "CAPPUCCINO",
            english: "Cappuccino",
            chinese: "卡布奇诺",
            japanese: "カプチーノ",
            description: "Classic Italian espresso with milk foam.",
            tags: ["contains-dairy"],
            nutrition: { calories: 80, protein: 4, carbs: 6, fat: 3, sodium: 40, allergens: "Dairy" }
        },
        {
            polish: "DOPPIO",
            english: "Doppio",
            chinese: "双份浓缩咖啡",
            japanese: "ドッピオ",
            description: "Double espresso shot.",
            tags: ["vegan"],
            nutrition: { calories: 10, protein: 1, carbs: 1, fat: 0, sodium: 5, allergens: "None" }
        },
        {
            polish: "ESPRESSO",
            english: "Espresso",
            chinese: "浓缩咖啡",
            japanese: "エスプレッソ",
            description: "Classic Italian espresso.",
            tags: ["vegan"],
            nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 2, allergens: "None" }
        },
        {
            polish: "BLACK COFFEE",
            english: "Black Coffee",
            chinese: "黑咖啡",
            japanese: "ブラックコーヒー",
            description: "Cup of black coffee.",
            tags: ["vegan"],
            nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 2, allergens: "None" }
        },
        {
            polish: "WHITE COFFEE",
            english: "White Coffee",
            chinese: "白咖啡",
            japanese: "ホワイトコーヒー",
            description: "Coffee with hot milk.",
            tags: ["contains-dairy"],
            nutrition: { calories: 60, protein: 3, carbs: 4, fat: 2, sodium: 30, allergens: "Dairy" }
        },
        {
            polish: "TEA BLACK",
            english: "Black Tea",
            chinese: "红茶",
            japanese: "紅茶",
            description: "Classic black tea.",
            tags: ["vegan"],
            nutrition: { calories: 2, protein: 0, carbs: 0, fat: 0, sodium: 1, allergens: "None" }
        },
        {
            polish: "FRUIT TEA",
            english: "Fruit Tea",
            chinese: "果茶",
            japanese: "フルーツティー",
            description: "Fruit tea - raspberry, mint, cinnamon, Earl Gray, white, green, or Yerba Mate.",
            tags: ["vegan"],
            nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 2, allergens: "None" }
        },
        {
            polish: "FALL/WINTER TEA NEW",
            english: "Fall/Winter Tea",
            chinese: "秋冬茶",
            japanese: "秋冬季茶",
            description: "Tea with oranges, original spice mix, and honey.",
            tags: ["vegetarian"],
            nutrition: { calories: 45, protein: 0, carbs: 11, fat: 0, sodium: 3, allergens: "None" }
        },
        {
            polish: "RASPBERRY WINTER TEA NEW",
            english: "Raspberry Winter Tea",
            chinese: "覆盆子冬季茶",
            japanese: "ラズベリーウィンターティー",
            description: "Tea with grapefruit, red pepper, rosemary, and raspberries.",
            tags: ["vegetarian"],
            nutrition: { calories: 40, protein: 0, carbs: 10, fat: 0, sodium: 2, allergens: "None" }
        },
        {
            polish: "TEA WITH CHERRY VODKA NEW",
            english: "Tea with Cherry Vodka",
            chinese: "樱桃伏特加茶",
            japanese: "チェリーヴォッカティー",
            description: "Tea with homemade cherry vodka and cherries.",
            tags: ["alcohol"],
            nutrition: { calories: 80, protein: 0, carbs: 8, fat: 0, sodium: 2, allergens: "Alcohol" }
        },
        // SALADS
        {
            polish: "CAESAR BESTSELLER",
            english: "Caesar Salad",
            chinese: "凯撒沙拉",
            japanese: "シーザーサラダ",
            description: "Grilled romaine lettuce, bacon, Parmesan cheese, Caesar dressing, and croutons.",
            tags: ["contains-dairy"],
            nutrition: { calories: 420, protein: 22, carbs: 18, fat: 28, sodium: 850, allergens: "Dairy, Wheat" }
        },
        {
            polish: "CALIFORNIA NEW",
            english: "California Salad",
            chinese: "加利福尼亚沙拉",
            japanese: "カリフォルニアサラダ",
            description: "Grilled chicken with mixed greens, fresh pineapple, cherry tomatoes, cucumber, eggs, roasted sunflower seeds and sprouts in pineapple sauce.",
            tags: ["contains-eggs"],
            nutrition: { calories: 380, protein: 28, carbs: 25, fat: 18, sodium: 420, allergens: "Eggs" }
        },
        {
            polish: "CAMEMBERT NEW",
            english: "Camembert Salad",
            chinese: "卡门贝尔奶酪沙拉",
            japanese: "カマンベールサラダ",
            description: "Panko-breaded Camembert cheese with mixed greens, cranberry, almonds, green beans, and vinaigrette dressing.",
            tags: ["contains-dairy"],
            nutrition: { calories: 450, protein: 18, carbs: 22, fat: 32, sodium: 380, allergens: "Dairy, Wheat" }
        },
        // SOUPS
        {
            polish: "TOMATO SOUP",
            english: "Tomato Soup",
            chinese: "番茄汤",
            japanese: "トマトスープ",
            description: "Soup made with raspberry tomatoes and fresh basil.",
            tags: ["vegetarian", "vegan"],
            nutrition: { calories: 120, protein: 4, carbs: 18, fat: 3, sodium: 480, allergens: "None" }
        },
        {
            polish: "ŻUREK BESTSELLER",
            english: "Traditional Polish Sour Rye Soup",
            chinese: "传统波兰酸黑麦汤",
            japanese: "伝統的なポーランド酸ライ麦スープ",
            description: "Traditional Polish sour rye soup with white and smoked sausage, served with hard-boiled egg.",
            tags: ["contains-pork", "contains-eggs"],
            nutrition: { calories: 320, protein: 18, carbs: 25, fat: 15, sodium: 1200, allergens: "Pork, Wheat, Eggs" }
        },
        // BOWLS OF NOODLES
        {
            polish: "SPAGHETTI BOLOGNESE NEW",
            english: "Spaghetti Bolognese",
            chinese: "意大利肉酱面",
            japanese: "スパゲッティボロネーゼ",
            description: "Pork and beef meat sauce with tomatoes, garlic, and Parmesan cheese over spaghetti.",
            tags: ["contains-pork", "contains-beef", "contains-dairy"],
            nutrition: { calories: 580, protein: 28, carbs: 65, fat: 18, sodium: 920, allergens: "Pork, Beef, Wheat, Dairy" }
        },
        {
            polish: "PENNE WITH CHICKEN BESTSELLER",
            english: "Penne with Chicken",
            chinese: "鸡肉通心粉",
            japanese: "ペンネとチキン",
            description: "Penne pasta with chicken and broccoli in cream sauce, topped with Parmesan cheese.",
            tags: ["contains-dairy"],
            nutrition: { calories: 520, protein: 32, carbs: 55, fat: 18, sodium: 780, allergens: "Dairy, Wheat" }
        },
        {
            polish: "TAGLIATELLE WITH TENDERLOIN AND PORCINI",
            english: "Tagliatelle with Tenderloin and Porcini",
            chinese: "牛里脊牛肝菌意面",
            japanese: "テンダーロインとポルチーニのタリアテッレ",
            description: "Pork tenderloin with porcini mushrooms in cream sauce, served over tagliatelle pasta with Parmesan cheese.",
            tags: ["contains-pork", "contains-dairy"],
            nutrition: { calories: 680, protein: 38, carbs: 58, fat: 28, sodium: 850, allergens: "Pork, Wheat, Dairy" }
        },
        {
            polish: "LINGUINE",
            english: "Linguine with Seafood",
            chinese: "海鲜扁面",
            japanese: "シーフードリングイネ",
            description: "Seafood linguine with shrimps, calamari, mussels, cocktail tomatoes, cream sauce, garlic, and Parmesan cheese.",
            tags: ["contains-seafood", "contains-dairy"],
            nutrition: { calories: 620, protein: 35, carbs: 52, fat: 22, sodium: 980, allergens: "Seafood, Wheat, Dairy" }
        }
    ]
};

