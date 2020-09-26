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
