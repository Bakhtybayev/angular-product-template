import { ProductAction, ProductActionType } from "../action/addProduct.action";

export const InitialState = {
  mansJakets: {
    pageOne: [
      {
        id: 1333,
        title: 'Flaw Gre',
        price: 9800,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H7aa563cc30104a7195cab495f716a5aa2.jpg'
      },
      {
        id: 1444,
        title: 'Gotten Ta',
        price: 3300,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1DHpWnwLD8KJjSszeq6yGRpXav.jpg'
      },
      {
        id: 1555,
        title: 'Calvin CL',
        price: 8800,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H5d64d752f4854d708efa0d08205c87c3M.jpg'
      },
    ],
    pageTwo: [
      {
        id: 1556,
        title: 'Yerik',
        price: 7760,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H5d64d752f4854d708efa0d08205c87c3M.jpg'
      },
      {
        id: 1557,
        title: 'Calvin CL',
        price: 8800,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H5d64d752f4854d708efa0d08205c87c3M.jpg'
      },
      {
        id: 1558,
        title: 'Jeans CS',
        price: 6540,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H7aa563cc30104a7195cab495f716a5aa2.jpg'
      },
    ],
    pageThree: [
      {
        id: 1559,
        title: 'Yervin AOT',
        price: 1254,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1DHpWnwLD8KJjSszeq6yGRpXav.jpg'
      },
      {
        id: 1560,
        title: 'Almaz KR',
        price: 9808,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H5d64d752f4854d708efa0d08205c87c3M.jpg'
      },
      {
        id: 1561,
        title: 'Baleci OR',
        price: 3123,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H5d64d752f4854d708efa0d08205c87c3M.jpg'
      }
    ]
  },
  femaleJakets: {
    pageOne: [
      {
        id: 1888,
        title: 'Fary GR',
        price: 9220,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H8439d03816b64ed1b41b2f41a3b4a5c9j.jpg'
      },
      {
        id: 1999,
        title: 'Ferry GT',
        price: 3380,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      },
      {
        id: 2020,
        title: 'Ostin CL',
        price: 1800,
        count: 10,
        image: 'https://img.shopstyle-cdn.com/sim/75/7e/757e7ec59218aadb7f158ba503c60441_best/crest-embroidered-military-jacket.jpg'
      }
    ],
    pageTwo: [
      {
        id: 4710,
        title: 'Cail VV',
        price: 9866,
        count: 10,
        image: 'https://img.shopstyle-cdn.com/sim/75/7e/757e7ec59218aadb7f158ba503c60441_best/crest-embroidered-military-jacket.jpg'
      },
      {
        id: 4823,
        title: 'Lambo IZ',
        price: 3380,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      },
      {
        id: 9102,
        title: 'Clly OE',
        price: 6698,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H8439d03816b64ed1b41b2f41a3b4a5c9j.jpg'
      }
    ],
    pageThree: [
      {
        id: 4886,
        title: 'Oliver SS',
        price: 7777,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      },
      {
        id: 2847,
        title: 'Gerimy VS',
        price: 9933,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H8439d03816b64ed1b41b2f41a3b4a5c9j.jpg'
      },
      {
        id: 2020,
        title: 'Orlik PM',
        price: 1800,
        count: 10,
        image: 'https://img.shopstyle-cdn.com/sim/75/7e/757e7ec59218aadb7f158ba503c60441_best/crest-embroidered-military-jacket.jpg'
      }
    ]
  },
  mansShoes: {
    pageOne: [
      {
        id: 2122,
        title: 'Adidas',
        price: 6670,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      },
      {
        id: 2212,
        title: 'Nike',
        price: 9870,
        count: 10,
        image: 'https://sohoshop.ru/upload/iblock/8b9/8b917d24e2857a694af8450564d079f0.jpg'
      },
      {
        id: 2322,
        title: 'Asics',
        price: 9288,
        count: 10,
        image: 'https://ups.aopcdn.com/s24610/goods/18893/1437ub2a197d2a6f248e3986549941c665ddc.jpg'
      }
    ],
    pageTwo: [
      {
        id: 7798,
        title: 'ZARA',
        price: 9944,
        count: 10,
        image: 'https://sohoshop.ru/upload/iblock/8b9/8b917d24e2857a694af8450564d079f0.jpg'
      },
      {
        id: 6698,
        title: 'LC WIKI',
        price: 2432,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      },
      {
        id: 3345,
        title: 'KATON',
        price: 1254,
        count: 10,
        image: 'https://ups.aopcdn.com/s24610/goods/18893/1437ub2a197d2a6f248e3986549941c665ddc.jpg'
      }
    ],
    pageThree: [
      {
        id: 9090,
        title: 'Colins',
        price: 9090,
        count: 10,
        image: 'https://ups.aopcdn.com/s24610/goods/18893/1437ub2a197d2a6f248e3986549941c665ddc.jpg'
      },
      {
        id: 2343,
        title: 'Premya',
        price: 2342,
        count: 10,
        image: 'https://sohoshop.ru/upload/iblock/8b9/8b917d24e2857a694af8450564d079f0.jpg'
      },
      {
        id: 1818,
        title: 'Anglya',
        price: 8787,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      }
    ]
  },
  femaleShoes: {
    pageOne: [
      {
        id: 2699,
        title: 'Americano',
        price: 1111,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 2788,
        title: 'Capuchino',
        price: 1110,
        count: 10,
        image: 'https://luxvipshop.ru/assets/images/products/3668/40831-zhenskie-kozhanye-lakovye-bosonozhki-gucci-zelenye-na-vysokom-kabluke-1.jpg'
      },
      {
        id: 2801,
        title: 'Newergi',
        price: 9998,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H87561762eae14720977d1577ec64bf179.jpg'
      }
    ],
    pageTwo: [
      {
        id: 6678,
        title: 'Americano',
        price: 8709,
        count: 10,
        image: 'https://luxvipshop.ru/assets/images/products/3668/40831-zhenskie-kozhanye-lakovye-bosonozhki-gucci-zelenye-na-vysokom-kabluke-1.jpg'
      },
      {
        id: 4434,
        title: 'Capuchino',
        price: 2266,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 9870,
        title: 'Newergi',
        price: 9795,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H87561762eae14720977d1577ec64bf179.jpg'
      }
    ],
    pageThree: [
      {
        id: 6782,
        title: 'Americano',
        price: 7690,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/H87561762eae14720977d1577ec64bf179.jpg'
      },
      {
        id: 3378,
        title: 'Capuchino',
        price: 4560,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 9104,
        title: 'Newergi',
        price: 4321,
        count: 10,
        image: 'https://luxvipshop.ru/assets/images/products/3668/40831-zhenskie-kozhanye-lakovye-bosonozhki-gucci-zelenye-na-vysokom-kabluke-1.jpg'
      }
    ]
  },
  mansOther: {
    pageOne: [
      {
        id: 2101,
        title: 'Adidas',
        price: 6670,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      },
      {
        id: 999,
        title: 'Nike',
        price: 1000,
        count: 20,
        image: 'http://images.esellerpro.com/3244/I/152/094/WC03281_Khaki_1Front2.jpg'
      },
      {
        id: 998,
        title: 'Adidas',
        price: 3000,
        count: 20,
        image: 'https://cdn1.ozone.ru/multimedia/1029537509.jpg'
      }
    ],
    pageTwo: [
      {
        id: 7222,
        title: 'Erosh',
        price: 9876,
        count: 10,
        image: 'http://images.esellerpro.com/3244/I/152/094/WC03281_Khaki_1Front2.jpg'
      },
      {
        id: 4222,
        title: 'Bars',
        price: 5678,
        count: 20,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      },
      {
        id: 7666,
        title: 'Tiger',
        price: 6354,
        count: 20,
        image: 'https://cdn1.ozone.ru/multimedia/1029537509.jpg'
      }
    ],
    pageThree: [
      {
        id: 7900,
        title: 'Orlik',
        price: 6567,
        count: 10,
        image: 'https://cdn1.ozone.ru/multimedia/1029537509.jpg'
      },
      {
        id: 7901,
        title: 'Borik',
        price: 2342,
        count: 20,
        image: 'http://images.esellerpro.com/3244/I/152/094/WC03281_Khaki_1Front2.jpg'
      },
      {
        id: 7991,
        title: 'Chorik',
        price: 2355,
        count: 20,
        image: 'https://ae04.alicdn.com/kf/Hc8e29da1b7d84920ab18b770da08e7d02.jpg'
      }
    ]
  },
  femaleOther: {
    pageOne: [
      {
        id: 997,
        title: 'AWaer OS',
        price: 8780,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      },
      {
        id: 1000,
        title: 'Americano',
        price: 1111,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 995,
        title: 'Capuchino',
        price: 1110,
        count: 10,
        image: 'https://s6.mihanvideo.com/video_thumbs/w2Gyz61Vw9Q5fo0siGqO.jpg'
      }
    ],
    pageTwo: [
      {
        id: 8897,
        title: 'Winda SS',
        price: 9556,
        count: 10,
        image: 'https://s6.mihanvideo.com/video_thumbs/w2Gyz61Vw9Q5fo0siGqO.jpg'
      },
      {
        id: 4567,
        title: 'Ernos SO',
        price: 4778,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 2132,
        title: 'Goreni GO',
        price: 2332,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      }
    ],
    pageThree: [
      {
        id: 9867,
        title: 'Orsiya',
        price: 6678,
        count: 10,
        image: 'https://ae04.alicdn.com/kf/HTB1f2o6eyMnBKNjSZFoq6zOSFXaJ.jpg'
      },
      {
        id: 7646,
        title: 'Georgia',
        price: 3451,
        count: 10,
        image: 'https://ae01.alicdn.com/kf/HTB19JMTQVXXXXXrXFXXq6xXFXXXa/Loslandifen.jpg'
      },
      {
        id: 2457,
        title: 'Armani',
        price: 9990,
        count: 10,
        image: 'https://techcity.pk/thumbnails/h/950/images/5bf69db437d58-red-black-high-heels-shoes-new-pointed-toe-pumps-shoes-9775.jpg'
      }
    ]
  }
};

export function addProductReducer(state: any = InitialState, action: ProductAction) {
  switch (action.type) {
    case ProductActionType.ADD_MANS_JACKET_PAGE_ONE: {
      return [
        ...state,
        state.mansJakets.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MANS_JACKET_PAGE_TWO: {
      return [
        ...state,
        state.mansJakets.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MANS_JACKET_PAGE_THREE: {
      return [
        ...state,
        state.mansJakets.pageThree.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_JACKET_PAGE_ONE: {
      return [
        ...state,
        state.femaleJakets.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_JACKET_PAGE_TWO: {
      return [
        ...state,
        state.femaleJakets.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_JACKET_PAGE_THREE: {
      return [
        ...state,
        state.femaleJakets.pageThree.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_SHOES_PAGE_ONE: {
      return [
        ...state,
        state.mansShoes.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_SHOES_PAGE_TWO: {
      return [
        ...state,
        state.mansShoes.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_SHOES_PAGE_THREE: {
      return [
        ...state,
        state.mansShoes.pageThree.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_SHOES_PAGE_ONE: {
      return [
        ...state,
        state.femaleShoes.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_SHOES_PAGE_TWO: {
      return [
        ...state,
        state.femaleShoes.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_SHOES_PAGE_THREE: {
      return [
        ...state,
        state.femaleShoes.pageThree.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_OTHER_PAGE_ONE: {
      return [
        ...state,
        state.mansOther.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_OTHER_PAGE_TWO: {
      return [
        ...state,
        state.mansOther.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_MENS_OTHER_PAGE_THREE: {
      return [
        ...state,
        state.mansOther.pageThree.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_OTHER_PAGE_ONE: {
      return [
        ...state,
        state.femaleOther.pageOne.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_OTHER_PAGE_TWO: {
      return [
        ...state,
        state.femaleOther.pageTwo.push(action.payload)
      ]
    }
    case ProductActionType.ADD_WOMENS_OTHER_PAGE_THREE: {
      return [
        ...state,
        state.femaleOther.pageThree.push(action.payload)
      ]
    }
    default: {
      return state
    }
  }
}
