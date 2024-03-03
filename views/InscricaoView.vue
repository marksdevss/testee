<template>
    <div class="formulario">
      <h2>Formulário de Contato</h2>
      <form submit.prevent="enviarMensagem">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="nome">
        </div>
        <div>
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" v-model="mensagem"></textarea>
        </div>
        <button onclick="/src/views/HomeView.vue" type="submit">Enviar Mensagem</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        mensagem: ''
      };
    },
    methods: {
      enviarMensagem() {
        const mensagemEnviada = `Olá ${this.nome}, sua mensagem "${this.mensagem}" foi enviada com sucesso! obrigado!`;
        alert(mensagemEnviada); 
        this.nome = '';
        this.mensagem = '';
      }
    }
  }
  </script>

<style>
.formulario {

  max-width: 400px;
  margin: 0  0 22px ;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.formulario h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.formulario form {
  display: flex;
  flex-direction: column;
}

.formulario form div {
  margin-bottom: 20px;
}

.formulario label {
  font-weight: bold;
}

.formulario input[type="text"],
.formulario textarea {
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.formulario textarea {
  resize: vertical
}

.formulario button {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.formulario button:hover {
  background-color: #0056b3;
}

</style>