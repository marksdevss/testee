<template>
    <div class="contact-section">
      <h2>Contatos</h2>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index">
          {{ contact.name }} - {{ contact.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        contacts: [
          { name: 'Ana Silva', email: 'ana.silva@example.com' },
          { name: 'Carlos Gomes', email: 'carlos.gomes@example.com' },
          { name: 'Fernanda Martins', email: 'fernanda.martins@example.com' },
          { name: 'Ricardo Souza', email: 'ricardo.souza@example.com' }
        ]
      };
    }
  }
  </script>
  
  <style>
  .contact-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .contact-section li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  </style>