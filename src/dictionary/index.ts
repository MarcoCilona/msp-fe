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
    imgs: ['img_10.jpg', 'img_38.jpg', 'img_1.jpg', 'img_0.jpg', 'img_39.jpg', 'img_11.jpg', 'img_13.jpg', 'img_2.jpg', 'img_3.jpg', 'img_12.jpg', 'img_16.jpg', 'img_7.jpg', 'img_6.jpg', 'img_17.jpg', 'img_29.jpg', 'img_15.jpg', 'img_4.jpg', 'img_5.jpg', 'img_14.jpg', 'img_28.jpg', 'img_73.jpg', 'img_67.jpg', 'img_66.jpg', 'img_72.jpg', 'img_64.jpg', 'img_70.jpg', 'img_58.jpg', 'img_59.jpg', 'img_71.jpg', 'img_65.jpg', 'img_49.jpg', 'img_61.jpg', 'img_75.jpg', 'img_74.jpg', 'img_60.jpg', 'img_48.jpg', 'img_89.jpg', 'img_76.jpg', 'img_62.jpg', 'img_63.jpg', 'img_77.jpg', 'img_88.jpg', 'img_91.jpg', 'img_85.jpg', 'img_52.jpg', 'img_46.jpg', 'img_47.jpg', 'img_53.jpg', 'img_84.jpg', 'img_90.jpg', 'img_86.jpg', 'img_92.jpg', 'img_45.jpg', 'img_51.jpg', 'img_79.jpg', 'img_78.jpg', 'img_50.jpg', 'img_44.jpg', 'img_87.jpg', 'img_83.jpg', 'img_68.jpg', 'img_40.jpg', 'img_54.jpg', 'img_55.jpg', 'img_41.jpg', 'img_69.jpg', 'img_82.jpg', 'img_80.jpg', 'img_57.jpg', 'img_43.jpg', 'img_42.jpg', 'img_56.jpg', 'img_81.jpg', 'img_31.jpg', 'img_25.jpg', 'img_19.jpg', 'img_8.jpg', 'img_9.jpg', 'img_18.jpg', 'img_24.jpg', 'img_30.jpg', 'img_26.jpg', 'img_32.jpg', 'img_33.jpg', 'img_27.jpg', 'img_23.jpg', 'img_37.jpg', 'img_36.jpg', 'img_22.jpg', 'img_34.jpg', 'img_20.jpg', 'img_21.jpg', 'img_35.jpg']
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
    imgs: ['img_1.jpg', 'img_0.jpg']
  },
  TAGLIERI_E_CEPPI: {
    imgFolder: '',
    imgs: []
  },
  TESSUTI: {
    imgFolder: 'tessuti',
    imgs: ['img_1.jpg', 'img_0.jpg', 'img_2.jpg', 'img_3.jpg', 'img_4.jpg']
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
