const countries = [
    { name: "USD", country: "US Dollar" },
    { name: "EUR", country: "Euro" },
    { name: "GBP", country: "British Pound Sterling" },
    { name: "CAD", country: "Canadian Dollar" },
    { name: "TZS", country: "Tanzanian Shilling" },
    { name: "CHF", country: "Swiss Franc" },
    { name: "ZAR", country: "South African Rand" },
    { name: "JPY", country: "Japanese Yen" },
    { name: "NOK", country: "Norwegian Krone" },
    { name: "SEK", country: "Swedish Krona" },
    { name : "AFN", country: "Afghan Afghani"},
    { name : "ALL", country: "Albanian Lek"},
    { name : "DZD", country: "Algerian Dinar"},
    { name : "AOA", country: "Angolan Kwanza"},
    { name : "ARS", country: "Argentine Peso"},
    { name : "AMD", country: "Armenian Dram"},
    { name : "AWG", country: "Aruban Florin"},
    { name : "AUD", country: "Australian Dollar"},
    { name : "AZN", country: "Azerbaijani Manat"},
    { name : "BSD", country: "Bahamian Dollar"},
    { name : "BHD", country: "Bahraini Dinar"},
    { name : "BDT", country: "Bangladeshi Taka"},
    { name : "BBD", country: "Barbadian Dollar"},
    { name : "BYR", country: "Belarusian Ruble"},
    { name : "BEF", country: "Belgian Franc"},
    { name : "BZD", country: "Belize Dollar"},
    { name : "BMD", country: "Bermudan Dollar"},
    { name : "BTN", country: "Bhutanese Ngultrum"},
    { name : "BTC", country: "Bitcoin"},
    { name : "BOB", country: "Bolivian Boliviano"},
    { name : "BAM", country: "Bosnia-Herzegovina Convertible Mark"},
    { name : "BWP", country: "Botswanan Pula"},
    { name : "BRL", country: "Brazilian Real"},
    { name : "BND", country: "Brunei Dollar"},
    { name : "BGN", country: "Bulgarian Lev"},
    { name : "BIF", country: "Burundian Franc"},
    { name : "KHR", country: "Cambodian Riel"},
    { name : "CVE", country: "Cape Verdean Escudo"},
    { name : "KYD", country: "Cayman Islands Dollar"},
    { name : "XOF", country: "CFA Franc BCEAO"},
    { name : "XAF", country: "CFA Franc BEAC"},
    { name : "XPF", country: "CFP Franc"},
    { name : "CLP", country: "Chilean Peso"},
    { name : "CNY", country: "Chinese Yuan"},
    { name : "COP", country: "Colombian Peso"},
    { name : "KMF", country: "Comorian Franc"},
    { name : "CDF", country: "Congolese Franc"},
    { name : "CRC", country: "Costa Rican ColÃ³n"},
    { name : "HRK", country: "Croatian Kuna"},
    { name : "CUC", country: "Cuban Convertible Peso"},
    { name : "CZK", country: "Czech Republic Koruna"},
    { name : "DKK", country: "Danish Krone"},
    { name : "DJF", country: "Djiboutian Franc"},
    { name : "DOP", country: "Dominican Peso"},
    { name : "XCD", country: "East Caribbean Dollar"},
    { name : "EGP", country: "Egyptian Pound"},
    { name : "ERN", country: "Eritrean Nakfa"},
    { name : "EEK", country: "Estonian Kroon"},
    { name : "ETB", country: "Ethiopian Birr"},
    { name : "FKP", country: "Falkland Islands Pound"},
    { name : "FJD", country: "Fijian Dollar"},
    { name : "GMD", country: "Gambian Dalasi"},
    { name : "GEL", country: "Georgian Lari"},
    { name : "DEM", country: "German Mark"},
    { name : "GHS", country: "Ghanaian Cedi"},
    { name : "GIP", country: "Gibraltar Pound"},
    { name : "GRD", country: "Greek Drachma"},
    { name : "GTQ", country: "Guatemalan Quetzal"},
    { name : "GNF", country: "Guinean Franc"},
    { name : "GYD", country: "Guyanaese Dollar"},
    { name : "HTG", country: "Haitian Gourde"},
    { name : "HNL", country: "Honduran Lempira"},
    { name : "HKD", country: "Hong Kong Dollar"},
    { name : "HUF", country: "Hungarian Forint"},
    { name : "ISK", country: "Icelandic KrÃ³na"},
    { name : "INR", country: "Indian Rupee"},
    { name : "IDR", country: "Indonesian Rupiah"},
    { name : "IRR", country: "Iranian Rial"},
    { name : "IQD", country: "Iraqi Dinar"},
    { name : "ILS", country: "Israeli New Sheqel"},
    { name : "ITL", country: "Italian Lira"},
    { name : "JMD", country: "Jamaican Dollar"},
    { name : "JOD", country: "Jordanian Dinar"},
    { name : "KZT", country: "Kazakhstani Tenge"},
    { name : "KES", country: "Kenyan Shilling"},
    { name : "KWD", country: "Kuwaiti Dinar"},
    { name : "KGS", country: "Kyrgystani Som"},
    { name : "LAK", country: "Laotian Kip"},
    { name : "LVL", country: "Latvian Lats"},
    { name : "LBP", country: "Lebanese Pound"},
    { name : "LSL", country: "Lesotho Loti"},
    { name : "LRD", country: "Liberian Dollar"},
    { name : "LYD", country: "Libyan Dinar"},
    { name : "LTL", country: "Lithuanian Litas"},
    { name : "MOP", country: "Macanese Pataca"},
    { name : "MKD", country: "Macedonian Denar"},
    { name : "MGA", country: "Malagasy Ariary"},
    { name : "MWK", country: "Malawian Kwacha"},
    { name : "MYR", country: "Malaysian Ringgit"},
    { name : "MVR", country: "Maldivian Rufiyaa"},
    { name : "MRO", country: "Mauritanian Ouguiya"},
    { name : "MUR", country: "Mauritian Rupee"},
    { name : "MXN", country: "Mexican Peso"},
    { name : "MDL", country: "Moldovan Leu"},
    { name : "MNT", country: "Mongolian Tugrik"},
    { name : "MAD", country: "Moroccan Dirham"},
    { name : "MZM", country: "Mozambican Metical"},
    { name : "MMK", country: "Myanmar Kyat"},
    { name : "NAD", country: "Namibian Dollar"},
    { name : "NPR", country: "Nepalese Rupee"},
    { name : "ANG", country: "Netherlands Antillean Guilder"},
    { name : "TWD", country: "New Taiwan Dollar"},
    { name : "NZD", country: "New Zealand Dollar"},
    { name : "NIO", country: "Nicaraguan CÃ³rdoba"},
    { name : "NGN", country: "Nigerian Naira"},
    { name : "KPW", country: "North Korean Won"},
    { name : "OMR", country: "Omani Rial"},
    { name : "PKR", country: "Pakistani Rupee"},
    { name : "PAB", country: "Panamanian Balboa"},
    { name : "PGK", country: "Papua New Guinean Kina"},
    { name : "PYG", country: "Paraguayan Guarani"},
    { name : "PEN", country: "Peruvian Nuevo Sol"},
    { name : "PHP", country: "Philippine Peso"},
    { name : "PLN", country: "Polish Zloty"},
    { name : "QAR", country: "Qatari Rial"},
    { name : "RON", country: "Romanian Leu"},
    { name : "RUB", country: "Russian Ruble"},
    { name : "RWF", country: "Rwandan Franc"},
    { name : "SVC", country: "Salvadoran ColÃ³n"},
    { name : "WST", country: "Samoan Tala"},
    { name : "SAR", country: "Saudi Riyal"},
    { name : "RSD", country: "Serbian Dinar"},
    { name : "SCR", country: "Seychellois Rupee"},
    { name : "SLL", country: "Sierra Leonean Leone"},
    { name : "SGD", country: "Singapore Dollar"},
    { name : "SKK", country: "Slovak Koruna"},
    { name : "SBD", country: "Solomon Islands Dollar"},
    { name : "SOS", country: "Somali Shilling"},
    { name : "KRW", country: "South Korean Won"},
    { name : "XDR", country: "Special Drawing Rights"},
    { name : "LKR", country: "Sri Lankan Rupee"},
    { name : "SHP", country: "St. Helena Pound"},
    { name : "SDG", country: "Sudanese Pound"},
    { name : "SRD", country: "Surinamese Dollar"},
    { name : "SZL", country: "Swazi Lilangeni"},
    { name : "SYP", country: "Syrian Pound"},
    { name : "STD", country: "São Tomé and Príncipe Dobra"},
    { name : "TJS", country: "Tajikistani Somoni"},
    { name : "TZS", country: "Tanzanian Shilling"},
    { name : "THB", country: "Thai Baht"},
    { name : "TOP", country: "Tongan pa'anga"},
    { name : "TTD", country: "Trinidad & Tobago Dollar"},
    { name : "TND", country: "Tunisian Dinar"},
    { name : "TRY", country: "Turkish Lira"},
    { name : "TMT", country: "Turkmenistani Manat"},
    { name : "UGX", country: "Ugandan Shilling"},
    { name : "UAH", country: "Ukrainian Hryvnia"},
    { name : "AED", country: "United Arab Emirates Dirham"},
    { name : "UYU", country: "Uruguayan Peso"},
    { name : "UZS", country: "Uzbekistan Som"},
    { name : "VUV", country: "Vanuatu Vatu"},
    { name : "VEF", country: "Venezuelan BolÃ­var"},
    { name : "VND", country: "Vietnamese Dong"},
    { name : "YER", country: "Yemeni Rial"},
    { name: "ZMK", country: "Zambian Kwacha" },
]

export default countries;