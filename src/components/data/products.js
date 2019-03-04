let products =  [
    {
        id: 1,
        inventory: 3,
        quantity: 1,
        name: "Product 1",
        image: ["https://i.etsystatic.com/8515642/r/il/d559f9/1425153935/il_794xN.1425153935_euuu.jpg",
                "https://i.etsystatic.com/8515642/r/il/488b02/1377882296/il_794xN.1377882296_q42k.jpg"],
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
        image: ["https://i.etsystatic.com/8515642/r/il/47c5ee/541906693/il_794xN.541906693_4npw.jpg",
                "https://i.etsystatic.com/8515642/r/il/232d5f/541906691/il_794xN.541906691_mgwg.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$62",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        inventory: 5,
        quantity: 1,
        name: "Product 4",
        image: ["https://i.etsystatic.com/8515642/r/il/b2c0f3/605474788/il_794xN.605474788_540r.jpg",
                "https://i.etsystatic.com/8515642/r/il/afeb57/605578663/il_794xN.605578663_iz9o.jpg"],
        size: ["XS", "L"],
        price: "$48",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        inventory: 6,
        quantity: 1,
        name: "Product 5",
        image: ["https://i.etsystatic.com/8515642/r/il/2e8fd3/1082140804/il_794xN.1082140804_7cl5.jpg",
                "https://i.etsystatic.com/8515642/r/il/d5108e/1366730114/il_794xN.1366730114_1a8o.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$86",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 6,
        inventory: 2,
        quantity: 1,
        name: "Product 6",
        image: ["https://i.etsystatic.com/8515642/r/il/cfecff/1421176821/il_794xN.1421176821_fa3p.jpg",
                "https://i.etsystatic.com/8515642/r/il/70f3fe/1421176823/il_794xN.1421176823_nn15.jpg"],
        size: ["L"],
        price: "$59",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 7,
        inventory: 4,
        quantity: 1,
        name: "Product 7",
        image: ["https://i.etsystatic.com/8515642/r/il/0a5cf4/541908427/il_794xN.541908427_2gea.jpg",
                "https://i.etsystatic.com/8515642/r/il/6e1330/541908425/il_794xN.541908425_ccdc.jpg"],
        size: ["XS"],
        price: "$47",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 8,
        inventory: 5,
        quantity: 1,
        name: "Product 8",
        image: ["https://i.etsystatic.com/8515642/r/il/465d13/523165100/il_794xN.523165100_6e21.jpg",
                "https://i.etsystatic.com/8515642/r/il/5a427a/523165094/il_794xN.523165094_2mvm.jpg"],
        size: ["XS", "S", "M", "L"],
        price: "$34",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 9,
        inventory: 8,
        quantity: 1,
        name: "Product 9",
        image: ["https://i.etsystatic.com/8515642/r/il/a1bb39/1485655483/il_794xN.1485655483_qucv.jpg",
                "https://i.etsystatic.com/8515642/r/il/352074/1484864731/il_794xN.1484864731_2she.jpg"],
        size: ["XS", "M", "L"],
        price: "$65",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 10,
        inventory: 2,
        quantity: 1,
        name: "Product 10",
        image: ["https://i.etsystatic.com/8515642/r/il/054f99/538970385/il_794xN.538970385_o5aw.jpg",
                "https://i.etsystatic.com/8515642/r/il/265447/538970843/il_794xN.538970843_d7y2.jpg"],
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
