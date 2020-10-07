// eslint-disable-next-line import/prefer-default-export
export const subProducts: any = {
  Tessuti: [
    'Tessuti ptfe',
    'Tessuti siliconati',
    'PTFE e UHMW',
    'Bobine',
    'Nastri trasportatori',
    'Fogli antiaderenti'
  ]
};

export const mainProducts: any = ['TESSUTI', 'POLIURETANO', 'GOMME_E_MATERIALI_ISOLANTI', 'MATERIE_PLASTICHE'];

export const subTrees: any = {
  GOMME_E_MATERIALI_ISOLANTI: {
    children: [
      {
        children: [
          {
            value: 'COMPATTA'
          },
          {
            value: 'ESPANSA'
          }
        ],
        value: 'GOMMA_SILICONICA'
      },
      {
        value: 'ALTRE_GOMME',
      },
      {
        value: 'BAKELITE',
      },
      {
        value: 'VETRORESINA',
      },
      {
        value: 'ISOLANTI_IN_FIBRA_DI_VETRO'
      },
      {
        value: 'ALTRI'
      }
    ],
    value: 'GOMME_E_MATERIALI_ISOLANTI',
  },
  MATERIE_PLASTICHE: {
    children: [
      {
        children: [
          {
            value: 'SEMILAVORATI_MP'
          },
          {
            value: 'TAGLIERI_E_CEPPI'
          }
        ],
        value: 'POLIETILENE'
      },
      {
        value: 'POLIAMMIDI',
      },
      {
        value: 'PTFE',
      },
      {
        value: 'POLICARBONATO',
      },
      {
        value: 'METACRILATO'
      },
      {
        value: 'PVC_ESPANSO'
      }
    ],
    value: 'MATERIE_PLASTICHE',
  },
  POLIURETANO: {
    children: [
      {
        children: [
          {
            value: 'SEMILAVORATI'
          },
          {
            value: 'ESTRATTIVA'
          },
          {
            value: 'SGOMBRANEVE'
          },
          {
            value: 'AGRICOLTURA_E_ZOOTECNICA'
          },
          {
            value: 'INDUSTRIA_EDILE'
          },
          {
            value: 'APPLICAZIONI_MECCANICHE'
          }
        ],
        value: 'POLIURETANO_COMPATTO'
      },
      {
        value: 'POLIURETANO_ESPANSO',
      },
      {
        value: 'RACLE_SERIGRAFIA',
      }
    ],
    value: 'POLIURETANO',
  },
  TESSUTI: {
    children: [
      {
        children: [
          {
            value: 'ADESIVI_E_NON'
          },
          {
            value: 'ANTISTATICI_E_NON'
          }
        ],
        value: 'TESSUTI_PTFE'
      },
      {
        value: 'SILICONATI',
      },
      {
        value: 'PTFE_UHMW',
      },
      {
        value: 'BOBINE',
      },
      {
        value: 'NASTRI_TRASPORTATORI',
      },
      {
        value: 'ANTIADERENTI'
      },
    ],
    value: 'TESSUTI',
  }
};

export const productsInfo: any = {
  ADESIVI_E_NON: {
    imgFolder: '',
    imgs: []
  },
  AGRICOLTURA_E_ZOOTECNICA: {
    imgFolder: '',
    imgs: []
  },
  ALTRE_GOMME: {
    imgFolder: '',
    imgs: []
  },
  ALTRI: {
    imgFolder: '',
    imgs: []
  },
  ANTIADERENTI: {
    imgFolder: '',
    imgs: []
  },
  ANTISTATICI_E_NON: {
    imgFolder: '',
    imgs: []
  },
  APPLICAZIONI_MECCANICHE: {
    imgFolder: '',
    imgs: []
  },
  BAKELITE: {
    imgFolder: '',
    imgs: []
  },
  BOBINE: {
    imgFolder: '',
    imgs: []
  },

  COMPATTA: {
    imgFolder: '',
    imgs: []
  },
  ESPANSA: {
    imgFolder: '',
    imgs: []
  },
  ESTRATTIVA: {
    imgFolder: '',
    imgs: []
  },
  GOMMA_SILICONICA: {
    imgFolder: '',
    imgs: []
  },
  GOMME_E_MATERIALI_ISOLANTI: {
    imgFolder: '',
    imgs: []
  },
  INDUSTRIA_EDILE: {
    imgFolder: '',
    imgs: []
  },
  ISOLANTI_IN_FIBRA_DI_VETRO: {
    imgFolder: '',
    imgs: []
  },
  MATERIE_PLASTICHE: {
    imgFolder: '',
    imgs: []
  },
  METACRILATO: {
    imgFolder: '',
    imgs: []
  },
  NASTRI_TRASPORTATORI: {
    imgFolder: 'nastri-trasportatori',
    imgs: ['img_10.jpg', 'img_38.jpg', 'img_1.jpg', 'img_39.jpg', 'img_11.jpg', 'img_13.jpg', 'img_12.jpg', 'img_16.jpg', 'img_17.jpg', 'img_29.jpg', 'img_15.jpg', 'img_14.jpg', 'img_28.jpg', 'img_40.jpg', 'img_41.jpg', 'img_31.jpg', 'img_19.jpg', 'img_32.jpg', 'img_37.jpg', 'img_36.jpg', 'img_22.jpg', 'img_21.jpg']
  },
  POLIAMMIDI: {
    imgFolder: '',
    imgs: []
  },
  POLICARBONATO: {
    imgFolder: '',
    imgs: []
  },
  POLIETILENE: {
    imgFolder: '',
    imgs: []
  },
  POLIURETANO: {
    imgFolder: '',
    imgs: []
  },
  POLIURETANO_COMPATTO: {
    imgFolder: '',
    imgs: []
  },
  POLIURETANO_ESPANSO: {
    imgFolder: '',
    imgs: []
  },
  PTFE: {
    imgFolder: '',
    imgs: []
  },
  PTFE_UHMW: {
    imgFolder: 'tessutiPtfe',
    imgs: ['img_0.jpg']
  },
  PVC_ESPANSO: {
    imgFolder: '',
    imgs: []
  },
  RACLE_SERIGRAFIA: {
    imgFolder: '',
    imgs: []
  },
  SEMILAVORATI: {
    imgFolder: '',
    imgs: []
  },
  SEMILAVORATI_MP: {
    imgFolder: '',
    imgs: []
  },
  SGOMBRANEVE: {
    imgFolder: '',
    imgs: []
  },
  SILICONATI: {
    imgFolder: 'siliconati',
    imgs: ['img_1.jpg']
  },
  TAGLIERI_E_CEPPI: {
    imgFolder: '',
    imgs: []
  },
  TESSUTI: {
    imgFolder: 'tessuti',
    imgs: ['img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_4.jpg']
  },
  TESSUTI_PTFE: {
    imgFolder: '',
    imgs: []
  },
  VETRORESINA: {
    imgFolder: '',
    imgs: []
  }
};
