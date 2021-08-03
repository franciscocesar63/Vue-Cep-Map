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

      <GmapMap
        :center="{ lat: 10, lng: 10 }"
        :zoom="2"
        map-type-id="terrain"
        style="width: 100%; height: 350px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GmapMap>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cep: "",
      dados: "",
      status: false,
      mascara: "",
      APIKey: "AIzaSyCPgSVnpR2dG-0RYLPqfCbkmGh9iOc_bRk",
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
      } else this.status = false;
    },
  },
};
</script>

<style scoped>
.input-cep {
  border-radius: 5px;
  width: 250px;
}
</style>
