<template>
  <div class="container">
    <div class="fotoPropri">
      <img src="../assets/eu.jpg" alt="Francisco César da Silva Filho" id="fotoPropria" />
    </div>

    <div id="titulo">
      <h1 id="subTitulo">Francisco César da Silva Filho</h1>
      <h4 id="subTitulo">Idade: 23 anos</h4>
      <h4 id="subTitulo"><img src="../assets/icons/email.png" class="icons"> franciscocesar888@gmail.com</h4>
      <h4 id="subTitulo"><img src="../assets/icons/casado.png" class="icons"> Casado</h4>
    </div>

    <div>
      <h1 style="text-align:left;">Sobre Mim</h1>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 80%;
}

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
#titulo{
  margin-left: 170px;
}

#subTitulo {
  margin-top: -15px;
  text-align: left;
  position: inherit;
}

.icons{

  width: 2%;
  vertical-align: middle;

}
</style>
