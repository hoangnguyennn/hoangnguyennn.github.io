const names = {
  cong: 'cong',
  thu: 'thu',
  mau: 'mau',
  chankhi: 'chankhi',
  bao: 'bao',
  khangbao: 'khangbao',
  chinhxac: 'chinhxac',
  netranh: 'netranh',
  tangstb: 'tangstb',
  giamstb: 'giamstb',
  null: 'null',
};

const lc = {
  [names.cong]: 22.8902439,
  [names.thu]: 21.1188271605,
  [names.mau]: 0.32887453874,
  [names.chankhi]: 3.77777777778,
  [names.bao]: 0.45,
  [names.khangbao]: 0.34935897435,
  [names.chinhxac]: 1.35,
  [names.netranh]: 2.07991360691,
  [names.tangstb]: 42.6923076923,
  [names.giamstb]: 41,
  [names.null]: 0,
};

const data = [
  {},
  {
    id: 1,
    name: 'truong tieu pham',
    links: [
      {
        id: 2,
        prop: names.cong,
        value: 2900,
      },
      {
        id: -1,
        prop: names.mau,
        value: 101400,
      },
      {
        id: 3,
        prop: names.chinhxac,
        value: 9760,
      },
      {
        id: -1,
        prop: names.netranh,
        value: 3900,
      },
    ],
  },
  {
    id: 2,
    name: 'luc tuyet ky',
    links: [
      {
        id: -1,
        prop: names.tangstb,
        value: 900,
      },
      {
        id: 1,
        prop: names.thu,
        value: 2900,
      },
      {
        id: 5,
        prop: names.bao,
        value: 9760,
      },
      {
        id: -1,
        prop: names.netranh,
        value: 3900,
      },
    ],
  },
  {
    id: 3,
    name: 'dien bat dich',
    links: [
      {
        id: -1,
        prop: names.tangstb,
        value: 900,
      },
      {
        id: 4,
        prop: names.cong,
        value: 2900,
      },
      {
        id: 6,
        prop: names.null,
        value: 7200,
      },
      {
        id: 13,
        prop: names.thu,
        value: 2900,
      },
    ],
  },
  {
    id: 4,
    name: 'to nhu',
    links: [
      {
        id: 1,
        prop: names.thu,
        value: 2420,
      },
      {
        id: 3,
        prop: names.chinhxac,
        value: 8130,
      },
      {
        id: 6,
        prop: names.null,
        value: 6000,
      },
      {
        id: -1,
        prop: names.thu,
        value: 2420,
      },
    ],
  },
  {
    id: 5,
    name: 'tang thu thu',
    links: [
      {
        id: 1,
        prop: names.tangstb,
        value: 750,
      },
      {
        id: 2,
        prop: names.chankhi,
        value: 15060,
      },
      {
        id: -1,
        prop: names.bao,
        value: 8130,
      },
      {
        id: 9,
        prop: names.chinhxac,
        value: 8130,
      },
    ],
  },
  {
    id: 6,
    name: 'dien linh nhi',
    links: [
      {
        id: 1,
        prop: names.tangstb,
        value: 600,
      },
      {
        id: 3,
        prop: names.netranh,
        value: 2600,
      },
      {
        id: 4,
        prop: names.cong,
        value: 1930,
      },
      {
        id: -1,
        prop: names.bao,
        value: 6500,
      },
    ],
  },
  {
    id: 7,
    name: 'chu nhat tien',
    links: [
      {
        id: -1,
        prop: names.cong,
        value: 2900,
      },
      {
        id: -1,
        prop: names.mau,
        value: 101400,
      },
      {
        id: 8,
        prop: names.mau,
        value: 101400,
      },
      {
        id: -1,
        prop: names.tangstb,
        value: 900,
      },
    ],
  },
  {
    id: 8,
    name: 'tieu hoan',
    links: [
      {
        id: -1,
        prop: names.chankhi,
        value: 15060,
      },
      {
        id: 7,
        prop: names.giamstb,
        value: 1500,
      },
      {
        id: -1,
        prop: names.null,
        value: 6000,
      },
      {
        id: 14,
        prop: names.thu,
        value: 2420,
      },
    ],
  },
  {
    id: 9,
    name: 'pho tri',
    links: [
      {
        id: -1,
        prop: names.tangstb,
        value: 750,
      },
      {
        id: 1,
        prop: names.thu,
        value: 2420,
      },
      {
        id: -1,
        prop: names.mau,
        value: 84500,
      },
      {
        id: 10,
        prop: names.chinhxac,
        value: 8130,
      },
    ],
  },
  {
    id: 10,
    name: 'phap tuong',
    links: [
      {
        id: 2,
        prop: names.cong,
        value: 2420,
      },
      {
        id: 9,
        prop: names.netranh,
        value: 3250,
      },
      {
        id: -1,
        prop: names.null,
        value: 6000,
      },
      {
        id: 5,
        prop: names.netranh,
        value: 3250,
      },
    ],
  },
  {
    id: 11,
    name: 'tan vo viem',
    links: [
      {
        id: -1,
        prop: names.cong,
        value: 2420,
      },
      {
        id: -1,
        prop: names.chankhi,
        value: 15060,
      },
      {
        id: -1,
        prop: names.null,
        value: 6000,
      },
      {
        id: 14,
        prop: names.netranh,
        value: 3250,
      },
    ],
  },
  {
    id: 12,
    name: 'van man',
    links: [
      {
        id: 2,
        prop: names.cong,
        value: 1930,
      },
      {
        id: 4,
        prop: names.bao,
        value: 6500,
      },
      {
        id: 13,
        prop: names.chankhi,
        value: 12050,
      },
      {
        id: 6,
        prop: names.mau,
        value: 67600,
      },
    ],
  },
  {
    id: 13,
    name: 'tong dai nhan',
    links: [
      {
        id: 3,
        prop: names.khangbao,
        value: 10400,
      },
      {
        id: 5,
        prop: names.cong,
        value: 1930,
      },
      {
        id: 6,
        prop: names.mau,
        value: 67600,
      },
      {
        id: 12,
        prop: names.giamstb,
        value: 1200,
      },
    ],
  },
  {
    id: 14,
    name: 'da cau dao nhan',
    links: [
      {
        id: 7,
        prop: names.giamstb,
        value: 1200,
      },
      {
        id: -1,
        prop: names.chinhxac,
        value: 6500,
      },
      {
        id: 8,
        prop: names.thu,
        value: 1930,
      },
      {
        id: 11,
        prop: names.null,
        value: 4800,
      },
    ],
  },
  {
    id: 15,
    name: 'luc vi',
    links: [
      {
        id: 1,
        prop: names.mau,
        value: 67600,
      },
      {
        id: -1,
        prop: names.giamstb,
        value: 1200,
      },
      {
        id: -1,
        prop: names.null,
        value: 4800,
      },
      {
        id: 16,
        prop: names.cong,
        value: 1930,
      },
    ],
  },
  {
    id: 16,
    name: 'tam vi',
    links: [
      {
        id: 1,
        prop: names.chankhi,
        value: 12050,
      },
      {
        id: -1,
        prop: names.tangstb,
        value: 600,
      },
      {
        id: -1,
        prop: names.null,
        value: 4800,
      },
      {
        id: 15,
        prop: names.thu,
        value: 1930,
      },
    ],
  },
];

const result = [];
function toHopChap(arr = [], arrIndex = 0, curValue = 1) {
  for (let i = curValue; i <= 16; i++) {
    arr[arrIndex] = i;
    if (arrIndex === 5) {
      const object = generateValue(arr);
      const item = {
        ...object,
        total: tinhLucChien(generateValue(arr)),
      };
      result.push(item);
    } else {
      toHopChap(arr, arrIndex + 1, i + 1);
    }
  }
}

function generateValue(arr) {
  const result = {
    names: [],
  };
  for (let i = 0; i < arr.length; i++) {
    result.names.push(data[arr[i]].name);
    for (let k = 0; k < data[arr[i]].links.length; k++) {
      const item = data[arr[i]].links[k];
      if (arr.includes(item.id)) {
        result[item.prop] = (result[item.prop] || 0) + item.value;
      }
    }
  }

  return result;
}

function tinhLucChien(result) {
  let sum = 0;
  for (const prop in result) {
    if (prop !== 'names') {
      sum += result[prop] * lc[prop];
    }
  }

  return Math.round(sum);
}

toHopChap();
result.sort((a, b) => b.total - a.total);

result.length = 5;
console.log(result);
