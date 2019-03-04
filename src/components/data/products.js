let products =  [
    {
        id: 1,
        inventory: 3,
        quantity: 1,
        name: "Product 1",
        image: ["https://i.etsystatic.com/8515642/r/il/386f29/836109853/il_570xN.836109853_t5iv.jpg",
                "https://i.etsystatic.com/8515642/r/il/cfc788/1157202130/il_570xN.1157202130_5203.jpg",
                "https://i.etsystatic.com/8515642/r/il/7f4726/1157202138/il_570xN.1157202138_o3tw.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        inventory: 10,
        quantity: 1,
        name: "Product 2",
        image: ["https://i.etsystatic.com/8515642/r/il/73c4af/523161998/il_570xN.523161998_3wwi.jpg",
                "https://i.etsystatic.com/8515642/r/il/8601a9/523161986/il_570xN.523161986_kkss.jpg",
                "https://i.etsystatic.com/8515642/r/il/d881ee/523230457/il_570xN.523230457_bl22.jpg"],
        size: ["XS", "M", "L"],
        price: "$85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        inventory: 1,
        quantity: 1,
        name: "Product 3",
        image: ["https://i.etsystatic.com/8515642/r/il/6c3e4b/586032486/il_570xN.586032486_33vw.jpg",
                "https://i.etsystatic.com/8515642/r/il/c04cb0/586141795/il_570xN.586141795_9a8r.jpg",
                "https://i.etsystatic.com/8515642/r/il/751224/528473816/il_570xN.528473816_scgv.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$62",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        inventory: 5,
        quantity: 1,
        name: "Product 4",
        image: ["https://i.etsystatic.com/8515642/r/il/cfc499/1262808395/il_570xN.1262808395_93g7.jpg",
                "https://i.etsystatic.com/8515642/r/il/a66045/1262808385/il_570xN.1262808385_hlvz.jpg",
                "https://i.etsystatic.com/8515642/r/il/6ac1ca/1215585878/il_570xN.1215585878_nr52.jpg"],
        size: ["XS", "L"],
        price: "$48",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        inventory: 6,
        quantity: 1,
        name: "Product 5",
        image: ["https://i.etsystatic.com/8515642/r/il/b57657/1186931874/il_570xN.1186931874_p8il.jpg",
                "https://i.etsystatic.com/8515642/r/il/0d3dda/1186931918/il_570xN.1186931918_s3id.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$86",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 6,
        inventory: 2,
        quantity: 1,
        name: "Product 6",
        image: ["https://i.etsystatic.com/8515642/r/il/a7793e/1518358022/il_570xN.1518358022_rvow.jpg",
                "https://i.etsystatic.com/8515642/r/il/989cdd/1518358982/il_570xN.1518358982_7z1v.jpg"],
        size: ["L"],
        price: "$59",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 7,
        inventory: 4,
        quantity: 1,
        name: "Product 7",
        image: ["https://i.etsystatic.com/8515642/r/il/9fa803/1661695004/il_570xN.1661695004_7i36.jpg",
                "https://i.etsystatic.com/8515642/r/il/de5374/1709162993/il_570xN.1709162993_6qsw.jpg",
                "https://i.etsystatic.com/8515642/r/il/8d05ef/1661695192/il_570xN.1661695192_j24s.jpg"],
        size: ["XS"],
        price: "$47",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 8,
        inventory: 5,
        quantity: 1,
        name: "Product 8",
        image: ["https://i.etsystatic.com/8515642/r/il/38f377/585814323/il_570xN.585814323_mkwv.jpg",
                "https://i.etsystatic.com/8515642/r/il/470173/585814333/il_570xN.585814333_8nt8.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$34",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 9,
        inventory: 8,
        quantity: 1,
        name: "Product 9",
        image: ["https://i.etsystatic.com/8515642/r/il/3e1657/1226574148/il_570xN.1226574148_bq0u.jpg",
                "https://i.etsystatic.com/8515642/r/il/834b40/1273791539/il_570xN.1273791539_b0l1.jpg"],
        size: ["XS", "M", "L"],
        price: "$65",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 10,
        inventory: 2,
        quantity: 1,
        name: "Product 10",
        image: ["https://i.etsystatic.com/8515642/r/il/702c15/1565848047/il_570xN.1565848047_truk.jpg",
                "https://i.etsystatic.com/8515642/r/il/f70f39/1518389074/il_570xN.1518389074_agjd.jpg"],
        size: ["XS", "S", "M"],
        price: "$73",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 11,
        inventory: 5,
        quantity: 1,
        name: "Product 11",
        image: ["https://i.etsystatic.com/8515642/r/il/e0537f/579972364/il_570xN.579972364_e7dv.jpg",
                "https://i.etsystatic.com/8515642/r/il/01715c/579972352/il_570xN.579972352_ap1y.jpg"],
        size: ["M", "L"],
        price: "$29",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 12,
        inventory: 9,
        quantity: 1,
        name: "Product 12",
        image: ["https://i.etsystatic.com/8515642/r/il/9f7bc8/600610416/il_570xN.600610416_llus.jpg",
                "https://i.etsystatic.com/8515642/r/il/4f94bc/600610422/il_570xN.600610422_7d7l.jpg"],
        size: ["XS", "S", "L"],
        price: "$50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

export default products
