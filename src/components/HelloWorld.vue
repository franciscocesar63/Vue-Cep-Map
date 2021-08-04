<template>
  <div>
    <input
      type="text"
      v-bind:id="cep"
      placeholder="Digite seu Cep"
      v-on:input="cep = $event.target.value"
      v-on:keydown="receberCep()"
      class="input-cep"
    />
    <span v-show="status">
      <table style="width: 100%; border: 1px solid black">
        <tr>
          <th>CEP</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Complemento</th>
          <th>Cidade</th>
          <th>UF</th>
        </tr>
        <tr>
          <td>{{ dados.cep }}</td>
          <td>{{ dados.logradouro }}</td>
          <td>{{ dados.bairro }}</td>
          <td>{{ dados.complemento }}</td>
          <td>{{ dados.localidade }}</td>
          <td>{{ dados.uf }}</td>
        </tr>
      </table>
    </span>
    <br />
    <br />
    <div style="height: 500px; width: 100%">
      <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="withPopup">
          <l-popup>
            <div @click="innerClick">
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
                pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus
                semper metus id malesuada.
              </p>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      cep: "",
      dados: "",
      status: false,
      zoom: 14,
      center: latLng(-6.7693946, -38.2273253),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(-6.7693946, -38.2273253),

      currentZoom: 11.5,
      currentCenter: latLng(-6.7693946, -38.2273253),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      showMarker: false,
    };
  },

  methods: {
    receberCep() {
      if (this.cep.length > 7) {
        let url = "https://viacep.com.br/ws/" + this.cep + "/json/";
        console.log(url);
        this.$http
          .get(url)
          .then((res) => res.json())
          .then(
            (dados) => (this.dados = dados),
            (err) => console.log(err)
          );
        this.status = true;
        console.log(this.srcLink);
        this.atualizarMapaCep();
      } else {
        this.status = false;
        this.showMarker = false;
      }
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },

    atualizarMapaCep() {
      this.center = latLng(-6.7555255, -38.2247597);
      // this.currentCenter = latLng(-6.7555255, -38.2247597);
      this.withPopup = latLng(-6.7555255, -38.2247597);
      // this.showMarker = true;
    },
  },
};
</script>

<style scoped>
.input-cep {
  border-radius: 5px;
  width: 250px;
}
.wrapper {
  max-width: 400px;
  margin: 0 auto;
}
</style>
