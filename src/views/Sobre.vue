<template>
  <div class="container">
    <div class="fotoPropri">
      <img
        src="../assets/eu.jpg"
        alt="Francisco César da Silva Filho"
        class="img-fluid"
        id="fotoPropria"
      />
    </div>

    <div id="titulo">
      <h1 id="subTitulo" class="fw-bold">Francisco César da Silva Filho</h1>
      <h5 id="subTitulo">Idade: 23 anos</h5>
      <h5 id="subTitulo">
        <img src="../assets/icons/email.png" class="icons" /> franciscocesar888@gmail.com
      </h5>
      <h5 id="subTitulo">
        <img src="../assets/icons/casado.png" class="icons" /> Casado
      </h5>
    </div>
    <div class="ta-left" style="margin-left: 20px">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" size="lg" />
      <a href="http://www.github.com/franciscocesar63" target="_blank">/franciscocesar63</a>
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'linkedin' }"
        size="lg"
      />
      <a href="http://www.linkedin.com/in/fcocesar63" target="_blank">/fcocesar63</a>
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'facebook' }"
        size="lg"
      />
      <a href="http://www.facebook.com/fcocesar63" target="_blank">/fcocesar63</a>
      <font-awesome-icon
        :icon="{ prefix: 'fab', iconName: 'instagram' }"
        size="lg"
      />
      <a href="http://www.instagram.com/fcocesar63" target="_blank">/fcocesar63</a>
    </div>

    <b-row class="mt-5">
      <b-col>
        <div>
          <h2 style="text-align: left" class="fw-bold">Formação Acadêmica</h2>
          <ul class="ta-left">
            <li class="curso">Bacharelado em Ciência da Computação</li>
          </ul>
        </div>
      </b-col>
      <b-col class="border-left">
        <h2 class="fw-bold">Skills</h2>
        <p style="font-style: italic; font-size: 15px">
          HTML5 / CSS3 / BOOTSTRAP JAVASCRIPT / PHP / DART / JAVA / HIBERNATE / PYTHON /
          VISUAL CODE NETBEANS / FLUTTER / GIT INTELLIJ IDEA / GITHUB GITLAB / TRELLO /
          MYSQL / POSTGRESQL / MONGO DB / FIREBASE / FTP / BLENDER / MATLAB / DATA SCIENCE
          / EXCEL AVANÇADO / VUE JS
        </p>
      </b-col>
    </b-row>

    <div>
      <h2 style="text-align: left" class="mt-5 fw-bold">
        Experiência Profissional (CLT)
      </h2>

      <b-row>
        <b-col>
          <b-list-group>
            <b-list-group-item button 
            @click="alterarDescricao(2)"
              >Sovis - Dez/2020 - <b>ATUAL</b></b-list-group-item
            >
            <b-list-group-item button @click="alterarDescricao(1)"
              >Ceneged - Set/2019 - Dez/2020</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col :style="mostrarDescricao ? 'border:solid;border-radius: 5px' : ''"
          ><span> {{ descricaoTrabalho }} </span></b-col
        >
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descricaoTrabalho: "",
      mostrarDescricao: false,
    };
  },

  methods: {
    alterarDescricao(id) {
      if (id == 1) {
        this.descricaoTrabalho =
          "ASSISTENTE ADMINISTRATIVO. RESPONSÁVEL PELA GESTÃO DE 15 EQUIPES DE CARROS E RELATÓRIOS DE FATURAMENTO. ALÉM DE RESPONSABILIDADES CORPORATIVAS.";
        this.mostrarDescricao = true;
      } else if (id == 2) {
        this.descricaoTrabalho =
          "SUPORTE DO SISTEMA MOBILE. ACOMPANHAMENTO DE FATURAMENTO DE APARELHOS, RELATÓRIOS QUINZENAIS" +
          " E MENSAIS DE FATURAMENTO. INTEGRAÇÃO HOME OFFICE, RESPONSABILIDADES IGUAIS MAS COM FUNÇÃO HOME OFFICE.";
        this.mostrarDescricao = true;
      } else {
        this.descricaoTrabalho = "";
        this.mostrarDescricao = false;
      }
    },
    goToPage(url){
      window.location.href = url;
    }
    
  },
};
</script>

<style scoped>
.container {
  width: 80%;
}
@media (min-width: 1000px) {
  .fotoPropria {
    width: 10%;
    float: left;
  }
  #fotoPropria {
    border-radius: 100%;
    float: left;
    width: 10%;
    margin-left: 20px;
  }
}
@media (max-width: 1000px) {
  .fotoPropria {
    width: 30%;
    float: left;
  }
  #fotoPropria {
    border-radius: 100%;
    float: left;
    width: 30%;
    margin-left: 20px;
  }
}
@media (max-width: 500px) {
  .fotoPropria {
    width: 50%;
    float: left;
  }
  #fotoPropria {
    border-radius: 100%;
    float: left;
    width: 50%;
    margin-left: 20px;
  }
}

#titulo {
  margin-left: 170px;
}

#subTitulo {
  margin-top: -10px;

  text-align: left;
  position: inherit;
}

.icons {
  width: 2%;
  vertical-align: middle;
}
.ta-left {
  text-align: left;
}

li.curso {
  list-style: none;
  font-size: 20px;
}

li.curso:before {
  content: "·";
  font-size: 120px;
  vertical-align: middle;
  line-height: 20px;
}
.border-left {
  border-left: 1px;
  border-left: 2px dotted;
  border-left: medium dashed green;
}
a {
  text-decoration: none;
  color: black;
  margin-right: 3px;
}
</style>
