<template lang="pug">
.about
  img(src='').about-image
  p.about-paragraph
    | La
    strong.mh-1 MASPE
    | è stata fondata nel 1974 dall’Ingegner Giovanni Demurtas e sua moglie Maria Rosa.
  p.about-paragraph
    | Entrambi avevano lavorato in aziende che producevano a ciclo contino ed erano ben coscienti dell’importanza di poter disporre di componenti/ricambi affidabili che offrissero valide soluzioni tecniche e consentissero di evitare il più possibile i costosissimi fermo macchina.
    | Questo li ha spinti ad individuare, e quindi a commercializzare, prodotti di qualità oltre che innovativi. Da qui anche la scelta del nome aziendale: MASPE cioè
    strong.ml-1 MA
    |teriali
    strong.ml-1 SPE
    |ciali.
  p.about-paragraph
    | Nel 1985, alla morte dell’Ingegner Demurtas, la ditta si trasforma in MASPE s.a.s. con l’ingresso dei figli Laura e Paolo.
  p.about-paragraph
    | Nel 1986 l’azienda si trasferisce nella sede attuale.
  p.about-paragraph
    | La politica aziendale continua a puntare sull’offerta di
    strong.ml-1 prodotti di qualità
    |, costante nel tempo, e sull’integrazione di nuovi prodotti pensati per ampliare o migliorare la gamma di applicazioni. Per questo motivo abbiamo sempre cercato un rapporto di collaborazione continuativo con i ns. fornitori che in alcuni casi ci forniscono da 40/45 anni garantendo qualità e innovazione.
    | Anche con i ns. clienti abbiamo sempre cercato di essere collaborativi e di supporto perché riteniamo che il reciproco ascolto possa agevolare la soluzione delle eventuali problematiche tecniche da affrontare con soddisfazione da ambo le parti.
  p.mt-3.about-paragraph
    | Il PHILAN®, un poliuretano particolarmente resistente ad usura ed abrasione, il Lofrene, polietilene HD ad alto ed altissimo peso molecolare, i tessuti di vetro teflonati e siliconati sono i prodotti principali trattati dalla MASPE la cui gamma comprende anche policarbonato, metacrilato, gomma di silicone, gomma alimentare, gomma mousse, spray e grasso al silicone, racle per serigrafia, isolanti termici in fibra di vetro, tela e carta bakelite, nastri per avvolgimento cilindri.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
$spacing: 20px;

.about {
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: $spacing;

  &-image {
    height: 250px;
    margin-bottom: $spacing;
    width: 100%;
  }
  &-paragraph {
    text-align: left;
  }
}

@include respond-above(sm) {
  .about {
    &-image {
      float: left;
      margin-bottom: 0px;
      margin-right: $spacing;
      width: 250px;
    }
  }
}
</style>
